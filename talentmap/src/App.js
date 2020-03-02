import React from 'react';
import './App.css';
import LanguageIcon from '@material-ui/icons/Language';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <nav>
            <ul>
                <li>Dashboard</li>
                <li>Surveys</li>
                <li>Reports</li>
                <li id="selectedPage">Feedback</li>
                <li>Action Planning</li>
                <li>Admin</li>
				<li><LanguageIcon style={{ fontSize: 14 }}/></li>
				<li><AccountCircleIcon style={{ fontSize: 14}}/></li>
            </ul>
        </nav>

      </header>
    </div>
  );
}

export default App;
