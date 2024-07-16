const containerELEMENT = document.querySelector(".container")
const bodyELEMENT = document.querySelector("body")

const careers = ["Youtuber" , "AI Student" , "Web Developer" , "Instructor"]

let careers_index = 0;

let charchter_index = 0;

update_careers()
function update_careers(){
    charchter_index++;
    containerELEMENT.innerHTML = `
    <h1>I am ${careers[careers_index].slice(0,1)=== "I" || careers[careers_index].slice(0,1)==="A" ? "an" :"a"} ${careers[careers_index].slice(0,charchter_index)} </h1>
`


if(charchter_index === careers[careers_index].length){
    careers_index++;
    charchter_index = 0;
}
if(careers_index === careers.length){
    careers_index = 0 ;
}
setTimeout(update_careers,300)
}
