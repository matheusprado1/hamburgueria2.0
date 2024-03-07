import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { useContext } from 'react';
import { ProductContext } from '../../providers/ProductsContext';

const ProductList = () => {
  const { productList, searchTerm } = useContext(ProductContext);

  const filteredProducts = productList.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <StyledProductList>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </StyledProductList>
  )
};

export default ProductList;
