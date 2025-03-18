import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-gradient-to-r from-indigo-600 to-amber-400">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <a href="/" className="flex items-center">
                                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Conversion App</span>
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                                <ul className="text-black dark:text-black font-medium">
                                    <li className="mb-4">
                                        <a href="https://github.com/kumarabhinav9955" className="hover:underline ">Github</a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/kumar-abhinav-a32815179/" className="hover:underline">Linkedin</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-black uppercase dark:text-white">Legal</h2>
                                <ul className="text-gray-500 dark:text-black font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-black">© 2025 Conversion App. All Rights Reserved.
                        </span>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">

                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer
