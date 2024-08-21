import styled from 'styled-components';

const Description = styled.p`
  text-align: center;
  margin: 10px 0;
  font-size: 1.2em;
  color: #666;
`;

export default function ProductDescription() {
  return <Description>Açougue de qualidade.</Description>;
}
