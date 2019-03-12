---
layout: blog
title: Dependency Hell
date: 2019-03-12T02:00:34.156Z
thumbnail: /images/uploads/jason-hafso-690347-unsplash.jpg
---
Yesterday after church, I had a few minutes to write a quick blog post about my progress with both Gatsby and GraphQL, however I was interrupted by a bug introduced in Gatsby 2.1.23 which broke NetlifyCMS. 

I like to stay up-to-date and keep packages current. When I sat down, I punched in \`ncu -u && npm i\` and went from [Gatsby 2.1.20 --> 2.1.27](https://github.com/gregrickaby/gregrickaby.dev/commit/11270ad410d1ad4907b788680cb6f6fcaa57299d#diff-b9cfc7f2cdf78a7f4b91a753d10865a2L9) and then tried to open NetlifyCMS  to no avail 😡

> You see, my dev time on the weekends is precious (👋hi, father of 3 here) 
>
> **so I was really pissed when I couldn't write my blog post**
>
> .

WordPress has put food on my table since 2011. I'm not used to breaking changes with minor releases, and this sort of thing makes the transition away WordPress harder. It's true, I could have just rolled back to 2.1.20 and then wrote the blog post, but I spent that 30-minutes trying to figure out what broke. Finally, I went to Github to create a ticket only to find [I wasn't the only one](https://github.com/gatsbyjs/gatsby/issues/12446).

Luckily, the folks from Gatsby were all over it-- and had a fix later in the day (which is incredible) but what's the real solution? Should I be slower to update packages? Or should the maintainer be slower to push point releases?
