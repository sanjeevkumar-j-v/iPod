import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTools } from '@fortawesome/free-solid-svg-icons'


class Settings extends React.Component {

   
  render () {
    const state = this.props.state;
    return (

        <div className="full-screen">
            {/* {this.props.state.activePos} */}
            {/* < FontAwesomeIcon icon={faTools} /> */}
            <ul className='songs-list'>
              {state.currentList.map((item) => {
                if (state.activePos === state.currentList.indexOf(item) ) 
                    return <li className='active'> 
                                  {item} 
                              </li>
                else if (state.song === item )
                    return <li className='playing'> 
                                {item} 
                            </li>
                else
                    return <li > {item} </li>
              })}  
            </ul> 
        </div>
          
    
      );
  }
}

export default Settings;
