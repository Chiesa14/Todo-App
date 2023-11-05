import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';
export declare class TodoService {
    private todoRepository;
    constructor(todoRepository: Repository<Todo>);
    findAll(): Promise<Todo[]>;
    create(title: string): Promise<Todo>;
    update(id: number, isCompleted: boolean): Promise<Todo>;
    delete(id: number): Promise<void>;
}
