import React, {Component} from 'react'
import './auth.css'
import picture from './winking-512.png'
import axios from 'axios'
import swal from 'sweetalert2'
import {updateUser} from '../../ducks/reducer'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


class Auth extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }
    handleChange = async (e, key) => {
        this.setState({
            [key]: e.target.value
        })
    }
    async register() {
        const {username, password} = this.state
        const res = await axios.post('/auth/register', {username, password})
        updateUser(res.data.user)
        swal.fire({type: 'success', text: res.data.message})
    }
    login = async () => {
        const {username, password} = this.state
        const res = await axios.get('/auth/login', {username, password})
        updateUser(res.data.user)
        swal.fire({type: 'success', text: res.data.message })
    }
    render() {
        return(
        <div className='auth'>
            <div className='class-box'>
                <img className='img' src={picture} alt="a face"/>
                <h1>Helo</h1>
                <input onChange={e => this.handleChange(e, 'username')} placeholder='Username' type="text"/>
                <input onChange={e => this.handleChange(e, 'password')} placeholder='Password' type="text"/> 
                {/* change type to 'password' */}
                <div className='log-buttons'>
                    <Link to='/dashboard'><button onClick={() => this.login()}>Login</button></Link>
                    <Link to='/dashboard'><button onClick={() => this.register()}>Register</button></Link>
                </div>
            </div>
        </div>
        )
    }
}
export default connect(null)(Auth)
