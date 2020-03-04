import React, {useState} from 'react';
import './Card.css'
import Count from "../count/Count";
import Header from "../header/Header";
//import './Card.css';



function Card({user, count}) {
    const [styled, setStyled] = useState(false);
    const [styled2, setStyled2] = useState(true);


    const OnToggleMeHandler = () => {
        console.log('handler');
        //setStyled (styled => !styled);
        setStyled(!styled);
        //setStyled(styled => (styled === 'false' ? 'true' : 'false'))
        console.log('handler2');
        ClickSum();

    }
    const OnToggleMeHandler2 = () => {
        console.log('handler');
        //setStyled (styled => !styled);
        //setStyled(!styled);
        setStyled(styled => (styled === 'true' ? 'false' : ''))
        console.log('handler3');



    }

    //let i = 0;
    const ClickSum = () => {
        console.log("oncliksum")
        if(styled) {
            count =+ styled

        }
    }


    return (

        <div key = {user.id} className="card" style={{width : '18rem',float: 'left',height: '15rem'}}>

            <div className={`post card ${styled ? 'styled' : ''}`}>
            <div className="card-body">
                <h3 className="card-title">{user.name}</h3>
                <h4 className="card-title">{user.username}</h4>
                <h5 className="card-title">{user.phone}</h5>
                <h6 className="card-title">{user.address.city}</h6>


                {/*<a href="#" className="btn btn-primary">Deletion of user</a>*/}
                <button className="btn btn-primary" onClick={OnToggleMeHandler2}>Deletion</button>
                {/*<a href="#" className="btn btn-primary">Add</a>*/}

                {/*<div className={`post card ${styled ? 'styled' : ''}`}>*/}

                <button className="btn btn-primary" onClick={OnToggleMeHandler}>Add</button>
                {/*<Count count={count} ></Count>*/}
                {/*<Header myFunc = />*/}
                {/*</div>*/}
        </div>
            </div>
</div>
    );
}

export default Card;