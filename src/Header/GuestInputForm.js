import React from 'react';
import T from 'proptypes';

const GuestInputForm = props =>
  <form onSubmit={props.newGuestSubmitHandler}>
    <input
      type="text"
      value={props.pendingGuest}
      onChange={props.handleNameInput}
      placeholder="Invite Someone"
    />
    <button type="submit">Submit</button>
  </form>

GuestInputForm.propTypes = {
  newGuestSubmitHandler: T.func.isRequired,
  pendingGuest: T.string.isRequired,
  handleNameInput: T.func.isRequired,
};

export default GuestInputForm;
