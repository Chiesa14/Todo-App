import { Repository } from 'typeorm';
import { Todo } from './todo.entinty';
export declare class TodoService {
    private todoRepository;
    constructor(todoRepository: Repository<Todo>);
    findAll(): Promise<Todo[]>;
    create(title: string): any;
    update(id: number, isCompleted: boolean): Promise<Todo>;
    delete(id: number): Promise<void>;
}
