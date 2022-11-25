import { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { fetchImages } from './api/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ButtonLoadMore } from './Button/ButtonLoad';
import { LoaderRing } from './Loader/Loader';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './Modal/Modal';

export default function App() {
  const [galarry, setGalarry] = useState([]);
  const [page, setPage] = useState(1);
  const [largeImageUrl, setLargeImageUrl] = useState('');
  const [searchName, setSearchName] = useState('');
  const [status, setStatus] = useState('');
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (searchName === '') {
      return;
    }
    async function renderImages() {
      setStatus('pending');

      try {
        const imageList = await fetchImages(searchName, page);

        setGalarry(galarry => [...galarry, ...imageList]);
        setStatus('resolved');
        if (imageList.length === 0) {
          toast.error(
            'Sorry, there are no images matching your search query. Please, try again.',
            {
              autoClose: 2000,
            }
          );
        }
      } catch (error) {
        toast.error('Ops, something go wrong. Please reload the page!', {
          autoClose: 2000,
        });
        setStatus('rejected');
      }
    }
    renderImages();
  }, [page, searchName]);

  const onSubmit = searchPicture => {
    setSearchName(searchPicture);
    setPage(1);
    setGalarry([]);
  };

  const onClickLoadMore = () => {
    setPage(page => page + 1);
  };
  const onClickToggleModal = largeImage => {
    setModal(!modal);
    setLargeImageUrl(largeImage);
  };
  const onClickBackDrop = () => {
    setModal(!modal);
    setLargeImageUrl('');
  };

  return (
    <div>
      <Searchbar onSubmitSearch={onSubmit} />
      <ImageGallery gallery={galarry} onClick={onClickToggleModal} />
      {status === 'pending' && <LoaderRing />}
      {(galarry.length === 12 || galarry.length > 12) && (
        <ButtonLoadMore onClick={onClickLoadMore} />
      )}
      {modal && <Modal image={largeImageUrl} onClick={onClickBackDrop} />}
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
