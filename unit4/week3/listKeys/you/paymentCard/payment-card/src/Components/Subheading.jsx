import "./Styles/Gift.css"

function Subheading({card}){
    const {subheading} = card;
    return <div className="subHead">{subheading}</div>
}
export default Subheading