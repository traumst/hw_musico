import React, {Component} from "react";
import {observer} from "mobx-react/index";

import TrackDelete from './delete';
import TrackVolume from './volume';

@observer
class TrackControls extends Component {
  render() {
    debugger 
    return <div className="track-controls">
      <TrackDelete store={this.props.looperStore}/>
      <TrackVolume store={this.props.store} />
    </div>
  }
}

export default TrackControls;