import CartProductCard from './CartProductCard';

import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';

import { useContext } from 'react';
import { ShoppingCartContext } from '../../../providers/CartContext';

const CartProductList = () => {

  const { shoppingCart } = useContext(ShoppingCartContext);

  const total = shoppingCart.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0)

  return (
    <StyledCartProductList>
      <ul>
        {shoppingCart.map((product, index) => (
          <CartProductCard key={index} product={product} />
        ))}
      </ul>
      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</StyledParagraph>
      </div>
      <StyledButton $buttonSize='default' $buttonStyle='gray'>
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  )
};

export default CartProductList;
