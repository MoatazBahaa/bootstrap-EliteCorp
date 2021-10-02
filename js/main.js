(calcWidth = () => {
  let upperBarH = document.querySelector('.upper-bar'),
    navH = document.querySelector('nav');
  let x = window.innerHeight - (upperBarH.clientHeight + navH.clientHeight) + 'px';
  document.querySelectorAll('.slider .carousel-inner img').forEach(el => {
    el.style.height = x;
  });
})();
window.onresize = calcWidth;
// Featured work shuffle
document.querySelectorAll('.featured-work ul li div').forEach(el => {
  el.addEventListener('click', e => {
    document.querySelector('.featured-work ul li div.active').classList.remove('active');
    el.classList.add('active');
    document.querySelectorAll('.imgs .box').forEach(it => {
      it.style.display = 'none';
    });
    if (el.parentElement.dataset.class === '.all') {
      document.querySelectorAll('.imgs .box').forEach(it => {
        it.style.display = 'block';
      });
    }
    else {
      document.querySelectorAll(el.parentElement.dataset.class).forEach(it => {
        it.style.display = 'block'
      });
    }
  });
});




// triggle animation when element is in view
document.addEventListener('DOMContentLoaded', function()
{
  (function() {
    let elements;
    let windowHeight;
  
    function init() {
      elements = document.querySelectorAll('.hidden');
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
      for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        let positionFromTop = elements[i].getBoundingClientRect().top;
        
        // check if the element is in view
        if (positionFromTop - windowHeight <= -100) {
          if (window.innerWidth >= 991 && element.dataset.ti != null){
            setTimeout(()=>{
              element.classList.add('fade-in-element');
              element.classList.remove('hidden');
            }, Number(element.dataset.ti * 1000));
          }
          else{
            element.classList.add('fade-in-element');
            element.classList.remove('hidden');
          }
        }
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();
  })();

});