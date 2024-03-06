import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { useContext } from 'react';
import { ProductContext } from '../../providers/ProductsContext';

const ProductList = () => {

  const { productList } = useContext(ProductContext);

  return (
    <StyledProductList>
      {productList.map((product) => (
        <ProductCard key={product.id} product={product} />

      ))}
    </StyledProductList>
  )
};

export default ProductList;
