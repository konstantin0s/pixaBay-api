import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import { MenuItem } from 'material-ui';

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
      <div>
        <TextField 
        name="searchText"
        value={this.state.searchText}
        onChange={this.onTextChange}
        floatingLabelText="Search for Images.."
        fullWidth={true}
      />
      <br />
      <SelectField
      name="amount"
      floatingLabelText="Frequency"
      value={this.state.value}
      onChange={this.handleChange}
      >
        <MenuItem value={1} primaryText="Never"/>
      </SelectField>
      </div>
    );
  }
}
 
export default Search;