document.addEventListener('DOMContentLoaded', function() {
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleHeight = document.getElementById('rectangle-height');
    const addRectangleBtn = document.getElementById('add-rectangle');
    const squareSide = document.getElementById('square-side');
    const addSquareBtn = document.getElementById('add-square');
    const circleRadius = document.getElementById('circle-radius');
    const addCircleBtn = document.getElementById('add-circle');
    const triangleHeight = document.getElementById('triangle-height');
    const addTriangleBtn = document.getElementById('add-triangle');
    const drawingBoard = document.getElementById('drawingboard');
    const sidePanel = document.getElementById('sidepanel');
    const nameValueSpan = document.getElementById('nameValueSpan');
    const nameLabelSpan = document.getElementById('nameLabelSpan');
    const heightValueSpan = document.getElementById('heightValueSpan');
    const heightLabelSpan = document.getElementById('heightLabelSpan');
    const resetBtn = document.getElementById('reset');
    const shapes = []
    maxPixels = 600;

    const getRandomValue = (minimum, maximum) => {
        return Math.floor(Math.random() * (maximum - minimum) + minimum);
    }
})

//making the parent class of Shape
class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.div = document.createElement('div');
        this.div.classList.add('shape');
        drawingBoard.appendChild(this.div);
        shapes.push(this);
    }
    getRandomLocation() {
        this.div.style.top =`${getRandomValue(this.height, maxPixels)}px`;
        this.div.style.left = `${getRandomValue(this.width, maxPixels)}px`;
    }
    defineShape(id, height, width){
        nameValueSpan.innerHTML = `${id}`;
        widthValueSpan.innerHTML = `${width} px`
        heightValueSpan.innerHTML = `${height} px`
    }
    removeShape() {
        nameLabelSpan.innerHTML = 'Name: ';
        heightLabelSpan.innerHTML = 'Height: ';
        widthLabelSpan.innerHTML = 'Width: ';
        areaLabelSpan.innerHTML = 'Area: ';
        perimeterLabelSpan.innerHTML = 'Perimeter: ';
        nameValueSpan.innerHTML = '';
        heightValueSpan.innerHTML = '';
        widthValueSpan.innerHTML = '';
        areaValueSpan.innerHTML = '';
        perimeterValueSpan.innerHTML = '';
        drawingBoard.removeChild(this.div);
        shapes.splice(this, 1);
    }
}

class Circle extends Shape {
    constructor(height, radius) {
    super(height);
    this.radius = radius;
    this.div.classList.add('circle');
    this.div.style.height = `${height}px`
    this.div.style.radius = `${radius} px`
    this.div.addEventListener('click', () => {
        this.defineShape(this.div.id, this.height);
        widthLabelSpan.innerHTML = 'Diameter: ';
        areaLabelSpan.innerHTML = 'Area: ';
        perimeterLabelSpan.innerHTML = 'Circumference: ';
        widthValueSpan.innerHTML = `${Math.floor(2 * radius)} Pixels`;
        areaValueSpan.innerHTML = `${Math.floor(Math.PI * (radius * radius))} Pixels`;
        perimeterValueSpan.innerHTML = `${Math.floor(2 * Math.PI * height)} Pixels`;
    })
    this.div.addEventListener('dblclick', () => {
        this.removeShape();
    })
    
    this.getRandomLocation();
    
}
getRandomLocation() {
    this.div.style.top = `${getRandomValue(this.height, maxPixels)}px`;
    this.div.style.left = `${getRandomValue(this.height, maxPixels)}px`;
}
defineShape(id, height) {
    nameLabelSpan.innerHTML = 'Name: ';
    heightLabelSpan.innerHTML = 'Radius: ';
    nameValueSpan.innerHTML = `${id}`;
    heightValueSpan.innerHTML = `${height} Pixels`;
}
}

class Triangle extends Shape {
    constructor(height) {
        super(height);
        this.div.id = 'triangle';
        this.height = height;
        this.div.classList.add('triangle');
        this.div.style.borderBottomWidth = `${height}px`;
        this.div.style.borderRightWidth = `${height}px`;
    this.div.addEventListener('click', () => {
        this.defineShape(this.div.id, this.height);
        areaLabelSpan.innerHTML = 'Area: ';
        perimeterLabelSpan.innerHTML = 'Circumference: ';
        areaValueSpan.innerHTML = `${Math.floor(0.5 * height * height)} Pixels`;
        perimeterValueSpan.innerHTML = `${Math.floor(2 * (height * height) + Math.sqrt(2) * height)} Pixels`;
    })
    this.div.addEventListener('dblclick', () => {
        this.removeShape()
    })
}}


class Rectangle extends Shape {
 constructor(height, width) {
 super(height, width);
 this.area = height * width;
 this.div.classList.add('rectangle');
 this.div.id = 'rectangle';
 this.div.style.height = `${height}px`;
 this.div.style.width = `${width}px`;
 this.getRandomLocation();

 this.div.addEventListener('click', () => {
     this.defineShape(this.div.id, this.height, this.width);
     areaLabelSpan.innerHTML = 'area: ';
     perimeterLabelSpan.innterHTML = 'perimeter: ';
     areaValueSpan.innerHTML = `${Math.floor(height * width)} pixels`;
     perimeterValueSpan.innerHTML = `${Math.floor(2 * (height+width))} pixels`;
 }),
 this.div.addEventListener('dblclick', () =>{
    this.removeShape();
});
function defineShape(id, height, width) {
    nameLabelSpan.innerHTML = 'Name: ';
    heightLabelSpan.innerHTML = 'Length: ';
    widthLabelSpan.innerHTML = 'Width: ';
    nameValueSpan.innerHTML = `${id}`;
    heightValueSpan.innerHTML = `${height} Pixels`;
    widthValueSpan.innerHTML = `${width} Pixels`;
};
 }};

class Square extends Shape {
    constructor(height) {
        super(height);
        this.div.id = 'square';
        this.div.style.height = `${height}px`;
        this.div.style.width = `${height}px`;
        this.height = this.sideLength;
        this.div.classList.add('square');
        this.getRandomLocation() {
            this.div.style.top = `${getRandomValue(this.height, maxPixels)}px`;
            this.div.style.left = `${getRandomValue(this.height, maxPixels)}px`;
        }
        this.getRandomLocation();
        this.div.addEventListener("click", () => {
            this.describeShape(this.div.id, this.height, this.height);
            areaLabelSpan.innerHTML = 'Area: ';
            perimeterLabelSpan.innerHTML = 'Perimeter: ';
            areaValueSpan.innerHTML = `${Math.floor(height * height)} Pixels`;
            perimeterValueSpan.innerHTML = `${Math.floor(4 * height)} Pixels`;
        })
        this.div.addEventListener('dblclick', () => {
            this.removeShape();
        })
        this.defineShape(id, height) {
            nameLabelSpan.innerHTML = 'Name: ';
            heightLabelSpan.innerHTML = 'Side: ';
            widthLabelSpan.innerHTML = 'Side: ';
            nameValueSpan.innerHTML = `${id}`;
            heightValueSpan.innerHTML = `${height} Pixels`;
            widthValueSpan.innerHTML = `${height} Pixels`;
        }
        }
    }

    rectangleLengthInput.addEventListener('keyup', function() {
        let rectangleLengthInputValue = document.getElementById('rectangleLengthInput').value;
        let rectangleWidthInputValue = document.getElementById('rectangleWidthInput').value;
        if(rectangleLengthInputValue !== "" && rectangleWidthInputValue !== "") {
            insertRectangleButton.removeAttribute('disabled');
        }
    })

    rectangleWidth.addEventListener('keyup', function() {
        let rectangleWidthValue = document.getElementById('rectangleWidthInput').value;
        let rectangleLengthValue = document.getElementById('rectangleLengthInput').value;
        if(rectangleWidthValue !== "" && rectangleLengthValue !== "") {
            addRectangleBtn.removeAttribute('disabled');
        }
    })

    squareSide.addEventListener('keyup', function() {
        let squareSideValue = document.getElementById('squareSide').value;
        if(squareSideValue !== '') {
            addSquareBtn.removeAttribute('disabled');
        }
    })

    circleRadius.addEventListener('keyup', function() {
        let circleRadiusValue = document.getElementById('circleRadiusInput').value;
        if(circleRadiusValue !== '') {
            addCircleBtn.removeAttribute('disabled');
        }
    })

    triangleHeight.addEventListener('keyup', function() {
        let triangleHeightValue = document.getElementById('triangleHeight').value;
        if(triangleHeightValue !== '') {
            addTriangleBtn.removeAttribute('disabled');
        }
    })

    
}