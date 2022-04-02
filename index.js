
const send = document.getElementById('sendEmail');


let navbar = document.querySelector('.navbar');
document.querySelector('#bar').onclick=() => {
    navbar.classList.toggle('active')
};

var swiper = new Swiper(".product-row", {
    spaceBetween: 30,
    loop: true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
 
  

const sendEmail = () => {

  (function() {
    emailjs.init("EgAtdRBmPQD3W-1QM");
    })();

  let tempParams =  {
    from_name: document.getElementById('email').value,
    to_name: document.getElementById('name').value,
    message: document.getElementById('message').value,
    phone: document.getElementById('phone').value
  };

  emailjs.send('service_uj58kil' , 'template_9rdz7jj',tempParams)
    .then( (res) => {
      console.log("succes",res.status)
    } )
}

send.addEventListener('click' , sendEmail())