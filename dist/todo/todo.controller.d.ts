import { TodoService } from './todo.service';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    findAll(): Promise<import("./todo.entinty").Todo[]>;
    create(title: string): any;
    update(id: number, isCompleted: boolean): Promise<import("./todo.entinty").Todo>;
    delete(id: number): Promise<void>;
}
