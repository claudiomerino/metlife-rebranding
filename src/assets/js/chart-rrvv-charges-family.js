
if( document.getElementById("chartRRVVChargesFamily") ) {
  let ctxRRVVChargesFamily = document.getElementById("chartRRVVChargesFamily");
  let $tableRRVVChargesFamily = $( '#chartRRVVChargesFamilyTable' );
  let $tabsChartActiveRentsBeneficiaries = $( '.tabs-chart-rents-beneficiaries' );

  let dataRRVVChargesFamily = {
    labelsEdit: false,

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
            type: 'select',
            label: 'Tipo de Carga',
            value: 'Tipo de Carga'
          },
          {
            type: 'text',
            label: 'Estado',
            value: 'Estado'
          },
          {
            type: 'number',
            label: 'Teléfono',
            value: '+56 966 554 644'
          },
          {
            type: 'text',
            label: 'Dirección',
            value: 'Monseñor Escribá de Balaguer'
          },
          {
            type: 'text',
            label: 'Correo Electrónico',
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
            type: 'select',
            label: 'Tipo de Carga',
            value: 'Tipo de Carga'
          },
          {
            type: 'text',
            label: 'Estado',
            value: 'Estado'
          },
          {
            type: 'number',
            label: 'Teléfono',
            value: '+56 966 554 644'
          },
          {
            type: 'text',
            label: 'Dirección',
            value: 'Monseñor Escribá de Balaguer'
          },
          {
            type: 'text',
            label: 'Correo Electrónico',
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
            type: 'select',
            label: 'Tipo de Carga',
            value: 'Tipo de Carga'
          },
          {
            type: 'text',
            label: 'Estado',
            value: 'Estado'
          },
          {
            type: 'number',
            label: 'Teléfono',
            value: '+56 966 554 644'
          },
          {
            type: 'text',
            label: 'Dirección',
            value: 'Monseñor Escribá de Balaguer'
          },
          {
            type: 'text',
            label: 'Correo Electrónico',
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
            type: 'select',
            label: 'Tipo de Carga',
            value: 'Tipo de Carga'
          },
          {
            type: 'text',
            label: 'Estado',
            value: 'Estado'
          },
          {
            type: 'number',
            label: 'Teléfono',
            value: '+56 966 554 644'
          },
          {
            type: 'text',
            label: 'Dirección',
            value: 'Monseñor Escribá de Balaguer'
          },
          {
            type: 'text',
            label: 'Correo Electrónico',
            value: 'daniel.llanos58@gmail.com'
          }
        ]
      }
    ],

    datasets: [{
      data: [
        25,
        25,
        25,
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

  chartFn( dataRRVVChargesFamily, ctxRRVVChargesFamily, $tableRRVVChargesFamily, $tabsChartActiveRentsBeneficiaries );

}