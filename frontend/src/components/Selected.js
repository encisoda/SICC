import React, { Component, Fragment } from "react";
import Select from "react-select";


const options = [
    { value: "rojo", label: "rojo" },
    { value: "azul", label: "azul" },
    { value: "verde", label: "verde" },
    { value: "blanco", label: "blanco" }
  ];
  

  export default class Selected extends Component {
    state = {
      selectedOption: null
    };
    handleChange = selectedOption => {
      this.setState({ selectedOption });
      // Option selected: { value: "rojo", label: "rojo" }
      console.log("Option selected:", selectedOption);
    };
    render() {
      return (
        <Fragment>
          <Select
            isMulti
            options={options}
            value={this.state.selectedOption}
            onChange={this.handleChange}
            closeMenuOnSelect={false}
          />
        </Fragment>
      );
    }
  }