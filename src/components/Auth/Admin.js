import React, { Component }from "react";
import {Link} from 'react-router-dom'
import Header from '../../containers/Header/Header'
import {Redirect} from 'react-router-dom'


const TITLE = 'Login'

const USER = 'Иванов Иван Иванович'
export default class Admin extends Component {
    constructor(props) {
        super(props)
        const token=localStorage.getItem('token')
        let loggedIn=true
        if (token==null) {
            loggedIn=false
        }
        this.state={
            loggedIn
        }
    }
    render(){
        if(this.state.loggedIn===false){
            return <Redirect to='/b' />
        }
        return (
            <div>
                <Header
          title={TITLE}
          userName={USER}
          className='Appointments-Header'
          bodyClassName='Appointments-HeaderBody'
          
        />
                <h1>This is an Admin page. Only Auth people can see it.</h1>
                <Link  to='/logout'>Logout</Link>
            </div>
        )
    }
}