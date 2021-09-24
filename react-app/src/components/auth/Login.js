import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import { TextField, Button } from "@material-ui/core";
import "./login.css";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }

        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(userData);
    };
    render() {
        const { errors } = this.state;
        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10%' }}>
                <form noValidate onSubmit={this.onSubmit} className="_background">
                    <div className="input-field col s12">
                        <h2 style={{textAlign:'center'}}>Login Page</h2>
                    </div>
                    <div className="input-field col s12">
                        <TextField
                            fullWidth
                            id="email"
                            label="Email"
                            variant="outlined"
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                            type="email" />
                        <span className='red-text'>
                            {errors.email}
                            {errors.emailnotfound}
                        </span>
                    </div>
                    <div className="input-field col s12" style={{ marginTop: '5%' }}>
                        <TextField
                            fullWidth
                            id="password"
                            label="password"
                            variant="outlined"
                            onChange={this.onChange}
                            value={this.state.password}
                            error={errors.password}
                            type="password" />
                        <span className='red-text'>
                            {errors.password}
                            {errors.passwordincorrect}
                        </span>
                    </div>
                    <div className="row">
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            style={{ borderRadius: '3px', marginTop: '1rem', width: '-webkit-fill-available'}}
                        >
                            Login
                        </Button>
                        <Link to="/register" style={{textDecoration: "none"}}>
                            <Button
                                variant="contained"
                                color="secondary"
                                style={{ borderRadius: '3px', marginTop: '1rem', width: '-webkit-fill-available' }}
                            >
                                Register
                            </Button>
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { loginUser }
)(Login);