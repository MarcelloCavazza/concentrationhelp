import { promises } from "node:fs";

async function listAllTasks() {
    try {
        const tasks = JSON.parse(await promises.readFile('./src/db/database.json'))
        return tasks
    } catch (error) {
        return { status: 'error', message: error }
    }
}

export { listAllTasks }