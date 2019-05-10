import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';

class Search extends Component {
  state = {
    searchText: '',
    amount: 15,
    apiUrl: 'https://pixabay.com/api',
    apiKey: '12332300-397c46a341930e16308a96c47',
    images: []
    }
  render() { 
    return (  
      <TextField 
        name="searchText"
        value={this.state.searchText}
        onChange={this.onTextChange}
        floatingLabelText="Search for Images.."
        fullWidth={true}
      />
    );
  }
}
 
export default Search;