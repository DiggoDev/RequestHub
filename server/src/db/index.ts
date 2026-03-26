import { prisma } from './lib/prisma'

export async function initializeDb() {}

export async function createNewUser(email: string, password: string) {
	const createdDate = new Date()

	const user = await prisma.user.create({
		data: {
			email,
			password,
			createdAt: createdDate,
		},
		include: {
			sessions: true,
		},
	})

	return user.id
}

export async function getUserById(id: string) {
	const user = await prisma.user.findUnique({ where: { id } })
	return user
}

export async function getUserByEmail(email: string) {
	const user = await prisma.user.findFirst({
		where: {
			email,
		},
	})
	return user
}
