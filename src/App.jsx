import React from 'react';

// components
import Header from './components/Header/Header';
import About from './components/About/About';
import Social from './components/Social/Social';

const App = () => {
    return (
        <div className='bg-background w-full h-screen relative'>
            <div className='w-10/12 m-auto'>
                <Header />
                <About />
                <Social />
            </div>
        </div>
    );
};

export default App;