import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CartContext } from '../Cart/CartContext';
import { useContext } from 'react';

const CartWidget = () => {
const {quantityProd } = useContext(CartContext);

    return(
        <CartIcon>
            <Link to={"/cart"}><FaShoppingCart /></Link>
            <CartAmount>{quantityProd}</CartAmount>
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