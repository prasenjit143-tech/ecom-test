import { useEffect, useState } from "react";
import "./profile.css";
import { useAuth } from "../../Context/AuthContext";
import {
  FaHeart,
  FaShoppingBag,
  FaTicketAlt,
  FaQuestionCircle,
  FaUser,
  FaMapMarkerAlt,
  FaLock,
  FaBell,
  FaChevronRight,
} from "react-icons/fa";
import Swal from "sweetalert2";

function Profile() {
  const { userInfo } = useAuth();
  const [user, setUser] = useState(null);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userInfo) {
      setUser(userInfo);
    }
  }, [userInfo]);

  const handleEditProfile = (e) => {
    e.preventDefault();
    setIsEditProfileOpen(!isEditProfileOpen);
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    console.log("Profile updated:", user);
    setLoading(true);
    try {
      // const token = localStorage.getItem("token");
      const formdata = new FormData();
      formdata.append("name", user?.name);
      formdata.append("number", user?.number);
      formdata.append("profilePic", user?.profilePic);
      const response = await fetch(
        "http://localhost:5001/api/user/updateUser",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "multipart/form-data",
            // Authorization: `Bearer ${token}`,
          },
          credentials: "include",
          body: formdata,
        }
      );
      const data = await response.json();
      if (response.ok) {
        // setMessage("update successful!");
      } else {
        Swal.fire({
          title: "Error!",
          text: data.message || "update failed!",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("update error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="dashboard">
        {/* <Navber /> */}
        <main className="main-content">
          <header
            style={{
              backgroundColor: "#f7f7f7",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
              Welcome, {user?.name}
            </h1>
            <p>Here is your dashboard overview.</p>
          </header>
          <div
            className="cards-container"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              padding: "10px",
              columnGap: "10px",
            }}
          >
            <div
              className="card"
              style={{
                // backgroundImage:
                //   "-webkit-linear-gradient(45deg, #ff99cc, #ff66b3)",
                // background: "#020024",
                background:
                  "linear-gradient(90deg, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                flex: 1,
              }}
            >
              <FaHeart size={24} color="#fff" />
              <h2
                style={{
                  color: "#fff",
                  fontSize: "18px",
                  marginBottom: "10px",
                }}
              >
                Wishlist
              </h2>
              <p style={{ color: "#fff", fontSize: "14px" }}>
                View your saved items
              </p>
            </div>

            <div
              className="card"
              style={{
                backgroundImage:
                  "-webkit-linear-gradient(45deg, #66d9ef, #3e8e41)",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                flex: 1,
              }}
            >
              <FaShoppingBag size={24} color="#fff" />
              <h2
                style={{
                  color: "#fff",
                  fontSize: "18px",
                  marginBottom: "10px",
                }}
              >
                Orders
              </h2>
              <p style={{ color: "#fff", fontSize: "14px" }}>
                Track your orders
              </p>
            </div>

            <div
              className="card"
              style={{
                backgroundImage:
                  "-webkit-linear-gradient(45deg, #f7dc6f, #f2c464)",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                flex: 1,
              }}
            >
              <FaTicketAlt size={24} color="#fff" />
              <h2
                style={{
                  color: "#fff",
                  fontSize: "18px",
                  marginBottom: "10px",
                }}
              >
                Coupons
              </h2>
              <p style={{ color: "#fff", fontSize: "14px" }}>
                View your available coupons
              </p>
            </div>

            <div
              className="card"
              style={{
                backgroundImage:
                  "-webkit-linear-gradient(45deg, #8bc34a, #3e8e41)",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                flex: 1,
              }}
            >
              <FaQuestionCircle size={24} color="#fff" />
              <h2
                style={{
                  color: "#fff",
                  fontSize: "18px",
                  marginBottom: "10px",
                }}
              >
                Help Center
              </h2>
              <p style={{ color: "#fff", fontSize: "14px" }}>
                Get help with your questions
              </p>
            </div>
          </div>
          <section className="account-settings">
            <h2>Account Settings</h2>
            <div
              className={
                isEditProfileOpen ? "account-setting-open" : "account-setting"
              }
              onClick={handleEditProfile}
            >
              <FaUser className="account-setting-icon" />
              <div className="account-setting-text">
                <h5>Edit Profile</h5>
                <p>
                  Edit your profile information, including your name, email, and
                  password.
                </p>
              </div>
              <FaChevronRight className="account-setting-arrow" />
            </div>
            {isEditProfileOpen && (
              <section className="edit-profile-form">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="profile-picture">
                        <img
                          src={
                            userInfo?.profilePic ||
                            "https://cdn-icons-png.flaticon.com/512/552/552721.png"
                          }
                          alt="Profile Picture"
                        />
                        <input
                          type="file"
                          name="profilePic"
                          onChange={(e) =>
                            setUser({ ...user, profilePic: e.target.files[0] })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <form action="">
                        <fieldset>
                          <label>
                            Name:
                            <input
                              type="text"
                              placeholder="Enter your name"
                              name="name"
                              required
                              value={user?.name || ""}
                              onChange={(e) =>
                                setUser({ ...user, name: e.target.value })
                              }
                            />
                          </label>
                          <label>
                            Email:
                            <input
                              type="email"
                              placeholder="Enter your email address"
                              name="email"
                              required
                              value={user?.email || ""}
                              onChange={(e) =>
                                setUser({ ...user, email: e.target.value })
                              }
                            />
                          </label>
                          <label>
                            Phone Number:
                            <input
                              type="text"
                              placeholder="Enter your phone number"
                              name="mobile"
                              required
                              value={user?.mobile || ""}
                              onChange={(e) =>
                                setUser({
                                  ...user,
                                  mobile: e.target.value,
                                })
                              }
                            />
                          </label>
                        </fieldset>
                        <button
                          type="button"
                          className="update-profile-btn"
                          onClick={handleUpdateProfile}
                        >
                          Update Profile
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            )}
            <div className="account-setting">
              <FaMapMarkerAlt className="account-setting-icon" />
              <div className="account-setting-text">
                <h5>Save Address</h5>
                <p>Save your shipping addresses for easy checkout.</p>
              </div>
              <FaChevronRight className="account-setting-arrow" />
            </div>
            <div className="account-setting">
              <FaLock className="account-setting-icon" />
              <div className="account-setting-text">
                <h5>Privacy Center</h5>
                <p>
                  Manage your privacy settings, including your data and account
                  security.
                </p>
              </div>
              <FaChevronRight className="account-setting-arrow" />
            </div>
            <div className="account-setting">
              <FaBell className="account-setting-icon" />
              <div className="account-setting-text">
                <h5>Notification Settings</h5>
                <p>
                  Customize your notification preferences, including email and
                  push notifications.
                </p>
              </div>
              <FaChevronRight className="account-setting-arrow" />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Profile;
