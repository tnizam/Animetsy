import React from 'react';
class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            email: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const signUp = () => (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Sign Up</h1>
                    {this.renderErrors()}
                    <br/>
                    <label>Email:
                        <input type="text"
                            value={this.state.email}  
                            onChange={this.update('email')}  
                        />
                    </label>
                    <label>First Name:
                        <input type="text"
                            value={this.state.first_name}
                            onChange={this.update('first_name')}
                        />
                    </label>
                    <label>Password:
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>
                    <button type="button" onClick={this.handleSubmit}>Sign In</button>
                </form>
            </div>
        )

        const logIn = () => (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Login</h1>
                    {this.renderErrors()}
                    <br />
                    <label>Email:
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>
                    <label>Password:
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>
                    <button type="button" onClick={this.handleSubmit}>Log In</button>
                </form>
            </div>
        )
    
        return this.props.formType === 'login' ? logIn() : signUp();
    }

}

export default SessionForm;