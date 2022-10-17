import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { fetchApi } from './api/api';
import { mapper } from 'utils/Mapper';
import styles from '../components/App.module.css'

export class App extends Component {
  state = {
    images: [],
    loading: false,
    page: 1,
    request: null,
    error: null,
    isShown: false,
    currentImage: null,
  };

  fetchImages = () => {
    const {page, request } = this.state
    fetchApi(page, request)
      .then(response =>
        this.setState(prevState => ({
          images: [...prevState.images, ...mapper(response.data.hits)],
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
    this.setState({loading: true})
    if (this.state.isShown) {
      this.setState({images: []})      
    }
    const searchRequest = e.target.input.value;
    this.setState({ request: searchRequest });
    this.setState({ isShown: true });
  };

  changeCurrentImage = data => {
    this.setState({ currentImage: data })
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1}))
  }

  closeModal = () => { 
    this.setState({currentImage: null})
  }

  componentDidUpdate(prevProps, prevState) {
    const { request, page } = this.state;
    if ((prevState.request !== request && request) || prevState.page !== page) {
      this.fetchImages();
    }
  };

  render() {
    const { loading, isShown, images, currentImage } = this.state;
    return (
      <div className = { styles.App }>
        <Searchbar onSubmit={this.onSubmit} />
        {loading && <Loader />}
        {isShown && (<>
        <ImageGallery images={images} openModal={this.changeCurrentImage } /> 
          <Button text='Load More' handlerClick={this.loadMore} />
        </>)}
        {currentImage && <Modal currentImage={currentImage} closeModal={ this.closeModal } />}
      </div>
    );
  }
}
