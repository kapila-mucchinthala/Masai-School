import './box1.css';

const box1 = {
    width: '31%',
    height: '450px',
    backgroundColor: 'white',
    borderRadius: '10px',
    margin: 'auto'
}

function Box1({url, name,description,calories,date,celsius,cost,originalcost}) {
    return (
        <div style={box1}>

            <div >
                <img className='divimg' alt="text" src={url}/>
           </div>
            <div className='part'>
                <div><h3>{name}</h3></div>
                <div className='pcolor'><p>{description}</p></div>
                <div className='partone'>
                    <div className='pcolor'><p>{calories}</p></div>
                    <div className='pcolor'><p>{date}</p></div>
                    <div className='pcolor'><p>{celsius}</p></div>
                </div>
                <div className='partone'>
                    <div className='cost'><p>{cost}</p></div>
                    <div className='originalcost'><p>{originalcost}</p></div>
                    <div><button className='button'>ORDER</button></div>
                </div>
            </div>

        </div>
    )
}
 
export { Box1 };