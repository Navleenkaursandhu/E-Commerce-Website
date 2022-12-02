import { Header } from "../common/Header"
import { Footer } from "../common/Footer"
export const PageAboutUs = () => {
  return (
    <>
      <div className="text-[#7D515E] flex flex-col min-h-screen">
        <Header />
        <div className="bg-[#F3EBF1] flex flex-col md:p-32 sm:p-6 p-4 gap-10 md:text-2xl sm:text-xl text-md flex-1">
          <div>Hi There</div>
          <p>This is a dummy Website created by me to showcase my potential as a Graphic Designer and a Front-End Developer.
            Please note that no personal information is sent to a remote server and this website contains fake products.
            No purchases made on this dummy website will be honored.</p>
          <div> If you like my work please visit my portfolio at URL: <a className="underline underline-offset-4" target='_blank' href='https://www.navleenbrar.com/'>https://www.navleenbrar.com/</a></div>
          <div>
            <div>Thank You</div>
            <div>Navleen Kaur Brar</div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}