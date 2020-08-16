import React from 'react';
import Screen from './components/Screen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward, faBackward, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import ZingTouch from 'zingtouch';

const home = ['music' , 'video' , 'game' ,'settings', 'about'];
const music = ['songs', 'albums', 'artists', 'playlists'];
const game = [], settings = [], about = [];
const songs = ['Alan Walker - Faded','Eminem - Rap God', 'Luis Fonsi - Despacito ft. Daddy Yankee', 'Maroon 5 - Girls Like You ft. Cardi B', 'Sia - Cheap Thrills'];
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
            play: false,
            song: songs[0]

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
    TogglePlayPauseMusic = () => {
        var aud = document.querySelector('audio');
        if (!this.state.play){
            aud.play();
            this.setState({
                play: true
            })
        }
        else {
            aud.pause();
            this.setState({
                play: false
            })
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
    const song = 'Rap God.mp3';
    return (
        <div>
        <link href="https://fonts.googleapis.com/css2?family=Amaranth:wght@400&display=swap" rel="stylesheet"></link>
        <div className="main">

            <audio>
                <source src={process.env.PUBLIC_URL + '/Audios/' + this.state.song +'.mp3'}></source>
            </audio>
                
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
                        { this.state.play 
                            ? <FontAwesomeIcon icon={faPause} onClick={this.TogglePlayPauseMusic}/> 
                            : <FontAwesomeIcon icon={faPlay} onClick={this.TogglePlayPauseMusic}/>
                        }
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
