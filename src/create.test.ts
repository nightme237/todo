import { createProject, createChecklist, createTodo } from './create';
import { viewAllProjects, viewProject } from './view';
import { clearData } from './other';

import request from 'sync-request';

let projectId1: number;
let checklistId1: number;

describe('Testing createProject', () => {

	beforeEach(() => {
		clearData();
	})

	test('Testing name more than 20 characters', () => {
		expect(createProject("thisprojectnameiswayover20characters")).toStrictEqual({ error: expect.any(String) });
	})

	test('Testing name with an empty string', () => {
		expect(createProject("")).toStrictEqual({ error: expect.any(String) });
	})

	test('Testing valid input for success', () => {
		expect(createProject("tproject1")).toStrictEqual({ projectId: expect.any(Number) });
	})

})

describe('Testing createChecklist', () => {

	beforeEach(() => {
		clearData();
    projectId1 = createProject("project1").projectId;
	})

	test('Testing name more than 20 characters', () => {
		expect(createChecklist(projectId1, "thisnameiswaymorethan20characters")).toStrictEqual({ error: expect.any(String) });
	})
  
  test('Testing name with empty string', () => {
		expect(createChecklist(projectId1, "")).toStrictEqual({ error: expect.any(String) });
	})

  test('Testing with invalid projectId', () => {
		expect(createChecklist(-1, "checklist1")).toStrictEqual({ error: expect.any(String) });
	})

  test('Testing with valid input for success', () => {
		expect(createChecklist(projectId1, "checklist1")).toStrictEqual({ checklistId: expect.any(Number) });
	})

})

describe('Testing createTodo', () => {

	beforeEach(() => {
		clearData();
    projectId1 = createProject("project1").projectId;
    checklistId1 = createChecklist(projectId1, "checklist1").checklistId;
	})

  test('Testing invalid checklistId', () => {
    expect(createTodo(-1, "wash car")).toStrictEqual({ error: expect.any(String) });
  })

  test('Testing with valid input for success', () => {
    expect(createTodo(checklistId1, "wash car")).toStrictEqual({ todoId: expect.any(Number) });
  })

})