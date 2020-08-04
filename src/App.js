import React from 'react';
import Screen from './Screen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward, faBackward, faPlay } from '@fortawesome/free-solid-svg-icons'
import ZingTouch from 'zingtouch';

const home = ['music', 'game', 'settings'];
const music = ['songs', 'albums', 'artists', 'playlists'];
const game = [], settings = [];
const songs = ['thunder', 'cheap thrills', 'rap god'];
const artists = ['imagine dragons', 'eminem'];
const albums = ['love', 'action'];
const playlists = ['rap', 'party'];

class App extends React.Component {

    constructor () {
        super();
        this.state = {
            currentPage: 'home',
            currentList: home,
            activePos: 0,
            overCount: 0
        }
        this.lis = document.querySelectorAll('.screen li');
        this.route = '/home/';
    }

   
    rotate = () => {

        var target = document.getElementById('keys');
        var region = new ZingTouch.Region(target);
        var previousAngle = 0;

        this.state.overCount += 1;        
        if(this.state.overCount < 2){
            region.bind(target, 'rotate', function(e) {
                previousAngle += e.detail.distanceFromLast;
                if(previousAngle>15){
                    selectNext();
                    previousAngle=0;
                }else if(previousAngle<-15){
                    selectPrev();
                    previousAngle=0;
                }
            // console.log(e.detail.distanceFromLast ,previousAngle);
            });
        }

        var selectNext = () => {
            this.lis = document.querySelectorAll('.screen li');

            if(this.lis.length === this.state.activePos+1){
                this.setState({ activePos: 0 });
            }
            else{
                this.setState({ activePos: this.state.activePos+1 });
            }
        }

        var selectPrev = () => {
            this.lis = document.querySelectorAll('.screen li');

            if(0 === this.state.activePos){
                this.setState({ activePos: this.lis.length-1 });
            }
            else{
                this.setState({ activePos: this.state.activePos-1 });
            }
        }

    }


  render () {
    //   console.log('rendered');
    return (
 
        <div className="main">

            <Screen state={this.state} />

            <div className="navigator" onMouseOver={this.rotate}>
                <div id="keys">
                    
                    <div className="menu-btn">
                        MENU
                    </div>
                    <div className="fwd">
                        <FontAwesomeIcon icon={faForward} onClick={this.ActivateNext}/>
                    </div>
                    <div className="bkd">
                      <FontAwesomeIcon icon={faBackward} onClick={this.ActivatePrev}/>       
                    </div>
                    <div className="play-pause">
                      <FontAwesomeIcon icon={faPlay} />           
                    </div>
                </div>
                <div className="play"  >
                </div>
                
            </div>
        </div>
    
      );
  }
}

export default App;
