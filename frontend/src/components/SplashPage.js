import React from "react";

class SplashPage extends React.Component {

    render() {
        return (
            <div >

            <div style={{display:'flex', justifyContent: 'center'}}>
                <h1>
                WEBSITE CURRENTLY UNDER CONSTRUCTION
                </h1>
            </div>
                <br/>
                <br/>
            <span style={{display:'flex', justifyContent: 'center'}}> <a href="/login" className="nav-link">GO TO LOGIN PAGE </a>or<a href="/register" className="nav-link"> GO TO REGISTER PAGE</a> </span>
            </div>

        )
    }
}
export default SplashPage;

