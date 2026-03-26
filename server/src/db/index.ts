import { Client } from 'pg'

export async function initializeDb() {
	await makeDbAction(async (client: Client) => {
		await client.query(`  
      CREATE TABLE IF NOT EXISTS users (id int, username text, password text);
      `)
	})
}

export async function insertUser(username: string, password: string) {
	await makeDbAction(async (client: Client) => {
		await client.query(
			`  
      INSERT INTO users(id, username, password) VALUES (1, $1, $2);
      `,
			[username, password]
		)
	})
}

export async function getUserByUsername(username: string) {
	return await makeDbAction<{ username: string; password: string }>(
		async (client: Client) => {
			const result = await client.query(
				`  
      SELECT * FROM users WHERE username=$1;
      `,
				[username]
			)
			return result.rows[0]
		}
	)
}

async function makeDbAction<T>(action: (client: Client) => Promise<T>) {
	const c = await new Client({
		user: process.env.POSTGRES_USER,
		password: process.env.POSTGRES_PASSWORD,
		database: process.env.POSTGRES_DB,
		host: process.env.POSTGRES_HOST,
	}).connect()
	try {
		return await action(c)
	} finally {
		c.end()
	}
}
