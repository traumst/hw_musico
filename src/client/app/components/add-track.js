import React from 'react';
import { observer } from 'mobx-react';
import Select from 'react-autocomplete';

import Track from './track';

import PlusIcon from 'react-icons/lib/md/add';

// A class that fits into Track Elements
// Used for adding Tracks, clicking on the playlist
@observer
class AddTrack extends Track {
  handleAdd(e) {
    if (!e) throw new Error('Couldn\'t find a track matching');
    this.props.store.playlist.push(e);
  }

  render() {
    return <div className="add-track">
      <label htmlFor="add-track-id" className="plus-button">
        <PlusIcon />
      </label>
      <div className="track-details">
        <Select
         getItemValue={item => item}
         items={this.props.store.tracklist.filter(track => (
            !this.props.store.playlist.find(alreadyAdded => (
             alreadyAdded.id === track.id)
            )))
          .sort((a, b) => {return a.owner + a.title > b.owner + b.title;})}
         renderInput={(props) => {
           return <input {...props}
                         id="add-track-id"
                         className="add-track-select track-details"
                         value="Add Track..." />;
         }}
         menuStyle={{
           background: 'rgba(255, 255, 255, 1)',
           padding: '4px 4px',
           position: 'fixed',
           overflow: 'auto',
           maxHeight: '50%'
         }}
         renderItem={(item, isHighlighted) => {
           return <div key={item.id}
                       className='add-track-record'
                       style={{
                         background: isHighlighted ? '#cccccc' : 'white'
                       }}>
             <span className='add-track-title'>{item.title}</span>&nbsp;
              {item.owner ?
                <span className="add-track-by">by
                <span className="add-track-artist"> {item.owner}</span></span> : ''}
           </div>;
         }}
         onSelect={this.handleAdd.bind(this)}
        />
      </div>
    </div>;
  }
}

export default AddTrack;