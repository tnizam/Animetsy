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
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    }

    handleDemoSubmit() {
        const user = {
            email: 'demoUser@gmail.com',
            password: 'password'
        }
        this.props.processForm(user);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
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
            <div className="login-form-box">
                <form onSubmit={this.handleSubmit}>
                    <h1 className="form-header">Sign Up</h1>
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    {this.renderErrors()}
                    
                    <label className="input-header">Email
                        <input type="text"
                            value={this.state.email}  
                            onChange={this.update('email')}
                            className="submit-box"  
                        />
                    </label>
                    <label className="input-header">First Name
                        <input type="text"
                            value={this.state.first_name}
                            onChange={this.update('first_name')}
                            className="submit-box"
                        />
                    </label>
                    <label className="input-header">Password
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="submit-box"
                        />
                    </label>
                    
                    <button onClick={this.handleSubmit}
                        className="form-button">Sign Up</button>
                    <br/>
                </form>
            </div>
        )

        const logIn = () => (
            <div className="login-form-box">
                <form onSubmit={this.handleSubmit} className="form-style">
                    <h1 className="form-header">Sign in</h1>
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    {this.renderErrors()}
                    <div className="input-body">
                    <label className="input-header">Email address
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="submit-box"
                        />
                    </label>
                    <br/>
                    <label className="input-header">Password
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="submit-box"
                        />
                    </label>
                    </div>
                    <button onClick={this.handleSubmit}
                        className="form-button">Log In</button>
                    <br/>
                </form>
                <button onClick={this.handleDemoSubmit}
                        className="form-button">Demo Signin</button>
            </div>
        )
    
        return this.props.formType === 'login' ? logIn() : signUp();
    }

}

export default SessionForm;