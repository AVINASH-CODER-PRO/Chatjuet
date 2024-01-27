function generateOptions(options) {
    return options.map(option => option.toString().padStart(2, '0'));
  }
  
  function getCurrentDate() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1; // Months are zero-indexed
    const year = today.getFullYear();
    return { day, month, year };
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const daySelect = document.getElementById('day');
    const monthSelect = document.getElementById('month');
    const yearSelect = document.getElementById('year');
    const passwordInput = document.querySelector('.input1-box input[type="password"]');
    const lockIcon = document.querySelector('.input1-box i');
  

    lockIcon.addEventListener('click', function () {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
  
      // Change lock icon based on password visibility
      lockIcon.className = type === 'password' ? 'bx bxs-lock-alt' : 'bx bxs-lock-open-alt';
    });
    // Get current date
    const currentDate = getCurrentDate();
  
    // Populate days select
    const days = generateOptions(Array.from({ length: 31 }, (_, i) => i + 1));
    days.forEach(day => {
      const option = document.createElement('option');
      option.value = day;
      option.text = day;
      daySelect.add(option);
  
      // Set the default day to today's date
      if (parseInt(day) === currentDate.day) {
        option.selected = true;
      }
    });
  
    // Populate months select
    const months = generateOptions(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]);
    months.forEach(month => {
      const option = document.createElement('option');
      option.value = month;
      option.text = month;
      monthSelect.add(option);
  
      // Set the default month to today's date
      if (month === currentDate.month.toString().padStart(2, '0')) {
        option.selected = true;
      }
    });
  
    // Populate years select dynamically
    const currentYear = currentDate.year;
    const maxYear = currentYear; // Adjust the range (e.g., 10 years into the future)
    const years = generateOptions(Array.from({ length: maxYear - 1905 + 1 }, (_, i) => maxYear - i));
    years.forEach(year => {
      const option = document.createElement('option');
      option.value = year;
      option.text = year;
      yearSelect.add(option);
  
      // Set the default year to today's date
      if (year === currentYear.toString()) {
        option.selected = true;
      }
    });
  });
  