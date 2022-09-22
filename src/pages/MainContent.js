import { Link } from "react-router-dom"

const MainContent = ({ word }) => {
    //const {word} = props;
    return (
        <section className="MainContent">
            <div className="inner">
                {
                    word.map((con, idx) => {
                        return (
                            <Link to={con.link} key={idx}>
                                <figure key={con.id}>
                                    <img src={process.env.PUBLIC_URL + `/assets/images/main_s01${idx + 1}.jpg`} alt="" />
                                </figure>
                                <strong>{con.tit}</strong>
                                <p>
                                    {con.des}
                                </p>
                            </Link>

                        )
                    })

                }
            </div>
        </section>
    )
}

export default MainContent;