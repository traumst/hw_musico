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
      onPause={() => this.props.store.playIcon = false}
      onPlay={() => this.props.store.playIcon = true}
    >
      Your browser does not support HTML5
    </ReactAudioPlayer>
  }
}

export default Player;