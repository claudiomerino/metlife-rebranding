
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
			let dataLabelsEdit = data.labelsEdit;
			let dataValue = data.datasets[0].data;
			let dataBackgroundColor = data.datasets[0].backgroundColor;
			let fields = data.fields

			$.each( fields, function( key, dataLabelText ) {

				let UID = chartTable.attr('id')
				let chartTemplate;

				/*=============================================
				=            Contenido editable               =
				=============================================*/

				if( dataLabelsEdit ) {

					chartTemplate = `
						<tr>
				      <td bgcolor="${ dataBackgroundColor[key] }" width="10" class="hide-xs show-table-md"></td>
				      <td class="table-4 containerDataEdit" valign="middle">

    				    ${dataLabelText.row.map( ( field, key ) => 
    	            `
										${ key < 2 ? 

											`${ field.type == 'text' ? 
												`	<div class="beneficiaryInitialData">												
														<p class="line_jump">${ field.label ? `<strong>${ field.label }:</strong>` : ''} ${ field.value }</p>
													</div>
													<section class="u-field u-space clientProfileEdit hide-state-update">
														<span class="input input--ichiro">
															<input class="input__field input__field--ichiro beneficiaryValidateInput" data-live-validate="true" value="${ field.value }" min="5" type="text" id="clientName" required>										
															<p class="form-error f-tiny line_jump">Este campo es requerido.</p>
														</span>
													</section>
												`
												: ''
											}`

										: '' }
    	            `

    			     ).join('')}


								<a href="#" class="f-link openContent " data-open-content="openChartMoreInfo-${UID}-${key}">
									<span class="openContentText is-open" data-rest-text="Más Información" data-open-text="Menos Información">Más Información</span>
									<i class="fa fa-angle-down" aria-hidden="true"></i>
								</a>


								<section class="toggleContent infoMore mg-top-30" data-toggle-content="openChartMoreInfo-${UID}-${key}">
									

	    				    ${dataLabelText.row.map( ( field, key ) => 
	    	            `
											${ key > 1 ? 

												`${ field.type == 'text' ? 
													` <div class="u-space beneficiaryInitialData">
															<p class="line_jump">${ field.label ? `<strong>${ field.label }:</strong>` : ''} ${ field.value }</p>													
														</div>

														<section class="u-field clientProfileEdit hide-state-update u-space">
															<span class="input input--ichiro">
																<input class="input__field input__field--ichiro beneficiaryValidateInput" data-live-validate="true" value="${ field.value }" min="5" type="text" id="textField-${UID}-${key}" required>
																<label class="input__label input__label--ichiro f-tiny" for="textField-${UID}-${key}">
																	<span class="input__label-content input__label-content--ichiro u-top-rut"><strong>${ field.label }</strong></span>
																</label>
																<p class="form-error f-tiny line_jump">Este campo es requerido.</p>
															</span>
														</section>													
													`
													: ''
												}`

											: '' }


											${ key > 1 ? 

												`${ field.type == 'number' ? 
													` <div class="u-space beneficiaryInitialData">
															<p class="line_jump">${ field.label ? `<strong>${ field.label }:</strong>` : ''} ${ field.value }</p>													
														</div>

														<section class="u-field clientProfileEdit hide-state-update u-space">
															<span class="input input--ichiro">
																<input class="input__field input__field--ichiro beneficiaryValidateInput" data-live-validate="true" value="${ field.value }" min="5" type="text" id="numberField-${UID}-${key}" required>
																<label class="input__label input__label--ichiro f-tiny" for="numberField-${UID}-${key}">
																	<span class="input__label-content input__label-content--ichiro u-top-rut"><strong>${ field.label }</strong></span>
																</label>
																<p class="form-error f-tiny line_jump">Este campo es requerido.</p>
															</span>
														</section>													
													`
													: ''
												}`

											: '' }

											${ key > 1 ? 

												`${ field.type == 'date' ? 
													`	<div class="line_jump u-space beneficiaryInitialData">
															<p class="line_jump">${ field.label ? `<strong>${ field.label }:</strong>` : ''} ${ field.value }</p>												
														</div>

														<section class="u-field u-space clientProfileEdit hide-state-update label_select">
															<p class="title_label_select"><strong>${ field.label }:</strong></p>
															<span class="input input--ichiro input--datepicker DatePicker">
																<input class="input__field input__field--ichiro" type="text" readonly>
																<i class="material-icons">date_range</i>
															</span>
														</section>
													`
													: ''
												}`

											: '' }

											${ key > 1 ? 

												`${ field.type == 'select' ? 
													`	<div class="beneficiaryInitialData u-space">
															<p class="line_jump">${ field.label ? `<strong>${ field.label }:</strong>` : ''} ${ field.value }</p>					
														</div>

														<section class="u-select u-field clientProfileEdit hide-state-update label_select u-select_labels u-space">
															<p class="title_label_select"><strong>${ field.label }</strong></p>
															<select class="cs-select cs-skin-border GeneralSelect items_select_box">
																<option value="" selected>Masculino</option>
																<option value="Femenino">Femenino</option>
															</select>
														</section>
													`
													: ''
												}`

											: '' }					
	    	            `

	    			     ).join('')}


									<div class="u-space-md beneficiaryUpdateData">
									  <a class="button button-small button-full-xs buttonBeneficiaryUpdateData">Cambiar Datos</a>
									</div>

									<div class="u-row middle-xs center-xs end-sm u-space">
										<a data-close aria-label="Close modal" class="u-right-sm u-top-sm hide-state-update beneficiaryCancelUpdateData">Cancelar</a>
										<a class="button button-small AcceptLegalSubmit hide-state-update beneficiarySaveUpdateData">Guardar cambios</a>
									</div>

									<div class="alert alert-success u-space hide-xs beneficiarySaveData">
				            <p class="center-xs">¡Operación exitosa!</p>
				            <i class="fa fa-times alert-close"></i>
				          </div>
									<div class="alert alert-warning u-space hide-xs beneficiaryCancelData">
				            <p class="alert_desc">Tus cambios han sido cancelados</p>
				            <i class="fa fa-times alert-close"></i>
				          </div>
								</section>						
							</td>

				      <td class="table-2 center-sm" valign="middle">
								<p class="table_desc f-big center-sm"><strong>${ dataValue[key] } %</strong></p>
							</td>
						</tr>
					`;

					$( '.infoMore' ).attr( 'style', 'display:block !important;' );

				} /*=====  /if  ======*/



				/*=============================================
				=            Contenido NO editable            =
				=============================================*/
				else {
					chartTemplate = `
					<tr>
			      <td bgcolor="${ dataBackgroundColor[key] }" width="10" class="hide-xs show-table-md"></td>
			      <td class="table-4" valign="middle">

  				    ${dataLabelText.row.map( ( field, key ) => 
  	            `
									${ key < 2 ? 
										`	<p class="table_label_title line_jump">${ field.label ? `<strong>${ field.label }:</strong>` : ''} ${ field.value }</p>`
										: '' 
									}
  	            `
  			     ).join('')}

							<a href="#" class="f-link openContent " data-open-content="openChartMoreInfo-${UID}-${key}">
								<span class="openContentText is-open" data-rest-text="Más Información" data-open-text="Menos Información">Más Información</span>
								<i class="fa fa-angle-down" aria-hidden="true"></i>
							</a>
							<section class="toggleContent" data-toggle-content="openChartMoreInfo-${UID}-${key}">
	    				    ${dataLabelText.row.map( ( field, key ) => 
	    	            `
											${ key > 1 ? 
												`	<p class="table_label_title">${ field.label ? `<strong>${ field.label }:</strong>` : ''} ${ field.value }</p>`
												: '' 
											}
	    	            `
	    			     ).join('')}
							</section>
						</td>
			      <td class="table-2 center-sm" valign="middle">
							<p class="table_desc f-big center-sm"><strong>${ dataValue[key] } %</strong></p>
						</td>
					</tr>`;
				}

				chartTable.append( chartTemplate );

			}); /*=====  /each  ======*/


			/*=====  End Contenido editable  ======*/

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