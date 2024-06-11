// Mengambil data dari file JSON menggunakan fetch
fetch('assets/json/avg_revenue_product_category.json')
  .then(response => response.json())
  .then(data => {

// Menyalin Data dari array 'data' utama
    const bikeData = data.filter(item => item.Product_Category === 'Bikes').map(item => ({
      month_name: item.month_name,
      avg_revenue: item.avg_revenue
    }));

    const clothesData = data.filter(item => item.Product_Category === 'Clothing').map(item => ({
      month_name: item.month_name,
      avg_revenue: item.avg_revenue
    }));

    const accessoriesData = data.filter(item => item.Product_Category === 'Accessories').map(item => ({
      month_name: item.month_name,
      avg_revenue: item.avg_revenue
    }));

// pembuatan chart 
    const ctx = document.getElementById("chart3").getContext("2d");
    let lineChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: bikeData.map(item => item.month_name),
        datasets: [
          {
            label: 'Bike',
            data: bikeData.map(item => item.avg_revenue),
            backgroundColor: "rgba(255, 99, 132)",
            borderColor: "rgba(255, 99, 132)",
            borderWidth: 1.5
          },
          {
            label: 'Clothes',
            data: clothesData.map(item => item.avg_revenue),
            backgroundColor: "rgba(255, 159, 64)",
            borderColor: "rgba(255, 159, 64)",
            borderWidth: 1.5
          },
          {
            label: 'Accessories',
            data: accessoriesData.map(item => item.avg_revenue),
            backgroundColor: "rgb(135, 206, 250)",
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
  })



