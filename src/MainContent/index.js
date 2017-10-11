import React from 'react';
import T from 'proptypes';

import ConfirmedFilter from './ConfirmedFilter';
import Counter from './Counter';
import GuestList from './GuestList';

const MainContent = props =>
  <div className="main">
    <ConfirmedFilter
      toggleFilter={props.toggleFilter}
      isFiltered={props.isFiltered}
    />
    <Counter
      numberAttending={props.numberAttending}
      numberUnconfirmed={props.numberUnconfirmed}
      totalInvited={props.totalInvited}
    />
    <GuestList
      guests={props.guests}
      setNameAt={props.setNameAt}
      removeGuestAt={props.removeGuestAt}
      toggleConfirmationAt={props.toggleConfirmationAt}
      toggleEditingAt={props.toggleEditingAt}
      isFiltered={props.isFiltered}
      pendingGuest={props.pendingGuest}
    />
  </div>

MainContent.propTypes = {
  numberAttending: T.number.isRequired,
  numberUnconfirmed: T.number.isRequired,
  totalInvited: T.number.isRequired,
  guests: T.array.isRequired,
  setNameAt: T.func.isRequired,
  removeGuestAt: T.func.isRequired,
  toggleConfirmationAt: T.func.isRequired,
  toggleEditingAt: T.func.isRequired,
  toggleFilter: T.func.isRequired,
  isFiltered: T.bool.isRequired,
  pendingGuest: T.string.isRequired,
};

export default MainContent;
