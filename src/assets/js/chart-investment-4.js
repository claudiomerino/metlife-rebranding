
	if( document.getElementById("chartInvestment4") ) {
		let ctxInvestment = document.getElementById("chartInvestment4");
		let $tableInvestment = $( '#chartInvestmentTable4' );
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
					"#0e4678",
					"#e67f48",
					"#947bba"
				]
			}]
		};

		chartFn( dataInvestment, ctxInvestment, $tableInvestment, $tabsChartActiveInvestment );
	}