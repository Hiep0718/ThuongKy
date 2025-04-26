export default function MainContent() {
    return (
      <div>
        <section className="bg-white p-6 rounded shadow mb-6">
          <h2 className="text-2xl font-bold mb-4">Giao diện mới - Sẵn sàng bứt phá!</h2>
          <p className="text-gray-600">Hãy trải nghiệm giao diện website IUH mới...</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Khám phá ngay</button>
        </section>
  
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold mb-2">Thông báo</h3>
            <ul className="text-sm space-y-1">
              <li>Thông báo kế hoạch năm học 2025</li>
              <li>Thông báo tuyển sinh đại học văn bằng 2</li>
            </ul>
          </div>
  
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold mb-2">Tin tức - Sự kiện</h3>
            <ul className="text-sm space-y-1">
              <li>Hội nghị khoa học quốc tế BAC 2025</li>
              <li>Tuần lễ giáo dục quốc tế</li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
  