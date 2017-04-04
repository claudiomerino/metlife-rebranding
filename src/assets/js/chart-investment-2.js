
	if( document.getElementById("chartInvestment2") ) {
		let ctxInvestment = document.getElementById("chartInvestment2");
		let $tableInvestment = $( '#chartInvestmentTable2' );
		let $tabsChartActiveInvestment = $( '.tabs-chart-investment' );

		let dataInvestment = {
			labels: [
				"Fondo Mutuo Santander Global Emergente Serie Universal",
				"Tasa Fija Garantizada en U.F.",
				"Nombre del Fondo de Inversión con un nombre extremadamente largo"
			],
			relation: [

			],
	    datasets: [{
				data: [
					50,
					35,
					15
				],
				backgroundColor: [
					"#0a3c6e",
					"#1fc2a2",
					"#896eb3"
				]
			}]
		};

		chartFn( dataInvestment, ctxInvestment, $tableInvestment, $tabsChartActiveInvestment );
	}