import Styled from 'styled-components';
import defaultimg from '../images/room-1.jpeg'

const StyledHero = Styled.header`
min-height: 60vh;
background: url("${props => props.heroimg? props.heroimg : defaultimg}") center/cover no-repeat;
display: flex;
align-items: center;
justify-content: center;

`




export default StyledHero;