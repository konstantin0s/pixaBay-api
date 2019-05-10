import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';

class Search extends Component {
  state = {
    searchText: '',
    amount: 15,
    apiUrl: 'https://pixabay.com/api',
    apiKey: '',
    images: []
    }
  render() { 
    return (  
      <h1>Search</h1>
    );
  }
}
 
export default Search;