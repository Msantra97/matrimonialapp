import React from 'react'

export default function Main() {
    return (
        <>
            {/* gallery */}

            <div className="bg-black grid grid-cols-2 mt-2 mb-2 px-4 py-4 md:grid-cols-4 gap-4">
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="./img/gallery/pic1.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="./img/gallery/pic2.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="./img/gallery/pic3.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="./img/gallery/pic4.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="./img/gallery/pic5.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="./img/gallery/pic6.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="./img/gallery/pic7.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="./img/gallery/pic8.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="./img/gallery/pic9.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="./img/gallery/pic10.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="./img/gallery/pic11.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="./img/gallery/pic12.jpg" alt="" />
                    </div>
                </div>

                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="./img/gallery/pic13.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="./img/gallery/pic14.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="./img/gallery/pic15.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="./img/gallery/pic16.jpg" alt="" />
                    </div>
                </div>
                <div>
                <button type="button" class="text-white bg-blue-700         hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read More
                    <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                </div>
            </div>
            

            {/* about us */}

            <div className=" relative w-full justify-center bg-cover bg-no-repeat mt-2 mb-2 px-4 py-4 grid md:grid-cols-2 gap-4">

                <div className=' mt-22 mb-22'>
                    <h2 className='text-4xl mt-16 ml-16 font-[cursive]'>Somthings About Us </h2>
                    <p className='text-base font-light font-serif mt-6 p-10'>
                        Just married is professionally managed, an ISO certified matrimonial company, dedicated to provide exquisite matchmaking experience to families seeking desirable matrimonial alliance. Many globally renowned industrial and business Indian families have found life partner for their younger generation through Attune Matrimonial Services.

                        We understand that a happy marriage is key to a fulfilling life that's why we do not want our clients to makes compromises due to shortage to suitable profiles and information. Our primary mission is to provide a wide range of choices and gather extensive details of the matrimonial proposals to ensure that we can get you most the agreeable partner. We also strive to deliver best personalized services by being always available to our clients to answer their queries, and making visits at the meetings when required. The company stringently follow confidential policy as we know the worth of your personal information, and greatly value your trust above all things.

                        We have very experienced staff and most advance technical equipment to enhance the quality of communication and tighten the data security. The company consistently invest in advertisement and marketing to keep the data update. The team members of marketing department have such a great expertise in their work that we can proudly declare that Attune has got largest database of matrimonial proposals for elite class.
                    </p>
                   
                </div>
                <img className='w-full h-auto mt-[60px] rounded-3xl' src="./img/about/ser1.jpg" alt="no-image" />

                <div>
                <button type="button" className="text-white bg-blue-700         hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read More
                        <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
            </div>
            </div> 
           

            {/* services */}

            <div className=" relative w-full justify-center bg-cover bg-no-repeat mt-2 mb-2 px-4 py-4 grid md:grid-cols-2 gap-4">

                <img className='w-full h-auto mt-[70px] rounded-3xl' src="./img/service/sre2.jpg" alt="no-image" />

                <div className=' mt-22 mb-22'>
                    <h2 className='text-4xl mt-16 ml-16 font-[cursive]'>Our Services</h2>

                    <ul className="text-base font-light font-serif mt-6 p-10 max-w-md space-y-1 list-disc list-inside">
                        <li>
                            Photo Shoot
                        </li>
                        <li>
                            Video Profiling
                        </li>
                        <li>
                            Pre-Marital Counselling
                        </li>
                        <li>
                            Personality & Grooming Session
                        </li>
                        <li>
                            Filling format, collecting documents, photographs and membership charges
                        </li>
                        <li>
                            Compilation into the information system
                        </li>
                        <li>
                            Short listing the proposals, based on the criterion laid down by both the sides

                        </li>
                        <li>
                            Final match making by the match making department
                        </li>
                        <li>
                            Co-ordination of meeting and Company Representative to be part of the meeting
                        </li>
                        <li>
                            Client Servicing - Discuss / Sending you to get your approval of the
                        </li>
                        <li>
                            Giving you feedbacks of the meetings
                        </li>
                        <li>
                            Finding matches from the other sources as well
                        </li>
                        <li>
                            Team visit at your place for a detailed assesment of your living style and Preparing an insight into the details of the approved unregistered data persons
                        </li>
                        <li>
                            Discussing your profile with the approved proposals and taking feedback business details (India only) proposals before they are discussed with the other side. from them.
                        </li>
                    </ul>

                </div>
                <div>
                    <button type="button" className="text-white bg-blue-700         hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read More
                        <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
            </div>
        </>
    )
}