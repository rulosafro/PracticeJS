"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Guitarras = function Guitarras(marca, nombre, precio, imgSrc, tipo, color) {
  _classCallCheck(this, Guitarras);

  this.marca = marca;
  this.nombre = nombre;
  this.precio = precio;
  this.imgSrc = imgSrc;
  this.tipo = tipo;
  this.color = color;
};

var guitarra1 = new Guitarras("Greg ImageBitmapRenderingContext", "Interceptor IC-1", 299990, "", "El\xE9ctrica", "Negro");
var guitarra2 = new Guitarras("Greg ImageBitmapRenderingContext", "Interceptor IC-1", 299990, "", "El\xE9ctrica", "Negro");
var guitarra3 = new Guitarras("Greg ImageBitmapRenderingContext", "Interceptor IC-1", 299990, "", "El\xE9ctrica", "Negro");
var guitarra4 = new Guitarras("Greg ImageBitmapRenderingContext", "Interceptor IC-1", 299990, "", "El\xE9ctrica", "Negro");
var guitarra5 = new Guitarras("Greg ImageBitmapRenderingContext", "Interceptor IC-1", 299990, "", "El\xE9ctrica", "Negro");
var guitarra6 = new Guitarras("Greg ImageBitmapRenderingContext", "Interceptor IC-1", 299990, "", "El\xE9ctrica", "Negro");
var dataGuitarras = [guitarra1, guitarra2, guitarra3, guitarra4, guitarra5, guitarra6];