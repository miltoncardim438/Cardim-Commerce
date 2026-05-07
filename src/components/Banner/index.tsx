import BannerImage from '../../assets/banner-image.jpg';

export const Banner = () => {
  return (
    <section className="relative h-[450px] md:h-[600px] w-full overflow-hidden rounded-b-2xl bg-gray-900 shadow-sm">
      
      <img 
        src={BannerImage}
        alt="Nova Coleção"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      
      
      <div className="relative h-full flex flex-col justify-center items-start px-8 md:px-16 text-white">
        <h2 className="font-changa text-4xl md:text-6xl mb-4 uppercase">
          Nova Coleção 2026
        </h2>
        <p className="text-lg mb-8 max-w-md">
          Estilo e conforto para o seu dia a dia com a qualidade que você já conhece.
        </p>
        <button className="bg-white text-black px-8 py-3 font-bold cursor-pointer hover:bg-gray-200 transition-colors">
          CONFIRA AGORA
        </button>
      </div>
    </section>
  )
}