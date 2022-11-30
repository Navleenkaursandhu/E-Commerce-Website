export const Footer = () => {
  return (
    <>
      <div className="flex p-6 bg-[#7D515E] justify-between">
        <div className="text-[#F4DADB] text-3xl">CLASSIC TEES</div>
        <div className="flex flex-col gap-2 text-[#F4DADB]">
          <div>About Us</div>
          <div>Orders</div>
          <div>Login</div>
          <div>Sign In</div>
        </div>
        <div className="flex flex-col gap-2 text-[#F4DADB]">
          <div className="flex items-center gap-1">© 2022 Navleen Kaur Brar</div>
          <a target="_blank" href="https://www.navleenbrar.com/">Visit My Portfolio</a>
        </div>
      </div>
    </>
  )
}