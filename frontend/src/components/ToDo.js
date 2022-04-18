import React from 'react'


const ToDoItem = ({todo}) => {
    return (
        <tr>
            <td>
                {todo.project[0].name}
            </td>
            <td>
                {todo.text}
            </td>
            <td>
                {todo.is_active ? <div>В процессе</div> : <div>Закрыто</div>}
            </td>
        </tr>
    )
}

const ToDoList = ({todos}) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>
                        Проект
                    </th>
                    <th>
                        Задание
                    </th>
                    <th>
                        Состояние
                    </th>
                </tr>
                {todos.map((todo) => <ToDoItem todo={todo} key={todo.uid} />)}
            </tbody>
        </table>
    )
}

export default ToDoList;
