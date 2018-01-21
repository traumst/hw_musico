import React, {Component} from "react";
import {observer} from 'mobx-react';

@observer
class LooperHead extends Component {
  
  syncAll(e) {
    e.preventDefault();
  }
	
	playAllStopAll(e) {
    e.preventDefault();
		if (e.target.text === 'PLAY ALL') {
			for (let player of this.props.store.audio) {
				player.stop();
			}
			for (let player of this.props.store.audio) {
				player.loop(true);
				player.play();
			}
			e.target.text = 'STOP ALL'
		} else {
		  // Stop All
			for (let player of this.props.store.audio) {
				player.loop(false);
				player.stop();
			}
			e.target.text = 'PLAY ALL'
    }
  }
  
  render() {
    // filter out items already in the playlist
    return <div>
      <div className="looper-head">
        <a className="sync-all" onClick={this.syncAll.bind(this)} href="javascript:void(0);">
          SYNC
        </a>
        <a className="play-all" onClick={this.playAllStopAll.bind(this)} href="javascript:void(0);">
          PLAY ALL
        </a>
      </div>
      <div className="playlist-label">
        Select Track
      </div>
    </div>
  }
}

export default LooperHead;