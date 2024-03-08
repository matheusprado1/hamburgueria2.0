import { MdShoppingCart, MdLogout } from 'react-icons/md';

import SearchForm from './SearchForm';
import { StyledHeader } from './style';
import LogoKenzieBurguer from '../../assets/LogoKenzieBurguer.svg';

import { StyledContainer } from '../../styles/grid';

import { useContext } from 'react';
import { ShoppingCartContext } from '../../providers/CartContext';

interface CartModalProps {
  handleOpenModal: () => void;
  handleLogout: () => void;
}

const Header = ({ handleOpenModal, handleLogout }: CartModalProps) => {

  const { shoppingCart } = useContext(ShoppingCartContext);

  return (
    <StyledHeader>
      <StyledContainer containerWidth={1300}>
        <div className='flexGrid'>
          <img
            src={LogoKenzieBurguer}
            alt='Kenzie Burguer Logo'
            className='logo'
          />
          <nav className='nav' role='navigation'>
            <SearchForm />
            <div className='buttons'>
              <button
                type='button'
                onClick={handleOpenModal}
              >
                <MdShoppingCart size={28} />
                <span>{shoppingCart.length}</span>
              </button>
              <button type='button'
                onClick={handleLogout}
              >
                <MdLogout size={28} />
              </button>
            </div>
          </nav>
        </div>
      </StyledContainer>
    </StyledHeader>
  )
};

export default Header;
