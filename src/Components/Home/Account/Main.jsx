import "./Account.css"

export default function Main(props) {
    const Test = async (url) => {
        // let url = "https://cors-anywhere.herokuapp.com/https://ftpapiacces.altsproduction.ovh/databasesapi/API/read.php?ext=utilisateurs";
        try {
            const response = await fetch(url, {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": 'application/json',
                    "Access-Control-Allow-Origin": "*"
                }
            });
            if (!response.ok) {
                console.error(response)
                throw new Error(`Response status: ${response.status}`);
            }
        
            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div className="flex_container flex_row">
                <div id="account_infos" className="flex_col">
                    <div id="account_settings">
                        <p>Name</p>
                        <button onClick={() => Test("https://ftpapiacces.altsproduction.ovh/databasesapi/API/read.php?ext=utilisateurs")}>utilisateurs</button>
                        <button onClick={() => Test("https://ftpapiacces.altsproduction.ovh/databasesapi/index.html")}>Index.html</button>
                    </div>
                    <div id="account_expenses" className="scrollbox"></div>
                </div>
                <div id="account_games" className="scrollbox">
                </div>
            </div>
        </>
    )
}