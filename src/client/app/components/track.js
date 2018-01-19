import React, {Component} from "react";
import {observable} from "mobx";
import {observer} from "mobx-react";

import Player from './track/player';
import TrackDetails from './track/details';
import TrackControls from './track/controls';

import PlayIcon from 'react-icons/lib/md/play-circle-outline';
import PauseIcon from 'react-icons/lib/md/pause-circle-outline';

@observer
class Track extends Component {
  @observable
  store = {
    volume: 0.6,
    play: false
  };
  
  // plays / stops a given track
  playStop(e) {
    e.preventDefault();
    let player = e.target;
    
    // get mutual DIV parent of A and AUDIO tags
    do {
      player = player.parentElement;
    } while (player.tagName.toLowerCase() !== 'div');
    
    // pick the audio element
    player = player.children[0];
    
    if (!player) throw new Error(`Could not find an appropriate player`);
    
    // play / pause the player
    if (player.paused) {
      player.play();
      player.loop = false;
    } else {
      player.pause();
      player.loop = false;
    }
  }
  
  render() {
    let filePath = this.props.track.url.split('/');
    let title = filePath[filePath.length - 1];
    return <div id={"player-" + this.props.track.id} className="track">
      <Player
        src={this.props.track.url}
        // volume={this.props.volume}
        store={this.store}
      />
      <a onClick={this.playStop.bind(this)} className="play-button">
        {this.store.play ? <PauseIcon/> : <PlayIcon/>}
      </a>
      <TrackDetails artist={this.props.track.owner} title={title} />
      <TrackControls store={this.store} />
    </div>
  }
}

export default Track;