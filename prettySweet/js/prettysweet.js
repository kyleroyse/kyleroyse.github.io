
        if (viewport.scrollTop() > 148) {
            header.css('position', 'fixed').addClass('compressed');
            section.css('padding-top', 148);
        } else {
            header.css('position', 'relative').removeClass('compressed');
            section.css('padding-top', 0);
        }