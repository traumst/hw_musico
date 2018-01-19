import React from 'react';

import DeleteIcon from 'react-icons/lib/md/delete';

const TrackDelete = (props) => (
  <div className="track-delete">
    <a onClick={()=>{
      console.log(props.trackId);
      props.store.playlist = props.store.playlist.filter(track => track.id !== props.trackId);
    }}>
      <DeleteIcon />
    </a>
  </div>);

export default TrackDelete;