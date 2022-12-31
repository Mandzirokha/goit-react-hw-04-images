import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  FormButton,
  Header,
  SearchForm,
  ButtonLabel,
  Input,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

export default function SearchBar({ onSubmit }) {
  const [imageName, setImageName] = useState('');

  const handleNameChange = e => {
    setImageName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (imageName.trim() === '') {
      toast.error('Please, enter a request.');
      return;
    }

    onSubmit(imageName);
    setImageName('');
  };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <FormButton type="submit">
          <ButtonLabel>Search</ButtonLabel>
        </FormButton>

        <Input
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={imageName}
          onChange={handleNameChange}
        />
      </SearchForm>
    </Header>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
