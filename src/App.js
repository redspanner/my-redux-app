import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import FacebookLogin from 'react-facebook-login'
import { setState } from './actions';
import MapContainer from './GoogleWrapper';

class App extends Component {

  componentClicked = () => {

  }

  responseFacebook = (response) => {
    console.log("fb response", response.picture.data.url);
    if (response.name) {
      this.props.setState({"name":response.name, "url":response.picture.data.url, 'email':response.email});
    }
  }

  render() {
    console.log("propsname", this.props.url)
    return (
      <div className="App">
        <nav className="NavBar">
          <a href=""><div>Information</div></a>
          <a href=""><div>Contacts</div></a>
          <div className="loginWrapper">
            {this.props.name?<div className="user"><span>Welcome, {this.props.name}</span><img src={this.props.url} alt ="user-pic"/></div>:
            <FacebookLogin
              appId="2041984596087177"
              autoLoad={false}
              fields="name,email,picture"
              onClick={this.componentClicked}
              callback={this.responseFacebook} />}
          </div>
        </nav>
        <MapContainer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name:state.name,
  email:state.email,
  url:state.url,
});

const mapDispatchToProps = (dispatch) => ({
  setState: (obj) => dispatch(setState(obj))

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
