## Expense Tracker App - (In Progress)

Keep track of where your hard earned money goes with this expense tracker app.

 <img src="images/frontend2.png"   title="HTML5 Powered"> <img src="images/heroku5.png"> <img src="images/react3.png">



 <br>

## Summary

Here is an Expense Tracker app I built with Reactjs, Bootstrap4, JSX as well as JS, HTML & CSS. It's Launched using Heroku. I opted to use the nano-react-app template to keep the file structure lighter than create-react-app. This app lets you keep track of expenses by entering information into the text inputs, and displays the expenses in a table where you can view them, or delete them.

**Author**
<br>
**Robin Fussell** _- Software Developer_ | [LinkedIn](https://www.linkedin.com/in/robin-fussell17/)

## nano-react-app-template

The template project for [nano-react-app](https://github.com/adrianmcli/nano-react-app).

- `npm start` — This will spawn a development server with a default port of `1234`.
- `npm run build` — This will output a production build in the `dist` directory.

## Custom port

You can use the `-p` flag to specify a port for development. To do this, you can either run `npm start` with an additional flag:

```
npm start -- -p 3000
```

Or edit the `start` script directly:

```
parcel index.html -p 3000
```

## Adding styles

You can use CSS files with simple ES2015 `import` statements in your Javascript:

```js
import "./index.css";
```

## Babel transforms

The Babel preset [babel-preset-nano-react-app](https://github.com/adrianmcli/babel-preset-nano-react-app) and a small amount of configuration is used to support the same transforms that Create React App supports.

The Babel configuration lives inside `package.json` and will override an external `.babelrc` file, so if you want to use `.babelrc` remember to delete the `babel` property inside `package.json`.
