import React from 'react';

const HorizontalBox = () => {
    return (
        <>
            <div className='w-full h-auto flex justify-center items-center px-4 sm:px-6 lg:px-8 py-6 mt-[40px]'>
                <div className='rounded-xl w-full sm:w-[90%] lg:w-[80%] h-auto sm:h-[180px] bg-[#00a4acf2] flex flex-col sm:flex-row justify-evenly'>
                    <div className='w-full sm:w-[60%] flex items-center text-white font-bold text-2xl sm:text-4xl text-center sm:text-left px-4 sm:px-0'>
                        Start Your Journey to<br />Becoming a Doctor Today
                    </div>
                    <div className='w-full sm:w-[30%] flex items-center justify-center mt-4 sm:mt-0 px-4 sm:px-0'>
                        <button className='bg-[#005c60] w-[160px] h-[50px] rounded-md text-white text-xl sm:text-2xl font-semibold mb-4 xl:mb-0 '>
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HorizontalBox;
