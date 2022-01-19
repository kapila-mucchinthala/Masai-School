const settings = {
    width: "120px",
    height: "25px",
    borderRadius: "25px",
    color: "white",
    fontWeight:"bold",
    backgroundColor: "#7bb0be",
    textAlign: "center",
    border: "none",
    marginBottom:"18px"
}

function Settings() {
    return (
        <div>
            <button style={settings}>SETTINGS</button>
       </div>
   )
}

export { Settings };