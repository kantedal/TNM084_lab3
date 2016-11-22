(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

var Renderer = require("./Renderer").Renderer;

global.app = function () {
  var renderer = new Renderer();
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9maWxsZXMtZGF0b3IvR2l0aHViL1ROTTA4NC9sYWIxL3NyYy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFlBQVksQ0FBQzs7QUFFYixJQUZTLFFBQVEsR0FBQSxPQUFBLENBQVEsWUFBWSxDQUFBLENBQTVCLFFBQVEsQ0FBQTs7QUFFakIsTUFBTSxDQUFDLEdBQUcsR0FBRyxZQUFZO0FBQ3ZCLE1BQUksUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7Q0FDL0IsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuL1JlbmRlcmVyJztcblxuZ2xvYmFsLmFwcCA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IHJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKCk7XG59O1xuIl19
},{"./Renderer":3}],2:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Triangle = (function () {
  function Triangle(v0, v1, v2) {
    _classCallCheck(this, Triangle);

    this._v0 = v0;
    this._v1 = v1;
    this._v2 = v2;

    this._edge1 = vec3.create();
    vec3.subtract(this._edge1, v0, v1);
    this._edge2 = vec3.create();
    vec3.subtract(this._edge2, v0, v2);
  }

  _createClass(Triangle, {
    v0: {
      get: function () {
        return this._v0;
      }
    },
    v1: {
      get: function () {
        return this._v1;
      }
    },
    v2: {
      get: function () {
        return this._v2;
      }
    },
    edge1: {
      get: function () {
        return this._edge1;
      }
    },
    edge2: {
      get: function () {
        return this._edge2;
      }
    }
  });

  return Triangle;
})();

var Object3d = exports.Object3d = (function () {
  function Object3d(triangles, material) {
    _classCallCheck(this, Object3d);

    this._triangles = triangles;
    this._material = material;
  }

  _createClass(Object3d, {
    triangles: {
      get: function () {
        return this._triangles;
      }
    },
    material: {
      get: function () {
        return this._material;
      }
    }
  }, {
    LoadObj: {
      value: function LoadObj(objData, material) {
        var vertices = [];
        var triangles = [];

        var lines = objData.split("\n");
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = lines[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var line = _step.value;

            var components = line.split(" ");

            switch (components[0]) {
              // Vertex indices
              case "f":
                triangles.push(new Triangle(vertices[components[1] - 1], vertices[components[2] - 1], vertices[components[3] - 1]));
                break;

              // Vertex positions
              case "v":
                vertices.push(vec3.fromValues(components[1], components[2], components[3]));
                break;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"]) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        console.log(triangles);
        return new Object3d(triangles, material);
      }
    }
  });

  return Object3d;
})();

},{}],3:[function(require,module,exports){
"use strict";

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var key in props) {
      var prop = props[key];prop.configurable = true;if (prop.value) prop.writable = true;
    }Object.defineProperties(target, props);
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
})();

var _classCallCheck = function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var LoadShaders = require("./ShaderLoader").LoadShaders;

var gl = null;

var Renderer = exports.Renderer = (function () {
  function Renderer() {
    var _this = this;

    _classCallCheck(this, Renderer);

    this.canvas = null;
    this.buffer;
    this.vertex_shader;
    this.fragment_shader;
    //this.tracerProgram;
    this.renderProgram;
    this.vertex_position;
    this.timeLocation;
    this.resolutionLocation;
    this.mousePositionLocation;
    this.parameters = { start_time: new Date().getTime(), time: 0, screenWidth: 0, screenHeight: 0, samples: 0 };

    this.samplesLocation;
    this.renderSamplesLocation;

    this.vertexBuffer = null;
    this.frameBuffer = null;
    this.fb = null;
    this.textures = [];
    this.tracerProgram = null;
    this.renderVertexAttribute = null;

    this.triangleTexture = null;

    this.mousePosition = { x: 0, y: 0 };

    this.init();

    this.animate = function (time) {
      _this.resizeCanvas();
      gl.viewport(0, 0, _this.canvas.width, _this.canvas.height);

      // render to texture
      gl.useProgram(_this.tracerProgram);

      var location1 = gl.getUniformLocation(_this.tracerProgram, "u_buffer_texture");
      var location2 = gl.getUniformLocation(_this.tracerProgram, "u_triangle_texture");

      gl.uniform1i(location1, 0);
      gl.uniform1i(location2, 1);

      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, _this.textures[0]);
      gl.activeTexture(gl.TEXTURE1);
      gl.bindTexture(gl.TEXTURE_2D, _this.triangleTexture);

      gl.bindBuffer(gl.ARRAY_BUFFER, _this.vertexBuffer);
      gl.bindFramebuffer(gl.FRAMEBUFFER, _this.fb);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, _this.textures[1], 0);
      gl.vertexAttribPointer(_this.tracerVertexAttribute, 2, gl.FLOAT, false, 0, 0);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);

      _this.parameters.time = new Date().getTime() - _this.parameters.start_time;
      _this.parameters.samples += 1;

      gl.uniform1f(_this.timeLocation, _this.parameters.time / 1000);
      gl.uniform1f(_this.samplesLocation, _this.parameters.samples);
      gl.uniform2f(_this.resolutionLocation, _this.parameters.screenWidth, _this.parameters.screenHeight);
      gl.uniform2f(_this.mousePositionLocation, _this.mousePosition.x, _this.mousePosition.y);

      _this.textures.reverse();

      gl.useProgram(_this.renderProgram);
      gl.bindTexture(gl.TEXTURE_2D, _this.textures[0]);
      gl.bindBuffer(gl.ARRAY_BUFFER, _this.vertexBuffer);
      gl.vertexAttribPointer(_this.renderVertexAttribute, 2, gl.FLOAT, false, 0, 0);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      gl.uniform1f(_this.renderSamplesLocation, _this.parameters.samples);

      requestAnimationFrame(_this.animate);
    };
  }

  _createClass(Renderer, {
    createRenderProgram: {
      value: function createRenderProgram() {
        var vertices = [-1, -1, -1, 1, 1, -1, 1, 1];
        this.vertexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

        //this.frameBuffer = gl.createFramebuffer();
        this.fb = gl.createFramebuffer();

        var type = gl.getExtension("OES_texture_float") ? gl.FLOAT : gl.UNSIGNED_BYTE;
        this.textures = [];
        for (var i = 0; i < 2; i++) {
          this.textures.push(gl.createTexture());
          gl.bindTexture(gl.TEXTURE_2D, this.textures[i]);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, 512, 512, 0, gl.RGB, type, null);
        }
        gl.bindTexture(gl.TEXTURE_2D, null);

        // create render shader
        var render_vertex_shader = document.getElementById("vs_render").textContent;
        var render_fragment_shader = document.getElementById("fs_render").textContent;
        this.renderProgram = this.createProgram(render_vertex_shader, render_fragment_shader);
        this.renderVertexAttribute = gl.getAttribLocation(this.renderProgram, "vertex");
        gl.enableVertexAttribArray(this.renderVertexAttribute);
      }
    },
    allocateTexture: {
      value: function allocateTexture() {
        this.triangleTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this.triangleTexture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      }
    },
    addSceneTextures: {
      value: function addSceneTextures(triangleArray) {
        console.log("Create triangle texture");

        this.allocateTexture();
        var width = 1024;
        var height = 1024;
        var format = gl.RGB;

        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, width, height, 0, format, gl.FLOAT, triangleArray);
      }
    },
    init: {
      value: function init() {
        var _this = this;

        console.log("init renderer");
        LoadShaders(["./dist/kernels/header.glsl", "./dist/kernels/cellular3D.glsl",
        //'./dist/kernels/noise2D.glsl',
        "./dist/kernels/main.glsl"], function (kernelData) {
          console.log(kernelData);
          _this.fragment_shader = kernelData;
          _this.vertex_shader = document.getElementById("vs").textContent;
          _this.canvas = document.querySelector("canvas");

          // Initialise WebGL
          try {
            gl = _this.canvas.getContext("experimental-webgl");
          } catch (error) {}
          if (!gl) throw "cannot create webgl context";

          _this.createRenderProgram();

          // Create Vertex buffer (2 triangles)
          _this.buffer = gl.createBuffer();
          gl.bindBuffer(gl.ARRAY_BUFFER, _this.buffer);
          gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1]), gl.STATIC_DRAW);

          // Create Program
          _this.tracerProgram = _this.createProgram(_this.vertex_shader, _this.fragment_shader);
          _this.tracerVertexAttribute = gl.getAttribLocation(_this.tracerProgram, "vertex");
          gl.enableVertexAttribArray(_this.tracerVertexAttribute);

          _this.timeLocation = gl.getUniformLocation(_this.tracerProgram, "time");
          _this.samplesLocation = gl.getUniformLocation(_this.tracerProgram, "samples");
          _this.resolutionLocation = gl.getUniformLocation(_this.tracerProgram, "resolution");
          _this.mousePositionLocation = gl.getUniformLocation(_this.tracerProgram, "mousePosition");
          _this.renderSamplesLocation = gl.getUniformLocation(_this.renderProgram, "samples");

          _this.animate();
        }, function () {});

        $("#render-canvas").mousemove(function (event) {
          _this.mousePosition.x = event.pageX;
          _this.mousePosition.y = event.pageY;
        });
      }
    },
    createProgram: {
      value: function createProgram(vertex, fragment) {
        var program = gl.createProgram();

        var vs = this.createShader(vertex, gl.VERTEX_SHADER);
        var fs = this.createShader(fragment, gl.FRAGMENT_SHADER);

        gl.attachShader(program, vs);
        gl.attachShader(program, fs);

        gl.deleteShader(vs);
        gl.deleteShader(fs);

        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
          return null;
        }

        return program;
      }
    },
    createShader: {
      value: function createShader(src, type) {
        var shader = gl.createShader(type);

        gl.shaderSource(shader, src);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          return null;
        }
        return shader;
      }
    },
    resizeCanvas: {
      value: function resizeCanvas(event) {
        if (this.canvas.width != this.canvas.clientWidth || this.canvas.height != this.canvas.clientHeight) {
          this.canvas.width = this.canvas.clientWidth;
          this.canvas.height = this.canvas.clientHeight;

          this.parameters.screenWidth = this.canvas.width;
          this.parameters.screenHeight = this.canvas.height;

          gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        }
      }
    }
  });

  return Renderer;
})();

},{"./ShaderLoader":4}],4:[function(require,module,exports){
"use strict";

exports.LoadShaders = LoadShaders;
exports.LoadObjects = LoadObjects;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var Object3d = require("./Object3d").Object3d;

function LoadShader(fileName, index, callback) {
  jQuery.get(fileName, function (data) {
    callback(data, index);
  });
}

function LoadShaders(fileNames, callback, errorCallback) {
  var loaded_files = 0;
  var shader_files = [];
  for (var file_index = 0; file_index < fileNames.length; file_index++) {
    LoadShader(fileNames[file_index], file_index, function (data, shader_index) {
      shader_files[shader_index] = data;

      loaded_files++;
      if (loaded_files == fileNames.length) {
        var total_shader_data = "";
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = shader_files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var shader_data = _step.value;

            total_shader_data += shader_data;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"]) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        callback(total_shader_data);
      }
    });
  }
}

function LoadObjects(fileNames, callback, errorCallback) {
  var loaded_files = 0;
  var object_files = [];
  for (var file_index = 0; file_index < fileNames.length; file_index++) {
    LoadShader(fileNames[file_index].fileName, file_index, function (data, shader_index) {
      var object = Object3d.LoadObj(data, fileNames[shader_index].material);
      object_files[shader_index] = object;
      loaded_files++;
      if (loaded_files == fileNames.length) {
        console.log(object_files);
        callback(object_files);
      }
    });
  }
}

},{"./Object3d":2}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwiL1VzZXJzL2ZpbGxlcy1kYXRvci9HaXRodWIvVE5NMDg0L2xhYjEvc3JjL09iamVjdDNkLmpzIiwiL1VzZXJzL2ZpbGxlcy1kYXRvci9HaXRodWIvVE5NMDg0L2xhYjEvc3JjL1JlbmRlcmVyLmpzIiwiL1VzZXJzL2ZpbGxlcy1kYXRvci9HaXRodWIvVE5NMDg0L2xhYjEvc3JjL1NoYWRlckxvYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztJQ1ZNLFFBQVE7QUFDRCxXQURQLFFBQVEsQ0FDQSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTswQkFEcEIsUUFBUTs7QUFFVixRQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNkLFFBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ2QsUUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7O0FBRWQsUUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDNUIsUUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNuQyxRQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUM1QixRQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0dBQ3BDOztlQVZHLFFBQVE7QUFZUixNQUFFO1dBQUEsWUFBRztBQUFFLGVBQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztPQUFFOztBQUN6QixNQUFFO1dBQUEsWUFBRztBQUFFLGVBQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztPQUFFOztB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QU0sRUFBRSxVQUFVLEVBQUUsRUFBRTtBQUNsRSxjQUFVLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsVUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFLO0FBQzdFLFVBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN0RSxrQkFBWSxDQUFDLFlBQVksQ0FBQyxHQUFHLE1BQU0sQ0FBQztBQUNwQyxrQkFBWSxFQUFFLENBQUM7QUFDZixVQUFJLFlBQVksSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFO0FBQ3BDLGVBQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDMUIsZ0JBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztPQUN4QjtLQUNGLENBQUMsQ0FBQztHQUVOO0NBQ0oiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBSZW5kZXJlciA9IHJlcXVpcmUoXCIuL1JlbmRlcmVyXCIpLlJlbmRlcmVyO1xuXG5nbG9iYWwuYXBwID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoKTtcbn07XG5cbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ6dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk5VmMyVnljeTltYVd4c1pYTXRaR0YwYjNJdlIybDBhSFZpTDFST1RUQTROQzlzWVdJeEwzTnlZeTloY0hBdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTEZsQlFWa3NRMEZCUXpzN1FVRkZZaXhKUVVaVExGRkJRVkVzUjBGQlFTeFBRVUZCTEVOQlFWRXNXVUZCV1N4RFFVRkJMRU5CUVRWQ0xGRkJRVkVzUTBGQlFUczdRVUZGYWtJc1RVRkJUU3hEUVVGRExFZEJRVWNzUjBGQlJ5eFpRVUZaTzBGQlEzWkNMRTFCUVVrc1VVRkJVU3hIUVVGSExFbEJRVWtzVVVGQlVTeEZRVUZGTEVOQlFVTTdRMEZETDBJc1EwRkJReUlzSW1acGJHVWlPaUpuWlc1bGNtRjBaV1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1VtVnVaR1Z5WlhJZ2ZTQm1jbTl0SUNjdUwxSmxibVJsY21WeUp6dGNibHh1WjJ4dlltRnNMbUZ3Y0NBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ2JHVjBJSEpsYm1SbGNtVnlJRDBnYm1WM0lGSmxibVJsY21WeUtDazdYRzU5TzF4dUlsMTkiLCJjbGFzcyBUcmlhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKHYwLCB2MSwgdjIpIHtcbiAgICB0aGlzLl92MCA9IHYwO1xuICAgIHRoaXMuX3YxID0gdjE7XG4gICAgdGhpcy5fdjIgPSB2MjtcblxuICAgIHRoaXMuX2VkZ2UxID0gdmVjMy5jcmVhdGUoKTtcbiAgICB2ZWMzLnN1YnRyYWN0KHRoaXMuX2VkZ2UxLCB2MCwgdjEpO1xuICAgIHRoaXMuX2VkZ2UyID0gdmVjMy5jcmVhdGUoKTtcbiAgICB2ZWMzLnN1YnRyYWN0KHRoaXMuX2VkZ2UyLCB2MCwgdjIpO1xuICB9XG5cbiAgZ2V0IHYwKCkgeyByZXR1cm4gdGhpcy5fdjA7IH1cbiAgZ2V0IHYxKCkgeyByZXR1cm4gdGhpcy5fdjE7IH1cbiAgZ2V0IHYyKCkgeyByZXR1cm4gdGhpcy5fdjI7IH1cbiAgZ2V0IGVkZ2UxKCkgeyByZXR1cm4gdGhpcy5fZWRnZTE7IH1cbiAgZ2V0IGVkZ2UyKCkgeyByZXR1cm4gdGhpcy5fZWRnZTI7IH1cbn1cblxuZXhwb3J0IGNsYXNzIE9iamVjdDNkIHtcbiAgY29uc3RydWN0b3IodHJpYW5nbGVzLCBtYXRlcmlhbCkge1xuICAgIHRoaXMuX3RyaWFuZ2xlcyA9IHRyaWFuZ2xlcztcbiAgICB0aGlzLl9tYXRlcmlhbCA9IG1hdGVyaWFsO1xuICB9XG5cbiAgc3RhdGljIExvYWRPYmoob2JqRGF0YSwgbWF0ZXJpYWwpIHtcbiAgICAgIGxldCB2ZXJ0aWNlcyA9IFtdO1xuICAgICAgbGV0IHRyaWFuZ2xlcyA9IFtdO1xuXG4gICAgICBsZXQgbGluZXMgPSBvYmpEYXRhLnNwbGl0KCdcXG4nKTtcbiAgICAgIGZvciAobGV0IGxpbmUgb2YgbGluZXMpIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudHMgPSBsaW5lLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgc3dpdGNoIChjb21wb25lbnRzWzBdKSB7XG4gICAgICAgICAgLy8gVmVydGV4IGluZGljZXNcbiAgICAgICAgICBjYXNlICdmJzpcbiAgICAgICAgICAgIHRyaWFuZ2xlcy5wdXNoKG5ldyBUcmlhbmdsZSh2ZXJ0aWNlc1tjb21wb25lbnRzWzFdIC0gMV0sIHZlcnRpY2VzW2NvbXBvbmVudHNbMl0gLSAxXSwgdmVydGljZXNbY29tcG9uZW50c1szXSAtIDFdKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIC8vIFZlcnRleCBwb3NpdGlvbnNcbiAgICAgICAgICBjYXNlICd2JzpcbiAgICAgICAgICAgIHZlcnRpY2VzLnB1c2godmVjMy5mcm9tVmFsdWVzKGNvbXBvbmVudHNbMV0sIGNvbXBvbmVudHNbMl0sIGNvbXBvbmVudHNbM10pKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyh0cmlhbmdsZXMpO1xuICAgICAgcmV0dXJuIG5ldyBPYmplY3QzZCh0cmlhbmdsZXMsIG1hdGVyaWFsKTtcbiAgfVxuXG4gIGdldCB0cmlhbmdsZXMoKSB7IHJldHVybiB0aGlzLl90cmlhbmdsZXM7IH1cbiAgZ2V0IG1hdGVyaWFsKCkgeyByZXR1cm4gdGhpcy5fbWF0ZXJpYWw7IH1cbn1cbiIsImltcG9ydCB7IExvYWRTaGFkZXJzIH0gZnJvbSAnLi9TaGFkZXJMb2FkZXInO1xuXG52YXIgZ2wgPSBudWxsO1xuXG5leHBvcnQgY2xhc3MgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNhbnZhcyA9IG51bGw7XG4gICAgdGhpcy5idWZmZXI7XG4gICAgdGhpcy52ZXJ0ZXhfc2hhZGVyO1xuICAgIHRoaXMuZnJhZ21lbnRfc2hhZGVyO1xuICAgIC8vdGhpcy50cmFjZXJQcm9ncmFtO1xuICAgIHRoaXMucmVuZGVyUHJvZ3JhbTtcbiAgICB0aGlzLnZlcnRleF9wb3NpdGlvbjtcbiAgICB0aGlzLnRpbWVMb2NhdGlvbjtcbiAgICB0aGlzLnJlc29sdXRpb25Mb2NhdGlvbjtcbiAgICB0aGlzLm1vdXNlUG9zaXRpb25Mb2NhdGlvbjtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSB7IHN0YXJ0X3RpbWU6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLCB0aW1lOiAwLCBzY3JlZW5XaWR0aCA6IDAsIHNjcmVlbkhlaWdodDogMCwgc2FtcGxlczogMCB9O1xuXG4gICAgdGhpcy5zYW1wbGVzTG9jYXRpb247XG4gICAgdGhpcy5yZW5kZXJTYW1wbGVzTG9jYXRpb247XG5cbiAgICB0aGlzLnZlcnRleEJ1ZmZlciA9IG51bGw7XG4gICAgdGhpcy5mcmFtZUJ1ZmZlciA9IG51bGw7XG4gICAgdGhpcy5mYiA9IG51bGw7XG4gICAgdGhpcy50ZXh0dXJlcyA9IFtdO1xuICAgIHRoaXMudHJhY2VyUHJvZ3JhbSA9IG51bGw7XG4gICAgdGhpcy5yZW5kZXJWZXJ0ZXhBdHRyaWJ1dGUgPSBudWxsO1xuXG4gICAgdGhpcy50cmlhbmdsZVRleHR1cmUgPSBudWxsO1xuXG4gICAgdGhpcy5tb3VzZVBvc2l0aW9uID0ge3g6IDAsIHk6IDB9O1xuXG4gICAgdGhpcy5pbml0KCk7XG5cbiAgICB0aGlzLmFuaW1hdGUgPSAodGltZSkgPT4ge1xuICAgICAgdGhpcy5yZXNpemVDYW52YXMoKTtcbiAgICAgIGdsLnZpZXdwb3J0KCAwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0ICk7XG5cbiAgICAgIC8vIHJlbmRlciB0byB0ZXh0dXJlXG4gICAgICBnbC51c2VQcm9ncmFtKHRoaXMudHJhY2VyUHJvZ3JhbSk7XG5cbiAgICAgIHZhciBsb2NhdGlvbjEgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy50cmFjZXJQcm9ncmFtLCBcInVfYnVmZmVyX3RleHR1cmVcIik7XG4gICAgICB2YXIgbG9jYXRpb24yID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMudHJhY2VyUHJvZ3JhbSwgXCJ1X3RyaWFuZ2xlX3RleHR1cmVcIik7XG5cbiAgICAgIGdsLnVuaWZvcm0xaShsb2NhdGlvbjEsIDApO1xuICAgICAgZ2wudW5pZm9ybTFpKGxvY2F0aW9uMiwgMSk7XG5cbiAgICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTApO1xuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy50ZXh0dXJlc1swXSk7XG4gICAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUxKTtcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMudHJpYW5nbGVUZXh0dXJlKTtcblxuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmVydGV4QnVmZmVyKTtcbiAgICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgdGhpcy5mYik7XG4gICAgICBnbC5mcmFtZWJ1ZmZlclRleHR1cmUyRChnbC5GUkFNRUJVRkZFUiwgZ2wuQ09MT1JfQVRUQUNITUVOVDAsIGdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZXNbMV0sIDApO1xuICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLnRyYWNlclZlcnRleEF0dHJpYnV0ZSwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcbiAgICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVfU1RSSVAsIDAsIDQpO1xuICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBudWxsKTtcblxuICAgICAgdGhpcy5wYXJhbWV0ZXJzLnRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRoaXMucGFyYW1ldGVycy5zdGFydF90aW1lO1xuICAgICAgdGhpcy5wYXJhbWV0ZXJzLnNhbXBsZXMgKz0gMTtcblxuICAgICAgZ2wudW5pZm9ybTFmKCB0aGlzLnRpbWVMb2NhdGlvbiwgdGhpcy5wYXJhbWV0ZXJzLnRpbWUgLyAxMDAwKTtcbiAgICAgIGdsLnVuaWZvcm0xZiggdGhpcy5zYW1wbGVzTG9jYXRpb24sICB0aGlzLnBhcmFtZXRlcnMuc2FtcGxlcyApO1xuICAgICAgZ2wudW5pZm9ybTJmKCB0aGlzLnJlc29sdXRpb25Mb2NhdGlvbiwgdGhpcy5wYXJhbWV0ZXJzLnNjcmVlbldpZHRoLCB0aGlzLnBhcmFtZXRlcnMuc2NyZWVuSGVpZ2h0ICk7XG4gICAgICBnbC51bmlmb3JtMmYoIHRoaXMubW91c2VQb3NpdGlvbkxvY2F0aW9uLCB0aGlzLm1vdXNlUG9zaXRpb24ueCwgdGhpcy5tb3VzZVBvc2l0aW9uLnkgKTtcblxuICAgICAgdGhpcy50ZXh0dXJlcy5yZXZlcnNlKCk7XG5cbiAgICAgIGdsLnVzZVByb2dyYW0odGhpcy5yZW5kZXJQcm9ncmFtKTtcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZXNbMF0pO1xuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmVydGV4QnVmZmVyKTtcbiAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5yZW5kZXJWZXJ0ZXhBdHRyaWJ1dGUsIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XG4gICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0KTtcbiAgICAgIGdsLnVuaWZvcm0xZiggdGhpcy5yZW5kZXJTYW1wbGVzTG9jYXRpb24sICB0aGlzLnBhcmFtZXRlcnMuc2FtcGxlcyApO1xuXG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIHRoaXMuYW5pbWF0ZSApO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZVJlbmRlclByb2dyYW0oKSB7XG4gICAgbGV0IHZlcnRpY2VzID0gWy0xLCAtMSwgLTEsIDEsIDEsIC0xLCAxLCAxXTtcbiAgICB0aGlzLnZlcnRleEJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnZlcnRleEJ1ZmZlcik7XG4gICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkodmVydGljZXMpLCBnbC5TVEFUSUNfRFJBVyk7XG5cbiAgICAvL3RoaXMuZnJhbWVCdWZmZXIgPSBnbC5jcmVhdGVGcmFtZWJ1ZmZlcigpO1xuICAgIHRoaXMuZmIgPSBnbC5jcmVhdGVGcmFtZWJ1ZmZlcigpO1xuXG4gICAgbGV0IHR5cGUgPSBnbC5nZXRFeHRlbnNpb24oJ09FU190ZXh0dXJlX2Zsb2F0JykgPyBnbC5GTE9BVCA6IGdsLlVOU0lHTkVEX0JZVEU7XG4gICAgdGhpcy50ZXh0dXJlcyA9IFtdO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgIHRoaXMudGV4dHVyZXMucHVzaChnbC5jcmVhdGVUZXh0dXJlKCkpO1xuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy50ZXh0dXJlc1tpXSk7XG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XG4gICAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQiwgNTEyLCA1MTIsIDAsIGdsLlJHQiwgdHlwZSwgbnVsbCk7XG4gICAgfVxuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG51bGwpO1xuXG4gICAgLy8gY3JlYXRlIHJlbmRlciBzaGFkZXJcbiAgICBsZXQgcmVuZGVyX3ZlcnRleF9zaGFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndnNfcmVuZGVyJykudGV4dENvbnRlbnQ7XG4gICAgbGV0IHJlbmRlcl9mcmFnbWVudF9zaGFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnNfcmVuZGVyJykudGV4dENvbnRlbnQ7XG4gICAgdGhpcy5yZW5kZXJQcm9ncmFtID0gdGhpcy5jcmVhdGVQcm9ncmFtKHJlbmRlcl92ZXJ0ZXhfc2hhZGVyLCByZW5kZXJfZnJhZ21lbnRfc2hhZGVyKTtcbiAgICB0aGlzLnJlbmRlclZlcnRleEF0dHJpYnV0ZSA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMucmVuZGVyUHJvZ3JhbSwgJ3ZlcnRleCcpO1xuICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMucmVuZGVyVmVydGV4QXR0cmlidXRlKTtcbiAgfVxuXG4gIGFsbG9jYXRlVGV4dHVyZSgpIHtcbiAgICAgIHRoaXMudHJpYW5nbGVUZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy50cmlhbmdsZVRleHR1cmUpO1xuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLk5FQVJFU1QpO1xuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLk5FQVJFU1QpO1xuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcbiAgfVxuXG4gIGFkZFNjZW5lVGV4dHVyZXModHJpYW5nbGVBcnJheSkge1xuICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRlIHRyaWFuZ2xlIHRleHR1cmVcIik7XG5cbiAgICB0aGlzLmFsbG9jYXRlVGV4dHVyZSgpO1xuICAgIGxldCB3aWR0aCA9IDEwMjQ7XG4gICAgbGV0IGhlaWdodCA9IDEwMjQ7XG4gICAgbGV0IGZvcm1hdCA9IGdsLlJHQjtcblxuICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuUkdCLCB3aWR0aCwgaGVpZ2h0LCAwLCBmb3JtYXQsIGdsLkZMT0FULCB0cmlhbmdsZUFycmF5KTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgY29uc29sZS5sb2coXCJpbml0IHJlbmRlcmVyXCIpO1xuICAgIExvYWRTaGFkZXJzKFtcbiAgICAgICcuL2Rpc3Qva2VybmVscy9oZWFkZXIuZ2xzbCcsXG4gICAgICAnLi9kaXN0L2tlcm5lbHMvY2VsbHVsYXIzRC5nbHNsJyxcbiAgICAgIC8vJy4vZGlzdC9rZXJuZWxzL25vaXNlMkQuZ2xzbCcsXG4gICAgICAnLi9kaXN0L2tlcm5lbHMvbWFpbi5nbHNsJ1xuICAgIF0sIChrZXJuZWxEYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGtlcm5lbERhdGEpO1xuICAgICAgICB0aGlzLmZyYWdtZW50X3NoYWRlciA9IGtlcm5lbERhdGE7XG4gICAgICAgIHRoaXMudmVydGV4X3NoYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2cycpLnRleHRDb250ZW50O1xuICAgIFx0XHR0aGlzLmNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xuXG4gICAgXHRcdC8vIEluaXRpYWxpc2UgV2ViR0xcbiAgICBcdFx0dHJ5IHsgZ2wgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCAnZXhwZXJpbWVudGFsLXdlYmdsJyApOyB9IGNhdGNoKCBlcnJvciApIHsgfVxuICAgIFx0XHRpZiAoICFnbCApIHRocm93IFwiY2Fubm90IGNyZWF0ZSB3ZWJnbCBjb250ZXh0XCI7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVSZW5kZXJQcm9ncmFtKCk7XG5cbiAgICBcdFx0Ly8gQ3JlYXRlIFZlcnRleCBidWZmZXIgKDIgdHJpYW5nbGVzKVxuICAgIFx0XHR0aGlzLmJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgIFx0XHRnbC5iaW5kQnVmZmVyKCBnbC5BUlJBWV9CVUZGRVIsIHRoaXMuYnVmZmVyICk7XG4gICAgXHRcdGdsLmJ1ZmZlckRhdGEoIGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheSggWyAtMS4wLCAtMS4wLCAtMS4wLCAxLjAsIDEuMCwgLTEuMCwgMS4wLCAtIDEuMCwgMS4wLCAxLjAsIC0gMS4wLCAxLjAgXSApLCBnbC5TVEFUSUNfRFJBVyApO1xuXG4gICAgXHRcdC8vIENyZWF0ZSBQcm9ncmFtXG4gICAgXHRcdHRoaXMudHJhY2VyUHJvZ3JhbSA9IHRoaXMuY3JlYXRlUHJvZ3JhbSggdGhpcy52ZXJ0ZXhfc2hhZGVyLCB0aGlzLmZyYWdtZW50X3NoYWRlciApO1xuICAgICAgICB0aGlzLnRyYWNlclZlcnRleEF0dHJpYnV0ZSA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMudHJhY2VyUHJvZ3JhbSwgJ3ZlcnRleCcpO1xuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLnRyYWNlclZlcnRleEF0dHJpYnV0ZSk7XG5cbiAgICAgICAgdGhpcy50aW1lTG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oIHRoaXMudHJhY2VyUHJvZ3JhbSwgJ3RpbWUnICk7XG4gICAgICAgIHRoaXMuc2FtcGxlc0xvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKCB0aGlzLnRyYWNlclByb2dyYW0sICdzYW1wbGVzJyApO1xuICAgIFx0XHR0aGlzLnJlc29sdXRpb25Mb2NhdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbiggdGhpcy50cmFjZXJQcm9ncmFtLCAncmVzb2x1dGlvbicgKTtcbiAgICBcdFx0dGhpcy5tb3VzZVBvc2l0aW9uTG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oIHRoaXMudHJhY2VyUHJvZ3JhbSwgJ21vdXNlUG9zaXRpb24nICk7XG4gICAgICAgIHRoaXMucmVuZGVyU2FtcGxlc0xvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKCB0aGlzLnJlbmRlclByb2dyYW0sICdzYW1wbGVzJyApO1xuXG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIH0sXG4gICAgKCkgPT4ge30pO1xuXG4gICAgJCggXCIjcmVuZGVyLWNhbnZhc1wiICkubW91c2Vtb3ZlKChldmVudCkgPT4ge1xuICAgICAgdGhpcy5tb3VzZVBvc2l0aW9uLnggPSBldmVudC5wYWdlWDtcbiAgICAgIHRoaXMubW91c2VQb3NpdGlvbi55ID0gZXZlbnQucGFnZVk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGNyZWF0ZVByb2dyYW0odmVydGV4LCBmcmFnbWVudCkge1xuICAgIGxldCBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuXG5cdFx0bGV0IHZzID0gdGhpcy5jcmVhdGVTaGFkZXIoIHZlcnRleCwgZ2wuVkVSVEVYX1NIQURFUiApO1xuXHRcdGxldCBmcyA9IHRoaXMuY3JlYXRlU2hhZGVyKCBmcmFnbWVudCwgZ2wuRlJBR01FTlRfU0hBREVSICk7XG5cblx0XHRnbC5hdHRhY2hTaGFkZXIoIHByb2dyYW0sIHZzICk7XG5cdFx0Z2wuYXR0YWNoU2hhZGVyKCBwcm9ncmFtLCBmcyApO1xuXG5cdFx0Z2wuZGVsZXRlU2hhZGVyKCB2cyApO1xuXHRcdGdsLmRlbGV0ZVNoYWRlciggZnMgKTtcblxuXHRcdGdsLmxpbmtQcm9ncmFtKCBwcm9ncmFtICk7XG5cblx0XHRpZiAoICFnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKCBwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUyApICkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHByb2dyYW07XG4gIH1cblxuICBjcmVhdGVTaGFkZXIoc3JjLCB0eXBlKSB7XG4gICAgbGV0IHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlciggdHlwZSApO1xuXG5cdFx0Z2wuc2hhZGVyU291cmNlKCBzaGFkZXIsIHNyYyApO1xuXHRcdGdsLmNvbXBpbGVTaGFkZXIoIHNoYWRlciApO1xuXG5cdFx0aWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoIHNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0cmV0dXJuIHNoYWRlcjtcbiAgfVxuXG4gIHJlc2l6ZUNhbnZhcyhldmVudCkge1xuICAgIGlmKHRoaXMuY2FudmFzLndpZHRoICE9IHRoaXMuY2FudmFzLmNsaWVudFdpZHRoIHx8IHRoaXMuY2FudmFzLmhlaWdodCAhPSB0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQpIHtcblx0XHRcdHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5jYW52YXMuY2xpZW50V2lkdGg7XG5cdFx0XHR0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQ7XG5cblx0XHRcdHRoaXMucGFyYW1ldGVycy5zY3JlZW5XaWR0aCA9IHRoaXMuY2FudmFzLndpZHRoO1xuXHRcdFx0dGhpcy5wYXJhbWV0ZXJzLnNjcmVlbkhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodDtcblxuXHRcdFx0Z2wudmlld3BvcnQoIDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQgKTtcblx0XHR9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgT2JqZWN0M2QgfSBmcm9tICcuL09iamVjdDNkJztcblxuZnVuY3Rpb24gTG9hZFNoYWRlcihmaWxlTmFtZSwgaW5kZXgsIGNhbGxiYWNrKSB7XG4gIGpRdWVyeS5nZXQoZmlsZU5hbWUsIChkYXRhKSA9PiB7XG4gICAgY2FsbGJhY2soZGF0YSwgaW5kZXgpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExvYWRTaGFkZXJzKGZpbGVOYW1lcywgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgbGV0IGxvYWRlZF9maWxlcyA9IDA7XG4gIGxldCBzaGFkZXJfZmlsZXMgPSBbXTtcbiAgZm9yIChsZXQgZmlsZV9pbmRleCA9IDA7IGZpbGVfaW5kZXggPCBmaWxlTmFtZXMubGVuZ3RoOyBmaWxlX2luZGV4KyspIHtcbiAgICAgIExvYWRTaGFkZXIoZmlsZU5hbWVzW2ZpbGVfaW5kZXhdLCBmaWxlX2luZGV4LCAoZGF0YSwgc2hhZGVyX2luZGV4KSA9PiB7XG4gICAgICAgIHNoYWRlcl9maWxlc1tzaGFkZXJfaW5kZXhdID0gZGF0YTtcblxuICAgICAgICBsb2FkZWRfZmlsZXMrKztcbiAgICAgICAgaWYgKGxvYWRlZF9maWxlcyA9PSBmaWxlTmFtZXMubGVuZ3RoKSB7XG4gICAgICAgICAgbGV0IHRvdGFsX3NoYWRlcl9kYXRhID0gJyc7XG4gICAgICAgICAgZm9yIChsZXQgc2hhZGVyX2RhdGEgb2Ygc2hhZGVyX2ZpbGVzKSB7XG4gICAgICAgICAgICB0b3RhbF9zaGFkZXJfZGF0YSArPSBzaGFkZXJfZGF0YTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FsbGJhY2sodG90YWxfc2hhZGVyX2RhdGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIExvYWRPYmplY3RzKGZpbGVOYW1lcywgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICBsZXQgbG9hZGVkX2ZpbGVzID0gMDtcbiAgICBsZXQgb2JqZWN0X2ZpbGVzID0gW107XG4gICAgZm9yIChsZXQgZmlsZV9pbmRleCA9IDA7IGZpbGVfaW5kZXggPCBmaWxlTmFtZXMubGVuZ3RoOyBmaWxlX2luZGV4KyspIHtcbiAgICAgICAgTG9hZFNoYWRlcihmaWxlTmFtZXNbZmlsZV9pbmRleF0uZmlsZU5hbWUsIGZpbGVfaW5kZXgsIChkYXRhLCBzaGFkZXJfaW5kZXgpID0+IHtcbiAgICAgICAgICBsZXQgb2JqZWN0ID0gT2JqZWN0M2QuTG9hZE9iaihkYXRhLCBmaWxlTmFtZXNbc2hhZGVyX2luZGV4XS5tYXRlcmlhbCk7XG4gICAgICAgICAgb2JqZWN0X2ZpbGVzW3NoYWRlcl9pbmRleF0gPSBvYmplY3Q7XG4gICAgICAgICAgbG9hZGVkX2ZpbGVzKys7XG4gICAgICAgICAgaWYgKGxvYWRlZF9maWxlcyA9PSBmaWxlTmFtZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhvYmplY3RfZmlsZXMpO1xuICAgICAgICAgICAgY2FsbGJhY2sob2JqZWN0X2ZpbGVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxufVxuIl19
