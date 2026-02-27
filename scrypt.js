        let count = 0;
        const button = document.getElementById('button');
        button.addEventListener('click', function() {
            count++;
            row.textContent = "Դուք սեղմել եք " + count + " անգամ";
        });
