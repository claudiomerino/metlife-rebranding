
if( document.getElementById("chartMassiveBeneficiaries") ) {
	let ctxMassiveBeneficiaries = document.getElementById("chartMassiveBeneficiaries");
	let $tableMassiveBeneficiaries = $( '#chartMassiveTable' );
	let $tabsChartActiveMassiveBeneficiaries = $( '.tabs-chart-massive-beneficiaries' ); 

	let dataMassiveBeneficiaries = {
		labels: [
			"Esperanza del Carmen Risopatrón Goycochea",
			"Maria Francisca Llanos Risopatrón",
			"Felipe Martin Llanos Risopatrón",
			"Maria Silva Lopez Llanos",
			"martin"
		],
		relation: [
			"Conyugue",
			"Hija",
			"Hijo",
			"Nieta",
			"nieta"
		],
		rut: [
		  "45984522-2",
		  "45984522-2",
		  "45984522-2",
		  "45984522-2"
		],
		birthdate: [
		  "00/00/0000",
		  "00/00/0000",
		  "00/00/0000",
		  "00/00/0000"
		],
		gender: [
		  "Femenino",
		  "Femenino",
		  "Masculino",
		  "Femenino"
		],		
		assignement: [
		  "50",
		  "50",
		  "50",
		  "50"
		],
		address: [
			"Monseñor Escribá de Balaguer",
			"Monseñor Escribá de Balaguer",
			"Monseñor Escribá de Balaguer",
			"Monseñor Escribá de Balaguer",
			"Monseñor Escribá de Balaguer"
		],
		phone: [
			"+56 966 554 644",
			"+56 966 554 644",
			"+56 966 554 644",
			"+56 966 554 644",
			"+56 966 554 644"
		],
		email: [
			"daniel.llanos58@gmail.com",
			"daniel.llanos58@gmail.com",
			"daniel.llanos58@gmail.com",
			"daniel.llanos58@gmail.com",
			"daniel.llanos58@gmail.com"
		],
    datasets: [{
			data: [
				30,
				20,
				15,
				10,
				25
			],
			backgroundColor: [
				"#0a3c6e",
				"#1fc2a2",
				"#896eb3",
				"#efa020",
				"#348c6f"
			]
		}]
	};

	chartFn( dataMassiveBeneficiaries, ctxMassiveBeneficiaries, $tableMassiveBeneficiaries, $tabsChartActiveMassiveBeneficiaries );

}