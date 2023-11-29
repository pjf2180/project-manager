const { db } = require('@vercel/postgres');

const { PROJECTS } = require('../app/lib/devData/projects');
const { USERS } = require('../app/lib/devData/users');
const { PROJECT_MEMBERS } = require('../app/lib/devData/projectMembers');
const { TASKS } = require('../app/lib/devData/tasks');

async function seedProjects(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS projects (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(50) NOT NULL
      );
    `;

    console.log(`Created "projects" table`);

    // Insert data into the "projects" table
    const insertedProjects = await Promise.all(
      PROJECTS.map(async (project) => {
        // const hashedPassword = await bcrypt.hash(project.password, 10);
        return client.sql`
        INSERT INTO projects (id, name)
        VALUES (${project.id}, ${project.name})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedProjects.length} projects`);

    return {
      createTable,
      insertedProjects
      // users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding projects:', error);
    throw error;
  }
}

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "invoices" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    email VARCHAR(50) NOT NULL,
    name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    profile_pic VARCHAR(255) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

    console.log(`Created "users" table`);

    // Insert data into the "invoices" table
    const insertedUsers = await Promise.all(
      USERS.map(
        (user) => client.sql`
        INSERT INTO users (id, email, name, last_name)
        VALUES (${user.id}, ${user.name}, ${user.lastName}, ${user.email})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding invoices:', error);
    throw error;
  }
}

async function seedProjectMembers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createMembersTable = await client.sql`
      CREATE TABLE IF NOT EXISTS projectMembers (
        project_id UUID REFERENCES projects(id),
        user_id UUID REFERENCES users(id),
        PRIMARY KEY (project_id, user_id) 
      );
    `;
    console.log('Created members table');
    const insertedMembers = await Promise.all(PROJECT_MEMBERS.map((member) => {
      return client.sql`
      INSERT INTO projectMembers (project_id, user_id) VALUES (${member.projectId}, ${member.userId});
      `;
    }));
    console.log(`Seeded ${insertedMembers.length} members`);

    return {
      createMembersTable,
      insertedMembers
    }
  } catch (error) {
    console.error('Could not correctly seed project members', error);
    throw error;
  }
}

async function seedTasks(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "customers" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TYPE status AS ENUM ('open', 'progress', 'closed');
      CREATE TABLE IF NOT EXISTS tasks (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name  VARCHAR(50) NOT NULL,
        task_status status NOT NULL,
        description VARCHAR(1024) NOT NULL,
        time_estimate int NULL,
        due_date DATE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        project_id UUID REFERENCES projects(id)
      );
    `;

    console.log(`Created "tasks" table`);

    // Insert data into the "tasks" table
    const insertedTasks = await Promise.all(
      TASKS.map(
        (task) => client.sql`
        INSERT INTO tasks (id, name, task_status, description, time_estimate, due_date, project_id)
        VALUES (${task.id}, ${task.name}, ${task.status}, ${task.description}, ${task.timeEstimate}, ${task.dueDate}, ${task.projectId})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    const taskMembers = TASKS.map(task => {
      const { members } = task;
      return members.map(memberId => ({ memberId, task }));
    }).reduce((a, c) => [...a, ...c], []);


    const insertedTaskMembers = await Promise.all(
      taskMembers.map(({ memberId, task }) => seedTaskMember(client, task.id, memberId ))
    );
    console.log(`Seeded ${insertedTasks.length} tasks`);

    return {
      createTable,
      insertedTaskMembers,
    };
  } catch (error) {
    console.error('Error seeding tasks:', error);
    throw error;
  }
}

async function seedTaskMember(client, taskId, userId) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS taskMembers (
        task_id UUID REFERENCES tasks(id),
        user_id UUID REFERENCES users(id),
        PRIMARY KEY (task_id, user_id) 
      );
    `;
    const insertedMember = await client.sql`
      INSERT INTO taskMembers (task_id, user_id) VALUES (${taskId}, ${userId})
    `;
    return {
      createTable,
      insertedMember
    }
  } catch (error) {
    console.error('Error seeding task member:',taskId, userId, error);
    throw error;
  }
}

async function dropTables(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const dropMembersTable = await client.sql`
    DROP TABLE IF EXISTS projectMembers;
    `;
    const dropTaskMembersTable = await client.sql`
    DROP TABLE IF EXISTS taskMembers;
    `;
    const dropTasksTable = await client.sql`
    DROP TABLE IF EXISTS tasks;
    `;
    const dropProjectsTable = await client.sql`
    DROP TABLE IF EXISTS projects;
    `;
    const dropUsersTable = await client.sql`
    DROP TABLE IF EXISTS users;
    `;

    const dropStatusType = await client.sql`DROP TYPE IF EXISTS status;
    `;

    return {
      dropUsersTable,
      dropTaskMembersTable,
      dropProjectsTable,
      dropMembersTable,
      dropTasksTable,
      dropStatusType
    }
  } catch (error) {
    console.error('Error dropping one or more tables:', error);
  }
}
async function main() {
  const client = await db.connect();
  await dropTables(client);
  await seedProjects(client);
  await seedUsers(client);
  await seedProjectMembers(client);
  await seedTasks(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
