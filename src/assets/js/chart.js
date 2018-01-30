
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
			let dataLabelsEdit = data.labelsEdit;
			let dataRelation = data.relation;
      let dataPhone = data.phone;
      let dataRut = data.rut;
      let dataBirthdate = data.birthdate;
      let dataGender = data.gender;
      let dataPension = data.pension;
      let dataAssignement = data.assignement
      let dataInvalidity = data.invalidity;
      let dataValidity = data.validity;
      let dataCharge = data.charge;
      let dataTypeCharge = data.typeCharge;
      let dataNameCharge = data.nameCharge;
			let dataState = data.state;
			let dataAddress = data.address;
			let dataEmail = data.email;
			let dataValue = data.datasets[0].data;
			let dataBackgroundColor = data.datasets[0].backgroundColor;

			$.each( dataLabel, function( key, dataLabelText ) {

				let UID = chartTable.attr('id')
				let chartTemplate;

				if( dataRelation.length > 0 ) {

/*=============================================
=            Contenido editable               =
=============================================*/
					if( dataLabelsEdit ) {
						chartTemplate = `
							<tr>
					      <td bgcolor="${ dataBackgroundColor[key] }" width="10" class="hide-xs show-table-md"></td>
					      <td class="table-4 containerDataEdit" valign="middle">
									<div class="beneficiaryInitialData">												
										<p class="line_jump">${ dataLabelText }</p>
									</div>
									<section class="u-field mg-bottom-5 mg-top-i-0 clientProfileEdit hide-state-update">
										<span class="input input--ichiro">
											<input class="input__field input__field--ichiro beneficiaryValidateInput" data-live-validate="true" value="${ dataLabelText }" min="5" type="text" id="clientName" required>										
											<p class="form-error f-tiny line_jump">Este campo es requerido.</p>
										</span>
									</section>

									<div class="beneficiaryInitialData">											 	
										<p><strong>Relación:</strong> ${ dataRelation[key] }</p>
									</div>
									<section class="u-field mg-bottom-5 mg-top-i-0 clientProfileEdit hide-state-update">
										<span class="input input--ichiro">
											<input class="input__field input__field--ichiro beneficiaryValidateInput" data-live-validate="true" value="${ dataRelation[key] }" min="5" type="text" id="clientName" required>										
											<p class="form-error f-tiny line_jump">Este campo es requerido.</p>
										</span>
									</section>


									<a href="#" class="f-link openContent " data-open-content="openChartMoreInfo-${UID}-${key}">
										<span class="openContentText is-open" data-rest-text="Más Información" data-open-text="Menos Información">Más Información</span>
										<i class="fa fa-angle-down" aria-hidden="true"></i>
									</a>
									<section class="toggleContent infoMore mg-top-15" data-toggle-content="openChartMoreInfo-${UID}-${key}">
										<div class="beneficiaryInitialData mg-top-15">												
											<p class="line_jump"><strong>RUT:</strong> ${ dataRut[key] }</p>
										</div>
										<section class="u-field mg-bottom-5 mg-top-i-0 clientProfileEdit hide-state-update">
											<span class="input input--ichiro">
												<input class="input__field input__field--ichiro beneficiaryValidateInput" data-live-validate="true" value="${ dataRut[key] }" min="5" type="text" id="clientName" required>										
												<p class="form-error f-tiny line_jump">Este campo es requerido.</p>
											</span>
										</section>

										<div class="beneficiaryInitialData">												
											<p class="line_jump"><strong>Fecha de Nacimiento:</strong> ${ dataBirthdate[key] }</p>
										</div>
										<section class="u-field clientProfileEdit hide-state-update label_select">
											<p class="title_label_select"><strong>Fecha de Nacimiento:</strong></p>
											<span class="input input--ichiro input--datepicker DatePicker">
												<input class="input__field input__field--ichiro" type="text" readonly>
												<i class="material-icons">date_range</i>
											</span>
										</section>

										<div class="beneficiaryInitialData">												
											<p class="line_jump"><strong>Genero:</strong> ${ dataGender[key] }</p>
										</div>
										<section class="u-select u-field clientProfileEdit hide-state-update label_select u-select_labels">
											<p class="title_label_select"><strong>Genero:</strong></p>
											<select class="cs-select cs-skin-border GeneralSelect items_select_box">
												<option value="" selected>Masculino</option>
												<option value="Femenino">Femenino</option>
											</select>
										</section>

										<div class="beneficiaryInitialData u-space">												
											<p class="line_jump"><strong>% de Asignación para Pago:</strong> ${ dataAssignement[key] }</p>
										</div>
										<section class="u-field mg-top-i-0 u-space clientProfileEdit hide-state-update">
											<span class="input input--ichiro">
												<input class="input__field input__field--ichiro beneficiaryValidateInput" data-live-validate="true" value="${ dataAssignement[key] }" min="5" type="number" id="clientName" required>										
												<p class="form-error f-tiny line_jump">Este campo es requerido.</p>
											</span>
										</section>

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
					}

					else {
						chartTemplate = `
						<tr>
				      <td bgcolor="${ dataBackgroundColor[key] }" width="10" class="hide-xs show-table-md"></td>
				      <td class="table-4" valign="middle">
				      	<p class="table_label_title line_jump">${ dataLabelText }</p>
								<p class="table_label_title"><strong>Relación con el Contratante:</strong> ${ dataRelation[key] }</p>
								<a href="#" class="f-link openContent " data-open-content="openChartMoreInfo-${UID}-${key}">
									<span class="openContentText is-open" data-rest-text="Más Información" data-open-text="Menos Información">Más Información</span>
									<i class="fa fa-angle-down" aria-hidden="true"></i>
								</a>
								<section class="toggleContent" data-toggle-content="openChartMoreInfo-${UID}-${key}">									
                   ${ dataRut ? '<p class="table_label_title"><strong>Rut: </strong>' + dataRut[key] + '</p>' : '' }
                   ${ dataBirthdate ? '<p class="table_label_title"><strong>Fecha de Nacimiento: </strong>' + dataBirthdate[key] + '</p>' : '' }
                   ${ dataGender ? '<p class="table_label_title"><strong>Genero: </strong>' + dataGender[key] + '</p>' : '' }
                   ${ dataPension ? '<p class="table_label_title"><strong>% de Pensión: </strong>' + dataPension[key] + '</p>' : '' }
                   ${ dataAssignement ? '<p class="table_label_title"><strong>% de Asignación para Pago: </strong>' + dataAssignement[key] + '</p>' : '' }
                   ${ dataInvalidity ? '<p class="table_label_title"><strong>Estado de Invalidez: </strong>' + dataInvalidity[key] + '</p>' : '' }
                   ${ dataValidity ? '<p class="table_label_title"><strong>Fecha de Vigencia: </strong>' + dataValidity[key] + '</p>' : '' }
                   ${ dataCharge ? '<p class="table_label_title"><strong>Cargas Familiares Legales: </strong>' + dataCharge[key] + '</p>' : '' }
                   ${ dataNameCharge ? '<p class="table_label_title"><strong>Nombre de la carga: </strong>' + dataNameCharge[key] + '</p>' : '' }
                   ${ dataTypeCharge ? '<p class="table_label_title"><strong>Tipo de Carga: </strong>' + dataTypeCharge[key] + '</p>' : '' }
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
					/*=====  End Contenido editable  ======*/

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


	/*================================================================
	=            Chart Template editable                             =
	================================================================*/
	
		$( '.infoMore' ).attr( 'style', 'display:block !important;' );		
	
	/*=====  Fin Chart Template editable   ======*/
	