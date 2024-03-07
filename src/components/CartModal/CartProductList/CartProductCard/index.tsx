import { MdDelete } from 'react-icons/md';

import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';

import { useContext } from 'react';
import { ProductContext } from '../../../../providers/ProductsContext';

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


  return (
    <StyledCartProductCard>
      <div className='imageBox'>
        <img src={product.img} />
      </div>
      <div className='contentBox'>
        <StyledTitle tag='h3' $fontSize='three'>
          {product.name}
        </StyledTitle>
        <button type='button' aria-label='Remover'>
          <MdDelete size={24} />
        </button>
      </div>
    </StyledCartProductCard>
  )
};

export default CartProductCard;
