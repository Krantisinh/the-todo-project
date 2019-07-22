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
2) Transformations through plugins (e.g. ts to js, sass to css, etc.)
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