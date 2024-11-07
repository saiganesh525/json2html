// json2html.js
export default function json2html(data) "https://github.com/saiganesh525/json2html.git"
{
    // Start the table and add the custom data-user attribute
    let tableHtml = '<table data-user="sugurusaiganesh1@gmail.com">';
  
    // Add the table header with the columns Name, Age, and Gender
    tableHtml += '<thead><tr><th>Name</th><th>Age</th><th>Gender</th></tr></thead>';
  
    // Start the table body
    tableHtml += '<tbody>';
  
    // Loop through the data array and create a table row for each object
    data.forEach(item => {
      tableHtml += '<tr>';
      tableHtml += `<td>${item.Name}</td>`;
      tableHtml += `<td>${item.Age}</td>`;
      tableHtml += `<td>${item.Gender || ''}</td>`;  // If Gender is missing, display an empty cell
      tableHtml += '</tr>';
    });
  
    // Close the table body and table tags
    tableHtml += '</tbody></table>';
  
    // Return the generated HTML table
    return tableHtml;
  }
  