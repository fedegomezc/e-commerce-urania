const Item = (props) => {
    return (
        <>
            <div>{props.text}</div>
            <img src={props.image} alt='' />
        </>
        
    )
}

export default Item