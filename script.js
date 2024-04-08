// Функція для збереження пацієнта в localStorage
function savePatient() {
    // Отримуємо дані з полів введення
    const firstName = document.getElementById('patientFirstName').value;
    const lastName = document.getElementById('patientLastName').value;
    const phoneNumber = document.getElementById('patientPhoneNumber').value;
    const address = document.getElementById('patientAddress').value;
    const medicalHistory = document.getElementById('patientMedicalHistory').value;

    // Формуємо об'єкт з даними пацієнта
    const patient = {
        firstName,
        lastName,
        phoneNumber,
        address,
        medicalHistory
    };

    // Отримуємо поточний список пацієнтів з localStorage або створюємо новий масив
    let patients = JSON.parse(localStorage.getItem('patients')) || [];

    // Додаємо нового пацієнта до списку
    patients.push(patient);

    // Зберігаємо оновлений список пацієнтів в localStorage
    localStorage.setItem('patients', JSON.stringify(patients));

    // Показуємо повідомлення про успішне збереження
    alert('Пацієнт успішно доданий!');

    // Очищаємо поля форми
    document.getElementById('patientFirstName').value = '';
    document.getElementById('patientLastName').value = '';
    document.getElementById('patientPhoneNumber').value = '';
    document.getElementById('patientAddress').value = '';
    document.getElementById('patientMedicalHistory').value = '';
}

// Функція для відображення списку пацієнтів
function displayPatients() {
    const patients = JSON.parse(localStorage.getItem('patients')) || [];
    const patientsTable = document.getElementById('patientsList');
    patientsTable.innerHTML = ''; // Очищаємо вміст перед оновленням

    // Перебираємо всіх пацієнтів і додаємо їх у таблицю
    patients.forEach(patient => {
        const row = patientsTable.insertRow();
        row.innerHTML = `
            <td>${patient.firstName}</td>
            <td>${patient.lastName}</td>
            <td>${patient.phoneNumber}</td>
            <td>${patient.address}</td>
            <td>${patient.medicalHistory}</td>
            <td><button onclick="deletePatient('${patient.firstName}', '${patient.lastName}')">Видалити</button></td>
        `;
    });

        // Оновлюємо список пацієнтів для вибору при записі на візит
        const selectPatient = document.getElementById('selectPatient');
        selectPatient.innerHTML = '<option value="">Виберіть пацієнта</option>';
        patients.forEach(patient => {
            const option = document.createElement('option');
            option.value = `${patient.firstName} ${patient.lastName}`;
            option.textContent = `${patient.firstName} ${patient.lastName}`;
            selectPatient.appendChild(option);
        });
}

// Функція для збереження лікаря в localStorage
function saveDoctor() {
    // Отримуємо дані з полів введення
    const firstName = document.getElementById('doctorFirstName').value;
    const lastName = document.getElementById('doctorLastName').value;
    const specialty = document.getElementById('doctorSpecialty').value;
    const office = document.getElementById('doctorOffice').value;
    const phoneNumber = document.getElementById('doctorPhoneNumber').value;

    // Формуємо об'єкт з даними лікаря
    const doctor = {
        firstName,
        lastName,
        specialty,
        office,
        phoneNumber
    };

    // Отримуємо поточний список лікарів з localStorage або створюємо новий масив
    let doctors = JSON.parse(localStorage.getItem('doctors')) || [];

    // Додаємо нового лікаря до списку
    doctors.push(doctor);

    // Зберігаємо оновлений список лікарів в localStorage
    localStorage.setItem('doctors', JSON.stringify(doctors));

    // Показуємо повідомлення про успішне збереження
    alert('Лікаря успішно додано!');

    // Очищаємо поля форми
    document.getElementById('doctorFirstName').value = '';
    document.getElementById('doctorLastName').value = '';
    document.getElementById('doctorSpecialty').value = '';
    document.getElementById('doctorOffice').value = '';
    document.getElementById('doctorPhoneNumber').value = '';
}

// Функція для відображення списку лікарів
function displayDoctors() {
    const doctors = JSON.parse(localStorage.getItem('doctors')) || [];
    const doctorsListTable = document.getElementById('doctorsList');
    doctorsListTable.innerHTML = ''; // Очищаємо вміст перед оновленням

    // Перебираємо всіх лікарів і додаємо їх у таблицю
    doctors.forEach(doctor => {
        const row = doctorsListTable.insertRow();
        row.innerHTML = `
            <td>${doctor.firstName}</td>
            <td>${doctor.lastName}</td>
            <td>${doctor.specialty}</td>
            <td>${doctor.office}</td>
            <td>${doctor.phoneNumber}</td>
        `;
    });

    // Оновлюємо список лікарів для вибору при записі на візит
    const selectDoctor = document.getElementById('selectDoctor');
    selectDoctor.innerHTML = '<option value="">Виберіть лікаря</option>';
    doctors.forEach(doctor => {
        const option = document.createElement('option');
        option.value = `${doctor.firstName} ${doctor.lastName}`;
        option.textContent = `${doctor.firstName} ${doctor.lastName} (${doctor.specialty})`;
        selectDoctor.appendChild(option);
    });
}

// Функція для запису на візит до лікаря
function scheduleAppointment() {
    const selectedDoctor = document.getElementById('selectDoctor').value;
    const selectedPatient = document.getElementById('selectPatient').value;
    const visitDate = document.getElementById('visitDate').value;

    // Перевіряємо, чи вибрано лікаря та пацієнта і чи вибрана дата
    if (selectedDoctor && selectedPatient && visitDate) {
        // Зберігаємо інформацію про візит у localStorage
        const appointment = {
            doctor: selectedDoctor,
            patient: selectedPatient,
            visitDate: visitDate
        };

        let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
        appointments.push(appointment);
        localStorage.setItem('appointments', JSON.stringify(appointments));

        // Показуємо повідомлення про успішну запис на візит
        alert('Ваш візит успішно записано!');

        // Очищаємо поля форми
        document.getElementById('selectDoctor').value = '';
        document.getElementById('selectPatient').value = '';
        document.getElementById('visitDate').value = '';

    } else {
        alert('Будь ласка, оберіть лікаря, пацієнта та дату візиту.');
    }
}

// Функція для запису на візит до лікаря
function scheduleAppointment() {
    const selectedDoctor = document.getElementById('selectDoctor').value;
    const selectedPatient = document.getElementById('selectPatient').value;
    const visitDate = document.getElementById('visitDate').value;

    // Перевіряємо, чи вибрано лікаря та пацієнта і чи вибрана дата
    if (selectedDoctor && selectedPatient && visitDate) {
        // Зберігаємо інформацію про візит у localStorage
        const appointment = {
            doctor: selectedDoctor,
            patient: selectedPatient,
            visitDate: visitDate
        };

        let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
        appointments.push(appointment);
        localStorage.setItem('appointments', JSON.stringify(appointments));

        // Показуємо повідомлення про успішну запис на візит
        alert('Ваш візит успішно записано!');

        // Очищаємо поля форми
        document.getElementById('selectDoctor').value = '';
        document.getElementById('selectPatient').value = '';
        document.getElementById('visitDate').value = '';

    } else {
        alert('Будь ласка, оберіть лікаря, пацієнта та дату візиту.');
    }
}

// Функція для відображення вкладок і їх зміни
function openTab(tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => {
        tab.style.display = 'none';
    });

    document.getElementById(tabName).style.display = 'block';

    if (tabName === 'viewDoctors') {
        displayDoctors();
    } else if (tabName === 'viewPatients') {
        displayPatients();
    }
}

// Початково відображаємо сторінку створення пацієнта
openTab('createPatient');

// Функція для відображення записів на обрану дату

function displayAppointmentsByDate() {
    const selectedDate = document.getElementById('selectAppointmentDate').value;
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    const filteredAppointments = appointments.filter(appointment => appointment.visitDate === selectedDate);

    const appointmentsByDateTable = document.getElementById('appointmentsByDateBody');
    appointmentsByDateTable.innerHTML = ''; // Очищаємо вміст перед оновленням

    // Додаємо записи на обрану дату до таблиці
    filteredAppointments.forEach(appointment => {
        const row = appointmentsByDateTable.insertRow();
        row.innerHTML = `
            <td>${appointment.doctor}</td>
            <td>${appointment.patient}</td>
            <td>${appointment.visitDate}</td>
            <td>${appointment.medicalHistory}</td> <!-- Відображення історії захворювань -->
            <td><button onclick="editMedicalHistory('${appointment.patient}', '${appointment.visitDate}')">Редагувати</button></td>
        `;
    });
}

// Функція для оновлення історії захворювань пацієнта і в списку пацієнтів
function updateMedicalHistory(patientId, newMedicalHistory) {
    const patients = JSON.parse(localStorage.getItem('patients')) || [];

    // Знаходимо пацієнта за його ідентифікатором (patientId)
    const patientToUpdate = patients.find(patient => patient.id === patientId);

    if (patientToUpdate) {
        // Оновлюємо історію захворювань пацієнта
        patientToUpdate.medicalHistory = newMedicalHistory;

        // Оновлюємо дані в локальному сховищі
        localStorage.setItem('patients', JSON.stringify(patients));

        // Повторно відображаємо список пацієнтів
        displayPatients();
    } else {
        console.error(`Пацієнт з id ${patientId} не знайдений`);
    }
}

// Функція для редагування історії захворювань пацієнта на обрану дату
function editMedicalHistory(patientName, visitDate) {
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    
    // Знаходимо відповідний запис за пацієнтом і датою візиту
    const appointmentToUpdate = appointments.find(appointment => appointment.patient === patientName && appointment.visitDate === visitDate);

    if (appointmentToUpdate) {
        // Запитуємо користувача про нову історію захворювань
        const newMedicalHistory = prompt(`Редагувати історію захворювань для пацієнта ${patientName} на ${visitDate}:`, appointmentToUpdate.medicalHistory);

        if (newMedicalHistory !== null) {
            // Оновлюємо історію захворювань в записі
            appointmentToUpdate.medicalHistory = newMedicalHistory;

            // Оновлюємо історію захворювань в списку пацієнтів
            updateMedicalHistory(appointmentToUpdate.patientId, newMedicalHistory);

            // Оновлюємо дані в локальному сховищі
            localStorage.setItem('appointments', JSON.stringify(appointments));

            // Повторно відображаємо записи на обрану дату
            displayAppointmentsByDate();
        }
    } else {
        alert(`Запис не знайдено для пацієнта ${patientName} на ${visitDate}`);
    }
}

function deletePatient(firstName, lastName) {
    let patients = JSON.parse(localStorage.getItem('patients')) || [];
    patients = patients.filter(patient => !(patient.firstName === firstName && patient.lastName === lastName));
    localStorage.setItem('patients', JSON.stringify(patients));
    displayPatients(); // Оновлюємо список пацієнтів
}

// Функція для видалення лікаря за іменем і прізвищем
function deleteDoctor(firstName, lastName) {
    let doctors = JSON.parse(localStorage.getItem('doctors')) || [];
    doctors = doctors.filter(doctor => !(doctor.firstName === firstName && doctor.lastName === lastName));
    localStorage.setItem('doctors', JSON.stringify(doctors));
    displayDoctors(); // Оновлюємо список лікарів
}