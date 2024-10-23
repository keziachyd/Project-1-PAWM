// Kalkulator Turunan
function calculateDerivative() {
  let input = document.getElementById("inputFunction").value;
  try {
      let result = math.derivative(input, 'x').toString();
      document.getElementById("resultDerivative").innerHTML = `Hasil derivasi: ${result}`;
  } catch (error) {
      document.getElementById("resultDerivative").innerHTML = "Kesalahan input, coba lagi!";
  }
}

// Kalkulator Integral
// Fungsi untuk menghitung integral numerik dengan metode Trapezoid
function calculateIntegral() {
  let input = document.getElementById("inputIntegral").value; // Ekspresi fungsi
  let a = parseFloat(document.getElementById("a").value); // Batas bawah
  let b = parseFloat(document.getElementById("b").value); // Batas atas
  let n = 1000; // Jumlah interval (semakin besar, semakin akurat)
  let h = (b - a) / n; // Lebar interval

  try {
      // Definisikan fungsi menggunakan math.js
      let f = math.compile(input);

      // Hitung integral menggunakan metode Trapezoid
      let integral = 0;
      for (let i = 0; i <= n; i++) {
          let x_i = a + i * h;
          let weight = (i === 0 || i === n) ? 0.5 : 1;
          integral += weight * f.evaluate({ x: x_i });
      }
      integral *= h;

      document.getElementById("resultIntegral").innerHTML = `Hasil integral numerik: ${integral}`;
  } catch (error) {
      document.getElementById("resultIntegral").innerHTML = "Kesalahan input, coba lagi!";
  }
}


// Grafik Trigonometri (sin, cos)
function plotTrigonometry() {
  var xValues = [];
  var sinValues = [];
  var cosValues = [];

  for (var i = 0; i <= 360; i++) {
      var radians = i * Math.PI / 180;
      xValues.push(i);
      sinValues.push(Math.sin(radians));
      cosValues.push(Math.cos(radians));
  }

  var sinTrace = {
      x: xValues,
      y: sinValues,
      mode: 'lines',
      name: 'sin(x)'
  };

  var cosTrace = {
      x: xValues,
      y: cosValues,
      mode: 'lines',
      name: 'cos(x)'
  };

  var data = [sinTrace, cosTrace];

  Plotly.newPlot('graphTrigonometry', data);
}

// Simulasi Fungsi Linear y = mx + c
function updateLinearGraph() {
  let m = parseFloat(document.getElementById("m").value);
  let c = parseFloat(document.getElementById("c").value);
  document.getElementById("mValue").innerText = m;
  document.getElementById("cValue").innerText = c;

  var xValues = [];
  var yValues = [];

  for (var x = -10; x <= 10; x++) {
      xValues.push(x);
      yValues.push(m * x + c);
  }

  var trace = {
      x: xValues,
      y: yValues,
      mode: 'lines',
      name: `y = ${m}x + ${c}`
  };

  var data = [trace];

  Plotly.newPlot('graphLinear', data);
}

// Jalankan fungsi grafik saat halaman dibuka
plotTrigonometry();
updateLinearGraph();
