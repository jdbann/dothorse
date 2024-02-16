---
title: Nexlibris, the next Ex Libris
lead: Because the first one still works fine
publishedAt: 2024-02-16T15:28:55.526Z
---

I'm starting to rebuild [Ex Libris](https://exlibrisrpg.com). The original
version works fine still, but I'm not enthusiastic about maintaining it. But I'm
proud of it and still want it to shine! So I'm setting it up with techniques and
technologies that I'm more actively engaged with or excited about.

For context, the original version is built in
[Ruby on Rails](https://rubyonrails.org) and hosted on
[Heroku](https://www.heroku.com). Whilst Rails is still a fine platform, I
haven't used it professionally or personally in any major way for almost two
years now. And the only reason I was still using Heroku was because I was still
using Rails.

So, the new plan... I'm switching to [Next.js](https://nextjs.org). I've become
a big fan since it started supporting so much server-side rendering. I can build
something in React that doesn't need to run a single line of javascript in your
browser. It has so much else to offer to make the frontend design and
development experience straightforward and elegant. I'm not a confident
designer, so anything that helps me experiment and test at a more rapid pace is
worth investing in.

But I want to manage the data somewhere else. [Encore](https://encore.dev) has
been my obsession for a while now. When I'm dealing with complicated database
queries, reverse engineering
[weird asset management techniques](https://edgeguides.rubyonrails.org/active_storage_overview.html),
or managing a slow migration of a large community content database, I want to
use something I trust. Especially when that system substantially reduces the
noise and complexity I would usually have to deal with if I wanted to manage
something like this in [Go](https://go.dev).

The plan is to build out a backend system that initially pulls content from the
same database as the original Rails application. When the public facing parts
are feature complete and fully styled, I'll serve all public content from the
new Next.js app and send admin users to the Rails app.

From there, I can replace the admin section too. Initially, this will still
modify content on the original database. At this point, I could start layering
new functionality on to the application - some community-focused features like
creating lists of your favourite content for example.

But when admins are fully capable on the new system, I can shut down the Rails
app. From there, I am free to change things more freely. Possibly even opening
up access to external services (people have previously raised the question of
API access to the database).

This plan has been floating around in my head for a while and a few problems
were holding me back. I couldn't start this process whilst the database was
hosted on Heroku as they do not provide a consistent and reliable method for
connecting to one of their hosted databases. Rails also left me a bit stumped
about how to handle all of the cover images for the entries that had been
uploaded to an AWS S3 bucket over the years. And subdomains on Next.js are not a
natural fit.

In the last week I've been taking these challenges on. I moved the database over
to [Neon](https://neon.tech) so the Rails app can still manage everything but I
can now open connections from outside of Heroku. I started building out the new
system and deployed it to
[https://www.nexlibrisrpg.com](https://www.nexlibrisrpg.com). It handles
subdomains and it can fetch presigned URLs for those entry cover images. That's
enough for me to be confident that I can make this work.

So consider this a public announcement that I'm getting started on this
properly!
