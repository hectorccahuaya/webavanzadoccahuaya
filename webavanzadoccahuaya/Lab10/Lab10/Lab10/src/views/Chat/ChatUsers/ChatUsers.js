import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import getAvatar from '../../../utils/avatar';

class ChatUsers extends Component {
    render() {
        return (
            <div className="card mb-sm-3 mb-md-0 contacts_card">
                <div className="card-header">
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Buscar..."
                            name=""
                            className="form-control search"
                            />
                        <div className="input-group-prepend">
                            <span className="input-group-text search_btn">
                                <FontAwesomeIcon icon={faSearch} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="card-body contacts_body">
                    <ui className="contacts">
                        <li>
                            <div className="d-flex bd-highlight">
                                <div className="img_cont">
                                    <img 
                                        src={getAvatar('fnaquiravargas@gmail.com')}
                                        alt="user"
                                        className="rounded-circle user-img"
                                        />
                                        <span className="online_icon offline" />
                                </div>
                                <div className="user_info">
                                    <span>Juan Perez</span>
                                    <p>Juan se conecto 7 mins atras</p>
                                </div>
                            </div>
                        </li>
                    </ui>
                </div>
                <div className="card-footer" />
            </div>
        );
    }
}

export default ChatUsers;