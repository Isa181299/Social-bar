

    if (document.location.search.match(/type=embed/gi)) {

        window.parent.postMessage("resize", "*");

    }</script>

<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

<script id="rendered-js">

    $(document).ready(function () {

        $('#so-close').click(function () {

            $('.s-soft').addClass('so-collapse');

            $('#so-open').delay(300).css('left', '0');

        });

        $('#so-open').click(function () {

            $('#so-open').css('left', '-60px');

            $('.s-soft').removeClass('so-collapse');

        });

    });

