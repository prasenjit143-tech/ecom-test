import Navber from "./Navbar"

function Dashboard() {
    return (
        <>
      {/* inner page section */}
      <section className="inner_page_head">
        <div className="container_fuild">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <h3>Dashboard</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end inner page section */}
      
      <div className="dashboard">
        
        <Navber />
        <main className="main-content">
          <header>
            <h1>Welcome, User</h1>
            <p>Here is your dashboard overview.</p>
          </header>
          <section className="cards">
            <div className="card">
              <h3>Orders</h3>
              <p>12 Active</p>
            </div>
            <div className="card">
              <h3>Messages</h3>
              <p>5 Unread</p>
            </div>
            <div className="card">
              <h3>Account</h3>
              <p>Verified</p>
            </div>
          </section>
        </main>
      </div>
    </>
    )
    
}
export default Dashboard