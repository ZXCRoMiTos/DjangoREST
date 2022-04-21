import React from 'react';
import './App.css';
import StartPage from './components/StartPage.js'
import AuthorList from './components/Author.js'
import ProjectList from './components/Project.js'
import ToDoList from './components/ToDo.js'
import LoginForm from './components/Auth.js'
import HeaderMenu from './components/Menu.js'
import Footer from './components/Footer.js'
import axios from 'axios'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cookies from 'universal-cookie'
import {Link} from 'react-router-dom'


class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            'authors': [],
            'projects': [],
            'todos': [],
            'token': ''
        }
    }

    set_cookie(token) {
        const cookies = new Cookies()
        cookies.set('token', token)
        this.setState({'token': token}, () => this.load_data())
    }

    is_authenticated() {
        return this.state.token != ''
    }

    logout() {
        this.set_cookie('')
    }

    get_token_from_storage() {
        const cookies = new Cookies()
        const token = cookies.get('token')
        this.setState({'token': token}, () => this.load_data())
    }

    get_headers() {
        let headers = {
            'Content-Type': 'application.json'
        }
        if (this.is_authenticated()) {
            headers['Authorization'] = 'Token' + this.state.token
        }
        return headers
    }

    get_token(username, password) {
    axios.post('http://127.0.0.1:8000/api-token-auth/', {username: username, password: password})
        .then(response => {
            this.set_cookie(response.data['token'])
            console.log(response)
        }).catch(error => alert('Неверный пароль или логин'))
    }

    load_data() {
        const headers = this.get_headers()
        axios.get('http://127.0.0.1:8000/api/authors/', {headers})
            .then(response => {
                const authors = response.data.results
                    this.setState({'authors': authors})
            }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/projects/', {headers})
            .then(response => {
                const projects = response.data.results
                    this.setState({'projects': projects})
            }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/todo/', {headers})
            .then(response => {
                const todos = response.data.results
                    this.setState({'todos': todos})
            }).catch(error => console.log(error))
    }

    componentDidMount() {
        this.get_token_from_storage()
    }

    render() {
        return (
        <div className="container">
            <BrowserRouter>
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
                            {this.is_authenticated() ? <a href='/' onClick={() => this.logout()}>Выход</a> :
                            <Link to='/login'>Вход</Link>}
                        </li>
                    </ul>
                </header>
                <Routes>
                    <Route path='/' element={<StartPage />} />
                    <Route path='/authors' element={<AuthorList authors={this.state.authors} />} />
                    <Route path='/projects' element={<ProjectList projects={this.state.projects} />} />
                    <Route path='/todos' element={<ToDoList todos={this.state.todos} />} />
                    <Route path='/login' element={<LoginForm get_token={(username, password) => this.get_token(username, password)} />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
        )
    }
}

export default App;
