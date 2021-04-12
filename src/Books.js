export default function Books(props)
{
    var bookId=props.match.params.bookId
    return (
        <div>
            <h1> Books Component</h1>
            <h3> Book Id :{bookId}</h3>
            <input type="button" value="Back" onClick={()=>{
                props.history.go(-3);
            }} />
        </div>
    )
}