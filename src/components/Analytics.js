import Pic from '../assets/pic.jpeg';

function Analytics() {
    return ( 
        <div className="w-full bg-black py-16 px-4">
            <div className="max-w-[1240px] h-max mx-auto grid md:grid-cols-2">
                <img className='w-[500px] mx-auto my-4' src={Pic} alt='pic' />
                <div className='flex flex-col justify-center text-white'>
                    <p className='text-green-500 font-bold'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  
                    </p>
                    <button className='bg-green-500 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Analytics;