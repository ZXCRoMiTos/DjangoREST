import React from 'react';
import './App.css';
import StartPage from './components/StartPage.js'
import AuthorList from './components/Author.js'
import ProjectList from './components/Project.js'
import ToDoList from './components/ToDo.js'
import HeaderMenu from './components/Menu.js'
import Footer from './components/Footer.js'
import axios from 'axios'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            'authors': [],
            'projects': [],
            'todos': []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/authors/')
            .then(response => {
                const authors = response.data.results

                    this.setState(
                       {
                           'authors': authors
                       }
                    )
            }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/projects/')
            .then(response => {
                const projects = response.data.results

                    this.setState(
                       {
                           'projects': projects
                       }
                    )
            }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/todo/')
            .then(response => {
                const todos = response.data.results

                    this.setState(
                       {
                           'todos': todos
                       }
                    )
            }).catch(error => console.log(error))

}
    render() {
        return (
        <div className="container">
            <BrowserRouter>
                <HeaderMenu />
                <Routes>
                    <Route path='/' element={<StartPage />} />
                    <Route path='/authors' element={<AuthorList authors={this.state.authors} />} />
                    <Route path='/projects' element={<ProjectList projects={this.state.projects} />} />
                    <Route path='/todos' element={<ToDoList todos={this.state.todos} />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
        )
    }
}

export default App;