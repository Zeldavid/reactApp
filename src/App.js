/* eslint-disable no-undef */
// import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };

    // this.handleChange = this.handleChange.bind(this);

    // this.state = {
    //   monsters: [
    //     {
    //       name: "Frankenstein",
    //     },
    //     {
    //       name: "Dracula",
    //     },
    //     {
    //       name: "Wolf Man",
    //     },
    //   ],
    // };
    //   string: "Hello David",
    // };
  }
  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload. Hello World!
  //         </p>
  //         <p>{this.state.string}</p>
  //         <button
  //           onClick={() => this.setState({ string: "Hello David Carrero" })}
  //         >
  //           Change Text
  //         </button>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ monsters: users });
        console.log("STATE", this.state);
      });
  }

  // handleChange(e) {
  //   this.setState({ searchField: e.target.value });
  // }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name
        .toLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });
    return (
      <div className="App">
        {/* <input
          type="search"
          placeholder="search monster"
          onChange={(e) => {
            this.setState({ searchField: e.target.value });
          }}
        /> */}
        <h1>Monsters</h1>
        <SearchBox
          placeholder="search monster"
          handlerChange={(e) => this.handleChange(e)}
        />
        {/* <SearchBox
          placeholder="search monster"
          handlerChange={this.handleChange}
        /> */}
        {/* <CardList monsters={this.state.monsters} /> */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
