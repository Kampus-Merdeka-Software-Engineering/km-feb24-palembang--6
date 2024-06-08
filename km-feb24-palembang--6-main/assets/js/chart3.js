// Mengambil data dari file JSON menggunakan fetch
fetch('assets/json/avg_revenue_product_category.json')
  .then(response => response.json())
  .then(data => {
    // Menyalin Data Tertentu dari Setiap Objek dalam Array
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

    // pengecekan data
    console.log("Bike Data:", bikeData);
    console.log("Clothes Data:", clothesData);
    console.log("Accessories Data:", accessoriesData);

    // Membuat Salinan Data yang Sedang Diproses ke dalam variable currentData
    let currentData = [...bikeData];

    const ctx = document.getElementById("chart3").getContext("2d");

    let lineChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: currentData.map(item => item.month_name),
        datasets: [
          {
            label: 'Bike',
            data: currentData.map(item => item.avg_revenue),
            backgroundColor: "yellow",
            borderColor: "black",
            borderWidth: 1.5
          },
          {
            label: 'Clothes',
            data: clothesData.map(item => item.avg_revenue),
            backgroundColor: "blue",
            borderColor: "black",
            borderWidth: 1.5
          },
          {
            label: 'Accessories',
            data: accessoriesData.map(item => item.avg_revenue),
            backgroundColor: "green",
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
  })
  .catch(error => console.error('Error loading JSON:', error));


