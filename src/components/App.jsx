import { Component } from 'react';
import { Serchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { fetchApi } from './api/api';

export class App extends Component {
  state = {
    images: [],
    loading: false,
    page: 1,
    error: null,
    request: null,
    isShown: false,
  };

  fetchImages = (page, request) => {
    fetchApi(page, request)
      .then(response =>
        this.setState(prevState => ({
          images: [...prevState.images, ...response.data.hits],
        }))
      )
      .catch(error => {
        this.setState({ error: error.message });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };
  onSubmit = e => {
    e.preventDefault();
    const searchRequest = e.target.input.value;
    this.setState({ request: searchRequest });
    this.setState({ isShown: true });
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, request, isShown } = this.state;
    if (prevState.isShown !== isShown && isShown) {
      this.fetchImages(page, request);
    }
  }

  render() {
    return (
      <>
        <Serchbar onSubmit={this.onSubmit} />
        <Loader />
        <ImageGallery images={this.state.images} />
        <Button />
        <Modal />
      </>
    );
  }
}
