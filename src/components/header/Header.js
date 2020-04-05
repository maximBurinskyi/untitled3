import React from 'react';
import Sortbyname from "../sortbyname/Sortbyname";
import Count from "../count/Count";
//import Count from "./components/count/Count";
import Card from "../card/Card";

function Header({myFunc, myFunc2, count, ClickSum, cartCount, counter, items}) {
    // reset = () => {
    //     this.setState({
    //         count: this.state.count = 0
    //     })
    // }

    // const sort = () => {
    //     const {data} = this.state;
    //     data.sort((a, b) => {
    //         return a - b;
    //     });
    const myHandler = (event) => {
        console.log('event');
        myFunc()
    }
    const myHandler2 = (event) => {
        console.log('event');
        myFunc2()
    }
    const Clicksum = (count) => {
        console.log('event');
        ClickSum()
    }

    return (
        <nav className="navbar navbar-dark bg-primary">
            <h1>Header</h1>
            {/*<h2>{items}</h2>*/}
            {/*<a href="#" className="btn btn-primary">sortByName</a>*/}
            {/*<Count/>*/}
            <button className="btn btn-primary" onClick={myHandler}>sortByName</button>
            <button className="btn btn-primary" onClick={myHandler2}>sortByCity</button>
            <Count items={items} />

            {/*<a href="#" className="btn btn-primary">sortByCity</a>*/}
            {/*<Sortbyname myFunc2={this.reset}/>*/}

            {/*<button myFunc2={this.reset}/>*/}

        </nav>
    );
}

export default Header;