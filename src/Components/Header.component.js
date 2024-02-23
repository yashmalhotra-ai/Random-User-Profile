import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
                <Link className="flex title-font font-medium items-center text-white mb-4 md:mb-0 cursor-pointer" to="/">
                    <img width="165" height="45" src="https://eastvantage.com/wp-content/uploads/2023/10/EV_LOGO-GREEN-GREY-e1697656723953-300x63.png" className="attachment-medium size-medium wp-image-2527" alt="" srcSet="https://eastvantage.com/wp-content/uploads/2023/10/EV_LOGO-GREEN-GREY-e1697656723953-300x63.png 300w, https://eastvantage.com/wp-content/uploads/2023/10/EV_LOGO-GREEN-GREY-e1697656723953-1024x214.png 1024w, https://eastvantage.com/wp-content/uploads/2023/10/EV_LOGO-GREEN-GREY-e1697656723953-768x160.png 768w, https://eastvantage.com/wp-content/uploads/2023/10/EV_LOGO-GREEN-GREY-e1697656723953-1536x320.png 1536w, https://eastvantage.com/wp-content/uploads/2023/10/EV_LOGO-GREEN-GREY-e1697656723953-2048x427.png 2048w" sizes="(max-width: 300px) 100vw, 165px" />
                </Link>
                <Link to={"/allpublicuser"}>
                    <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Get Stored User
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </Link>
            </div>
            <hr />
        </header>
    )
};

export default Header;
