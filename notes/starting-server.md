# Starting the server for your Express web app

To start the server, run `npm start`
- this will look for the `"start"` command under `"scripts"` in `package.json`
- as seen, the `"start"` command is executing the binary file (`www`) under `bin`

You can (and should) specify the debug variable when running the `npm start` command like this:

```bash
$ DEBUG=<your-top-folder-name>:* npm start
```

for the logs of your application to show. Logs are helpful for you to know what is going on with your application when you test your website in the browser.

- if your top folder name is called mdn-locallibrary, the command should be:
```bash
$ DEBUG=mdn-locallibrary:* npm start
```

If you visit your website at localhost:3000 with your browser after running this command, it should show something like:
```
GET / 304 350.242 ms - -
GET /stylesheets/style.css 304 7.075 ms - -
```

This says that someone has visited your website with the path `"/"`, and after the index page is being send back to the user, another request has come in to obtain the CSS file (see 'layout' file under 'views' folder).

You could also try putting something like this in the terminal
```bash
$ DEBUG=mdn-locallibrary,express:* npm start
```

Doing this will show whats going on inside the Express framework itself, along with the application logs seen previously.

> More infomation can be found here: https://expressjs.com/en/guide/debugging.html

==================

## Nodemon

If you try changing the app files (other than the view files, since they are rendered when requested), eg. adding a new route when the server is running (after running the `npm start` command), you'll notice that the server doesn't recognize the route. This is because changes you make to your app files are not visible to the server until you restart the server. Basically means every time you made changes and would like to see the result in the website, you'll need to restart the server. Fortunately, there is a tool that can automate restarting the server whenever theres a file change - Nodemon.

Nodemon watches the app files and once it detects a change (when you save your file after changing the code), it will restart the server automatically.

You can install `nodemon` globally in your own computer by doing
```
$ npm install nodemon -g
```
Then you can run nodeman using the following command while inside your app folder:
```
$ nodemon ./bin/www
```

*OR* if you want other developers who got this project automatically get `nodemon` as their devDependency, you can do this instead:
```
$ npm install --save-dev nodemon
```
 
but doing this means you can't use nodemon in the terminal right away, since it's a local dependency, but we can use it from a custom made NPM script/command by adding it to the key `"script"` inside `package.json`
```
"scripts": {
	"start": "node ./bin/www",
	"devstart": "nodemon ./bin/www"
}
```
Then to run it:
```
$ npm run devstart
```
And if you want logs to appear when you run your server:
```
DEBUG=<your-folder-name>:* npm run devstart
```

> Note:
	1. You'll have to use `npm run devstart` instead of `npm devstart`, because NPM has mapped the command `start` to the named script in `package.json`. We could have replaced the command `"start"` to run `nodemon ./bin/www` instead, but the command `npm start` is usually used for production to start the server and make it live, while nodemon is only used in development environment, thus it's a better idea to make a custom command for `nodemon` and leave `"start"` be.

	2. It's also not a good idea to put the DEBUG variable along with the command `nodemon` in `"devstart"`, because one may want to run the server locally without the logs. Though, you could make a custom shell alias add the debug variable, or even export the debug variable in the shell initialization script (`.bashrc` or `.bash_profile` or `.zshrc`).