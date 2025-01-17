// menuBar.js
export function setupNavbar() {
    const navbar = document.querySelector('.navbar');
    const btn = document.querySelector('.btn');
    let open = true;
    btn.addEventListener('click', () => {
        if (open){
            navbar.style.display = 'none';
            open = false;
        }
        else {
            navbar.style.display = 'block';
             open = true;
        }
    });
}
