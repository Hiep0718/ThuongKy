import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);

  const menuItems = [
    {
      title: "GIỚI THIỆU",
      subItems: [
        "Giới thiệu chung",
        "Tầm nhìn - Sứ mạng - Mục tiêu chiến lược",
        "Triết lý giáo dục",
        "Phương châm hoạt động",
        "Giá trị cốt lõi",
        "Chính sách chất lượng",
        "Sơ đồ bộ máy tổ chức",
        "Cơ sở vật chất",
        "Đội ngũ",
        "Ba công khai",
        "Hệ thống nhận diện",
      ],
    },
    { title: "ĐÀO TẠO",
        subItems: [
            "Chuyên trang đào tạo",
            "Đào tạo quốc tế",
          ],
    },
    { title: "TUYỂN SINH" ,
        subItems: [
            "Tuyển sinh đại học",
            "Tuyển sinh chương trình liên kết",
            "Tuyển sinh trình độ thạc sĩ, tiến sĩ",
          ],
    },
    { title: "NGHIÊN CỨU" },
    { title: "SINH VIÊN" },
    { title: "GIẢNG VIÊN" },
    { title: "VĂN BẰNG" },
  ];

  return (
    <div className="w-full pl-100 pr-100">
      {/* Topbar */}
      <div className="bg-indigo-900 text-white text-sm flex justify-between items-center px-4 py-1 ">
        <div className="flex space-x-4">
          <span>📧 E-OFFICE</span>
          <span>✉️ EMAIL</span>
          <span>📚 THƯ VIỆN - THÔNG TIN</span>
        </div>
        <div className="flex items-center gap-4">
          <span>KẾT NỐI | LIÊN HỆ</span>
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg" alt="VN" className="w-5 h-5" />
          <img src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" alt="EN" className="w-5 h-5" />
        </div>
      </div>

      {/* Logo + Title */}
      <div className="bg-blue-100 flex items-center justify-between px-4 py-2">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Logo_IUH.png" alt="IUH Logo" className="w-32" />
        <div className="flex flex-col text-center flex-1">
          <h1 className="text-2xl font-bold text-blue-800">BỘ CÔNG THƯƠNG</h1>
          <h2 className="text-2xl font-bold text-blue-800">ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</h2>
          <p className="text-red-500 text-sm">Đổi mới tư duy, làm giàu thêm tri thức - đổi sống</p>
        </div>
        <div className="w-32" /> {/* Để cân 2 bên */}
      </div>

      {/* Navbar */}
      <div className="bg-indigo-900 flex items-center justify-between px-6">
        <div className="flex items-center space-x-6">
          <button className="text-white text-xl">🏠</button>

          {menuItems.map((menu, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setOpenMenu(index)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className={`text-white font-semibold flex items-center gap-1 ${openMenu === index ? 'text-red-500' : ''}`}>
                {menu.title}
                {menu.subItems && <ChevronDown size={16} />}
              </button>

              {/* Dropdown */}
              {menu.subItems && openMenu === index && (
                <div className="absolute top-full left-0 w-64 bg-white text-gray-700 shadow border">
                  <ul>
                    {menu.subItems.map((item, idx) => (
                      <li
                        key={idx}
                        className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer border-b last:border-0 hover:bg-red-400"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="rounded-md py-1 px-3 text-sm focus:outline-none"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600">
            🔍
          </button>
        </div>
      </div>
    </div>
  );
}
