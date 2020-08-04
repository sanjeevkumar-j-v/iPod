import React from 'react';


class Screen extends React.Component {

   
  render () {
    return (
           <div className="screen">
                <div className="left">
                    <span style={{padding: 25, margin: 20}} > Ipod</span>
                    {this.props.state.currentList.map((item) => {
                        if (this.props.state.activePos === this.props.state.currentList.indexOf(item) )
                            return <li className='active'> {item} </li>
                        else
                            return <li > {item} </li>

                    })}
                </div>
                <div className="right">
                    <div>
                        {this.props.state.activePos}
                    </div>
                </div>
            </div>
           
    
      );
  }
}

export default Screen;
