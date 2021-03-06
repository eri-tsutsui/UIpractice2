'use strict';

// 目標:ハンバーガーメニュー

{
	const icon = document.querySelector('.menuIcon');
	const bars = document.querySelectorAll('.menuIconBar');

	icon.addEventListener('click', () => {
		bars.forEach(bar => {
			bar.classList.toggle('active');
		});
	});

	icon.addEventListener('mouseenter', () => {
		bars.forEach(bar => {
			bar.classList.add('hoverable');
		});
	});

	icon.addEventListener('mouseleave', () => {
		bars.forEach(bar => {
			bar.classList.remove('hoverable');
		});
	});
}