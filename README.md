[![Build Status](https://travis-ci.com/msoe-sse/msoe-sse.github.io.svg?branch=master)](https://travis-ci.com/msoe-sse/msoe-sse.github.io)
# Setup
1. You will need Ruby installed on your development machine.  Ruby 2.4 or 2.5 should both work fine.
    - Check version with `ruby -v`
2. We’ll be using git (install if you don’t already have it)
    - For those who are unfamiliar with git & reading these notes in retrospect, please send me a DM and we’ll figure out the best way for you to get comfortable with basic commands or an IDE.
3. Clone the repository
4. Navigate to your project directory in cmd, git bash
5. Run a `gem install bundler`
6. Run a `bundle install`
7. If both (E) and (F) succeed, you’ll be good to run `bundle exec jekyll serve --port 4000` (you don’t need the --port 4000, but this option allows you to specify the port on which the site will run locally for you.)
   - To test out points service features on staging run `bundle exec jekyll serve --config _config.yml,_config_dev.yml`
8. You should be able to run the website locally now!
9. Checkout our backlog under "Projects" and "Website Re-Design" to find items to work on.

## Continuous Integration

There are checks that will be performed whenever Pull Requests are opened.  To save time on the build server, please run the tests locally to check for errors that will occur in the CI builds.

1. To run [Rubocop](https://github.com/ashmaroli/rubocop-jekyll), run the command `bundle exec rubocop -R`
