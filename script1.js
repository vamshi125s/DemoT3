const collegeName = "Mru";
function tasking(){
    console.log("I am learning code now at: "+collegeName);
    document.getElementById("hello").innerText="I am learning code now at: "+collegeName;
}
export { collegeName, tasking };
tasking();
