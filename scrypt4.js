function Lamp() {
            const lamp = document.getElementById('lamp');
            const body = document.body;

          
            if (lamp.classList.contains('off')) {
             
                lamp.classList.remove('off');
                lamp.classList.add('on');
                body.classList.add('light-on');
            } else {
             
                lamp.classList.remove('on');
                lamp.classList.add('off');
                body.classList.remove('light-on');
            }
        }