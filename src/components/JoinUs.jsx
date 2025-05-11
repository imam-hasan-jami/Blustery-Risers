import React from 'react';

const JoinUs = () => {
    const handleSendMessage = () => {
        window.open('https://www.facebook.com/blusteryrisers', '_blank');
    }

    return (
        <div className='lg:w-7/12 lg:mx-auto mt-15 lg:mt-25'>
            <h1 className='font-grotesk font-bold text-2xl lg:text-4xl'>Want to join us?</h1>
            <div className='bg-base-300 mt-3 p-5 rounded-lg'>
                <p className='font-grotesk lg:text-xl font-medium text-gray-600'>If you're interested to join our team and play with use, please contact us on our official facebook page!</p>
                <div className='flex items-center justify-center mt-7 mb-3'>
                    <button onClick={handleSendMessage} className="btn bg-[#1A77F2] text-white border-[#005fd8]">
                        <svg aria-label="Facebook logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path></svg>
                            Send Message on Facebook
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;