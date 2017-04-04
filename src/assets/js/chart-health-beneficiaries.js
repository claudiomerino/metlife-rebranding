

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
					"#0a3c6e",
					"#1fc2a2",
					"#896eb3",
					"#efa020",
					"#348c6f"
				]
			}]
		};

		chartFn( dataHealthBeneficiaries, ctxHealthBeneficiaries, $tableHealthBeneficiaries, $tabsChartActiveHealthBeneficiaries );

	}