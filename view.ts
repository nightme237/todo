import { getData, setData } from './data';

export function viewAllProjects() {
    let store = getData();
    return { projects: store.projects, };
}

export function viewProject(projectId: number) {
    let store = getData();
    for (const project of store.projects) {
        if (project.projectId === projectId) {
            return { project: project };
        }
    }

    return { error: 'Project not found!' };
}