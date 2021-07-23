
// task no 2

function addToCart(){
    alert("Thanks For Add to card")
}


// task  no 3

function delete_row() {
    var td = event.target.parentNode;
    var tr = td.parentNode;
    tr.parentNode.removeChild(tr);
}


//  task no 4


function mouseaway(my_image) {
    my_image.src = "images/images.jpg";
}

function rollover(my_image) {
    my_image.src = 'images/images (1).jpg';
}




// task no  5



function add() {
    clicks++
    document.getElementById("clicks").innerHTML = clicks;
    
};

function rem() {
    clicks--
    document.getElementById("clicks").innerHTML = clicks;
}











