import { StyledShopPage } from './style';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';

import { StyledContainer } from '../../styles/grid';
import { useModal } from '../../hooks/useModal';

import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../providers/UserContext';
import { useAuth } from '../../providers/AuthContext';

const ShopPage = () => {


  const { isOpen, toggle } = useModal();

  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);

  const { setToken } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setToken(null);
    setUser(null);
    navigate("/");
  }

  return (
    <StyledShopPage>
      {isOpen && (
        <CartModal
          onClose={toggle}
        />
      )}
      <Header
        handleOpenModal={toggle}
        handleLogout={handleLogout}
      />
      <main>
        <StyledContainer containerWidth={1300}>
          <ProductList />
        </StyledContainer>
      </main>
    </StyledShopPage>
  )
};

export default ShopPage;
