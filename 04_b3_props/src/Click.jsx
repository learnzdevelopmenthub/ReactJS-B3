
const Click = ({handleClick}) => {
    return(
        <button onClick={() => handleClick("Child") }>Click Here</button>
    )
}

export default Click