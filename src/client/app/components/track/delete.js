import React from 'react';

import DeleteIcon from 'react-icons/lib/md/delete';
// import DeleteIcon from 'react-icons/lib/ti/times';

const TrackDelete = (props) => (
  <div className="track-delete">
    <a onClick={()=>{
	    props.store.player.stop();
      props.looperStore.playlist = props.looperStore.playlist.filter(track => track.id !== props.trackId);
    }}>
      <DeleteIcon />
    </a>
  </div>);

export default TrackDelete;