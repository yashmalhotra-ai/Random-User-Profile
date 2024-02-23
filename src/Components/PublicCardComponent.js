import React from 'react'
import dateConvert from '../Utils/ConvertDate';


const PublicCard = (User) => {
    const { email, name, gender, location, login, dob, registered, picture } = User.publicUser || {};
    const userDOB = dateConvert(dob?.date)
    const userRegistration = dateConvert(registered?.date)

    return (
        <div>
            <div className='flex m-5    p-2 bg-gray-700' >
                <div className='flex flex-col m-2 justify-center items-center shadow-md rounded-lg p-4 hover:shadow-xl transition-all'>
                    <img className="w-32 h-32 rounded-full object-cover" alt="hero" src={picture.medium} />
                    <p className="text-sm font-medium mt-2 hover:text-gray-300">Username: {login?.username}</p>
                    <p className="text-sm font-medium mt-2 hover:text-gray-300">Since: {userRegistration}</p>
                </div>

                <div className='border border-gray-900'></div>
                <div className='m-2 max-w-[275px] shadow-md rounded-lg p-4 hover:shadow-xl transition-all'>
                    <p className="text-sm font-medium pb-2 hover:text-gray-300">Name: {name?.title} {name?.first} {name?.last}</p>
                    <p className="text-sm font-medium pb-2 hover:text-gray-300">Email: {email}</p>
                    <p className="text-sm font-medium pb-2 hover:text-gray-300">DOB: {userDOB}</p>
                    <p className="text-sm font-medium pb-2 hover:text-gray-300">Gender: {gender}</p>
                    <p className="text-sm font-medium pb-2 hover:text-gray-300">Address: {location?.street?.number}, {location?.street?.name}, {location?.city}, {location?.state}, {location?.country}</p>
                </div>

            </div>
        </div>
    )
}

export default PublicCard;
