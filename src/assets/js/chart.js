
	function chartFn( data, ctx, chartTable, tabsChartActive ) {
		let options = {
			animation: {
				animateScale: true
			},
	    legend: {
	    	display: false
	    },
	    cutoutPercentage: 80
		}

		function customLabelsFn() {
			let dataLabel = data.labels;
			let dataRelation = data.relation;
			let dataValue = data.datasets[0].data;
			let dataBackgroundColor = data.datasets[0].backgroundColor;

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

				chartTable.append( chartTemplate );

			});

		}

		customLabelsFn();


		let $chartTabActive = tabsChartActive;
		let animateChart = false;

		$chartTabActive.on( 'click', ( e ) => {
			let $chartTabElement = $( e.currentTarget );

			$( window ).scroll( function() {

				if( $chartTabElement.hasClass( 'is-active' ) ) {

					let hT = $( ctx ).offset().top,
							hH = $( ctx ).outerHeight(),
							wH = $( window ).height(),
							wS = $( this ).scrollTop();
					if ( wS > ( hT + hH - wH ) ) {
						if( animateChart ) { return; }

						let myDoughnutChart = new Chart(ctx, {
							type: 'doughnut',
							data: data,
							options: options
						});

						animateChart = true;

					}
				}

			});
		})
	}