## Reference taken:
  1. https://github.com/sudheerj/reactjs-interview-questions#what-are-pure-components
     
# 1. What are Pure Components?
    => pure components are the components which render the same o/p for the same state and props. In function
       components, you can achieve these pure components through memoized React.memo() API wrapping around the components. 
       This API prevents unnecessary re-renders by comparing the previous props and new props using shallow comparision.
       NOTE:::: React.memo(): is a higher-order component.
      # Syntax:
       =>
       const MemoizedComponent = memo(SomeComponent, arePropsEqual?);
       
       Example:
       import {memo, useState} from "react";
       const EmployeeProfile=memo(function EmployeeProfile({name, email}){
         return (
           <>
             <p>Name: {name}</p>
             <p>Email: {email}</p>
           </>
         );
       });
# 2. what are props in React?
    => Props are input to components. They are single values or objects containing a set of values that are passed to components.

# 3. State vs Props?
    => Both Props and State are plain js objects.
    State:
    1. Definition: it represents information that can change over the lifetime of the component.
    2. mutability: its mutable
    3. scop: local to the component where it is defiend.
    4. Re-rendering: updating the state trigger a re-render of the component and its descendents.
       
    Props:
    1. are inputs to a component
    2. Mutability

# 4. what is "key" prop and what is the benefits of using it in array of elements?
    => A key is a special attribute you should include when mapping over arrays to render data. Key prop helps React identify which items have changed, are added, or are removed.


# 5. Virtual DOM and How it works?
    => The Virtual DOM (VDOM) is an in-memory representation of Real DOM. The representation of a UI is kept in memory and synced with the "real" DOM. It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called reconciliation.

    # Working of Virtual DOM?
      1. Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.
      2. Then the difference between the previous DOM representation and the new one is calculated.
      3. Once the calculations are done, the real DOM will be updated with only the things that have actually changed.

# 6. Shadow DOM and Virtual DOM?  
      => Its a browser technology designed primarily for scoping variables and CSS web components.

# 7. React Fiber?
      => Fiber is the new reconciliation engine or reimplementation of core algorithm in React v16. The goal of React Fiber is to increase its suitability for areas like animation, layout, gestures, ability to pause, abort, or reuse work and assign priority to different types of updates; and new concurrency primitives.

# 8. CreateElement vs CloneElement
      => React.createElement() function create react elements which are going to be used for the object representation of UI. Whereas CloneElement is used to clone an element and pass it new props.

# 9. State Drilling or Lifting State up in React?
      =>
      When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.

# 10. What are Higher-order components?
      => A HOC is a function that takes a component and returns a new Component. Basically, its a pattern that is derived from React's compositional nature.

# 11. What is children prop?
      => Children is a prop that allows you to pass components as data to other components, just like any other prop you use.
      Component tree put b/w components opening and closing tag will be passed to that component as childrent.

      # Example:
      function MyDiv({ children }){
        return (
          <div>
            {children}
          </div>;
        );
      }
      
      export default function Greeting() {
        return (
          <MyDiv>
            <span>{"Hello"}</span>
            <span>{"World"}</span>
          </MyDiv>
        );
      }

# 12. What is reconcilitation?
      => 
      Reconcilation is the process through which React updates the Browser DOM and makes React work faster, React use a diffing algorithm so that component updates are predictable and faster.
      React would first calculate the difference b/w real DOM and the copy of DOM (Virtual DOM) when there's an update of components.

# 13. Fragments?
      => its a common pattern or practice in React for a component to return multiple elements. Fragment let you group a list of children without adding extra nodes to the DOM.
      Example:
      function Story({ title, description, date }) {
      return (
        <Fragment>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>{date}</p>
          </Fragment>
        );
      }
      
        function StoryBook() {
        return stories.map((story) => (
          <Fragment key={story.id}>
            <h2>{story.title}</h2>
            <p>{story.description}</p>
            <p>{story.date}</p>
          </Fragment>
        ));
      }

# 14. why Fragments are better than container divs?
      =>
      Below are the list of reasons to prefer fragments over container DOM elements,
      Fragments are a bit faster and use less memory by not creating an extra DOM node. This only has a real benefit on very large and deep trees.
      Some CSS mechanisms like Flexbox and CSS Grid have a special parent-child relationships, and adding divs in the middle makes it hard to keep the desired layout.
      The DOM Inspector is less cluttered.

# 15. What are portals in React?
      =>
      Portal is a recommended way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. When using CSS transform in a component, its descendant elements should not use fixed positioning, otherwise the layout will blow up.
      
      ReactDOM.createPortal(child, container);
      The first argument is any render-able React child, such as an element, string, or fragment. The second argument is a DOM element.

# 16. Stateless components?
      =>
      If the behaviour of a component is independent of its state then it can be a stateless component. You can use either a function or a class for creating stateless components. But unless you need to use a lifecycle hook in your components, you should go for function components. There are a lot of benefits if you decide to use function components here; they are easy to write, understand, and test, a little faster, and you can avoid the this keyword altogether.

# 17. Stateful components?
      =>
      If the behaviour of a component is dependent on the state of the component then it can be termed as stateful component. These stateful components are either function components with hooks or class components.
      
      Let's take an example of function stateful component which update the state based on click event,
      
      import React, {useState} from 'react';
      
      const App = (props) => {
      const [count, setCount] = useState(0);
      handleIncrement() {
        setCount(count+1);
      }
      
      return (
        <>
          <button onClick={handleIncrement}>Increment</button>
          <span>Counter: {count}</span>
        </>
        )
      }


# 18. How to apply props validation?
    => When the application is running in development mode, React will automatically check all props that we set on components to make sure they have correct type. If the type is incorrect, React will generate warning messages in the console. It's disabled in production mode due to performance impact. The mandatory props are defined with isRequired.

      The set of predefined prop types:
      
      PropTypes.number
      PropTypes.string
      PropTypes.array
      PropTypes.object
      PropTypes.func
      PropTypes.node
      PropTypes.element
      PropTypes.bool
      PropTypes.symbol
      PropTypes.any

      import React from "react";
      import PropTypes from "prop-types";
      
      class User extends React.Component {
        static propTypes = {
          name: PropTypes.string.isRequired,
          age: PropTypes.number.isRequired,
        };
      
        render() {
          return (
            <>
              <h1>{`Welcome, ${this.props.name}`}</h1>
              <h2>{`Age, ${this.props.age}`}</h2>
            </>
          );
        }
      }



# 19. What is the use of react-dom package?
      =>
      The react-dom package provides DOM-specific methods that can be used at the top level of your app. Most of the components are not required to use this module. Some of the methods of this package are:
          
      render()
      hydrate()
      unmountComponentAtNode()
      findDOMNode()
      createPortal()


# 20. What is ReactDOMServer?
      =>
      The ReactDOMServer object enables you to render components to static markup (typically used on node server).
      this object is maily used for server-side rendering

# 21. How events are different in React?
      =>
      Handling events in React elements has some syntactic differences:
      
      React event handlers are named using camelCase, rather than lowercase.
      With JSX you pass a function as the event handler, rather than a string.

# 22. What is the impact of indexes as keys?
      =>
      ## Reference taken:
  1. https://github.com/sudheerj/reactjs-interview-questions#what-are-pure-components
     
# 1. What are Pure Components?
    => pure components are the components which render the same o/p for the same state and props. In function
       components, you can achieve these pure components through memoized React.memo() API wrapping around the components. 
       This API prevents unnecessary re-renders by comparing the previous props and new props using shallow comparision.
       NOTE:::: React.memo(): is a higher-order component.
      # Syntax:
       =>
       const MemoizedComponent = memo(SomeComponent, arePropsEqual?);
       
       Example:
       import {memo, useState} from "react";
       const EmployeeProfile=memo(function EmployeeProfile({name, email}){
         return (
           <>
             <p>Name: {name}</p>
             <p>Email: {email}</p>
           </>
         );
       });
# 2. what are props in React?
    => Props are input to components. They are single values or objects containing a set of values that are passed to components.

# 3. State vs Props?
    => Both Props and State are plain js objects.
    State:
    1. Definition: it represents information that can change over the lifetime of the component.
    2. mutability: its mutable
    3. scop: local to the component where it is defiend.
    4. Re-rendering: updating the state trigger a re-render of the component and its descendents.
       
    Props:
    1. are inputs to a component
    2. Mutability

# 4. what is "key" prop and what is the benefits of using it in array of elements?
    => A key is a special attribute you should include when mapping over arrays to render data. Key prop helps React identify which items have changed, are added, or are removed.


# 5. Virtual DOM and How it works?
    => The Virtual DOM (VDOM) is an in-memory representation of Real DOM. The representation of a UI is kept in memory and synced with the "real" DOM. It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called reconciliation.

    # Working of Virtual DOM?
      1. Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.
      2. Then the difference between the previous DOM representation and the new one is calculated.
      3. Once the calculations are done, the real DOM will be updated with only the things that have actually changed.

# 6. Shadow DOM and Virtual DOM?  
      => Its a browser technology designed primarily for scoping variables and CSS web components.

# 7. React Fiber?
      => Fiber is the new reconciliation engine or reimplementation of core algorithm in React v16. The goal of React Fiber is to increase its suitability for areas like animation, layout, gestures, ability to pause, abort, or reuse work and assign priority to different types of updates; and new concurrency primitives.

# 8. CreateElement vs CloneElement
      => React.createElement() function create react elements which are going to be used for the object representation of UI. Whereas CloneElement is used to clone an element and pass it new props.

# 9. State Drilling or Lifting State up in React?
      =>
      When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.

# 10. What are Higher-order components?
      => A HOC is a function that takes a component and returns a new Component. Basically, its a pattern that is derived from React's compositional nature.

# 11. What is children prop?
      => Children is a prop that allows you to pass components as data to other components, just like any other prop you use.
      Component tree put b/w components opening and closing tag will be passed to that component as childrent.

      # Example:
      function MyDiv({ children }){
        return (
          <div>
            {children}
          </div>;
        );
      }
      
      export default function Greeting() {
        return (
          <MyDiv>
            <span>{"Hello"}</span>
            <span>{"World"}</span>
          </MyDiv>
        );
      }

# 12. What is reconcilitation?
      => 
      Reconcilation is the process through which React updates the Browser DOM and makes React work faster, React use a diffing algorithm so that component updates are predictable and faster.
      React would first calculate the difference b/w real DOM and the copy of DOM (Virtual DOM) when there's an update of components.

# 13. Fragments?
      => its a common pattern or practice in React for a component to return multiple elements. Fragment let you group a list of children without adding extra nodes to the DOM.
      Example:
      function Story({ title, description, date }) {
      return (
        <Fragment>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>{date}</p>
          </Fragment>
        );
      }
      
        function StoryBook() {
        return stories.map((story) => (
          <Fragment key={story.id}>
            <h2>{story.title}</h2>
            <p>{story.description}</p>
            <p>{story.date}</p>
          </Fragment>
        ));
      }

# 14. why Fragments are better than container divs?
      =>
      Below are the list of reasons to prefer fragments over container DOM elements,
      Fragments are a bit faster and use less memory by not creating an extra DOM node. This only has a real benefit on very large and deep trees.
      Some CSS mechanisms like Flexbox and CSS Grid have a special parent-child relationships, and adding divs in the middle makes it hard to keep the desired layout.
      The DOM Inspector is less cluttered.

# 15. What are portals in React?
      =>
      Portal is a recommended way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. When using CSS transform in a component, its descendant elements should not use fixed positioning, otherwise the layout will blow up.
      
      ReactDOM.createPortal(child, container);
      The first argument is any render-able React child, such as an element, string, or fragment. The second argument is a DOM element.

# 16. Stateless components?
      =>
      If the behaviour of a component is independent of its state then it can be a stateless component. You can use either a function or a class for creating stateless components. But unless you need to use a lifecycle hook in your components, you should go for function components. There are a lot of benefits if you decide to use function components here; they are easy to write, understand, and test, a little faster, and you can avoid the this keyword altogether.

# 17. Stateful components?
      =>
      If the behaviour of a component is dependent on the state of the component then it can be termed as stateful component. These stateful components are either function components with hooks or class components.
      
      Let's take an example of function stateful component which update the state based on click event,
      
      import React, {useState} from 'react';
      
      const App = (props) => {
      const [count, setCount] = useState(0);
      handleIncrement() {
        setCount(count+1);
      }
      
      return (
        <>
          <button onClick={handleIncrement}>Increment</button>
          <span>Counter: {count}</span>
        </>
        )
      }


# 18. How to apply props validation?
    => When the application is running in development mode, React will automatically check all props that we set on components to make sure they have correct type. If the type is incorrect, React will generate warning messages in the console. It's disabled in production mode due to performance impact. The mandatory props are defined with isRequired.

      The set of predefined prop types:
      
      PropTypes.number
      PropTypes.string
      PropTypes.array
      PropTypes.object
      PropTypes.func
      PropTypes.node
      PropTypes.element
      PropTypes.bool
      PropTypes.symbol
      PropTypes.any

      import React from "react";
      import PropTypes from "prop-types";
      
      class User extends React.Component {
        static propTypes = {
          name: PropTypes.string.isRequired,
          age: PropTypes.number.isRequired,
        };
      
        render() {
          return (
            <>
              <h1>{`Welcome, ${this.props.name}`}</h1>
              <h2>{`Age, ${this.props.age}`}</h2>
            </>
          );
        }
      }



# 19. What is the use of react-dom package?
      =>
      The react-dom package provides DOM-specific methods that can be used at the top level of your app. Most of the components are not required to use this module. Some of the methods of this package are:
          
      render()
      hydrate()
      unmountComponentAtNode()
      findDOMNode()
      createPortal()


# 20. What is ReactDOMServer?
      =>
      The ReactDOMServer object enables you to render components to static markup (typically used on node server).
      this object is maily used for server-side rendering

# 21. How events are different in React?
      =>
       Keys should be stable, predictable, and unique so that React can keep track of elements.
  
      In the below code snippet each element's key will be based on ordering, rather than tied to the data that is being represented. This limits the optimizations that React can do and creates confusing bugs in the application.
      {
        todos.map((todo, index) => <Todo {...todo} key={index} />);
      }

      If you use element data for unique key, assuming todo.id is unique to this list and stable, React would be able to reorder elements without needing to reevaluate them as much.
      
      {
        todos.map((todo) => <Todo {...todo} key={todo.id} />);
      }
      Note: If you don't specify key prop at all, React will use index as a key's value while iterating over an array of data.

      
