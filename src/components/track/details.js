import React from 'react';

const TrackDetails = (props) => (
  <div className="track-details">
    <div className="track-artist">{props.artist}</div>
    <div className="track-title">{props.title}</div>
    <div className="track-bpm">{props.bpm}</div>
  </div>);

export default TrackDetails;