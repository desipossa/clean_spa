import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = ({ user }) => {
    const { id } = useParams();
    const muser = user?.find(i => i.id === Number(id))
    return (
        <>
            {
                !user
                    ? <>ddd</>
                    : <div>
                        <img src={muser?.avatar_url} alt="" />
                    </div>
            }
        </>


    )
}

export default Detail