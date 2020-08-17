import React from 'react';


class Settings extends React.Component {
   
  render () {
    const state = this.props.state;
    return (
      <div className="full-screen">
          <ul className='songs-list'>
            {state.currentList.map((item, index) => {
              if (state.activePos === index ) 
                  return <li className='active' key={index}> 
                                {item} 
                            </li>
              else if (state.song === item )
                  return <li className='playing ' key={index}> 
                              {item} 
                          </li>
              else
                  return <li key={index} > {item} </li>
            })}  
          </ul> 
      </div>
      );
  }
}

export default Settings;
