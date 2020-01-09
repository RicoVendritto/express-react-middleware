import React, { Component } from "react";
import "./index.scss";
import axios from "axios";

//Custom component
import Form from "./components/Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      apiLoaded: false,
      fields: {
        name: null,
        company: null,
        role: null,
        sector: null
      }
    };
  }

  componentDidMount = async () => {
    let response = await axios.get("http://localhost:3000/people");
    this.setState({
      people: response.data,
      apiLoaded: true
    });
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      field: {
        ...this.state.field,
        [name]: value
      }
    });
  };

  handleSubmit = async e => {
    // e.preventDefault();
    console.log("submit");
    await axios
      .post("http://localhost:3000/post", this.state.field)
      .then(
        this.setState({
          people: [...this.state.people, this.state.field]
        })
      )
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <div className="AppContainer">
          <header>Business Cards</header>
          <main>
            <Form
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
            {this.state.apiLoaded ? (
              <div className="output">
                {this.state.people.map((person, index) => (
                  <div key={index} className="PersonCard">
                    <h2 className="personCard">{person.name}</h2>
                    <h3 className="companyCard">{person.company}</h3>
                    <p className="roleCard">{person.role}</p>
                    <p className="sectorCard">{person.sector}</p>
                    <svg
                      className="svgCard"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                    >
                      <path
                        fill="#000"
                        d="M0,224L288,192L576,320L864,96L1152,0L1440,64L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
                      ></path>
                    </svg>
                  </div>
                ))}
              </div>
            ) : (
              <div>Loading...</div>
            )}
          </main>
          <footer>&copy; Richard Braamburg</footer>
        </div>
        <div className="blockContainer">
          <p>We only support screensizes wider than 1024px at the moment</p>
        </div>
      </div>
    );
  }
}

export default App;
