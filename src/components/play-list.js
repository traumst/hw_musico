import React, {Component} from 'react';
import {observer} from 'mobx-react';

import Track from './track';
import AddTrack from './add-track';

// The playlist of the Looper
@observer
class Playlist extends Component {
  render() {
    return <div className="playlist">
      {/* Maps a list of downloaded tracks to Track components */}
      {this.props.store.playlist && this.props.store.playlist.length ?
       this.props.store.playlist.map(track => <Track
          key={track.id}
          track={track}
          store={this.props.store}/>) : ''}
      {/* Last row is AddTrack, while there are tracks to add */}
      {this.props.store.playlist.length !== this.props.store.tracklist.length ? <AddTrack store={this.props.store} /> : ''}
    </div>;
  }
}

export default Playlist;