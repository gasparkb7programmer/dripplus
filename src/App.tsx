import './index.css';
import { Card } from './components/ui/card';
import { Button } from './components/ui/button';

const PRODUCTS = [
  {
    id: 1,
    name: 'Camiseta Preta KB Gaspar',
    price: '550 MZN',
    src: '/produto-kb-preta.jpg',
  },
  {
    id: 2,
    name: 'Camiseta Castanho KB Gaspar',
    price: '550 MZN',
    src: '/produto-kb-castanho.jpg',
  },
  {
    id: 3,
    name: 'Camiseta Branca KB Gaspar',
    price: '550 MZN',
    src: '/produto-kb-branca.jpg',
  },
];

function App() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="w-full bg-black/80 fixed z-10 top-0 left-0 flex items-center px-8 h-20 shadow-lg border-b border-zinc-900">
        <span className="text-3xl font-bold tracking-wide text-white">
          DRIP<span className="text-yellow-400">+</span>
        </span>
        <nav className="ml-10 space-x-6 text-lg text-zinc-200 hidden md:flex">
          <a href="#" className="hover:text-yellow-400 transition">Coleções</a>
          <a href="#" className="hover:text-yellow-400 transition">Masculino</a>
          <a href="#" className="hover:text-yellow-400 transition">Feminino</a>
          <a href="#" className="hover:text-yellow-400 transition">Acessórios</a>
          <a href="#" className="hover:text-yellow-400 transition">Sobre</a>
        </nav>
      </header>

      {/* Espaço para navbar fixa */}
      <div className="h-20" />

      {/* Hero/Banner principal */}
      <section className="relative flex flex-col md:flex-row items-center justify-between bg-black px-4 py-10 md:py-20 gap-6 md:gap-12 min-h-[350px] md:min-h-[520px] overflow-hidden">
        <div className="z-10 max-w-lg">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4 animate-fadein">
            PCA <span className="text-yellow-400">Pretos Com Atitudes</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-200 mb-6 animate-fadein delay-150">
            Moda urbana presencial que exala identidade, atitude e cultura preta. Eleve seu drip ao nível máximo com exclusividades!
          </p>
          <Button className="bg-yellow-400 hover:bg-yellow-300 transition text-black font-bold shadow-lg animate-fadein delay-300 text-lg px-8 py-4 rounded-full">Comprar Agora</Button>
        </div>

        {/* Imagem animada banner */}
        <div className="flex-1 flex items-center justify-center relative animate-zoom-in delay-100 z-0">
          <img src="/banner-pca.jpg" alt="Banner PCA"
            className="rounded-2xl shadow-2xl object-cover w-[320px] h-[320px] md:w-[400px] md:h-[480px] border-4 border-yellow-400" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-black/10 pointer-events-none rounded-2xl" />
        </div>
      </section>

      {/* Carrossel de produtos (Lançamentos) */}
      <section id="lancamentos" className="px-6 md:px-16 py-10">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-6">Lançamentos PCA</h2>
        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-2">
          {PRODUCTS.map(produto => (
            <Card key={produto.id} className="w-64 min-w-[260px] bg-zinc-900 text-white border-2 border-zinc-800 hover:border-yellow-400 transition-all duration-200">
              <img
                src={produto.src}
                alt={produto.name}
                className="w-full h-60 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3">
                <h3 className="font-bold text-lg mb-1">{produto.name}</h3>
                <p className="text-yellow-400 font-bold">{produto.price}</p>
                <Button className="mt-4 w-full bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold">Comprar</Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <footer className="w-full py-8 border-t border-zinc-900 mt-auto bg-black/90 text-zinc-400 flex flex-col items-center">
        <span className="text-xl font-bold text-white">DRIP<span className="text-yellow-400">+</span></span>
        <div className="mt-2 mb-2 text-sm">PCA | Pretos Com Atitudes - Orgulho, Estilo, Atitude</div>
        <div className="flex gap-5 mt-2">
          <a href="#" className="hover:text-yellow-300">Instagram</a>
          <a href="#" className="hover:text-yellow-300">WhatsApp</a>
        </div>
        <div className="mt-3 text-xs text-zinc-500">&copy; {new Date().getFullYear()} DRIP+. Todos os direitos reservados.</div>
      </footer>

      {/* Animações base */}
      <style>{`
        .animate-fadein {
          opacity: 0;
          animation: fadein .9s cubic-bezier(.4,0,.2,1) .2s forwards;
        }
        .animate-fadein.delay-150 { animation-delay: 0.35s !important; }
        .animate-fadein.delay-300 { animation-delay: 0.6s !important; }
        @keyframes fadein {
          to { opacity: 1; }
        }
        .animate-zoom-in {
          transform: scale(0.94);
          opacity: 0;
          animation: zoomin .7s cubic-bezier(.44,.07,.12,1.01) .25s forwards;
        }
        .animate-zoom-in.delay-100 { animation-delay: 0.28s !important; }
        @keyframes zoomin {
          to { transform: scale(1); opacity: 1; }
        }
        .scrollbar-hide {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE 10+ */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default App;