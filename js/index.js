(function () {
    function snow() {
        //  1、定义一片雪花模板
        var flake = document.createElement('div');
        // 雪花字符 ❄❉❅❆✻✼❇❈❊✥✺
        flake.innerHTML = '❆';
        flake.style.cssText = 'position:absolute;color:#fff;';

        //获取页面的高度 相当于雪花下落结束时Y轴的位置
        var documentHieght = window.innerHeight;
        //获取页面的宽度，利用这个数来算出，雪花开始时left的值
        var documentWidth = window.innerWidth;

        //定义生成一片雪花的毫秒数
        var millisec = 100;
        //2、设置第一个定时器，周期性定时器，每隔一段时间（millisec）生成一片雪花；
        setInterval(function () { //页面加载之后，定时器就开始工作
            //随机生成雪花下落 开始 时left的值，相当于开始时X轴的位置
            var startLeft = Math.random() * documentWidth;

            //随机生成雪花下落 结束 时left的值，相当于结束时X轴的位置
            var endLeft = Math.random() * documentWidth;

            //随机生成雪花大小
            var flakeSize = 5 + 20 * Math.random();

            //随机生成雪花下落持续时间
            var durationTime = 4000 + 7000 * Math.random();

            //随机生成雪花下落 开始 时的透明度
            var startOpacity = 0.7 + 0.3 * Math.random();

            //随机生成雪花下落 结束 时的透明度
            var endOpacity = 0.2 + 0.2 * Math.random();

            //克隆一个雪花模板
            var cloneFlake = flake.cloneNode(true);

            //第一次修改样式，定义克隆出来的雪花的样式
            cloneFlake.style.cssText += `
                    left: ${startLeft}px;
                    opacity: ${startOpacity};
                    font-size:${flakeSize}px;
                    top:-25px;
                        transition:${durationTime}ms;
                `;

            //拼接到页面中
            document.body.appendChild(cloneFlake);

            //设置第二个定时器，一次性定时器，
            //当第一个定时器生成雪花，并在页面上渲染出来后，修改雪花的样式，让雪花动起来；
            setTimeout(function () {
                //第二次修改样式
                cloneFlake.style.cssText += `
                            left: ${endLeft}px;
                            top:${documentHieght}px;
                            opacity:${endOpacity};
                        `;

                //4、设置第三个定时器，当雪花落下后，删除雪花。
                setTimeout(function () {
                    cloneFlake.remove();
                }, durationTime);
            }, 0);

        }, millisec);
    }
    snow();

    // ------------------------------相册--------------------------------------
    let img = document.getElementsByClassName('img')
    let bodyEle = document.getElementsByTagName('body')
    let surprise = []
    let backSrc = 'none'
    for (let i = 0; i < img.length; i++) {
        img[i].onmouseover = function () {
            bodyEle[0].style.background = "url(" + img[i].attributes['src'].value + ") no-repeat center center fixed";
        }
        img[i].onmouseout = function () {
            if (backSrc !== 'none') {
                bodyEle[0].style.background = "url(" + backSrc + ") no-repeat center center fixed";
                bodyEle[0].style.backgroundColor = '#fff'
            } else {
                bodyEle[0].style.background = 'none'
                bodyEle[0].style.backgroundColor = '#000'
            }


        }
        img[i].onclick = function () {
            bodyEle[0].style.background = "url(" + img[i].attributes['src'].value + ") no-repeat center center fixed";
            backSrc = img[i].attributes['src'].value
            surprise.push(i)
            $('#media')[0].pause();
            let musicSrc = ''
            switch (i) {
                case 0:
                    musicSrc = './music/yilu.mp3'
                    break;
                case 1:
                    musicSrc = './music/chun.mp3'
                    break;
                case 2:
                    musicSrc = './music/qian.mp3'
                    break;
                case 3:
                    musicSrc = './music/xia.mp3'
                    break;
                case 4:
                    musicSrc = './music/gao.mp3'
                    break;
                case 5:
                    musicSrc = './music/guowang.mp3'
                    break;
                case 6:
                    musicSrc = './music/manman.mp3'
                    break;
                case 7:
                    musicSrc = './music/jie.mp3'
                    break;
                case 8:
                    musicSrc = './music/ye.mp3'
                    break;
                default:
                    break;
            }
            $('#media').attr('src', musicSrc);
            $("#media")[0].play()
            if (surprise.join('') === '20201227') {
                $('.box').remove()
                poetry()

            }

        }
    }

    function poetry() {
        let time = 0
        let text = '从樱花飘，到枫叶落'
      let intervalNamel=  setInterval(() => {
            time++
            switch (time) {
                case 1:
                    text = '陪你走过一个个春夏秋冬'
                    break;
                case 2:
                    text = '春风十里不如你'
                    break;
                case 3:
                    text = '绚丽落魄都陪你'
                    break;
                case 4:
                    text = '我在等风也等你'
                    break;
                case 5:
                    text = '草木有阳光和水'
                    break;
                case 6:
                    text = '风筝有清风和绳'
                    break;
                case 7:
                    text = '我有余生还有你'
                    break;
                case 8:
                    text = '从秋风送梦'
                    break;
                case 9:
                    text = '美梦佳梦与好梦'
                    break;
                case 10:
                    text = '想为你做一副画'
                    break;
                case 11:
                    text = '以心为笔'
                    break;
                case 12:
                    text = '以情为墨'
                    break;
                case 13:
                    text = '以爱你为内容'
                    break;
                case 14:
                    text = '以余生为落笔'
                    break;
                default:
                    break;
            }
            $('#text-box').append(`<p class="tet">${text}</p>`);
            $('.tet').fadeIn(2000)
            if(time>13){
                clearInterval(intervalNamel);
            }
        }, 2000);
    }
    // -----------------------------音乐-------------------------
    let audio = $('#media');
    $("#audio_btn").bind('click', function () {
        $(this).hasClass("off") ? ($(this).addClass("play_yinfu").removeClass("off"), $("#yinfu").addClass("rotate"), $("#media")[0].play()) : ($(this).addClass("off").removeClass("play_yinfu"), $("#yinfu").removeClass("rotate"),
            $("#media")[0].pause());
    });
})()