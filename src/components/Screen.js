import React from 'react';
import Home from './Home';
import Game from './Game'
import Settings from './Settings';
import Music from './Music';
import About from './About';
import Songs from './Songs';
// import Background from './assets/videos/home-bg.wmv';


class Screen extends React.Component {

   
  render () {
      const state = this.props.state;
    return (
           <div className="screen">
                <div className="left">
                    <div id='title' > iPod</div>
                    {state.currentList.map((item) => {
                        if (state.currentPage==='Songs'){
                            return null
                        }
                        if (state.activePos === state.currentList.indexOf(item) )
                            return <li className='active'> 
                                        {item} 
                                        <span style={{ position:'absolute', right: 140}}>&gt;</span> 
                                    </li>
                        else
                            return <li > {item} </li>

                    })}
                </div>
                <div className="right">
                    <div >
                        {state.currentPage==='Home'?<Home state={state} /> : null}
                        {state.currentPage==='Music'?<Music  state={state} /> : null}
                        {state.currentPage==='Game'?<Game  state={state} /> : null}
                        {state.currentPage==='Settings'?<Settings state={state} /> : null}
                        {state.currentPage==='About'?<About state={state} /> : null}
                        {state.currentPage==='Songs'?<Songs state={state} /> : null}

                       
                    </div>
                </div>
            </div>
           
    
      );
  }
}

export default Screen;
