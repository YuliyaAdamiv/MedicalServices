import React, { Component }from "react";
import Header from '../../containers/Header/Header'
import {Redirect} from 'react-router-dom'



const TITLE = 'Login'

const USER = 'Иванов Иван Иванович'
export default class Login extends Component {
   
    constructor(props){
        super(props)
        const token=localStorage.getItem('token')
        let loggedIn=true
        if (token==null) {
            loggedIn=false
        }
        this.state = {
            username:'',
            password:'',
            loggedIn
        }
        this.onChange=this.onChange.bind(this)
        this.submitForm=this.submitForm.bind(this)
    }
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitForm(e){
        e.preventDefault()
        const {username, password} =this.state
        if (username === "A"&& password ==="B"){
            localStorage.setItem('token', "szdxfcgvhjbknlkm;")
            this.setState({
                loggedIn: true
            })
        }
    }
    render(){
        if(this.state.loggedIn){
            return <Redirect to='/home' />
        }
        return (
            <div>
                <Header
          title={TITLE}
          userName={USER}
          className='Appointments-Header'
          bodyClassName='Appointments-HeaderBody'
          
        />
                <h1>Login Form</h1>
                <br />
                   
                <form onSubmit={this.submitForm}>
                    <input type="text" placeholder="Enter username" name="username" value={this.state.username} onChange={this.onChange} />
                    <br />
                    <br />
                    
                    <input type="password" placeholder="Enter password" name="password" value={this.state.password} onChange={this.onChange} />
                  
                    <br />
                    <br />
                    <input type="submit"  />
                  
                </form>

            </div>
        )
    }
}