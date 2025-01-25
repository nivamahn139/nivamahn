document.getElementById('yes-button').addEventListener('click',()=>{
    showModal();
    setTimeout(() => {
        window.location.href ='nextpage.html'
    })
});
document.getElementById('no-button').addEventListener('mouseenter',()=>{
    const button = document.getElementById('no-button');
    const randomX = Math.ramdom() * (window.innerWidth-button.offsetWidth);
    const randomY = Math.random() * (window.innerHeight-button.offsetHeight);
    button.style.position ='absolute';
    button.style.left = `${randomX}px`;
    button.style.right = `${randomY}px`
});

function showModal(){
   const modal = document.createElement('div');
   modal.classList.add('modal');

   const modalContent = document.createElement('div');
   modalContent.classList.add('modal-content');
   modalContent.innerHTML = `<h2> Yay! </h2>`;

   modal.appendChild(modalContent);

   document.body.appendChild(modal);
}
