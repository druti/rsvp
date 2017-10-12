import React from 'react';
import T from 'proptypes';

const PendingGuest = props =>
    !props.name ? null :
      <li className="pending">
        <span>{props.name}</span>
      </li>

PendingGuest.propTypes = {
  name: T.string.isRequired,
};

export default PendingGuest;
