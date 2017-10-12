import React from 'react';
import T from 'proptypes';

import Guest from './Guest';
import PendingGuest from './PendingGuest';

const GuestList = props =>
  <ul>
    <PendingGuest name={props.pendingGuest} />
    {props.guests
      .filter(guest => !props.isFiltered || guest.isConfirmed)
      .map((guest) =>
        <Guest
          name={guest.name}
          isConfirmed={guest.isConfirmed}
          isEditing={guest.isEditing}
          handleConfirmation={() => props.toggleConfirmation(guest.id)}
          handleToggleEditing={() => props.toggleEditing(guest.id)}
          key={guest.id}
          setName={name => props.setName(name, guest.id)}
          removeGuest={() => props.removeGuest(guest.id)}
        />
    )}
  </ul>;

GuestList.propTypes = {
  guests: T.array.isRequired,
  setName: T.func.isRequired,
  removeGuest: T.func.isRequired,
  toggleConfirmation: T.func.isRequired,
  toggleEditing: T.func.isRequired,
  isFiltered: T.bool.isRequired,
  pendingGuest: T.string.isRequired,
};

export default GuestList;
