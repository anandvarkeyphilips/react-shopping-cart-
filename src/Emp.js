export default function Emp(props)
{
    var empId=props.match.params.empId
    var empName=props.match.params.empName
    return (
        <div>
            <h1> Emp Component</h1>
            <h3> Emp Id :{empId}</h3>
            <h3> Emp Name :{empName}</h3>
        </div>
    )
}