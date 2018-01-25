import React, {Component} from 'react';
import {observer} from 'mobx-react';

import Track from './track';
import AddTrack from './add-track';

// The playlist of the Looper
@observer
class Playlist extends Component {
  render() {
    let { playlist, tracklist } = this.props.store;
    return <div className="playlist">
      {/* Maps a list of downloaded tracks to Track components */}
      {playlist && playlist.length ?
        playlist.map(track => <Track key={track.id} track={track} store={this.props.store} />) : ''}
      {/* Last row is AddTrack, while there are tracks to add */}
      {playlist.length !== tracklist.length ?
        <AddTrack store={this.props.store} /> : ''}
    </div>;
  }
}

export default Playlist;