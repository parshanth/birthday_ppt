document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.getElementById('submitButton');

  submitButton.addEventListener('click', () => {
    const selectedMonth = document.getElementById('monthInput').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    const birthdays = [
      { name: 'Parshanth', date: '18', month: '05' },
      { name: 'Jeyanthi', date: '31', month: '01' },{ name: 'Talisha', date: '04', month: '05' },{ name: 'Martin Sundar Singh', date: '09', month: '04' },{ name: 'Thayamal', date: '25', month: '06' },
      // Add more data if needed
    ];

    const birthdaysInRange = filterBirthdaysByDateRange(birthdays, selectedMonth, startDate, endDate);

    openDisplayWindow(birthdaysInRange);
  });

  function openDisplayWindow(birthdays) {
    const displayWindow = window.open('', 'Birthday Display', 'width=400,height=400,resizable=yes,scrollbars=yes');
    displayWindow.document.write('<html><head><title>Birthday Display</title>');
    displayWindow.document.write('<link rel="stylesheet" href="styles.css"></head><body>');
    displayWindow.document.write('<div class="result-box">');

    if (birthdays.length === 0) {
      displayWindow.document.write('<p>No birthdays in the selected date range for the specified month.</p>');
    } else {
      const sortedBirthdays = birthdays.sort((a, b) => a.date - b.date);
      sortedBirthdays.forEach(birthday => {
        displayWindow.document.write(`<p>${birthday.name}'s birthday: ${birthday.date}/${birthday.month}</p>`);
      });
    }

    displayWindow.document.write('</div></body></html>');
    displayWindow.document.close();
  }

  function filterBirthdaysByDateRange(birthdays, selectedMonth, startDate, endDate) {
    return birthdays.filter(birthday => (
      birthday.month === selectedMonth &&
      birthday.date >= startDate &&
      birthday.date <= endDate
    ));
  }
});
