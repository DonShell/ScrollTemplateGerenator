class Coordinate
{
	x = 0;
	y = 0;

	contructor(){}
	constructor(x,y)
	{
		this.x = x;
		this.y = y;
	}
}
//retirar essa funcao no final do projeto
function sleep(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}

class ScrollTemplate
{
	displaySize = new Coordinate(0,0);
	bodyId = "bodyTemplate";
	numberOfPages = 0;
	
	getDisplaySize()
	{
		this.displaySize.y = $(window).height();
		this.displaySize.x = $(window).width();
	};

	constructor(colorsBackgroundPages)
	{
		this.colorsBackgroundPages = colorsBackgroundPages;
		this.numberOfPages = colorsBackgroundPages.length;
		this.getDisplaySize();
		this.constructBodyTemplate();
		this.show();
	}

	constructBodyTemplate()
	{
		$("body").append("<div id='"+this.bodyId+"'></div>");
		this.bodyId = "#" + this.bodyId;

		$(this.bodyId).hide();
		this.updateBodyTemplate();

	}
	updateBodyTemplate()
	{
		$(this.bodyId).css({
			'position':'absolute',
			'left':'0px',
			'top':'0px',
			'height':(this.displaySize.y * this.numberOfPages) + 'px',
			'width':(this.displaySize.x) + 'px',
			'border':'solid 0px #000'

		});

		this.generatePages();
	}

	generatePages()
	{
		for(let i = 1; i <= this.numberOfPages ; i++)
		{	
			$(this.bodyId).append("<div id='page"+i+"'></div>");
			let page = this.bodyId + " #page"+ i;
			this.setDefaltPageLayout(page, (this.displaySize.y) * (i-1) , this.colorsBackgroundPages[i-1]);
		}
	}

	setDefaltPageLayout(page,topMargin,color)
	{
			$(page).css(
			{
				'position':'absolute',
				'left':'0px',
				'top':topMargin+'px',
				'height':(this.displaySize.y) + 'px',
				'width':(this.displaySize.x) + 'px',
				'background-color':color				
			});

	}


	show()
	{
		$(this.bodyId).show();
		$("#load").fadeOut();
	}



	goToPage(page)
	{
		$("html , body").animate({scrollTop: this.displaySize.y * (page-1)});;
	}



	generateButtonPages()
	{

		for (let i = 1; i <= this.numberOfPages; i++) {
			let index = "#page" + i;

			$(index).append("<div class=navegationButtonConteiner></div>");

			index += " .navegationButtonConteiner";
			if(i != 1)
			{
				$(index).append("<div class='backButton buttonNavegation' onclick='template.goToPage("+ (i-1) +")' style='--aspect-ratio:1/1'></div>");
			}

			if(i != this.numberOfPages)
			{
				$(index).append("<div class='nextButton buttonNavegation' onclick='template.goToPage("+ (i+1) +")' style='--aspect-ratio:1/1'></div>");
			}
		}
	}
}
class Carrossel
{
	numberOfPages;
	fatherId;
	carrosselId = "carrossel";

	constructor(fatherId,size,numberOfPages)
	{
		this.fatherId = fatherId;
		this.numberOfPages = numberOfPages;
		this.size = size;
		$(fatherId).append("<div id=" + this.carrosselId + "></div>")

		this.carrosselId = fatherId + " #carrossel";

		$(this.carrosselId).css({
			'height':this.size.y + this.size.yType,
			'width':this.size.x + this.size.xType,
			'background-color':'#dfdfdf'
		});
		for (var i = 1; i <= numberOfPages; i++) {

			$(this.carrosselId).append("<div id=pageC"+i+" class='pagesCarrossel' style='display:none'></div>")
			
		}
		$(this.carrosselId + " #pageC1").show();
		this.generateButtonPages();
	
	}

	generateButtonPages()
	{
		$(this.carrosselId).append("<div id=nextButton class='buttonNavegationCarrossel'></div>");
		$(this.carrosselId).append("<div id=backButton class='buttonNavegationCarrossel'></div>");
	}

}
class CoordinateHTML
{	
	//use ("10%","50px")
	constructor(x,y)
	{
		if(x.substring(x.length-2) == "px")
		{	
			this.x = parseInt(x.substring(0,x.length-2));
			this.xType = "px";
		} 
		else if (x.substring(x.length-1) == "%")
		{	
			this.x = parseInt(x.substring(0,x.length-1));
			this.xType = "%";
		}


		if(y.substring(y.length-2) == "px")
		{	
			this.y = parseInt(y.substring(0,y.length-2));
			this.yType = "px";
		} 
		else if (y.substring(y.length-1) == "%")
		{	
			this.y = parseInt(y.substring(0,y.length-1));
			this.yType = "%";
		}	
	}

}