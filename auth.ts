import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { User } from './app/lib/models/members';
import bcrypt from 'bcrypt';
import { prismaClient } from './app/lib/prisma/client';

async function getUser(email: string): Promise<User | undefined> {
    try {
        const user = await prismaClient.users.findFirstOrThrow({
            where: {
                email
            }
        });
        return {
            id: user.id,
            email: user.email,
            name: user.name,
            lastName: user.last_name,
            password: user.password,
            profileImage: ''
        };
    } catch (error) {
        throw new Error('Failed to fetch user.');
    }
}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await getUser(email);
                    console.log(user);
                    if (!user) return null;
                    const passwordsMatch = await bcrypt.compare(password, user.password);

                    if (passwordsMatch) return user;
                }

                return null;
            },
        }),
    ],
});