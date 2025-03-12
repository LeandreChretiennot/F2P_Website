import './Home.css';
import AccountMain from './Account/Main'
import GameDataMain from './GameData/Main'
import MyGameMain from './MyGame/Main'
import { useState } from 'react';

export default function Main(props) {
    const [gameSelected, SetGameSelected] = useState(null)
    const [popupOpen, SetPopupOpen] = useState(false)

    return (
        <>
            <div className="flex_container flex_row">
                <div id="home_left">
                    <div id="account" className="">
                        <AccountMain loggedInAccount={props.loggedInAccount} SetGameSelected={SetGameSelected} gameSelected={gameSelected} />
                    </div>
                    <div id="game_info" className="">
                        <GameDataMain gameSelected={gameSelected} />
                    </div>
                </div>
                <div id="my_game" className="">
                    <MyGameMain loggedInAccount={props.loggedInAccount} />
                </div>
            </div>
        </>
    )
}