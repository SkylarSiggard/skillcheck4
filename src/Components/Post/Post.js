import React, {Component} from 'react'
import Nav from '../Nav/Nav'
export default class Post extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return(
        <div className='post'>
            <Nav/>
            Post
        </div>
        )
    }
}
