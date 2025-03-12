import { useState } from "react"
import { useNavigate } from "react-router"

export default function Main(props) {
    const [username, SetUsername] = useState("")
    const [password, SetPassword] = useState("")
    const navigate = useNavigate();

    const SendFormLogin = (e) => {
        e.preventDefault();
        // Here, login
        props.Login({Id: username, Password: password})
    }

    const SendFormSignin = (e) => {
        e.preventDefault();
        // Here, register, and login if register is success
        SendFormLogin(e)
    }

    const SwitchForm = () => {
        navigate(props.login ? "/register" : "/")
    }

    return (
        <>
            <form onSubmit={props.login ? SendFormLogin : SendFormSignin}>
                <div>
                    <input type="text" name="username" placeholder="Username" id="input_username" onChange={e => SetUsername(e.target.value)}></input>
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" id="input_password" onChange={e => SetPassword(e.target.value)}></input>
                </div>
                <div>
                    <button type="submit">{props.login ? "Connexion" : "Inscription"}</button>
                </div>
            </form>
            <a className="clickable" onClick={SwitchForm}>{props.login ? "Inscription" : "Connexion"}</a>
        </>
    )
}