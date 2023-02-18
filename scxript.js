var arr = [];
var id = 0;

function AddBook()
{
    var book_name = document.getElementById('book').value;
    var issue_to = document.getElementById('issue').value;
     //takeing time and date usinf Date object
    id++;
    var obj = new Date();
    
    var date = obj.getDate();
    if(date<10) date = "0" + date;
    var month = obj.getMonth();
    month = month + 1;
    if(month < 10) month = "0" + month;
    var year = obj.getFullYear();

    var hour = obj.getHours();
    var minutes = obj.getMinutes();
    if(hour<10) hour = "0" + hour;
    if(minutes<10) minutes = "0" + minutes;

    var pm_or_am = "";

    if(hour < 12) pm_or_am = "am";
    else pm_or_am = "pm";
    
    var time = hour + ":" + minutes;
    var date_formet = date + "/" + month + "/" +year +" at " + time + " " + pm_or_am;
    console.log(date_formet); 
    

    let table = document.getElementById("tableBody");
    let row = document.createElement("tr"); // We are adding at the end
    row.setAttribute("id",id);
    console.log(row);
    // Create table cells
    let c1 = document.createElement("td")
    let c2 = document.createElement("td")
    let c3 = document.createElement("td")
    let c4 = document.createElement("td")
    let c5 = document.createElement("td")
    let icon = document.createElement("img")
    
    icon.setAttribute('src','pen-to-square-regular.svg');
    // Add data to c1 and c2
    c1.innerText = id;
    c2.innerText = book_name;
    c3.innerText = issue_to;
    c4.innerText = date_formet;
    c5.innerText = "Not Returned" ;
    
    c5.setAttribute('contenteditable','true');
    c5.setAttribute('id',id);  
    c5.style.color = "green";
      // Append cells to row
      row.appendChild(c1);
      row.appendChild(c2);
      row.appendChild(c3);
      row.appendChild(c4);
      row.appendChild(c5);

 
      // Append row to table body
      table.appendChild(row)
      arr.push({"id":id,"book name":book_name,"status":"Not Returned"})
      console.log(arr);
   c5.onclick = function (){
     console.log(this);
     this.innerText = "return";
     this.style.color = "red";
     var val = this.getAttribute("id");

     var keys = Object.keys(arr);
     console.log(keys);
     keys.forEach(function (key){

     })
   }
}

