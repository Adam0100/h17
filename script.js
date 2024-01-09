var patients = [];

function addPatient() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var dob = document.getElementById('dob').value;
    var phoneNumber = document.getElementById('phoneNumber').value;

    var patient = {
        firstName: firstName,
        lastName: lastName,
        dob: dob,
        phoneNumber: phoneNumber
    };

    patients.push(patient);
    displayPatients();
    document.getElementById('patientForm').reset();
}

function displayPatients() {
    var patientListDiv = document.getElementById('patientList');
    patientListDiv.innerHTML = "";

    if (patients.length === 0) {
        patientListDiv.innerHTML = "<p>Нет данных о пациентах.</p>";
    } else {
        for (var i = 0; i < patients.length; i++) {
            var patientCard = document.createElement('div');
            patientCard.className = 'patient-card';
            patientCard.innerHTML = "<strong>Имя:</strong> " + patients[i].firstName +
                "<br><strong>Фамилия:</strong> " + patients[i].lastName +
                "<br><strong>Дата рождения:</strong> " + patients[i].dob +
                "<br><strong>Телефон:</strong> " + patients[i].phoneNumber;

            patientListDiv.appendChild(patientCard);
        }
    }
}

function showPatients() {
    displayPatients();
}