        let count = 0;
        const button = document.getElementById('button');
        button.addEventListener('click', function() {
            count++;
            button.textContent = "Դուք սեղմել եք " + count + " անգամ";
        });
