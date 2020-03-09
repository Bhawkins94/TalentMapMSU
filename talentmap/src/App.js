import React from 'react';
import './App.css';
import LanguageIcon from '@material-ui/icons/Language';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AcUnitIcon from '@material-ui/icons/AcUnit';
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
				<li style={{float: 'right'}} ><LanguageIcon /></li>
				<li style={{float: 'right'}} ><AccountCircleIcon /></li>
            </ul>
        </nav>
      </header>
        <div>

            <h1 class="placeholder">Inserting other elements here</h1>
        </div>
    </div>

  );
}

export default App;
