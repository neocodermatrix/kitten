angular
	.module("kittyApp")
	.controller("KittyController", kittyController);

	function kittyController(){

		this.kittyList = 
[
		{
			catName: 'Karl',
			monthsOld: 5,
			gender: 'boy',
			image: "images/carl.png",
			adopted: false,
		},
		{
			catName: 'Jack',
			monthsOld: 4,
			gender: 'boy',
			image: "images/jack.png",
			adopted: false,
		},
		{
			catName: 'Oscar',
			monthsOld: 2,
			gender: 'boy',
			image: "images/oscar.png",
			adopted: false
		},
		{
			catName: 'Princess Mew',
			monthsOld: 3,
			gender: 'girl',
			image: "images/princessmew.png",
			adopted: false
		}

	]
}