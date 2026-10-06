import {getDBConnection} from '@/app/lip/db'

export async function getCategories() {
    const db = await getDBConnection();
    try {
        return await db.all(`
            SELECT * FROM categories
        `)
    } finally {
        await db.close()
    }
}