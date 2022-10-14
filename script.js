const squareAreaInputs = [...document.querySelector(".form--AreaSquare")];
const rectangleAreaInputs = [...document.querySelector(".form--AreaRectangle")];
const circleAreaInptus = [...document.querySelector(".form--AreaCircle")];
const triangleAreaInputs = [...document.querySelector(".form--AreaTriangle")];

const squareCircumferenceInputs = [...document.querySelector(".form--CircumferenceSquare")];
const rectangleCircumferenceInputs = [...document.querySelector(".form--CircumferenceRectangle")];
const circleCircumferenceInputs = [...document.querySelector(".form--CircumferenceCircle")];
const triangleCircumferenceIsoscelesInputs = [...document.querySelector(".form--CircumferenceTriangleIsosceles")];

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
    a: squareAreaInputs[0],
    inputMsg: squareAreaInputs[1],
    button: squareAreaInputs[2],
    calculateArea: function () {
        this.button.addEventListener('click', () => {
            if (FormValidation.validation(this.inputMsg, this.a)) {
                const areaValue = this.a.value * this.a.value;
                Shapes.write(this.inputMsg, areaValue, ['=', 'cm²']);
            }
        })
    }

}
const RectangleAreaFrom = {
    a: rectangleAreaInputs[0],
    b: rectangleAreaInputs[1],
    inputMsg: rectangleAreaInputs[2],
    button: rectangleAreaInputs[3],
    calculateArea: function () {
        this.button.addEventListener('click', () => {
            if (FormValidation.validation(this.inputMsg, this.a, this.b)) {
                const areaValue = this.a.value * this.b.value;
                Shapes.write(this.inputMsg, areaValue, ['=', 'cm²']);
            }
        })
    }
}
const CircleAreaFrom = {
    r: circleAreaInptus[0],
    inputMsg: circleAreaInptus[1],
    button: circleAreaInptus[2],
    calculateArea: function () {
        this.button.addEventListener('click', () => {
            if (FormValidation.validation(this.inputMsg, this.r)) {
                const areaValue = (Math.PI * Math.pow(this.r.value, 2)).toFixed(2);
                Shapes.write(this.inputMsg, areaValue, ['≈', 'cm²']);
            }
        })
    }
}
const TriangleAreaFrom = {
    a: triangleAreaInputs[0],
    h: triangleAreaInputs[1],
    inputMsg: triangleAreaInputs[2],
    button: triangleAreaInputs[3],
    calculateArea: function () {
        this.button.addEventListener('click', () => {
            if (FormValidation.validation(this.inputMsg, this.a, this.h)) {
                const areaValue = 1 / 2 * this.a.value * this.h.value;
                Shapes.write(this.inputMsg, areaValue, ['=', 'cm²']);
            }
        })
    }
}

const SquareCircumferenceFrom = {
    a: squareCircumferenceInputs[0],
    inputMsg: squareCircumferenceInputs[1],
    button: squareCircumferenceInputs[2],
    calculateCircumference: function () {
        this.button.addEventListener('click', () => {
            if (FormValidation.validation(this.inputMsg, this.a)) {
                const circumferenceValue = 4 * this.a.value;
                Shapes.write(this.inputMsg, circumferenceValue, ['=', 'cm']);
            }
        })
    }
}
const RectangleCircumferenceFrom = {
    a: rectangleCircumferenceInputs[0],
    b: rectangleCircumferenceInputs[1],
    inputMsg: rectangleCircumferenceInputs[2],
    button: rectangleCircumferenceInputs[3],
    calculateCircumference: function () {
        this.button.addEventListener('click', () => {
            if (FormValidation.validation(this.inputMsg, this.a, this.b)) {
                const circumferenceValue = 2 * this.a.value + 2 * this.b.value;
                Shapes.write(this.inputMsg, circumferenceValue, ['=', 'cm']);
            }
        })
    }
}
const CircleCircumferenceFrom = {
    d: circleCircumferenceInputs[0],
    inputMsg: circleCircumferenceInputs[1],
    button: circleCircumferenceInputs[2],
    calculateCircumference: function () {
        this.button.addEventListener('click', () => {
            if (FormValidation.validation(this.inputMsg, this.d)) {
                const circumferenceValue = (Math.PI * this.d.value).toFixed(2);
                Shapes.write(this.inputMsg, circumferenceValue, ['≈', 'cm']);
            }
        })
    }
}
const TriangleIsoscelesCircumferenceFrom = {
    a: triangleCircumferenceIsoscelesInputs[0],
    l: triangleCircumferenceIsoscelesInputs[1],
    inputMsg: triangleCircumferenceIsoscelesInputs[2],
    button: triangleCircumferenceIsoscelesInputs[3],
    calculateCircumference: function () {
        this.button.addEventListener('click', () => {
            if (FormValidation.validation(this.inputMsg, this.a, this.b)) {
                const circumferenceValue = this.a.value + 2 * this.l.value;
                Shapes.write(this.inputMsg, circumferenceValue, ['=', 'cm']);
            }
        })
    }
}
naviggation.changeSection();

SquareAreaFrom.calculateArea();
RectangleAreaFrom.calculateArea();
CircleAreaFrom.calculateArea();
TriangleAreaFrom.calculateArea();

SquareCircumferenceFrom.calculateCircumference();
RectangleCircumferenceFrom.calculateCircumference();
CircleCircumferenceFrom.calculateCircumference();
TriangleIsoscelesCircumferenceFrom.calculateCircumference();