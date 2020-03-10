

function changeRange() {
    let r = parseInt(document.getElementById("r").value);
    let g = parseInt(document.getElementById("g").value);
    let b = parseInt(document.getElementById("b").value);

    let color = "#" + hex(r) + hex(g) + hex(b);
    let rgb = `rgb(${r},${g},${b})`

    document.body.style.backgroundColor = color;
    document.getElementById("hex-label").innerText = color;
    document.getElementById("rgb-label").innerText = rgb;
    document.getElementById("r-label").innerText = r;
    document.getElementById("g-label").innerText = g;
    document.getElementById("b-label").innerText = b;


    if (r < 100 && g < 100 && b < 100) {
        document.getElementById("container").style.color = "white";

    } else {
        document.getElementById("container").style.color = "black";
    }

}

function hex(v) {
    let hex = v.toString(16);
    if (v < 16) {
        hex = "0" + hex;
    }
    return hex;
}



