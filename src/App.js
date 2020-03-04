import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import Sortbyname from "./components/sortbyname/Sortbyname";
import Square from "./components/square/Square";
import Toolbar from "./components/toolbar/Toolbar";
import Count from "./components/count/Count";
//import Count from "./components/count/Count";

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
            const users = data
                //.filter(user => user.team === 'search-team')
                .sort((a, b) => {
                    if  (a.address.city > b.address.city) {
                        return 1;
                    }
                    if (a.address.city < b.address.city) {
                        return -1;
                    }
                    return 0;
                }
                )
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


  render() {
      const {count} = this.state;
      const {data} = this.state;
      console.log('data');
       console.log(data);

      return (
        <div className="App">
            {/*<button onClick={this.sort2}>My sorting button*/}
            {/*</button>*/}

            {/*<button onClick={this.sort3}>My sorting button2*/}
            {/*</button>*/}
            {/*<Btn/>*/}
            {/*<Count/>*/}
            <Header myFunc={this.sort2} myFunc2={this.sort3} count={count}/>
            {/*<Count count={count}/>*/}

            {/*<Header myFunc2={this.sort3}/>*/}
            {/*<Toolbar/>*/}
            {/*<button myFunc2={this.sort}/>*/}
            {/*<Square/>*/}
            {
                data
            ? data.map(v => <Card user={v} key={v.id}/> )
            : <h1>LOADING...</h1>
            }
            {/*<Sortbyname myFunc2={this.reset}/>*/}

        </div>
    );
  }
  }

export default App;
