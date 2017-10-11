import React, { Component } from 'react';

import Header from './Header';
import MainContent from './MainContent';

class App extends Component {
  state = {
    isFiltered: false,
    pendingGuest: '',
    guests: [
      {
        name: 'Treasure',
        isConfirmed: false,
        isEditing: false,
      },
      {
        name: 'Sandra',
        isConfirmed: true,
        isEditing: false,
      },
      {
        name: 'Nic',
        isConfirmed: true,
        isEditing: true,
      },
    ],
  }

  updateGuestPropertyAt = (property, indexToChange, value) => {
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        return index !== indexToChange ? guest : {
          ...guest,
          [property]: typeof value !== 'undefined' ? value : !guest[property],
        };
      })
    });
  }

  setNameAt = (value, index) =>
    this.updateGuestPropertyAt('name', index, value)

  removeGuestAt = index =>
    this.setState({
      guests: [
        ...this.state.guests.slice(0, index),
        ...this.state.guests.slice(index + 1),
      ],
    })

  toggleConfirmationAt = index =>
    this.updateGuestPropertyAt('isConfirmed', index)

  toggleEditingAt = index =>
    this.updateGuestPropertyAt('isEditing', index)

  toggleFilter = () => 
    this.setState({ isFiltered: !this.state.isFiltered })

  handleNameInput = e =>
    this.setState({ pendingGuest: e.target.value})

  newGuestSubmitHandler = e => {
    e.preventDefault();
    if (this.state.pendingGuest) {
      this.setState({
        guests: [{
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false,
        }, ...this.state.guests],
        pendingGuest: '',
      });
    }
  }

  getTotalInvited = () => this.state.guests.length

  getAttendingGuests = () =>
    this.state.guests.reduce((counter, guest) => {
      return guest.isConfirmed ? ++counter : counter;
    }, 0)

  getUnconfirmedGuests = () =>
    this.state.guests.reduce((counter, guest) => {
      return !guest.isConfirmed ? ++counter : counter;
    }, 0)

  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;
    return (
      <div className="App">
        <Header
          newGuestSubmitHandler={this.newGuestSubmitHandler}
          pendingGuest={this.state.pendingGuest}
          handleNameInput={this.handleNameInput}
        />
        <MainContent
          toggleFilter={this.toggleFilter}
          isFiltered={this.state.isFiltered}
          numberAttending={numberAttending}
          numberUnconfirmed={numberUnconfirmed}
          totalInvited={totalInvited}
          guests={this.state.guests}
          setNameAt={this.setNameAt}
          removeGuestAt={this.removeGuestAt}
          toggleConfirmationAt={this.toggleConfirmationAt}
          toggleEditingAt={this.toggleEditingAt}
          pendingGuest={this.state.pendingGuest}
        />
      </div>
    );
  }
}

export default App;
