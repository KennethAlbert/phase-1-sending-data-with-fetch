// Add your code here
function submitData(name1,email1) {
 const body= document.querySelector("body")

  return fetch('http://localhost:3000/users',{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      }, 
      body: JSON.stringify({name:name1,email:email1})
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    const h1=document.createElement("h1");
    h1.innerHTML=object.id;
    body.appendChild(h1);
  })
  .catch(function (error) {
    const p=document.createElement("p");
    p.style.backgroundColor="red";
    p.style.color="black";
    p.innerHTML=error.message
    body.appendChild(p);
  });
  };


console.log(submitData("eskimo","email1"));
  