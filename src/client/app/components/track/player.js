import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {Howl} from 'howler';

@observer
class Player extends Component{

	player = null;
	updatePlayProgress = null;

	unsetAudio(store, trackListStore, track) {
		clearInterval(this.updatePlayProgress);
		store.playIcon = false;
		trackListStore.playing = trackListStore.audio.some(existing => existing.playing());
	}

	constructor(props) {
		super(props);
		let {store, trackListStore, track} = props;
		// Create new player
		this.player = new Howl({
			html5: true, // MUST use HTML5 due to CORS
			src: [track.url],
			volume: store.volume,
			preload: true,
			loop: false,
			autoplay: false
		});
		this.player.id = track.id;
		this.player.on('play', () => {
			this.updatePlayProgress = setInterval(() => {
				store.played = this.player.seek() / this.player.duration();
			}, 100);
			store.playIcon = true;
			trackListStore.playing = true;
		});
		this.player.on('pause', () => this.unsetAudio(store, trackListStore, track));
		this.player.on('stop', () => {
			this.unsetAudio(store, trackListStore, track);
			store.played = 0;
		});
		this.player.on('end', () => {
			this.unsetAudio(store, trackListStore, track);
			store.played = 0;
		});
		// Register current audio on Track element
		store.player = this.player;
		// Register current audio on Looper element
		trackListStore.audio.push(this.player);
	}

	render() {
		this.player.volume(this.props.store.volume);
		return <div className="web-audio-player"></div>;
	}
}

// export default Player;
export default Player;