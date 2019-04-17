import { Link } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/Seo"

const About = ({ location, data }) => (
  <Layout location={location}>
    <SEO title="About Greg" />
    <h1>About</h1>
    <p>
      Hello! I’m the Director of Engineering at{" "}
      <a href="https://webdevstudios.com">WebDevStudios</a>, where we build
      amazing digital platforms for large and enterprise level businesses.
    </p>
    <div style={{ float: `right`, marginLeft: `12px` }}>
      <Img
        alt="The Rickaby Family"
        fixed={data.familyImage.childImageSharp.fixed}
      />
    </div>
    <p>
      While at WebDevStudios, my engineers and I work with clients like
      Microsoft Office, Viacom, NBA, MTV News, Paramount Network, Uber, Skype,
      Skype in Media, Campbell’s Soup, Pepperidge Farm, H.E.B. Central Market,
      Realtor.com, Kaspersky, and The Discovery Channel.
    </p>
    <p>
      Over the years, I’ve also contributed to WordPress Core, various WordPress
      themes, dozens of open-source projects, including GatsbyJS, and have
      spoken at a few WordCamps.
    </p>
    <p>
      I’ve also written a children’s book about building your first website,
      which is on sale at Barnes & Noble and online at Amazon.com.
    </p>
    <p>
      I’m also always trying to learn something new, everything from leadership
      skills, or mastering new technology, to playing music. Right now, I’m “all
      in” on GraphQL, React, and GatsbyJS. You can learn more about my
      professional skill-set at LinkedIn, Github, and WordPress.org.
    </p>
    <p>
      When I’m not at work? I enjoy being a dad and hanging out with family, as
      well as serving my community through Wiregrass Church. I’ve also been
      known to make delicious pizzas.
    </p>
    <p>
      If you’re looking to hire or retain an experienced web developer? I am{" "}
      <Link to="/contact">available.</Link>
    </p>
    <p>
      My services include hosting, server management, plugin development, PSD
      conversions, and theme creation. There really isn’t much I can’t do!
    </p>
  </Layout>
)

export default About

export const query = graphql`
  query {
    familyImage: file(relativePath: { eq: "rickaby-family-2018.jpg" }) {
      childImageSharp {
        fixed(width: 360) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
