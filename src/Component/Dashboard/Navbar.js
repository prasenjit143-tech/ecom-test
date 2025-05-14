
function Navber() {
    return (
        <>
        <aside className="sidebar">
          <h2 className="logo">MyDashboard</h2>
          <nav>
            <ul>
              <li>
                <a href="/dashboard">🏠 Dashboard</a>
              </li>
              <li>
                <a href="/profile">👤 Profile</a>
              </li>
              <li>
                <a href="/wishlist">❤ Wishlist</a>
              </li>
              <li>
                <a href="/order/details/">📦 Orders List</a>
              </li>
              <li>
                <a href="#">⚙️ Settings</a>
              </li>
              <li>
                <a href="#">🚪 Logout</a>
              </li>
            </ul>
          </nav>
        </aside>
        </>
    )
    
}
export default Navber;