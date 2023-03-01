module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write --cache'],
  'package.json': ['prettier --write --cache'],
  '*.{scss,less,styl,html}': ['prettier --write --cache'],
  '*.md': ['prettier --write --cache']
}
