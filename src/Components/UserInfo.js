import React, { useContext } from 'react'

export const UserInfo = () => {
    const userName=useContext(useContext);
    return (
        <div>
            <span>{userName}</span>
        </div>
    )
}
