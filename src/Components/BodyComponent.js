import React, { useEffect, useState } from 'react'
import getRandomUser from '../Utils/getRandomUser'
import PublicCard from './PublicCardComponent';
import toast, { Toaster } from 'react-hot-toast';
const Body = () => {
    const [publicUser, setPublicUser] = useState();

    useEffect(() => {
        handleRandomUser();
    }, [])

    
    const handleRandomUser = async () => {
        const userData = await getRandomUser();
        setPublicUser(userData);
        try {
            let userObject = JSON.parse(localStorage.getItem("allPublicUser")) || {};
            const userID = userData.id.name;
            
            // To store the previous data in same of allPublicUser
            userObject = {
                ...userObject,
                [userID]: userData,
            }

            localStorage.setItem("allPublicUser", JSON.stringify(userObject));
            toast.success(`User ${userData?.name?.first} added`)
        } catch (error) {
            console.log("error", error);
            toast.error(`Failed to add at localStorage`)
        }
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
