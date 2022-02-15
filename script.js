// jQuery script to nav scroll to section

$(document).ready(function() {
    $(".nav li a").click(function() {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var $target = $(this.hash);
            $target =
                ($target.length && $target) || $("[name=" + this.hash.slice(1) + "]");
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $("html,body").animate({ scrollTop: targetOffset }, 1000);
                return false;
            }
        }
    });
});

//jQuery script to page-scroll & animate fa-icon

$(document).ready(function() {
    $("a.page-scroll").click(function() {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var $target = $(this.hash);
            $target =
                ($target.length && $target) || $("[name=" + this.hash.slice(1) + "]");
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $("html,body").animate({
                        scrollTop: targetOffset
                    },
                    1000
                );
                return false;
            }
        }
    });
});