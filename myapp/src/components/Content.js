// import ListItem from "./ListItem";
import { useState } from 'react'
import { render } from "react-dom";

const Content = () => {
    // request the API for data
    // let counter = 0
    //?    Change the Dom 
    const [counter,setCounter] = useState(0)
    //const [items,setitems]=useState[1]
    // console.log(counter)
    // console.log(setCounter)


    return (
        <div className="container">
            <h2>{counter}</h2>
            <button onClick={() => {
                // console.log(counter)
                // counter = counter + 1
                setCounter(previousValue=>previousValue+1)
            }} >ClickMe</button>
        </div>
    );
}

export default Content;

// import React from "react";

// class Content extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             count: 0
//         };
//     }

//     render() {
//         return (
//             <div className="container">
//                 {/* <h2>{counter}</h2>
//             <button onClick={() => {
//                 console.log(counter)
//                 counter = counter + 1
//             }} >ClickMe</button> */}
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem dolorem possimus quod corrupti dignissimos, labore molestiae nulla unde cumque libero tempore reprehenderit laboriosam non quidem soluta dolorum a? Provident.
//             </div>
//         )
//     }
// }

// export default Content;