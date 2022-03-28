function myFunction(){// Creating the function
   var f=document.getElementById("Paragraph");// giving the function a value
   f.innerText="here is the changed text";// giving the value to be returned by the funciton once we click
   console.log(f) // This is a tool to look at the code when we are in inspection mode, it allows us to debug. 
   }
   
   let x = myFunction(4, 3);   // Function is called, return value will end up in x

   function myFunction(a, b) {
     return a * b;             // Function returns the product of a and b
   }

