//THIS IS FUNCTIONAL COMPONENT

function Header(props){ //here props is inibuilt argument coming automatically.properties(props) is using to access from the app.js to here the data
    return (<h1>Hello {props.data}</h1>)
}

export default Header





// THIS IS CLASS COMPONENT

// import { Component } from "react";

// class Header extends Component {
//     render(){
//         return (<h1>Hello {this.props.data}</h1>)  //because of using class we need to use this
//     }
// }


// export default Header
