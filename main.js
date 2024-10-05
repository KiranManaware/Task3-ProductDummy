let button=document.querySelector("button")
let table=document.querySelector("table");
// console.log(button);

const getdata=async()=>{
    const response= await fetch("https://dummyjson.com/products");
    const data= await response.json();
    // console.log(data.products[0]);
    data.products.forEach((d) => {
        let tr = document.createElement("tr");
        let td1=document.createElement("td")
        let td2=document.createElement("td")
        let td3=document.createElement("td")
        let td4=document.createElement("td")
        let td5=document.createElement("td")
        td1.innerText=d.id;
        td2.innerText=d.title;
        td3.innerText=d.description;
        td4.innerText=d.category;
        td5.innerText=d.price;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        
        table.appendChild(tr);
    });
}

button.addEventListener("click",getdata);