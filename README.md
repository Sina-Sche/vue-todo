# vue-todo

## Coding Challenge

This repository was created using Vue3 as part of an interview coding challenge.
As this is my very first project with Vue, it took me some time to get used to the template syntax and Vue's peculiarities.
After having read the [Vue3 docs](https://v3.vuejs.org/guide/introduction.html) and having looked at some of the tutorials of [Vue Mastery](https://www.vuemastery.com/courses/intro-to-vue-3/intro-to-vue3/), I started off by creating a vue project using VueCLI. 

When creating the project, I was asked to pick a preset (either Vue2 or Vue3). Since I have to learn everything from scratch anyway, I decided to dive into the newest version of Vue and go with Vue3.

I decided not to use any additional tools for this first Vue Project (such as Vite for example), in order to really get to know Vue itself.

## The task

Build a To Do App Frontend with Vue with a form that allows the user to add a To Do with a description, subtasks and subtask description. 
Implement functions to GET, POST, DELETE To Dos. 

## Steps to build my first Vue App

1. Setup of App by running ``` vue create <project-name> ```
    - choosing Vue3 with babel and eslint as a preset
2. Clean up of unnecessary files, fix favicon and title
3. Set up a basic layout for my app by creating: 
    - a Form Component
    - a To Do Item Component
4. Add functionality to the components: 
    - addTodo function
    - addSubtasks with "," function
    - toggleDone function and conditionally change classes and render buttons
    - deleteTodo function
5. Add JSON-server and db.json
    - install JSON-server
    - install concurrently to start database and development server with one command (```npm run start ```) 
    - add routes to GET/DELETE/POST data from/to db.json
    - implement routes in App
6. Styling
    - "frosted glass"-effect for FormComponent
    - basic responsive styling(media-queries)






## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles development and starts JSON server with data
```
npm run start
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
