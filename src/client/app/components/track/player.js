import React, {Component} from "react";
import {observer} from "mobx-react";
import {Howl} from 'howler';

@observer
class Player extends Component{

	player = null;
	updatePlayProgress = null;
	
	constructor(props) {
		super(props);
		
	  // Create new player
		this.player = new Howl({
			html5: true, // MUST use HTML5 due to CORS
			src: [props.src],
			volume: props.store.volume,
			preload: true,
			loop: false,
			autoplay: false
		});
		this.player.on('play', () => {
			this.updatePlayProgress = setInterval(() => {
				props.store.played = this.player.seek() / this.player.duration();
			}, 100);
			props.store.playIcon = true;
			props.trackListStore.playing = true;
		});
		this.player.on('pause', () => {
			clearInterval(this.updatePlayProgress);
			props.store.playIcon = false;
			props.trackListStore.playing = props.trackListStore.audio.some(track => track.playing());
		});
		this.player.on('stop', () => {
			clearInterval(this.updatePlayProgress);
			props.store.playIcon = false;
			props.trackListStore.playing = props.trackListStore.audio.some(track => track.playing());
			props.store.played = 0;
		});
		this.player.on('end', () => {
			clearInterval(this.updatePlayProgress);
			props.store.playIcon = false;
			props.trackListStore.playing = props.trackListStore.audio.some(track => track.playing());
			props.store.played = 0;
		});
		// Register current audio on Track element
		props.store.player = this.player;
		// Register current audio on Looper element
		props.trackListStore.audio.push(this.player);
	}

	render() {
		this.player.volume(this.props.store.volume);
		return <div className="web-audio-player"></div>
	}
}

// export default Player;
export default Player;