
const Cart = ({ cart }) => {
    return(
        <>
            <h2>Cart: {cart.length}</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Cart