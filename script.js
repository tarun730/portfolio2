const slides=document.getElementsByClassName("projectItem")
const Seemore=document.getElementById("Seemore")
const explist=document.getElementById("explist")
const skill=document.getElementById("skill")
const project=document.getElementById("All_project")
// const Pname= document.getElementById("Name")
// const PDescription= document.getElementById("Description")
// const PTech_Stack= document.getElementById("Tech_Stack")

// var Data
// console.log(skill)
async function data(){
 const res= await fetch('/data.json')
 const data= await res.json()
 console.log(data)
 return data
}
// data()
 async function getSkill() {
    let {Skill,experience}= await data()
    let Skills=""
for (const [index,i] of Skill.entries()) {
    Skills+=` <div class="box">
    <img src="${i.img_src}" alt="" srcset="">
</div>`
skill.innerHTML=Skills
}
experience.length==0?document.getElementById("EXPERIENCE").style.display="none":null
}
skill && getSkill()
async function foo(){
    let {projects}= await data()
    // console.log(projects)
  let html=""
    for (const [index,i] of projects.entries()) {
        // console.log(i.Name)
        
        html += `
        <div id="project">
         <h2 id="Name">${index+1}. ${i.Name}</h2>
        <ul>
        <li id="Description">${i.Description}</li>      
        </ul>
        
        <p>tech stack: <span id="Tech_Stack">${i.Tech_Stack}</span></p>
        <span class="code_live"> <a href="${i.Code_URL}">code</a> <a href="${i.Live_URL}">live</a> </span>
       
        </div>
        `
      
        project==null?null:project.innerHTML= html
    //   project.innerHTML= html

}


}
// Seemore.addEventListener("onclick",foo())
foo()






async function getExprience(){
    let {experience}= await data()
    let experiences=""
    for (const [index,i] of experience.entries()) {
        
        

    experiences+=` 
       <div class="institite-name">
                <h2>${i.company_name}<h5>${i.role}</h5></h2>
                <p>${i.decription}</p>
            </div>
       
    
    `
    explist.innerHTML=experiences
}
}
explist && getExprience()
//  let config= data()
//  console.log(config)
// .then(res=>res.json())
// .then(data=>{ let Data=data
    
// })
// console.log(Data)    

 
    