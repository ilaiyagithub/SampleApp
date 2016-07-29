# SampleApp
# - Babel lets you transpile most ES6 code

Babel will look for a .babelrc in the current directory of the file being transpiled.
If one does not exist, it will travel up the directory tree until it finds either a .babelrc, or a package.json with a "babel": {} hash within.

