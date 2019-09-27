import React, {Component} from 'react'
import Nav from '../Nav/Nav'

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return(
        <div className='dashboard'>
            <Nav />
            Dashboard
        </div>
        )
    }
}
