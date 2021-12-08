import { Link, Links } from 'react-router-dom';
import './Users.css'
const Users = () =>{
    return(
        <div>
            <h1 className="users">Users(Click on Users to get their name)</h1>
            <ul>
                <li className="users-details"><Link className="link-user" to='/user-details/Abdul Mujeeb M A'>User 1</Link></li>
                <li className="users-details"><Link className="link-user" to='/user-details/Rohith S K'>User 2</Link></li>
            </ul>
        </div>
    )
}

export default Users;
