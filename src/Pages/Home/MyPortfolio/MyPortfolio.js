import React from 'react';
import image from '../../../Assets/portfolio/pic.jpg'
import Footer from '../../Shared/Footer';

const MyPortfolio = () => {
    return (
        <div>
            <div className="hero min-h-0 bg-slate-50">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className='w-48' src={image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">Md. Mahmudul Hasan</h1>
                        <p className="py-6 text-1xl font-bold">Complete Bachelor of Science in Software Engineering at Daffodil International University Department of Software Engineering. </p>
                        <p className="text-1xl font-bold"><b>E-mail</b> :  swe.mahmudulhasan@gmail.com</p>

                        <p className="text-1xl font-bold mt-3"><b>Contact No</b>: +8801821283031</p>
                        <p className="text-1xl font-bold mt-3"><b>GitHub</b>: <a href="https://github.com/hasan71224" className='text-secondary'> https://github.com/hasan71224</a>
                        </p>

                        <p className="text-1xl font-bold mt-3"><b>LinkedIn</b>:
                            <a href="https://www.linkedin.com/in/md-mahmudul-hasan-754235166/" className='text-secondary'> https://www.linkedin.com/in/md-mahmudul-hasan-754235166/</a>
                        </p>

                    </div>
                </div>
            </div>

            <div className="py-4 ml-4 lg:px-28  bg-slate-50">
                <h4 className='text-3xl font-bold text-primary'>Educational Background</h4>
                <p className="text-1xl font-bold mt-4"> <b>University</b>: Daffodil International University</p>
                <p className="text-1xl font-bold mt-4"> <b>Major</b>: Robotics and Embedded System</p>
                <p className="text-1xl font-bold mt-4"> <b>Passing Year</b>: 2022</p>
            </div>

            <div className="py-4 ml-4 lg:px-28 bg-slate-50">
                <h4 className='text-3xl font-bold text-primary'>List Of Technology</h4>
                <p className="text-1xl font-bold mt-4"> <b>Programming Language</b>: C, Java, HTML, CSS, JavaScript</p>
                <p className="text-1xl font-bold mt-4"> <b>Frameworks</b>: React, Express, Bootstrap, Tailwind CSS</p>
                <p className="text-1xl font-bold mt-4"> <b>Database</b>: MongoDB</p>
                <p className="text-1xl font-bold mt-4"> <b>Others</b>: Git, Firebase,  WordPress, Shopify, Embedded System, RPA</p>
            </div>

            <div className="py-4 ml-4 lg:px-28 bg-slate-50">
                <h4 className='text-3xl font-bold text-primary'>Projects</h4>
                <p className="text-1xl font-bold my-4"><b>1. Sports Man Warehouse</b>:
                    <a href="https://sports-mans-warehouse.web.app/" className='text-secondary'> https://sports-mans-warehouse.web.app/</a>
                </p>
                <p className="text-1xl font-bold my-4"><b>2. One Stdio</b>:
                    <a href="https://one-studio-e6f0f.web.app/" className='text-secondary'>https://one-studio-e6f0f.web.app/</a>
                </p>
                <p className="text-1xl font-bold my-4"><b>3. Food And Drink</b>:
                    <a href="https://food-and-drinks-react.netlify.app/" className='text-secondary'> https://food-and-drinks-react.netlify.app//</a>
                </p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyPortfolio;