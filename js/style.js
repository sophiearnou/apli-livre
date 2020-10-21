let alire = document.getElementById("alire")
let lu = document.getElementById("lu")
document.getElementById('add').addEventListener('click', function () {

    let titre = document.getElementById("titre").value;
    let lien = document.getElementById("lien").value;
    if (lien == "" || titre == "") {
        alert("Veuillez remplir les 2 champs");
    }
    else {
        document.getElementById("titre1").style.visibility = "visible";

        document.getElementById("pretext").style.visibility = "hidden";
        alire.insertAdjacentHTML("afterbegin", ` <li>${titre}<a href=${lien} target="blank"><i class="fas fa-shopping-cart"></a></i><i class="far fa-check-square" id=${titre} onClick=marquerLu(this.id)></i><i class="fas fa-trash" id=${titre} onClick=supprimer(this.id)></i></li>`);
        document.getElementById("lien").value = ""
        document.getElementById("titre").value = ""
    }




    document.getElementById("titre1").style.visibility = "visible";
    document.getElementById("pretext").style.visibility = "hidden";




})

function supprimer(id) {
    //console.log(id);

    document.getElementById(id).parentElement.outerHTML = "";

}

function marquerLu(id) {
    document.getElementById("titre2").style.visibility = "visible";
    supprimer(id)
    lu.insertAdjacentHTML("afterbegin", ` <li>${id}</i><i class="fas fa-trash" id=${id} onClick=supprimer(this.id)></i></li>`);

    console.log(id)
}