function Newsletter() {
    return ( 

        <div className="w-full py-16 bg-gray-500 px-4">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2 my-4">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Want tips & tricks to optimize your flow?</h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                        <input className="p-3 flex w-full rounded-md" type='email' placeholder="Enter Email" />
                        <button className='bg-green-500 w-[200px] rounded-md ml-4 font-medium my-6 py-3 px-6'>Sign Up</button>
                    </div>
                    <p>We care about the protection of your data. Read our <span className="text-green-500">Privacy Policy.</span></p>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;