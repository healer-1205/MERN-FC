import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import { TextField, Button } from "@material-ui/core";
import "./login.css";
import store from '../../store/store';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: this.props.auth.error
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
                error: nextProps.error
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
        store.subscribe(() => {
            this.setState({
                error: this.props.auth.error
            });
        });
    };
    render() {
        const { error } = this.state;
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
                            error={error === '' ? false : true}
                            helperText={error.emailnotfound}
                            type="email" />
                    </div>
                    <div className="input-field col s12" style={{ marginTop: '5%' }}>
                        <TextField
                            fullWidth
                            id="password"
                            label="password"
                            variant="outlined"
                            onChange={this.onChange}
                            value={this.state.password}
                            error={error === '' ? false : true}
                            helperText={error.passwordincorrect}
                            type="password" />
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