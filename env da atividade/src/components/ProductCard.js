import styled from 'styled-components';
import ProductImage from './ProductImage';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  text-align: center;
  width: 200px;
  background-color: #f9f9f9;
`;

const CardTitle = styled.h2`
  font-size: 1.5em;
  margin: 10px 0;
  color: #333;
`;

const CardDescription = styled.p`
  font-size: 1em;
  color: #777;
`;

export default function ProductCard({ title, description, imageUrl }) {
  return (
    <CardContainer>
      <ProductImage src={imageUrl} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
}
