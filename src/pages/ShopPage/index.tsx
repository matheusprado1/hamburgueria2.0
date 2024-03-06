import { StyledShopPage } from './style';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';

import { StyledContainer } from '../../styles/grid';
import { useModal } from '../../hooks/useModal';

const ShopPage = () => {

  const { isOpen, toggle } = useModal();

  return (
    <StyledShopPage>
      {isOpen && (
        <CartModal onClose={toggle} />

      )}
      <Header
        onClick={toggle}
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
