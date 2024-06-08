// Mengambil data dari file JSON menggunakan fetch
fetch('assets/json/total_transaction_per_location.json')
  .then(response => response.json())
  .then(data => {

    const ctx = document.getElementById("chart2").getContext("2d");

    let barChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: data.map(item => item.State),
        datasets: [
          {
            label: 'Total transaction',
            data: data.map(item => item.order_quantity),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 1.5
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    function updateChart(order) {
      if (order === 'asc') {
        data.sort((a, b) => a.order_quantity - b.order_quantity);
      } else {
        data.sort((a, b) => b.order_quantity - a.order_quantity);
      }

      barChart.data.labels = data.map(item => item.State);
      barChart.data.datasets[0].data = data.map(item => item.order_quantity);
      barChart.update();
    }

    // Add event listeners to buttons for sorting
    document.getElementById("sortAsc2").addEventListener("click", () => updateChart('asc'));
    document.getElementById("sortDesc2").addEventListener("click", () => updateChart('desc'));
  })
  .catch(error => console.error('Error loading JSON:', error));
