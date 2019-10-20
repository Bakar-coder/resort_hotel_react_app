import Styled from 'styled-components';


const StyledHero = Styled.header`
  min-height: 60vh;
  background: url(${props => props.image}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 4px solid var(--primaryColor);
`;

export default {
  StyledHero
}