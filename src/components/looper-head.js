import React, {Component} from 'react';
import {observer} from 'mobx-react';

// Upper part of the looper
// Sync and Play All
@observer
class LooperHead extends Component {

	// Dummy method
  syncAll(e) {
    e.preventDefault();
  }

	playAllStopAll(e) {
    e.preventDefault();
		if (e.target.text === 'PLAY ALL' && this.props.store.audio.length) {
			for (let player of this.props.store.audio) {
				player.stop();
			}
			// Play All
			this.props.store.looping = true;
			for (let player of this.props.store.audio) {
				player.loop = true;
				player.play();
			}
			e.target.text = 'STOP ALL';
		} else {
			// Stop All
			this.props.store.looping = false;
			for (let player of this.props.store.audio) {
				player.loop = false;
				player.stop();
			}
			e.target.text = 'PLAY ALL';
    }
  }

  render() {
    return <div>
      <div className="looper-head">
        <a className="sync-all"
           onClick={this.syncAll.bind(this)}
           href="javascript:void(0);">
          SYNC
        </a>
        <a className="play-all"
           onClick={this.playAllStopAll.bind(this)}
           href="javascript:void(0);">
					{ this.props.store.playing ? 'STOP ALL' : 'PLAY ALL' }
        </a>
      </div>
      <div className="playlist-label">
        Select Track
      </div>
    </div>;
  }
}

export default LooperHead;