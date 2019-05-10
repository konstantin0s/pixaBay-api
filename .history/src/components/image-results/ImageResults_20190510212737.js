import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GridList, GridTitle } from 'material-ui/GridList'; 
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class ImageResults extends Component {
  state = {  }



  render() { 
    return ( 
      <div></div>
     );
  }
}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired
}
 
export default ImageResults;