import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
const Sub04 = ({ user }) => {

    return (
        <div className='inner'>
            {
                !user
                    ? <h1>"로딩중입니다. ... "</h1>
                    : <ul>
                        {
                            user.map(u => {
                                return (
                                    <li key={u.id}>
                                        <Link to={'/detail/' + u.id}>
                                            <img src={u.image_link} alt="" />
                                            <div className="name">
                                                {u.name}
                                            </div>
                                            <div className="price">
                                                {u.price}
                                            </div>

                                        </Link>

                                    </li>
                                )
                            })
                        }
                    </ul>
            }
        </div>
    )
}

export default Sub04;