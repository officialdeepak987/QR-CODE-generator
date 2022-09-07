
// Social Share Links:

const telegram = document.querySelector(".telegram");
const twitter = document.querySelector(".twitter");


const whatsapp = document.querySelector(".whatsapp");

const pageUrl =location.href
const massage ='This is an awesome QR Code genrator,use and send the message secure to any one. '
const whatsappApi= `https://wa.me/?text=${pageUrl}.${massage}`;
const twitterApi= ` https://twitter.com/intent/tweet?text=${pageUrl}.${massage}`
const telegramApi= ` https://t.me/share/url?url=${pageUrl}.${massage}`;

whatsapp.addEventListener('click',()=>{
    window.open(url=whatsappApi ,target='blank')
})

twitter.addEventListener('click',()=>{
    window.open(url=twitterApi ,target='blank')
})

telegram.addEventListener('click',()=>{
    window.open(url=telegramApi ,target='blank')
})