


function Profile(){
    return(
        <>
        {/* inner page section */}
      <section className="inner_page_head">
        <div className="container_fuild">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <h3>Profile</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end inner page section */}
      {/* why section */}
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
      {/* end why section */}
        </>
    )
}

export default Profile;