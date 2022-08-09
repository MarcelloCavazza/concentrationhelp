import { promises } from "node:fs";

async function listAllTasks() {
    try {
        const tasks = JSON.parse(await promises.readFile('./src/db/database.json'))
        const response = {
            amount: tasks.length,
            content: tasks
        }
        return response
    } catch (error) {
        return { status: 'error', message: error }
    }
}
async function listByIdTask(id) {
    try {
        let listData = null
        const tasks = JSON.parse(await promises.readFile('./src/db/database.json'))
        tasks.forEach(task => {
            if (task.id == id) {
                listData = task
            }
        });
        return listData
    } catch (error) {
        return { status: 'error', message: error }
    }
}

export { listAllTasks, listByIdTask }