// assets/lang-redirect.js
(function(){
  try {
    var pathname = window.location.pathname; // e.g. "/macrodroid_wiki/" or "/macrodroid_wiki/page"
    var search = window.location.search || '';
    var hash = window.location.hash || '';

    // Si ya estamos en una ruta que contiene /en/ o /es/, no hacemos nada
    if (pathname.includes('/en/') || pathname.endsWith('/en') || pathname.includes('/es/') || pathname.endsWith('/es')) {
      return;
    }

    // Evitar redirigir múltiples veces en la misma sesión
    if (sessionStorage.getItem('md_lang_redirect_done')) return;

    // Detectar idioma del navegador
    var langRaw = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
    var lang = langRaw.toLowerCase().startsWith('es') ? 'es' : 'en';

    // Detectar el primer segmento "base" (por ejemplo 'macrodroid_wiki')
    // split y filter para ignorar '' por slashes
    var segs = pathname.split('/').filter(Boolean); // ["macrodroid_wiki", "foo", ...] o [] si "/"
    var base = '';
    var rest = '/';
    if (segs.length > 0) {
      // asumimos que el primer segmento es el base (nombre del repo o carpeta)
      base = '/' + segs[0];
      // reconstruir resto de la ruta sin el primer segmento
      var restSegs = segs.slice(1);
      rest = '/' + restSegs.join('/');
      if (rest === '/') {
        // keep as '/'
      }
    } else {
      // sitio en raíz (no subpath)
      base = '';
      rest = pathname === '/' ? '/' : pathname;
    }

    // Construir nueva ruta: base + '/' + lang + rest
    var newPath = (base ? base : '') + '/' + lang + (rest === '/' ? '/' : rest);
    // Normalizar barras duplicadas
    newPath = newPath.replace(/\/+/g, '/');

    // Si la nueva ruta ya es la actual (raro), no redirigir
    var currentFull = pathname + search + hash;
    var targetFull = newPath + search + hash;
    if (currentFull === targetFull) return;

    // Marcar como hecho y redirigir (replace para no llenar el historial)
    sessionStorage.setItem('md_lang_redirect_done', '1');
    window.location.replace(targetFull);
  } catch (e) {
    // En caso de error, no romper la página
    console.error('lang-redirect error:', e);
  }
})();
