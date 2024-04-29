import React, { useEffect } from 'react';

// styles
import ButtonStyles from '../styles/Buttons/ButtonsBox.module.css'

// mui
import PersonAddIcon from '@mui/icons-material/PersonAdd';

// assets
import iphone from '../assets/ApiData Temporary/mobile-mk 3.png'
import coachView from '../assets/ApiData Temporary/Coach final 1.png'
import logo from '../assets/ApiData Temporary/Digilogbook -1401 12.png'
import mountain from '../assets/ApiData Temporary/Rectangle 4111.png'
import { Link } from 'react-router-dom';

const LandingPage = () => {

    useEffect(() => {
        // Function to handle scroll event
        const handleScroll = (event) => {
            const scrollDirection = event.deltaY > 0 ? 'next' : 'prev'; // Determine scroll direction
            const scrollAmount = window.innerWidth; // Scroll by the width of the window

            if (scrollDirection === 'next') {
                window.scrollBy({ left: scrollAmount, behavior: 'smooth' }); // Scroll to the next section
            } else {
                window.scrollBy({ left: -scrollAmount, behavior: 'smooth' }); // Scroll to the previous section
            }
        };

        // Event listener for scroll events
        window.addEventListener('wheel', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []); // Empty dependency array to run the effect only once when the component mounts


    return (
        <div className='w-full flex flex-col mt-14 py-4'>
            <div className='w-full flex flex-col items-center'>

                {/* first slide */}
                <div className='w-full h-[94vh] flex flex-col items-center justify-center gap-y-[4vh]'>

                    <div className='flex flex-col items-center justify-center h-[40%] pt-8' style={{background: 'radial-gradient(50% 50% at 50% 50%, #3B4B6C -20%, rgba(39, 39, 41, 0) 95%)'}}>

                        <img alt='logo' src={logo}/>

                        <div className='flex items-center justify-center mt-[-20vh]'>
                            <img alt='phone model' src={iphone} className='absolute'/>
                            <img alt='digilogbook app' src={coachView} />
                        </div>

                    </div>
                        
                    <div className='flex flex-col items-center justify-start gap-y-8 h-[40%] px-4' >

                        <h1 className=' text-xl font-bold'>سامانه ثبت اطلاعات و پروازهای روزانه</h1>

                        <p>در کادر زیر هر متنی را که دوست دارید تایپ کنید تا ما آن را برایتان نگه داریم و همیشه در دسترس شما قرار دهیم؛ از این طریق می‌توانید متن آزمایشی و متن تستی خودتان را تایپ کرده و در طرح‌هایتان از این متن استفاده کنید... تایپ کنید، به صورت خودکار ذخیره می‌شود.</p>

                        <Link to='/equipment/addFlightEquipment' className='relative w-[90%] bg-[#131423] rounded-xl md:w-96 md:relative md:top-4  '>
                            <button className={`${ButtonStyles.addButton} w-[100%] gap-x-2`} >
                                <PersonAddIcon />
                                <p>افزودن مورد جدید</p>
                            </button>
                        </Link>

                    </div>
                    
                </div>

                {/* second slide */}
                <div className='w-full h-[92vh] flex flex-col items-center justify-between gap-y-[4vh]' style={{background:'var(--Basic-dataBox-bg)'}}>

                    <div className='w-full flex justify-center items-center h-1/2 p-4'>
                        <img src={mountain} alt='mountain' />
                    </div>

                    <div className='w-full h-1/2 flex flex-col justify-around items-center'>

                        <div className='w-full flex justify-end items-center'>
                            <p className='w-[80%] h-16 rounded-r-3xl text-right text-xl font-semibold pt-5 pr-6' style={{backgroundColor:'var(--landing-title-bg)', boxShadow: 'var(--landing-title-bg-boxShadow)'}}>
                            چرا <span style={{color:'var(--yellow-text)'}}>دیجی‌ لاگ‌بوک</span>
                            </p>
                        </div>

                        <p className='text-center px-6'>چرا باید لاگ بوک داشته باشیم ؟
                            <br/>
                            در هنگام یادگیری پرواز، هر خلبان ملزم به نوشتن یادداشتی از ساعات پرواز خود در یک لاگ بوک به منظور ثبت  تجربه خود است. بسیاری از خلبانان خیلی زود از نوشتن  لاگ بوک خود منصرف میشوند ، چرا که بعد از مدتی این کار بیهوده به نظر میرسد ، اما این یک اشتباه است. پس چرا نگه داشتن  لاگ بوک ایده خوبی است؟
                        </p>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default LandingPage;