import React, { useEffect, useRef, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

// components 
import PageTitle from '../components/reuseable/PageTitle';

// styles
import ButtonStyles from '../styles/Buttons/ButtonsBox.module.css'

//  Queries
import { useUserDetails } from '../Utilities/Services/queries';

const Education = ({userRole}) => {

    // react query
    const { data, isLoading, error } = useUserDetails();

    // to set which button is active and style it
    const [activeLink, setActiveLink] = useState('syllabus'); // State to track active link


    // Ref to the button element
    const buttonRef = useRef(null);


    // Effect to click the button when the page is mounted
  useEffect(() => {
    // Check if the button ref exists and it has a current property
    if (buttonRef.current) {
      // Programmatically click the button
      buttonRef.current.click();
    }
  }, []); // Empty dependency array ensures the effect runs only once after initial render


    return (
        <div className='flex flex-col mt-14 items-center'>

            <div  className='w-full flex flex-col items-center gap-y-4 md:w-[70%]'>

                <PageTitle title={'آموزش'} navigateTo={'profile'} paddingRight={'40%'} />  

                {/* for coach */}
                { userRole === 'coach' &&
                <div className={`${ButtonStyles.ThreeStickedButtonCont}`}>
                    <Link to='/education/students' className={`${ButtonStyles.ThreeStickedButtonButton} rounded-r-xl ${activeLink === 'students' ? ButtonStyles.activeYellow : ''}`} onClick={() => setActiveLink('students')}>هنرجویان</Link> 
                    <Link to='/education/theoryClass' className={`${ButtonStyles.ThreeStickedButtonButton}  ${activeLink === 'theoryClass' ? ButtonStyles.activeYellow : ''}`} onClick={() => setActiveLink('theoryClass')} >کلاس تئوری</Link> 
                    <Link ref={buttonRef} to='/education/syllabus' className={`${ButtonStyles.ThreeStickedButtonButton} rounded-l-xl  ${activeLink === 'syllabus' ? ButtonStyles.activeYellow : ''}`} onClick={() => setActiveLink('syllabus')} >سیلابس</Link>
                </div>
                }

                {/* for student */}
                { userRole === 'student' &&
                <div className={`${ButtonStyles.ThreeStickedButtonCont}`}>  
                    <Link to='/education/practicalClass' className={`${ButtonStyles.ThreeStickedButtonButton} rounded-r-xl ${activeLink === 'students' ? ButtonStyles.activeYellow : ''}`} onClick={() => setActiveLink('students')}>عملی</Link> 
                    <Link to='/education/theoryClass' className={`${ButtonStyles.ThreeStickedButtonButton}  ${activeLink === 'theoryClass' ? ButtonStyles.activeYellow : ''}`} onClick={() => setActiveLink('theoryClass')} >تئوری</Link> 
                    <Link ref={buttonRef} to='/education/syllabus' className={`${ButtonStyles.ThreeStickedButtonButton} rounded-l-xl  ${activeLink === 'syllabus' ? ButtonStyles.activeYellow : ''}`} onClick={() => setActiveLink('syllabus')} >سیلابس</Link>
                </div>
                }

                <div className='w-[90%] mt-6 flex flex-col gap-y-8'>

                    {
                        isLoading && <h2 className='text-white mt-32'>is loading</h2>
                    }

                    {
                        error && <h3>{error.message}</h3>
                    }
                    {
                        data && <Outlet />
                    }
                </div>

            </div>


        </div>
    );
};

export default Education;