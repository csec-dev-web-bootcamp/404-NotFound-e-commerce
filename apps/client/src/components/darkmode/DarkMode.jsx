// "use client";

// import React, { useEffect, useState } from 'react';
// import { MdDarkMode } from "react-icons/md";
// import { MdLightMode } from "react-icons/md";

// const DarkModeToggle = () => {
//   const [isDarkMode, setIsDarkMode] = useState(
//     localStorage.theme === 'dark' ||
//       (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
//   );

//   useEffect(() => {
//     document.documentElement.classList.toggle('dark', isDarkMode);
//     localStorage.theme = isDarkMode ? 'dark' : 'light';
//   }, [isDarkMode]);

//   const toggleDarkMode = () => {
//     setIsDarkMode((prev) => !prev);
//   };

//   return (
//     <button
//       onClick={toggleDarkMode}
//       className=" flex items-center"
//     >
//       {isDarkMode ? (
//         <MdLightMode color='white' />
//       ) : (
//         <MdDarkMode  />
//       )}
//     </button>
//   );
// };

// export default DarkModeToggle;
