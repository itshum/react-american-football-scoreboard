import React from "react" // Let it know that its a react component 

function Giants (props) {
console.log(props)
    return ( <div className= {props.Homes}>
            <h2 className="home__name">Giants</h2>
        <div className="home__score"> { props.GiantsScore }</div> 
        </div>
    )


}


export default Giants;

// Props -- way to pass state and functions to next component, created props for Giants and Home 
