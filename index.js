console.log("hello world");

showNotes();

let btnNotes = document.getElementById("btnNotes");
btnNotes.addEventListener("click", function (e) {
    let text = document.getElementById("text");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesTxt = []
    }
    else {
        notesTxt = JSON.parse(notes);
    }
    document.getElementById("result").innerHTML = `<div class="alert alert-success alert-dismissible fade show"   
    role="alert"><strong>Add note Successfully...!</strong> 
    </div>`

    setTimeout(() => {
        document.getElementById("result").innerHTML = "";
    }, 1000)

    notesTxt.push(text.value);
    localStorage.setItem("notes", JSON.stringify(notesTxt));
    text.value = "";

    showNotes();

})


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
             <p class= "cardP">${element}</p>
             <button id="${index}" class="btn btn-danger" onclick="deleteNotes(this.id)">Delete</button>
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
    document.getElementById("result1").innerHTML = `<div class="alert btn-danger alert-dismissible fade show"   
    role="alert"><strong>Note ${index} Deleted...!</strong> 
    </div>`

    setTimeout(() => {
        document.getElementById("result1").innerHTML = "";
    }, 1000)

}


// let searchbar = document.getElementById("searchbar");
// searchbar.addEventListener("input", function () {

//     let input = searchbar.value.toLowerCase();
//     let notedCards = document.getElementsByClassName("card");

//     Array.from(notedCards).forEach(function (element) {
//         let cards = element.getElementsByTagName("p")[0].innerText;
//         if (cards.includes(input)) {
//             element.style.display = "block";
//         }
//         else {
//             element.style.display = "none";
//         }
//     })
// })

// for search element
let btnNav = document.getElementById("btnNav");
btnNav.addEventListener('click', function (e) {
    e.preventDefault();
    let searchbar = document.getElementById("searchbar").value.toLowerCase();
    let card = document.getElementsByClassName('card');

    Array.from(card).forEach(function (element) {
        let cardP = element.getElementsByClassName("cardP")[0].innerText.toLowerCase();
        if (cardP.includes(searchbar)) {
            element.style.display = 'block';
            // element.getElementsByClassName("cardP").style.color = "#ffb7b7;"; 
        }
        else {
            element.style.display = 'none';
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





