## Reference taken:
  1. https://github.com/sudheerj/reactjs-interview-questions#what-are-pure-components
     
# 1. What are Pure Components?
    => pure components are the components which render the same o/p for the same state and props. In function
       components, you can achieve these pure components through memoized React.memo() API wrapping around the components. 
       This API prevents unnecessary re-renders by comparing the previous props and new props using shallow comparision.

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

       
