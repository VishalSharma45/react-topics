export default function Contact() {
    return (
        <main className="container">
            <div className="contact-container">
                <h2>Contact Us</h2>
                <p>
                    Have questions, suggestions, or just want to say hello? We'd love to
                    hear from you! Reach out to us through any of the following channels:
                </p>
                <div className="contact-info">
                    <p>
                        <strong>Email:</strong> info@example.com
                    </p>
                    <p>
                        <strong>Phone:</strong> +123 456 7890
                    </p>
                    <p>
                        <strong>Address:</strong> 123 Main Street, Cityville, Country
                    </p>
                </div>
                <p>
                    Alternatively, you can fill out the form below, and we'll get back to
                    you as soon as possible:
                </p>
                <form className="contact-form">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </main>
    );
}
