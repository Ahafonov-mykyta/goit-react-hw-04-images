import { useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export function App() {
  const [name, setName] = useState('');
  const [page, setPage] = useState(1);

  const incrementPage = () => {
    setPage(prevState => prevState + 1);
  };

  const onSubmit = event => {
    event.preventDefault();
    const searchName = event.currentTarget.name.value;
    setName(searchName);
    setPage(1);
  };

  return (
    <div className="app">
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery name={name} incrementPage={incrementPage} page={page} />
    </div>
  );
}
