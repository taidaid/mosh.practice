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
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 }
    ],
    store: [
      {
        id: 1,
        img: "https://via.placeholder.com/600/92c952",
        title: "accusamus beatae ad facilis cum similique qui sunt"
      },
      {
        id: 2,
        img: "https://via.placeholder.com/600/92c952",
        title: "accusamus beatae ad facilis cum similique qui sunt"
      },
      {
        id: 3,
        img: "https://via.placeholder.com/600/92c952",
        title: "accusamus beatae ad facilis cum similique qui sunt"
      },
      {
        id: 4,
        img: "https://via.placeholder.com/600/92c952",
        title: "accusamus beatae ad facilis cum similique qui sunt"
      },
      {
        id: 5,
        img: "https://via.placeholder.com/600/92c952",
        title: "accusamus beatae ad facilis cum similique qui sunt"
      },
      {
        id: 6,
        img: "https://via.placeholder.com/600/92c952",
        title: "accusamus beatae ad facilis cum similique qui sunt"
      },
      {
        id: 7,
        img: "https://via.placeholder.com/600/92c952",
        title: "accusamus beatae ad facilis cum similique qui sunt"
      },
      {
        id: 8,
        img: "https://via.placeholder.com/600/92c952",
        title: "accusamus beatae ad facilis cum similique qui sunt"
      },
      {
        id: 9,
        img: "https://via.placeholder.com/600/92c952",
        title: "accusamus beatae ad facilis cum similique qui sunt"
      },
      {
        id: 10,
        img: "https://via.placeholder.com/600/92c952",
        title: "accusamus beatae ad facilis cum similique qui sunt"
      },
      {
        id: 11,
        img: "https://via.placeholder.com/600/92c952",
        title: "accusamus beatae ad facilis cum similique qui sunt"
      },
      {
        id: 12,
        img: "https://via.placeholder.com/600/92c952",
        title: "accusamus beatae ad facilis cum similique qui sunt"
      },
      {
        id: 13,
        img: "https://via.placeholder.com/600/92c952",
        title: "accusamus beatae ad facilis cum similique qui sunt"
      },
      {
        id: 14,
        img: "https://via.placeholder.com/600/92c952",
        title: "accusamus beatae ad facilis cum similique qui sunt"
      },
      {
        id: 15,
        img: "https://via.placeholder.com/600/92c952",
        title: "accusamus beatae ad facilis cum similique qui sunt"
      },
      {
        id: 16,
        img: "https://via.placeholder.com/600/92c952",
        title: "accusamus beatae ad facilis cum similique qui sunt"
      },
      {
        id: 17,
        img: "https://via.placeholder.com/600/92c952",
        title: "accusamus beatae ad facilis cum similique qui sunt"
      },
      {
        id: 18,
        img: "https://via.placeholder.com/600/92c952",
        title: "accusamus beatae ad facilis cum similique qui sunt"
      }
    ],
    showMenu: false,
    route: "store"
  };

  handleAddCounter = () => {
    const { counters } = this.state;
    if (counters.length === 0) {
      counters.push({ id: 1, value: 0 });
    } else {
      counters.push({ id: counters[counters.length - 1].id + 1, value: 0 });
    }
    this.setState(counters);
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
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
          // },
          // () => {
          //   document.addEventListener("click", this.closeMenu);
        });
  };

  handleRoute = route => {
    this.setState({ route: route });
  };

  // closeMenu = () => {
  //   this.setState({ showMenu: false }, () => {
  //     document.removeEventListener("click", this.closeMenu);
  //   });
  // };

  render() {
    const { route } = this.state;
    switch (route) {
      case "store": {
        return (
          <React.Fragment>
            <div className="App">
              <Store products={this.state.store} />

              {this.state.showMenu ? (
                <main className="container Counters">
                  <Counters
                    counters={this.state.counters}
                    onAddCounter={this.handleAddCounter}
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
              totalCounters={
                this.state.counters.filter(c => c.value > 0).length
              }
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
                  onAddCounter={this.handleAddCounter}
                  onResetAll={this.handleResetAll}
                  onResetCounter={this.handleResetCounter}
                  onDelete={this.handleDelete}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                />
              </main>
            ) : null}
            <Navbar
              totalCounters={
                this.state.counters.filter(c => c.value > 0).length
              }
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
                  onAddCounter={this.handleAddCounter}
                  onResetAll={this.handleResetAll}
                  onResetCounter={this.handleResetCounter}
                  onDelete={this.handleDelete}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                />
              </main>
            ) : null}
            <Navbar
              totalCounters={
                this.state.counters.filter(c => c.value > 0).length
              }
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
                  onAddCounter={this.handleAddCounter}
                  onResetAll={this.handleResetAll}
                  onResetCounter={this.handleResetCounter}
                  onDelete={this.handleDelete}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                />
              </main>
            ) : null}
            <Navbar
              totalCounters={
                this.state.counters.filter(c => c.value > 0).length
              }
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
              <Store products={this.state.store} />

              {this.state.showMenu ? (
                <main className="container Counters">
                  <Counters
                    counters={this.state.counters}
                    onAddCounter={this.handleAddCounter}
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
              totalCounters={
                this.state.counters.filter(c => c.value > 0).length
              }
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
