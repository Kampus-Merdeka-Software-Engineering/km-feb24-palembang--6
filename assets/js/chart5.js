// Mengambil data dari file JSON menggunakan fetch
fetch('assets/json/customer_by_age_group.json')
  .then(response => response.json())
  .then(data => {
    // Menyalin Data Tertentu dari Setiap Objek dalam Array
    const DataCustomerbyAge = data.map(item => ({
      Age_Group: item.Age_Group,
      order_quantity: item.order_quantity
    }));

    // pengecekan data
    console.log(DataCustomerbyAge);

    const ctx = document.getElementById("chart5").getContext("2d");

    let barChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: DataCustomerbyAge.map(item => item.Age_Group),
        datasets: [
          {
            label: 'Total order_quantity',
            data: DataCustomerbyAge.map(item => item.order_quantity),
            backgroundColor: "yellow",
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
        DataCustomerbyAge.sort((a, b) => a.order_quantity - b.order_quantity);
      } else {
        DataCustomerbyAge.sort((a, b) => b.order_quantity - a.order_quantity);
      }

      barChart.data.labels = DataCustomerbyAge.map(item => item.Age_Group);
      barChart.data.datasets[0].data = DataCustomerbyAge.map(item => item.order_quantity);
      barChart.update();
    }

    // Add event listeners to buttons for sorting
    document.getElementById("sortAsc5").addEventListener("click", () => updateChart('asc'));
    document.getElementById("sortDesc5").addEventListener("click", () => updateChart('desc'));
  })
  .catch(error => console.error('Error loading JSON:', error));
