import styled from 'styled-components'
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <NavContainer>
            <h2><span>Urania </span><small>cerámica</small></h2>
            <div>
                <a href="#">Chops</a>
                <a href="#">Ceniceros</a>
                <a href="#">Porta-Sahumerios</a>
            </div>
            <CartWidget />
            
        </NavContainer>
    )
}

export default Navbar;

const NavContainer = styled.nav`
    padding: .4rem;
    background-color: #ffcfe7;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2{
        color: #550ee7;
        font-weight: 400;
        margin-left: 1rem;
        span{
            font-weight: bold;
            font-family: 'Cookie', cursive;
            font-size: 40px;
        }
    }
    
    a{
        color: #35295d;
        padding: 1rem 2rem 1.15rem;
        text-transform: uppercase;
        cursor: pointer;
        min-width: 80px;
        font-family: 'Roboto', sans-serif;
        border-radius: 50px;
    }
    a:hover {

        background-color: #9578ae;
        background-size: 100% 100%;
        color: #cfcaeb;
        
        text-shadow: 0 -1px 0 #550ee7;
        font-weight: bold;
    }
`