// display.js
function displayBirthdays(birthdays) {
    const container = document.getElementById('birthdayContainer');
    container.innerHTML = '';
  
    if (birthdays.length === 0) {
      container.innerHTML += '<p>No birthdays in the selected date range for the specified month.</p>';
    } else {
      const sortedBirthdays = birthdays.sort((a, b) => a.date - b.date);
      sortedBirthdays.forEach(birthday => {
        container.innerHTML += `<p>${birthday.name}'s birthday: ${birthday.date}/${birthday.month}</p>`;
      });
    }
  }
  
  function displayAnniversaries(anniversaries) {
    const container = document.getElementById('anniversaryContainer');
    container.innerHTML = '';
  
    if (anniversaries.length === 0) {
      container.innerHTML += '<p>No anniversaries in the selected date range for the specified month.</p>';
    } else {
      const sortedAnniversaries = anniversaries.sort((a, b) => a.date - b.date);
      sortedAnniversaries.forEach(anniversary => {
        container.innerHTML += `<p>${anniversary.name}'s anniversary: ${anniversary.date}/${anniversary.month}</p>`;
      });
    }
  }
  
  // Retrieve data from the opener window
  const openerWindow = window.opener;
  if (openerWindow) {
    const birthdays = openerWindow.birthdayData;
    const anniversaries = openerWindow.anniversaryData;
  
    displayBirthdays(birthdays);
    displayAnniversaries(anniversaries);
  }
  