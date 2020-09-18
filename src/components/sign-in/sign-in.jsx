import React, { Component } from 'react';
import Button from '../button/button';
import './sign-in.scss';

class SignIn extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        console.log(value);
        this.setState({[name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('button')
    }

    render(){
        return (
            <div className="sign-in">
                <h2>Sign In</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input 
                        required
                        id="email"
                        name="email" 
                        type="email" 
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder="e.g. abc@gmail.com" />
                    <label htmlFor="password">Password</label>
                    <input 
                        required
                        id="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                        name="password" 
                        type="password" 
                        placeholder="*************" />
                    <input type="submit" value="Submit" />
                    {/* <Button 
                        text="SUBMIT"
                        type="submit"
                        handleClick={this.handleSubmit}
                        /> */}
                </form>
            </div>
        )
    }
}

export default SignIn;