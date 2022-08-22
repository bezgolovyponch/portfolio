import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/a8f2dce0-1a39-11ed-9d73-8fc992e1fd24";

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setSubmitted(true);
    };
    if (submitted) {
        return (
            <div className="submit-message">
                <h2>Thank you!</h2>
                <div>We'll be in touch soon.</div>
            </div>
        );
    }
    return (
        <div className="Contact-section">
            <div className="form-shaper">

                <form
                    action={FORM_ENDPOINT}
                    onSubmit={handleSubmit}
                    method="POST"
                    target="_blank"
                >
                    <div className="form-contain">
                        <div className="group">
                            <input className="h2-input" type="text" placeholder="Your name" name="name" required />
                            <span class="highlight"></span>
                            <span class="bar"></span>
                        </div>
                        <div className="group">
                            <input className="h2-input" type="email" placeholder="Email" name="email" required />
                            <span class="highlight"></span>
                            <span class="bar"></span>
                        </div>
                        <div className="group">
                            <input className="h2-message" placeholder="Your message" name="message" required />
                            <span class="highlight"></span>
                            <span class="bar"></span>
                        </div>
                        <div>
                            <button className="contact-button" type="submit"> Send a message </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;