function attachEventListener(){
let count = 0;
document.getElementById("clickMe").addEventListener("click",function xyz(){
    console.log("button clicked", ++count);
});
}
attachEventListener();//op= button clicked1 button clicked2 button clicked3
