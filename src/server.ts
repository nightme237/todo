import express, { response } from 'express';
import path from 'path';

import { createProject, createChecklist, createTodo } from './create';
import { viewAllProjects, viewProject, viewMessages } from './view';
import { clearData } from './other';
import { messageSend } from './message';

const app = express();
app.use(express.json());

export const PORT = 8080;
export const HOST = "192.168.31.86";

app.use("/home", express.static(__dirname + '/public'));

/* root directory */
app.get('/', (req, res) => {
    return res.json("Welcome to Jayson's website!\r\nRight now its a bit barebones but the frontend is coming soon!\r\n")
});

/* test */
app.get('/html', (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
})

/* echo */
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

/* viewMessages (for fun) */
app.get('/view/messages', (req, res) => {
    return res.json(viewMessages());
})

/* messageSend (for fun) */
app.post('/message/send', (req, res) => {
    const message = req.body.message as string;
    return res.json(messageSend(message));
})

app.delete('/clear', (req,res) => {
    return res.json(clearData());
})

app.listen(PORT, HOST, () => {
    console.log(`Server listening on port ${PORT} at ${HOST}`)
})