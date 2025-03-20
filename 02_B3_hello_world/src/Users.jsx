
const Users = () => {
    const users = [
        {id: 1, name: "Siva"},
        {id: 2, name: "Priya"},
        {id: 3, name: "Raj"}
    ]

    const alpha = ["a", "b", "c"]


    const handleClick = (text) => {
        console.log(`${text} clicked`)
    }
    const newFunc = () => {
        console.log("new function clicked")
    }

    return(
        <div>
            {users.map( obj => (
                <h2 key={obj.id}>{obj.name}</h2>
            ))}

            {alpha.map( (item, index) => (
                <h3 key={index}>{item}</h3>
            ))}

            <button 
                onClick={() => { 
                    handleClick("button")
                    newFunc()
                }}
            >Click</button>
        </div>
    )
}

export default Users;