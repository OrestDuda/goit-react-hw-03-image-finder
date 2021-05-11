import React, { Component } from "react";
import styles from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    input: "",
  };

  onInputChange = (e) => {
    this.setState({ input: e.currentTarget.value });
  };

  formSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.formSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>
          <input
            onChange={this.onInputChange}
            value={this.state.input}
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
