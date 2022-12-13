export const Footer = () => {
  return (
    <>
      <div className="flex sm:flex-row sm:gap-0 gap-2 flex-col p-6 bg-[#7D515E] sm:justify-between sm:items-start items-center">
        <a className="text-[#F4DADB] lg:text-3xl md:text-2xl text-lg" href='/'>CLASSIC TEES</a>
        <div className="flex flex-col sm:items-start items-center gap-2 text-[#F4DADB] lg:text-2xl md:text-xl text-lg">
          <div className="flex items-center gap-1">© 2022 Navleen Kaur Brar</div>
          <a target="_blank" href="https://www.navleenbrar.com/">Visit My Portfolio</a>
        </div>
      </div>
    </>
  )
}