var ugh1 = [['Iowa',30,true],['New Hampshire',23,true],['South Carolina',50,true],['Nevada',30,true],['Alabama',50,true],['Alaska',28,true],['Arkansas',40,true],['Colorado',37,true],['Georgia',76,true],['Massachusetts',42,true],['Minnesota',38,true],['North Dakota',28,true],['Oklahoma',43,true],['Tennessee',58,true],['Texas',155,true],['Vermont',16,true],['Virginia',49,true],['Wyoming',29,true],['Kansas',40,true],['Kentucky',46,true],['Louisiana',46,true],['Maine',23,true],['Puerto Rico',23,true],['Hawaii',19,true],['Idaho',32,true],['Michigan',59,true],['Mississippi',40,true],['Washington, DC',19,true],['Florida',99,true],['Illinois',69,true],['Missouri',52,true],['North Carolina',72,true],['Ohio',66,true],['Arizona',58,false],['Utah',40,false],['Wisconsin',42,false],['New York',95,false],['Connecticut',28,false],['Delaware',16,false],['Maryland',38,false],['Pennsylvania',71,false],['Rhode Island',19,false],['Indiana',57,false],['Nebraska',36,false],['West Virginia',34,false],['Oregon',28,false],['Washington',44,false],['California',172,false],['Montana',27,false],['New Jersey',51,false],['New Mexico',24,false],['South Dakota',29,false]];

var ugh2 = [['Iowa',52,true],['New Hampshire',32,true],['South Carolina',59,true],['Nevada',43,true],['Alabama',60,true],['Alaska',20,false],['Arkansas',37,true],['Colorado',78,true],['Georgia',117,true],['Massachusetts',116,true],['Minnesota',93,true],['North Dakota',23,false],['Oklahoma',42,true],['Tennessee',75,true],['Texas',251,true],['Vermont',26,true],['Virginia',109,true],['Wyoming',18,false],['Kansas',37,true],['Kentucky',60,false],['Louisiana',59,true],['Maine',30,true],['Puerto Rico',67,false],['Hawaii',35,false],['Idaho',32,true],['Michigan',147,true],['Mississippi',41,true],['Washington, DC',46,false],['Florida',246,true],['Illinois',182,true],['Missouri',84,true],['North Carolina',121,true],['Ohio',160,true],['Arizona',85,false],['Utah',37,false],['Wisconsin',96,false],['New York',291,false],['Connecticut',71,false],['Delaware',31,false],['Maryland',118,false],['Pennsylvania',210,false],['Rhode Island',33,false],['Indiana',92,false],['Nebraska',30,true],['West Virginia',37,false],['Oregon',74,false],['Washington',118,false],['California',548,false],['Montana',27,false],['New Jersey',142,false],['New Mexico',43,false],['South Dakota',25,false]];

var switch = false;

var width_max = window.innerWidth;

var the_other_ugh = the_other_ugh function(){
    var scale = d3.scale.linear().range([0,width_max]);

    d3.select(".chart")
	.data(function(e){
	    if (switch){
		return ugh1;
	    }else{
		return ugh2;
	    }
	})
	.enter()
	.append("div")
	.transition()
	.duration(1000)
	.style("width", function(e){return scale(e[1]) + "px";})
	.style("background-color",function(e){
	    if(switch){
		return "red";
	    }else{
		return "blue";
	    }
	})
	.text(function(e){return e[0] + "||Delegates: " + d[1];});
    
