$(function() {
    var carouseList = $("#carousel ul");
    setInterval(changeSlide, 4000);

    function changeSlide() {
        carouseList.animate({ 'marginLeft': -800 }, 2000, moveFirstSlide);
    };

    function moveFirstSlide() {
        var firstItem = carouseList.find("li:first"),
            lastItem = carouseList.find("li:last");

        lastItem.after(firstItem);
        carouseList.css({ marginLeft: 0 });
    };
});