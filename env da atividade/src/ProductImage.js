import styled from 'styled-components';

const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

export default function ProductImage({ src, alt }) {
  return <Image src={src} alt={alt} />;
}
