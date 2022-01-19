import "./Styles/Gift.css"

function Logo({card}){
    const {logo} = card;
    return <img className="logoImage" src={logo} alt="logo" />
}

export default Logo