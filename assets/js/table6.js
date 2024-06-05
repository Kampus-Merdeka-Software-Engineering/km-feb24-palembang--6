// Mengambil data dari file JSON menggunakan fetch
fetch('assets/json/most_ordered_sub_category.json')
  .then(response => response.json())
  .then(data => {
    const tableBody = document.getElementById("table-body");

    // Membuat baris tabel dari setiap objek dalam data JSON
    data.forEach((item, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${item.Sub_Category}</td>
        <td>${item.Product_Category}</td>
        <td>${item.order_quantity}</td>
      `;
      tableBody.appendChild(row);
    });
  })
  .catch(error => console.error('Error loading JSON:', error));
