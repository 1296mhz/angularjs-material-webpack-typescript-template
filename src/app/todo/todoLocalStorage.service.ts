'use strict';
import { ITask, ITodoStorage } from "./todo.interfaces";
/**
 * Services that persists and retrieves TODOs from localStorage.
 */
export class TodoStorage implements ITodoStorage {

    STORAGE_ID = 'todos-angularjs-typescript';

    get (): ITask[] {
        return JSON.parse(localStorage.getItem(this.STORAGE_ID) || '[]');
    }

    put(todos: ITask[]) {
        localStorage.setItem(this.STORAGE_ID, JSON.stringify(todos));
    }
}