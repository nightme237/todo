import { getData, setData } from './data';
import { Project, Checklist, Todo } from './data';

export function createProject(name: string) {
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
    let store = getData();
    const checklist: Checklist = 
    {
        checklistName: name,
        checklistId: store.counter.checklist,
        checklistTodos: [],
    }

    store.counter.checklist++;

    for (const project of store.projects) {
        if (project.projectId === projectId) {
            project.projectChecklists.push(checklist);
        }
    }

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

    for (const project of store.projects) {
        for (const checklist of project.projectChecklists) {
            if (checklist.checklistId === checklistId) {
                checklist.checklistTodos.push(todo);
            }
        }
    }

    setData(store);

    return { todoId: todo.todoId };
}