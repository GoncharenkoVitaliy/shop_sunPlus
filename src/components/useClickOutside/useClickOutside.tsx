// import { useEffect } from 'react'

// const useClickOutside = (ref, callback) => {
//    const handleClick = (e) => {
//       if(ref.current && !ref.current.continse(e.target)){
//          callback();
//       }
//    };
   
//    useEffect(() => {
//       document.addEventListener("mousedown", handleClick);
//       return () => (
//          document.removeEventListener("mousedown", handleClick)
//       )
//    }, [])
// }

// export default useClickOutside