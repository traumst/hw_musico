import React, {Component} from "react";
import {observer} from "mobx-react/index";

import TrackDelete from './delete';
import TrackVolume from './volume';

@observer
class TrackControls extends Component {
  render() {
    return <div className="track-controls">
      <TrackDelete looperStore={this.props.looperStore}
                   store={this.props.store}
                   trackId={this.props.trackId} />
      <TrackVolume store={this.props.store} />
    </div>
  }
}

export default TrackControls;