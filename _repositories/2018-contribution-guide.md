---
layout: page
title: Contributing
permalink: repositories/contribution-guide
---

## Contribution Guide

If you'd like to contribute to our website, this page is for you! Contributing is easy; just follow these steps:

1. Get that git!
    * We’ll be using git, which you can download [*here*](https://git-scm.com/download/win).
    * Not sure how to get started? Check out some tutorials. Git isn't hard; it just requires some basic understanding.

2. Prerequisites

    * You will need Ruby 2.4 (NOT 2.5, as we learned)
        * _Note: Check version with ruby -v_
        * Windows installer can be found [*here*](https://cache.ruby-lang.org/pub/ruby/2.4/ruby-2.4.4.tar.gz)


    * Clone the repository at [*our repository*](https://github.com/msoe-sse/msoe-sse.github.io.git)
    * Navigate to your project directory in a terminal of your choice (we recommend git bash).
    * Run `gem install bundler`
    * Run `bundle install`

    If all of the above succeed, you’ll be good to run `bundle exec jekyll serve --port 4000` (you don’t need the --port 4000, but this option allows you to specify the port on which the site will run locally for you).

    You should be able to run the website locally now!

3. Create a branch with the name of the task that you want to work on. For example, a task for adding a post about an SSE event would have a branch called "addPostForXEvent."

4. Make the local changes for the feature.
    * if you've got questions on how Jekyll works, see the [documentation](https://jekyllrb.com/).
    * if you've got questions on how something should look, behave, etc., post a question on the [task you're working on](https://trello.com/invite/b/FPyttYCD/5e1f48aaf0da9e29edd412c5c48129ba/website-re-design).

5. Commit your changes and push them to origin.

6. Move your task in the Trello board to "Code Review", and tag another contributer to go through and code review your changes.

7. After the code review, an administrator will go through and do a double-check of your changes, then merge them in. They'll take care of moving the task to "done" in the Trello board.

That's it! Hope this guide is helpful! If you've got more questions, throw them in the #website channel on the SSE slack; we'll be happy to address them there.
