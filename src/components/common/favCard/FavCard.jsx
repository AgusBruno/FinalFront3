
import img from "../../../../public/images/doctor.png";


const FavCard= ({ name, username, id }) => {

  return (
    <>
    <div className={`card ${id}`}>
    <img className="imagen" src={img} alt="doctor" height={180} />
    <div className="favC">
      <h2>
        {name}
      </h2>
    </div>
    <h3>{username}</h3>
    
    </div>
  
 </>
   )

}

export default FavCard