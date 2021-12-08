import { useParams } from 'react-router-dom';
import './UserDetails.css'
const UserDetails = () =>{
    const params=useParams();

    return(
        <div>
            <h1 className="username">User Name</h1>
            <p className="username-details">{params.userName}</p>
        </div>
    )
}

export default UserDetails;