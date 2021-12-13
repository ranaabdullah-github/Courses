import React, { createContext } from 'react'
import { Layout } from './Layout';

export const Application = () => {
    const UserContext=createContext('Unknown');
    const userName="John";
    return (
        <UserContext.Provider value={userName}>
            <Layout>
                Main content
            </Layout>
        </UserContext.Provider>
    )
}
export default Application