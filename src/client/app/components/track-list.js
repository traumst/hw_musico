import React, {Component} from 'react';
import Track from './track';

import {observer} from 'mobx-react';
import {observable} from 'mobx';

@observer
class Tracklist extends Component {
  render() {
    return <div className="playlist">
      {/* Maps a list of downloaded tracks to LooperTrack components */}
      {this.props.playlist && this.props.playlist.length ? this.props.playlist.map(track => {
        return <Track
          key={track.id}
          track={track}
        />}) : <div>No tracks in the list</div>}
    </div>
  }
}

export default Tracklist;