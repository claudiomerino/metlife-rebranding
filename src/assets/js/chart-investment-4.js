
	if( document.getElementById("chartInvestment4") ) {
		let ctxInvestment = document.getElementById("chartInvestment4");
		let $tableInvestment = $( '#chartInvestmentTable4' );
		let $tabsChartActiveInvestment = $( '.tabs-chart-investment' );

		let dataInvestment = {
			labels: [
				"Fondo Mutuo Santander Global Emergente Serie Universal",
				"Tasa Fija Garantizada en U.F.",
				"Nombre del Fondo de Inversión con un nombre extremadamente largo",
				"Nombre del Fondo de Inversión con un nombre extremadamente largo",
				"Nombre del Fondo de Inversión con un nombre extremadamente largo",
				"Nombre del Fondo de Inversión con un nombre extremadamente largo",
				"Nombre del Fondo de Inversión con un nombre extremadamente largo",
				"Nombre del Fondo de Inversión con un nombre extremadamente largo",
				"Nombre del Fondo de Inversión con un nombre extremadamente largo",
				"Nombre del Fondo de Inversión con un nombre extremadamente largo"
			],
			relation: [

			],
	    datasets: [{
				data: [
					10,
					10,
					10,
					10,
					10,
					10,
					10,
					10,
					10,
					10

				],
				backgroundColor: [
					"#0a3c6e",
					"#1fc2a2",
					"#896eb3",
					"#efa020",
					"#348c6f",
					"#e57339",
					"#58a5b8",
					"#b0488d",
					"#ccaf37",
					"#5b749e"
				]
			}]
		};

		chartFn( dataInvestment, ctxInvestment, $tableInvestment, $tabsChartActiveInvestment );
	}