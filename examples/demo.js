self.Demo = (function($P, document) {
  console.log($P);
  function computation() {
    for (var i = 0; i < 2100000000; i++) {}
  }

  function sync() {
    var span = document.getElementsByClassName('task')[0];
    span.innerHTML = "<br/> task 1 : Start " + new Date();
    computation();
    span.innerHTML += "<br/> task 1 : Stop " + new Date();
    span.innerHTML += "<br/> task 2 : Start" + new Date();
    computation();
    span.innerHTML += "<br/> task 2 : Stop " + new Date();
  }

  function task() {
    var span = document.getElementsByClassName('task')[1];
    span.innerHTML = '';
    $P.spawn([computation, function() {
      self.postMessage("<br/> task 1 : Start " + new Date());
      computation();
      self.postMessage("<br/> task 1 : Stop " + new Date());
      self.close();
    }]).subscribe(function(text) {
      span.innerHTML += text;
    });
    $P.spawn([computation, function() {
      self.postMessage("<br/> task 2 : Start " + new Date());
      computation();
      self.postMessage("<br/> task 2 : Stop " + new Date());
      self.close();
    }]).subscribe(function(text) {
      span.innerHTML += text;
    });
  }

  function clear() {
    [0, 1].forEach(function(i) {
      document.getElementsByClassName('task')[i].innerHTML = '';
    });
  }

  var o = (function() {
    var imageObj = new self.Image();
    imageObj.onload = function() {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
      var x = 6;
      var y = 6;
      context.drawImage(this, x, y);
    };
    imageObj.src = './demo.jpg';

    function grayscale() {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
      var x = 6;
      var y = 6;
      console.log("gray : Start " + new Date());
      var imageData = context.getImageData(x, y, imageObj.width, imageObj.height);
      var data = imageData.data;

      for (var i = 0; i < data.length; i += 4) {
        var brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
        // red
        data[i] = brightness;
        // green
        data[i + 1] = brightness;
        // blue
        data[i + 2] = brightness;
      }

      // overwrite original image
      context.putImageData(imageData, x, y);
      console.log("gray : Start " + new Date());
    }

    return {
      grayscale: grayscale
    };
  })();

  return {
    sync: sync,
    task: task,
    clear: clear,
    grayscale: o.grayscale
  };
})(self.$P, self.document);
