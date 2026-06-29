import { Outlet } from 'react-router-dom'
import Header from '../pages/header/Header'
import Footer from '../pages/footer/Footer'
import SocialBar from '../components/SocialBar'

export default function RootLayout() {
  return (
    <>
      <Header />
      {/* <SiteBanner /> */}
      <SocialBar />
      <Outlet />
      <Footer />
    </>
  )
}
