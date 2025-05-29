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
