const tableEntries = {
  q1: 89,
  q2: 75,
  q3: 88
};

/**
 * This function adds entries to the table
 */
function appendTableEntries() {
  const tableEntriesKeys = Object.keys(tableEntries);
  tableEntriesKeys.forEach((key) => {
    const tr = document.createElement('tr');
    const tdKey = document.createElement('td');
    const tdValue = document.createElement('td');

    const tdKeyText = document.createTextNode(key);
    const tdValueText = document.createTextNode(tableEntries[key]);

    tdKey.append(tdKeyText);
    tdValue.append(tdValueText);

    tr.append(tdKey);
    tr.append(tdValue);

    document.getElementById('sampleTbl').prepend(tr);
  });
}

/**
 * This function updates the color of the feedback button from lightblue to yellow and vice-versa after every click
 * @param event
 * @returns {Function}
 */
function toggleColor(event) {
  const feedback = document.getElementById('feedback');
  let isYellow = false;
  return function () {
    if (!isYellow) {
      feedback.style.backgroundColor = 'yellow';
      isYellow = true;
    } else {
      feedback.style.backgroundColor = 'lightblue';
      isYellow = false;
    }
  }
}

/**
 * This function handles the submit on the form
 * @param event
 */
function handleSubmit(event) {
  const alphanumericInputValue = document.getElementById('alphanumeric-input').value;
  const isAlphanumericOnly = !!alphanumericInputValue.length && alphanumericInputValue.replace(/[a-zA-Z0-9]/g, '').length === 0;
  if (!isAlphanumericOnly) {
    event.preventDefault();
    return;
  }

  event.target.method = 'post';
  event.target.submit();
}

/**
 * This function is called when the window loads
 */
function init() {
  const feedback = document.getElementById('feedback');
  // We need to listen to the click event of #feedback element first
  feedback.addEventListener('click', toggleColor());

  const submitForm = document.getElementById('submit-form');
  submitForm.addEventListener('submit', handleSubmit);

  appendTableEntries();
}

window.onload = init;