import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLocationArrow,
	faPaperclip
} from '@fortawesome/free-solid-svg-icons';
import getAvatar from '../../../utils/avatar';
import { receiveMessage, emmitMessage } from '../../../utils/socket';

import ChatMessages from './ChatMessages';

class ChatContent extends Component {
	state = {
		text: '',
		lines: []
	};
	componentDidMount() {
		receiveMessage(this.getmessage);
	}
	componentDidUpdate() {
		const objDiv = document.getElementById('msg_card_body');
		objDiv.scrollTop = objDiv.scrollHeight;
	}
	inputHandler = e => {
		this.setState({ text: e.target.value });
	};
	submitHandler = e => {
		e.preventDefault();
		emmitMessage(this.state.text);
		const newLines = [...this.state.lines];
		newLines.push({ line: this.state.text, self: 0 });
		this.setState({
			text: '',
			lines: newLines
		});
	};
	getmessage = line => {
		const newLines = [...this.state.lines];
		newLines.push({ line: line, self: 1 });
		this.setState({ lines: newLines });
	};
	render() {
		return (
			<div className="card">
				<div className="card-header msg_head">
					<div className="d-flex bd-highlight">
						<div className="img_cont">
							<img
								src={getAvatar('fnaquiravargas@gmail.com')}
								alt="user"
								className="rounded-circle user_img"
							/>
							<span className="online_icon" />
						</div>
						<div className="user_info">
							<span>chat con Juan Perez</span>
							<p>177 Mesajes</p>
						</div>
					</div>
				</div>
				<div className="card-body msg_card_body" id="msg_card_body">
					{this.state.lines.map(item => {
						return <ChatMessages {...item} />;
					})}
				</div>
				<div className="card-footer">
					<form onSubmit={this.submitHandler}>
						<div className="input-group">
							<div className="input-group-append">
								<span className="input-group-text attach_btn">
									<FontAwesomeIcon icon={faPaperclip} />
								</span>
							</div>
							<input
								value={this.state.text}
								onChange={this.inputHandler}
								className="form-control type_msg"
								placeholder="Escribe algo..."
							/>
							<div className="input-group-append">
								<span
									className="input-group-text send_btn"
									onClick={this.inputHandler}
								>
									<FontAwesomeIcon icon={faLocationArrow} />
								</span>
							</div>
						</div>
						<button type="submit" style={{ display: 'none' }} />
					</form>
				</div>
			</div>
		);
	}
}
export default ChatContent;
