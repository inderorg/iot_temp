import React, { Component } from 'react';
import DeviceItem from './DeviceItem.js';

export default class DeviceList extends Component {
  render() {
    let devices = this.props.deviceList;
    const trItem = devices.map((item,index) => (
      <DeviceItem
        key={index}
        device={item}
        index={index}
        editDeviceSubmit={this.props.editDeviceSubmit}      
        deleteDevice={this.props.deleteDevice}
      />
    ));
    return <tbody>{trItem}</tbody>;
  }
}