import React from 'react'
import {Link} from 'react-router-dom'


const HeaderMenu = () => {
    return (
        <header>
            <ul>
                <li>
                    <Link to='/authors'>Авторы</Link>
                </li>
                <li>
                    <Link to='/projects'>Проекты</Link>
                </li>
                <li>
                    <Link to='/todos'>Задания</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
            </ul>
        </header>
    )
}

export default HeaderMenu;