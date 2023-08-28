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

# The Rules of JSX

- General Rules:

- Works like HTML, but we can enter "JavaScript mode" by using {} (for text or attributes)
- JS expressions can be palced inside {}. reference variables, create arrays or objects, [].mpa(), ternary operator
    - NO statements: if/else, for switch.

- Differences between JSX and HTML:

- className instead of class.
- htmlFor instead of HTML's for
- Every tag needs to be closed.

# Rendering Lists.

- How to render lists in React...
    - When we have an array and we want to create 1 component for each element of the array.
    - We MUST use .map() to create a new array with the component and necessary props within.
    - 

# Conditional Rendering with &&

- We will often short circuit (using the isOpen variable). first, we check tht the is open variable is true (ie, if the current hour is within the set open and close times). then, we return the component stating the restaurant is open until ${closeHour} time.

# Conditional Rendering with Ternaries

- Similar to Short circuiting with &&, we can use the ternary operator to instead render something else when the pizzas arrays length is 0.

- What about with multiple returns?
- Each component can still only return one block of JXS, but it can depend on a condition we create outside of the component.
- Such as a "if(!isLoaded) && '...' " to return a "Please wait, Loading..." screen instead of the actual component.

# Destructuring Props!

- When we pass 'props', it automatically receives the object of props that contains all the props we passed in. All components receive this props object, but we still need to pass it.

- Instead of passing 'props', we pass the destructured version of the ojbect inside {}, so we don't have to write out props for each one passed.

# Setting Classes and Text conditionally.

- className can bet set to either 'sold-out' or nothing depending on whether or not pizzaObj.soldOut is true, or false. The same goes for the price element in the HTML.

<li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <div>
            <h3>{pizzaObj.name}</h3>
            <p>{pizzaObj.ingredients}</p>
            <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span> 
        </div>
    </li>


# Joels Working/Workflow/General Notes:

# 8-21, 2pm: Copied the 3 files from '03-Pizza-Menu' starter file into this projects public folder, then moves index.css from public to src.