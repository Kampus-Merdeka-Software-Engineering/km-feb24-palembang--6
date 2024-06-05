document.addEventListener("DOMContentLoaded", function() {
    // Tempatkan kode JavaScript Anda di sini
    document.getElementById('contentDropdown').addEventListener('change', function() {
        var selectedOption = this.options[this.selectedIndex];
        var href = selectedOption.value;
        
        if (href) {
            window.location.href = href;
        }
    });
});