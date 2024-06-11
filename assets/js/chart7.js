// Mengambil data dari file JSON menggunakan fetch
fetch('assets/json/customer_by_age_group.json')
  .then(response => response.json())
  .then(data => {

// pembuatan chart
    const ctx = document.getElementById("chart7").getContext("2d");
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
  })
