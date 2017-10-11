import React from 'react';
import T from 'proptypes';

import GuestInputForm from './GuestInputForm';

const Header = props =>
  <header>
    <h1>RSVP</h1>
    <p>A Treehouse App</p>
    <GuestInputForm
      pendingGuest={props.pendingGuest}
      newGuestSubmitHandler={props.newGuestSubmitHandler}
      handleNameInput={props.handleNameInput}
    />
  </header>

Header.propTypes = {
  newGuestSubmitHandler: T.func.isRequired,
  pendingGuest: T.string.isRequired,
  handleNameInput: T.func.isRequired,
};

export default Header;
