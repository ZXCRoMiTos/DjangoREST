import React from 'react'


const ProjectItem = ({project}) => {
    return (
        <tr>
            <td>
                {project.name}
            </td>
            <td>
                {project.link_GIT}
            </td>
        </tr>
    )
}

const ProjectList = ({projects}) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>
                        Название
                    </th>
                    <th>
                        Ссылка на GIT
                    </th>
                </tr>
                {projects.map((project) => <ProjectItem project={project} key={project.uid} />)}
            </tbody>
        </table>
    )
}

export default ProjectList;
