document.querySelector(`form`).addEventListener(`submit`, checkGrade);

// const myGrade =90;
// const jrop = 16;
// const rental = 25;

function checkGrade(e) {
     e.preventDefault();

    let myGrade = document.querySelector(`input`).value;

     let message =`<ul>`;

    console.log(`RUNNING ...`+myGrade);

if (myGrade > 90) {
    message += `<li>you can have a A</li>`;
}

if (myGrade >= 80 && myGrade < 90 ){
    message += `<li>you can have a B</li>`;
}

if (myGrade >=70 && myGrade < 80 ) {
    message += `<li>you can have a C</li>`;
}

if (myGrade >=60 && myGrade < 70 ) {
    message += `<li>you can have a D</li>`;
}

if (myGrade < 60) {
    message += `<li>you can have a F</li>`;
  }
  message += `</ul>`
  document.querySelector(`#output`).innerHTML= message;
}