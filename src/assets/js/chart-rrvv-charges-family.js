
if( document.getElementById("chartRRVVChargesFamily") ) {
  let ctxRRVVChargesFamily = document.getElementById("chartRRVVChargesFamily");
  let $tableRRVVChargesFamily = $( '#chartRRVVChargesFamilyTable' );
  let $tabsChartActiveRentsBeneficiaries = $( '.tabs-chart-rents-beneficiaries' );

  let dataRRVVChargesFamily = {
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
    typeCharge: [
      "Cargas",
      "Cargas",
      "Cargas",
      "Cargas"
    ],
    nameCharge: [
      "incognito",
      "incognito",
      "incognito",
      "incognito"
    ],
    state: [
      "Estado",
      "Estado",
      "Estado",
      "Estado"
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

  chartFn( dataRRVVChargesFamily, ctxRRVVChargesFamily, $tableRRVVChargesFamily, $tabsChartActiveRentsBeneficiaries );

}