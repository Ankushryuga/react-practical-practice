# What are Custom Hooks?
    => A custom hook is JS function that starts with "use" and internally calls other hooks like "useState", 
       "useEffect", or "useContext". It allows developers to extract reusable logic, keeping components clean and modular.


# Syntax:
    => function useCustomHook(){
       //some logic
        return value;
      }

# Steps to create a custom hook:
    => 1. Define a Function that starts with use.
          => Custom hooks must follow React's naming convention and start with use (e.g., useFetch). 
             This ensures React recognizes it as a hook and enforces hook rules.

       2. Use React's Built-in Hooks inside your Custom Hook.
          => Custom hooks can use useState, useEffect, useContext, etc., to manage state, handle side effects, 
             or access context.

       3. Add Logic inside useEffect for side effect.
          => If your custom hook performs side effects (e.g., fetching data, subscribing to a service), use useEffect to control when the effect runs.

       4. Return Necessary values. 
          => Your custom hook should return state, functions, or values that components need, such as fetched data, loading state, or error messages.

       5. Use the Custom Hook in Components.
          => Once defined, your custom hook can be used inside a React component just like a built-in hook.



# Example:
    =>
        import { useState, useEffect } from 'react';
        function useFetch(url) {
            const [data, setData] = useState(null);
            const [loading, setLoading] = useState(true);
        
            useEffect(() => {
                fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                        setData(data);
                        setLoading(false);
                    });
            }, [url]);
        
            return { data, loading };
        }
        function DataComponent() {
            const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/todos/1");
        
            return (
                <div>
                    {loading ? <p>Loading...</p> : <p>Data: {JSON.stringify(data)}</p>}
                </div>
            );
        }
        
        export default DataComponent;




# When to Use Custom Hooks
          =>       
                1. We need to reuse logic across multiple components.
                2. We want to improve readability and maintainability by keeping component logic clean.
                3. We are using multiple built-in hooks together in a reusable way.
                4. We want to encapsulate side effects like data fetching or state management
                5. Interesting Things About Custom Hooks
                6. Reusability Across Components: Custom hooks are designed to be reusable. They allow you to extract logic from components so the same functionality can be shared between different parts of your app without repeating code.
                7. Encapsulates Logic: Custom hooks encapsulate logic in a reusable way, keeping your components cleaner and more focused on UI rendering. This is especially useful for managing side effects, API calls, or complex state logic.
                8. Can Return Multiple Values: A custom hook can return multiple values (state, functions, etc.), making it versatile for handling various scenarios, such as managing both data and loading states.
                9. Built-in Hook Support: Custom hooks can use built-in React hooks (useState, useEffect, useContext, etc.) to manage state, lifecycle, and context, allowing them to integrate seamlessly into React components.
                10. Maintainable and Modular Code: By extracting logic into custom hooks, your code becomes more maintainable and modular. Each custom hook represents a small piece of functionality, improving readability and testability.
                11. Avoids Repetitive Code: Custom hooks help reduce the need to write repetitive code in multiple components. For instance, handling form input logic can be abstracted into a custom hook.
                12. Can Be Composed with Other Hooks: Custom hooks can be composed together to build complex functionality. This allows for a flexible and clean way to combine hooks for more sophisticated use cases.
                13. Performance Considerations
                Optimize API calls: For preventing the redundant requests caching mechanisms are used.
                14. Minimize state updates: Reduce unnecessary state changes inside custom hooks to improve efficiency.
                15. Use dependencies properly: Ensure hooks like useEffect have correct dependencies to prevent infinite loops.

