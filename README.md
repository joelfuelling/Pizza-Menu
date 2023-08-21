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

# Separation of Concerns

- The rise of interactive Single Page Applications.
- As pages got more interactive, they got more and more complex. JavaScript became more in charge of the HTML.
- Logic and UI are very tightly coupled <<< Fundamental reason for Components!

*** HTML and JS and colocated: Things that change together should be located as closely together as possible.

# Applying CSS to react components.

- React doesn't care how we do this. Inline, external, Sass, styled-components, TaleWindCSS, etc...

# Passing and Receiving Props

- Props are the communication channel between a parent and child component, and how we move data pieces around. See the Pizza and Menu components in index.js

# Props, Immutability, and one-way data flow

- We use props to pass data from parent to child components
- !ANYTHING can be passed as props!: single values, arrays, objects, functions, even other components.

*** Props are READ-ONLY *** 

- This is one of the golden rules of React
- If you need to mutate props, you actually need state. 

Component [ DATA (props + state): Logic & Appearance]
- state: Internal data that can be updated by the components logic
- props: Data coming form the outside, and can only be updated by the parent component.
    
    - Why? Mutating props would affect parent, creating side effects (not pure!)
    - Component have to be pure functions in terms of props and state

- One-way Data Flow: Data can only from parents to children, top to bottom. This makes applications much more predictable and easier to test for developers.
    - Also makes debugging much easier when data is only going one way.
    - One-way data binding is more efficient for speed and implementation.



# Joels Working/Workflow/General Notes:

# 8-21, 2pm: Copied the 3 files from '03-Pizza-Menu' starter file into this projects public folder, then moves index.css from public to src.