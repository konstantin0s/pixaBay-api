import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


function App() {
  return (
   <MuiThemeProvider>
     <div>
     <Navbar />
     </div>
   </MuiThemeProvider>
  );
}

export default App;
