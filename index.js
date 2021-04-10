var ul=document.getElementById('list')
let index=0;





let Events=[

{
        desktop:"family-gathering-desktop.jpg",
        mobile:"family-gathering-mobile.jpg",
        name:"Family Gathering",
}

,

{
    desktop:"social-events-desktop.jpg",
        mobile:"social-events-mobile.jpg",
    name:"Social Events",
}

,
{
    desktop:"special-events-desktop.jpg",
    mobile:"special-events-mobile.jpg",
    name:"Special Events",
}



]


function changeImg(id){
    document.getElementById('pic').animate([
        // keyframes
        { opacity: '0' },
        { opacity: '0.5' },
        { opacity: '1' },
        ], {
        // timing options
        duration: 1500,
        iterations: 1
      });

    let img=`
<picture>
<source media="(max-width: 799px)" srcset="./images/homepage/${Events[id].mobile}">
<source media="(min-width: 800px)" srcset="./images/homepage/${Events[id].desktop}">
<img src="./images/homepage/${Events[id].desktop}" alt="salmon">
</picture>
`
document.getElementById('pic').innerHTML=img;

}




setInterval(() => {
if(index<Events.length){
console.log(index)
changeImg(index)
toggle(`event${index+1}`)
    index++
}else{
   
    index=0;


}
}, 2000);

let list='';

Events.forEach((event,index) => {

    list += `
    <li id="event${index+1}" onclick="toggle('event${index+1}')"  data-index="${index}"  >${event.name}</li>

    `


})


function toggle(id){
    for (let i = 0; i < ul.children.length; i++) {
        const element = ul.children[i];
        element.classList.remove('active')

    }
    var ele=document.getElementById(id)
    ele.classList.toggle('active')


    let index=ele.dataset.index;
    changeImg(index)

}

ul.innerHTML=list;
ul.children[0].classList.add('active')



