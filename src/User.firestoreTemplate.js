import React from 'react';
import firebase from 'firebase';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      fullname: ''
    };
  }

  updateChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addUser = e => {
    e.preventDefault();
    const db = firebase.firestore();
    db.settings({ timestampsInSnapshots: true });
    const userRef = db
      .collection('user')
      .add({ name: this.state.fullname, mail: this.state.fullname });
    this.setState({ fullname: '', email: '' });
  };

  render() {
    return (
      <form onSubmit={this.addUser}>
        <input
          type="text"
          name="fullname"
          placeholder="Full name"
          onChange={this.updateChange}
          value={this.state.fullname}
        />
        <input type="email" name="email" placeholder="Full name" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default User;
