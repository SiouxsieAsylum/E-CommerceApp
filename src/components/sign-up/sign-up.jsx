import React, { Component } from 'react';
import FormInput from '../form-input/form-input'
import Button from '../button/button'
import { auth, createUserProfile } from '../../firebase/firebaseUtils';
import './sign-up.scss'

class SignUp extends Component {
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }  

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword){
            alert('please confirm that passwords match');
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfile(user, { displayName })
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch(err){
            console.error(err)
        }
    }

    render(){
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2>I gotta make an account first</h2>
                <form onSubmit={this.handleSubmit}>
                <FormInput 
                        required
                        id="display-name"
                        name="displayName" 
                        type="text" 
                        value={displayName}
                        handleChange={this.handleChange}
                        label="name"
                        />
                    <FormInput 
                        required
                        id="sign-up-email"
                        name="email" 
                        type="email" 
                        value={email}
                        handleChange={this.handleChange}
                        label="email"
                        />
                    <FormInput 
                        required
                        id="sign-up-password"
                        handleChange={this.handleChange}
                        value={password}
                        name="password" 
                        type="password" 
                        label="password"
                        />
                    <FormInput 
                        required
                        id="confirm-password"
                        handleChange={this.handleChange}
                        value={confirmPassword}
                        name="confirmPassword" 
                        type="password" 
                        label="confirm password"
                        />
                    <div className="button-container">
                        <Button 
                            type="submit" >
                            SIGN UP </Button>
                    </div>

                </form>
            </div>
        )
    }
}

export default SignUp;
