import React, { Component } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faEdit,
    faKey,
    faCameraRetro
} from '@fortawesome/free-solid-svg-icons';
import getAvatar from '../../../utils/avatar';
//import ''
class ProfileDetails extends Component {
    state = {
        userName: '',
        email: ''
    };
    componentDidMount() {
        this.setState({
            userName: localStorage.getItem('userName'),
            email: localStorage.getItem('email')
        });
    }
    passwordHandler = e => {
        alert('Funcion para implementar')
    };
    pictureHandler = e => {
        alert('Funcion para implementar')
    };
    return() {
        const urlLorem = 'https://www.lipsum.com/feed/html';
        return (
            <Tab.Container id="profile-tabs" defaultActiveKey="inicio">
                <div className="row pt-4">
                    <div className="col-md-3">
                        <div className="profile-img">
                            <img
                                src={getAvatar(this.state.email)}
                                className="rounded-circle user_img"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="cold-md-7">
                        <div className="profile-head">
                            <h5>
                                <FontAwesomeIcon icon={faUser} /> {this.state.userName}
                            </h5>
                            <h6>Web Developer y disenador</h6>
                            <p className="profile-rating">
                                RANKING : <span>8/10</span>
                            </p>
                            <Nav>
                                <Nav.Item>
                                    <Nav.Link className="profile-tab" eventKey="inicio">
                                        Tab 1
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="profile-tab" eventKey="mensajes">
                                        Tab 2
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <button
                            className="btn btn-info btn-block"
                            onClick={() => this.props.history.push('/profile/edit')}
                        >
                            <FontAwesomeIcon icon={faEdit} /> Edit Perfil
                        </button>
                        <button
                            className="btn btn-info btn-block"
                            onClick={this.pictureHandler}
                        >
                            <FontAwesomeIcon icon={faCameraRetro} /> Imagen
                        </button>
                        <button
                            className="btn btn-info btn-block"
                            onClick={this.passwordHandler}
                        >
                            <FontAwesomeIcon icon={faKey} /> Contrasena
                        </button>
                    </div>
                    <div className="row pb-4">
                        <div className="col-md-3">
                            <ul className="list-group">
                                <li className="list-group-item text-muted">
                                    Actividad <i className="fa fa-dashboard fa-1x" />
                                </li>
                                <li className="list-group-item text-right">
                                    <span className="pull-left">
                                        <strong>Shares</strong>
                                    </span>{' '}
                                    125
                                </li>
                                <li className="list-group-item text-right">
                                    <span className="pull-left">
                                        <strong>Likes</strong>
                                    </span>{' '}
                                    13
                                </li>
                                <li className="list-group-item text-right">
                                    <span className="pull-left">
                                        <strong>Posts</strong>
                                    </span>{' '}
                                    37
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-7">
                            <Tab.Content>
                                <Tab.Pane className="profile-pane" eventKey="inicio">
                                    Para Generar...... :
                                    <a href={urlLorem} target="_blank" rel="noopener noreferrer">
                                        {urlLorem}
                                    </a>
                                </Tab.Pane>
                                <Tab.Pane className="profile-pane" eventKey="mensajes">
                                    Lorem ipsum dolor sit emet, consectetur adipicing ..........
                                    ............................................................
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                    </div>
                </div>
            </Tab.Container>
        );
    }
}
export default ProfileDetails;