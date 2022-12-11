import styled from "styled-components";
import { BuyButton } from '../ItemList/Item'
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
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
					<BuyButton>Añadir al carrito</BuyButton>
					<ItemCount stock={item.stock}/>
				</RightColumn>
			</Wrapper>
			: <p>Cargando...</p>
		}   
		</>
    )
}

export default ItemDetail;

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