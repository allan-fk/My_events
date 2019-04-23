import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { OpenStreetMapProvider } from 'leaflet-geosearch';

type State = {
  lat: number,
  lng: number,
  zoom: number,
}

export default class Osm extends Component<{}, State> {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
    resSearch: null,
    resSearchX: null,
    resSearchY: null
  };
  
  async searchFunc() {
    const provider = new OpenStreetMapProvider();
    let test = await provider.search({ query: '75014, Paris' }).then((res) => {
      return res;
    })
    return test;
  }
  
  async componentDidMount() {
    let test  = await this.searchFunc();
    // console.log(test);
    // this.state.resSearch = test;
    this.setState({
           resSearchX: Object.values(test)
         })
  }
  
  // searchFunc() {
  //   const provider = new OpenStreetMapProvider();

  //   provider.search({ query: '75014, Paris' }).then((res) => {
  //     this.setState({
  //       resSearch: res
  //     })
  //   })
  // }

  // componentDidMount() {

  // }

  render() {
    const position = [this.state.lat, this.state.lng]
    console.log(this.state.resSearch);
    return (
      <Map center={position} zoom={this.state.zoom} style={{ width: '100%', height: '300px' }}>
      <TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
      <Popup>
      FREE ADMISSION SATURDAY NIGHT PARTY <br /> | THE VNYL VINTAGE LIFESTYLE 
      </Popup>
      </Marker>
      </Map>
      )
    }
  }