import React, {Component} from 'react';
import './App.css';
import Devices from "./components/Devices"
import Navbar from "./components/Navbar"
import DeviceList from "./components/DeviceList"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {addDevice,deleteDevice,updateDevice} from './actions'

// const deviceList = [
//   {id:1,name:'turbine 1',temperature:"20",humidity:'33'},
//   {id:2,name:'turbine 2',temperature:"54",humidity:'54'},
//   {id:3,name:'turbine 3',temperature:"33",humidity:'34'},
//   {id:4,name:'turbine 4',temperature:"45",humidity:'34'},
//   {id:5,name:'turbine 5',temperature:"66",humidity:'64'},
// ];
// if (localStorage.getItem("devices") === null) {
//   localStorage.setItem('devices', JSON.stringify(deviceList));
// }
class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   deviceList: []
    // }
    this.editDeviceSubmit = this.editDeviceSubmit.bind(this);
    this.deleteDevice = this.deleteDevice.bind(this);
    this.addNewDevice = this.addNewDevice.bind(this);
  }


  componentWillMount() {
    // let deviceList = JSON.parse(localStorage.getItem("devices"));
    // this.setState((prevState, props) => ({
    //   deviceList: deviceList
    //  }));
  }
  addNewDevice() {
    // this.setState((prevState, props) => ({
    //   deviceList: [...prevState.deviceList, {  
    //     id: Math.max(...prevState.deviceList.map(function(o){
    //       return o.id
    //     })) + 1, name: '', temperature: 1, humidity: '' 
    //   }]
    // }));
    this.props.addDevice({id:Math.max(...this.props.deviceList.map(function(o){return o.id})) + 1,name:'',temperature:1,humidity:''});
  }
  deleteDevice(id) {
    // let r = window.confirm("Do you want to delete this device");
    // if (r === true) {
    //   let filtereddeviceList = this.state.deviceList.filter(
    //     x => x.id !== id
    //   );
    //    this.setState((prevState, props) => ({
    //     deviceList: filtereddeviceList
    //    }));
    //    localStorage.setItem(
    //      'devices',
    //      JSON.stringify(filtereddeviceList)
    //    );
    // }
    let r = window.confirm("Do you want to delete this item");
    if( r === true)
    {
    this.props.deleteDevice(id);
  }
}
  editDeviceSubmit(id,name, temperature, humidity){
    // let deviceListCopy = this.state.deviceList.map((device) => {
    
    //   if (device.id === id) {
    //     device.name = name;
    //     device.temperature = temperature;
    //     device.humidity = humidity;
    //   }
    //   return device;
    // });
    // this.setState((prevState, props) => ({
    //   deviceList: deviceListCopy
    // }));
    // localStorage.setItem(
    //   'devices',
    //   JSON.stringify(deviceListCopy)
    // );
    this.props.updateDevice({
      id:id,
      name:name,
      temperature:temperature,
      humidity:humidity
    });
  }


render(){
  return (
    <div className="App">
      <Navbar/>
      <div className="alert alert-success" role="alert">
        <h4 className="alert-heading">Well done!</h4>
      <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
      
        <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
      </div>
      <div className="card-body">
              <table className="table table-hover">
                <thead className="thead-dark"><tr><th>Name</th><th>temperature</th><th>humidity</th><th>Edit/Save</th><th>Delete</th></tr></thead>
                </table>
                {/* <DeviceList
                  deleteDevice={this.deleteDevice}
                  deviceList={this.state.deviceList}
                  editDeviceSubmit={this.editDeviceSubmit}
                />
              </table>
            <button
              className="btn btn-dark pull-left"
              onClick={this.addNewDevice}>
              Add New
            </button> */}

            <DeviceList deleteDevice={this.deleteDevice} deviceList={this.props.deviceList} editDeviceSubmit={this.editDeviceSubmit}>

            </DeviceList>
            <button className="btn btn-dark pull-left" onClick={this.addNewDevice}>

            </button>
          </div>
      <Devices />
    </div>
  );
}
  
}


const mapStateToProps = (state) => {
  return {
    deviceList : state
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addDevice:addDevice,
    deleteDevice:deleteDevice,
    updateDevice:updateDevice
  },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
