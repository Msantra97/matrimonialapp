import React from 'react'
import { FaUserCircle } from "react-icons/fa";
export default function Gallery() {
    return (
        <div className=' bg-gray-400 flex relative w-full h-full z-100 justify-center bg-no-repeat'>
            <div className=' flex flex-col w-fit h-[1380px] bg-transparent  border-[2px] border-spacing-[2px] border-solid border-black rounded-e-[20px] rounded-s-[20px] items-center '>
                <form action='#'>
                    <h1 className='mt-[5vh] ml-[6px] inline-block font-[500] text-[30px] '>
                        Create User Profile
                    </h1>
                    <div className='ml-[10px] mt-[20px]'>
                        <FaUserCircle className='block h-auto ml-4 w-[60px]' />
                        <label class="block">
                            <span className="sr-only">Choose profile photo</span>
                            <input type="file" className="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white file:text-black hover:file:bg-blue-500"/>
                        </label>
                    </div>
                    <div className='mt-[10px] ml-2 mr-2'>

                        <label for="profilefor" className="block ml-2 mb-2 text-sm font-medium text-black">Profile for</label>
                        <select id="profilefor" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select</option>
                            <option value="Self">Self</option>
                            <option value="Son">Son</option>
                            <option value="Daughter">Daughter</option>
                            <option value="Brother">Brother</option>
                            <option value="Sister">Sister</option>
                        </select>

                    </div>

                    <div className="relative mt-1 mr-2 ml-2 w-auto border-b-[1px] border-solid border-black">

                        <input id="default_filledd" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-md text-black bg-transparent border-0 border-b-1 appearance-none   focus:outline-none focus:ring-0 peer" placeholder=" " type="text" required />
                        <label for="default_filledd" className="absolute text-md duration-300 transform -translate-y-4 scale-75 top-4  z-10 origin-[0]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-5">First Name</label>
                    </div>
                    <div className="relative mt-1 mr-2 ml-2 w-auto border-b-[1px] border-solid border-black">

                        <input id="default_filledd" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-md text-black bg-transparent border-0 border-b-1 appearance-none   focus:outline-none focus:ring-0 peer" placeholder=" " type="text" required />
                        <label for="default_filledd" className="absolute text-md duration-300 transform -translate-y-4 scale-75 top-4  z-10 origin-[0]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-5">Last Name</label>
                    </div>

                    <div className="flex mt-1">
                        <div className="flex items-center ml-2  mr-4">
                            <input id="inline-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 border-black" />
                            <label for="inline-radio" className="ml-2 text-sm font-medium text-black">Male</label>
                        </div>

                        <div className="flex items-center ml-2  mr-4">
                            <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 border-black" />
                            <label for="inline-2-radio" className="ml-2 text-sm font-medium text-black">Female</label>
                        </div>
                    </div>




                    <div className='mt-[10px] ml-2 mr-2'>

                        <label for="Religion" className="block ml-2 mb-2 text-sm font-medium text-black">Religion</label>
                        <select id="Religion" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select</option>
                            <option value="Hindu">Hindu</option>
                            <option value="Muslim">Muslim</option>
                            <option value="Christian">Christian</option>
                            <option value="Other">Other</option>

                        </select>
                    </div>

                    <div className='mt-[10px] ml-2 mr-2'>

                        <label for="Community" className="block ml-2 mb-2 text-sm font-medium text-black">Community</label>
                        <select id="Community" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select</option>
                            <option value="Hindi">Hindi</option>
                            <option value="Bengali">Bengali</option>
                            <option value="Urdu">Urdu</option>
                            <option value="Marwari">Marwari</option>
                            <option value="Marathi">Marathi</option>
                            <option value="Punjabi">Punjabi</option>
                            <option value="Gujarati">Gujarati</option>
                            <option value="Odia">Odia</option>
                            <option value="Telugu">Telugu</option>
                            <option value="Tamil">Tamil</option>
                            <option value="Others">Others</option>

                        </select>
                    </div>

                    <div className='mt-[10px] ml-2 mr-2'>

                        <label for="live" className="block ml-2 mb-2 text-sm font-medium text-black">Where Do You Live?</label>
                        <select id="live" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select</option>
                            <option value="India">India</option>
                            <option value="Australia">Australia</option>
                            <option value="Canada">Canada</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="USA">USA</option>
                            <option value="UAE">UAE</option>
                            <option value="UK">UK</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Others">Others</option>

                        </select>
                    </div>

                    <div className='mt-[10px] ml-2 mr-2'>

                        <label for="Status" className="block ml-2 mb-2 text-sm font-medium text-black">Marital Status</label>
                        <select id="Status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select</option>
                            <option value="Never Married">Never Married</option>
                            <option value="Divorced">Divorced</option>
                            <option value="Widowed">Widowed</option>
                            <option value="Awaiting Divorce">Awaiting Divorce</option>
                            <option value="Annulled">Annulled</option>
                        </select>
                    </div>

                    <div className='mt-[10px] ml-2 mr-2'>

                        <label for="Qualification" className="block ml-2 mb-2 text-sm font-medium text-black"> Highest Qualification</label>
                        <select id="Qualification" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select</option>
                            <option value="B.E / B.Tech">B.E / B.Tech</option>
                            <option value="M.E / M.Tech">M.E / M.Tech</option>
                            <option value="M.S Engineering">M.S Engineering</option>
                            <option value="B.Eng (Hons)">B.Eng (Hons)</option>
                            <option value="M.Eng (Hons)">M.Eng (Hons)</option>
                            <option value="Engineering Diploma">Engineering Diploma</option>
                            <option value="B.A">B.A</option>
                            <option value="B.Ed">B.Ed</option>
                            <option value="M.A">M.A</option>
                            <option value="M.Ed">M.Ed</option>
                            <option value="BA (Hons)">BA (Hons)</option>
                            <option value="BSc">BSc</option>
                            <option value="MSc">MSc</option>
                            <option value="BCom (Hons)">BCom (Hons)</option>
                            <option value="IT Diploma">IT Diploma</option>
                            <option value="BSc (Hons)">BSc (Hons)</option>
                            <option value="MBBS">MBBS</option>
                            <option value="MBA">MBA</option>
                            <option value="BBA">BBA</option>
                            <option value="Diploma">Diploma</option>
                            <option value="Master">Master</option>
                            <option value="Honours">Honours</option>
                            <option value="High school">High school</option>
                            <option value="Less than high school">Less than high school</option>
                            <option value="Ph. D.">Ph. D.</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>

                    <div className='mt-[10px] ml-2 mr-2'>

                        <label for="Works" className="block ml-2 mb-2 text-sm font-medium text-black">Works With</label>
                        <select id="Works" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select</option>
                            <option value="Private Company">Private Company</option>
                            <option value="Government / Public Sector">Government / Public Sector</option>
                            <option value="Defense / Civil Services">Defense / Civil Services</option>
                            <option value="Business / Self Employed">Business / Self Employed</option>
                            <option value="Not Working">Not Working</option>
                        </select>
                    </div>

                    <div className='mt-[10px] ml-2 mr-2'>

                        <label for="Income" className="block ml-2 mb-2 text-sm font-medium text-black"> Annual Income</label>
                        <select id="Income" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select</option>
                            <option value="Upto INR 1 Lakh">Upto INR 1 Lakh</option>
                            <option value="INR 1 Lakh to 2 Lakh">INR 1 Lakh to 2 Lakh</option>
                            <option value="INR 2 Lakh to 4 Lakh">INR 2 Lakh to 4 Lakh</option>
                            <option value="INR 4 Lakh to 7 Lakh">INR 4 Lakh to 7 Lakh</option>
                            <option value="INR 7 Lakh to 10 Lakh">INR 7 Lakh to 10 Lakh</option>
                            <option value="INR 10 Lakh to 15 Lakh">INR 10 Lakh to 15 Lakh</option>
                            <option value="INR 15 Lakh to 20 Lakh">INR 15 Lakh to 20 Lakh</option>
                            <option value="INR 20 Lakh to 30 Lakh">INR 20 Lakh to 30 Lakh</option>
                            <option value="INR 30 Lakh to 50 Lakh">INR 30 Lakh to 50 Lakh</option>
                            <option value="INR 50 Lakh to 75 Lakh">INR 50 Lakh to 75 Lakh</option>
                            <option value="INR 75 Lakh to 1 Crore">INR 75 Lakh to 1 Crore</option>
                            <option value="INR 1 Crore & above">INR 1 Crore & above</option>
                            <option value="Not applicable">Not applicable</option>
                        </select>
                    </div>

                    <div className='mt-[10px] ml-2 mr-2'>

                        <label for="Diet" className="block ml-2 mb-2 text-sm font-medium text-black">What Is Your Diet?</label>
                        <select id="Diet" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select</option>
                            <option value="Veg">Veg</option>
                            <option value="Non-Veg">Non-Veg</option>
                            <option value="Occasionally Non-Veg">Occasionally Non-Veg</option>
                            <option value="Eggetarian">Eggetarian</option>
                            <option value="Jain">Jain</option>
                            <option value="Vegan">Vegan</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>


                    <div className='mt-[10px] ml-2 mr-2'>

                        <label for="Height" className="block ml-2 mb-2 text-sm font-medium text-black">Height</label>
                        <select id="Height" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select</option>
                            <option value="4ft 5in - 134cm">4ft 5in - 134cm</option>
                            <option value="4ft 6in - 137cm">4ft 6in - 137cm</option>
                            <option value="4ft 7in - 139cm">4ft 7in - 139cm</option>
                            <option value="4ft 8in - 142cm">4ft 8in - 142cm</option>
                            <option value="4ft 9in - 144cm">4ft 9in - 144cm</option>
                            <option value="4ft 10in - 147cm">4ft 10in - 147cm</option>
                            <option value="4ft 11in - 149cm">4ft 11in - 149cm</option>
                            <option value="5ft - 152cm">5ft - 152cm</option>
                            <option value="5ft 1in - 154cm">5ft 1in - 154cm</option>
                            <option value="5ft 2in - 157cm">5ft 2in - 157cm</option>
                            <option value="5ft 3in - 160cm">5ft 3in - 160cm</option>
                            <option value="5ft 4in - 162cm">5ft 4in - 162cm</option>
                            <option value="5ft 5in - 165cm">5ft 5in - 165cm</option>
                            <option value="5ft 6in - 167cm">5ft 6in - 167cm</option>
                            <option value="5ft 7in - 170cm">5ft 7in - 170cm</option>
                            <option value="5ft 8in - 172cm">5ft 8in - 172cm</option>
                            <option value="5ft 9in - 175cm">5ft 9in - 175cm</option>
                            <option value="5ft 10in - 177cm">5ft 10in - 177cm</option>
                            <option value="5ft 11in - 180cm">5ft 11in - 180cm</option>
                            <option value="6ft - 182cm">6ft - 182cm</option>
                            <option value="6ft 1in - 185cm">6ft 1in - 185cm</option>
                            <option value="6ft 2in - 187cm">6ft 2in - 187cm</option>
                            <option value="6ft 3in - 190cm">6ft 3in - 190cm</option>
                            <option value="6ft 4in - 193cm">6ft 4in - 193cm</option>
                            <option value="6ft 5in - 195cm">6ft 5in - 195cm</option>
                            <option value="6ft 6in - 198cm">6ft 6in - 198cm</option>
                            <option value="6ft 7in - 200cm">6ft 7in - 200cm</option>
                            <option value="6ft 8in - 203cm">6ft 8in - 203cm</option>
                            <option value="6ft 9in - 205cm">6ft 9in - 205cm</option>
                            <option value="6ft 10in - 208cm">6ft 10in - 208cm</option>
                            <option value="6ft 11in - 210cm">6ft 11in - 210cm</option>
                            <option value="7ft - 213cm">7ft - 213cm</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>

                    <div className="relative mt-1 mr-2 ml-2">
                    <label for="message" class="block mb-2 text-sm font-medium text-black">About yourself</label>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-black bg-white rounded-lg border border-black focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="One last thing! Describe yourself in a few words...">
                    </textarea>
                    </div>

                    <button type="submit" className="w-full h-[45px] mt-[20px] rounded-[40px] bg-black border-none outline-none cursor-pointer text-[16px] font-[500] text-white">Submit</button>
                </form>
            </div>
        </div>

    )

}