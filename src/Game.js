
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'


class Settings extends React.Component {

   
  render () {
    return (

        <div style={{ fontSize: 100 }} className="full-screen">
            {/* {this.props.state.activePos} */}
            < FontAwesomeIcon icon={faGamepad} />
        </div>
          
    
      );
  }
}

export default Settings;
