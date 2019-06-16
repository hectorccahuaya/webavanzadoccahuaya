import React, {Component, Fragment} from 'react';
import { Form, Button, FormControl, FormGroup } from 'react-bootstrap';
import axios from '../utils/axios';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import * as actions from '../store/actions/actions'

import Spinner from '../components/UI/Spinner/Spinner'

class Login extends Component{
    state = {
        usuario: '',
        password: ''
    }
    usuarioHandler = e => this.setState({usuario: e.target.value})
    passwordHandler = e => this.setState({password: e.target.value})
    submitHandler = e => {
        e.preventDefault();
        this.props.onAuth(this.state.usuario, this.state.password);
    }
    render(){
        let content = (
            <Form onSubmit={this.submitHandler}>
                <Form.Group>
                    <Form.Label>Usuario</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Usuario para sesion"
                            value={this.state.usuario}
                            onChange={this.usuarioHandler}
                            />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="123456"
                        value={this.state.password}
                        onChange={this.passwordHandler}
                        />
                </Form.Group>
                    <Button variant="primary" type="submit">
                    Iniciar sesion
                    </Button>
            </Form>                    
        );
        if (this.props.loading) content = <Spinner />;
        return (
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-6 mt-2 mb-2">
                        <div className="card">
                            <div className="card-body">{content}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}
const mapStateToProps = state => {
    return {
        loading: state.loading,
        error: state.error,
        isAuthenticated: state.token != null
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password))
    };
;} 
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);