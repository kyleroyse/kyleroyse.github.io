<script>
jQuery.fn.marquee = function ($) {

    function findTextNodes(node) {
        var result = [],
            i = 0,
            child;
        while (child = node.childNodes[i++]) {
            if (child.nodeType === 3) {
                result.push(child);
            } else {
                result = result.concat(
                    findTextNodes(child)
                );
            }
        }
        return result;
    }

    function write(node, text, fn) {
        var i = 0;
        setTimeout(function () {
            node.nodeValue += text[i++];
            if (i < text.length) {
                setTimeout(arguments.callee, 50);
            } else {
                fn();
            }
        }, 50);
    }

    return function (html) {
        var fragment, textNodes, text;
        fragment = $('<div>' + html + '</div>');
        textNodes = findTextNodes(fragment[0]);
        text = $.map(textNodes, function (node) {
            var text = node.nodeValue;
            node.nodeValue = '';
            return text;
        });
        this.each(function () {
            var clone = fragment.clone(),
                textNodes = findTextNodes(clone[0]),
                i = 0;
            $(this).append(clone.contents());
            (function next(node) {
                if (node = textNodes[i]) {
                    write(node, text[i++], next);
                }
            })();
        });
        return this;
    };
}(jQuery);
</script>