
	if( document.getElementById("chartContingentes") ) {
		let ctx = document.getElementById("chartContingentes");
		let $table = $( '#chartTableContingentes' );
		let $tabsChartActiveBeneficiaries = $( '.tabs-chart-beneficiaries' );

		let data = {

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
							value: 'Esperanza del Carmen Risopatrón Goycochea'
						},
						{
							label: 'Relación',
							value: 'Conyugue'
						},
						{
							label: 'Dirección',
							value: 'Monseñor Escribá de Balaguer'
						},
						{
							label: 'Teléfono',
							value: '+56 966 554 644'
						},
						{
							label: 'Email',
							value: 'daniel.llanos58@gmail.com'
						}
					]
				},
				{
					row: [
						{
							value: 'Maria Francisca Llanos Risopatrón'
						},
						{
							label: 'Relación',
							value: 'Hija'
						},
						{
							label: 'Dirección',
							value: 'Monseñor Escribá de Balaguer'
						},
						{
							label: 'Teléfono',
							value: '+56 966 554 644'
						},
						{
							label: 'Email',
							value: 'daniel.llanos58@gmail.com'
						}
					]
				},
				{
					row: [
						{
							value: 'Felipe Martin Llanos Risopatrón'
						},
						{
							label: 'Relación',
							value: 'Hijo'
						},
						{
							label: 'Dirección',
							value: 'Monseñor Escribá de Balaguer'
						},
						{
							label: 'Teléfono',
							value: '+56 966 554 644'
						},
						{
							label: 'Email',
							value: 'daniel.llanos58@gmail.com'
						}
					]
				},
				{
					row: [
						{
							value: 'Maria Silva Lopez Llanos'
						},
						{
							label: 'Relación',
							value: 'Nieta'
						},
						{
							label: 'Dirección',
							value: 'Monseñor Escribá de Balaguer'
						},
						{
							label: 'Teléfono',
							value: '+56 966 554 644'
						},
						{
							label: 'Email',
							value: 'daniel.llanos58@gmail.com'
						}
					]
				},
				{
					row: [
						{
							value: 'Martin'
						},
						{
							label: 'Relación',
							value: 'Nieta'
						},
						{
							label: 'Dirección',
							value: 'Monseñor Escribá de Balaguer'
						},
						{
							label: 'Teléfono',
							value: '+56 966 554 644'
						},
						{
							label: 'Email',
							value: 'daniel.llanos58@gmail.com'
						}
					]
				}

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

		chartFn( data, ctx, $table, $tabsChartActiveBeneficiaries );

	}