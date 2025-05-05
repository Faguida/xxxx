document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission classique
  
    let isValid = true;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const country = document.getElementById('country').value;
    const terms = document.getElementById('terms').checked;
  
    // Réinitialiser les erreurs
    document.querySelectorAll('.error').forEach(error => error.textContent = '');
  
    if (!firstName) {
      document.getElementById('errorFirstName').textContent = 'Veuillez renseigner votre prénom.';
      isValid = false;
    }
    if (!lastName) {
      document.getElementById('errorLastName').textContent = 'Veuillez renseigner votre nom.';
      isValid = false;
    }
    if (!email.includes('@') || !email.includes('.')) {
      document.getElementById('errorEmail').textContent = 'Veuillez fournir un email valide.';
      isValid = false;
    }
    if (!gender) {
      document.getElementById('errorGender').textContent = 'Veuillez sélectionner un sexe.';
      isValid = false;
    }
    if (!country) {
      document.getElementById('errorCountry').textContent = 'Veuillez choisir un pays.';
      isValid = false;
    }
    if (!terms) {
      document.getElementById('errorTerms').textContent = 'Vous devez accepter les Conditions générales d’utilisation.';
      isValid = false;
    }
  
    if (isValid) {
      const genderValue = gender.value;
      document.getElementById('successMessage').textContent =
        `Merci ${firstName} ${lastName} (${genderValue}) de ${country}, votre inscription est validée !`;
      event.target.reset(); // Réinitialise le formulaire
    }
  });
  