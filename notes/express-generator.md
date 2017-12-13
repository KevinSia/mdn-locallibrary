## Express Generator


The Express Generator package allows one to generate a basic skeleton code for a web application running on Express.
By running a command (which will be shown later), it generates the following files and folders:
- `package.json`
	- contains basic app info and dependencies/packages needed for the basic skeleton code to work.
- `public`
	- a folder to store assets (images, CSS and front-end JS) of your web application
	- the Express framework will only serve the assets in this folder, unless specify otherwise
- `routes`
	- all the js files that configures the routes/paths of the application (eg '/', '/about', '/contact-us') will be in this folder
- `views`
	- this is where the HTML template files will end up.
- `bin`
	- Folder to put binary files. Initially contains a binary file (`www`) that will be used in the terminal to start up a web server that can receive internet requests.


The Express Generator package should be installed in the system folder with the flag `-g`, so that it can be used again in your computer next time without having to install again.
- to install, run the following in the terminal:
	```bash
	$ npm install express-generator -g
	```


Next, to generate the skeleton code, execute the following command in your terminal
```bash
$ express <optional-file-name> --git --view=pug
```

Breaking down the command:
- `express <optional-file-name>`
	- if the file name is given, the files and folder are generated under that file name
	- else, the generator will choose to generate at the folder this command is executed at. (the current directory)
- `--git` flag
	- generates the `.gitignore` file for users that wants to push this application code to a remote location (Github, BitBucket etc.)
- `--view` flag
	- tells the generator what templating engine to use
		- templating engines are used to generate dynamic contents. In this case, it is used to generate dynamic HTML content.
		- without specifying the templating engine, the generator defaults to `jade` (the engine has updated and is now named `pug`, ignore the generator's default and use `pug` instead by specifying `--view=pug`)
- more information about the comman `express` can be found by executing `express --help` in the terminal.

> if you have generated the app using the `jade` templating engine, follow these steps to fix it to use `pug`
	- remove `"jade"` dependency under key `"dependencies"` in `package.json`
	- in the terminal, execute `npm install pug`
	- a new line with `"pug"` should be added under key `"dependencies"` in `package.json`
	- in `app.js` file, under view engine setup, change from `app.set('view engine', 'jade');` to `app.set('view engine', 'pug');`


> Note: The generator does not include any database. You are free to pick your desired database to use with your Express application with a database mechanism/package supported by Node