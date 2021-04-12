import React from 'react'
import axios from "axios";

export default class AboutUs extends React.Component
{
    constructor()
    {
        super()
        this.state={postsArr:[]}
    }
    navigateToFeedBackEventHandler=()=>{
        this.props.history.push("/feedback",{userName:"anju munoth"})
    }
    navigateToBookEventHandler=()=>{
        this.props.history.push("/books/10");
    }
    navigateToEmployeeEventHandler=()=>{
        this.props.history.push("/emp/101/sara");
    }

    componentDidMount()
    {
        //called only once when my component is mounted
        // send a request to the server
        // subscribe to 3rd party api's; start the timer; setTimeout
        var serverUrl="https://jsonplaceholder.typicode.com/posts"
        axios.get(serverUrl)
        .then((res)=>{
              console.log("Response from the server",res) 
              this.setState({postsArr:res.data}) 
        })
        .catch((err)=>{
            console.log("Error from the server",err)
        })
    }
    pushRequestEventHandler=()=>{
        var serverUrl="https://jsonplaceholder.typicode.com/posts"
        axios.post(serverUrl,{id:101,title:"hello"})
        .then((res)=>{
                console.log(res)
        })
        .catch((err)=>{
                console.log(err)
        })
    }
    render()
    {
        console.log(this.props);// empty or ud 
        var liArr=this.state.postsArr.map((item)=>{
            return(
                <li key={item.id}>
                      <h1>{item.id}: {item.title}  </h1>
                </li>
            )
        })
        return(
            <div>
                <h1> About Us Component</h1>
                <input type="button" value="Go To Feedback" onClick={this.navigateToFeedBackEventHandler}/>
                <input type="button" value="Go to Books" onClick={this.navigateToBookEventHandler} />
                <input type="button" value="Go to Employee" onClick={this.navigateToEmployeeEventHandler} />
                <input type="button" value="Push request to server" onClick={this.pushRequestEventHandler} />
                
                <ul>
                    {liArr}
                </ul>
            </div>
        )
    }
}