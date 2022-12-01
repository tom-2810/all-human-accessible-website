var checkboxesWaarneembaar = document.querySelectorAll("#principes #waarneembaar input[type=checkbox]");
var checkboxesBedienbaar = document.querySelectorAll("#principes #bedienbaar input[type=checkbox]");
var checkboxesBegrijpelijk = document.querySelectorAll("#principes #begrijpelijk input[type=checkbox]");
var checkboxesRobuust = document.querySelectorAll("#principes #robuust input[type=checkbox]");

checkboxesWaarneembaar.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
        changeProgression(checkbox, this.closest(".richtlijnen").parentElement.id);
    });
});

checkboxesBedienbaar.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
        changeProgression(checkbox, this.closest(".richtlijnen").parentElement.id);
    });
});

checkboxesBegrijpelijk.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
        changeProgression(checkbox, this.closest(".richtlijnen").parentElement.id);
    });
});

checkboxesRobuust.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
        changeProgression(checkbox, this.closest(".richtlijnen").parentElement.id);
    });
});

function changeProgression(checkbox, principe) {
    var progression = checkbox.closest('.richtlijnen').querySelectorAll('input[type=checkbox]:checked').length;
    
    if(principe === "waarneembaar") {
        document.getElementById("waarneembaar-progressie-balk").value = progression;
        document.getElementById("waarneembaar-progressie").innerHTML = progression;
    }

    if(principe === "bedienbaar") {
        document.getElementById("bedienbaar-progressie-balk").value = progression;
        document.getElementById("bedienbaar-progressie").innerHTML = progression;
    }

    if(principe === "begrijpelijk") {
        document.getElementById("begrijpelijk-progressie-balk").value = progression;
        document.getElementById("begrijpelijk-progressie").innerHTML = progression;
    }

    if(principe === "robuust") {
        document.getElementById("robuust-progressie-balk").value = progression;
        document.getElementById("robuust-progressie").innerHTML = progression;
    }
    
    console.log(principe, progression);
}