# Ruby dependencies required to build and serve this Jekyll site.
source "https://rubygems.org"

gem "jekyll", "~> 4.4.1"
gem "minima", "~> 2.5"

# Jekyll plugins used during site generation.
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
end

# Platform-specific dependencies for Windows and JRuby.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Improves file watching performance on Windows.
gem "wdm", "~> 0.1", platforms: [:mingw, :x64_mingw, :mswin]

# Keeps JRuby builds compatible with a Java-backed HTTP parser.
gem "http_parser.rb", "~> 0.6.0", platforms: [:jruby]
