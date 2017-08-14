
	function chartFn( data, ctx, chartTable, tabsChartActive ) {
		let options = {
			animation: {
				animateScale: true
			},
	    legend: {
	    	display: false
	    },
	    cutoutPercentage: 80,
	    tooltips: {
	    	titleFontSize: 10,
	    	callbacks: {
	        label: function(tooltipItem, data) {
	          return ' Asignación: ' + data.datasets[0].data[tooltipItem.index] + '%';
	        },
	        title: function(tooltipItem, data) {
	        	let tooltipData = data.labels[tooltipItem[0].index];
	        	let tooltipLimit = tooltipData.substring( 0, 20 );
	        	if( tooltipData.length > 20 ) {
	          	return tooltipLimit + '...';
	        	}
	        	else {
	        		return tooltipLimit;
	        	}
	        }
	      }
	    }
		}

		function customLabelsFn() {
			let dataLabel = data.labels;
			let dataRelation = data.relation;
			let dataPhone = data.phone;
			let dataAddress = data.address;
			let dataEmail = data.email;
			let dataValue = data.datasets[0].data;
			let dataBackgroundColor = data.datasets[0].backgroundColor;

			$.each( dataLabel, function( key, dataLabelText ) {

				let UID = chartTable.attr('id')
				let chartTemplate;

				if( dataRelation.length > 0 ) {

					chartTemplate = `
						<tr>
				      <td bgcolor="${ dataBackgroundColor[key] }" width="10"></td>
				      <td class="table-4" valign="middle">
				      	<p class="table_label_title f-big">${ dataLabelText }</p>
								<p class="table_desc "><strong>Relación:</strong> ${ dataRelation[key] }</p>
								<a href="#" class="f-link openContent" data-open-content="openChartMoreInfo-${UID}-${key}">
									<span class="openContentText is-open" data-rest-text="Más Información" data-open-text="Menos Información">Más Información</span>
									<i class="fa fa-angle-down" aria-hidden="true"></i>
								</a>
								<section class="toggleContent" data-toggle-content="openChartMoreInfo-${UID}-${key}">
									<p class="table_desc "><strong><br>Teléfono:</strong> ${ dataPhone[key] }</p>
									<p class="table_desc "><strong>Dirección:</strong> ${ dataAddress[key] }</p>
									<p class="table_desc "><strong>Correo Electrónico:</strong> ${ dataEmail[key] }</p>
								</section>
							</td>
				      <td class="table-2" valign="middle">
								<p class="table_desc f-big"><strong>${ dataValue[key] } %</strong></p>
							</td>
						</tr>
					`;

				}
				else {

					chartTemplate = `
						<tr>
				      <td bgcolor="${ dataBackgroundColor[key] }" width="10"></td>
				      <td class="table-4" valign="middle">
				      	<p class="table_label_title f-big">${ dataLabelText }</p>
							</td>
				      <td class="table-2" valign="middle">
								<p class="table_desc f-big"><strong>${ dataValue[key] } %</strong></p>
							</td>
						</tr>
					`;

				}

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

						console.log(ctx, 'context')

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


		let $chartTabElement = $( $chartTabActive );

		if( $chartTabElement.hasClass( 'is-active' ) ) {
			$( window ).scroll( function() {

				let hT = $( ctx ).offset().top,
						hH = $( ctx ).outerHeight(),
						wH = $( window ).height(),
						wS = $( this ).scrollTop();
				if ( wS > ( hT + hH - wH ) ) {
					if( animateChart ) { return; }
						console.log(ctx, 'context if')

					let myDoughnutChart = new Chart(ctx, {
						type: 'doughnut',
						data: data,
						options: options
					});

					animateChart = true;

				}
			});
		}
	}