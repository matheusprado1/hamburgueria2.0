import { MdDelete } from 'react-icons/md';

import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../../../providers/CartContext';

interface ICartProductCardProps {
  product: {
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
  }
}

const CartProductCard = ({ product }: ICartProductCardProps) => {
  const { removeProductFromCart } = useContext(ShoppingCartContext)

  return (
    <StyledCartProductCard>
      <div className='imageBox'>
        <img src={product.img} />
      </div>
      <div className='contentBox'>
        <StyledTitle tag='h3' $fontSize='three'>
          {product.name}
        </StyledTitle>
        <button type='button' aria-label='Remover' onClick={() => removeProductFromCart(product)}>
          <MdDelete size={24} />
        </button>
      </div>
    </StyledCartProductCard>
  )
};

export default CartProductCard;
