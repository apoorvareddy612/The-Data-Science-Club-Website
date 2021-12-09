function imgSlider(anything){
    document.querySelector('.pic1').src = anything;
}

function myFunction() {
    document.getElementById("drop1").classList.toggle("show");
}

window.onclick = function(event) {
    if(!event.target.matches('.dropbtn')){
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for(i=0;i<dropdown.length;i++){
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}