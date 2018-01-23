import React, {Component} from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import {Progress} from 'react-sweet-progress';

import Player from './track/player';
import TrackDetails from './track/details';
import TrackControls from './track/controls';

import PlayIcon from 'react-icons/lib/md/play-arrow';
import PauseIcon from 'react-icons/lib/md/pause';

// Represents evety record in the Playlist
@observer
class Track extends Component {
  // state relevant to this track
  @observable
  store = {
    volume: 0.6,
    playing: false,
    played: 0,
    player: null
  };

	playPause() {
		if (this.store.playing) {
			this.store.player.pause();
		} else {
			this.store.player.play();
		}
		this.store.player.loop = false;
	}

	// This component consists of quite a few elements:
	//  player    - invisible, handles the actual media playback
	//  progress  - overlayed over the icon, it fills up to show play progress
	//  icon      - leftmost, displays Play or Pause icon according to state
	//  details   - middle, contains track's title, author and BPM
	//  controls - rightmost, delete and volume control
  render() {
    return <div id={`player-${this.props.track.id}`}
                className="track">
      <Player
        track={this.props.track}
        store={this.store}
        looperStore={this.props.store}
      />
      <div onClick={this.playPause.bind(this)}>
        <div className="progress">
          <Progress
            type="circle"
            theme={{ active: { color: '#73b700' } }}
            strokeWidth={8}
            width={30}
            percent={100 * this.store.played}
            status="success" />
        </div>
        <div className="play-button">
          {this.store.playing ? <PauseIcon/> : <PlayIcon/>}
        </div>
        <TrackDetails artist={this.props.track.owner}
                      title={this.props.track.title}
                      bpm={this.props.track.bpm} />
      </div>
      <TrackControls store={this.store}
                     looperStore={this.props.store}
                     trackId={this.props.track.id} />
    </div>;
  }
}

export default Track;