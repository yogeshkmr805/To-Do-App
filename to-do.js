let btn = document.getElementById('btn');
let tbody = document.getElementById('tbody');
let arr = [];


//on clicking of Add button
btn.addEventListener('click', () => {
    console.log('hi this is working');


    //store in local storage
    

    let jtopic = document.getElementById('job-title').value;
    let des = document.getElementById('desc').value;

    if(localStorage.getItem("obj")==null) //if local storage is empty
    {
        arr.push([jtopic,des]);
        
    }else{                                  //if its not empty
        arr = JSON.parse(localStorage.getItem("obj"));
        arr.push([jtopic,des]);    
    }

    localStorage.setItem("obj",JSON.stringify(arr)); //updating local storage


    //updating the DOM of table
    str1 = '';
    arr.forEach( (ele,index) =>
    {
        str1+=`
        <tr>
        <td>${index+1}</td>
        <td>${ele[0]}</td>
        <td>${ele[1]}</td>
        <td><button type = " button" class="butn" id = "${index}" onclick="removeWork(${index})">Remove</button></td>
        </tr>`
    } );
    
    tbody.innerHTML = str1;


});

//remove particular list
removeWork = (index) => {

    arr = JSON.parse(localStorage.getItem("obj"));
  
    arr.splice(index,1);

    localStorage.setItem("obj",JSON.stringify(arr)); //updating local storage


    //updating the DOM of table
    str1 = '';
    arr.forEach( (ele,index) =>
    {
        str1+=`<tr>
        <td>${index+1}</td>
        <td>${ele[0]}</td>
        <td>${ele[1]}</td>
        <td><button type = " button" class="butn" id = "${index}" onclick="removeWork(${index})">Remove</button></td>
        </tr>`
    } );
    
    tbody.innerHTML = str1;


}

clearlist = () =>
{
    localStorage.removeItem("obj");
    arr.splice(0);
    tbody.innerHTML = '';
}