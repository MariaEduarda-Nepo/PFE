function converterTemperatura() {
            const celsius = parseFloat(document.getElementById("celsius").value);
            
            if (isNaN(celsius)) {
                document.getElementById("resultado").textContent = "Por favor, digite um valor válido.";
                return;
            }

            const fahrenheit = celsius * 1.8 + 32;
            document.getElementById("resultado").textContent = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;

            if (fahrenheit > 80) {
                document.body.style.backgroundColor = "coral";
            } else {
                document.body.style.backgroundColor = "lightskyblue";
            }
        }