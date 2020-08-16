import React from 'react';
import Home from './Home';
import Game from './Game'
import Settings from './Settings';
import Music from './Music';
import About from './About';
// import Background from './assets/videos/home-bg.wmv';


class Screen extends React.Component {

   
  render () {
    return (
           <div className="screen">
                <div className="left">
                    <div id='title' > iPod</div>
                    {this.props.state.currentList.map((item) => {
                        if (this.props.state.activePos === this.props.state.currentList.indexOf(item) )
                            return <li className='active'> {item} <span style={{ position:'absolute', right: 140}}>&gt;</span> </li>
                        else
                            return <li > {item} </li>

                    })}
                </div>
                <div className="right">
                    <div >
                        {this.props.state.currentPage==='home'?<Home state={this.props.state} /> : null}
                        {this.props.state.currentPage==='music'?<Music  state={this.props.state} /> : null}
                        {this.props.state.currentPage==='game'?<Game  state={this.props.state} /> : null}
                        {this.props.state.currentPage==='settings'?<Settings state={this.props.state} /> : null}
                        {this.props.state.currentPage==='about'?<About state={this.props.state} /> : null}

                       
                    </div>
                </div>
            </div>
           
    
      );
  }
}

export default Screen;
