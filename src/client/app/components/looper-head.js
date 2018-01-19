// Sync all, Play all
import React, {Component} from "react";
import {observer} from 'mobx-react';
import {observable} from 'mobx';

import Add from 'react-icons/lib/md/add-circle-outline';

@observer
class Dropdown extends Component {
  
  handleAdd(e) { this.props.selectedId(e.target.item(e.target.selectedIndex)) }

  render() {
    return <select className="styled-select" onChange={this.handleAdd.bind(this)}>
      {this.props.tracks.map(track => <option key={track.id} value={track.id}>{track.title}</option>)}
    </select>
  }
}

@observer
class LooperHead extends Component {
  
  // @observable
  // store = {
  //   selected: null
  // };
  
  // plays / stops all tracks in the playlist
  playAllStopAll(e) {
    e.preventDefault();
    let allTracks = document.querySelectorAll('.playlist > div > audio');
    if (e.target.text === 'Play') {
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
      e.target.text = 'Stop'
    } else {
      // stop and rewind
      for (let i = 0; i < allTracks.length; i++) {
        allTracks[i].loop = false;
        allTracks[i].pause();
        allTracks[i].currentTime = 0;
      }
      e.target.text = 'Play'
    }
  }
  
  handleAdd(selected) {
    this.store.selected = selected;
    console.log(`Selected: ${selected.label}`);
  }
  
  render() {
    // filter out items already in the playlist
    return <div className="looper-head">
      <a className="sync-all" href="javascript:void(0);">
        Sync
      </a>
      <a className="play-all" onClick={this.playAllStopAll.bind(this)} href="javascript:void(0);">
        Play
      </a>
      <Dropdown
        tracks={this.props.store.tracklist.filter(track => {
          return !this.props.store.playlist.find(alreadyAdded => alreadyAdded.id === track.id)
        })
          // .map(track => (`${track.owner} - ${track.title}`))
          .map(track => ({
            id: track.id,
            title: track.title,
            artist: track.owner
          }))
          .sort((a, b) => {return a.value > b.value})} // sort in ASCENDING order
        placeholder={<Add/>}
      />
    </div>
  }
}

export default LooperHead;