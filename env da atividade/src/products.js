import styled from 'styled-components';
import ProductCard from './ProductCard';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function Products({ productList }) {
  return (
    <Container>
      {productList.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          description={product.description}
          imageUrl={product.imageUrl}
        />
      ))}
    </Container>
  );
}
