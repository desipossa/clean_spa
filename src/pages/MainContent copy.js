
import { Link, Route, Routes } from 'react-router-dom';

const MainContent = ({ user }) => {

    return (

        <div>

            {
                !user
                    ? "로딩중입니다. ... "
                    : <ul>
                        {
                            user.map(u => {
                                return (
                                    <li key={u.id}>
                                        <Link to={'/detail/' + u.id}>
                                            <img src={u.avatar_url} alt="" />
                                            {u.login}
                                        </Link>

                                    </li>
                                )
                            }).slice(0, 10)
                        }
                    </ul>
            }


        </div>
    )
}

export default MainContent