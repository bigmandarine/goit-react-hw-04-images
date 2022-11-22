import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { fetchImages } from './api/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ButtonLoadMore } from './Button/ButtonLoad';
import { LoaderRing } from './Loader/Loader';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './Modal/Modal';
class App extends Component {
  state = {
    galarry: [],
    page: 1,
    largeImageURL: '',
    searchName: '',
    status: '',
    modal: false,
  };

  async componentDidUpdate(_, prevState) {
    const prevSearch = prevState.searchName;
    const newSearch = this.state.searchName;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevSearch !== newSearch || prevPage !== nextPage) {
      this.setState({ status: 'pending' });

      try {
        const imageList = await fetchImages(newSearch, nextPage);
        this.setState(prevState => ({
          galarry: [...prevState.galarry, ...imageList],
          status: 'resolved',
        }));
      } catch (error) {
        toast.error('Ops, something go wrong. Please reload the page!', {
          autoClose: 2000,
        });
        this.setState({
          status: 'rejected',
        });
      }
    }
  }

  onSubmit = searchPicture => {
    this.setState({ searchName: searchPicture, page: 1, galarry: [] });
  };

  onClickLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  onClickToggleModal = largeImage => {
    this.setState({ modal: !this.state.modal, largeImageURL: largeImage });
  };
  onClickBackDrop = () => {
    this.setState({ modal: !this.state.modal, largeImageURL: '' });
  };

  render() {
    const { galarry, status, modal, largeImageURL } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery gallery={galarry} onClick={this.onClickToggleModal} />
        {status === 'pending' && <LoaderRing />}
        {(galarry.length === 12 || galarry.length > 12) && (
          <ButtonLoadMore onClick={this.onClickLoadMore} />
        )}
        {modal && (
          <Modal image={largeImageURL} onClick={this.onClickBackDrop} />
        )}
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    );
  }
}

export default App;
