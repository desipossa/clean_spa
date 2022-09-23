import React from 'react'

const Article = ({ content, num }) => {
    return (
        <article className='Article'>
            <div className="tit">
                <strong>{content[num].tit}</strong>&nbsp;&nbsp; / &nbsp;&nbsp;{content[0].tit}
            </div>
            <div className='bg'>
                <div className="case">
                    {
                        num === 0
                            ? <div className="tit__log">
                                <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="" />
                            </div>
                            : <h2>
                                {content[num].tit}
                            </h2>
                    }


                    <p>
                        {content[num].con}
                    </p>
                </div>
            </div>

            <div className="sub__tit">
                {content[num].tit}
            </div>
            <p className="sub__des">
                {content[num].des}
            </p>

            <div className="sub__img">
                <figure>
                    <img src={process.env.PUBLIC_URL + '/assets/images/main_s011.jpg'} alt="" />
                </figure>
                <figure>
                    <img src={process.env.PUBLIC_URL + '/assets/images/main_s012.jpg'} alt="" />
                </figure>
                <figure>
                    <img src={process.env.PUBLIC_URL + '/assets/images/main_s013.jpg'} alt="" />
                </figure>
            </div>

            <div className="sub__tit">
                청소 서비스 내용
            </div>

            <ul className="sub__service">
                <li>쓰레기수거후 진공청소</li>
                <li>베란다 샷시 및 유리창 청소 (건물바깥면 유리창은 제외)</li>
                <li>베란다 바닥청소</li>
                <li>찌든데, 먼지, 오염제거</li>
                <li>실리콘 곰팡이, 거미줄, 스티거 제거 (추가적인 사항 비용발생)</li>
            </ul>

        </article>
    )
}

export default Article;