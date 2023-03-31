import {useState, useEffect} from "react";
function FetchDemo(){
    const [users, setUsers]=useState([]);
    const fetchData=()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>{
            return response.json()
        })
        .then(response=>{
            setUsers(response)
        })
    };
    useEffect(()=>
    {
        fetchData()
    },[])
    return(
        <div>
            <h1>Data Accesss Demo (Using Fetch)</h1>
            <table border="3" cellPadding="10" align="center">
                {
                    users.map((user,id)=>
                        <tr key={id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                        </tr>
                    )
                }
            </table>
        </div>
    )
}
export default FetchDemo;