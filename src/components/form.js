import React from "react"

const Form = () => (
  <>
    <p>
      Want to get in touch? Drop me a note and I'll get back with you, ASAP.
    </p>
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <div className="field name">
        <label htmlFor="name">
          Name <span>*</span>
        </label>
        <input type="text" name="name" id="name" required minlength="2" />
      </div>
      <div className="field email">
        <label htmlFor="email">
          Email <span>*</span>
        </label>
        <input
          type="text"
          name="email"
          id="email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        />
      </div>
      <div className="field file">
        <label htmlFor="file">File</label>
        <input type="file" name="file" id="file" />
      </div>
      <div className="field message">
        <label htmlFor="message">
          Message <span>*</span>
        </label>
        <textarea name="message" id="message" rows="6" required minlength="6" />
      </div>
      <div className="field submit">
        <input type="submit" value="Send Message" />
      </div>
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />
    </form>
  </>
)

export default Form
