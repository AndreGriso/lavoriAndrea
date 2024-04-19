const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

      // Disegna gli assi cartesiani
    function disegnaAssi() {
        context.strokeStyle = "black";
        context.beginPath();
        context.moveTo(250, 0);
        context.lineTo(250, 500);
        context.stroke();
        context.beginPath();
        context.moveTo(0, 250);
        context.lineTo(500, 250);
        context.stroke();
    }

      // Funzione che disegna una retta dati i coefficienti angolari m e q
     // Funzione che disegna una retta dati i coefficienti angolari m e q
    function disegnaRetta(m, q) {
        // Calcola i punti (x,y) della retta
        const x1 = -250; //punto della x che corrisponde a parte sinistra del canvas
        const y1 = m * x1 + q;
        const x2 = 250; //punto della x che rappresenta parte destra del canvas
        const y2 = m * x2 + q;

        // Disegna la retta in modo progressivo
        let LineaProgressiva = 0; //variabile che disegna linea progressivamente
        const intervalId = setInterval(function() {
			context.beginPath(); //funzione per inizio disegno
			context.moveTo(x1 + 250, -y1 + 250); //disegna il primo punto partendo da x1 e y1
			const x = x1 + LineaProgressiva * (x2 - x1);
			const y = y1 + LineaProgressiva * (y2 - y1);
			context.lineTo(x + 250, -y + 250); //traccia linea
			context.strokeStyle = "red";
			context.stroke(); //metodo che traccia linea sul canvas
			LineaProgressiva += 0.01;
			if (LineaProgressiva > 1) { //la retta si ferma di disegnare quando progres p maggiore di uno
				clearInterval(intervalId);
        	}
    	}, 20);
    }


      // Funzione che disegna la retta con il coefficiente angolare inserito dall'utente
    function disegna() {
		const coeffAngolare = Number(document.getElementById("coeffAngolare").value);
		context.clearRect(0, 0, canvas.width, canvas.height);
		disegnaAssi();
		disegnaRetta(coeffAngolare, 0);
    }