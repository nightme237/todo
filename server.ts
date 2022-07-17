import express from 'express';

import { createProject, createChecklist, createTodo } from './create';
import { viewAllProjects, viewProject } from './view';

const app = express();
app.use(express.json());

const PORT = 3000;
const HOST = "localhost";

app.get('/echo', (req, res) => {
    return res.json("hello world!");
});

/* createProject */
app.post('/create/project', (req, res) => {
    const name = req.body.name as string;
    return res.json(createProject(name));
})

/* createChecklist */
app.post('/create/checklist', (req, res) => {
    const name = req.body.name as string;
    const id = req.body.projectId as number;
    return res.json(createChecklist(id, name));
})

/* createTodo */
app.post('/create/todo', (req, res) => {
    const name = req.body.name as string;
    const id = req.body.checklistId as number;
    return res.json(createChecklist(id, name));
})

/* viewAllProjects */
app.get('/view/allprojects', (req, res) => {
    return res.json(viewAllProjects());
})

/* viewProject */
app.get('/view/project', (req, res) => {
    const id = parseInt(req.query.projectId as string);
    return res.json(viewProject(id));
})

app.listen(PORT, HOST, () => {
    console.log(`Server listening on port ${PORT} at ${HOST}`)
})