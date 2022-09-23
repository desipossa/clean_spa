import Article from './Article';
import Aside from './Aside';
import '../css/Subpage.scss'
const Sub04 = ({ content }) => {
    const num = 3;
    return (
        <div className='Subpage'>
            <div className="nav__bar">
                <div className="inner">{content[num].tit} / {content[0].tit}</div>
            </div>
            <div className="inner sub">
                <Article content={content} num={num} />
                <Aside />
            </div>
        </div>
    )
}
export default Sub04;