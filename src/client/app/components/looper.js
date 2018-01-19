import React, {Component} from "react";
import {observable, autorun} from "mobx";
import {observer} from 'mobx-react';

import axios from 'axios';

import LooperHead from './looper-head';
import TrackList from './track-list';

require("./../css/style.less");

@observer
class Looper extends Component {
  
  @observable
  store = {
    tracklist: [],
    playlist: [{
      "id":2,
      "url":"https://s3.amazonaws.com/candidate-task/Track+2.mp3",
      "owner":"Yonatan Pistiner"
    }]
  };
  
  constructor(props) {
    super(props);
    autorun(() => {
      console.log('#########', this.store.playlist.length)
      // this.store.playlist = this.store.playlist.map((track) => {
      //   track.buffer = 
      //   return track;
      // })
    })
  }
  
  componentDidMount() {
    // download HARDCODED track list
    axios.get(`public/trackList.json`)
      .then(res => {
        // update state to reflect received data
        this.store.tracklist = res.data.map(track => {
          return {
            id: track.id,
            url: track.url,
            owner: track.owner,
            title: track.url.slice(track.url.lastIndexOf('/') + 1)
          }
        });
      })
      .catch(err => {
        console.error(err, "Failed to parse Track List.\nThis is a problem.")
      })
  }
  
  render() {
    return <div className="looper">
      <LooperHead
        store={this.store}  
      />
      <div className="playlist-label">Select tracks</div>
      <TrackList
        store={this.store}
      />
      </div>
  };
}

export default Looper;