import { useEffect } from 'react';



const useAppModeEffect = (isDarkMode) => {
  
  useEffect(() => {
    // Update root styles when mode changes
    const root = document.documentElement;
    if (isDarkMode) {

        root.style.setProperty('--bg-color', '#131423');
        root.style.setProperty('--text-color', '#ffffff');
        root.style.setProperty('--yellow-text', '#A5E65E');
        root.style.setProperty('--red-text', '#ED553B');


        // overall used colors
        root.style.setProperty('--soft-white', '#F6FDEF');
        root.style.setProperty('--softer-white', ' #CDD3D4');

        // speedometer background
        root.style.setProperty('--speedometer-background', 'linear-gradient(195.31deg, #323232 -84.63%, rgba(34, 34, 34, 0.285) 48.09%, rgba(79, 79, 79, 0) 100.99%)');
        root.style.setProperty('--speedometer-boxShadow', '-3px 4px 5.80px 5px #00000045, 3px -4px 4px 0px #B3AAAA2E, 0px 4px 4px 0px #C2BDBD40 inset');
        
            
        // buttons(profile buttons and otherspages)
        root.style.setProperty('--profile-buttons-background', 'linear-gradient(198deg, rgba(24,26,45,1) 10%, rgba(135,141,203,0.25) 90%)');
        root.style.setProperty('--profile-buttons-boxShadow', '-2px 3px 4.3px 1px #0000007A, 1px -1px 2.5px 0px #EBE0E082, 0px 4px 10.8px 2px #3F4D6C inset');


        // basic data box styles
            root.style.setProperty('--Basic-dataBox-bg', '#181A2D');
            root.style.setProperty('--Basic-dataBox-border', 'rgba(238, 238, 238, 0.46)');

        // buttons
            // yellow background buttons
            root.style.setProperty('--yellow-button-bg', 'linear-gradient(21.47deg, #A5E65E 14.52%, rgba(173, 203, 139, 0) 245.02%)');
            // yellow text and border, transparent background button style
            root.style.setProperty('--yellow-border-button', '#A5E65E');
      
            // input normal border color
            root.style.setProperty('--light-border-button-collapsed', 'linear-gradient(215.85deg, rgba(238, 238, 238, 0.46) -45.31%, rgba(238, 238, 238, 0) 168.95%)');
            // input active border color
            root.style.setProperty('--yellow-border-button-active', 'linear-gradient(180deg, #A5E65E -27.08%, #A5E65E -27.07%, #859278 147.92%)');
            // drop down student syllabus box data boxes color
            root.style.setProperty('--syllabus-data-boxes-bg', '#1B253B');

            // disable button
            root.style.setProperty('--disabled-button-bg', '#323232');
            root.style.setProperty('--disabled-button-text', '#535353');
            
            // button an input(toggle dark mode element)
            root.style.setProperty('--button-toggle-bg', 'linear-gradient(222.79deg, #181A2D 31.59%, rgba(135, 141, 203, 0) 170.26%)');
            root.style.setProperty('--button-toggle-boxshadow', '-2px 3px 4.3px 1px rgba(0, 0, 0, 0.48), 1px -1px 2.599px 0px rgba(235, 224, 224, 0.51), 0px 4px 10.8px 2px rgba(63, 77, 108, 1) inset');

        // databox
            // class details
            root.style.setProperty('--class-details-bg', 'linear-gradient(8deg, rgba(135,141,203,0.3) 0%, rgba(24,26,45,1) 85%)');
            root.style.setProperty('--class-details-boxShadow', ' -3px 4px 5.80px 5px rgba(0, 0, 0, 0.27), 3px -4px 4px 0px rgba(179, 170, 170, 0.18)');

  
        // input border
            root.style.setProperty('--input-border', 'rgba(238, 238, 238, 0.26)');

                        
        // setting input Background
        root.style.setProperty('--dark-input-bg', '#181A2D');
        root.style.setProperty('--dark-input-boxShadow', ' -3px 4px 4px 1px rgba(0, 0, 0, 0.32)');
        
        // club => coaches => coaches details boxes
        root.style.setProperty('--coachesDetails-bg', 'linear-gradient(200.38deg, #181A2D -10.59%, rgba(135, 141, 203, 0.8) 323.12%)');
        root.style.setProperty('--coachesDetails-BoxShadow', ' 1px -1px 2.59px 0px rgba(235, 224, 224, 0.51)');
        

            
 

        // Add more CSS variable updates for dark mode as needed
        
    } else {
      root.style.setProperty('--bg-color', '#ffffff');
      root.style.setProperty('--text-color', '#333333');
      // Add more CSS variable updates for light mode as needed
    }
  }, [isDarkMode]);
};

export default useAppModeEffect;