import React, {  useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

// dark and light mode

// react query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Hooks 
import useAppModeEffect from './Utilities/Hooks/useAppModeEffect';


// components
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar';
import Profile from './containers/Profile';
import Equipment from './containers/Equipment';
import FlightEquipment from './components/pages/Equipment page comps/FlightEquipment';
import AddFlightEquipment from './components/pages/Equipment page comps/AddFlightEquipment';
import Parachute from './components/pages//Equipment page comps/Parachute'
import Harness from './components/pages//Equipment page comps/Harness'
import AddParachute from './components/pages/Equipment page comps/AddParachute';
import AddHarness from './components/pages/Equipment page comps/AddHarness';
import Education from './containers/Education';
import Syllabus from './components/pages/CoachTeachingSection/Syllabus';
import Students from './components/pages/CoachTeachingSection/Students';
import TheoryClass from './components/pages/CoachTeachingSection/TheoryClass';
import AddClass from './components/pages/CoachTeachingSection/AddClass';
import ClassDetails from './components/pages/CoachTeachingSection/ClassDetails';
import StudentDetails from './components/pages/CoachTeachingSection/StudentDetails';



const queryClient = new QueryClient();


function App() {

  const [userRole, setUserRole] = useState('coach');
  const [isDarkMode, setIsDarkMode] = useState(true);

  useAppModeEffect(isDarkMode)
 

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };


  
  return (
      <QueryClientProvider client={queryClient}>

        <div className="App ">
          <Navbar toggleTheme={toggleTheme}  />
            <Routes>

            {/* coach view, rendering routes based on the rule of the user */}
            {userRole === 'coach' && (
              <>
              
                <Route path='/profile' element={<Profile/>} />

                <Route path='/*' element={<Profile/>} />

                <Route path='/equipment' element={<Equipment />} >
                    <Route index element={<FlightEquipment />} />
                    <Route path="flightEquipment" element={<FlightEquipment />} />
                    <Route path="parachute" element={<Parachute />} />
                    <Route path="harness" element={<Harness />} />
                </Route>
                <Route path='/equipment/addFlightEquipment' element={<AddFlightEquipment />} /> 
                <Route path='/equipment/addParachute' element={<AddParachute />} />
                <Route path='/equipment/addHarness' element={<AddHarness />} />

                <Route path='/education' element={<Education />}>
                    <Route index element={<Syllabus />} />
                    <Route path="students" element={ <Students />} />
                    <Route path="theoryClass" element={ <TheoryClass />} />
                    <Route path="syllabus" element={<Syllabus/>} />
                </Route>
                <Route path='/education/addClass' element={<AddClass />} /> 
                <Route path='/education/ClassDetails' element={<ClassDetails />} /> 
                <Route path='/education/StudentDetails' element={<StudentDetails/>} />

              </>
            )}

            </Routes>
          <Footer />
        </div>

      </QueryClientProvider>



  );
}

export default App;