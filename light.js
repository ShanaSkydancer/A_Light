class Light {
    constructor(id, color){  
        const elem = document.getElementById(id);
        elem.classList.add('light-background');
        const lightElem = document.createElement('div');
        lightElem.classList.add('light');
        lightElem.classList.add(color);
        elem.appendChild(lightElem);
        this.color = color;
        this.state = 'off';
    }

    on(){
        var lightElem = document.querySelector('.light');        
        lightElem.classList.add('on');        
        this.state = 'on';
    }

    off(){
        var lightElem = document.querySelector('.light');                
        lightElem.classList.remove('on');                
        this.state = 'off';
    }

    blink(){
        setInterval(() => {
            if (this.state === 'on') {
                this.off();
            } else {
                this.on();
            };

        }, 1000);
    }

    status(){
        return "This is a " + this.color + " light and it is currently " + this.state;
    }
};

const light = new Light('light', 'green');
// light.on();
// console.log(light.state);
// console.log(light.status());
// setTimeout(() =>{
//     light.off();
//     console.log(light.state);
//     console.log(light.status());
// }, 1000);
light.blink();
console.log(light.state);
console.log(light.status());