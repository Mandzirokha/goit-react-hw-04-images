import {
  FormButton,
  Header,
  SearchForm,
  ButtonLabel,
  Input,
} from './Searchbar.styled';

export const SearchBar = ({ onSubmit }) => {
  return (
    <Header>
      <SearchForm>
        <FormButton type="submit">
          <ButtonLabel>Search</ButtonLabel>
        </FormButton>

        <Input
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};
