import React, {Component} from 'react';
import {observer} from 'mobx-react';

import Track from './track';
import AddTrack from './add-track';

// Maps tracks in the playlist to the to the Track element
@observer
class Tracklist extends Component {
  render() {
    return <div className="playlist">
      {/* Maps a list of downloaded tracks to Track components */}
      {this.props.store.playlist && this.props.store.playlist.length ? 
        this.props.store.playlist.map(track => <Track
         key={track.id}
         track={track}
         store={this.props.store}/>) : ''}
      {/* Last player is always AddTrack */}
      <AddTrack
       store={this.props.store} />
    </div>
  }
}

export default Tracklist;