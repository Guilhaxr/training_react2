import Users from "./Components/Users"
import NewUsers from "./Components/NewUsers"
import { useState } from "react"

function App() {
  const dummy_data = [
    { 
      id :'u1',
      username: 'Guiks',
      age : 30
    },
    { 
      id :'u2',
      username: 'Laoam',
      age : 22
    },
    { 
      id :'u3',
      username: 'Zorik',
      age : 55
    },
    { 
      id :'u4',
      username: 'Mariozas',

      age : 45
    },
    { 
      id :'u5',
      username: 'Boamali',
      age : 26
    },
  ]

  const [users, setUsers] = useState(dummy_data)


  //im getting data from Users.js child but Users.js is getting data from UsersForm.js child.
  const addUserHandler = (user) =>{
    const userData = [
      setUsers((prevData)=>{
        return [user, ...prevData]
      })
    ];
    
  }


  return (
    <div className="App">
      
       <NewUsers onAddUser={addUserHandler} />
      <Users items ={users} />
     
    </div>
  );
}

export default App;
