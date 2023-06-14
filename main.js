import getData from "./products.js";

getData()
.then((res)=>res.json())
.then((data)=>{
    show(data)
    const btnDelete=document.querySelectorAll('.btn-delete')
    for(let item of btnDelete){
        item.addEventListener('click',function(){
            return confirm("Are you sure?")?remove(this.dataset.id):'';
        })
    }
})

const show=(data)=>{
    data.map((item,index)=>{
    document.querySelector('tbody').innerHTML+=`
<tr>
<td>${index+1}</td>
<td>${item.productName}</td>
<td><img src="${item.image}" alt="" width="50px"></td>
<td>

    <button data-id="${item.id}" class="btn-delete btn btn-outline-primary">Delete</button>
    <button data-id="${item.id}" class="btn-edit btn btn-outline-primary">Edit</button>
</td>
</tr>`
        })
}

const remove=(id)=>{
    fetch(`http://localhost:3000/products/${id}`,{method:"DELETE"})
}

const add=()=>{
    document.querySelector('body').innerHTML=`
    <form action="">
    <input type="text" name="" id="name">
    <input type="text" name="" id="image">
    <input type="submit" name="" id="add">
</form>
    `
}
document.querySelector('#viewAdd').addEventListener('click',add)