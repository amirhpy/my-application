import React from 'react';

// icons
import {
    VscGithubAlt,
    SlSocialLinkedin,
    MdOutlineAlternateEmail,

} from 'react-icons/all'

const Social = () => {
    return (
        <div className='absolute bottom-3 flex items-center'>
            <a href='https://www.linkedin.com/in/amirhosseinpour/' className='group border-2 transition-colors duration-300 border-blue p-2 rounded-full hover:bg-blue'>
                <SlSocialLinkedin className='w-5 h-5 text-blue group-hover:text-blue-dark' />
            </a>
            <a href='https://github.com/amirhpy' className='group border-2 transition-colors duration-300 border-blue p-2 rounded-full hover:bg-blue mx-5'>
                <VscGithubAlt className='w-5 h-5 text-blue group-hover:text-blue-dark' />
            </a>
            <a href='mailto:amirhosseinhphpam@gmail.com' className='group border-2 transition-colors duration-300 border-blue p-2 rounded-full hover:bg-blue'>
                <MdOutlineAlternateEmail className='w-5 h-5 text-blue group-hover:text-blue-dark' />
            </a>
        </div>
    );
};

export default Social;