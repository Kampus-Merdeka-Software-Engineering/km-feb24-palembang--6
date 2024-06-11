// Mengambil data dari file JSON menggunakan fetch
fetch('assets/json/customer_by_gender.json')
  .then(response => response.json())
  .then(data => {

// Menyalin Data dari array 'data' utama
    const MData = data.filter(item => item.Customer_Gender === 'M').map(item => item.order_quantity);
    const FData = data.filter(item => item.Customer_Gender === 'F').map(item => item.order_quantity);

// pembuatan chart
    const ctx = document.getElementById("chart4").getContext("2d");
    let doughnutChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ['M', 'F'],
        datasets: [
          {
            label: 'Gender',
            data: [MData.reduce((a, b) => a + b, 0), FData.reduce((a, b) => a + b, 0)],
            borderColor: [
              'rgb(135, 206, 250)',
              'rgba(255, 99, 132)'
            ],
            backgroundColor: [
              'rgb(135, 206, 250, 0.2)',
              'rgba(255, 99, 132, 0.2)'
            ],
            hoverOffset: 4
          }
        ]
      },
      options: {}
    });
  })

