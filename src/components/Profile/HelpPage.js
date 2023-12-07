import React from 'react';
import './HelpPage.css'

const HelpPage = () => {
  return (
    <div className="help-pageContainer">
        <div className="help-page">
        <h1>Welcome to the Rental Property Web App Help Center</h1>
        <p>
            If you have any questions or need assistance with our rental property web app, you've come to the right place. Below, you'll find answers to some common questions and instructions on how to use our app effectively.
        </p>

        <section className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-item">
            <h3>How do I search for rental properties?</h3>
            <p>To search for rental properties, go to the homepage and use the search bar. You can filter your search by location, price range, number of bedrooms, and more. Click on a property listing to view more details.</p>
            </div>

            <div className="faq-item">
            <h3>How can I list my property for rent?</h3>
            <p>To list your property, you'll need to create an account. Once logged in, click on "Add Property" and fill out the necessary details, including property description, price, and images. Make sure to provide accurate information to attract potential tenants.</p>
            </div>

            {/*Add more FAQ items here as needed*/}

        </section>

        <section className="contact-section">
            <h2>Contact Support</h2>
            <p>If you couldn't find the answer to your question in our FAQ section, please don't hesitate to contact our support team. We're here to help you with any issues or concerns you may have.</p>

            <p>Contact us via email: <a href="mailto:support@yourrentalapp.com">support@yourrentalapp.com</a></p>
        </section>

        <section className="feedback-section">
            <h2>Provide Feedback</h2>
            <p>We value your feedback and suggestions to improve our app. If you have any ideas or encounter any problems, please let us know. You can provide feedback through our feedback form located in your account dashboard.</p>
        </section>
        </div>
    </div>
  );
};

export default HelpPage;