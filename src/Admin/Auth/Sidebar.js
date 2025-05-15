

function Sidebar(params) {
    
    return (
        <div className="sidebar">
          <h2>Admin Panel</h2>
          <a href="/admin/dashboard" className="active">
            Dashboard
          </a>
          <a href="/admin/users">Users</a>
          <a href="/admin/products">Products</a>
          <a href="/admin/products">Orders</a>
          <a href="#">Messages</a>
          <a href="#">Settings</a>
          <a href="#">Logout</a>
        </div>
    )
}
export default Sidebar;