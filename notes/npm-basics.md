# Initializing a new package

1. run `npm init` in terminal
	- creates a `package.json` file while prompting information about the application such as
		- name of the application
		- main entrypoint file, which is the file to use to start up the entire application (in this case `index.js`)
		- the command to use to test the applcation, which will be aliased to `test` (do `npm run test`)
		- git repository
		- and more.
	- this only creates `package.json`, not the boilerplate code.

2. To install a package, run `npm install <package-name>` in terminal
	- to use Express as the framework to build your web application, install Express by running `npm install express` in terminal
	- a line will be added in `package.json` under key `"dependencies"`, with the version of Express specified

3. (optional) use EsLint package to perform analysis on your code to check if it follows a set of JS coding best practices.
	- run `npm install eslint --save-dev` in the terminal
		- the `--save-dev` option is to add this package under the key `"devDependencies"` in `package.json`, since this package should only be used in development environment. Thus when installing this application in an production environment (eg. in a server that serves your website to the internet), this package will *not* be installed in the server.
		- eg. debugger tools, linting tools, testing tools etc.

4. Defining your own tasks
	- allows you to define your own command/shortcuts under `npm` to automate tasks (eg. running tests, linting, minifying assets etc.)
	- You can add this under the `"script"` key inside `package.json`
		```javascript
		"scripts": {
			"lint": "eslint src/js"
		}
		```
		- `eslint` is a command provided by the EsLint package, it takes an argument to the file path for the Javascript files to be analyzed. In this case it's the folder `src/js`.
	- To make EsLint start the analysis, do `npm run lint` in the terminal.

5. (optional/one-time) using the Express Generator
	- This package can be used to generate a skeleton code for an Express application 
	- run `npm install express-generator -g` in the terminal
		-the `-g` flag tells npm to install globally in the system folder so that this package can be used in another folder that you like. This way you just have to install it one time. `npm` by default install the packages inside the application folder locally.

6. (optional) add a `.gitignore` file in your app's directory.
	- The packages are install within this app's directory under the folder `node_modules`. Over time this folder will grow bigger and it should not be pushed to github, since the other user using this application can easily run `npm install` again to get all the packages back
	- To install all packages stated in `package.json`, run `npm install` in the terminal.