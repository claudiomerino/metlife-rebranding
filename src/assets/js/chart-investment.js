
	if( document.getElementById("chartInvestment") ) {
		let ctx = document.getElementById("chartInvestment");

		let dataInvestment = {
			labels: [
				"Fondo Mutuo Santander Global Emergente Serie Universal",
				"Tasa Fija Garantizada en U.F.",
				"Nombre del Fondo de Inversión con un nombre extremadamente largo"
			],
			relation: [
				"Conyugue",
				"Hija",
				"Hijo"
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

		let optionsInvestment = {
			animation: {
				animateScale: true
			},
	    legend: {
	    	display: false
	    }
		}

		let myDoughnutInvestmentChart = new Chart(ctx, {
		    type: 'doughnut',
		    data: dataInvestment,
		    options: optionsInvestment
		});

		function customInvestmentLabelsFn() {
			let dataInvestmentLabel = dataInvestment.labels;
			let dataInvestmentRelation = dataInvestment.relation;
			let dataInvestmentValue = dataInvestment.datasets[0].data;
			let dataInvestmentBackgroundColor = dataInvestment.datasets[0].backgroundColor;

			let $chartInvestmentTable = $( '#chartInvestmentTable' );

			$.each( dataInvestmentLabel, function( key, dataLabelText ) {

				let chartInvestmentTemplate = `
					<tr>
			      <td bgcolor="${ dataInvestmentBackgroundColor[key] }" width="10"></td>
			      <td class="table-6" valign="middle">
			      	<p class="table_label_title f-big">${ dataLabelText }</p>
							<p class="table_desc f-small"><strong>Relación:</strong> ${ dataInvestmentRelation[key] }</p>
						</td>
			      <td class="table-4" valign="middle">
							<p class="table_desc f-big"><strong>${ dataInvestmentValue[key] } %</strong></p>
						</td>
					</tr>
				`;

				$chartInvestmentTable.append( chartInvestmentTemplate );

			});


		}

		customInvestmentLabelsFn();
	}