const search = {
    width: "120px",
    height: "25px",
    borderRadius: "25px",
    color: "white",
    fontWeight:"bold",
    backgroundColor: "#6fa43d",
    textAlign: "center",
    border: "none",
    marginBottom:"18px"
}

function Searchb() {
    return (
        <div>
            <button style={search}>SEARCH</button>
       </div>
   )
}

export { Searchb };