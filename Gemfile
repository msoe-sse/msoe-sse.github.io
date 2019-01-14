source 'https://rubygems.org'

# rouge and jekyll are using the versions that github pages supports https://pages.github.com/versions/

gem 'rake'
gem 'rouge', '~> 2.2.1'
gem 'rubocop-jekyll', '~> 0.4.0'
gem 'test-unit'
gem 'webmock'
# We cannot use the gh-pages gem to manage our jekyll dependencies since we're using custom jekyll plugins
# This was added back according to https://github.com/jekyll/jekyll/issues/5265 which recommends not using that gem
gem 'jekyll', '~> 3.7.4'

group :jekyll_plugins do
  gem 'jekyll-feed'
  gem 'jekyll-paginate'
  gem 'jekyll-sitemap'
end
