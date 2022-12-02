export const Footer = () => {
  return (
    <>
      <div className="flex sm:flex-row sm:gap-0 gap-2 flex-col p-6 bg-[#7D515E] sm:justify-between sm:items-start items-center">
        <a className="text-[#F4DADB] md:text-3xl text-xl" href='/'>CLASSIC TEES</a>
        <div className="flex flex-col gap-2 text-[#F4DADB]">
          <a href='/about-us'>About Us</a>
          <div>Orders</div>
          <a href='/login'>Login</a>
          <a href='/sign-up'>Sign Up</a>
        </div>
        <div className="flex flex-col sm:items-start items-center gap-2 text-[#F4DADB]">
          <div className="flex items-center gap-1">© 2022 Navleen Kaur Brar</div>
          <a target="_blank" href="https://www.navleenbrar.com/">Visit My Portfolio</a>
        </div>
      </div>
    </>
  )
}