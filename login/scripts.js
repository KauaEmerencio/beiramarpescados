document.addEventListener('DOMContentLoaded', function() {
    
    // --- LÓGICA DE LOGIN ---
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            const usuario = document.getElementById('usuario').value;
                        localStorage.setItem('usuarioLogado', usuario);
            window.location.href = "menu/inicio.html"; 
        });
    }
    const submenuLinks = document.querySelectorAll('.menu-item.has-submenu > a');    
    submenuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const parentLi = this.closest('.menu-item');
            if (parentLi.classList.contains('has-submenu')) {
                e.preventDefault();
                parentLi.classList.toggle('expanded');
                
                const toggleIcon = parentLi.querySelector('.submenu-toggle');
                if (toggleIcon) {
                    toggleIcon.classList.toggle('fa-chevron-up');
                    toggleIcon.classList.toggle('fa-chevron-down');
                }
            }
        });
    });
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    if (usuarioLogado) {
        const userNameElement = document.querySelector('.user-name');
        if (userNameElement) {
            userNameElement.textContent = `0001 - ${usuarioLogado.toUpperCase()}`;
        }
    }
});
function fazerLogout() {
    if (confirm('Deseja sair do sistema?')) {
        localStorage.removeItem('usuarioLogado');
        window.location.href = '../index.html';
    }
}