import { React, useState } from 'react'
import styles from './singleTodo.module.css';

//Each todo item in the todos list
function SingleTodo({ todo, setTodos, newTitle, setNewTitle }) {
    const [error, setError] = useState(null);
    const [editingId, setEditingId] = useState(null);

    //Delete the todo from DB and display.
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/todos/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
        } catch (err) {
            setError(err.message);
        }
    };

    //update the Tilte field in of a Todo in db and state.
    const handleUpdateTodo = async (updatedTodo) => {
        try {
            const response = await fetch(`http://localhost:3000/todos/${updatedTodo.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedTodo),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const updatedResponseTodo = await response.json();
            setTodos((prevTodos) =>
                prevTodos.map((todo) => (todo.id === updatedResponseTodo.id ? updatedResponseTodo : todo))
            );

        } catch (err) {
            setError(err.message);
        }
    };

    //change the todo to an editing mode.Show V/X btns.
    const handleStartEdit = (todo) => {
        setEditingId(todo.id);
        setNewTitle(todo.title);
    };

    //Do not save the changes in the todo. Back to a regular display.
    const handleCancelEdit = () => {
        setEditingId(null);
        setNewTitle("");
    };

    //Save the changes. Back to a regular display.
    const handleSaveEdit = (todo) => {
        const updatedTodo = { ...todo, title: newTitle };
        handleUpdateTodo(updatedTodo);
        setEditingId(null);
        setNewTitle("");
    };

    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <div className={styles.todoText}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleUpdateTodo({ ...todo, completed: !todo.completed })}
                    className={styles.checkbox}
                />

                {/*input for edinting the todo title*/}
                {editingId === todo.id ? (
                    <>
                        <textarea
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            className={styles.input}
                            rows={1} /* קובע גובה התחלתי */
                        ></textarea>
                    </>
                ) : (
                    <span>
                        #{todo.id}: {typeof todo.title === "string" ? todo.title : JSON.stringify(todo.title)}
                    </span>

                )}

            </div>

            {/*editing btns*/}
            <div className={styles.todoActions}>
                {editingId !== todo.id && (
                    <button onClick={() => handleStartEdit(todo)}>
                        <img src="/img/edit.png" alt="Edit" />
                    </button>
                )}
                {editingId === todo.id && (
                    <>
                        <button onClick={() => handleSaveEdit(todo)}>
                            <img src="/img/checkmark.png" alt="Save" />
                        </button>
                        <button onClick={handleCancelEdit}>
                            <img src="/img/cancel.png" alt="Cancel" />
                        </button>
                    </>
                )}

                {/*delete todo btn*/}
                {editingId !== todo.id && (
                    <button onClick={() => handleDelete(todo.id)}>
                        <img src="/img/trash.png" alt="Delete" />
                    </button>
                )}
            </div>
        </>
    )
}

export default SingleTodo