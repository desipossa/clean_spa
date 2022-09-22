import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
const MainContent = ({ user }) => {
    const Product = styled.div`
    display: flex;
    flex-wrap: wrap;
    li {
        width: 20%;
        white-space: wrap;
        min-width:0;
    }
    `
    return (
        <div className='inner'>
            {
                !user
                    ? <h1>"로딩중입니다. ... "</h1>
                    : <Product>
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
                    </Product>
            }
        </div>
    )
}

export default MainContent