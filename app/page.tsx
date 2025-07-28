export default function SallesPersonalizados() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300">
      {/* Flores flutuantes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 text-4xl animate-bounce">🌸</div>
        <div className="absolute top-20 right-20 text-3xl animate-pulse">🌺</div>
        <div className="absolute bottom-20 left-20 text-4xl animate-bounce delay-1000">🌷</div>
        <div className="absolute bottom-10 right-10 text-3xl animate-pulse delay-500">🌹</div>
        <div className="absolute top-1/2 left-1/4 text-2xl animate-bounce delay-700">✨</div>
        <div className="absolute top-1/3 right-1/3 text-2xl animate-pulse delay-300">💫</div>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg relative z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">🌸 Salles Personalizados</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="hover:text-pink-200 transition-colors">
                Início
              </a>
              <a href="#servicos" className="hover:text-pink-200 transition-colors">
                Serviços
              </a>
              <a href="#contato" className="hover:text-pink-200 transition-colors">
                Contato
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold text-pink-800 mb-4 drop-shadow-lg">Salles Personalizados</h1>
          <p className="text-2xl text-pink-600 mb-6">✨ Criatividade que Transforma ✨</p>
          <p className="text-lg text-pink-700 mb-8 max-w-2xl mx-auto">
            Transformamos suas ideias em realidade! Personalizações únicas e especiais para tornar seus momentos ainda
            mais mágicos. 💕
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contato"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-105 transition-all shadow-lg"
            >
              💬 Fazer Pedido
            </a>
            <a
              href="https://www.tiktok.com/@sallespersonalizados"
              target="_blank"
              className="bg-transparent border-2 border-pink-600 text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-600 hover:text-white transform hover:scale-105 transition-all"
              rel="noreferrer"
            >
              🎵 TikTok
            </a>
          </div>

          <div className="mt-12 bg-white/20 backdrop-blur-sm rounded-3xl p-8 max-w-md mx-auto border-2 border-white/30">
            <div className="text-6xl mb-4">🎨</div>
            <p className="text-pink-800 font-semibold">Trabalhos Personalizados!</p>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 bg-white/50 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-pink-800 mb-12">💖 Nossos Serviços</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all border-2 border-pink-200">
              <div className="text-5xl mb-4">🎁</div>
              <h3 className="text-xl font-bold text-pink-800 mb-3">Brindes Personalizados</h3>
              <p className="text-gray-600">
                Canecas, camisetas, chaveiros e muito mais com sua marca ou design especial.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all border-2 border-pink-200">
              <div className="text-5xl mb-4">🎂</div>
              <h3 className="text-xl font-bold text-pink-800 mb-3">Festas & Eventos</h3>
              <p className="text-gray-600">
                Decorações personalizadas para aniversários, casamentos e eventos especiais.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all border-2 border-pink-200">
              <div className="text-5xl mb-4">👕</div>
              <h3 className="text-xl font-bold text-pink-800 mb-3">Roupas Customizadas</h3>
              <p className="text-gray-600">Camisetas, moletons e uniformes com estampas exclusivas e personalizadas.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all border-2 border-pink-200">
              <div className="text-5xl mb-4">🖼️</div>
              <h3 className="text-xl font-bold text-pink-800 mb-3">Arte Personalizada</h3>
              <p className="text-gray-600">Quadros, adesivos e arte digital criados especialmente para você.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-pink-800 mb-8">💌 Entre em Contato</h2>
          <p className="text-xl text-pink-700 mb-12">Vamos criar algo incrível juntos! 💖</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/5521968355098"
              target="_blank"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transform hover:scale-105 transition-all shadow-lg"
              rel="noreferrer"
            >
              📱 WhatsApp
            </a>
            <a
              href="https://www.instagram.com/sallespersonalizadoss/"
              target="_blank"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all shadow-lg"
              rel="noreferrer"
            >
              📸 Instagram
            </a>
            <a
              href="https://www.tiktok.com/@sallespersonalizados"
              target="_blank"
              className="bg-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-600 transform hover:scale-105 transition-all shadow-lg"
              rel="noreferrer"
            >
              🎵 TikTok
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-600 to-pink-700 text-white py-12 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">🌸 Salles Personalizados</h3>
          <p className="mb-4">Criatividade que transforma suas ideias em realidade com muito amor e carinho. 💕</p>
          <p className="text-pink-200">&copy; 2024 Salles Personalizados. Feito com muito 💕 e carinho. ✨</p>
        </div>
      </footer>
    </div>
  )
}
