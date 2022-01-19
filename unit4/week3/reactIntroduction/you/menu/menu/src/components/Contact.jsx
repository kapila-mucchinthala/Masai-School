
const contact = {
    width: "120px",
    height: "25px",
    borderRadius: "25px",
    color: "white",
    fontWeight:"bold",
    backgroundColor: "#af2932",
    textAlign: "center",
    border: "none",
    marginBottom:"18px"
}

function Contact() {
    return (
        <div>
            <button style={contact} >CONTACT US</button>
       </div>
   )
}
 
export { Contact };