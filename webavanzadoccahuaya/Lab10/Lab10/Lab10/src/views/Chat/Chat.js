import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';

import ChatContent from './ChatContent/ChatContent';
import ChatUsers from './ChatUsers/ChatUsers';

import '../../assets/css/chat.css';

class Chat extends Component {
    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>Chat Tecsup</title>
                    <style type="text/css">{`
                    body,
                    html {
                        height: 100%;
                        margin: 0;
                        background: #7f7fd5;
                        background: -webkit-linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
                        background: linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
                    }
                `}</style>
                </Helmet>
                <div
                    className="container-fluid h-100"
                    style={{
                        margin: '10px 0'
                    }}
                >
                <div className="row justify-content-center h-100">
                    <div class="col-md-4 col-xl-3 chat">
                        <ChatUsers />
                    </div>
                    <div class="col-md-8 col-xl-6 chat">
                        <ChatContent />
                        </div>
                    </div>    
                </div>
            </Fragment>
        );
    }
}

export default Chat;