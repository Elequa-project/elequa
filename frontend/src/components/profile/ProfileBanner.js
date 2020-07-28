import React, { Component } from 'react';


const jumbotronStyle = {
    height: '200px',
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
    border: 'black solid 1px',
    display: 'flex',
    alignItems: 'center',
    background: 'lightGrey'


};
const Jumbotron = () =>{
// class Home extends Component {
    // render() {
        return (
            <div className="card-panel grey lighten-2" style={jumbotronStyle}>
                    <div
                        style={{height: '80%', width: '250px', marginLeft: '10%', border:'black solid 1px', textAlign: 'center' }}
                    >Image Icon</div>

            </div>
        );

};

export default Jumbotron;
