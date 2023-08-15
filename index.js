// Function to calculate and update the total for a specific column
function updateColumnTotal(columnClass) {
  console.log("updateColumnTotal called", columnClass);
  const columnNumbers = document.querySelectorAll(
    `.${columnClass} .superhero-number`
  );
  const columnTotal = document.querySelector(
    `.${columnClass} + .total .total-value`
  );
  let totalSum = Array.from(columnNumbers).reduce((sum, number) => {
    return sum + parseFloat(number.textContent);
  }, 0);

  console.log(columnTotal);

  columnTotal.textContent = totalSum.toFixed(3);
  console.log("updateColumnTotal --CLOSED--");
}

// Function to calculate and update the difference between two columns
function updateColumnDifference() {
  const marvelTotal = parseFloat(
    document.querySelector(".Marvelsuperheroes-list + .total .total-value")
      .textContent
  );

  const dcTotal = parseFloat(
    document.querySelector(".DCsuperheroes-list + .total .total-value")
      .textContent
  );

  const difference = marvelTotal - dcTotal;

  const differenceElement = document.querySelector(
    ".difference .difference-value"
  );
  differenceElement.textContent = difference.toFixed(3);
}

// Update totals for both columns
updateColumnTotal("Marvelsuperheroes-list");
updateColumnTotal("DCsuperheroes-list");

// Update the difference between totals
updateColumnDifference();
