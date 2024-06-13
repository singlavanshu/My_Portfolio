var tablinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");
// var tablink,tabcontent;
function opentab(tabname){
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabContents)
    {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
// tablinks.addEventListener('click',opentab);
var sidemenu = document.getElementById("side-menu");
function openmenu()
{
    sidemenu.style.right = "0";
}
function closemenu()
{
    sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwwwkpYeA32pMgnS3d0q_Hz9eGBDwfJUHcceOGQUKdyiYj4wQgqy-p9SqBxSr2IsJzX/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },3000)
    })
    .catch(error => console.error('Error!', error.message))
})