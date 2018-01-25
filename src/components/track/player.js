import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {Howler, Howl} from 'howler';

@observer
class Player extends Component{

	player = null;
	updatePlayProgress = null;

	handleStopPause(store, trackListStore) {
		// stop checking play progress
		clearInterval(this.updatePlayProgress);
		store.playing = false;
		trackListStore.playing = trackListStore.audio.some(existing => existing.playing());
	}

	constructor(props) {
		super(props);
		let {store, looperStore, track} = props;
		// Create new player
		this.player = new Howl({
			html5: true, // MUST use HTML5 due to CORS limitation on WebAudio
			src: [track.url],
			volume: store.volume,
			preload: true,
			loop: looperStore.looping,
			autoplay: looperStore.playing
		});
		this.player.id = track.id;
		this.player.on('play', () => {
			this.updatePlayProgress = setInterval(() => {
				store.played = this.player.seek() / this.player.duration();
			}, 100);
			store.playing = true;
			looperStore.playing = true;
		});
		this.player.on('pause', () => this.handleStopPause(store, looperStore));
		this.player.on('stop', () => {
			this.handleStopPause(store, looperStore);
			store.played = 0;
		});
		this.player.on('end', () => {
			this.handleStopPause(store, looperStore);
			store.played = 0;
		});
		// Register current audio on Track element
		store.player = this.player;
		// Register current audio on Looper element
		looperStore.audio.push(this.player);
	}

	render() {
		// let biquadFilter = Howler.ctx.createBiquadFilter({type: "lowpass";})
		// console.log(biquadFilter)
		// debugger
		// set volume to pre-determined default value
		this.player.volume(this.props.store.volume);
		return <div className="web-audio-player"></div>;
	}
}

// export default Player;
export default Player;