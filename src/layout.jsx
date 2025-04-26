import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Banner from './components/Banner'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />
        <Banner />
      {/* Nội dung chính */}
      <div className="flex flex-1 bg-gray-100 pl-100 pr-100">
        {/* Sidebar */}
        <aside className="w-1/5 bg-white border-r">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4">
          <MainContent />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
