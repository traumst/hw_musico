import React from 'react';

import DeleteIcon from 'react-icons/lib/md/delete';

const TrackDelete = (props) => <div className="track-delete">
    <a onClick={()=>{
      props.store.player.stop();
      props.looperStore.playlist = props.looperStore.playlist.filter(existing => existing.id !== props.trackId);
      props.looperStore.audio = props.looperStore.audio.filter(existing => existing.id !== props.trackId);
    }} >
      <DeleteIcon />
    </a>
  </div>;

export default TrackDelete;