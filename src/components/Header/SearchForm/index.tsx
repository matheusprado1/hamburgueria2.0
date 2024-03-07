import { MdSearch } from 'react-icons/md';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { useContext } from 'react';
import { ProductContext } from "../../../providers/ProductsContext";

const SearchForm = () => {

  const { setSearchTerm } = useContext(ProductContext);

  const handleSearchChange = (event: { target: { value: string; }; }) => {
    setSearchTerm(event.target.value);
  }

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault(); // Previne o comportamento padrão de recarregamento da página
    // Aqui você pode adicionar lógica adicional para realizar a busca, se necessário
  }

  return (
    <StyledSearchForm onSubmit={handleSubmit}>
      <input type='text' placeholder='Digitar pesquisa' onChange={handleSearchChange} />
      <StyledButton type='submit' $buttonSize='medium' $buttonStyle='green'>
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  )

};

export default SearchForm;
