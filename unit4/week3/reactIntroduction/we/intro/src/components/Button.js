import "./button.css";

const green = {
    color: "green"
}

function Button({ age, name, url }) {
    return <div id="custombutton">
        Hello, {name}, your age is {age}
        <img alt="test" src={url} />
        <p className="bluetext">blue</p>
        <p style={green}>green</p>

    </div>
}

export { Button };