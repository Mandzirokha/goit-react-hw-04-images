import { Component } from 'react';
// import { toast } from 'react-toastify';
import {
  FormButton,
  Header,
  SearchForm,
  ButtonLabel,
  Input,
} from './Searchbar.styled';

export default class SearchBar extends Component {
  state = {
    imageName: '',
  };

  handleNameChange = e => {
    this.setState({ imageName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.imageName.trim() === '') {
      // toast.error('Please, enter a request.');
      alert('Please, enter request');
      return;
    }

    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <FormButton type="submit">
            <ButtonLabel>Search</ButtonLabel>
          </FormButton>

          <Input
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.imageName}
            onChange={this.handleNameChange}
          />
        </SearchForm>
      </Header>
    );
  }
}
