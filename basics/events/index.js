// when we work on events there is a event object which is passes in a callback function.
// see the below example

// document.querySelector('tagname').addEventListener('click',(e)=>{
    //     console.log(e) // this e is the event object which has many properties(explore them)
    // }, false)
     
    /* some important properties of events:
    1. type- type of event
    2. timestamp
    3. preventDefault (to prevent the default behaviour)
    4. target
    5. toElement
    6. srcElement
    7. currentTarget
    8. clientX, clientY
    9.screenX screenY
    10. altkey, ctrlkey, shiftkey, keycode
    11. stopPropagation
    */

/* NOTE: the addEventListener has 3 parameters last param is by-default false.
    the last param is for Evengt propgation.
Now event propagtion has two contexts Event bubbling i.e false(default) and event capturing i.e (true)
    
    -Event bubbling means inner element event listner will be called first then parent element listener will be called
    - Event capturing is just opposite to bubbling.

    # To stop event bubbling we can use stopPropagation property.

*/

// learn about the e.target.properties.
