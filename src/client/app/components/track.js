import React, {Component} from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import {Progress} from 'react-sweet-progress';

import Player from './track/player';
import TrackDetails from './track/details';
import TrackControls from './track/controls';

import PlayIcon from 'react-icons/lib/md/play-arrow';
import PauseIcon from 'react-icons/lib/md/pause';

@observer
class Track extends Component {
  // state relevant to a given player
  @observable
  store = {
    volume: 0.6,
    playIcon: false,
    played: 0,
    player: null
  };

	playStop() {
		if (this.store.playIcon) {
			this.store.player.pause();
		} else {
			this.store.player.play();
		}
		this.store.player.loop = false;
	}

  render() {
    return <div id={`player-${this.props.track.id}`}
                className="track">
      <Player
        track={this.props.track}
        store={this.store}
        trackListStore={this.props.store}
      />
      <div onClick={this.playStop.bind(this)}>
        <div className="progress">
          <Progress
            type="circle"
            theme={{
              active: {
                symbol: '222222222222',
                color: '#73b700'
              }
            }}
            strokeWidth={8}
            width={30}
            percent={100 * this.store.played}
            status="success" />
        </div>
        <div className="play-button">
          {this.store.playIcon ? <PauseIcon/> : <PlayIcon/>}
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