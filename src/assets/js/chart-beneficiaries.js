
	if( document.getElementById("chartBeneficiaries") ) {
		let ctx = document.getElementById("chartBeneficiaries");

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

		let options = {
			animation: {
				animateScale: true
			},
	    legend: {
	    	display: false
	    },
	    cutoutPercentage: 80
		}

		let myDoughnutChart = new Chart(ctx, {
		    type: 'doughnut',
		    data: data,
		    options: options
		});

		function customLabelsFn() {
			let dataLabel = data.labels;
			let dataRelation = data.relation;
			let dataValue = data.datasets[0].data;
			let dataBackgroundColor = data.datasets[0].backgroundColor;

			let $chartTable = $( '#chartTable' );

			$.each( dataLabel, function( key, dataLabelText ) {

				let chartTemplate = `
					<tr>
			      <td bgcolor="${ dataBackgroundColor[key] }" width="10"></td>
			      <td class="table-6" valign="middle">
			      	<p class="table_label_title f-big">${ dataLabelText }</p>
							<p class="table_desc f-small"><strong>Relación:</strong> ${ dataRelation[key] }</p>
						</td>
			      <td class="table-4" valign="middle">
							<p class="table_desc f-big"><strong>${ dataValue[key] } %</strong></p>
						</td>
					</tr>
				`;

				$chartTable.append( chartTemplate );

			});


		}

		customLabelsFn();
	}