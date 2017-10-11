import React from 'react';
import T from 'proptypes';

const Counter = props =>
  <table className="counter">
    <tbody>
      <tr>
        <td>Attending:</td>
        <td>{props.numberAttending}</td>
      </tr>
      <tr>
        <td>Unconfirmed:</td>
        <td>{props.numberUnconfirmed}</td>
      </tr>
      <tr>
        <td>Total:</td>
        <td>{props.totalInvited}</td>
      </tr>
    </tbody>
  </table>

Counter.propTypes = {
  numberAttending: T.number.isRequired,
  numberUnconfirmed: T.number.isRequired,
  totalInvited: T.number.isRequired,
};

export default Counter;
