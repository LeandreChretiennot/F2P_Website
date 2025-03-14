import { useState } from 'react';
import './App.css';
import LoginMain from './Components/Login/Main'
import HomeMain from './Components/Home/Main'
import { Navigate, Route, Routes } from 'react-router';

function App() {
	const [loggedInId, SetLoggedInId] = useState(null)
	const [loggedInAccount, SetLoggedInAccount] = useState(null)

	const Login = (accountData) => {
		SetLoggedInId(accountData.Id)
		SetLoggedInAccount(accountData)
	}

	const Disconnect = () => {
		SetLoggedInId(null);
		SetLoggedInAccount(null);
	}
  
	return (
		<>
			<Routes>
				{/* {!loggedInId ? 
				<>
					<Route path="/F2P_Website" element={<LoginMain Login={Login} login={true} />}/>
					<Route path="/F2P_Website/register" element={<LoginMain Login={Login} login={false} />}/>
				</>
				: */}
				<>
					<Route path="/F2P_Website" element={<HomeMain loggedInAccount={loggedInAccount} disconnect={Disconnect} />}/>
				</>
				{/* } */}
				<Route path="*" element={<Navigate replace to="/F2P_Website" />} />
			</Routes>
		</>
	);
}

export default App;
