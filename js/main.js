$(document).ready(init);

function init() {
	drawCloud('./data/word.csv', d3.select('#word-cloud'));
	showReel('./data/data_tweet.csv', d3.select('#showReel'));
	checkBoxes('./data/dashboard_data.json', d3.select('#dashboard'));
	drawDash('./data/dashboard_data.json', d3.select('#dashboard'));
	drawHier('./data/hier_bund.json', d3.select('#hier'));
	drawSunburst('./data/tweet_text.csv', "data/color_profile.json", d3.select("#chart"));
	drawTable('data/tweet.csv',d3.select('#table'));
	slide('data/tweet.csv', d3.select('#slider'),d3.select('#table'),d3.select('#sliderText'));
	var stackFiles = {'hashtag':'data/data_tweet_hash.json',
	'source':'data/data_tweet_source.json','mentions':'data/data_tweet_mentions.json'};

	selectStack(stackFiles, d3.select('#horizonGraph svg'));

	var pieFiles = {'hashtag':'data/hashtag.csv',
	                'coordinates':'data/coordinates.csv',
	                'source':'data/source.csv',
	                'user':'data/mention.csv'}	
	selectPie(pieFiles, d3.select('#pie1'));
	$('.placeholders').hide(); 
	$('#plot1').show();

	
	$('#b1').click(function(){
		$('.placeholders').slideUp();
		$('#plot1').slideDown();
	});
	$('#b2').click(function(){
		$('.placeholders').slideUp();
		$('#plot2').slideDown();
	});
	$('#b3').click(function(){
		$('.placeholders').slideUp();
		$('#plot3').slideDown();
	});
	$('#b4').click(function(){
		$('.placeholders').slideUp();
		$('#plot4').slideDown();
	});
	$('#b5').click(function(){
		$('.placeholders').slideUp();
		$('#plot5').slideDown();
	});
	$('#b6').click(function(){
		$('.placeholders').slideUp();
		$('#plot6').slideDown();
	});
	$('#b7').click(function(){
		$('.placeholders').slideUp();
		$('#plot7').slideDown();
	});
	$('#b8').click(function(){
		$('.placeholders').slideUp();
		$('#plot8').slideDown();
	});

	$('#exp').click(function(){
		$('.placeholders').slideDown();
		var doc = new jsPDF();
		var specialElementHandlers = {
    	'#exp': function (element, renderer) {
        	return true;
        }
    };
        doc.fromHTML($('#main').html(), 15, 15, {
        	'width': 170,
            	'elementHandlers': specialElementHandlers
    	});
    	doc.save('Dalhlia.pdf');
	});

	$('.nav-sidebar a').click(function() {
		$('.nav-sidebar a').removeClass('active');
		$(this).addClass('active');
	});
	$(function () {

    var specialElementHandlers = {
        '#editor': function (element,renderer) {
            return true;
        }
    };
});
}


