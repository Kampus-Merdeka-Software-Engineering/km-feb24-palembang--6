// Mengambil data dari file JSON menggunakan fetch
fetch('assets/json/customer_by_age_group.json')
  .then(response => response.json())
  .then(data => {

    const ctx = document.getElementById("chart5").getContext("2d");

    let bar = new Chart(ctx, {
      type: "bar",
      data: {
        labels: data.map(item => item.Age_Group),
        datasets: [{
          label: "Customer by Age",
          data: data.map(item => (parseInt(item.order_quantity))),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    });

    function updateChart(order) {
      if (order === 'asc') {
        data.sort((a, b) => a.order_quantity - b.order_quantity);
      } else {
        data.sort((a, b) => b.order_quantity - a.order_quantity);
      }

      bar.data.labels = data.map(item => item.Age_Group);
      bar.data.datasets[0].data = data.map(item => item.order_quantity);
      bar.update();
    }

    // Add event listeners to buttons for sorting
    document.getElementById("sortAsc5").addEventListener("click", () => updateChart('asc'));
    document.getElementById("sortDesc5").addEventListener("click", () => updateChart('desc'));
  })
  .catch(error => console.error('Error loading JSON:', error));
