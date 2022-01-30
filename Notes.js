console.log("hello world");

showNotes();

// show notes:
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesTxt = [];
    }
    else {
        notesTxt = JSON.parse(notes);
    }

    let html = "";
    notesTxt.forEach(function (element, index) {

        html +=
            ` 
            <div class="card">
             <h1><u> Notes ${index + 1}</u></h1>
             <p>${element}</p>
             <button id="${index}" class = "delete" onclick="deleteNotes(this.id)">Delete</button>
             <br>
         </div>
         `

    });
    let notesElm = document.getElementById("noted");
    if (notesTxt.length != 0) {
        notesElm.innerHTML = html;


    } else {
        notesElm.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Nothing to show! Use "Add a Note" section above to add notes.</strong> 
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`;
    }
  
}
;

function deleteNotes(index) {
    console.log(index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesTxt = [];
    }
    else {
        notesTxt = JSON.parse(notes);
    }
    notesTxt.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesTxt));
    showNotes();

}


let searchbar = document.getElementById("searchbar");
searchbar.addEventListener("input", function () {

    let input = searchbar.value.toLowerCase();
    let notedCards = document.getElementsByClassName("card");

    Array.from(notedCards).forEach(function (element) {
        let cards = element.getElementsByTagName("p")[0].innerText;
        if (cards.includes(input)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})


burger = document.querySelector(".burger");
navigateHeight = document.querySelector(".navigateHeight");
navlist = document.querySelector(".navlist");
rightNav = document.querySelector(".rightNav");
rightNavs = document.querySelector(".rightNavs");
rightNavigate = document.querySelector(".rightNavigate");


burger.addEventListener("click", function () {
    navigateHeight.classList.toggle('h-nav-height');
    navlist.classList.toggle('v-nav');
    rightNav.classList.toggle('v-nav');
    rightNavs.classList.toggle('v-nav');
    rightNavigate.classList.toggle('v-nav');
})
