<template>
</template>
<script id="bw-highlighter-config" data-version="RSV">
export default {
    mounted: function() {
        (function(w, d, s, e, id) {
        w._bhparse = w._bhparse || [];
        function l() {
            if (d.getElementById(id)) return;
            var n = d.createElement(s), x = d.getElementsByTagName(s)[0];
            n.id = id; n.async = true; n.src = '//bibles.org/linker/js/client.js';// n.dataset['version'] = 'RSV';
            x.parentNode.insertBefore(n, x);
        }
        (w.attachEvent) ? w.attachEvent('on' + e, l) : w.addEventListener(e, l, false);
        })(window, document, 'script', 'load', 'bw-highlighter-src');
    }
}
</script>
