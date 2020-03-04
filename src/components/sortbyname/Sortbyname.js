import React from 'react';

function Sortbyname  (myFunc2) {
    const myHandler = (event) => {
        console.log('event');
        myFunc2()
    }
    return (
        <div>
            <button onClick={myHandler}>Sortbyname</button>

        </div>
    );
};

export default Sortbyname;