import express from "express";
import { createTask, listAll, updateById } from "../controller/Tasks.controller.js";
import { zenApi } from "../data/hooks/services/APIcall.js";

const task = express.Router();

task.get("/status", (req, res) => {
  console.log("Status ok");
});

task.post("/createtask", async (req, res) => {
  const { title, description } = req.body;
  if (title == null || title === "") {
    return res.send('Missing title task info')
  } else if (description == null || description === "") {
    return res.send('Missing description task info')
  }
  const reponse = await createTask(title, description)
  const dataZen = await zenApi.get('/')

  const finalResponse = {
    taskResponse: reponse,
    motivationalTask: `Here is a texto to keep you motivated:\r\n${dataZen.data[0].q}\r\nFrom: ${dataZen.data[0].a}`
  }
  return res.send(finalResponse)
});

task.get("/listAll", async (req, res) => {
  const reponse = await listAll()
  return res.send(reponse)
});

task.patch("/update/:id", async (req, res) => {

  const { id } = req.params
  const { title, description, status } = req.body

  let dataToUpdate = {
    id: id,
    title: title,
    description: description,
    status: status
  }
  const reponse = await updateById(dataToUpdate)
  return res.send(reponse)
});

export default task 