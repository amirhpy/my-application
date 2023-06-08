import React from 'react';
import { useTranslation } from 'react-i18next';

// PDF
import resume from '../../assets/pdf/Resume-amir.pdf'

const About = () => {
    const { t } = useTranslation()
    return (
        <div className='w-10/12 lg:w-1/2 absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%]'>
            <div className='w-full flex flex-col items-center justify-center'>
                <h1 className='text-[25px] sm:text-[35px] text-center'>{t('title')}</h1>
                <p className='pt-2 pb-5 text-[20px] text-blue sm:text-[25px]'>
                    {t('job')}
                </p>
                <p className='leading-7 pb-12 text-[15px] sm:text-[16px] text-center'>{t('aboutMe')}</p>
                <div className='w-full flex flex-col sm:flex-row justify-center items-center'>
                    <a className='border-[3px] rounded-[8px] transition-colors duration-300 text-blue font-black border-blue py-[9px] w-full sm:w-36 text-center hover:bg-blue hover:text-blue-dark mb-5 sm:mb-0 sm:mr-5' href={resume} download>{t('downloadResume')}</a>
                    <a className='border-[3px] rounded-[8px] transition-colors duration-300 text-blue font-black border-blue py-[9px] w-full sm:w-36 text-center hover:bg-blue hover:text-blue-dark' href='tel:09362931516'>{t('contactMe')}</a>
                </div>
            </div>
        </div>
    );
};

export default About;