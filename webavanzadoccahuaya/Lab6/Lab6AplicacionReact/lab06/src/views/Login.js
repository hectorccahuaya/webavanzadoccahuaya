import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from '../utils/axios';
class Login extends Component {
	state = {
		usuario: '',
		password: ''
	};
	usuarioHandler = e => this.setState({ usuario: e.target.value });
	passwordHandler = e => this.setState({ password: e.target.value });
	submitHandler = e => {
		e.preventDefault();
		axios({
			method: 'post',
			url: 'user/signin',
			data: {
				username: this.state.usuario,
				password: this.state.password
			}
		})
			.then(response => {
				console.log('mi respuesta', response);
				localStorage.setItem('userId', response.data.data._id);
				localStorage.setItem('userName', response.data.data.username);
				localStorage.setItem('userToken', response.data.token);
				this.props.history.push('/welcome');
			})
			.catch(error => {
				console.log('hubo un error', error);
			});
	};
	render() {
		return (
			<div className="container">
				<div className="row justify-content-around">
					<div className="cold-6 mt-2 mb-2">
						<div className="card">
							<div className='card-body'>
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
										<Form.Label>
											Contrasena
										</Form.Label>
										<Form.Group
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
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Login;
