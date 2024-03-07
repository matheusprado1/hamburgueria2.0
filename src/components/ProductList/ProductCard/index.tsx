import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';

import { useContext } from 'react';
import { ShoppingCartContext } from '../../../providers/CartContext';

interface IProductCardProps {
  product: {
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
  }
}

const ProductCard = ({ product }: IProductCardProps) => {

  const { addProductToCart } = useContext(ShoppingCartContext);


  return (
    <StyledProductCard>
      <div className='imageBox'>
        <img src={product.img} alt='Hamburguer' />
      </div>
      <div className='content'>
        <StyledTitle tag='h3' $fontSize='three'>
          {product.name}
        </StyledTitle>
        <StyledParagraph className='category'>{product.category}</StyledParagraph>
        <StyledParagraph className='price'>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</StyledParagraph>
        <StyledButton $buttonSize='medium' $buttonStyle='green'
          onClick={() => addProductToCart(product)}
        >
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  )
};

export default ProductCard;
