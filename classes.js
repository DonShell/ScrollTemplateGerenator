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
			$(this.bodyId).append("<div id='screen"+i+"'></div>");
			let page = this.bodyId + " #screen"+ i;
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
	};
}