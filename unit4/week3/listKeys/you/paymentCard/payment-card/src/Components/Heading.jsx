import "./Styles/Gift.css"

function Heading({card}){
    const {heading} = card;
    return <div className="heading">{heading}</div>
}

export default Heading