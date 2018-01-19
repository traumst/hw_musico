import React, {Component} from "react";
import {observer} from 'mobx-react';

import Add from 'react-icons/lib/md/add-circle-outline';

import Dropdown from './head/dropdown'

function playAllStopAll(e) {
  e.preventDefault();
  let allTracks = document.querySelectorAll('.playlist > div > audio');
  if (e.target.text === 'PLAY ALL') {
    // stop and rewind
    for (let i = 0; i < allTracks.length; i++) {
      allTracks[i].pause();
      allTracks[i].currentTime = 0;
    }
    // enable looping and play
    for (let i = 0; i < allTracks.length; i++) {
      allTracks[i].loop = true;
      allTracks[i].play();
    }
    e.target.text = 'STOP ALL'
  } else {
    // stop and rewind
    for (let i = 0; i < allTracks.length; i++) {
      allTracks[i].loop = false;
      allTracks[i].pause();
      allTracks[i].currentTime = 0;
    }
    e.target.text = 'PLAY ALL'
  }
}

@observer
class LooperHead extends Component {
  
  render() {
    // filter out items already in the playlist
    return <div className="looper-head">
      <a className="sync-all" href="javascript:void(0);">
        SYNC
      </a>
      <a className="play-all" onClick={playAllStopAll} href="javascript:void(0);">
        PLAY ALL
      </a>
      <Dropdown
        store={this.props.store}
        placeholder={<Add/>}
      />
    </div>
  }
}

export default LooperHead;