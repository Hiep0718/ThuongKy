export default function Header() {
    return (
      <header className="bg-blue-900 text-white p-4">
        <div className="text-2xl font-bold">ĐẠI HỌC CÔNG NGHIỆP TP.HCM</div>
        <nav className="mt-2 flex space-x-4 text-sm">
          <a href="#" className="hover:underline">Giới thiệu</a>
          <a href="#" className="hover:underline">Đào tạo</a>
          <a href="#" className="hover:underline">Tuyển sinh</a>
          <a href="#" className="hover:underline">Nghiên cứu</a>
          <a href="#" className="hover:underline">Sinh viên</a>
          <a href="#" className="hover:underline">Giảng viên</a>
        </nav>
      </header>
    )
  }
  