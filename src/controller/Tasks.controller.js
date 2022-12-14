
import { v4 as uuid } from 'uuid';
import { formatDate } from "../utils/utils.js";
import { create } from '../repositories/CreateTask.repo.js'
import { listAllTasks, listByIdTask } from '../repositories/ListTaks.repo.js'
import { update } from '../repositories/UpdateTask.repo.js'

async function createTask(title, description) {
    if (title == null || title === "") {
        return { error: '400', message: 'Title is empty' }
    } else if (description == null || description === "") {
        return { error: '400', message: 'Description is empty' }
    }
    let taskObj = {
        id: uuid(),
        title,
        status: 'todo',
        description,
        created_at: formatDate(new Date().toISOString()),
        updated_at: '',
    }
    const creationResult = create(taskObj)
    if (creationResult) {
        return taskObj
    }
}
async function listAll() {
    const listResult = listAllTasks()
    if (listResult) {
        return listResult
    }
}
async function listById(id) {
    const listByIdResult = listByIdTask(id)
    if (listByIdResult) {
        return listByIdResult
    }
}
async function updateById(data) {
    const updateResult = await update(data)
    if (updateResult) {
        return updateResult
    }
    return "Error to update task"
}

export { createTask, listAll, updateById, listById }