let addtaskinput = document.getElementById("addtaskinput");
let addtaskbtn = document.getElementById("addtaskbtn");

addtaskbtn.addEventListener('click',function() {
    let addinputval = addtaskinput.value ;
    if(addinputval.trim()!= 0)
    {
    let webtask = localStorage.getItem("localtask");
    if(webtask == null){
        taskObj = [];
    }else{
        taskObj = JSON.parse(webtask);
    }
    taskObj.push(addinputval);
    localStorage.setItem("localtask",JSON.stringify(taskObj));
    showtask();
}

})

function showtask(){
    let addinputval = addtaskinput.value ;
    let webtask = localStorage.getItem("localtask");
    if(webtask == null){
        taskObj = [];
    }else{
        taskObj = JSON.parse(webtask);

}
let html='';
let addtasklist = document.getElementById("addedtasklist");
taskObj.forEach((item,index) => {
    html+=` <tr>
    <th>${index +1}</th>
    <td>${item}</td>
    <td><button type = "button" class ="text-primary" onclick="edittask(${index})"><i class ="fa fa-edit"></i>edit</button></td>
    <td><button type = "button" class ="text-danger" onclick ="deletetask(${index})"><i class ="fa fa-trash"></i>delete</button></td>
</tr>`;
})
addtasklist.innerHTML = html;
}
function edittask(index){
    let saveindex = document.getElementById("saveindex");
    let addtaskbtn = document.getElementById("addtaskbtn");
    let savetaskbtn = document.getElementById("savetaskbtn");
    saveindex.value = index;
    let webtask = localStorage.getItem("localtask");
    taskObj = JSON.parse(webtask);
    addtaskinput.value = taskObj[index];
    addtaskbtn.style.display="none";
    savetaskbtn.style.display="inline-block";
    //localStorage.setItem("localtask",JSON.stringify(taskObj));
}
let savetaskbtn = document.getElementById("savetaskbtn");
savetaskbtn.addEventListener('click',function() {
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    let saveindex  = document.getElementById("saveindex").value;
    taskObj[saveindex] = addtaskinput.value;
    savetaskbtn.style.display ="none";
    let addtaskbtn = document.getElementById("addtaskbtn");
    addtaskbtn.style.display ="inline-block";
    addtaskinput.value ='';
    localStorage.setItem("localtask",JSON.stringify(taskObj));
    showtask();
})
function deletetask(index){
    let webtask = localStorage.getItem("localtask");
    taskObj = JSON.parse(webtask);
    taskObj.splice(index,1);
    localStorage.setItem("localtask",JSON.stringify(taskObj));
    showtask();
    }
   let deleteallbtn = document.getElementById("deleteallbtn");
    deleteallbtn.addEventListener('click',function(){
        let addtaskbtn = document.getElementById("addtaskbtn");
        let savetaskbtn = document.getElementById("savetaskbtn");
        let webtask = localStorage.getItem("localtask");
         taskObj = JSON.parse(webtask);
         if(webtask == null){
            taskObj = [];
        }else{
            taskObj = JSON.parse(webtask);
            taskObj = [];
        }
        savetaskbtn.style.display = "none";
        addtaskbtn.style.display = "inline-block";
        localStorage.setItem("localtask",JSON.stringify(taskObj));
        showtask();
    })
    let searchtextbox = document.getElementById("searchtextbox");
    searchtextbox.addEventListener('input',function(){
        let trlist = document.querySelectorAll("tr");
        Array.from(trlist).forEach(function(item){
            let searchedtext = item.getElementsByTagName("td")[0].innerText;
            let searchtextboxval = searchtextbox.value; 
            let re = new RegExp(searchtextboxval,'gi')
            if(searchedtext.match(re)){
               item.style.display = "table-row";
            }else{
                item.style.display = "none"; 
            }
        
        })

    })


