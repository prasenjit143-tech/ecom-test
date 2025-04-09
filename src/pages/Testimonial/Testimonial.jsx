import OwlCarousel from "react-owl-carousel3";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Testimonial() {
  const options = {
    autoplay: true,
    smartSpeed: 1500,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      '<i class="fa fa-angle-right"></i>',
      '<i class="fa fa-angle-left"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  };

  return (
    <>
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Testimonials
          </h4>
          <ol
            className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li>
            <li className="breadcrumb-item active text-primary">Testimonial</li>
          </ol>
        </div>
      </div>

      <div
        className="container-fluid testimonial py-5"
        style={{ marginTop: 100 }}
      >
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: 800 }}
          >
            <h4 className="text-primary">Testimonials</h4>
            <h1 className="display-5 text-white mb-4">Our Clients Riviews</h1>
            <p className="text-white mb-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              adipisci facilis cupiditate recusandae aperiam temporibus corporis
              itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
              obcaecati, ipsam mollitia hic.
            </p>
          </div>
          <OwlCarousel
            {...options}
            className="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="testimonial-item p-4">
              <p className="text-white fs-4 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                mollitia fugiat, nihil autem reprehenderit aperiam maxime minima
                consequatur, nam iste eius velit perferendis voluptatem at atque
                neque soluta reiciendis doloremque.
              </p>
              <div className="testimonial-inner">
                <div className="testimonial-img">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/testimonial-1.jpg`}
                    className="img-fluid"
                    alt="Image"
                  />
                  <div className="testimonial-quote btn-lg-square rounded-circle">
                    <i className="fa fa-quote-right fa-2x" />
                  </div>
                </div>
                <div className="ms-4">
                  <h4>Person Name</h4>
                  <p className="text-start text-white">Profession</p>
                  <div className="d-flex text-primary">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item p-4">
              <p className="text-white fs-4 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                mollitia fugiat, nihil autem reprehenderit aperiam maxime minima
                consequatur, nam iste eius velit perferendis voluptatem at atque
                neque soluta reiciendis doloremque.
              </p>
              <div className="testimonial-inner">
                <div className="testimonial-img">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/testimonial-2.jpg`}
                    className="img-fluid"
                    alt="Image"
                  />
                  <div className="testimonial-quote btn-lg-square rounded-circle">
                    <i className="fa fa-quote-right fa-2x" />
                  </div>
                </div>
                <div className="ms-4">
                  <h4>Person Name</h4>
                  <p className="text-start text-white">Profession</p>
                  <div className="d-flex text-primary">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item p-4">
              <p className="text-white fs-4 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                mollitia fugiat, nihil autem reprehenderit aperiam maxime minima
                consequatur, nam iste eius velit perferendis voluptatem at atque
                neque soluta reiciendis doloremque.
              </p>
              <div className="testimonial-inner">
                <div className="testimonial-img">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/testimonial-3.jpg`}
                    className="img-fluid"
                    alt="Image"
                  />
                  <div className="testimonial-quote btn-lg-square rounded-circle">
                    <i className="fa fa-quote-right fa-2x" />
                  </div>
                </div>
                <div className="ms-4">
                  <h4>Person Name</h4>
                  <p className="text-start text-white">Profession</p>
                  <div className="d-flex text-primary">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star text-white" />
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </>
  );
}
export default Testimonial;
