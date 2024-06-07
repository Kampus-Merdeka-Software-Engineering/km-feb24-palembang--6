// Mengambil data dari file JSON menggunakan fetch
fetch('assets/json/customer_by_gender.json')
  .then(response => response.json())
  .then(data => {
    // Separate data by customer gender
    const MData = data.filter(item => item.Customer_Gender === 'M').map(item => item.order_quantity);
    const FData = data.filter(item => item.Customer_Gender === 'F').map(item => item.order_quantity);

    // Log the data to the console
    console.log("M Data:", MData);
    console.log("F Data:", FData);

    const ctx = document.getElementById("chart4").getContext("2d");

    let doughnutChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ['M', 'F'],
        datasets: [
          {
            label: 'Gender',
            data: [MData.reduce((a, b) => a + b, 0), FData.reduce((a, b) => a + b, 0)],
            borderColor: "black",
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)'
            ],
            hoverOffset: 4
          }
        ]
      },
      options: {}
    });
  })
  .catch(error => console.error('Error loading JSON:', error));
