import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'


class Home extends React.Component {

   
  render () {
    return (
        //    <div className="screen">
        //         <div className="left">
        //             <span style={{padding: 25, margin: 20}} > Ipod</span>
        //             {this.props.state.currentList.map((item) => {
        //                 if (this.props.state.activePos === this.props.state.currentList.indexOf(item) )
        //                     return <li className='active'> {item} </li>
        //                 else
        //                     return <li > {item} </li>

        //             })}
        //         </div>
        //         <div className="right">
                    <div >
                        {/* {this.props.state.activePos} */}
                        {/* < FontAwesomeIcon icon={faHome} /> */}
                        <div className="home-background"> 
                          
                        </div>
                      
                    </div>
            //     </div>
            // </div>
           
    
      );
  }
}

export default Home;
