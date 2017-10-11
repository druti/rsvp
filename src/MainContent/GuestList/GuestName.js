import React from 'react';
import T from 'proptypes';

const GuestName = props => {
  if (props.isEditing) {
    return (
      <input
        type="text"
        value={props.children}
        onChange={props.handleNameEdits}
      />
    );
  }

  return (
    <span>{props.children}</span>
  );
}

GuestName.propTypes = {
  isEditing: T.bool.isRequired,
  handleNameEdits: T.func.isRequired,
};

export default GuestName;
