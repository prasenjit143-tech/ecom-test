

function Testimonial(){
    return (
      <>
      
          {/* inner page section */}
          <section className="inner_page_head">
            <div className="container_fuild">
              <div className="row">
                <div className="col-md-12">
                  <div className="full">
                    <h3>Testimonial</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end inner page section */}
          {/* client section */}
          <section className="client_section layout_padding">
            <div className="container">
              <div className="heading_container heading_center">
                <h2>Customer's Testimonial</h2>
              </div>
              <div
                id="carouselExample3Controls"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="box col-lg-10 mx-auto">
                      <div className="img_container">
                        <div className="img-box">
                          <div className="img_box-inner">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/client.jpg`} alt />
                          </div>
                        </div>
                      </div>
                      <div className="detail-box">
                        <h5>Anna Trevor</h5>
                        <h6>Customer</h6>
                        <p>
                          Dignissimos reprehenderit repellendus nobis error
                          quibusdam? Atque animi sint unde quis reprehenderit,
                          et, perspiciatis, debitis totam est deserunt eius
                          officiis ipsum ducimus ad labore modi voluptatibus
                          accusantium sapiente nam! Quaerat.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="box col-lg-10 mx-auto">
                      <div className="img_container">
                        <div className="img-box">
                          <div className="img_box-inner">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/client.jpg`} alt />
                          </div>
                        </div>
                      </div>
                      <div className="detail-box">
                        <h5>Anna Trevor</h5>
                        <h6>Customer</h6>
                        <p>
                          Dignissimos reprehenderit repellendus nobis error
                          quibusdam? Atque animi sint unde quis reprehenderit,
                          et, perspiciatis, debitis totam est deserunt eius
                          officiis ipsum ducimus ad labore modi voluptatibus
                          accusantium sapiente nam! Quaerat.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="box col-lg-10 mx-auto">
                      <div className="img_container">
                        <div className="img-box">
                          <div className="img_box-inner">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/client.jpg`} alt />
                          </div>
                        </div>
                      </div>
                      <div className="detail-box">
                        <h5>Anna Trevor</h5>
                        <h6>Customer</h6>
                        <p>
                          Dignissimos reprehenderit repellendus nobis error
                          quibusdam? Atque animi sint unde quis reprehenderit,
                          et, perspiciatis, debitis totam est deserunt eius
                          officiis ipsum ducimus ad labore modi voluptatibus
                          accusantium sapiente nam! Quaerat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel_btn_box">
                  <a
                    className="carousel-control-prev"
                    href="#carouselExample3Controls"
                    role="button"
                    data-slide="prev"
                  >
                    <i className="fa fa-long-arrow-left" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExample3Controls"
                    role="button"
                    data-slide="next"
                  >
                    <i className="fa fa-long-arrow-right" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* end client section */}
      </>
    );
}

export default Testimonial;