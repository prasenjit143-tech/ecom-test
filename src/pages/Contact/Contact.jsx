import { useState } from "react";

function Contact() {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // For success/error messages

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://your-api.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          project: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus(result.error || "Something went wrong.");
      }
    } catch (error) {
      setStatus("Failed to send message. Try again later.");
    }
  };
  return (
    <>
      <div>
        <div className="container-fluid bg-breadcrumb">
          <div className="container text-center py-5" style={{ maxWidth: 900 }}>
            <h4
              className="text-white display-4 mb-4 wow fadeInDown"
              data-wow-delay="0.1s"
            >
              Contact Us
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
              <li className="breadcrumb-item active text-primary">Contact</li>
            </ol>
          </div>
        </div>
        <div className="container-fluid contact py-5">
          <div className="container py-5">
            <div className="row g-5">
              <div
                className="col-12 col-xl-6 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div>
                  <div className="pb-5">
                    <h4 className="text-primary">Get in Touch</h4>
                    <p className="mb-0">
                      The contact form is currently inactive. Get a functional
                      and working contact form with Ajax &amp; PHP in a few
                      minutes. Just copy and paste the files, add a little code
                      and you're done.{" "}
                      <a
                        className="text-primary fw-bold"
                        href="https://htmlcodex.com/contact-form"
                      >
                        Download Now
                      </a>
                      .
                    </p>
                  </div>
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="contact-add-item rounded bg-light p-4">
                        <div className="contact-icon text-primary mb-4">
                          <i className="fas fa-map-marker-alt fa-2x" />
                        </div>
                        <div>
                          <h4>Address</h4>
                          <p className="mb-0">123 Street New York.USA</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-add-item rounded bg-light p-4">
                        <div className="contact-icon text-primary mb-4">
                          <i className="fas fa-envelope fa-2x" />
                        </div>
                        <div>
                          <h4>Mail Us</h4>
                          <p className="mb-0">info@example.com</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-add-item rounded bg-light p-4">
                        <div className="contact-icon text-primary mb-4">
                          <i className="fa fa-phone-alt fa-2x" />
                        </div>
                        <div>
                          <h4>Telephone</h4>
                          <p className="mb-0">(+012) 3456 7890</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-add-item rounded bg-light p-4">
                        <div className="contact-icon text-primary mb-4">
                          <i className="fab fa-firefox-browser fa-2x" />
                        </div>
                        <div>
                          <h4>Yoursite@ex.com</h4>
                          <p className="mb-0">(+012) 3456 7890</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-flex justify-content-around bg-light rounded p-4">
                        <a
                          className="btn btn-xl-square btn-primary rounded-circle"
                          href="#"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a
                          className="btn btn-xl-square btn-primary rounded-circle"
                          href="#"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                        <a
                          className="btn btn-xl-square btn-primary rounded-circle"
                          href="#"
                        >
                          <i className="fab fa-instagram" />
                        </a>
                        <a
                          className="btn btn-xl-square btn-primary rounded-circle"
                          href="#"
                        >
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.4s">
                <div className="bg-light p-5 rounded h-100">
                  <h4 className="text-primary mb-4">Send Your Message</h4>
                  <form onSubmit={handleSubmit}>
                    <div className="row g-4">
                      <div className="col-lg-12 col-xl-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            name="name"
                            className="form-control border-0"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor="name">Your Name</label>
                        </div>
                      </div>
                      <div className="col-lg-12 col-xl-6">
                        <div className="form-floating">
                          <input
                            type="email"
                            name="email"
                            className="form-control border-0"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor="email">Your Email</label>
                        </div>
                      </div>
                      <div className="col-lg-12 col-xl-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            name="phone"
                            className="form-control border-0"
                            placeholder="Your Phone"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                          <label htmlFor="phone">Your Phone</label>
                        </div>
                      </div>
                      <div className="col-lg-12 col-xl-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            name="project"
                            className="form-control border-0"
                            placeholder="Your Project"
                            value={formData.project}
                            onChange={handleChange}
                          />
                          <label htmlFor="project">Your Project</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="text"
                            name="subject"
                            className="form-control border-0"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor="subject">Subject</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            name="message"
                            className="form-control border-0"
                            placeholder="Leave a message here"
                            value={formData.message}
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor="message">Message</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100 py-3">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                  {status && <p className="mt-3 text-center">{status}</p>}
                </div>
              </div>
              <div className="col-12 wow fadeInUp" data-wow-delay="0.2s">
                <div className="rounded">
                  <iframe
                    className="rounded w-100"
                    style={{ height: 400 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
