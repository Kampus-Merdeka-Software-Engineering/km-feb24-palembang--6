// Mengambil data dari file JSON menggunakan fetch
fetch('assets/json/revenue_per_location.json')
  .then(response => response.json())
  .then(data => {
    // Menyalin Data Tertentu dari Setiap Objek dalam Array
    const DataRevenue = data.map(item => ({
      State: item.State,
      revenue: item.revenue
    }));

    // Log the data to the console
    console.log(DataRevenue);

    // Membuat Salinan Data yang Sedang Diproses ke dalam variable currentData
    let currentData = [...DataRevenue];


    const ctx = document.getElementById("chart").getContext("2d");

    let barChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: DataRevenue.map(item => item.State),
        datasets: [
          {
            label: 'Total Revenue',
            data: currentData.map(item => item.revenue),
            backgroundColor: "rgb(54, 162, 235)",
            borderColor: "black",
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
        currentData.sort((a, b) => a.revenue - b.revenue);
      } else {
        currentData.sort((a, b) => b.revenue - a.revenue);
      }

      barChart.data.labels = currentData.map(item => item.State);
      barChart.data.datasets[0].data = currentData.map(item => item.revenue);
      barChart.update();
    }

    // Add event listeners to buttons for sorting
    document.getElementById("sortAsc").addEventListener("click", () => updateChart('asc'));
    document.getElementById("sortDesc").addEventListener("click", () => updateChart('desc'));
  })
  .catch(error => console.error('Error loading JSON:', error));
