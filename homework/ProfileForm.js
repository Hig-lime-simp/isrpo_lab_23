export class ProfileForm {
    constructor() {
        this.form = document.querySelector('form');
        this.nameInput = document.getElementById('InputName');
        this.ageInput = document.getElementById('InputAge');
        this.cityInput = document.getElementById('InputCity');
        this.hobbyInput = document.getElementById('InputHobby');
        
        this.outName = document.getElementById('OutName');
        this.outAge = document.getElementById('OutAge');
        this.outCity = document.getElementById('OutCity');
        this.outHobby = document.getElementById('OutHobby');
        
        this.clearBtn = document.getElementById('clear');
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.showError = this.showError.bind(this);
        this.resetErrorStyles = this.resetErrorStyles.bind(this);
    }
    
    init() {
        this.form.addEventListener('submit', this.handleSubmit);
        this.clearBtn.addEventListener('click', this.handleClear);
        
        this.inputs = [
            this.nameInput,
            this.ageInput,
            this.cityInput,
            this.hobbyInput
        ];
    }
    
    handleSubmit(event) {
        event.preventDefault(); 
        
        this.resetErrorStyles(); 
        
        const name = this.nameInput.value.trim();
        const age = this.ageInput.value.trim();
        const city = this.cityInput.value.trim();
        const hobby = this.hobbyInput.value.trim();
        
        if (!this.validateForm(name, age, city, hobby)) {
            return; 
        }
        
        this.displayData(name, age, city, hobby);
    }
    
    validateForm(name, age, city, hobby) {
        if (name === '') {
            this.showError(this.nameInput, 'Пожалуйста, введите ФИО');
            return false;
        }
        
        if (age === '') {
            this.showError(this.ageInput, 'Пожалуйста, введите возраст');
            return false;
        }
        
        if (isNaN(age)) {
            this.showError(this.ageInput, 'Возраст должен быть числом');
            this.ageInput.value = '';
            return false;
        }
        
        if (city === '') {
            this.showError(this.cityInput, 'Пожалуйста, введите город');
            return false;
        }
        
        if (hobby === '') {
            this.showError(this.hobbyInput, 'Пожалуйста, введите хобби');
            return false;
        }
        
        return true; 
    }
    
    displayData(name, age, city, hobby) {
        this.outName.textContent = name;
        this.outAge.textContent = age;
        this.outCity.textContent = city;
        this.outHobby.textContent = hobby;
    }
    
    showError(input, message) {
        input.style.border = '2px solid red';
        alert(message);
        input.focus();
    }
    
    resetErrorStyles() {
        this.inputs.forEach(input => {
            input.style.border = '1px solid #ddd';
        });
    }
    
    handleClear() {
        this.nameInput.value = '';
        this.ageInput.value = '';
        this.cityInput.value = '';
        this.hobbyInput.value = '';
        
        this.outName.textContent = 'Текст';
        this.outAge.textContent = 'Текст';
        this.outCity.textContent = 'Текст';
        this.outHobby.textContent = 'Текст';
        
        this.resetErrorStyles();
        
        this.nameInput.focus();
    }
}