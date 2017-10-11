import React from 'react';
import T from 'proptypes';

import Guest from './Guest';
import PendingGuest from './PendingGuest';

const GuestList = props =>
  <ul>
    {props.pendingGuest ? <PendingGuest name={props.pendingGuest} /> : null }
    {props.guests
      .map((guest, index) =>
        <Guest
          name={guest.name}
          isConfirmed={guest.isConfirmed}
          isEditing={guest.isEditing}
          handleConfirmation={() => props.toggleConfirmationAt(index)}
          handleToggleEditing={() => props.toggleEditingAt(index)}
          key={index}
          setName={name => props.setNameAt(name, index)}
          removeGuest={() => props.removeGuestAt(index)}
        />
    ).filter(guest => !props.isFiltered || guest.props.isConfirmed)}
  </ul>;

GuestList.propTypes = {
  guests: T.array.isRequired,
  setNameAt: T.func.isRequired,
  removeGuestAt: T.func.isRequired,
  toggleConfirmationAt: T.func.isRequired,
  toggleEditingAt: T.func.isRequired,
  isFiltered: T.bool.isRequired,
  pendingGuest: T.string.isRequired,
};

export default GuestList;
