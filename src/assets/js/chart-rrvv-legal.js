
if( document.getElementById("chartRentsLegalBeneficiaries") ) {
  let ctxRentsLegalBeneficiaries = document.getElementById("chartRentsLegalBeneficiaries");
  let $tableRentsLegalBeneficiaries = $( '#chartRentsLegalTable' );
  let $tabsChartActiveRentsLegalBeneficiaries = $( '.tabs-chart-rents-beneficiaries' );

  let dataRentsLegalBeneficiaries = {
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
    rut: [
      "45984522-2",
      "45984522-2",
      "45984522-2",
      "45984522-2"
    ],
    birthdate: [
      "00/00/0000",
      "00/00/0000",
      "00/00/0000",
      "00/00/0000"
    ],
    gender: [
      "Femenino",
      "Femenino",
      "Masculino",
      "Femenino"
    ],
    pension: [
      "50",
      "50",
      "50",
      "50"
    ],
    invalidity: [
      "Invalidez",
      "Invalidez",
      "Invalidez",
      "Invalidez"
    ],
    validity: [
      "00/00/0000",
      "00/00/0000",
      "00/00/0000",
      "00/00/0000"
    ],
    address: [
      "Monseñor Escribá de Balaguer",
      "Monseñor Escribá de Balaguer",
      "Monseñor Escribá de Balaguer",
      "Monseñor Escribá de Balaguer"
    ],
    phone: [
      "+56 966 554 644",
      "+56 966 554 644",
      "+56 966 554 644",
      "+56 966 554 644"
    ],
    email: [
      "daniel.llanos58@gmail.com",
      "daniel.llanos58@gmail.com",
      "daniel.llanos58@gmail.com",
      "daniel.llanos58@gmail.com"
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

  chartFn( dataRentsLegalBeneficiaries, ctxRentsLegalBeneficiaries, $tableRentsLegalBeneficiaries, $tabsChartActiveRentsLegalBeneficiaries );

}