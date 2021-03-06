import React from 'react'


const AuthorItem = ({author}) => {
    return (
        <tr>
            <td>
                {author.first_name}
            </td>
            <td>
                {author.last_name}
            </td>
            <td>
                {author.email}
            </td>
        </tr>
    )
}

const AuthorList = ({authors}) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>
                        Имя
                    </th>
                    <th>
                        Фамилия
                    </th>
                    <th>
                        Email
                    </th>
                </tr>
                {authors.map((author) => <AuthorItem author={author} key={author.uid} />)}
            </tbody>
        </table>
    )
}

export default AuthorList;
