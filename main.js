const cells = document.querySelectorAll('.cell');

cells.forEach((cell, i) => {
  cell.addEventListener('input', (event) => {
    const value = event.data;
    cell.value = value;

    if (value == null && i > 0) cells[i - 1].focus();
    else if (cell.value != null)
      if (
        cell.value != '' &&
        !Number.isNaN(Number(value)) &&
        i < cells.length - 1
      )
        cells[i + 1].focus();

    const arrayCell = Array.from(cells);
    const valuesArr = arrayCell.map((nodes) => nodes.value);
    const stringToMatch = valuesArr.join('');
    const codeMatch = '123456';
    const match = stringToMatch === codeMatch;

    if (arrayCell.some((cell) => cell.value === '')) {
      cells.forEach((cell) => {
        cell.classList.remove('valid', 'not-valid');
      });
    } else {
      match
        ? cells.forEach((cell) => {
            cell.classList.remove('not-valid');
            cell.classList.add('valid');
          })
        : cells.forEach((cell) => {
            cell.classList.remove('valid');
            cell.classList.add('not-valid');
          });
    }
  });
});
