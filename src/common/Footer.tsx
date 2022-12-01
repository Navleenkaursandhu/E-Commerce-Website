export const Footer = () => {
  return (
    <>
      <div className="flex p-6 bg-[#7D515E] justify-between">
        <a className="text-[#F4DADB] text-3xl" href='/'>CLASSIC TEES</a>
        <div className="flex flex-col gap-2 text-[#F4DADB]">
          <a href='/about-us'>About Us</a>
          <div>Orders</div>
          <a href='/login'>Login</a>
          <a href='/sign-up'>Sign Up</a>
        </div>
        <div className="flex flex-col gap-2 text-[#F4DADB]">
          <div className="flex items-center gap-1">© 2022 Navleen Kaur Brar</div>
          <a target="_blank" href="https://www.navleenbrar.com/">Visit My Portfolio</a>
        </div>
      </div>
    </>
  )
}