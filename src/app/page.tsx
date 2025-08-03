export default function Home() {
  return (
    <main className="container mx-auto p-8 min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Partner Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg border">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Client Management</h2>
          <p className="text-gray-600 mb-4">Manage your clients and their information</p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            View Clients
          </button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg border">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Sales Overview</h2>
          <p className="text-gray-600 mb-4">Track sales performance and metrics</p>
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
            View Sales
          </button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg border">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Management</h2>
          <p className="text-gray-600 mb-4">Administrative tools and settings</p>
          <button className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors">
            Manage
          </button>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Quick Stats</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow border">
            <div className="text-3xl font-bold text-blue-600">125</div>
            <div className="text-gray-600">Total Clients</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border">
            <div className="text-3xl font-bold text-green-600">$45,230</div>
            <div className="text-gray-600">Monthly Revenue</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border">
            <div className="text-3xl font-bold text-purple-600">89%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </main>
  );
}
