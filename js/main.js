AOS.init({
    duration: 2000,
    easing: "ease-in-out-back"
  });

  var nav = document.querySelector('.navigation');
window.addEventListener('scroll', function(){
    var position = window.scrollY > 100;
    nav.classList.toggle('active', position);
});


// getting all buttons
var tabbutton = document.querySelectorAll('.tab-btn');
// getting all contents
var tabcontents = document.querySelectorAll('.content');

// defining main function
tabbutton.forEach((tab, index) =>{

    // button add active and remove active function
    tab.addEventListener("click", ()=>{
        tabbutton.forEach(tab =>{
            tab.classList.remove('active')
        });
        tab.classList.add('active');

        // button add active and remove active function
        tabcontents.forEach(content =>{
            content.classList.remove('active')
        });
        tabcontents[index].classList.add('active');
    })
})
