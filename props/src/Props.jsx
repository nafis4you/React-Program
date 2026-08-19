const Props = ({data}) => {
    console.log(data.name)
    return (
        <>  
            <hr />
            <p>Name: {data.name}</p>
            <p>Age: {data.age}</p>
            <p>Email: {data.email}</p>
        </>
    )
}

export default Props;