import React, {Component} from "react";
import {observer} from 'mobx-react';

@observer
class Dropdown extends Component {
  
  handleAdd(e) {
    // get ID of the selected object
    let pickedTrackId = e.target.item(e.target.selectedIndex).value;
    // find a track matching the ID
    let trackToAdd = this.props.store.tracklist.find(track => track.id == pickedTrackId);
    if (!trackToAdd) throw new Error(`Couldn\'t find a track matching`);
    // add the track to the playlist
    this.props.store.playlist.push(trackToAdd);
  }
  
  render() {
    return <select className="add-track-select" onChange={this.handleAdd.bind(this)}>
      <option className="add-track-header" disabled>ADD TRACKS:</option>
      {this.props.store.tracklist.filter(track => !this.props.store.playlist.find(alreadyAdded => alreadyAdded.id === track.id))
      // order list by owner and track title
        .sort((a, b) => {return a.owner + a.title > b.owner + b.title})
        // map every track to an OPTION element
        .map(track => <option key={track.id} value={track.id}>{`${track.owner} - ${track.title}`}</option>)}
    </select>
  }
}

export default Dropdown