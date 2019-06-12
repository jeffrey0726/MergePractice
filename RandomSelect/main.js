$(document).ready(function(){
    $("input").click(function()
    {
        var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        
        $("h2").text($("#choices li").eq(randomChildNumber).text());
        var src = new Array(5);
        src[0] = "https://cw1.tw/CW/images/article/201702/article-58a50e8280597.jpg";
        src[1] = "https://cdn.walkerland.com.tw/images/upload/subject/b8efcae2b3156f893af49e40cb56f38ee2c6a345.jpg";
        src[2] = "https://tshop.r10s.com/ff1/509/d51e/03a9/70e2/a6f3/687b/11a8e682fd2c600ce3781e.jpg";
        src[3] = "https://i.ytimg.com/vi/CJaAnZz2owo/maxresdefault.jpg";
        src[4] = "https://tokyo-kitchen.icook.network/uploads/recipe/cover/177276/large_5d8da49a47789a20.jpg";
        
        $("img").attr("src",src[randomChildNumber]);
    })
});