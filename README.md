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

# Copied the 3 files from '03-Pizza-Menu' starter file into this projects public folder, then moves index.css from public to src.