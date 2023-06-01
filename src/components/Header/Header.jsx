import React from 'react';
import i18n from '../i18n/i18n';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation()
    return (
        <div className='flex items-center justify-between font-bold text-right py-4'>
            <select onChange={(e) => i18n.changeLanguage(e.target.value)} value={i18n.language} className='outline-none border-2 px-2 border-blue rounded-[5px] bg-background text-blue'>
                <option value='de'>Germany</option>
                <option value='fa'>Persian</option>
            </select>
            <p className='text-xl text-white'>{t('header')}</p>
        </div>
    );
};

export default Header;