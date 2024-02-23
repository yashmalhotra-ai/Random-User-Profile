import React, { useEffect, useState } from 'react'
import { useGetfromLocal } from '../Utils/useStoreLocal';
import toast, { Toaster } from 'react-hot-toast';
import PublicCard from './PublicCard.Component';

const AllPublicUser = () => {
    const [publicUser, setPublicUser] = useState();
    const usersData = useGetfromLocal("allPublicUser");
    useEffect(() => {
        getFromLocal();
    }, [])

    const getFromLocal = () => {
        usersData ? toast.success(`Data Fetched from Local Storage`) : toast.error(`Failed to fetch the data from localStorage`);
        setPublicUser(usersData)
    }

    return (
        <div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <section className="text-gray-400 bg-gray-900 flex flex-wrap gap-2 h-full">
                {publicUser ? Object.keys(publicUser).map((itemId) => {
                    return (
                        <div key={itemId} className="flex w-[500px] h-[360px] rounded-lg shadow-md overflow-hidden">
                            <PublicCard publicUser={publicUser[itemId]} />
                        </div>

                    )
                }) : <div className='h-screen'>Loading...</div>}
            </section>
        </div>
    )
}

export default AllPublicUser;