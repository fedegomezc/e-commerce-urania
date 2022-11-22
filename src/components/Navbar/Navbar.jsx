import styled from 'styled-components'
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <NavContainer>
            <h2><span>Urania </span><small>cerámica</small></h2>
            <div>
                <a href="#">Categoria 1</a>
                <a href="#">Categoria 2</a>
                <a href="#">Categoria 3</a>
            </div>
            <CartWidget />
            
        </NavContainer>
    )
}

export default Navbar;

const NavContainer = styled.nav`
    h2{
        color: #550ee7;
        font-weight: 400;
        span{
            font-weight: bold;
        }
    }
    padding: .4rem;
    background-color: #ffcfe7;
    display: flex;
    align-items: center;
    justify-content: space-between;
`