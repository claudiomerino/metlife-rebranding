
	if( document.getElementById("chartBeneficiaries") ) {
		let ctx = document.getElementById("chartBeneficiaries");
		let $table = $( '#chartTable' );
		let $tabsChartActiveBeneficiaries = $( '.tabs-chart-beneficiaries' );

		let data = {
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

		chartFn( data, ctx, $table, $tabsChartActiveBeneficiaries );

	}