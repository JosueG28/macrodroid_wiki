// assets/lang-redirect.js
(function(){
  // No hacer nada si ya estamos en una ruta con /en/ o /es/
  var p = window.location.pathname;
  if (p.includes('/en/') || p.includes('/es/')) return;

  // idioma preferido del navegador (ej: "es-MX", "en-US")
  var l = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage || 'en';
  l = l.toLowerCase();

  // función para redirigir manteniendo hash y search
  function go(langPrefix) {
    var newPath = '/' + langPrefix + window.location.pathname;
    // normalizar doble slash
    newPath = newPath.replace(/\/+/g, '/');
    // si termina en '/', MkDocs espera a veces index, pero ok
    var target = newPath + window.location.search + window.location.hash;
    // evita bucle: solo redirige si la ruta resultante no coincide con la actual
    if (target !== window.location.pathname + window.location.search + window.location.hash) {
      window.location.replace(target);
    }
  }

  // si idioma empieza por "es" -> español, si "en" -> inglés, si otro -> inglés por defecto
  if (l.startsWith('es')) {
    go('es');
  } else {
    go('en');
  }
})();
