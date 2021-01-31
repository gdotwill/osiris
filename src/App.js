import React, { Component } from 'react';

import Tabs from "./components/Tabs";

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
    }
  }

  componentDidMount(){
    fetch(`https://randomuser.me/api/`)
    .then(results => {
      return results.json();
    }).then(data => {
      let names = data.results.map((person) => {
        let firstname = (person.name.first);
        let lastname = (person.name.last);
        let fullname = `${firstname} ${lastname}`;
        let image = person.picture.large;
        let email = person.email;
        let dob = person.dob.date;
        let city = person.location.city;
        let cell = person.cell;
        let password = person.login.password;
        this.setState((prevState)=> ({
          users: [
            ...prevState.users,
            {
              name: fullname,
              avatar: image,
              email,
              city,
              dob,
              password,
              cell
            }
          ]
        }))
      })
    })
  }

  render(){
    return (
      <div className="container">
        <div className="wrapper">
        {this.state.users.map((obj,idx) => {
          return(
            <div className="container u-text--centered">
              <div className="row">
                <div className="u-content--center">
                  <div className="c-card">
                    <img className="u-image--rounded" src={obj.avatar} alt="user-image" />
                  </div>
                </div>
              </div>            
              <div>
                <Tabs>
                  <div img={<img className="u-image--24" src="./assets/icons/svg/misc/user.svg" alt="icon" />}>
                    <div clasName="row">
                      <h3>Hi, My name is</h3>
                      <h2> {obj.name} </h2>
                    </div>
                  </div>
                  <div img={<img className="u-image--24" src="./assets/icons/svg/misc/email.svg" alt="icon" />}>
                    <div clasName="row">
                      <h3>My email address is</h3>
                      <h2> {obj.email} </h2>
                    </div>
                  </div>                 
                  <div img={<img className="u-image--24" src="./assets/icons/svg/misc/calendar.svg" alt="icon" />}>
                    <div clasName="row">
                      <h3>My birthday is</h3>
                      <h2> {obj.dob} </h2>
                    </div>
                  </div>
                  <div img={<img className="u-image--24" src="./assets/icons/svg/misc/map-location.svg" alt="icon" />}>
                    <div clasName="row">
                      <h3>My address is</h3>
                      <h2> {obj.city} </h2>
                    </div>
                  </div>
                  <div img={<img className="u-image--24" src="./assets/icons/svg/misc/call.svg" alt="icon" />}>
                    <div clasName="row">
                      <h3>My phone number is</h3>
                      <h2> {obj.cell} </h2>
                    </div>
                  </div>
                  <div img={<img className="u-image--24" src="./assets/icons/svg/misc/locked.svg" alt="icon" />}>
                    <div clasName="row">
                      <h3>My password is</h3>
                      <h2> {obj.password} </h2>
                    </div>
                  </div>
                </Tabs>
            </div>
          </div>
          )})
        }
      </div>
    </div>
  )}
}

export default App;
