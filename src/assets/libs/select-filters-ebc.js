   (function( $ ) {
    function datePickerFn() {
      var nowTemp = new Date();
      var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

      function filterStateDividendFn() {
        const $filterSelect = $('.filterDataDesc');

        $filterSelect.each( (index, elDesc) => {
          const $dataFilterDesc = $(elDesc).data('filter-data-desc')

          if ( $dataFilterDesc == 'defeatedStateDividend') {
            $($(elDesc).closest('tr')[0]).addClass('expire')
            console.log( $($(elDesc).closest('tr')[0]).addClass('expire'))
          }
          if($('.DataSelectFilter option:selected').val() == 'allStateDividend') {
            $($(elDesc).closest('tr')[0]).removeClass('hide-filter-date')
          }
          else {
            if( $dataFilterDesc == $('.DataSelectFilter option:selected').val() ) {
              $($(elDesc).closest('tr')[0]).removeClass('hide-filter-date')
            }
            else {
              $($(elDesc).closest('tr')[0]).addClass('hide-filter-date')
            }
          }

          
        })
      }

      filterStateDividendFn()

     let checkin =  $('.DatePickerStart').fdatepicker({

        format: 'dd-mm-yyyy',
        disableDblClickSelection: true,
        leftArrow:'<<',
        rightArrow:'>>',
        closeIcon:'X',
        closeButton: false
      }).on('changeDate', (ev) => {
        if (ev.date.valueOf() > checkout.date.valueOf()) {
          var newDate = new Date(ev.date)
          newDate.setDate(newDate.getDate() + 1);
          checkout.update(newDate);
        }
        checkin.hide();

        filterStateDividendFn();

        $('.DatePickerEnd')[0].focus();

        let momentStartDate = moment(ev.date).add(1, 'days').format('DD MM YYYY')

        console.log(momentStartDate, 'momentStartDate')
        const msStartDate = moment(momentStartDate, 'DD MM YYYY').valueOf()

        $('.DataExpiration').each( (index, data) => {

          const msListDate = moment($(data).text(), 'DD MM YYYY').valueOf()
          if( msListDate >= msStartDate ) {
            $($(data).closest('tr')[0]).removeClass('hide-filter-data-date')
          }
          else {
            $($(data).closest('tr')[0]).addClass('hide-filter-data-date')
          }

        })
      }).data('datepicker');

     let checkout =  $('.DatePickerEnd').fdatepicker({
        format: 'dd-mm-yyyy',
        disableDblClickSelection: true,
        leftArrow:'<<',
        rightArrow:'>>',
        closeIcon:'X',
        closeButton: false,
        onRender: function (date) {
          return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
        }
      }).on('changeDate', (ev) => {
        let momentEndDate = moment(ev.date).add(1, 'days').format('DD MM YYYY')
        const msEndDate = moment(momentEndDate, 'DD MM YYYY').valueOf()

        checkout.hide();

        filterStateDividendFn();

        $('.DataExpiration').each( (index, data) => {

          const msListDateEnd = moment($(data).text(), 'DD MM YYYY').valueOf()
          if( msListDateEnd >= checkin.date.valueOf() && msListDateEnd <= msEndDate ) {
            $($(data).closest('tr')[0]).removeClass('hide-filter-data-date')
          }
          else {
            $($(data).closest('tr')[0]).addClass('hide-filter-data-date')
          }
          
        })
      }).data('datepicker');
    }

    datePickerFn();


    const $filterSelect = $('.filterDataDesc');

    [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( (el) => {

      const options = {
        onChange : function( val ) {
          datePickerFn();
          $filterSelect.each( (index, elDesc) => {
            const $dataFilterDesc = $(elDesc).data('filter-data-desc')
            if(val == 'allStateDividend') {
              $($(elDesc).closest('tr')[0]).removeClass('hide-filter-data-desc')
            }
            else {
              if( $dataFilterDesc == val ) {
                $($(elDesc).closest('tr')[0]).removeClass('hide-filter-data-desc')
              }
              else {
                $($(elDesc).closest('tr')[0]).addClass('hide-filter-data-desc')
              }
            }
          })
        }
      }
      new SelectFx(el, options);
    });

  }( jQuery ));