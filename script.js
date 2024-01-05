'use strict';

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// this does not work through a proxy
// navigator.geolocation.getCurrentPosition(
// 	// success callback
// 	function (position) {
// 		// console.log(position);
// 		const { latitude, longitude } = position.coords;
// 		console.log(latitude, longitude);
// 	},
// 	// failure callback
// 	function () {
// 		alert('Could not get your location coordinates!');
// 		throw new Error('App quit because location could not be found');
// 	}
// );

// Directly proceeding with stuff here,
// all of this should continue in the success callback above
const coords = [19.2793888, 72.860704]; // obtained from Google map
const [latitude, longitude] = coords;

// 'map' is the class of the div in HTML where the map will be rendered
const map = L.map('map').setView(coords, 13); // 13 is the zoom level

L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker(coords).addTo(map).bindPopup('A pretty CSS popup.<br> Easily customizable.').openPopup();
