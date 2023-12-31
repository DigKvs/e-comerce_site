import Header from '../App/Header.jsx';
import Footer from '../App/Footer.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Pimenta = () => {

  return (
    <>
      <Header />
      <div className='container grid lg:grid-cols-2 lg:grid-rows-3 grid-cols-1 grid-rows-1 w-full h-full justify-items-center items-center px-4 py-16'>
        <div className='image row-span-3'>
            <img className="mx-auto aspect-h-1 aspect-w-1 w-1/2 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" src="/e-comerce_site/images/pimenta.HEIC" alt="Molho de Pimenta" />
        </div>
        <div className='description row-span-2 '>
            <h1 className="text-3xl mt-5 lg:mt-0">Molho de Pimenta</h1>
            <h2 className="text-2xl pt-2">R$15</h2>
            <h2 className='text-2xl pt-2'>240ml</h2>
            <p className="text-base pt-6">Ingredientes do Molho:</p>
            <ul className='text-sm list-disc text-[#647738] pt-2'>
                <li>Pimenta dedo de moça</li>
                <li>Vinagre</li>
                <li>Extrato de Tomate</li>
                <li>Alho</li>
                <li>Cebola</li>
                <li>Salsinha</li>
                <li>Cebolinha</li>
                <li>Azeite de oliva</li>
                <li>Sal</li>
                <li>Pimentão vermelho</li>
                <li>Louro, Noz moscada e Cravos</li>
            </ul>            
        </div>
        <a href="https://wa.me/c/554187245052" target='_blank' rel="noopener noreferrer" className='buyButton mt-5 lg:-mt-20 p-5 border-2 border-[#5BDF69] rounded-md bg-[#c9edcc] hover:opacity-75'>
            <FontAwesomeIcon className='pr-2' icon={faWhatsapp} size="2xl" style={{ color: "#43db54" }} />
            Compra pelo Whatsapp
        </a>
      </div>
      <Footer />
    </>
  )
}

export default Pimenta