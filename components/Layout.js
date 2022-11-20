import Footer from './Footer'
import Navbar  from './Navbar'
//import Featured from './Featured'

export const Layout = ({children}) => {
  return (
    <>
        <Navbar/>
        {/* <Featured/> */}
        {children}       
        <Footer/>
    </>
  )
}
