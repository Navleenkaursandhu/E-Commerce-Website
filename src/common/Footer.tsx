export const Footer = () => {
  return (
    <>
      <div className="flex sm:flex-row sm:gap-0 gap-2 flex-col p-6 bg-[#7D515E] sm:justify-between sm:items-start items-center">
        <a className="text-[#F4DADB] lg:text-3xl md:text-2xl text-lg font-semibold" href='/'>CLASSIC TEES</a>
        <div className="flex flex-col sm:items-start items-center gap-2 text-[#F4DADB] lg:text-xl md:text-lg text-md">
          <div className="flex items-center gap-1">© 2022 Navleen Kaur Brar</div>
          <a target="_blank" href="https://www.navleenbrar.com/" rel="noreferrer">Visit My Portfolio</a>
        </div>
      </div>
    </>
  )
}
