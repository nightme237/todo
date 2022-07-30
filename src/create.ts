import { getData, setData } from './data';
import { Project, Checklist, Todo } from './data';

export function createProject(name: string) {
    if (name.length < 1 || name.length > 20) {
        return { error: "name is too long or too short"};
    }
    let store = getData();
    const project: Project = 
    {
        projectName: name,
        projectId: store.counter.project,
        projectChecklists: [],
    };

    store.counter.project++;
    store.projects.push(project);
    setData(store);

    return { projectId: project.projectId };
}

export function createChecklist(projectId: number, name: string) {
    if (name.length < 1 || name.length > 20) {
        return { error: "name is too long or too short"};
    }
    let store = getData();
    const checklist: Checklist = 
    {
        checklistName: name,
        checklistId: store.counter.checklist,
        checklistTodos: [],
    }

    store.counter.checklist++;

    let projectFound = false;

    for (const project of store.projects) {
        if (project.projectId == projectId ) {
            project.projectChecklists.push(checklist);
            projectFound = true;
        }
    }

    if (!projectFound) return { error: "project not found"};
    setData(store);

    return { checklistId: checklist.checklistId };
}

export function createTodo(checklistId: number, task: string) {
    let store = getData();
    const todo: Todo = 
    {
        todoDescription: task,
        todoId: store.counter.todo,
        todoCross: false,
    }

    store.counter.todo++;

    let checklistFound = false;
    for (const project of store.projects) {
        for (const checklist of project.projectChecklists) {
            if (checklist.checklistId === checklistId) {
                checklist.checklistTodos.push(todo);
                checklistFound = true;
            }
        }
    }

    if (!checklistFound) return { error: "checklist not found" };
    setData(store);

    return { todoId: todo.todoId };
}