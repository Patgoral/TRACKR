import './App.css'
import { useState } from 'react'
import AuthPage from '../AuthPage/AuthPage'
import NavBar from '../components/NavBar/NavBar'


import { getUser } from '../../utilities/users-services'


function App() {
  const [user, setUser] = useState(getUser())

  return (
<main className="App">
<> <NavBar user={user} setUser={setUser} />
{/* <AuthPage setUser={setUser} user={user} /> */}
	
	
 </>
		</main>
  
  );
}

export default App;
