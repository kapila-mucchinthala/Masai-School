import "./Styles/Gift.css"

function Date({card}){
    const {date} = card;
    return <div className="dateOnCard">{date}</div>
}

export default Date