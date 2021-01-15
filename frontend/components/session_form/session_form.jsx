import React from 'react';
class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            email: "",
            password: "",
            
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    }

    handleDemoSubmit(e) {
        e.preventDefault();
        const user = {
            email: 'demoUser@gmail.com',
            password: 'password'
        }
        // debugger;
        this.props.processForm(user).then(this.props.closeModal);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        const promise = this.props.processForm(user);
            // debugger;
            promise.then(this.props.closeModal);
    }

    renderErrors() {
        // debugger
        return (
            <div className="errors-container">
                <ul>
                    {this.props.errors.map((error, i) => (
                        <p key={`error-${i}`}>
                            {error}
                        </p>
                    ))}
                </ul>
            </div>
        );
    }

    render() {
        // debugger
        
        const signUp = () => (
            <div className="signup-form-box">
                <form onSubmit={this.handleSubmit}>
                    <h1 className="signup-form-header">Sign Up</h1>
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    {this.renderErrors()}
                    <div className="signup-container">
                    <label className="signup-input-header">Email
                        <input type="text"
                            value={this.state.email}  
                            onChange={this.update('email')}
                            className="signup-submit-box"  
                        />
                    </label>
                    <label className="signup-input-header">First Name
                        <input type="text"
                            value={this.state.first_name}
                            onChange={this.update('first_name')}
                            className="signup-submit-box"
                        />
                    </label>
                    <label className="signup-input-header">Password
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="signup-submit-box"
                        />
                    </label>
                    </div>
                    <button onClick={this.handleSubmit}
                        className="signup-form-button">Sign Up</button>
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
                        className="demo-button">Demo Signin</button>
            </div>
        )
    
        return this.props.formType === 'login' ? logIn() : signUp();
    }

}

export default SessionForm;