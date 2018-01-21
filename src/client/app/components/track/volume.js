import React, {Component} from "react";
import {observer} from "mobx-react";
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
          max={100}
          value={this.props.store.volume * 100}
          sliderSize={2}
          sliderColor="silver"
          trackColor="#111111"
          thumbSize={12}
          thumbColor="#111111"
          onChange={newVolume => { this.props.store.volume = newVolume.percent }}
        />
      </div>
    </div>
  }
}

export default TrackVolume;