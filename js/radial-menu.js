/* radial menu */
wheel = new wheelnav("wheel");
wheel.slicePathFunction = slicePath().DonutSlice;
wheel.colors = ['#ccc'];
wheel.markerPathFunction = markerPath().PieLineMarker;
wheel.markerEnable = false;
//wheel.wheelRadius = 100;
wheel.clickModeRotate = false;
wheel.titleHeight = 100;
wheel.sliceAngle = 29.5;
//wheel.navigateWheel(0);
wheel.createWheel(
	[
		"imgsrc:img/knife.png",
		"imgsrc:img/canteen.png",
		"imgsrc:img/mess-kit-pouch.png",
		"imgsrc:img/sig-p229.png",
		"imgsrc:img/grenate-m67.png",
		"imgsrc:img/first-aid-kit.png",
		"imgsrc:img/shovel.png",
		"imgsrc:img/poncho.png",
		"imgsrc:img/paracord.png",
		"imgsrc:img/hk416.png",
		"imgsrc:img/whistle.png",
		"imgsrc:img/flashlight.png",
	]
);

wheel.navItems[0].navigateFunction = function () { alert('Hello wheel!'); };