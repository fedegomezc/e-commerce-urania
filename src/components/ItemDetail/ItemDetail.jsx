import styled from "styled-components";
import { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { BuyButton } from "../ItemList/Item";
import { useContext } from "react";
import { CartContext } from "../Cart/CartContext";

const ItemDetail = ({item}) => {
	const [itemCount, setItemCount] = useState(0);
	const { addToCart } = useContext(CartContext)

	const onAdd = (quantityToAdd) => {
		alert("Seleccionaste "+ quantityToAdd + " items.");
		setItemCount(quantityToAdd);
		// Global function from cartContext
		addToCart(item, quantityToAdd);
	}

    return (
		<>
		{
			item && item.image
            ? 
			<Wrapper>
				<LeftColumn>
					<img src={item.image} />
				</LeftColumn>
				<RightColumn>
					<h2>{item.text}</h2>
					<br />
					<h3>${item.cost}</h3>
					<br />
					<p>{item.description}</p>
					<br />
					<p><strong>{item.stock}</strong> unidad/es en stock</p>
					{
						itemCount === 0 ?
						<ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd}/> :
						<Link to='/cart' style={{textDecoration: "none"}}><BuyButton>Checkout</BuyButton></Link>
					}
					
				</RightColumn>
			</Wrapper>
			: <LoaderContainer><Loader></Loader></LoaderContainer>
		}   
		</>
    )
}

export default ItemDetail;


// Styled Components //

const Wrapper = styled.div`
	font-family: 'Roboto', sans-serif;
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	text-align: center;
	padding: 25px;
`
const LeftColumn = styled.div`
	padding: 10px;
  	flex: 50%;
	background-color: #e8dce4d6;

	img {
	width: 350px;
	border-radius: 5%;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}
`
const RightColumn = styled.div`
	padding: 10px;
  	flex: 50%;
	background-color: #e8dce4d6;
`

export const LoaderContainer = styled.div`
	display: grid;
	place-items: center;
`

export const Loader = styled.span`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100px;
	height: 100px;

	:before , :after {
	content: '';
	border-radius: 50%;
	position: absolute;
	inset: 0;
	box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3) inset;
	}
	
	:after {
	box-shadow: 0 2px 0 #9d43d9 inset;
	animation: rotate 2s linear infinite;
	}

	@keyframes rotate {
	0% {  transform: rotate(0)}
	100% { transform: rotate(360deg)}
	}
`