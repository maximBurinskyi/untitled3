import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import Sortbyname from "./components/sortbyname/Sortbyname";
import Square from "./components/square/Square";
import Toolbar from "./components/toolbar/Toolbar";
import Count from "./components/count/Count";
import Form from "./components/form/Form";
//import Count from "./components/count/Count";

let count2 = 0;

class App extends React.Component{
  // state={
  //   data: null
  // }


    constructor(props) {
        super(props);
        // console.log('constructor');
        // console.log('props');
        this.state = {
             count : 0,
            data : null,
            quantity: 0,
            items: 0,
            cartItems: [],

            //value: 0
        };
        //this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);

    }



    handler = (value) => {
        this.setState({
            count: this.state.count

        })
    }



    incItems = () => {
        let {items} = this.state;
        this.setState({items: items + 1})
    };
    // delete = (user) => {
    //     let {data} = this.state;
    //     data.splice(data.indexOf(data.indexOf(user), 1));
    //     this.setState({data: data})
    // };

    decrItems = () => {
        let {items} = this.state;
        this.setState({items: items - 1})
    };

    handleInc = () => {
        count2++;
    }




  //  sort = () => {
  //      const {data} = this.state;
  //      data.sort((a, b) => {
  //          return a - b;
  //      })
  //
  // }
    // reset = () => {
    //     this.setState({
    //         count: this.state.count = 0
    //     })
    // }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value=> value.json())
        .then(data => {
            // const users = data
            //     //.filter(user => user.team === 'search-team')
            //     .sort((a, b) => {
            //         if  (a.address.city > b.address.city) {
            //             return 1;
            //         }
            //         if (a.address.city < b.address.city) {
            //             return -1;
            //         }
            //         return 0;
            //     }
            //     )
            this.setState({data: data})


      //this.setState({
      //     users: users,
      // });
        })
       }
      //    sort(a,b) {
      // const {data} = this.state;
      //        console.log(data);
      //
      //    }

    sort2 = (props) => {
        const {data} = this.state;
        console.log(data);
        data.sort((a, b) => {
                if  (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            }
        )
        this.setState({data: data})
        }


    sort3 = (props) => {
        const {data} = this.state;
        console.log(data);
        data.sort((a, b) => {
                if  (a.address.city > b.address.city ) {
                    return 1;
                }
                if (a.address.city  < b.address.city ) {
                    return -1;
                }
                return 0;
            }
        )
        this.setState({data: data})
    }

    handler = (argum) => {
        const {count} = this.state;
        if(argum + count >=0) {
            this.setState({
                count: this.state.count + argum
            })
        }
    }






    handler2 = () => {
        //const {count} = this.state;

            this.setState({
                item: this.state.count + 1
            })
        }
c
    delete = (user) => {
        let {data} = this.state;
        data.splice(data.indexOf(data.indexOf(user), 1));
        this.setState({data: data})
    };

    handlerInc = () => {
        this.setState({counter: this.state.counter +1})
    }

    onAddItemToCart = (data) => {

        const itemInList = data.find(el => el.id === data.id);
        this.setState((prevCart) => [...prevCart, itemInList])
    }

    newElement = (user) => {
        let {data} = this.state;
        data.push(user);
        this.setState({data: data})
    };





    // handler=() => {
    //     this.setState({
    //         count: this.state.count+1
    //
    //     })
    // }

    // const onClickTest = (label) => {
    //     alert(label);
    // }

    // const Btn = (props) => {
    //     const {withPinkBackground, label='click me', onClick} = props;
    //     const onClickHandler = () => {
    //         onClick && onClick(label)
    //
    //     }
    //     return (
    //         <button className={`my-btn ${withPinkBackground ? 'pink' : ''}`} onClick={onClickHandler}>{label}</button>
    //     )
    // }


    //})
        // .then(value=> {
        //   this.setState({data: value})
        // })


    // onAddItemToCart = id => {
    //
    //     const itemInList = data.find(el => el.id === data.id);
    //     console.log(data)
    //     this.setState({cartItems: this.state.cartItems +1})
    // };


  render() {
      const {count} = this.state;
      const {items} = this.state;

      const {data} = this.state;
      console.log('data');
       console.log(data);

      // const onAddItemToCart = id => {
      //     const itemInList = data.find(el => el.id === id);
      //
      //     this.setState(prevCart => [...prevCart, itemInList]);
      // };

      return (
        <div className="App">
            {/*<button onClick={this.sort2}>My sorting button*/}
            {/*</button>*/}

            {/*<button onClick={this.sort3}>My sorting button2*/}
            {/*</button>*/}
            {/*<Btn/>*/}
            {/*<Count/>*/}
            <Header myFunc={this.sort2} myFunc2={this.sort3} count={count} items={items}/>
            {/*<Count count={count}/>*/}

            <Count cartCount={this.state.cartItems.length}/>
            {/*<Toolbar/>*/}
            {/*<button myFunc2={this.sort}/>*/}
            {/*<Square/>*/}
            {/*<Card count={count}/>*/}
            {
                data
            ? data.map(v => <Card user={v}
                                  key={v.id}
                                  deleteHandler={this.delete}
                                  handlerInc={this.handlerInc}
                                  onAddItemToCart={this.onAddItemToCart}
                                  handleInc={this.handleInc}
                                  products={data}
                                  incItems={this.incItems}
                                  decrItems={this.decrItems}
                                  newElement={this.newElement}
                                  // itemHandlers={{inc: this.incItems, decr: this.decrItems}}


                    /> )
            : <h1>LOADING...</h1>
            }


            {/*<Sortbyname myFunc2={this.reset}/>*/}
            {/*<Form onClick={this.newElement} data={data}/>*/}

        </div>
    );
  }
  }

export default App;
