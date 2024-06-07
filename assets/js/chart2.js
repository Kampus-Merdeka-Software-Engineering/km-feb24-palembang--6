// Mengambil data dari file JSON menggunakan fetch
fetch('assets/json/total_transaction_per_location.json')
  .then(response => response.json())
  .then(data => {
    // Menyalin Data Tertentu dari Setiap Objek dalam Array
    const DataTransaction = data.map(item => ({
      State: item.State,
      order_quantity: item.order_quantity
    }));

    // pengecekan data
    console.log(DataTransaction);

    const ctx = document.getElementById("chart2").getContext("2d");

    let barChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: DataTransaction.map(item => item.State),
        datasets: [
          {
            label: 'Total transaction',
            data: DataTransaction.map(item => item.order_quantity),
            backgroundColor: "rgb(255, 99, 132)",
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
        DataTransaction.sort((a, b) => a.order_quantity - b.order_quantity);
      } else {
        DataTransaction.sort((a, b) => b.order_quantity - a.order_quantity);
      }

      barChart.data.labels = DataTransaction.map(item => item.State);
      barChart.data.datasets[0].data = DataTransaction.map(item => item.order_quantity);
      barChart.update();
    }

    // Add event listeners to buttons for sorting
    document.getElementById("sortAsc2").addEventListener("click", () => updateChart('asc'));
    document.getElementById("sortDesc2").addEventListener("click", () => updateChart('desc'));
  })
  .catch(error => console.error('Error loading JSON:', error));
