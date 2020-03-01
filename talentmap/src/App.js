import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <nav>
	  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <ul>
                <li>Dashboard</li>
                <li>Surveys</li>
                <li>Reports</li>
                <li>Feedback</li>
                <li class="wider">Action Planning</li>
                <li>Admin</li>
	        <li><i class="material-icons">language</i></li>
	        <li><i class="material-icons">account_circle</i></li>
            </ul>
        </nav>

      </header>
    </div>
  );
}

export default App;
