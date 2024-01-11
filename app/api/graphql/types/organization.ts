import prisma from "../../../lib/prisma/client";
import { builder } from "../builder";

builder.prismaObject('organizations', {
    fields: (t)=> ({
        id: t.exposeID('id'),
        name: t.exposeString('name'),
    })
});

builder.queryField("organizations", (t) =>
// 2. 
  t.prismaField({
    // 3. 
    type: ['organizations'],
    // 4. 
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.organizations.findMany({ ...query })
  })
)