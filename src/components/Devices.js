import React, { Component } from 'react'
import { connect } from 'react-redux';

function Devices({ data }){
  const datalist = data.map((value)=>{
    return (
      <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">DeviceName: {value.id }</h5>
                            <p className="card-text">Temperature: {value.login }</p>
                            <h3 className="card-text">Humidity: {value.node_id }</h3>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Time : Last updated 3 mins ago</small>
                        </div>
                </div>
    )
  })
    if(!data) {
        return (
          <div>
            No Data
          </div>
        )
      }
      return (
        <div>
            <div className="card-group" style={{padding:"10px", display:"inline-block"}}>
                {datalist}
            </div>
        </div>
      );
    
}
const mapStateToProps = state => {
    return {
      data: state.data
    };
  };
  
  export default connect(
    mapStateToProps,
    null
  )(Devices);

