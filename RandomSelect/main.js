$(document).ready(function(){
    $("input").click(function()
    {
        var randomChildNumber = Math.floor(Math.random()*10);
        var singer = ["李佳薇","林宥嘉","蕭敬騰","鄧紫棋","周杰倫","林俊傑","周興哲","楊丞琳","梁靜茹","阿信"];
        var src = ["RandomSelect/image/李佳薇.jpg","RandomSelect/image/林宥嘉.jpg","RandomSelect/image/蕭敬騰.jpg","RandomSelect/image/鄧紫棋.jpg","RandomSelect/image/周杰倫.jpg","RandomSelect/image/林俊傑.jpg","RandomSelect/image/周興哲.jpg","RandomSelect/image/楊丞琳.jpg","RandomSelect/image/梁靜茹.jpg","RandomSelect/image/阿信.jpg",]
        var content = ["佳薇（英語名：Jess Lee，1988年6月1日－），馬來西亞籍著名華語流行音樂女歌手，出生於馬來西亞森美蘭州芙蓉市，祖籍廣東省梅縣，客家人。2010年參加台灣中視第七屆《超級星光大道》，2011年1月30日成為《超級星光大道》第一位馬來西亞籍冠軍，同時創下節目史上拿下最多次滿分以及連續四次拿下滿分的紀錄，並獲得台灣華納音樂唱片合約，於同年推出個人首張專輯出道。她以歌聲高亢、擁有廣闊音域著稱，擅長的曲風包括中國民歌、西方歌劇和流行音樂。現定居於台北。","林宥嘉（英文名：Yoga Lin，1987年7月1日－），臺灣男歌手，出生於臺灣屏東縣，國立東華大學運動系肄業。2007年7月6日以20歲大學生的身分，獲得台灣中視主辦的歌唱選秀節目第一屆《超級星光大道》冠軍，並與華研國際音樂簽約成為歌手。2008年6月發行第一張個人國語專輯《神秘嘉賓》，至2016年共發行五張個人國語專輯，獲獎無數。至今於海內外各地舉辦個人演唱會七十餘場，票房口碑俱佳。","蕭敬騰（1987年3月30日－），為臺灣著名華語流行音樂的男歌手，在花蓮縣豐濱鄉出生，在臺北市萬華區成長。歌聲渾厚高亢，唱腔豐富有力。原本在餐廳駐唱，2007年因為參加臺灣電視歌唱選秀節目第一屆《超級星光大道》的踢館單元而成名。","鄧紫棋（英語：Gloria Tang Tsz-kei，1991年8月16日－），又名G.E.M.（「Get Everybody Moving」的簡稱，即「讓大家動起來」)，本名鄧詩穎（英語：Gloria Tang Sze-wing），是一名香港創作歌手。她生於中國上海，四歲時移居到香港。2008年7月10日，以16歲之齡出道，取得香港各大樂壇頒獎禮新人金獎。2012年，發行專輯《Xposed》並奪得香港IFPI成為全年最高銷量香港女歌手。2013年，憑藉《Xposed》入圍第24屆台灣金曲獎最佳女歌手，成為入圍金曲歌后最年輕的女歌手。","在2000年，周杰倫發行了他的首張專輯《Jay》，從屬於唱片公司阿爾發音樂。從此以後，他的音樂獲得了遍及亞洲的榮譽，尤其在臺灣、中國大陸、馬來西亞、香港、新加坡、印度尼西亞、韓國、日本和西方國家——例如美國和澳大利亞——的亞裔群體中。他賣出了超過3000萬張專輯並獲得了許多針對他的音樂工作的獎項。周杰倫在工作與他的專輯時也為其他藝術家寫歌。在2003年，他是《時代》雜誌（亞洲版）的封面故事，被稱為「亞洲流行音樂的新天王」。他其後開展了六個世界巡演，在世界各地的城市中對超過1000萬人表演。","林俊傑，暱稱「JJ」，新加坡籍知名男歌手、詞曲作家、唱片製作人，曾拿下金曲獎最佳新人獎以及兩屆金曲獎最佳男歌手，為華語樂壇頗具影響力的歌手之一。 2003年，林俊傑發行首張創作專輯《樂行者》，之後憑藉2004年的專輯《第二天堂》中《江南》一曲而成名。隨後的《小酒窩》、《曹操》、《她說》等歌曲亦造成廣大迴響。","周興哲，出生於台灣的華語流行音樂創作歌手，其兄周予天亦為歌手，11歲時到美國波士頓留學，18歲回國。擅長彈奏古典鋼琴及音樂創作，個人興趣則為籃球和冰上曲棍球。因為被星探挖掘，2014年演唱電視劇《16個夏天》的片尾曲《以後別做朋友》及於《16個夏天》中演出打開知名度。","楊丞琳，台灣女藝人，具有歌手、演員、主持人、導演等身份。2000年，加入4 in Love組合出道。2002年末，開始主持綜藝節目《我猜我猜我猜猜猜》長達4年。2005年，以專輯《曖昧》和偶像劇《惡魔在身邊》而走紅。","梁靜茹，本名梁翠萍，馬來西亞著名女歌手，歌手張智成的表妹，出生於馬來西亞森美蘭州仁保縣馬口，為新世紀相當具有代表性的華語女歌手之一。1999年出道至今已發行了十三張音樂專輯和兩張精選專輯，全亞洲銷量逾1,800萬張。","陳信宏（1975年12月6日－），綽號阿信（英文：Ashin），臺灣樂團五月天的主唱、知名詞曲創作者。出生於臺灣臺北市北投區，畢業於國立師大附中美術班、實踐大學室內設計學系（現建築設計學系）肄業。2006年，以電影《盛夏光年》之同名歌曲〈盛夏光年〉入圍第43屆金馬獎「最佳原創電影歌曲獎」"];
        $("#choices h2").text(singer[randomChildNumber]);
        $("#choices h2").attr("style","display");
        $("#choices h2").attr("style","font-weight:bold");
        $("#choices h3").text(content[randomChildNumber]);
        $("#choices h3").attr("style","display");
        $("img").attr("src",src[randomChildNumber]);
        $("img").attr("style","display");
    })
});