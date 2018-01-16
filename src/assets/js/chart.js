
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
      let dataRut = data.rut;
      let dataBirthdate = data.birthdate;
      let dataGender = data.gender;
      let dataPension = data.pension;
      let dataInvalidity = data.invalidity;
      let dataValidity = data.validity;
      let dataCharges = data.charges;
      let dataNameCharge = data.namecharge;
			let dataState = data.state;
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
				      <td bgcolor="${ dataBackgroundColor[key] }" width="10" class="hide-xs show-table-md"></td>
				      <td class="table-4" valign="middle">
				      	<p class="table_label_title line_jump">${ dataLabelText }</p>
								<p class="table_label_title"><strong>Relación:</strong> ${ dataRelation[key] }</p>
								<a href="#" class="f-link openContent " data-open-content="openChartMoreInfo-${UID}-${key}">
									<span class="openContentText is-open" data-rest-text="Más Información" data-open-text="Menos Información">Más Información</span>
									<i class="fa fa-angle-down" aria-hidden="true"></i>
								</a>
								<section class="toggleContent" data-toggle-content="openChartMoreInfo-${UID}-${key}">									
                   ${ dataRut ? '<p class="table_label_title"><strong>Rut: </strong>' + dataRut[key] + '</p>' : '' }
                   ${ dataBirthdate ? '<p class="table_label_title"><strong>Fecha de Nacimiento: </strong>' + dataBirthdate[key] + '</p>' : '' }
                   ${ dataGender ? '<p class="table_label_title"><strong>Genero: </strong>' + dataGender[key] + '</p>' : '' }
                   ${ dataPension ? '<p class="table_label_title"><strong>% de Pensión: </strong>' + dataPension[key] + '</p>' : '' }
                   ${ dataInvalidity ? '<p class="table_label_title"><strong>Invalidez: </strong>' + dataInvalidity[key] + '</p>' : '' }
                   ${ dataValidity ? '<p class="table_label_title"><strong>Fecha de Vigencia: </strong>' + dataValidity[key] + '</p>' : '' }
                   ${ dataCharges ? '<p class="table_label_title"><strong>Cargas Familiares Legales: </strong>' + dataCharges[key] + '</p>' : '' }
                   ${ dataNameCharge ? '<p class="table_label_title"><strong>Nombre de la carga: </strong>' + dataNameCharge[key] + '</p>' : '' }
                   ${ dataState ? '<p class="table_label_title"><strong>Estado: </strong>' + dataState[key] + '</p>' : '' }
                  <p class="table_label_title"><strong>Teléfono:</strong> ${ dataPhone[key] }</p>
									<p class="table_label_title"><strong>Dirección:</strong> ${ dataAddress[key] }</p>
									<p class="table_label_title"><strong>Correo Electrónico:</strong> ${ dataEmail[key] }</p>
								</section>
							</td>
				      <td class="table-2 center-sm" valign="middle">
								<p class="table_desc f-big center-sm"><strong>${ dataValue[key] } %</strong></p>
							</td>
						</tr>
					`;

				}
				else {

					chartTemplate = `
						<tr>
				      <td bgcolor="${ dataBackgroundColor[key] }" width="10" class="hide-xs show-table-md"></td>
				      <td class="table-4" valign="middle">
				      	<p class="table_label_title">${ dataLabelText }</p>
							</td>
				      <td class="table-2 center-sm" valign="middle">
								<p class="table_desc center-sm"><strong>${ dataValue[key] } %</strong></p>
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