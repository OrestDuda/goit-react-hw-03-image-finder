import React, { Component } from "react";
import axios from "axios";
import Modal from "./Modal/Modal";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Container from "./Container/Container";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./App.module.css";

import Button from "./Button/Button";

class App extends Component {
  state = {
    hits: [],
    query: "",
    page: 1,
    isLoading: false,
    error: null,
    showModal: false,
    largeImgUrl: "",
  };

  apiKey = "20359745-c6c2513bd1e372703e7d54807";
  commonUrl = "https://pixabay.com/api";

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchImages();
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  formSubmitted = (value) => {
    this.setState({ query: value, page: 1, hits: [], error: null });
  };

  fetchImages = () => {
    this.setState({ isLoading: true });
    axios
      .get(
        `${this.commonUrl}/?q=${this.state.query}&page=${this.state.page}&key=${this.apiKey}&image_type=photo&orientation=horizontal&per_page=12\n`
      )
      .then(({ data }) =>
        this.setState((prevState) => ({
          hits: [...prevState.hits, ...data.hits],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  toggleModal = (imgUrl) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImgUrl: imgUrl,
    }));
  };

  render() {
    const shouldRenderLoadMoreButton =
      this.state.hits.length > 0 && !this.state.isLoading;
    return (
      <Container>
        {this.state.showModal && (
          <Modal
            onClose={this.toggleModal}
            largeImage={this.state.largeImgUrl}
          />
        )}
        {this.state.error && <h1>Something wrong</h1>}
        <Searchbar onSubmit={this.formSubmitted} />
        <ImageGallery
          results={this.state.hits}
          modalWindowsAction={this.toggleModal}
        />
        {this.state.isLoading && (
          <Loader
            type="TailSpin"
            color="#00BFFF"
            height={120}
            width={120}
            className={styles.Loader}
          />
        )}
        {shouldRenderLoadMoreButton && <Button loadMore={this.fetchImages} />}
      </Container>
    );
  }
}
export default App;
