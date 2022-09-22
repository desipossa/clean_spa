import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = ({ user }) => {
    const { id } = useParams();
    // const [muser, setUser] = useState()
    // const xuser = user?.find(i => i.id === Number(id))
    // useEffect(() => {

    //     console.log(user, muser, xuser)
    // }, [])
    console.log(user)
    const muser = user?.find(i => i.id === Number(id))
    return (
        <>
            {
                <div>
                    <img src={muser?.image_link} alt="" />
                </div>
            }
        </>


    )
}

export default Detail