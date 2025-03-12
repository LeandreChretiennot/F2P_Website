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
					<Route path="/f2p" element={<LoginMain Login={Login} login={true} />}/>
					<Route path="/f2p/register" element={<LoginMain Login={Login} login={false} />}/>
				</>
				: */}
				<>
					<Route path="/f2p" element={<HomeMain loggedInAccount={loggedInAccount} disconnect={Disconnect} />}/>
				</>
				{/* } */}
				<Route path="*" element={<Navigate replace to="/" />} />
			</Routes>
		</>
	);
}

export default App;
