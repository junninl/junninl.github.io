# Personal Website for junninl

Personal site using Jekyll.

Project layout 
- index.html
- software.html
- baker.html
- crocheter.html
- _includes/
  - nav.html
- assets/
  - css/
    - styles.css
  - js/
    - script.js
- README.md

Preview locally (recommended: Jekyll)
1. Ensure Ruby and RubyGems are available on macOS.
2. Install Jekyll and Bundler:
   - gem install jekyll bundler
3. From the project root run:
   - jekyll serve --livereload
4. Open http://localhost:4000

Quick static preview (does NOT process Jekyll includes)
- python3 -m http.server 8000
- Open http://localhost:8000