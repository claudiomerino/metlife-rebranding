
if( document.getElementById("chartRentsLegalBeneficiaries") ) {
  let ctxRentsLegalBeneficiaries = document.getElementById("chartRentsLegalBeneficiaries");
  let $tableRentsLegalBeneficiaries = $( '#chartRentsLegalTable' );
  let $tabsChartActiveRentsBeneficiaries = $( '.tabs-chart-rents-beneficiaries' );

  let dataRentsLegalBeneficiaries = {
    labelsEdit: false,
    labels: [
      "Esperanza del Carmen Risopatrón Goycochea",
      "Maria Francisca Llanos Risopatrón",
      "Felipe Martin Llanos Risopatrón",
      "Maria Silva Lopez Llanos"
    ],
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
            type: 'number',
            label: 'RUT',
            value: '45984522-2'
          },
          {
            type: 'date',
            label: 'Fecha de Nacimiento',
            value: '31/12/0000'
          },
          {
            type: 'select',
            label: 'Genero',
            value: 'F'
          },
          {
            type: 'text',
            label: 'Estado de Invalidez',
            value: 'Invalidez'
          },
          {
            type: 'date',
            label: 'Fecha de Vigencia',
            value: '00/00/0000'
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
            label: 'Correo electrónico',
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
            type: 'number',
            label: 'RUT',
            value: '45984522-2'
          },
          {
            type: 'date',
            label: 'Fecha de Nacimiento',
            value: '31/12/0000'
          },
          {
            type: 'select',
            label: 'Genero',
            value: 'F'
          },
          {
            type: 'text',
            label: 'Estado de Invalidez',
            value: 'Invalidez'
          },
          {
            type: 'date',
            label: 'Fecha de Vigencia',
            value: '00/00/0000'
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
            label: 'Correo electrónico',
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
            type: 'number',
            label: 'RUT',
            value: '45984522-2'
          },
          {
            type: 'date',
            label: 'Fecha de Nacimiento',
            value: '31/12/0000'
          },
          {
            type: 'select',
            label: 'Genero',
            value: 'M'
          },
          {
            type: 'text',
            label: 'Estado de Invalidez',
            value: 'Invalidez'
          },
          {
            type: 'date',
            label: 'Fecha de Vigencia',
            value: '00/00/0000'
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
            label: 'Correo electrónico',
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
            type: 'number',
            label: 'RUT',
            value: '45984522-2'
          },
          {
            type: 'date',
            label: 'Fecha de Nacimiento',
            value: '31/12/0000'
          },
          {
            type: 'select',
            label: 'Genero',
            value: 'F'
          },
          {
            type: 'text',
            label: 'Estado de Invalidez',
            value: 'Invalidez'
          },
          {
            type: 'date',
            label: 'Fecha de Vigencia',
            value: '00/00/0000'
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
            label: 'Correo electrónico',
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

  chartFn( dataRentsLegalBeneficiaries, ctxRentsLegalBeneficiaries, $tableRentsLegalBeneficiaries, $tabsChartActiveRentsBeneficiaries );

}