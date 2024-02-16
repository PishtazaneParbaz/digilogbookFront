import React, { useEffect, useState, useRef } from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';

// styles and assets
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ButtonStyles from '../styles/Buttons/ButtonsBox.module.css'
import AddIcon from '@mui/icons-material/Add';

// components
import FlightEquipment from '../components/Equipment page comps/FlightEquipment';

// Queries
import { useUserDetails } from '../Utilities/hooks/queries';

const Equipment = () => {

    const { data, isLoading, error } = useUserDetails();

    const [activeLink, setActiveLink] = useState('flight'); // State to track active link
    

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
        <div className=' flex flex-col mt-14 items-center gap-y-4'>
            
            <div className=' bg-[#1B253B] w-[90%] h-20 flex justify-between items-end p-3 pr-[40%] rounded-b-2xl'>
                <p>تجهیزات</p>
                <ArrowBackIosNewIcon sx={{ width:'26px', height:'26px', padding:'5px', backgroundColor:'', borderRadius:'10rem', background: 'linear-gradient(195.31deg, #353A65 -84.63%, rgba(42, 46, 81, 0) 100.99%)', boxShadow: '-3px 4px 5.800000190734863px 5px rgba(0, 0, 0, 0.27), 3px -4px 4px 0px rgba(179, 170, 170, 0.18)'}} />
            </div>
            
            {/* buttons */}
            <div className={`${ButtonStyles.ThreeStickedButtonCont}`}>
                <Link ref={buttonRef} to='/equipment/flightEquipment' className={`${ButtonStyles.ThreeStickedButtonButton} rounded-r-xl ${activeLink === 'flight' ? ButtonStyles.activeYellow : ''}`} onClick={() => setActiveLink('flight')}>وسیله پروازی</Link> 
                <Link to='/equipment/parachute' className={`${ButtonStyles.ThreeStickedButtonButton}  ${activeLink === 'parachute' ? ButtonStyles.activeYellow : ''}`} onClick={() => setActiveLink('parachute')} >چتر کمکی</Link> 
                <Link to='/equipment/harness' className={`${ButtonStyles.ThreeStickedButtonButton} rounded-l-xl  ${activeLink === 'harness' ? ButtonStyles.activeYellow : ''}`} onClick={() => setActiveLink('harness')} >هارنس</Link> 
            </div>


            <div className='w-[90%] mt-6 flex flex-col gap-y-8'>

                {
                    isLoading && <h2 className='text-white top-10'>is loading</h2>
                }

                {
                    error && <h3>{error.message}</h3>
                }
                {
                data && 
                <Outlet key={data.data.id} data={data}/>
                // <FlightEquipment key={data} data={data} />
                // data && data.data.map(data => (<FlightEquipment key={data} data={data} />))
                }

            </div>


            <button className={`${ButtonStyles.addButton} fixed bottom-24`} >
                <AddIcon />
                <p>افزودن مورد جدید</p>
            </button>


            

        </div>
    );
};

export default Equipment;




// {/* <Routes>
//                 <Route path="/" element={<ProductList />} />
//                 <Route path="/:id" element={<ProductDetails />} />
//                 <Route path="/:id/edit" element={<ProductEdit />} />
//             </Routes> */}