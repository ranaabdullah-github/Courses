import React, { Children } from 'react'

export const Layout = ({Children}) => {
    return (
        <div>
            <Header/>
            <main>
                {Children}
            </main>
        </div>
    )
}
