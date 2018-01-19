import React, {Component} from "react";
import {observer} from "mobx-react/index";
import Slider from 'react-simple-range';

import VolumeIcon from 'react-icons/lib/md/volume-up';

@observer
class TrackVolume extends Component {
  render() {
    return <div className="track-volume">
      <div className="track-volume-icon">
        <VolumeIcon />
      </div>
      <div className="track-volume-slider">
        <Slider
          min={0}
          max={1}
          value={this.props.store.volume}
          sliderSize={2}
          sliderColor="#111111"
          trackColor="#111111"
          thumbSize={8}
          thumbColor="#111111"
          onChange={(newVolume) => this.props.store.volume = newVolume.percent }
        />
      </div>
    </div>
  }
}

export default TrackVolume;