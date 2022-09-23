import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'

const Detail = ({ user }) => {
    const { id } = useParams();
    const muser = user.find(i => Number(id) == i.id)
    return (
        <>
            {
                !muser ? <div>LOADING ...</div>
                    :
                    <div>
                        <img src={muser.image_link} alt="" />
                    </div>
            }
        </>


    )
}

export default Detail