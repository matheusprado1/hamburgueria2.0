import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';

interface IProductCardProps {
  product: {
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
  };
}

const ProductCard = ({ product }: IProductCardProps) => (
  <StyledProductCard>
    <div className='imageBox'>
      <img src={product.img} alt='Hamburguer' />
    </div>
    <div className='content'>
      <StyledTitle tag='h3' $fontSize='three'>
        {product.name}
      </StyledTitle>
      <StyledParagraph className='category'>{product.category}</StyledParagraph>
      <StyledParagraph className='price'>{product.price}</StyledParagraph>
      <StyledButton $buttonSize='medium' $buttonStyle='green'>
        Adicionar
      </StyledButton>
    </div>
  </StyledProductCard>
);

export default ProductCard;
