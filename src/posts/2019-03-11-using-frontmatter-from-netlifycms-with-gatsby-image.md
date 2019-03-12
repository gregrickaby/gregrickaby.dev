---
layout: blog
title: Using frontmatter from NetlifyCMS with gatsby-image
date: 2019-03-12T03:49:00.000Z
thumbnail: /images/uploads/olav-tvedt-1402260-unsplash.jpg
---
On this blog, I'm using NetlifyCMS with a "thumbnail" widget (that means custom \~meta\~, er, I mean frontmatter) so I can display a featured image at the top of my blog posts. The trouble is:

> Gatsby assumes that images are colocated with posts. This approach doesn’t work with Netlify CMS, because it stores images in a single place. --Josef Rousek

With the help of Josef's [blog post](https://blog.rousek.name/2018/08/10/cool-image-loading-with-gatsbyjs-v2-and-netlify-cms-v2/) and [this issue](https://github.com/gatsbyjs/gatsby/issues/5990) on Github, I was able to pass along my thumbnail data to Gatsby and leverage the awesome [gatsby-image](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-image) plugin! 🙌

I wanted to share, so I lumped [the solution](https://github.com/gregrickaby/gregrickaby.dev/tree/4686655477e192ea85a8719db51c5d17f9088c31) into a [single commit](https://github.com/gregrickaby/gregrickaby.dev/commit/4686655477e192ea85a8719db51c5d17f9088c31). Hope this helps! ☺️

_Photo by Olav Tvedt on Unsplash_
