import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const SlideItm = styled.div`
    .tit {
        font-size: 80px;
        font-weight: 800;
        margin: 0 0 30px 0;
        text-shadow:1px 0 3px rgba(255,255,255,0.25); 
        background: linear-gradient(to right top, #0a96ba, #032777, #333333);
        color: transparent;
        -webkit-background-clip: text;}
    }
    .con {
        font-size: 20px;
        font-weight: 300;
        margin: 0 0 20px 0;
        color: tomato;
    }
    .des {
        font-size: 15px;
        word-break: keep-all;
        line-height: 1.45;
    }
`

const Dots = styled.ul`
    display: flex;
    gap: 10px;
    position: absolute;
    top: 100px;
    left: 50%;
    margin: 0 0 0 -585px;
    li {
        width: 20px;
        height: 20px;
        background: #ddd;

        &.on {
            background: tomato;
        }
    }
`

const Arrows = styled.div`
    position: absolute;
    top: 100px;
    left: 50%;
    margin: 0 0 0 0;
    i {
        font-size: 30px;
        color: #fff;
        background: rgba(0,0,0,0.25);
        padding: 15px;
        border-radius: 50%;
    }
`
const SlideNum = styled.div`
    position: absolute;
    bottom: 150px;
    left: 50%;
    margin: 0 0 0 -585px;
    font-size: 30px;
    font-weight: 700;
    span {
        font-size: 15px;
    }
`

const MainVisual = ({ word }) => {
    const [idxn, setIdxn] = useState();
    const MS = useRef(null);

    const MAINLINK = [
        { tit: "깔끔이청소 소개", link: "/sub01" },
        { tit: "아파트입주청소", link: "/sub02" },
        { tit: "이사/상가청소", link: "/sub03" },
        { tit: "사무실청소", link: "/sub04" },
    ]
    return (
        <section className='MainVisual'>
            <Swiper className='MainSlide'
                direction={"vertical"}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                onSlideChange={it => setIdxn(it.realIndex)}
                ref={MS}
            >
                {
                    word.map((sl, idx) => {
                        return (
                            <SwiperSlide key={idx}>
                                <SlideItm>
                                    <div className='tit'>{sl.tit}</div>
                                    <div className='con'>{sl.con}</div>
                                    <div className='des'>{sl.des}</div>
                                </SlideItm>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <div className='slider__etc'>
                <Dots className="dots">
                    {
                        word.map((dot, idx) => {
                            return (
                                <li className={idxn === idx ? 'on' : ''} onClick={() => { MS.current.swiper.slideTo(idx + 1) }} key={idx}></li>
                            )
                        })
                    }
                </Dots>
                <div className="boom">
                    <img src={process.env.PUBLIC_URL + '/assets/images/slogan.png'} alt="" />
                </div>
                <Arrows>
                    <i className='xi-arrow-right' onClick={() => MS.current.swiper.slideNext()}></i>
                </Arrows>
                <SlideNum>
                    0{idxn + 1} / <span>0{word.length}</span>
                </SlideNum>
            </div>
            <ul className="main__link inner">
                {
                    MAINLINK.map((lnk, idx) => {
                        return (
                            <li key={idx}>
                                <Link to={lnk.link}>
                                    <div className="case">
                                        <span>{lnk.tit}</span>
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }
                <li>
                    <div className="customer">
                        <strong><a href="tel:011-592-4960">011-592-4960</a></strong>
                        <p>
                            부산 김해 양산 기장 아파트입주청소 이사청소<br />
                            믿고 맡길 수 있는 청소 전문업체
                        </p>
                        <i className='xi-user-plus-o'></i>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default MainVisual