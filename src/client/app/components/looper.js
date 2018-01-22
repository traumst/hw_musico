import React, {Component} from "react";
import {observable} from "mobx";
import {observer} from 'mobx-react';
import axios from 'axios';

import LooperHead from './looper-head';
import TrackList from './track-list';

@observer
class Looper extends Component {
  
  @observable
  store = {
    tracklist: [],
    playlist: [],
    audio: [],
    playing: false
  };
  
  componentDidMount() {
    // download HARDCODED player list
    axios.get(`public/trackList.json`)
      .then(res => {
        // update state to reflect received data
        this.store.tracklist = res.data.map(track => {
          // get the filename from url
          let fileName = track.url.slice(track.url.lastIndexOf('/') + 1);
          // remove file extension
          let title = fileName.slice(0, fileName.lastIndexOf('.') > -1 ?
              fileName.lastIndexOf('.') : fileName.length);
          return {
            id: track.id,
            url: track.url,
            owner: track.owner,
            title: title
          }
        });
      })
      .catch(err => {
        console.error(err, "Failed to parse Track List.\nThis is a problem.")
      })
  }
  
  render() {
    console.log('############', this.store.playing)
    return <div className="looper">
      <LooperHead
        store={this.store}  
      />
      <TrackList
        store={this.store}
      />
      </div>
  };
}

export default Looper;