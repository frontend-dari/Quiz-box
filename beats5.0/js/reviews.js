const findBlockActive = (active) => {
    return $(".reviews__item").filter((ndx, item) => {
        return $(item).attr("data-revItem") == active;
    });
};

$(".interactive-avatar__link").click(e => {
    e.preventDefault();

    const intAvatarActive = $(e.currentTarget);

    const intAvatarLink = intAvatarActive.attr("data-switch");
    const itemToShow = findBlockActive(intAvatarLink);

    const curItem = intAvatarActive.closest(".interactive-avatar");

    itemToShow.addClass("active").siblings().removeClass("active");
    curItem.addClass("active").siblings().removeClass("active");
});