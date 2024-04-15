const results = document.querySelector("#results");
      const calculateBtn = document.querySelector("#calculate");
      const clearBtn = document.querySelector("#clear");
      const numberInput = document.querySelector("#numberInput");

      function calculate() {
        const n = parseInt(numberInput.value);
        results.textContent += `\nTABLE OF ${n}\n`;

        for (let i = 1; i < 11; i++) {
          let newText = `\n${n} X ${i} = ${n * i}`;
          results.textContent += `${newText}`;
        }
        results.textContent += "\nFINISHED!! \n";
      }

      calculateBtn.addEventListener("click", calculate);
      clearBtn.addEventListener("click", () => (results.textContent = ""));