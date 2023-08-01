let pDiv = document.getElementById("p-div");
let iDiv = document.getElementById("img-div");
let nDiv = document.createElement("div");
document.querySelector("body").appendChild(nDiv);
nDiv.style.display = "none";

let p = 0; let i = 0; let n = 0; let val;

document.getElementById("p-button").onclick = function() {
    iDiv.style.display = "none";
    nDiv.style.display = "none";
    pDiv.style.display = "block";
    val = document.createElement("p");
    pDiv.appendChild(val);
    val.innerHTML = "What's goody my gang";
    val.style.background = "black";
    val.style.color = "white";
    val.style.padding = "10px";
    p++;
    document.getElementById("pCount").innerHTML = "pCount: " + p;
}

document.getElementById("img-button").onclick = function() {
    pDiv.style.display = "none";
    nDiv.style.display = "none";
    iDiv.style.display = "flex";
    iDiv.style.flexFlow = "row wrap";
    val = document.createElement("img");
    iDiv.appendChild(val);
    val.src = "assets/lebron.png";
    val.style.height = "100px"; val.style.width = "100px";
    i++;
    document.getElementById("iCount").innerHTML = "imgCount: " + i;
}

document.getElementById("nothing-button").onclick = function() {
    pDiv.style.display = "none";
    iDiv.style.display = "none";
    nDiv.style.display = "block";
    n++;
    document.getElementById("nCount").innerHTML = "nothingCount: " + n;
}
