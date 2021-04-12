export default function Feedback(props)
{
    var userName=props.location.state?props.location.state.userName:"Stranger";
    return(
        <div>
            <h1> Feedback Compenent</h1>
            <h3> Welcome {userName}</h3>
        </div>
    )
}
 