import {useState,useEffect} from "react";
import axios from "axios"

export default function Emp(props)
{
    var [firstName,setFirstName]=useState("anju");
    var [lastName,setLastName]=useState("munoth")
    var [postsArr,setPostsArr]=useState([])
    var changeNameEventhandler=()=>
    {
        setFirstName("sara")
        // setState({firstName:"sara"});// merge it with the state and call the render
    }
    var changeLastNameEventhandler=()=>
    {
        setLastName("singh")
        // setState({firstName:"sara"});// merge it with the state and call the render
    }
    // componentDidMount
    //called only once; after the render 
    useEffect(()=>{
        var serverUrl = "https://jsonplaceholder.typicode.com/posts"
        axios.get(serverUrl)
            .then((res) => {
                console.log("Response from the server", res)
              //  this.setState({ postsArr: res.data })
              setPostsArr(res.data)
            })
            .catch((err) => {
                console.log("Error from the server", err)
            })
    },[])
    
    // componentWillUnmount
    useEffect(()=>{
        return(()=>{
            alert("Emp is going to be unmounted")
        })
    },[])

    //
    useEffect(()=>{
        alert("FirstName changed")
    },[firstName])

    useEffect(()=>{
        alert("Last Name changed")
    },[lastName])

    useEffect(()=>{
        alert("name changed")
    },[firstName,lastName])

    var empId=props.match.params.empId
    var empName=props.match.params.empName
    var liArr = postsArr.map((item) => {
        return (
            <li key={item.id}>
                <h1>{item.id}: {item.title}  </h1>
            </li>
        )
    })
    return (
        <div>
            <h1> Emp Component</h1>
            <h3> Emp Id :{empId}</h3>
            <h3> Emp Name :{empName}</h3>
            <input type="button" value="Change firstName" onClick={changeNameEventhandler} />
            <input type="button" value="Change lastName" onClick={changeLastNameEventhandler} />
            <h3> Name :{firstName} {lastName}</h3>
            <ul>
                {liArr}
            </ul>
        </div>
    )
}

// how to have state as part of functional component
// how to replicate lifecycle methods
// constructor
// componentDidMount
/*
 destructuring an array
 var arr=[10,20,30,40,50]
 var i,j=arr;
 console.log(i);//ud
 console.log(j);//[10,20,30,40,50]

 var [i,j]=arr;//
 console.log(i);//10
 console.log(j);//20

 var [f1,f2,,f4]=arr;
 f1=10;f2=20;f4=40

 arr=[10,function(){console.log("hello")}]
 var [ctr,setCtr]=arr
 setCtr()

 var [ctr,setCtr]=function(p1){
     return [p1,function(p2){
         console.log(p2)
     }]
 }

 ctr=p1
 setCtr(100)

*/