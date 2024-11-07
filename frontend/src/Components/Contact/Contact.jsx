import React, { useState, useEffect } from "react";
import './Contact.css'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Contact = () => {
  // State to hold the contact information
  const [contactInfo, setContactInfo] = useState({
    email: "",
    message: "",
  });

  // Fetch contact info from the backend after login
  const fetchContactInfo = async () => {
    try {
      const token = localStorage.getItem("token"); // Get the token from localStorage or Context

      const response = await fetch("http://localhost:8081/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data)
        const Email = data.message.email
        setContactInfo({
          email:Email
        }); // Set the fetched data in the form fields
      } else {
        console.error("Failed to fetch contact information");
      }
    } catch (error) {
      console.error("Error fetching contact information", error);
    }
  };

  // Submit form data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    try {
      const token = localStorage.getItem("token"); // Get the token from localStorage or Context

      const response = await fetch("http://localhost:8081/auth/insertmessage", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactInfo), // Send the contact info as JSON
      });

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Fetch contact info when the component mounts
  useEffect(() => {
    fetchContactInfo();
  }, []);

  return (

    <>
    <Navbar/>
    <h2>Contact Us</h2>
    <form onSubmit={handleSubmit}>


      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={contactInfo.email}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>Message:</label>
        <input
          type="text"
          name="message"
          value={contactInfo.message}
          onChange={handleInputChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
    <Footer/>
    </>
  );
};

export default Contact;
