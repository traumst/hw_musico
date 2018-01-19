import React from 'react';
import {observer} from "mobx-react";

import Track from '../track';

import PlusIcon from 'react-icons/lib/md/add';

// A class that fits into Track Elements
// Used for adding Tracks, clicking on the playlist
@observer
class AddTrack extends Track {
  render() {
    return <div id={"player-0"} className="track">
      <a onClick={() => this.props.store} className="play-button">
        <PlusIcon />
      </a>
      <div className="track-details">
        *Add track to the playlist
      </div>
    </div>
  }
}

export default AddTrack;