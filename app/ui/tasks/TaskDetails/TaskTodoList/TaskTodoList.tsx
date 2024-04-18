import { TaskTodo } from "@/app/lib/models/tasks";

interface TaskTodoListProps {
    todos: TaskTodo[];
    onChange: (updatedTodos: TaskTodo[],) => void
}
export function TaskTodoList(props: TaskTodoListProps) {
    const { todos, onChange } = props;
    const handleTodoChange = (idx: number, checked: boolean) => {
        const newList = [...todos];
        newList[idx].completed = checked;
        onChange(newList);
    }

    return <>
        <div className="mb-5 text-sm text-secondary">TODO</div>
        <ul>
            {
                todos.map((todo: TaskTodo, todoIdx: number) => {
                    return (<li className="text-sm text-secondary" key={`todo-${todo.text}`} >
                        <input
                            className="mr-3"
                            type="checkbox"
                            id={`todo-${todo.text}`}
                            checked={todo.completed}
                            onChange={(e) => handleTodoChange(todoIdx, e.target.checked)} />
                        <label
                            htmlFor={`todo-${todo.text}`}>{todo.text}
                        </label>
                    </li>)
                })
            }
        </ul>
    </>
}