import React from 'react';

import DeleteIcon from 'react-icons/lib/md/delete';

function deleteTrack(e) {
  
}

const TrackDelete = (props) => (
  <div className="track-delete">
    <a onClick={()=>{
      console.log(props)
    }}>
      <DeleteIcon />
    </a>
  </div>);

export default TrackDelete;