export default function MainContent() {
    return (
      <div>
  
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">Thông báo</h3>
              <a href="#" className="text-blue-500 text-sm">Xem tất cả</a>
            </div>
            <ul className="text-sm space-y-1">
              <li><span className="text-blue-500 mr-1">•</span> Thông báo v/v kế hoạch nghỉ hè đối với sinh viên năm 2025 <span className="text-gray-400">24-04-2025</span> <span className="bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5 ml-1">NEW</span></li>
              <li><span className="text-blue-500 mr-1">•</span> Thông báo tuyển chọn nam sinh tốt nghiệp đại học cho các trường quân đội... <span className="text-gray-400">21-04-2025</span> <span className="bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5 ml-1">NEW</span></li>
            </ul>
          </div>
  
          <div className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">Tuyển sinh</h3>
              <a href="#" className="text-blue-500 text-sm">Xem tất cả</a>
            </div>
            <ul className="text-sm space-y-1">
              <li><span className="text-blue-500 mr-1">•</span> Thông báo tuyển sinh đào tạo liên thông từ trình độ cao đẳng lên trình độ... <span className="text-gray-400">28-03-2025</span></li>
              <li><span className="text-blue-500 mr-1">•</span> Thông báo v/v tuyển sinh đại học văn bằng hai, đợt 1 năm 2025 <span className="text-gray-400">20-03-2025</span></li>
            </ul>
          </div>
        </section>
  
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">Tin tức - Sự kiện</h3>
              <a href="#" className="text-blue-500 text-sm">Xem tất cả</a>
            </div>
            <ul className="text-sm space-y-1">
              <li>
                <div className="relative">
                  <img src="https://iuh.edu.vn/Resource/Upload2/_thumbs/Image/2025/04/BEMACAUN-BANNER.JPG" alt="Tin tức 1" className="rounded mb-2 w-full" />
                  <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 rounded-bl-md rounded-br-md w-full">
                    <p className="text-sm">IUH bế mạc thành công đợt đánh giá chất lượng cấp trường theo tiêu chuẩn...</p>
                    <p className="text-xs text-gray-300">26-04-2025 <span className="bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5 ml-1">NEW</span></p>
                  </div>
                </div>
              </li>
              <li><span className="text-blue-500 mr-1">•</span> AVEVA tài trợ gói phần mềm trị giá 180.000 đô Mỹ cho Đại học Công nghiệp... <span className="text-gray-400">25-04-2025</span> <span className="bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5 ml-1">NEW</span></li>
            </ul>
          </div>
  
          <div className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">Hợp tác quốc tế</h3>
              <a href="#" className="text-blue-500 text-sm">Xem tất cả</a>
            </div>
            <ul className="text-sm space-y-1">
              <li>
                <div className="relative">
                  <img src="https://iuh.edu.vn/Resource/Upload2/_thumbs/Image/2025/03/GIAOLUUVANHOA-BANNER.JPG" alt="Hợp tác quốc tế 1" className="rounded mb-2 w-full" />
                  <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 rounded-bl-md rounded-br-md w-full">
                    <p className="text-sm">Sôi nổi hoạt động Tuần lễ giao lưu văn hóa, khoa học sinh viên quốc...</p>
                    <p className="text-xs text-gray-300">24-03-2025</p>
                  </div>
                </div>
              </li>
              <li><span className="text-blue-500 mr-1">•</span> Đại học Công nghiệp TP. HCM tham gia dự án Green Edu Seeds của quỹ Erasmus <span className="text-gray-400">19-03-2025</span></li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
  