

	if( document.getElementById("chartHealthBeneficiaries") ) {
		let ctxHealthBeneficiaries = document.getElementById("chartHealthBeneficiaries");
		let $tableHealthBeneficiaries = $( '#chartHealthTable' );
		let $tabsChartActiveHealthBeneficiaries = $( '.tabs-chart-health-beneficiaries' );

		let dataHealthBeneficiaries = {
			labels: [
				"Esperanza del Carmen Risopatrón Goycochea",
				"Maria Francisca Llanos Risopatrón",
				"Felipe Martin Llanos Risopatrón",
				"Maria Silva Lopez Llanos"
			],
			relation: [
				"Conyugue",
				"Hija",
				"Hijo",
				"Nieta"
			],
	    datasets: [{
				data: [
					25,
					25,
					25,
					25
				],
				backgroundColor: [
					"#0e4678",
					"#e67f48",
					"#947bba",
					"#40967b"
				]
			}]
		};

		chartFn( dataHealthBeneficiaries, ctxHealthBeneficiaries, $tableHealthBeneficiaries, $tabsChartActiveHealthBeneficiaries );

	}