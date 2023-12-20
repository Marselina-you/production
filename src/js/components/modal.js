const btnLogin = document.querySelectorAll('.btn-login');
const modalOverlay = document.querySelector('.modal-login-overlay ');
const modalLogin = document.querySelectorAll('.modal-login');

const btnCart = document.querySelectorAll('.btn-cart');
const modalOverlayCart = document.querySelector('.modal-cart-overlay ');
const modalsCart = document.querySelectorAll('.modal-cart');

console.log(btnLogin)

btnLogin.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modalLogin.forEach((el) => {
			el.classList.remove('modal-login--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal-login--visible');
		modalOverlay.classList.add('modal-login-overlay--visible');
	});
});
modalOverlay.addEventListener('click', (e) => {


	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal-login-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal-login--visible');
		});
	}
});

btnCart.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modalsCart.forEach((el) => {
			el.classList.remove('modal-cart--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal-cart--visible');
		modalOverlayCart.classList.add('modal-cart-overlay--visible');
	});
});

modalOverlayCart.addEventListener('click', (e) => {


	if (e.target == modalOverlayCart) {
		modalOverlayCart.classList.remove('modal-cart-overlay--visible');
		modalsCart.forEach((el) => {
			el.classList.remove('modal-cart--visible');
		});
	}
});

