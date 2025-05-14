import Navber from "./Navbar";

function Profile() {
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
      
      {/* end why section */}
      <div className="dashboard">
        <Navber />
        <main className="main-content">
          <header>
            <h1>Welcome, User</h1>
            <p>Here is your dashboard overview.</p>
          </header>
          <section className="why_section layout_padding">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <div className="full">
                    <form action="index.html">
                      <fieldset>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          name="name"
                          required
                        />
                        <input
                          type="email"
                          placeholder="Enter your email address"
                          name="email"
                          required
                        />
                        <input
                          type="password"
                          placeholder="Enter password"
                          name="password"
                          required
                        />
                        <input type="submit" defaultValue="Submit" />
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Profile;
