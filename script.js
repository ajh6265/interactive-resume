var bg = document.getElementById("test");
prevScrollPos = bg.scrollTop;

var character = document.getElementById("character");
var space_char = document.getElementById("space-annie");
var skater = document.getElementById("skater");
var sail_char = document.getElementById("sail-annie");
var winter_char = document.getElementById("winter-annie");
var surfer = document.getElementById("surfer");
var boat = document.getElementById("boat");
function walk() {

    if (bg.scrollTop < 4100) {
        boat.style.visibility = "visible";
        boat.style.left = "73%";

        character.style.visibility = "visible";
        space_char.style.visibility = "hidden";
        sail_char.style.visibility = "hidden";
        skater.style.visibility = "hidden";
        winter_char.style.visibility = "hidden";
        surfer.style.visibility = "hidden";
    }
    else if (bg.scrollTop >= 11400 && bg.scrollTop <= 13000){
        boat.style.visibility = "visible";
        boat.style.left = "73%";

        character.style.visibility = "hidden";
        space_char.style.visibility = "hidden";
        sail_char.style.visibility = "hidden";
        skater.style.visibility = "hidden";
        winter_char.style.visibility = "hidden";
        surfer.style.visibility = "visible";
    }
    else if (bg.scrollTop > 16500){
        boat.style.visibility = "visible";
        boat.style.left = "92%";

        character.style.visibility = "hidden";
        space_char.style.visibility = "hidden";
        sail_char.style.visibility = "hidden";
        skater.style.visibility = "hidden";
        winter_char.style.visibility = "visible";
        surfer.style.visibility = "hidden";
    }
    else if (bg.scrollTop > 13000) {
        boat.style.visibility = "hidden";
        boat.style.left = "73%";

        character.style.visibility = "hidden";
        space_char.style.visibility = "hidden";
        sail_char.style.visibility = "visible";
        skater.style.visibility = "hidden";
        winter_char.style.visibility = "hidden";
        surfer.style.visibility = "hidden";
    }
    else if (bg.scrollTop > 9000) {
        boat.style.visibility = "visible";
        boat.style.left = "73%";

        character.style.visibility = "hidden";
        space_char.style.visibility = "hidden";
        sail_char.style.visibility = "hidden";
        skater.style.visibility = "visible";
        winter_char.style.visibility = "hidden";
        surfer.style.visibility = "hidden";
    }
    else if (bg.scrollTop > 4100) {
        boat.style.visibility = "visible";
        boat.style.left = "73%";
        
        character.style.visibility = "hidden";
        space_char.style.visibility = "visible";
        sail_char.style.visibility = "hidden";
        skater.style.visibility = "hidden";
        winter_char.style.visibility = "hidden";
        surfer.style.visibility = "hidden";
    }

    if (prevScrollPos > bg.scrollTop) {
        if (character.classList != "animate_walk_bw"){ /* too many clicks */
            character.classList.add("animate_walk_bw");
            surfer.classList.add("animate_surf_bw");
        }
        setTimeout(function(){
            character.classList.remove("animate_walk_bw");
            surfer.classList.remove("animate_surf_bw");
        },500);
        character.style.backgroundImage = "url('annie_stand_bw.png')";
        skater.style.backgroundImage = "url('skater_bw.png')";
        surfer.style.backgroundImage = "url('surfer_bw.png')";
    }
    else {
        if (character.classList != "animate_walk"){ /* too many clicks */
            character.classList.add("animate_walk");
            surfer.classList.add("animate_surf");
        }
        setTimeout(function(){
            character.classList.remove("animate_walk");
            surfer.classList.remove("animate_surf");
        },500);
        character.style.backgroundImage = "url('annie_stand.png')";
        skater.style.backgroundImage = "url('skater.png')";
        surfer.style.backgroundImage = "url('surfer.png')";
    }

    prevScrollPos = bg.scrollTop;
}
function jump(){
    if (character.classList != "animate_jump"){ /* too many clicks */
        character.classList.add("animate_jump");
    }
    setTimeout(function(){
        character.classList.remove("animate_jump");
    },500);
}
