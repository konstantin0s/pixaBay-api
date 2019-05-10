import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Search from './components/search/Search';

function App() {
  return (
   <MuiThemeProvider>
     <div>
     <Navbar />
     <Search />
     </div>
   </MuiThemeProvider>
  );
}

export default App;
