//this javascript file was created to measure all the paths' length that i put into stroke-dasharray and stroke-dashoffset in CSS

const path = document.querySelectorAll('#svg855 > path');

for (let i = 0; i < path.length; i++) {
    console.log(path[i].getTotalLength());
}
