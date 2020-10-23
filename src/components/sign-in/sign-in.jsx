import React, { Component } from 'react';
import Button from '../button/button';
import FormInput from '../form-input/form-input'
import { auth, signInWithGoogle } from '../../firebase/firebaseUtils'
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
        this.setState({[name]: value})
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''})
        } catch(err) {
            console.error(err)
        }

    }

    render(){
        const { email, password } = this.state;
        return (
            <div className="sign-in">
                <h2>Sign In</h2>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        // required
                        id="sign-in-email"
                        name="email" 
                        type="email" 
                        value={email}
                        handleChange={this.handleChange}
                        label="email"
                        />
                    <FormInput 
                        // required
                        id="sign-in-password"
                        handleChange={this.handleChange}
                        value={password}
                        name="password" 
                        type="password" 
                        label="password"
                        />
                    <div className="button-container">
                        <Button 
                            type="submit" >
                            Sign In </Button>
                        <Button 
                            googleOAuth
                            onClick={ signInWithGoogle } >
                            Sign In With Google </Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;