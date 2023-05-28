import React from 'react';
import { TypeAnimation } from 'react-type-animation'

const About = () => {
    return (
        <div className='w-10/12 lg:w-1/2 absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%]'>
            <div className='w-full flex flex-col items-center justify-center'>
                <h1 className='text-[25px] sm:text-[35px] text-center'>سلام، من امیرحسین حسین پور هستم</h1>
                <p className='pt-2 pb-5 text-[20px] text-blue sm:text-[25px]'>
                    <TypeAnimation sequence={[
                        'برنامه نویس فرانت اند',
                        2000,
                        'یوتیوبر',
                        2000,
                    ]}
                        wrapper='p'
                        repeat={Infinity}
                    />
                </p>
                <p className='leading-7 pb-12 text-[15px] sm:text-[16px] text-center'>
                    مسلط به مفاهیم ری اکت
                    توانایی راه اندازی انواع پروژه های تک صفحه ای و چند صفحه ای
                    توانایی استفاده از ابزار های مثل ریداکس
                    مسلط به مفاهیم مربوط به جاوااسکریپت, اچ تی ام ال, سی اس اس مانند ایجاد بخش های مختلف در صفحات و تنظیمات ظاهری و رابط کاربری
                    مسلط به طراحی ریسپانسیو
                    توانایی ایجاد ارتباط بین بک اند و فرانت اند
                </p>
                <div className='w-full flex flex-col sm:flex-row justify-center items-center'>
                    <a className='border-[3px] rounded-[8px] transition-colors duration-300 text-blue font-black border-blue py-[9px] w-full sm:w-36 text-center hover:bg-blue hover:text-blue-dark mb-5 sm:mb-0 sm:mr-5' href=''>ارتباط با من</a>
                    <a className='border-[3px] rounded-[8px] transition-colors duration-300 text-blue font-black border-blue py-[9px] w-full sm:w-36 text-center hover:bg-blue hover:text-blue-dark' href=''>دانلود رزومه من</a>
                </div>
            </div>
        </div>
    );
};

export default About;