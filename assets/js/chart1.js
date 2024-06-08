// Mengambil data dari file JSON menggunakan fetch
fetch('assets/json/revenue_per_location.json')
  .then(response => response.json())
  .then(data => {
    
    const ctx = document.getElementById("chart").getContext("2d");

    let barChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: data.map(item => item.State),
        datasets: [
          {
            label: 'Total Revenue',
            data: data.map(item => item.revenue),
            backgroundColor: "rgb(135, 206, 250, 0.2)",
            borderColor: "rgb(135, 206, 250)",
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
        data.sort((a, b) => a.revenue - b.revenue);
      } else {
        data.sort((a, b) => b.revenue - a.revenue);
      }

      barChart.data.labels = data.map(item => item.State);
      barChart.data.datasets[0].data = data.map(item => item.revenue);
      barChart.update();
    }

    // Add event listeners to buttons for sorting
    document.getElementById("sortAsc").addEventListener("click", () => updateChart('asc'));
    document.getElementById("sortDesc").addEventListener("click", () => updateChart('desc'));
  })
  .catch(error => console.error('Error loading JSON:', error));
