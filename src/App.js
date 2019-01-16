import React, { Component } from "react";
import Counters from "./components/Counters/Counters";
import Navbar from "./components/Navbar/Navbar";
import Store from "./components/Store/Store";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import "./App.css";
import "tachyons";

class App extends Component {
  state = {
    counters: [],
    store: [
      {
        id: 1,
        name: "Big cat",
        img: "https://i.ytimg.com/vi/RlwCG7r4saw/maxresdefault.jpg",
        title: "accusamus beatae ad facilis cum similique qui sunt"
      },
      {
        id: 2,
        name: "Small cat",
        img: "https://i.ytimg.com/vi/hiSlzuoRtIA/maxresdefault.jpg",
        title: "accusamus beatae ad facilis cum similique qui sunt"
      },
      {
        id: 3,
        name: "So-so cat",
        img:
          "https://www.cat-breeds-encyclopedia.com/images/American-bobtail-cat.jpg",
        title: "accusamus beatae ad facilis cum similique qui sunt"
      }
    ],
    showMenu: false,
    route: "store"
  };

  handleAddCounter = (id, name) => {
    const { counters } = this.state;
    // console.log("Add Counter: " + id);

    if (!counters.filter(counter => counter.id === id).length > 0) {
      // console.log("counter id: " + counters.id);
      counters.push({ id: id, name: name, value: 0 });
    }

    this.setState(counters);
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    console.log("Deleted", counterId);
    this.setState({ counters: counters });
  };

  handleResetAll = () => {
    const { counters } = this.state;
    this.setState(counters.map(c => (c.value = 0)));
  };

  handleResetCounter = counterId => {
    const { counters } = this.state;
    const index = counters.indexOf(counterId);
    this.setState(Object.assign({}, (counters[index].value = 0)));
  };

  handleIncrement = counterId => {
    const { counters } = this.state;
    counters.map(c => (counterId === c.id ? c.value++ : c));
    this.setState(counters);
  };

  handleDecrement = counterId => {
    const { counters } = this.state;
    counters.map(c => (counterId === c.id ? c.value-- : c));
    this.setState(counters);
  };

  showMenu = event => {
    event.preventDefault();

    this.state.showMenu
      ? this.setState({
          showMenu: false
        })
      : this.setState({
          showMenu: true
        });
  };

  handleRoute = route => {
    this.setState({ route: route });
  };

  // componentDidMount() {
  //   fetch("http://localhost:3000/", {
  //     method: "GET",
  //     headers: { "Content-Type": "application.json" }
  //   })
  //     .then(response => response.json())
  //     .then(response => {
  //       this.setState(Object.assign(this.state.store, response.store));
  //     })
  //     .catch(console.log);
  // }

  render() {
    const { route } = this.state;

    switch (route) {
      case "store": {
        return (
          <React.Fragment>
            <div className="App">
              <Navbar
                totalCounters={this.state.counters.length}
                showMenu={this.showMenu.bind(this)}
                onRouteChange={this.handleRoute}
              />
              {this.state.showMenu ? (
                <main className="container Counters">
                  <Counters
                    counters={this.state.counters}
                    onResetAll={this.handleResetAll}
                    onResetCounter={this.handleResetCounter}
                    onDelete={this.handleDelete}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                  />
                </main>
              ) : null}

              <Store
                products={this.state.store}
                onAddCounter={this.handleAddCounter}
              />
            </div>
          </React.Fragment>
        );
      }
      case "home": {
        return (
          <React.Fragment>
            <Navbar
              totalCounters={this.state.counters.length}
              showMenu={this.showMenu}
              onRouteChange={this.handleRoute}
            />
            {this.state.showMenu ? (
              <main className="container Counters">
                <Counters
                  counters={this.state.counters}
                  onResetAll={this.handleResetAll}
                  onResetCounter={this.handleResetCounter}
                  onDelete={this.handleDelete}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                />
              </main>
            ) : null}
            <Home />
          </React.Fragment>
        );
      }
      case "about": {
        return (
          <React.Fragment>
            <Navbar
              totalCounters={this.state.counters.length}
              showMenu={this.showMenu}
              onRouteChange={this.handleRoute}
            />
            {this.state.showMenu ? (
              <main className="container Counters">
                <Counters
                  counters={this.state.counters}
                  onResetAll={this.handleResetAll}
                  onResetCounter={this.handleResetCounter}
                  onDelete={this.handleDelete}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                />
              </main>
            ) : null}
            <About />
          </React.Fragment>
        );
      }
      case "contact": {
        return (
          <React.Fragment>
            <Navbar
              totalCounters={this.state.counters.length}
              showMenu={this.showMenu}
              onRouteChange={this.handleRoute}
            />
            {this.state.showMenu ? (
              <main className="container Counters">
                <Counters
                  counters={this.state.counters}
                  onResetAll={this.handleResetAll}
                  onResetCounter={this.handleResetCounter}
                  onDelete={this.handleDelete}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                />
              </main>
            ) : null}
            <Contact />
          </React.Fragment>
        );
      }
      default: {
        return (
          <React.Fragment>
            <Navbar
              totalCounters={this.state.counters.length}
              showMenu={this.showMenu}
              onRouteChange={this.handleRoute}
            />
            <div className="App">
              {this.state.showMenu ? (
                <main className="container Counters">
                  <Counters
                    counters={this.state.counters}
                    onResetAll={this.handleResetAll}
                    onResetCounter={this.handleResetCounter}
                    onDelete={this.handleDelete}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                  />
                </main>
              ) : null}
              <Store
                products={this.state.store}
                onAddCounter={this.handleAddCounter}
              />
            </div>
          </React.Fragment>
        );
      }
    }
  }
}

export default App;
