
if( document.getElementById("chartRentsInfoBeneficiaries") ) {
  let ctxRentsInfoBeneficiaries = document.getElementById("chartRentsInfoBeneficiaries");
  let $tableRentsInfoBeneficiaries = $( '#chartRentsInfoTable' );
  let $tabsChartActiveRentsInfoBeneficiaries = $( '.tabs-chart-rents-beneficiaries' );

  let dataRentsInfoBeneficiaries = {
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

  chartFn( dataRentsInfoBeneficiaries, ctxRentsInfoBeneficiaries, $tableRentsInfoBeneficiaries, $tabsChartActiveRentsInfoBeneficiaries );

}