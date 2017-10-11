import React from 'react';
import T from 'proptypes';
import GuestName from './GuestName';

const Guest = props =>
    <li className={props.isConfirmed ? 'responded' : ''}>
      <GuestName
        isEditing={props.isEditing}
        handleNameEdits={e => props.setName(e.target.value)}>
          {props.name}
      </GuestName>
      <label>
        <input
          type="checkbox"
          checked={props.isConfirmed}
          onChange={props.handleConfirmation} /> Confirmed
      </label>
      <button
        onClick={props.handleToggleEditing}>
          {props.isEditing ? 'save' : 'edit'}
      </button>
      <button onClick={props.removeGuest}>remove</button>
    </li>

Guest.propTypes = {
  name: T.string.isRequired,
  isConfirmed: T.bool.isRequired,
  isEditing: T.bool.isRequired,
  handleConfirmation: T.func.isRequired,
  handleToggleEditing: T.func.isRequired,
  setName: T.func.isRequired,
  removeGuest: T.func.isRequired,
};

export default Guest;
