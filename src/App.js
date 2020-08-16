import React from 'react';
import Screen from './components/Screen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward, faBackward, faPlay } from '@fortawesome/free-solid-svg-icons'
import ZingTouch from 'zingtouch';
import video from "./assets/videos/blue.mp4"


const home = ['music' , 'video' , 'game' ,'settings', 'about'];
const music = ['songs', 'albums', 'artists', 'playlists'];
const game = [], settings = [], about = [];
// const songs = ['thunder', 'cheap thrills', 'rap god'];
// const artists = ['imagine dragons', 'eminem'];
// const albums = ['love', 'action'];
// const playlists = ['rap', 'party'];

class App extends React.Component {

    constructor () {
        super();
        this.state = {
            currentPage: 'home',
            currentList: home,
            activePos: 0  
                      
        }
        this.lis = document.querySelectorAll('.screen li');
        this.route = '/home/';
        // this.Lists = [home, music, game, settings, songs, artists, albums, playlists];
        this.binded = false;
    }
   
    changeListToNext = () => {
        var listAvailable = true;
        var list = [];
        try {
            list = eval(this.state.currentList[this.state.activePos]);
        } catch (err) {
            listAvailable = false;
        }
        this.lis = document.querySelectorAll('.screen li');

        if (this.lis.length!==0 && listAvailable){
            this.setState({
                currentPage: this.state.currentList[this.state.activePos],
                currentList: list,
                activePos: 0
            });
            this.route += this.state.currentList[this.state.activePos] + '/';
        }

        // console.log('route : ', this.route);
    }

    changeListToBack = () => {
        var route = this.route;

        var pos = route.indexOf(this.state.currentPage);
        route = route.slice(0, pos-1);
        var prev = route.slice(route.lastIndexOf('/')+1);

        if (prev.length > 0){
            this.route = route+'/';
            console.log(this.route);
            this.setState({ 
                currentPage: prev, 
                currentList: eval(prev), activePos: (eval(prev)).indexOf(this.state.currentPage) 
            });
        }

    }
    rotate = () => {

        var target = document.getElementById('keys');
        var region = new ZingTouch.Region(target);
        var previousAngle = 0;

                
        if( !this.binded ){
            this.binded = true;
            region.bind(target, 'rotate', function(e) {
                previousAngle += e.detail.distanceFromLast;
                if(previousAngle>25){
                    selectNext();
                    previousAngle=0;
                }else if(previousAngle<-25){
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
        <div>
            <link href="https://fonts.googleapis.com/css2?family=Amaranth:wght@400&display=swap" rel="stylesheet"></link>
            {/* <video autoPlay loop>
                <source src={video} type="video/mp4" />
            </video> */}

        <div className="main">

            
            <Screen state={this.state} />

            <div className="navigator" onMouseOver={this.rotate}>
                <div id="keys">
                    
                    <div className="menu-btn" onTouchStart={this.changeListToBack} onClick={this.changeListToBack}>
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
                <div className="play"  onClick={this.changeListToNext}>
                </div>
                
            </div>
        </div>
        </div>
      );
  }
}

export default App;
