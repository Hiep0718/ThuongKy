import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState(null);

  const sidebarItems = [
    {
      title: "Lãnh đạo",
      subItems: ["Đảng ủy", "Ban giám hiệu"],
    },
    {
      title: "Các phòng ban",
      subItems: [
        "Phòng Tổ chức - Hành chính",
        "Phòng Tài chính - Kế toán",
        "Phòng Kế hoạch - Đầu tư",
        "Phòng Đào tạo",
        "Phòng Quản lý Khoa học và Hợp tác Quốc tế",
        "Phòng Công tác Chính trị và Hỗ trợ Sinh viên",
        "Phòng Khảo thí và Đảm bảo chất lượng",
        "Phòng Quản trị",
        "Phòng Dịch vụ",
        "Phòng Quản lý Ký túc xá",
        "Tạp chí Khoa học và Công nghệ",
        "Nhà xuất bản",
      ],
    },
    {
      title: "Các khoa",
      subItems: [
        "Khoa Công nghệ Cơ khí",
        "Khoa Công nghệ Thông tin",
        "Khoa Công nghệ Điện",
        "Khoa Công nghệ Điện tử",
        "Khoa Công nghệ Động lực",
        "Khoa Công nghệ Nhiệt - Lạnh",
        "Khoa Công nghệ May - Thời trang",
        "Khoa Công nghệ Hóa học",
        "Khoa Khoa học Cơ bản",
        "Khoa Luật và Khoa học Chính trị",
        "Khoa Ngoại ngữ",
        "Khoa Quản trị Kinh doanh",
        "Khoa Thương mại - Du lịch",
        "Khoa Kỹ thuật Xây dựng",
      ],
    },
    { title: "Các viện", subItems: [
        "Viện tài chính kế toán",
        "Viện công nghệ thông tin",
        "Viện công nghệ sinh học",
        "Viên Công nghệ thực phẩm",
    ] },
    { title: "Các trung tâm", subItems: [
        "Trung tâm tin học",
        "Trung tâm nghiên cứu và phát triển",
        "Trung tâm tư vấn và hỗ trợ sinh viên",
        "Trung tâm đào tạo và phát triển nguồn nhân lực",
    ] },
    { title: "Các phân hiệu", subItems: [
        "Phân hiệu Quản Ngãi",
        "Phân hiệu Thanh Hóa",
    ] },
    { title: "Đoàn thể", subItems: [
        "Công đoàn",
        "Đoàn Thanh niên",
        "Hội sinh viên"
    ] },
  ];

  return (
    <div className="relative bg-blue-200 space-y-2 border ">
      <h2 className="text-lg font-semibold text-white bg-blue-700 p-2">Cơ cấu tổ chức</h2>
      <ul className="space-y-1 text-sm">
        {sidebarItems.map((item, index) => (
          <li
            key={index}
            className="relative"
            onMouseEnter={() => setActiveMenu(index)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className={`flex justify-between items-center p-2 ${activeMenu === index ? "bg-red-500 text-white" : "hover:bg-gray-100"}`}>
              {item.title}
              {item.subItems.length > 0 && <ChevronRight size={16} />}
            </div>

            {/* Submenu */}
            {item.subItems.length > 0 && activeMenu === index && (
              <div className={`absolute top-0 left-full bg-white border shadow-md ml-1 p-4 ${item.subItems.length > 6 ? "grid grid-cols-2 gap-4 w-[600px]" : "grid grid-cols-1 w-[300px]"} z-50`}>
                {item.subItems.map((subItem, subIndex) => (
                  <div key={subIndex} className="px-2 py-1 hover:text-red-500 text-sm cursor-pointer whitespace-nowrap">
                    {subItem}
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
