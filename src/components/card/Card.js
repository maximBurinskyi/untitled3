import React, {useState} from 'react';
import './Card.css'
import Count from "../count/Count";
import Header from "../header/Header";
//import './Card.css';



function Card({user, count, myFunc, MyFunc2, deleteHandler, incItems, decrItems, newElement}) {
    const [styled, setStyled] = useState(false);
    const [styled2, setStyled2] = useState(true);
    const[counter, setCounter] = useState(0);
    const[cartItems, setCartItems] = useState([]);

    const myHandler = (event) => {
        console.log('event');
        myFunc()
    }

    const myHandler3 = (event) => {
        console.log('event');
        deleteHandler()

    }

    const myHandler4 = (event) => {
        console.log('event');
        setStyled(!styled);

        decrItems()

    }

    // const onAdd = (event) => {
    //     console.log('event');
    //     onAddItemToCart()
    // }


//let m = 0;
    const onAddItemToCart = (id) => {
        const itemInList = user.find(el => el.id === id)
        setCartItems((prevCart) => [...prevCart, itemInList])
    }

    const handleInc = () => setCounter(counter +1);

    const OnToggleMeHandler = () => {
        console.log('handler');
        //setStyled (styled => !styled);
        setStyled(!styled);
        //handleInc()
        incItems()
        //decrItems()
        // setStyled(styled => (styled === 'false' ? 'true' : 'false'))
        // if(!styled & m >=0) {
        //     m++
        //     console.log(m)
        //
        // } else {
        //     m--
        //     console.log(m)
        // }

        //console.log('handler2');
        //ClickSum();
        //onAddItemToCart()
        //ClickSum()


    }
    const OnToggleMeHandler2 = () => {
        console.log('handler');
        //setStyled (styled => !styled);
        //setStyled(!styled);
        setStyled(styled => (styled === 'true' ? 'false' : ''))
        console.log('handler3');

    }



    let i = 0;
    const ClickSum = () => {
        if (setStyled(styled)) {
            i++;
            count =+i
            console.log("cliksum") }
        else {
            i--
        count =-i
        console.log('clicksum') }

            // if(styled ? 'styled' : '') {
            //     count =+ styled
            //
            // }
            // return count +1

    }
    //return count +1


    return (

        <div key = {user.id} className="card" style={{width : '18rem',float: 'left',height: '15rem'}}>

            <div className={`post card ${styled ? 'styled' : ''}`}>
            <div className="card-body">
                <h3 className="card-title">{user.name}</h3>
                <h4 className="card-title">{user.username}</h4>
                <h5 className="card-title">{user.phone}</h5>
                <h6 className="card-title">{user.address.city}</h6>


                {/*<a href="#" className="btn btn-primary">Deletion of user</a>*/}
                <button className="btn btn-primary" onClick={myHandler3}>Deletion</button>
                {/*<a href="#" className="btn btn-primary">Add</a>*/}

                {/*<div className={`post card ${styled ? 'styled' : ''}`}>*/}

                <button className="btn btn-primary" onClick={OnToggleMeHandler} >Add</button>
                <button className="btn btn-primary" onClick={myHandler4} >Decr</button>
                {/*<Count count={count} myFunc={ClickSum}/>*/}
                {/*<Count count={count} ></Count>*/}
                <Count className="btn btn-primary"  counter={counter}/>
                {/*<Header counter={counter} myFunc={ClickSum} />*/}
                {/*</div>*/}
        </div>
                {/*<Count count={count} myFunc={ClickSum}/>*/}
            </div>
            {/*<Count className="btn btn-primary" myFunc={ClickSum} count={count}/>*/}
</div>
    );
}

export default Card;