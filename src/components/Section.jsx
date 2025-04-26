import React from 'react';

function WebsiteSection() {
  return (
    <div className="bg-gray-100 py-6 width-full pl-100 pr-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 bg-blue-700">
        <div className=" rounded shadow p-4 text-center text-white" >
          <h3 className="text-lg font-semibold">PHẢN HIỆU QUẢNG NGÃI</h3>
          {/* Có thể thêm hình ảnh hoặc nội dung liên quan nếu có */}
          <img src="https://iuh.edu.vn/Resource/Upload2/Image/banner/content/QN03.jpg" alt="" />
        </div>
        <div className=" rounded shadow p-4 text-center text-white">
          <h3 className="text-lg font-semibold">CƠ SỞ THANH HÓA</h3>
          {/* Có thể thêm hình ảnh hoặc nội dung liên quan nếu có */}
          <img src="https://iuh.edu.vn/Resource/Upload2/Image/banner/content/TH03.jpg" alt="" />
        </div>
        <div className=" rounded shadow p-4">
          <div className="flex justify-between items-center text-white">
            <h3 className="text-lg font-semibold">VIDEO VÀ HÌNH ẢNH</h3>
            <a href="#" className="text-blue-500 text-sm">xem tất cả</a>
          </div>
          {/* Có thể thêm video hoặc hình ảnh thu nhỏ nếu có */}
          <div className="relative mt-2 rounded overflow-hidden">
            <img src="https://iuh.edu.vn/templates/2015/image/video-background.jpg0" alt="Video Placeholder" className="w-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-xl font-semibold mb-2">LIÊN HỆ</h2>
          <div>
            <h3 className="font-semibold mb-1">ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</h3>
            <p className="text-sm text-gray-600">Địa chỉ: Số 12 Nguyễn Văn Bảo, Phường 4,</p>
            <p className="text-sm text-gray-600">Quận Gò Vấp, Thành phố Hồ Chí Minh</p>
          </div>
          <div className="mt-2">
            <h3 className="font-semibold mb-1">Điện thoại:</h3>
            <p className="text-sm text-blue-500">028 38940 390 - 100</p>
          </div>
          <div className="mt-2">
            <h3 className="font-semibold mb-1">Tuyển sinh:</h3>
            <p className="text-sm text-blue-500">028 3985 1932 - 028 3895 5858 -</p>
            <p className="text-sm text-blue-500">028 3985 1917</p>
          </div>
          <div className="mt-2">
            <h3 className="font-semibold mb-1">Email:</h3>
            <p className="text-sm text-blue-500">dhcn@iuh.edu.vn</p>
          </div>
        </div>

        <div className="bg-white rounded shadow p-4">
          <h2 className="text-xl font-semibold mb-2">HOẠT ĐỘNG KHÁC</h2>
          <ul className="text-sm space-y-1">
            <li><span className="text-gray-600">•</span> Hoạt động phục vụ cộng đồng</li>
            <li><span className="text-gray-600">•</span> Sinh viên tình nguyện</li>
            <li><span className="text-gray-600">•</span> CLB/Đội/Nhóm sinh viên</li>
            <li><span className="text-gray-600">•</span> Kết nối doanh nghiệp</li>
          </ul>
        </div>

        <div className="bg-white rounded shadow p-4">
          <h2 className="text-xl font-semibold mb-2">THÔNG TIN MỞ RỘNG</h2>
          <ul className="text-sm space-y-1">
            <li><span className="text-gray-600">•</span> Bảo chỉ viết về IUH</li>
            <li><span className="text-gray-600">•</span> Khám phá IUH</li>
            <li><span className="text-gray-600">•</span> Kỹ năng mềm</li>
            <li><span className="text-gray-600">•</span> Bộ sưu tập</li>
            <li><span className="text-gray-600">•</span> Dịch vụ sinh viên</li>
          </ul>
        </div>

        <div className="bg-white rounded shadow p-4">
          <h2 className="text-xl font-semibold mb-2">VĂN BẢN TIỆN ÍCH</h2>
          <ul className="text-sm space-y-1">
            <li><span className="text-gray-600">•</span> Quy chế-Quy định-Quy trình</li>
            <li><span className="text-gray-600">•</span> Ba công khai</li>
            <li><span className="text-gray-600">•</span> Biểu mẫu đào tạo</li>
            <li><span className="text-gray-600">•</span> Quản lý khoa học</li>
            <li><span className="text-gray-600">•</span> Phản hồi</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WebsiteSection;