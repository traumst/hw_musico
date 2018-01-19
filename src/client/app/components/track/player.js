import React, {Component} from "react";
import {observer} from "mobx-react/index";

import ReactAudioPlayer from 'react-audio-player';

@observer
class Player extends Component {
  render() {
    return <ReactAudioPlayer
      src={this.props.src}
      preload="auto"
      volume={this.props.store.volume}
      onPause={() => this.props.store.play = false}
      onPlay={() => this.props.store.play = true}
    >
      Your browser does not support HTML5
    </ReactAudioPlayer>
  }
}

export default Player;