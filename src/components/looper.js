import React, {Component} from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import axios from 'axios';

import LooperHead from './looper-head';
import PlayList from './play-list';

@observer
class Looper extends Component {

  // global store, holds playlists and properties relevant to the Looper and
  // its sub-components
  @observable
  store = {
    tracklist: [],
    playlist: [],
    audio: [],
    playing: false,
    looping: false
  };

  componentDidMount() {
    // download HARDCODED player list
    axios.get('public/trackList.json')
      .then(res => {
        // update state to reflect received data
        this.store.tracklist = res.data.map(track => {
          // get the filename from url
          let fileName = track.url.slice(track.url.lastIndexOf('/') + 1);
          // remove file extension
          let title = fileName.slice(0, fileName.lastIndexOf('.') > -1 ?
              fileName.lastIndexOf('.') : fileName.length);
          // HERE we will calculate tracks' BPM.
          // This will probably rely on Web Audio API and the solution
          // will be based on this article http://joesul.li/van/beat-detection-using-web-audio/
          let bpm = (() => {
            return 'BPM: placeholder';
          })();

          return {
            id: track.id,
            url: track.url,
            owner: track.owner,
            title: title,
            bpm: bpm
          };
        });
      })
      .catch(err => {
        console.error(err, 'Failed to parse Track List.\nThis is a problem.');
      });
  }

  render() {
    return <div className="looper">
      <LooperHead
        store={this.store}
      />
      <PlayList
        store={this.store}
      />
      </div>;
  }
}

export default Looper;