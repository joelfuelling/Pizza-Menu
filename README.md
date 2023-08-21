# Jonas SchmedtMann Udemy 'Complete React' code along.

- DEBUGGING: 
- What if the webpage doesn't update to a change you've made?
    - Make sure the application is running.
        - OR - RESTART - IT - WORKS - GREAT - !
    - The linkage between react and the browser breaks quite frequently.

# Components as Building Blocks.

- Components are why React is so versatile. React is made completely out of compononents, or containted inside one. All React does is draw components onto the web page based off user interaction.

- React renders a "view" for each component. 

- Each component has its own Data, Logic, and Appearance.

- They can be nested, reused, and passed between component.

# Creating a visual component tree to visually represent the makeup of the interface.

- App
    - Video Player
    - Menu
    - Refine Questions (Parent Component)
        --- Filters (Child component of 'Refine Questions')
    - Questions List (Parent Component)
        --- Question (Child component of 'Questions List')



# What is JSX? 

- JSX is the JavaScript Declarative syntax that describes what components look like and how they work.

- JSX is an extension of JavaScript that allows us to embed JavaScript CSS and React components into HTML, all

- Babel is used to convert the code below into React elements.

<header>
    <h1 style ="color: red">
    Hello React!
    </h1>
</header>

- Babel converts into......

React.createElement(
    'header',
    null,
    React.createElement(
        'h1',
        { style: {color: 'red'}, 'Hello React!'}
    )
)

- REMEMBER - Imperative: "How to do things"

- JSX is declarative. Describe what UI should look like using JSX, based on current data.
- We think of the UI as a refelction of the current data.


# Joels Working/Workflow/General Notes:

# 8-21, 2pm: Copied the 3 files from '03-Pizza-Menu' starter file into this projects public folder, then moves index.css from public to src.