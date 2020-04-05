import React, {Component} from "react";

function Count({count, ClickSum, counter, cartCount, items}) {
    const Clicksum = (event) => {
        console.log('event');
        ClickSum()
    }
    return (
        <div>
            <h1>{items}</h1>
        </div>
    )

}
export default Count;