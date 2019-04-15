import React from "react"
import { ContactLayout } from "./styles"

const ContactForm = props => (
  <ContactLayout>
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <div className="field name">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="field email">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
      </div>
      <div className="field message">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="6" />
      </div>
      <div className="field submit">
        <input type="submit" value="Send Message" />
      </div>
      <input type="hidden" name="bot-field" />
    </form>
  </ContactLayout>
)

export default ContactForm
