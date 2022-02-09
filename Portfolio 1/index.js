$(document).ready(function(e){
	$win =$(window);
	$navbar =$('#header');
	$toggle =$('toggle-button');
	var width =$navbar.width();
	toggle_onlick($win,$navbar,width);

	//resize event
	$win.resize(function(){
		toggle_onlick($win,$navbar,width);
		});

});

function toggle_onclick($win,$navbar,width){
	if ($win.width()<=768){
		$navbar.css({left:`-${width}px`});
	}else{
		$navbar.css({left:'0px'});
	}
}


var typed = new Typed('#typed',{
	strings:[

		'Amirah Farzanah',
		],
		typeSpeed: 40,
		backSpeed: 50,
		loop: true
	});

var typed_2 = new Typed('#typed_2',{
	strings:[

		'student UITM',
		],
		typeSpeed: 50,
		backSpeed: 50,
		loop: true
	});
