
/*=============================================
=            Eliminar beneficiario            =
=============================================*/
	function deleteBeneficiaryFn() {
		$( 'body' ).on( 'click', '.deleteBeneficiary', (ev) => {
			ev.preventDefault();
			$( ev.currentTarget ).closest('.tagBeneficiary').remove();
			valuesAssignmentFn()
		});
	}

	deleteBeneficiaryFn();
/*=====  End of Eliminar beneficiario  ======*/


/*============================================
=            Agregar beneficiario            =
============================================*/
	let addNewBeneficiary = $('.tag-beneficiary').length + 1

	$( '.addBeneficiary' ).on('click', (ev) => {
		ev.preventDefault();
		let templateEditBeneficiary = `
			<section class="tag-beneficiary tagBeneficiary">
			  <div class="u-row gutter-md-edit middle-xs">
			    <div class="col-xs-12 col-md-3 mg-bottom-xs-30 mg-bottom-md-15">
			      <span class="input input--ichiro">
			        <input class="input__field input__field--ichiro" data-live-validate="true" value="" type="text" id="name-${addNewBeneficiary}" required>
			        <label class="input__label input__label--ichiro" for="name-${addNewBeneficiary}">
			          <span class="input__label-content input__label-content--ichiro"><strong>Nombre</strong></span>
			        </label>
			        <p class="form-error f-tiny line_jump">Este campo es requerido.</p>
			      </span>
			    </div>

			    <div class="col-xs-12 col-md-3 mg-bottom-xs-30 mg-bottom-md-15">
			      <span class="input input--ichiro">
			        <input class="input__field input__field--ichiro" data-live-validate="true" value="" min="5" type="text" id="lastNameF-${addNewBeneficiary}" required>
			        <label class="input__label input__label--ichiro" for="lastNameF-${addNewBeneficiary}">
			          <span class="input__label-content input__label-content--ichiro"><strong>Apellido Paterno</strong></span>
			        </label>
			        <p class="form-error f-tiny line_jump">Este campo es requerido.</p>
			      </span>
			    </div>

			    <div class="col-xs-12 col-md-3 mg-bottom-xs-15 mg-bottom-md-15">
			      <span class="input input--ichiro">
			        <input class="input__field input__field--ichiro" data-live-validate="true" value="" min="5" type="text" id="lastNameM-${addNewBeneficiary}" required>
			        <label class="input__label input__label--ichiro" for="lastNameM-${addNewBeneficiary}">
			          <span class="input__label-content input__label-content--ichiro"><strong>Apellido Materno</strong></span>
			        </label>
			        <p class="form-error f-tiny line_jump">Este campo es requerido.</p>
			      </span>
			    </div>

			    <div class="col-xs-12 col-md-2 mg-bottom-xs-30 mg-bottom-md-15">
			      <a href="#" class="deleteBeneficiary">Eliminar Beneficiario</a>
			    </div>

			    <div class="col-xs-12 col-md-1 mg-bottom-xs-15 mg-bottom-md-15 col-assignment">
			    	<p class="title_label_select line_jump"><strong>Asignación:</strong></p>
			      <span class="input input--ichiro">
			        <input class="input__field input__field--ichiro assignmentFieldValue" data-live-validate="true" value="0" min="0" type="number" id="assignement-${addNewBeneficiary}" required>
			        <p class="form-error f-tiny line_jump">Este campo es requerido.</p>
			      </span>
			    </div>
			  </div>

			  <section class="toggleContent no-padding-bottom" data-toggle-content="more-data-beneficiary-${addNewBeneficiary}">
			    <div class="u-row gutter-xs bottom-xs">
			      <div class="col-xs-12 col-md-3 mg-bottom-xs-8 mg-bottom-md-19">
			        <span class="input input--ichiro">
			          <input class="input__field input__field--ichiro" data-live-validate="true" value="45986152-2" min="5" type="text" id="rut-${addNewBeneficiary}" required>
			          <label class="input__label input__label--ichiro" for="rut-${addNewBeneficiary}">
			            <span class="input__label-content input__label-content--ichiro"><strong>RUT:</strong></span>
			          </label>
			          <p class="form-error f-tiny line_jump">Este campo es requerido.</p>
			        </span>
			      </div>

			      <div class="col-xs-12 col-md-3 mg-bottom-xs-4 mg-bottom-md-19">
			        <section class="u-select u-field clientProfileEdit label_select u-select_labels">
			          <p class="title_label_select"><strong>Relación:</strong></p>
			          <select class="cs-select cs-skin-border GeneralSelectNew-${addNewBeneficiary} items_select_box">
			            <option value="" selected>Conyugue</option>
			            <option value="Femenino">Hija</option>
			            <option value="Femenino">Hijo</option>
			          </select>
			        </section>
			      </div>

			      <div class="col-xs-12 col-md-3 col-phone mg-bottom-xs-30 mg-bottom-md-19">
			        <section class="u-field clientProfileEdit label_select">
			        	<p class="title_label_select"><strong>Teléfono Fijo</strong></p>
			        	<input class="input_countries input__field input__field--ichiro ChangeContryPhone ValidatePhoneNumber" data-live-validate="true" value="+56 227 170 082" type="text" required>
			        	<p class="form-error f-tiny line_jump">Este campo es requerido.</p>
			        </section>
			      </div>

			      <div class="col-xs-12 col-md-3 mg-bottom-xs-8 mg-bottom-md-19">
			        <span class="input input--ichiro">
			          <input class="input__field input__field--ichiro" data-live-validate="true" value="daniel.llanos@gmail.com" type="text" id="email-${addNewBeneficiary}" required>
			          <label class="input__label input__label--ichiro" for="email-${addNewBeneficiary}">
			            <span class="input__label-content input__label-content--ichiro"><strong>Correo electrónico:</strong></span>
			          </label>
			          <p class="form-error f-tiny line_jump">Este campo es requerido.</p>
			        </span>
			      </div>
			    </div>

			    <div class="u-row gutter-xs middle-xs">
			      <div class="col-xs-12 col-md-3 mg-bottom-xs--7 mg-bottom-md-0">
			        <section class="u-select u-field clientProfileEdit label_select u-select_labels u-space">
			          <p class="title_label_select"><strong>Región:</strong></p>
			          <select class="cs-select cs-skin-border GeneralSelectNew-${addNewBeneficiary} items_select_box">
			            <option value="" selected>Metropolitana</option>
			            <option>Metroopolitana 2</option>
			            <option>Metroopolitana 3</option>
			          </select>
			        </section>
			      </div>

			      <div class="col-xs-12 col-md-3 mg-bottom-xs-19 mg-bottom-md-0">
			        <section class="u-select u-field clientProfileEdit label_select u-select_labels u-space">
			          <p class="title_label_select"><strong>Comuna:</strong></p>
			          <select class="cs-select cs-skin-border GeneralSelectNew-${addNewBeneficiary} items_select_box">
			            <option value="" selected>Lo Barnechea</option>
			            <option value="">Lo Barnechea 2</option>
			            <option value="">Lo Barnechea 3</option>
			          </select>
			        </section>
			      </div>

			      <div class="col-xs-12 col-md-6 col-address mg-bottom-xs-15 mg-bottom-md-0">
			        <span class="input input--ichiro">
			          <input class="input__field input__field--ichiro" data-live-validate="true" value="Monseñor Escribá de Balaguer 14.554" type="text" id="clientAddress-${addNewBeneficiary}" required>
			          <label class="input__label input__label--ichiro" for="clientAddress-${addNewBeneficiary}">
			            <span class="input__label-content input__label-content--ichiro"><strong>Dirección:</strong></span>
			          </label>
			          <p class="form-error f-tiny line_jump">Este campo es requerido.</p>
			        </span>
			      </div>
			    </div>
			  </section>

			  <div class="col-xs-12">
			    <a href="#" class="f-link openContent" data-open-content="more-data-beneficiary-${addNewBeneficiary}">
			      <span class="openContentText is-open" data-rest-text="Más Información" data-open-text="Menos Información">Más Información</span>
			      <i class="fa fa-angle-down" aria-hidden="true"></i>
			    </a>
			  </div>
			</section>
		`
		$( '.tagBeneficiaryContainer' ).append( templateEditBeneficiary )

		GeneralSelectNewFn(`GeneralSelectNew-${addNewBeneficiary}`);
		addNewBeneficiary++;
		callChangeCountryPhoneFn();
		deleteBeneficiaryFn();
		valuesAssignmentFn();
	})
/*=====  End of Agregar beneficiario  ======*/