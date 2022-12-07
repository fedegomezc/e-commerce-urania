import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <NavContainer>
            <h2><span><LogoLink to='/'>Urania </LogoLink></span><small>cerámica</small></h2>
            <div>
                <CategoryLink to='/category/1'>Chops</CategoryLink>
                <CategoryLink to='/category/2'>Ceniceros</CategoryLink>
                <CategoryLink to='/category/3'>Porta-Sahumerios</CategoryLink>
            </div>
            <CartWidget />
            
        </NavContainer>
    )
}

export default Navbar;

const LogoLink = styled(Link)`
    text-decoration: none;
    color: #9d43d9;
`

const CategoryLink = styled(Link)`
    color: #9d43d9;
    padding: 1rem 2rem 1.15rem;
    text-transform: uppercase;
    cursor: pointer;
    min-width: 80px;
    font-family: 'Roboto', sans-serif;
    border-radius: 50px;

    :hover {
    background-color: #9578ae;
    background-size: 100% 100%;
    color: #cfcaeb;

    text-shadow: 0 -1px 0 #550ee7;
    font-weight: bold;
    }    
`

const NavContainer = styled.nav`
    padding: .4rem;
    background-color: #ffcfe7;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2{
        color: #9d43d9;
        font-weight: 400;
        margin-left: 1rem;
        span{
            font-weight: bold;
            font-family: 'Cookie', cursive;
            font-size: 40px;
        }
    }
`