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
    store: [],
    showMenu: false,
    route: "store"
  };

  handleAddCounter = id => {
    const { counters } = this.state;

    if (!counters.filter(counter => counter.id === id).length > 0) {
      counters.push({ id: id, value: 0 });
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

  componentDidMount() {
    fetch("http://localhost:3000/", {
      method: "GET",
      headers: { "Content-Type": "application.json" }
    })
      .then(response => response.json())
      .then(response => {
        this.setState(Object.assign(this.state.store, response.store));
      })
      .catch(console.log);
  }

  render() {
    const { route } = this.state;

    switch (route) {
      case "store": {
        return (
          <React.Fragment>
            <div className="App">
              <Store
                products={this.state.store}
                onAddCounter={this.handleAddCounter}
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
            </div>

            <Navbar
              totalCounters={this.state.counters.length}
              showMenu={this.showMenu.bind(this)}
              onRouteChange={this.handleRoute}
            />
          </React.Fragment>
        );
      }
      case "home": {
        return (
          <React.Fragment>
            <Home />
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
            <Navbar
              totalCounters={this.state.counters.length}
              showMenu={this.showMenu}
              onRouteChange={this.handleRoute}
            />
          </React.Fragment>
        );
      }
      case "about": {
        return (
          <React.Fragment>
            <About />
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
            <Navbar
              totalCounters={this.state.counters.length}
              showMenu={this.showMenu}
              onRouteChange={this.handleRoute}
            />
          </React.Fragment>
        );
      }
      case "contact": {
        return (
          <React.Fragment>
            <Contact />
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
            <Navbar
              totalCounters={this.state.counters.length}
              showMenu={this.showMenu}
              onRouteChange={this.handleRoute}
            />
          </React.Fragment>
        );
      }
      default: {
        return (
          <React.Fragment>
            <div className="App">
              <Store
                products={this.state.store}
                onAddCounter={this.handleAddCounter}
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
            </div>

            <Navbar
              totalCounters={this.state.counters.length}
              showMenu={this.showMenu}
              onRouteChange={this.handleRoute}
            />
          </React.Fragment>
        );
      }
    }
  }
}

export default App;
