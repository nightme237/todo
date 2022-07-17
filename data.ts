import e from "express";

export interface Project {
    projectName: string,
    projectId: number,
    projectChecklists: Checklist[],
}

export interface Checklist {
    checklistName: string,
    checklistId: number,
    checklistTodos: Todo[]
}

export interface Todo {
    todoId: number,
    todoDescription: string,
    todoCross: boolean,
}

export interface Data {
    projects: Project[],
    counter: 
    {
        project: number,
        checklist: number,
        todo: number,
    }
}

let data: Data = {
    projects: [],
    counter:
    {
        project: 0,
        checklist: 0,
        todo: 0,
    },
}

export function getData() {
    return data;
}

export function setData(argData: Data) {
    data = argData;
    return {};
}