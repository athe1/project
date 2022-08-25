var items = document.getElementsByClassName('item');//图片
var points = document.getElementsByClassName('point');//点
var goPreBtn = document.getElementById('goPre');
var goNextBtn = document.getElementById('goNext');
var stop = document.getElementById('stop');


var time = 0;//定时器图片参数,点击按钮后time=0,提高阅读效果
var index = 0;//index 表示第几张图片在展示 第index张图片存在active这个类名,表示第几个点在展示


var clearActive = function () {
        for (var i = 0; i < items.length; i++) {
                items[i].className = 'item';
                points[i].className = 'point';
        }
            
    }

var goIndex = function () {
            clearActive();
            console.log(index);
            points[index].className = 'point active';
            items[index].className = 'item active';
    }


var goNext = function () {
        if (index < 4) {
                index++;
        } else { 
                index = 0;
        }
        goIndex();
    }

var goPre = function () {
        if (index == 0) {
            index = 4;
        } else {
            index--;
        }
            goIndex();
}

goNextBtn.addEventListener('click', function () {
        goNext();
        time = 0;//点击按钮后time=0,提高阅读效果
})

goPreBtn.addEventListener('click', function () {
        goPre();
        time = 0;
})


for (var i = 0; i < points.length; i++) {
    points[i].addEventListener('click', function () {
        time = 0;
        var pointIndex = this.getAttribute('data-index');
        console.log(pointIndex);
        index = pointIndex;
        goIndex();

    })
}

var sum = 1;
var boolean = true;

stop.addEventListener('click', function () {
        sum++;
        if (sum % 2 == 0) {
            boolean = true;
        } else {
            boolean = false;
        }
        console.log('sum:' + sum);
        console.log('boolean:' + boolean);
})

//5000ms,跳转一次
setInterval(function () {
    time++;
    if (time == 50) {
        goNext();
        time = 0;
    }
}, 100)



//切换主题函数
var t = 0;
function changeTheam() {
    t++;
    if (t % 2 == 0) {
        document.body.style.background = 'white';//不能使用#定义颜色
    } else {
        document.body.style.background = 'steelblue';
    }
}


/*评论*/
var ping = document.getElementById('comment');
var num1 = 0;

ping.onclick = function () {
    num1++;
    document.getElementById('comment_p').innerHTML = num1;
}


/*关注*/
var guan = document.getElementById('attention');
var num2 = 0;

guan.addEventListener('click', function () {
    num2++;
    document.getElementById('attention_p').innerHTML = num2;
})



/*点赞*/
var num3 = 0;
function give_a_like() {
    num3++;
    document.getElementById('like_p').innerHTML = num3;
}
