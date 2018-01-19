import React from 'react';

const TrackDetails = (props) => (
  <div className="track-details">
    {/*TODO set track meta-data*/}
    <div className="track-artist">{props.artist}</div>
    <div className="track-title">{props.title}</div>
  </div>);

export default TrackDetails;