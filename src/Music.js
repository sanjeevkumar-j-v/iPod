import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'


class Music extends React.Component {

   
  render () {
    return (

        <div style={{ fontSize: 100 }}>
            {/* {this.props.state.activePos} */}
            < FontAwesomeIcon icon={faMusic} />
        </div>
          
    
      );
  }
}

export default Music;
