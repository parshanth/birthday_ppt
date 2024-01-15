// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.getElementById('submitButton');

  submitButton.addEventListener('click', () => {
    const selectedMonth = document.getElementById('monthInput').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    const events = [
      { name: 'Parshanth', date: '18', month: '05', type: 'Birthday' },
      { name: 'Jeyanthi', date: '31', month: '01', type: 'Birthday' },
      { name: 'Talisha', date: '04', month: '05', type: 'Birthday' },
      { name: 'Martin Sundar Singh', date: '09', month: '04', type: 'Birthday' },
      { name: 'Thayamal', date: '25', month: '06', type: 'Birthday' },{ name: 'Augustin', date: '02', month: '09',type:'Birthday' },
      // Add more birthday data if needed
      { name: 'John', date: '10', month: '05', type: 'Anniversary' },
      { name: 'Jane', date: '20', month: '05', type: 'Anniversary' },
      // Add more anniversary data if needed
    ];

    const eventsInRange = filterEventsByDateRange(events, selectedMonth, startDate, endDate);

    openDisplayWindow(eventsInRange);
  });

  function openDisplayWindow(events) {
    const displayWindow = window.open('', 'Event Display', 'width=400,height=400,resizable=yes,scrollbars=yes');
    displayWindow.document.write('<html><head><title>Event Display</title>');
    displayWindow.document.write('<link rel="stylesheet" href="styles.css"></head><body>');
    displayWindow.document.write('<div class="result-box">');

    if (events.length === 0) {
      displayWindow.document.write('<p>No events in the selected date range for the specified month.</p>');
    } else {
      const sortedEvents = events.sort((a, b) => a.date - b.date);
      sortedEvents.forEach(event => {
        displayWindow.document.write(`<p>${event.name}'s ${event.type}: ${event.date}/${event.month}</p>`);
      });
    }

    displayWindow.document.write('</div></body></html>');
    displayWindow.document.close();
  }

  function filterEventsByDateRange(events, selectedMonth, startDate, endDate) {
    return events.filter(event => (
      event.month === selectedMonth &&
      event.date >= startDate &&
      event.date <= endDate
    ));
  }
});
