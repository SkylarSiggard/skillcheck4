import React, {Component} from 'react'
import './auth.css'
import picture from './winking-512.png'



export default class Auth extends Component {
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
                    <button>Login</button>
                    <button>Register</button>
                </div>
            </div>
        </div>
        )
    }
}
