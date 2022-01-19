import "./Styles/Gift.css"

function Devices({card}){
    const {devices} = card;
    return <div className="device" >{devices}</div>
}

export default Devices