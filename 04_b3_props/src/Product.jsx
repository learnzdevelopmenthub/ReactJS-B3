
const Product = ({ products, addToCart }) => {
    return(
        <>
            <h2>Products</h2>
            <ul>
                {products.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => addToCart(item)}>Add to cart</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Product