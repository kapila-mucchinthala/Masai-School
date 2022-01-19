const home = {
    width: "120px",
    height: "25px",
    borderRadius: "25px",
    color: "white",
    fontWeight:"bold",
    backgroundColor: "#dd4483",
    textAlign: "center",
    border: "none",
    marginBottom:"18px"
}
function Home() {
    return (
        <div>
            <button style={home}>HOME</button>
       </div>
   )
}

export { Home };