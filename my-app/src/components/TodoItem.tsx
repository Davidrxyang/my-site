interface TodoItemProps {
    text: string;
    index: number;
    remove: (index: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({text, index, remove}) => {

    return (
        <div>
            <h1>{text}</h1>
            <button onClick = {() => remove(index)}> complete </button>
        </div>
    );
};

export default TodoItem;