import { Link } from 'react-router-dom';

const products = [
    {
      id: 1,
      name: 'Molho de Pimenta',
      href: '/Products/Pimenta',
      price: 'R$15',
      imageSrc: './images/pimenta.HEIC',
      imageAlt: 'Molho de Pimenta.',
    },
    {
      id: 2,
      name: 'Confit de Tomate',
      href: '/Products/Confit',
      price: 'R$20',
      imageSrc: './images/confit.jpg',
      imageAlt: 'Confit de Tomate.',
    },
    {
      id: 3,
      name: 'Geleia de Abacaxi',
      href: '/Products/Geleia',
      price: 'R$20',
      imageSrc: './images/geleia.HEIC',
      imageAlt: 'Geleia de Abacaxi.',
    },
    {
      id: 4,
      name: 'Berinjela',
      href: '/Products/Berinjela',
      price: 'R$15',
      imageSrc: './images/berinjela.HEIC',
      imageAlt: 'Berinjela.',
    },
    // More products...
  ]
  
  export default function Body() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                  <Link to={`/${product.name}`}>
                  <div className="mx-auto aspect-h-1 aspect-w-1 w-1/2 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <div className="mt-4 flex flex-col">
                      <h3 className="mx-auto mt-4 text-sm text-gray-700">{product.name}</h3>
                      <p className="mx-auto mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                  </div>
                  </Link>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}

