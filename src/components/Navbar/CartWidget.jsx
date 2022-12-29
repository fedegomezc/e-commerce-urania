import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CartWidget = () => {
    return(
        <CartIcon>
            <Link to={"/cart"}><FaShoppingCart /></Link>
            <CartAmount>0</CartAmount>
        </CartIcon>
        
    )
}
export default CartWidget;

// Styled components

const CartIcon = styled.div`
    position: relative;
    font-size: 30px;
    padding: 8px;
    border-radius: 4px;
`
const CartAmount = styled.div`
    position: absolute;
    top: -8px;
    right: -2px;
    font-size: 16px;
    background-color: #ff7300;
    color: white;
    padding: 3px;
    border-radius: 3px;
`