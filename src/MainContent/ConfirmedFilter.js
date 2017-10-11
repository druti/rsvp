import React from 'react';
import T from 'proptypes';

const ConfirmedFilter = props =>
  <div>
    <h2>Invitees</h2>
    <label>
      <input
        type="checkbox"
        onChange={props.toggleFilter}
        checked={props.isFiltered}
      /> Hide those who haven't responded
    </label>
  </div>

ConfirmedFilter.propTypes = {
  toggleFilter: T.func.isRequired,
  isFiltered: T.bool.isRequired,
};

export default ConfirmedFilter;
