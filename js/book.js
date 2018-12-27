let Bookna = '';
let Booksubtitle = '';
let Author = '';
let Backgroundcolor = '';
let Publisher = '';
let PublishingYear = '';



console.log();


document.getElementById("submit-butt").addEventListener("click",function(e){
    e.preventDefault();
    Bookna = document.getElementById('Book title').value ;
    Booksubtitle = document.getElementById('Book subtitle').value ;
    Author = document.getElementById('Author name').value ;
    Backgroundcolor = document.getElementById('Background Color').value ;
    Publisher = document.getElementById('Publisher').value ;
    Publishingyear = document.getElementById('Publishing year').value ;
    if (Bookna === ""){
        alert("Please Enter a website name");
     }
      else
     {
       show(Bookna,Booksubtitle,Author,Backgroundcolor,
        Publisher,Publishingyear);
     }
})



function show(input1,input2,input3,input4,input5,input6){
    let booktit= document.createElement('p');
    booktit.textContent = input1;
    document.getElementById('Book Title').appendChild(booktit);
    //********************************* */
    let booksub= document.createElement('p');
    booksub.textContent = input2;
    document.getElementById('Book Subtitle').appendChild(booksub);
    //******************************* */
    let author= document.createElement('p');
    author.textContent = input3;
    document.getElementById('Author').appendChild(author);
    //******************************* */
    let backgroundcol= document.createElement('p');
    backgroundcol.textContent = input4;
    document.getElementById('Background color').appendChild(backgroundcol);
    //******************************* */
    let publish= document.createElement('p');
    publish.textContent = input5;
    document.getElementById('Publisher1').appendChild(publish);
    //******************************* */
    let publishyear= document.createElement('p');
    publishyear.textContent = input6;
    document.getElementById('Publishing Year').appendChild(publishyear);
    //******************************* */
}