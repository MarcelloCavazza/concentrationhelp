import { existsSync, mkdirSync, promises } from "node:fs";

let tasks = null

async function create(task) {
    try {
        if (!existsSync('./src/db/')) {
            mkdirSync('./src/db/')
        }
        if (!existsSync('./src/db/database.json')) {
            promises.writeFile('./src/db/database.json', JSON.stringify([task]))
        }
        tasks = JSON.parse(await promises.readFile('./src/db/database.json'))
        tasks.push(task)
        promises.writeFile('./src/db/database.json', JSON.stringify(tasks))
    } catch (e) {
        return false
    }

    return true
}

export { create }