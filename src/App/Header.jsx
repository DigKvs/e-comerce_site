import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="bg-[#aa8053] flex justify-center lg:justify-around items-center w-auto h-28">
        <div className="text-[#647738] text-[32px] font-medium font-['Newsreader'] leading-loose cursor-default">Antepastos Da Cris</div>
        <div className="bg-[#aa8053] w-1/4 justify-center gap-2 flex">
          <Link to='/e-comerce_site'>
            <div className=" bg-[#BE8631] rounded-md border-2 border-[#BE8631] text-black text-base font-normal font-['Inter'] leading-tight hover:opacity-75 py-3 lg:px-5 px-3">Home
            </div>
          </Link>
            <a href='https://www.instagram.com/antepastosdacris/' className="hidden lg:flex bg-[#BE8631] rounded-md border-2 border-[#BE8631] text-black text-base font-normal font-['Inter'] leading-tight hover:opacity-75 py-3 px-5" target='_blank' rel="noopener noreferrer">Instagram</a>
            <a href='https://www.facebook.com/antepastosdacris' className="hidden lg:flex bg-[#BE8631] rounded-md border-2 border-[#BE8631] text-black text-base font-normal font-['Inter'] leading-tight hover:opacity-75 py-3 px-5" target='_blank' rel="noopener noreferrer" >Facebook</a>
            <a href='https://wa.me/c/554187245052' className="hidden lg:flex bg-[#BE8631] rounded-md border-2 border-[#BE8631] text-black text-base font-normal font-['Inter'] leading-tight hover:opacity-75 py-3 px-5" target='_blank' rel="noopener noreferrer">Whatsapp</a>
        </div>
    </div>
  )
}

export default Header