import { existsSync, mkdirSync, promises } from "node:fs";

import { formatDate } from "../utils/utils.js";
let tasks = null

async function update(taskData) {
    try {
        const allowedStatus = [
            'todo',
            'doing',
            'done'
        ]
        if (!existsSync('./src/db/database.json')) {
            return false
        }
        let taskIndex = -1
        tasks = JSON.parse(await promises.readFile('./src/db/database.json'))
        tasks.forEach(task => {
            taskIndex++
            if (task.id == taskData.id) {
                task.updated_at = formatDate(new Date().toISOString())
                if (taskData.title != null) {
                    task.title = taskData.title
                }
                if (taskData.description != null) {
                    task.description = taskData.description
                }
            }
        });
        if (taskData.status != null) {
            if (allowedStatus.indexOf(taskData.status) > -1) {
                tasks[taskIndex].status = taskData.status
            } else {
                return false
            }
        }
        promises.writeFile('./src/db/database.json', JSON.stringify(tasks))
        return tasks[taskIndex]
    } catch (e) {
        return false
    }
}

export { update }