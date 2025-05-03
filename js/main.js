$(function () {
	$(".fade").slick({
		dots: false,
		infinite: true,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		speed: 500,
		fade: true,
		slide: "div",
		cssEase: "linear"
	});
});


function submitForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const file = document.getElementById('input__file').value;

}


























