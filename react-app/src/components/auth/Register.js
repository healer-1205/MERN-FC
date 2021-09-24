import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { registerUser } from '../../actions/authActions';
import classnames from 'classnames';
import { TextField, Button } from "@material-ui/core";
import "./login.css";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
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
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        console.log(newUser);
        this.props.registerUser(newUser, this.props.history);
    };


    render() {
        const { errors } = this.state;
        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4%' }}>
                <form noValidate onSubmit={this.onSubmit} className="_background">
                    <div className="input-field col s12">
                        <h2 style={{ textAlign: 'center' }}><b>Register</b> below</h2>
                        <p className="grey-text text-darken-1">
                            Already have an account? <Link to="/login" style={{textDecoration: "none"}}><Button variant="outlined">Log in</Button></Link>
                        </p>
                    </div>
                    <div className="input-field col s12">
                        <TextField
                            fullWidth
                            id="name"
                            label="Name"
                            variant="outlined"
                            onChange={this.onChange}
                            value={this.state.name}
                            error={errors.name}
                            type="text" />
                        <span className="red-text"> {errors.name} </span>
                    </div>
                    <div className="input-field col s12" style={{ marginTop: '5%' }}>
                        <TextField
                            fullWidth
                            id="email"
                            label="Email"
                            variant="outlined"
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                            type="email" />
                        <span className="red-text"> {errors.email} </span>
                    </div>
                    <div className="input-field col s12" style={{ marginTop: '5%' }}>
                        <TextField
                            fullWidth
                            id="password"
                            label="Password"
                            variant="outlined"
                            onChange={this.onChange}
                            value={this.state.password}
                            error={errors.password}
                            type="password" />
                        <span className="red-text"> {errors.password} </span>
                    </div>
                    <div className="input-field col s12" style={{ marginTop: '3%' }}>
                        <TextField
                            fullWidth
                            id="password2"
                            label="Confirm Password"
                            variant="outlined"
                            onChange={this.onChange}
                            value={this.state.password2}
                            error={errors.password2}
                            type="password" />
                        <span className="red-text"> {errors.password2} </span>
                    </div>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        style={{ borderRadius: '3px', marginTop: '1rem', width: '-webkit-fill-available'}}
                    >
                        Sign up
                    </Button>
                </form>
            </div>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));