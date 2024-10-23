function calculateDerivative() {
  let input = document.getElementById("inputFunction").value;
  try {
      let result = math.derivative(input, 'x').toString();
      document.getElementById("resultDerivative").innerHTML = `Hasil derivasi: ${result}`;
  } catch (error) {
      document.getElementById("resultDerivative").innerHTML = "Kesalahan input, coba lagi!";
  }
}

function calculateIntegral() {
  let input = document.getElementById("inputIntegral").value;
  let a = parseFloat(document.getElementById("a").value); 
  let b = parseFloat(document.getElementById("b").value); 
  let n = 1000;
  let h = (b -a) / n;

  try {
      let f = math.compile(input);

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

plotTrigonometry();
updateLinearGraph();
