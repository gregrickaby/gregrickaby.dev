---
layout: blog
title: Form Handling with Gatsby and Netlify
date: 2019-04-16T13:20:59.225Z
thumbnail: /images/uploads/screenshot-2019-04-16-08.54.09.png
---
Forms are a cornerstone of most websites, including this one. With Gatsby and Netlify, it's easy to add a contact form and view the submissions in the Netlify Dashboard. 

Here are a few resources that helped me figure get up and running:

* <https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/>
* <https://dev.to/changoman/form-handling-with-gatsbyjs-v2-and-netlify-4ddd>
* <https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation>
* <https://github.com/imorente/gatsby-netlify-form-example> (Gatsby v1)

First create a form:

```
<form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field"></form>
```

Now add two required (hidden) fields:

```
<form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">         <input type="hidden" name="form-name" value="contact" />  <input type="hidden" name="bot-field" /></form>
```

Those fields are the glue that enable Netlify to not only "see" your form during a deployment, it also creates a nice little spam filter.

Here is the working version, with HTML5 validation:

```
<form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
   <div className="field name">
     <label htmlFor="name">Name <span>*</span></label>
     <input type="text" name="name" id="name" required minlength="2" />
   </div>
   <div className="field email">
     <label htmlFor="email">Email <span>*</span></label>
     <input type="text" name="email" id="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
   </div>
   <div className="field file">
     <label htmlFor="file">File</label>
     <input type="file" name="file" id="file" />
   </div>
   <div className="field message">
     <label htmlFor="message">Message <span>*</span></label>
     <textarea name="message" id="message" rows="6" required minlength="6" />
   </div>
   <div className="field submit">
     <input type="submit" value="Send Message" />
   </div>
   <input type="hidden" name="form-name" value="contact" />
   <input type="hidden" name="bot-field" />
</form>
```

Check out my entire solution [on Github](https://github.com/gregrickaby/gregrickaby.dev/blob/338e5d803c32ca6fcd38f78df776013c1a56b01e/src/components/ContactForm/index.js).
