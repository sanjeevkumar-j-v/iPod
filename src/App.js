import React from 'react';


function App() {
  return (
    <div >
      
    <div className="main">
        <div className="screen">
            <div className="left">
                <span  > Ipod</span>
                <li className="active">Songs</li>
                <li>Albums</li>
                <li>Artists</li>
                <li>Playlists</li>
            </div>
            <div className="right">
                <div>
                    Hi
                </div>
            </div>
        </div>
        <div className="navigator">
            <div id="keys">
                
                <div className="menu-btn">
                    MENU
                </div>
                <div className="fwd">
                    <i className="fas fa-forward"></i>
                </div>
                <div className="bkd">
                    <i className="fas fa-backward"></i>
                </div>
                <div className="play-pause">
                    <i className="fas fa-play"></i>
                    
                </div>
            </div>
            <div className="play">
            </div>
            
        </div>
    </div>

    </div>
  );
}

export default App;
