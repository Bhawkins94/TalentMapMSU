import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './chatStyle.css'
import LanguageIcon from '@material-ui/icons/Language';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SendIcon from '@material-ui/icons/Send';


class Dashboard extends React.Component{
	render() {
		return (
			<div class="headerBox">
				<header class="header">
					<h1 class="title"></h1>
					<nav class="dashNav">
						<ul>
							<li></li>
							<li>Dashboard</li>
							<li>Survey</li>
							<li>Reports</li>
							<li>Feedback</li>
							<li>Action Planning</li>
							<li>Admin</li>
							<li class="right"><AccountCircleIcon style={{ fontSize: 18}}/></li>
							<li class="right"><LanguageIcon style={{ fontSize: 18 }}/></li>
						</ul>
					</nav>
				</header>
			</div>
		);
	}
}

class Search extends React.Component{
	render(){
		return(
			<div class="headind_srch">
				<div class="srch_bar">
					<div class="stylish-input-group">
						<input type="text" class="search-bar"  placeholder="Search" ></input>
						<span class="input-group-addon">
							<button type="button"> <i class="fa fa-search" aria-hidden="true"></i> </button>
						</span>
					</div>
				</div>
			</div>
		);
	}
}

class Thread extends React.Component{
	render(){
		return(
			<div class="chat_list">
				<div class="chat_people">
					<div class="chat_img"></div>
					<div class="chat_ib">
						<h5>Sender<span class="chat_date">Date</span></h5>
						<p>Subject</p>
					</div>
				</div>
			</div>
		);
	}
}

class Inbox extends React.Component{
	render(){
		return(
			<div class="inbox_people">
				<Search />
				<div class="inbox_chat">
					<div class="chat_list active_chat">
						<div class="chat_people">
							<div class="chat_img"></div>
							<div class="chat_ib">
								<h5>Kianna Bias <span class="chat_date">Feb 20</span></h5>
								<p>When will the reports be ready?</p>
							</div>
						</div>
					</div>
					<Thread />
					<Thread />
					<Thread />
					<Thread />
					<Thread />
					<Thread />
					<Thread />
				</div>
				<div class="newMsg">
					<button class="newBtn" type="button">New Message</button>
				</div>
			</div>
		);	
	}
}

class ChatBox extends React.Component{
	render(){
		return(
			<div class="type_msg">
				<div class="input_msg_write">
					<input type="text" class="write_msg" placeholder="Type a message" />
					<button class="msg_send_btn" type="button"><SendIcon/></button>
				</div>
			</div>
		);
	}
}

class Chat extends React.Component{
	render(){
		return(
			<div class="mesgs"> 
				<div class="msg_history">
					<div class="incoming_msg">
						<div class="incoming_msg_img"></div>
						<div class="received_msg">
							<div class="received_withd_msg">
								<p>TEST</p>
								<span class="time_date"> 11:01 AM    |    June 9</span>
							</div>
						</div>
					</div>
					<div class="outgoing_msg">
						<div class="sent_msg">
							<p>TEST</p>
							<span class="time_date"> 11:01 AM    |    June 9</span>
						</div>
					</div>
					<div class="incoming_msg">
						<div class="incoming_msg_img">  </div>
						<div class="received_msg">
							<div class="received_withd_msg">
								<p>TEST</p>
								<span class="time_date"> 11:01 AM    |    Yesterday</span>
							</div>
						</div>
					</div>
					<div class="outgoing_msg">
						<div class="sent_msg">
							<p>TEST</p>
							<span class="time_date"> 11:01 AM    |    Today</span>
						</div>
					</div>
					<div class="incoming_msg">
						<div class="incoming_msg_img"> </div>
						<div class="received_msg">
							<div class="received_withd_msg">
								<p>TEST</p>
								<span class="time_date"> 11:01 AM    |    Today</span>
							</div>
							<div class="outgoing_msg">
								<div class="sent_msg">
									<p>TEST</p>
									<span class="time_date"> 11:01 AM    |    Today</span>
								</div>
								<div class="incoming_msg_img"> </div>
								<div class="received_msg">
									<div class="received_withd_msg">
										<p>TEST</p>
										<span class="time_date"> 11:01 AM    |    Today</span>
									</div>
									<div class="incoming_msg_img"> </div>
									<div class="received_msg">
										<div class="received_withd_msg">
											<p>TEST</p>
											<span class="time_date"> 11:01 AM    |    Today</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<ChatBox />
			</div>
		);
	}
}

class Messenger extends React.Component{
	render(){
		return(
			<div class="container"> 
				<div class="messaging"> 
					<div class="inbox_msg"> 
						<Inbox />
						<Chat />
					</div>
				</div>
			</div>
		);
	}
}

function Compose(){
  return (
    <div>
      <Dashboard />
      <Messenger />
    </div>
  );
}

function App() {
  ReactDOM.render(<Compose />, document.getElementById('root'));

  return(null);
}

export default App;
