import React, { useState } from "react";

function Forget_pass() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://your-api.com/api/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Password reset instructions sent to your email.");
      } else {
        alert(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Forgot password error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* inner page section */}
      <section className="inner_page_head">
        <div className="container_fuild">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <h3>Forgot password</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* form section */}
      <section className="why_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="full">
                <form onSubmit={handleSubmit}>
                  <fieldset>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <input
                      type="submit"
                      value={loading ? "Sending..." : "Submit"}
                      disabled={loading}
                    />
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Forget_pass;
