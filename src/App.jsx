import React from 'react';

// components
import Header from './components/Header/Header';
import About from './components/About/About';
import Social from './components/Social/Social';

const App = () => {
    return (
        <div className='bg-background w-full h-screen flex flex-col items-center justify-center relative'>
            <Header />
            <About />
            <Social />
            {/* <div className='w-10/12 h-screen m-auto '></div> */}
        </div>
    );
};

export default App;