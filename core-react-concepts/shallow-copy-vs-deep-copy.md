## Shallow Copy:
    => It creates a new object or array, but does not recursively copy nested objects or arrays, This means that
    nested objects are shared b/w the original and copy.
    changes to these nested objects in one can affect the other.
    Example:
    const originalState={
      user: {name:"Alice", age:25},
      tasks:["taks1", "task2"]
    };

    //Shallow copy using spread operator:
    const newCopy={...originalState};
    newCopy.user.name="Bod"
    console.log(orignalState.user.name)  //Bod


## Deep Copy:
    => It creates a new object or array along with copies of all nested objects or arrays, ensuring complete independence from orignal.
    Example:
    const originalState={
      user: {name:"Alice", age:25},
      tasks:["taks1", "task2"]
    };

    //deep copy:
    const newState=JSON.parse(JSON.stringify(originalState));
