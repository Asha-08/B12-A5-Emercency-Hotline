
✅1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll are given below :

a.getElementById : Selects a single element with the spicified id and return one element.if the element not found then return null.It cannot select multipile elements.

b.getElementsByClassName : Selects all the elements with the specified class and returns a live html collection.To get the element from the collection we can use for loop.

c.querySelector :If we have several css selector with the same name then it will return the first element that matches the css selector.Reurns a sinlge element like getElementbyId.

d.querySelectorAll : If we have several css selector with the same name then it will return the all elements that matches the css selector.Reurns a Static Nodelist.we can use loop here .


✅2.How do you create and insert a new element into the DOM using JavaScript?

Ans : To create and insert a new element into the DOM using Javascript fristly we need to create a element using document.createElement().
Then we can add some element like attributes, classes,IDs,content or html by using properties like textcontent,innerhtml,innertext and setAttribute.
Then we can insert the new element in the DOM by using some methode such as : 
appendChild(),prepend() etc.


✅3.What is Event Bubbling and how does it work?

Ans : Event Bubbling is a type of event propagation in the DOM. An event start Where the one actually clicked.
Event like Click, Keydown etc works thay way.
We can add attach eventlistener on parent element and handle child element under that parent.this is called event delegation.


✅4.What is Event Delegation in JavaScript? Why is it useful?

Ans : Event delegation is work beacuse od event bubbling.Instead of attaching event lisetener to the multipile child element we can use single event lisetener to the parent element and handle child element under the parent element.
It is very usefull technique .Instead of many event lisetener we need only one event lisetener .By doing this we can save our Time and make our clean and easier to maintain.


✅5.What is the difference between preventDefault() and stopPropagation() methods?

Ans : preventDefault() : Stops the default browser action.When we dont want the browsers default action to happen we use preventDefault().But It does not stop event bubbling.

stopPropagation() : it seems like opposite of preventDefault().it stops the event from propagating through the DOM.When we dont want the event to move further up / down the DOM we use stopPropagation().It does not stop the default action.