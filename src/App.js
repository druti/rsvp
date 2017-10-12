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
        id: 0,
      },
      {
        name: 'Sandra',
        isConfirmed: true,
        isEditing: false,
        id: 1,
      },
      {
        name: 'Nic',
        isConfirmed: true,
        isEditing: true,
        id: 2,
      },
    ],
  }

  lastGuestId = this.state.guests.length &&
    this.state.guests[this.state.guests.length-1].id++

  generateNewGuestId = () => {
    const id = this.lastGuestId;
    this.lastGuestId += 1;
    return id;
  }

  updateGuestProperty = (property, id, value) => {
    this.setState({
      guests: this.state.guests.map((guest) => {
        return guest.id !== id ? guest : {
          ...guest,
          [property]: typeof value !== 'undefined' ? value : !guest[property],
        };
      })
    });
  }

  setName = (value, id) =>
    this.updateGuestProperty('name', id, value)

  removeGuest = id =>
    this.setState({
      guests: this.state.guests.filter(guest => guest.id !== id),
    })

  toggleConfirmation = id =>
    this.updateGuestProperty('isConfirmed', id)

  toggleEditing = id =>
    this.updateGuestProperty('isEditing', id)

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
          setName={this.setName}
          removeGuest={this.removeGuest}
          toggleConfirmation={this.toggleConfirmation}
          toggleEditing={this.toggleEditing}
          pendingGuest={this.state.pendingGuest}
        />
      </div>
    );
  }
}

export default App;
