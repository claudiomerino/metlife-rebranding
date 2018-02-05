
if( document.getElementById("chartBeneficiariesDuplicated") ) {
	let ctxBeneficiariesDuplicated = document.getElementById("chartBeneficiariesDuplicated");
	let $tableBeneficiariesDuplicated = $( '#chartDuplicatedTable' );
	let $tabsChartActiveBeneficiariesDuplicated = $( '.tabs-chart-duplicated-beneficiaries' );

		let dataBeneficiariesDuplicated = {
			labelsEdit: false,
			labels: [
				"Esperanza del Carmen Risopatrón Goycochea",
				"Maria Francisca Llanos Risopatrón",
				"Felipe Martin Llanos Risopatrón",
				"Maria Silva Lopez Llanos",
				"martin"
			],
			fields: [
				{
					row: [
						{
							type: 'text',
							value: 'Esperanza del Carmen Risopatrón Goycochea'
						},
						{
							type: 'text',
							label: 'Cobertura',
							value: 'Fractura Accidental de Huesos'
						},
						{
							type: 'number',
							label: '% de Asignación para Pago',
							value: '33%'
						}
					]
				},

				{
					row: [
						{
							type: 'text',
							value: 'Esperanza del Carmen Risopatrón Goycochea'
						},
						{
							type: 'text',
							label: 'Cobertura',
							value: 'Fractura Accidental de Huesos'
						},
						{
							type: 'number',
							label: '% de Asignación para Pago',
							value: '33%'
						}
					]
				},

				{
					row: [
						{
							type: 'text',
							value: 'Esperanza del Carmen Risopatrón Goycochea'
						},
						{
							type: 'text',
							label: 'Cobertura',
							value: 'Fractura Accidental de Huesos'
						},
						{
							type: 'number',
							label: '% de Asignación para Pago',
							value: '33%'
						}
					]
				}
			],
	    datasets: [{
				data: [
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


	chartFn( dataBeneficiariesDuplicated, ctxBeneficiariesDuplicated, $tableBeneficiariesDuplicated, $tabsChartActiveBeneficiariesDuplicated );

}