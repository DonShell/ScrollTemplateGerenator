

function gerarEstrutura()
{
	template = new ScrollTemplate(["#a7badb","#262626","#bf9e9e","#4a2a2a"]);
	// template.start();

	$("#page1").append("<div id='title'> myClinic </div>")
	template.generateButtonPages();

	carrossel = new Carrossel("#page1",new CoordinateHTML("100%","60%"),3);


}





gerarEstrutura();
