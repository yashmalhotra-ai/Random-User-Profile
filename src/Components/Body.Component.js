import React, { useEffect, useState } from 'react'
import getRandomUser from '../Utils/getRandomUser'
import PublicCard from './PublicCard.Component';
import { useStoreLocal } from '../Utils/useStoreLocal';
import toast, { Toaster } from 'react-hot-toast';
const Body = () => {
    const [publicUser, setPublicUser] = useState();

    useEffect(() => {
        handleRandomUser();
    }, [])


    const handleRandomUser = async () => {
        const userData = await getRandomUser();
        useStoreLocal(userData) ? toast.success(`User ${userData?.name?.first} added`) : toast.error(`Failed to add at localStorage`);
        setPublicUser(userData);
    }

    return (

        <div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <section className="text-gray-400 bg-gray-900 h-screen">
                {publicUser &&
                    <div className="container mx-auto flex flex-col items-center justify-center h-full">
                        <PublicCard publicUser={publicUser} />
                        <div className="mt-3">
                            <button onClick={handleRandomUser} className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 focus:outline-none">Refresh</button>
                        </div>
                    </div>
                }
            </section>
        </div>

    )
}

export default Body;
