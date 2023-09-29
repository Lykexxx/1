document.addEventListener('DOMContentLoaded', function() {
  const content = document.querySelector('.count-display');
  const btn = document.querySelector('.btn');
  
  
  function onClick() {
    let plus = parseInt(content.textContent);
    content.textContent = plus + 1 + " раз";
    
  }
  
  btn.addEventListener('click', onClick)
})
