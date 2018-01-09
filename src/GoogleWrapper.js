
import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// ...

class MapContainer extends React.Component {

  onMarkerClick (props, marker, e) {
    console.log('marker', props)
  }

  render() {
    return (
      <div className="MapContainer">
        <Map style={{width:300, height:200}} google={this.props.google} zoom={14}>

          <Marker onClick={this.onMarkerClick}
                  name={'Current location'}
                  position={{lat: 37.759703, lng: -122.428093}}/>

          <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>Hello</h1>
              </div>
          </InfoWindow>
        </Map>
      </div>)
    }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAihUaEvx5FjpJedWt9Lxw0zJLLcib9888"
})(MapContainer)
