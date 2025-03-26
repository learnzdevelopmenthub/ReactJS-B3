
const Welcome = ({name="Guest", age, list}) => {
    
    return(
        <>
            <h1>Hello, {name} </h1>
            <p>Age: {age}</p>
            <ul>
                {list.map( (item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default Welcome