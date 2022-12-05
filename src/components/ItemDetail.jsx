import styled from "styled-components";
import {FaShoppingCart} from 'react-icons/fa'

const ItemDetail = ({item}) => {
    return (
        <Wrapper>
            <Outer>
                <Content>
                    <h1>Afro<br/> baseball hair</h1>
                    <p>{item.description}</p>
                    
                    <Button>
                        <a href="#">${item.cost}</a><a href="#"><FaShoppingCart />ADD TO CART</a>
                    </Button>
                </Content>
                <img src={item.image} />
            </Outer>
        </Wrapper>   
    )
}

export default ItemDetail;

const Wrapper = styled.div`
    display: flex;
	justify-content: center;
	align-items: center;
	font-family: Montserrat;
	background: #262626;
	width: 100%;
	height: 100vh;

    img {
	position: absolute;
	top: 0px;
	right: -20px;
	z-index: 0;
	animation-delay: 0.5s;
    width: 300px;
    }
`

const Outer = styled.div`
    position: relative;
	background: #fff;
	height: 350px;
	width: 550px;
	overflow: hidden;
	display: flex;
	align-items: center;
`
const Content = styled.div`
    animation-delay: 0.3s;
	position: absolute;
	left: 20px;
	z-index: 3

    p {
	width: 280px;
	font-size: 13px;
	line-height: 1.4;
	color: #aaa;
	margin: 20px 0;
    }
`
const Button = styled.div`
    width: fit-content;
	height: fit-content;
	margin-top: 10px;

    a {
	display: inline-block;
	overflow: hidden;
	position: relative;
	font-size: 11px;
	color: #111;
	text-decoration: none;
	padding: 10px 15px;
	border: 1px solid #aaa;
	font-weight: bold;
    }

    a:after{
	content: "";
	position: absolute;
	top: 0;
	right: -10px;
	width: 0%;
	background: #111;
	height: 100%;
	z-index: -1;
	transition: width 0.3s ease-in-out;
	transform: skew(-25deg);
	transform-origin: right;
    }

    a:hover:after {
	width: 150%;
	left: -10px;
	transform-origin: left;
    }

    a:hover {
	color: #fff;
	transition: all 0.5s ease;
    }

    a:nth-of-type(1) {
	border-radius: 50px 0 0 50px;
	border-right: none;
    }

    a:nth-of-type(2) {
	border-radius: 0px 50px 50px 0;
    }
`
