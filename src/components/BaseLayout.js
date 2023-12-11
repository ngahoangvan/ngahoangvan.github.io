// import React, { useEffect, useState } from 'react';
// import Style from './BaseLayout.module.scss'
// import Navbar from "./Navbar";
// import Home from "./home/Home";
// import About from "./about/About";
// import Portfolio from "./portfolio/Portfolio";
// import Experience from "./experience/Experience"
// import { Route, Routes } from "react-router-dom";
// import { Box, Grid } from "@mui/material";
// import API from "../api-service"

// export default function BaseLayout() {
//    let [darkMode, setDarkMode] = useState(true);
//    let [authorInfo, setAuthorInfo] = useState({})

//    function handleToggleDarkMode() {
//       let oppositeOfCurrentDarkMode = !darkMode
//       localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`)
//       setDarkMode(oppositeOfCurrentDarkMode)
//    }

//    useEffect(() => {
//       let detectedDarkMode = localStorage.getItem('darkMode');
//       if (detectedDarkMode) {
//          setDarkMode(detectedDarkMode)
//       } else {
//          localStorage.setItem('darkMode', "false")
//       }
//    }, [])

//    useEffect( () => {
//       async function fetchData() {
//          let response = await API.getAuthoInformation()
//          if (response.ok){
//             setAuthorInfo(await response.json())
//          }
//       }
//       fetchData()
//    }, [])

//    return (
//       <Box className={darkMode ? Style.dark : Style.light}>
//          <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
//             justifyContent={'space-between'}>
//             <Grid item>
//                <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} />
//             </Grid>
//             <Grid item flexGrow={1}>
//                <Routes>
//                   <Route exact path={'/'} element={<Home authorInfo={authorInfo}/>} />
//                   <Route exact path={'/about'} element={<About authorInfo={authorInfo}/>} />
//                   <Route exact path={'/portfolio'} element={<Portfolio authorInfo={authorInfo}/>} />
//                   <Route exact path={'/experience'} element={<Experience authorInfo={authorInfo}/>} />
//                </Routes>
//             </Grid>
//             <Grid item>
//                <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
//                   py={'1.5rem'} sx={{ opacity: 0.7 }} width={'100%'}>
//                   <p><a href={'https://github.com/ngahoangvan'}>{authorInfo.first_name} {authorInfo.last_name}</a></p>
//                   <p>&copy; 2023</p>
//                </Box>
//             </Grid>
//          </Grid>
//       </Box>
//    )
// }

import React, { useEffect, useState } from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import Experience from "./experience/Experience"
import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import { info } from "../info/Info"

export default function BaseLayout() {
   let [darkMode, setDarkMode] = useState(true);

   function handleToggleDarkMode() {
      let oppositeOfCurrentDarkMode = !darkMode
      localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`)
      setDarkMode(oppositeOfCurrentDarkMode)
   }

   useEffect(() => {
      let detectedDarkMode = localStorage.getItem('darkMode');
      if (detectedDarkMode) {
         setDarkMode(detectedDarkMode)
      } else {
         localStorage.setItem('darkMode', "false")
      }
   }, [])

   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
            justifyContent={'space-between'}>
            <Grid item>
               <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} />
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route exact path={'/'} element={<Home />} />
                  <Route exact path={'/about'} element={<About />} />
                  <Route exact path={'/portfolio'} element={<Portfolio />} />
                  <Route exact path={'/experience'} element={<Experience />} />
               </Routes>
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                  py={'1.5rem'} sx={{ opacity: 0.7 }} width={'100%'}>
                  <p><a href={'https://github.com/ngahoangvan'}>{info.firstName} {info.lastName}</a></p>
                  <p>&copy; 2023</p>
               </Box>
            </Grid>
         </Grid>
      </Box>
   )
}

