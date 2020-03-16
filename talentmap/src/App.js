import React from 'react';
import './App.css';
import './chatStyle.css'
import LanguageIcon from '@material-ui/icons/Language';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import SendIcon from '@material-ui/icons/Send';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><AcUnitIcon/></li>  {/*get talent map icon for here*/}
            <li>Dashboard</li>
            <li>Surveys</li>
            <li>Reports</li>
            <li id="selectedPage">Feedback</li>
            <li>Action Planning</li>
            <li>Admin</li>
            <li style={{float: 'right'}} ><AccountCircleIcon /></li>
            <li style={{float: 'right'}} ><LanguageIcon /></li>
          </ul>
        </nav>
      </header>
      <form onsubmit="return sendMessage();">
          <input id="message" placeholder="Enter message" autocomplete="off"></input>
          <input type="submit"></input>
      </form>
      <ul id="messages"></ul>
      <div class="container">
        <h3 class=" text-center">Dummy Messenger</h3>
        <div class="messaging">
            <div class="inbox_msg">
                <div class="inbox_people">
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
                    <div class="inbox_chat">
                        <div class="chat_list active_chat">
                            <div class="chat_people">
                                <div class="chat_img">
                                </div>
                                <div class="chat_ib">
                                    <h5>Kianna Bias <span class="chat_date">Feb 20</span></h5>
                                    <p>When will the reports be ready?</p>
                                </div>
                            </div>
                        </div>
                        <div class="chat_list">
                            <div class="chat_people">
                                <div class="chat_img">
                                </div>
                                <div class="chat_ib">
                                    <h5>Kianna Bias <span class="chat_date">Dec 25</span></h5>
                                    <p>Meeting 8:45a don't miss it!!</p>
                                </div>
                            </div>
                        </div>
                        <div class="chat_list">
                            <div class="chat_people">
                                <div class="chat_img">
                                </div>
                                <div class="chat_ib">
                                    <h5>Kianna Bias <span class="chat_date">Feb 20</span></h5>
                                    <p>I will be going on vacation in March.</p>
                                </div>
                            </div>
                        </div>
                        <div class="chat_list">
                            <div class="chat_people">
                                <div class="chat_img">
                                </div>
                                <div class="chat_ib">
                                    <h5>Kianna Bias <span class="chat_date">Feb 20</span></h5>
                                    <p>Joe will be having his 15th year celebration party.</p>
                                </div>
                            </div>
                        </div>
                        <div class="chat_list">
                            <div class="chat_people">
                                <div class="chat_img">
                                </div>
                                <div class="chat_ib">
                                    <h5>Kianna Bias <span class="chat_date">Dec 25</span></h5>
                                    <p>TEST</p>
                                </div>
                            </div>
                        </div>
                        <div class="chat_list">
                            <div class="chat_people">
                                <div class="chat_img">
                                </div>
                                <div class="chat_ib">
                                    <h5>Kianna Bias <span class="chat_date">Dec 25</span></h5>
                                    <p>TEST</p>
                                </div>
                            </div>
                        </div>
                        <div class="chat_list">
                            <div class="chat_people">
                                <div class="chat_img">
                                </div>
                                <div class="chat_ib">
                                    <h5>Kianna Bias <span class="chat_date">Dec 25</span></h5>
                                    <p>TEST</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="newMsg">
                        <button class="newBtn" type="button">New Message</button>
                    </div>
                </div>
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
                                    <span class="time_date"> 11:01 AM    |    June 9</span> </div>
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
                                        <div class="type_msg">
                                            <div class="input_msg_write">
                                                <input type="text" class="write_msg" placeholder="Type a message" />
                                                <button class="msg_send_btn" type="button"><SendIcon/></button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  );
                }

export default App;
