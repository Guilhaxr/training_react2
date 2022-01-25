import Users from "./Components/Users"
import NewUsers from "./Components/NewUsers"


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

function App() {
  return (
    <div className="App">
      <Users items ={dummy_data} />
      <NewUsers />
    </div>
  );
}

export default App;
