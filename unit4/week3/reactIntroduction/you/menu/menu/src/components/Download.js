const downloads = {
    width: "120px",
    height: "25px",
    borderRadius: "25px",
    color: "white",
    fontWeight:"bold",
    backgroundColor: "#a98a41",
    textAlign: "center",
    border: "none",
    marginBottom:"18px"
}
function Download() {
    return (
        <div>
            <button style={downloads} >DOWNLOADS</button>
       </div>
   )
}

export { Download };