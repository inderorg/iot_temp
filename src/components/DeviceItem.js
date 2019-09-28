import React, { Component } from 'react';
export default class DeviceItem extends Component {
  constructor(props){
    super(props);
    this.state ={isEdit:false}
    this.editDevice = this.editDevice.bind(this);
    this.editDeviceSubmit = this.editDeviceSubmit.bind(this);
    this.deleteDevice = this.deleteDevice.bind(this);
  }
  deleteDevice(){
    const {id} = this.props.device;
    this.props.deleteDevice(id);
  }
  editDevice(){
    this.setState((prevState,props) => ({
      isEdit : !prevState.isEdit
    }))
  }
  editDeviceSubmit(){
    const {id} = this.props.device;
    this.setState((prevState,props) => ({
      isEdit : !prevState.isEdit
    }));
     
    this.props.editDeviceSubmit(
      id,
      this.nameInput.value,
      this.temperatureInput.value,
      this.humidityInput.value
    );
  }
  render() {
    const {name,temperature,humidity} = this.props.device;
    return (
      this.state.isEdit === true ? (
        <tr className="bg-warning" key={this.props.index}>
          <td>
            <input ref={nameInput => this.nameInput = nameInput} defaultValue ={name}/>
          </td>
          <td><input defaultValue={temperature} ref={temperatureInput => this.temperatureInput = temperatureInput}/>
          </td>
          <td>
            <input ref={humidityInput => this.humidityInput = humidityInput} defaultValue={name}/>
          </td>
          <td><i className="far fa-save" onClick={this.editDeviceSubmit}></i>
          </td>
          <td><i className="fas fa-trash"></i></td>
        </tr>
      ) : (
        <tr key={this.props.index}>
          <td>{name}</td>
          <td>{temperature}</td>
          <td>{humidity}</td>
          <td><i className="far fa-edit" onClick={this.editDevice}></i></td>
          <td><i className="fas fa-trash" onClick={this.deleteDevice}></i></td>
</tr>
      )
    );
  }
}