const login = {
    width: "120px",
    height: "25px",
    borderRadius: "25px",
    color: "white",
    fontWeight:"bold",
    backgroundColor: "#f2913d",
    textAlign: "center",
    border: "none",
    marginBottom:"18px"
}

function Login() {
    return (
        <div>
            <button style={login}>LOGIN</button>
       </div>
   )
}

export { Login };