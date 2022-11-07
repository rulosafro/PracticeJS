"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* ! 
Cosas por hacer 
- Branch con los comentarios
- Base de datos 
- Variables, Obtos JS
- Funcionalidad inicial
- Flujo de trabajo ene l script capturando las entradas ingresadas por el usuario prompt() y salida por medio de alert()
*/
// * Objeto o Class para la persona
var Persona =
/*#__PURE__*/
function () {
  function Persona(nombre, peso, sexo, anio) {
    _classCallCheck(this, Persona);

    this.nombre = nombre;
    this.peso = peso;
    this.sexo = sexo;
    this.anio = anio;
  }

  _createClass(Persona, [{
    key: "mostrar",
    value: function mostrar() {
      console.log(this.Persona);
    }
  }]);

  return Persona;
}();