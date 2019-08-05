# the-todo-project

This project is focussed on understanding core concepts involved in building web applications with Javscript.
We will try to use vanilla javascript and avoid use of frameworks as much as possible.

## The goal is to build a todo app that will allow users to -
1) add tasks
2) mark tasks as completed
3) delete completed tasks
4) Create lists of tasks
5) Manage lists

## As the app matures, we will add more layers like -
- Adding types
- Componentizing the app
- Saving tasks in db
- Authentication & Authorization
- User Session Management
- PWA
- Setting up CI & CD workflow
- Writing automation Tests

## Notes

### How do we integrate typescript in a nodejs project ?

1) Install typescript
2) npm run tsc -- --init will generate a tsconfig.json file
3) Add `include` & `exclude` options in tsconfig file to tell the files to be included and excluded
4) Add a script to run tsc in watch mode
5) Once npm run tsc is run, it'll convert any ts file in the `include` destination to js file. If sourceMaps option is set
    in tsconfig file, then corresponding source map will be generated.

Observation:
If you type safe your code properly, unit testing becomes easy. Lot of edge cases automatically get taken care of.

### Module Bundlers

The require syntax comes from commonjs module system. However browsers do not understand commonjs. They need es module systems. Module Bundlers
can help transalte commonjs modules in to es modules. Module bundlers take pieces of javascript files and bundle them in to a single file.

Module bundlers like webpack do one or more of the below things in addition to bundling:

1) Minification/Uglification of code
2) Transformations through loaders and plugins (e.g. ts to js, sass to css, etc.)
3) Tree shaking (dead code elimination)
3) Code Splitting (chunks)
4) Dev Server and an optional hot module replacement (HMR).

By default, without any config, webpack provides bundling, minification and uglification of js files.
Its default conventions are -

1) You should have index.html in dist folder
2) index.js as entry file and should be present in src folder
3) The resultant file will be named as main.js and will be placed automatically inside the dist folder.

When we run npx webpack, it'll look for the entry file, gather all its dependencies, bundle them, uglify and minify the code and
place the resultant main.js file inside the dist folder.

We can override these defaults with webpack.config file.

Webpack is a very powerful tool for front end development. The basic goal is to bundle all css and js together and keep them in dist folder. Webpack by default supports
bundling of js files. If we want to bundle css, we can use css-loader. It bundles the css and keeps it in bundled js file. If we want to extract this css out and keep it in
a separate file, we can do so with mini-css-extract-plugin. If we are using sass as preprocessor, we can have sass-loader in the css loaders pipeline to convert our
sass files to css ones. If we're using typescript, we can transform it to js using ts-loader.

It will be awesome if generated js and css bundles get referenced in our index.html automatically. Webpack helps us do that too! Using html-webpack-plugin,
we can generate a new html file, it can be based of the template provided and it gets placed in the output directory. The bundled js and css file references tooget copied
in the generated html file.

Now, with just a single command webpack -w, all our source code gets bundled and copied in the dist folder as we type the code. Literally no other effort is required!

### Testing

Cypress is more like a E2E tool and an integration testing tool.

## Selenium vs Cypress

Selenium hooks into browser and starts testing.
Cypress internally launches its own browser and runs the in-browser tool.

