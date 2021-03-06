import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import { MenuItem } from 'material-ui';

class Search extends Component {
  state = {
    searchText: '',
    amount: 5,
    apiUrl: 'https://pixabay.com/api',
    apiKey: '12332300-397c46a341930e16308a96c47',
    images: []
    }

    onTextChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    }

  render() { 
    return (  
      <div>
        <TextField 
        name="amount"
        value={this.state.searchText}
        onChange={this.onTextChange}
        floatingLabelText="Search For Images.."
        fullWidth={true}
      />
      <br />
      <SelectField
      name="amount"
      floatingLabelText="Amount"
      value={this.state.amount}
      onChange={this.onAmountChange}
      >
        <MenuItem value={5} primaryText="5"/>
        <MenuItem value={10} primaryText="10"/>
        <MenuItem value={15} primaryText="15"/>
         <MenuItem value={30} primaryText="30"/>
        <MenuItem value={50} primaryText="50"/>
      </SelectField>
      </div>
    );
  }
}
 
export default Search;