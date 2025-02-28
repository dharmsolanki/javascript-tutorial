const url = `https://api-skizzlehr.tech/attendance/api/v1/profile-attendance-calender/${JSON.parse(localStorage["userData"]).employee_id}/?attendance_month=${getMonthName(
    Month
  )}&attendance_year=${Year}`;

fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer your-access-token',
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  