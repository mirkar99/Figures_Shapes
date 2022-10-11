const naviggation = {
    areaSection: document.querySelector('.section--area'),
    circumferenceSection: document.querySelector('.section--circumference'),
    naviggationBtns: [...document.querySelector('.nav').children],
    changeSection: function () {
        this.naviggationBtns.forEach((el, index) => {
            el.addEventListener('click', () => {
                if (index === 0) {
                    this.areaSection.classList.remove('hidden');
                    this.circumferenceSection.classList.add('hidden');
                }
                if (index === 1) {
                    this.circumferenceSection.classList.remove('hidden');
                    this.areaSection.classList.add('hidden');
                }
            })
        })
    }
}
const FormValidation = {
    validation: function (inputMsg, ...a) {
        let ValidationStatus = true;
        a.forEach((el) => {
            if (el.value < 1) {
                ValidationStatus = false;
                inputMsg.value = `Parameters can't be under the 0`;
            }
            if (el.value > 100000) {
                ValidationStatus = false;
                inputMsg.value = `Parameters range 1-100000`;
            }
        })
        return ValidationStatus;
    }
}
const Shapes = {
    write: function (inputMsg, area, symbols) {
        inputMsg.value = `${symbols[0]} ${area} ${symbols[1]}`;
    }
}
const SquareAreaFrom = {
    a: [...document.querySelector(".form--AreaSquare")][0],
    inputMsg: [...document.querySelector(".form--AreaSquare")][1],
    button: [...document.querySelector(".form--AreaSquare")][2],
    calculateArea: function () {
        this.button.addEventListener('click', () => {
            if (FormValidation.validation(this.inputMsg, this.a)) {
                const areaValue = this.a.value * this.a.value;
                Shapes.write(this.inputMsg, areaValue, ['=', 'cm²'])
            }
        })
    }

}
const RectangleAreaFrom = {
    a: [...document.querySelector(".form--AreaRectangle")][0],
    b: [...document.querySelector(".form--AreaRectangle")][1],
    inputMsg: [...document.querySelector(".form--AreaRectangle")][2],
    button: [...document.querySelector(".form--AreaRectangle")][3],
    calculateArea: function () {
        this.button.addEventListener('click', () => {
            if (FormValidation.validation(this.inputMsg, this.a, this.b)) {
                const areaValue = this.a.value * this.b.value;
                Shapes.write(this.inputMsg, areaValue, ['=', 'cm²'])
            }
        })
    }
}
const CircleAreaFrom = {
    r: [...document.querySelector(".form--AreaCircle")][0],
    inputMsg: [...document.querySelector(".form--AreaCircle")][1],
    button: [...document.querySelector(".form--AreaCircle")][2],
    calculateArea: function () {
        this.button.addEventListener('click', () => {
            if (FormValidation.validation(this.inputMsg, this.r)) {
                const areaValue = (Math.PI * Math.pow(this.r.value, 2)).toFixed(2);
                Shapes.write(this.inputMsg, areaValue, ['≈', 'cm²'])
            }
        })
    }
}
const TriangleAreaFrom = {
    a: [...document.querySelector(".form--AreaTriangle")][0],
    h: [...document.querySelector(".form--AreaTriangle")][1],
    inputMsg: [...document.querySelector(".form--AreaTriangle")][2],
    button: [...document.querySelector(".form--AreaTriangle")][3],
    calculateArea: function () {
        this.button.addEventListener('click', () => {
            if (FormValidation.validation(this.inputMsg, this.a, this.h)) {
                const areaValue = 1 / 2 * this.a.value * this.h.value;
                Shapes.write(this.inputMsg, areaValue, ['=', 'cm²'])
            }
        })
    }
}

const SquareCircumferenceFrom = {
    a: [...document.querySelector(".form--CircumferenceSquare")][0],
    inputMsg: [...document.querySelector(".form--CircumferenceSquare")][1],
    button: [...document.querySelector(".form--CircumferenceSquare")][2],
    calculateCircumference: function () {
        this.button.addEventListener('click', () => {
            if (FormValidation.validation(this.inputMsg, this.a)) {
                const circumferenceValue = 4 * this.a.value;
                Shapes.write(this.inputMsg, circumferenceValue, ['=', 'cm'])
            }
        })
    }
}
const RectangleCircumferenceFrom = {
    a: [...document.querySelector(".form--CircumferenceRectangle")][0],
    b: [...document.querySelector(".form--CircumferenceRectangle")][1],
    inputMsg: [...document.querySelector(".form--CircumferenceRectangle")][2],
    button: [...document.querySelector(".form--CircumferenceRectangle")][3],
    calculateCircumference: function () {
        this.button.addEventListener('click', () => {
            if (FormValidation.validation(this.inputMsg, this.a, this.b)) {
                const circumferenceValue = 2 * this.a.value + 2 * this.b.value;
                Shapes.write(this.inputMsg, circumferenceValue, ['=', 'cm'])
            }
        })
    }
}
const CircleCircumferenceFrom = {
    d: [...document.querySelector(".form--CircumferenceCircle")][0],
    inputMsg: [...document.querySelector(".form--CircumferenceCircle")][1],
    button: [...document.querySelector(".form--CircumferenceCircle")][2],
    calculateCircumference: function () {
        this.button.addEventListener('click', () => {
            if (FormValidation.validation(this.inputMsg, this.d)) {
                const circumferenceValue = (Math.PI * this.d.value).toFixed(2);
                Shapes.write(this.inputMsg, circumferenceValue, ['≈', 'cm'])
            }
        })
    }
}

naviggation.changeSection();

SquareAreaFrom.calculateArea();
RectangleAreaFrom.calculateArea();
CircleAreaFrom.calculateArea();
TriangleAreaFrom.calculateArea();

SquareCircumferenceFrom.calculateCircumference()
RectangleCircumferenceFrom.calculateCircumference()
CircleCircumferenceFrom.calculateCircumference()