async function onSubmit(event) {
      event.preventDefault();
    
      const firstName = document.getElementById('first-name').value;
      const lastName = document.getElementById('last-name').value;
    
      const response = await fetch('/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName }),
      });
    
      const { wuTangName } = await response.json();
      const result = document.getElementById('result');
      result.innerText = `Your Wu-Tang name is: ${wuTangName}`;
    }
    
    document.addEventListener('DOMContentLoaded', () => {
      const form = document.getElementById('name-form');
      form.addEventListener('submit', onSubmit);
    });
    