// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Head>
        <title>Suellen Delesposte Centro de Treinamento</title>
        <meta name="description" content="Centro de Treinamento Suellen Delesposte" />
      </Head>
      
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">
            Suellen Delesposte
          </div>
          <nav className="space-x-4">
            <a href="#" className="text-green-500 hover:text-green-700">Home</a>
            <a href="#" className="text-green-500 hover:text-green-700">Sobre</a>
            <a href="#" className="text-green-500 hover:text-green-700">Serviços</a>
            <a href="#" className="text-green-500 hover:text-green-700">Contato</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <section className="text-center py-16 bg-gradient-to-r from-blue-600 via-green-500 to-orange-500 text-white rounded-lg shadow-md">
          <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Centro de Treinamento Suellen Delesposte</h1>
          <p className="text-lg">Aprimore sua saúde e bem-estar com nossos programas de treinamento personalizados.</p>
        </section>

        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Sobre Nós</h2>
            <p>Oferecemos uma variedade de programas de treinamento para todos os níveis de habilidade, focados em ajudar você a alcançar seus objetivos de saúde e bem-estar.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Nossos Serviços</h2>
            <p>Explore nossos serviços, desde treinamento funcional até aulas de yoga e pilates, todos conduzidos por instrutores experientes.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-4 mt-12 shadow-inner">
        <div className="container mx-auto px-4 text-center text-gray-700">
          <p>&copy; 2024 Suellen Delesposte Centro de Treinamento. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
