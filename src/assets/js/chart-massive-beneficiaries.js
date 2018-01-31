
if( document.getElementById("chartMassiveBeneficiaries") ) {
	let ctxMassiveBeneficiaries = document.getElementById("chartMassiveBeneficiaries");
	let $tableMassiveBeneficiaries = $( '#chartMassiveTable' );
	let $tabsChartActiveMassiveBeneficiaries = $( '.tabs-chart-massive-beneficiaries' ); 

	let dataMassiveBeneficiaries = {
		labelsEdit: true,
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
						label: 'Relación',
						value: 'Conyugue'
					},
					{
						type: 'number',
						label: 'RUT',
						value: '+56 966 554 644'
					},
					{
						type: 'date',
						label: 'Fecha de Nacimiento',
						value: '31/12/0000'
					},
					{
						type: 'select',
						label: 'Genero',
						value: 'M'
					},
					{
						type: 'number',
						label: '% de Asignación para Pago',
						value: '50'
					},
					{
						type: 'number',
						label: 'Teléfono',
						value: '50487478'
					},
					{
						type: 'text',
						label: 'Dirección',
						value: 'Monseñor Escribá de Balaguer'
					},
					{
						type: 'text',
						label: 'Correo electrónico',
						value: 'daniel.llanos58@gmail.com'
					}
				]
			},
			
			{
				row: [
					{
						type: 'text',
						value: 'Maria Francisca Llanos Risopatrón'
					},
					{
						type: 'text',
						label: 'Relación',
						value: 'Hija'
					},
					{
						type: 'number',
						label: 'RUT',
						value: '+56 966 554 644'
					},
					{
						type: 'date',
						label: 'Fecha de Nacimiento',
						value: '31/12/0000'
					},
					{
						type: 'select',
						label: 'Genero',
						value: 'M'
					},
					{
						type: 'number',
						label: '% de Asignación para Pago',
						value: '50'
					},
					{
						type: 'number',
						label: 'Teléfono',
						value: '50487478'
					},
					{
						type: 'text',
						label: 'Dirección',
						value: 'Monseñor Escribá de Balaguer'
					},
					{
						type: 'text',
						label: 'Correo electrónico',
						value: 'daniel.llanos58@gmail.com'
					}
				]
			},
			
			{
				row: [
					{
						type: 'text',
						value: 'Felipe Martin Llanos Risopatrón'
					},
					{
						type: 'text',
						label: 'Relación',
						value: 'Hijo'
					},
					{
						type: 'number',
						label: 'RUT',
						value: '+56 966 554 644'
					},
					{
						type: 'date',
						label: 'Fecha de Nacimiento',
						value: '31/12/0000'
					},
					{
						type: 'select',
						label: 'Genero',
						value: 'F'
					},
					{
						type: 'number',
						label: '% de Asignación para Pago',
						value: '50'
					},
					{
						type: 'number',
						label: 'Teléfono',
						value: '50487478'
					},
					{
						type: 'text',
						label: 'Dirección',
						value: 'Monseñor Escribá de Balaguer'
					},
					{
						type: 'text',
						label: 'Correo electrónico',
						value: 'daniel.llanos58@gmail.com'
					}
				]
			},
			
			{
				row: [
					{
						type: 'text',
						value: 'Maria Silva Lopez Llanos'
					},
					{
						type: 'text',
						label: 'Relación',
						value: 'Nieta'
					},
					{
						type: 'number',
						label: 'RUT',
						value: '+56 966 554 644'
					},
					{
						type: 'date',
						label: 'Fecha de Nacimiento',
						value: '31/12/0000'
					},
					{
						type: 'select',
						label: 'Genero',
						value: 'F'
					},
					{
						type: 'number',
						label: '% de Asignación para Pago',
						value: '50'
					},
					{
						type: 'number',
						label: 'Teléfono',
						value: '50487478'
					},
					{
						type: 'text',
						label: 'Dirección',
						value: 'Monseñor Escribá de Balaguer'
					},
					{
						type: 'text',
						label: 'Correo electrónico',
						value: 'daniel.llanos58@gmail.com'
					}
				]
			},

			{
				row: [
					{
						type: 'text',
						value: 'martin'
					},
					{
						type: 'text',
						label: 'Relación',
						value: 'Nieta'
					},
					{
						type: 'number',
						label: 'RUT',
						value: '+56 966 554 644'
					},
					{
						type: 'date',
						label: 'Fecha de Nacimiento',
						value: '31/12/0000'
					},
					{
						type: 'select',
						label: 'Genero',
						value: 'F'
					},
					{
						type: 'number',
						label: '% de Asignación para Pago',
						value: '50'
					},
					{
						type: 'number',
						label: 'Teléfono',
						value: '50487478'
					},
					{
						type: 'text',
						label: 'Dirección',
						value: 'Monseñor Escribá de Balaguer'
					},
					{
						type: 'text',
						label: 'Correo electrónico',
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

	chartFn( dataMassiveBeneficiaries, ctxMassiveBeneficiaries, $tableMassiveBeneficiaries, $tabsChartActiveMassiveBeneficiaries );

}