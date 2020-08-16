import React from 'react';
import Screen from './components/Screen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward, faBackward, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import ZingTouch from 'zingtouch';

const Home = ['Music' , 'Game' ,'Settings', 'About'];
const Music = ['Songs', 'Artists'];
const Game = [], Settings = [], About = [];
const Songs = ['Eminem - Rap God', 'Imagine Dragons - Thunder', 'Luis Fonsi - Despacito ft. Daddy Yankee', 'Maroon 5 - Girls Like You ft. Cardi B', 'Sia - Cheap Thrills'];
const Artists = ['Imagine dragons', 'Eminem', 'Luis Fonsi', 'Maroon 5', 'Sia'];


class App extends React.Component {

    constructor () {
        super();
        this.state = {
            currentPage: 'Home',
            currentList: Home,
            activePos: 0,
            play: false,
            song: Songs[0]

        }
        this.lis = document.querySelectorAll('.screen li');
        this.route = '/Home/';
        this.Lists = [Home, Music, Game, Settings, Songs, Artists, About];
        this.binded = false;
        this.aud = document.querySelector('audio');

    }
   
    changeListToNext = () => {
        var listAvailable = true;
        var list = [];
        let currentPage = this.state.currentList[this.state.activePos];
        try {
            list = eval(currentPage);
        } catch (err) {
            listAvailable = false;
        }
        this.lis = document.querySelectorAll('.screen li');

        if (this.lis.length!==0 && listAvailable){
            this.setState({
                currentPage,
                currentList: list,
                activePos: 0
            });
            this.route += currentPage + '/';
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
                currentList: eval(prev), 
                activePos: (eval(prev)).indexOf(this.state.currentPage) 
            });
        }

    }
    TogglePlayPauseMusic = () => {
        this.aud = document.querySelector('audio');
        if (!this.state.play){
            this.aud.play();
            this.setState({
                play: true
            })
        }
        else {
            this.aud.pause();
            this.setState({
                play: false
            })
        }
    }
    SelectMusic = () => {
        this.setState({
            song: Songs[this.state.activePos],
            play: false
        }, () => {
            this.aud = document.querySelector('audio');
            this.aud.src = process.env.PUBLIC_URL + '/Audios/' + this.state.song +'.mp3';
            this.TogglePlayPauseMusic();
        })
    }
    PlayNext = () => {
        let currentIndex = Songs.indexOf(this.state.song);
        let nextIndex = currentIndex+1;
        if (nextIndex === Songs.length){
            nextIndex = 0;
        }
        
        this.setState({
            song: Songs[nextIndex],
            play: false
        }, () => {
            this.aud = document.querySelector('audio');
            this.aud.src = process.env.PUBLIC_URL + '/Audios/' + this.state.song +'.mp3';
            this.TogglePlayPauseMusic();
        })
    }
    PlayPrevious = () => {
        let currentIndex = Songs.indexOf(this.state.song);
        let prevIndex = currentIndex-1;
        if (prevIndex === -1){
            prevIndex = Songs.length-1;
        }
        
        this.setState({
            song: Songs[prevIndex],
            play: false
        }, () => {
            this.aud = document.querySelector('audio');
            this.aud.src = process.env.PUBLIC_URL + '/Audios/' + this.state.song +'.mp3';
            this.TogglePlayPauseMusic();
        })
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
        <div className="main">

            <audio src={process.env.PUBLIC_URL + '/Audios/' + this.state.song +'.mp3'} />
                
            <Screen state={this.state} />

            <div className="navigator" onMouseOver={this.rotate}>
                <div id="keys">
                    
                    <div className="menu-btn" onTouchStart={this.changeListToBack} onClick={this.changeListToBack}>
                        MENU
                    </div>
                    <div className="fwd">
                        <FontAwesomeIcon icon={faForward} onClick={this.PlayNext}/>
                    </div>
                    <div className="bkd">
                      <FontAwesomeIcon icon={faBackward} onClick={this.PlayPrevious}/>       
                    </div>
                    <div className="play-pause">
                        { this.state.play 
                            ? <FontAwesomeIcon icon={faPause} onClick={this.TogglePlayPauseMusic}/> 
                            : <FontAwesomeIcon icon={faPlay} onClick={this.TogglePlayPauseMusic}/>
                        }
                    </div>
                </div>
                <div 
                    className="play" 
                    onClick={
                        this.state.currentPage === 'Songs'
                        ? this.SelectMusic
                        : this.changeListToNext
                        
                    }>
                </div>
                
            </div>
        </div>
        </div>
      );
  }
}

export default App;
