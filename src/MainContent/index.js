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
      setName={props.setName}
      removeGuest={props.removeGuest}
      toggleConfirmation={props.toggleConfirmation}
      toggleEditing={props.toggleEditing}
      isFiltered={props.isFiltered}
      pendingGuest={props.pendingGuest}
    />
  </div>

MainContent.propTypes = {
  numberAttending: T.number.isRequired,
  numberUnconfirmed: T.number.isRequired,
  totalInvited: T.number.isRequired,
  guests: T.array.isRequired,
  setName: T.func.isRequired,
  removeGuest: T.func.isRequired,
  toggleConfirmation: T.func.isRequired,
  toggleEditing: T.func.isRequired,
  toggleFilter: T.func.isRequired,
  isFiltered: T.bool.isRequired,
  pendingGuest: T.string.isRequired,
};

export default MainContent;
