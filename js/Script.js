/*<script type="text/javascript">
</script>
*/
var items = document.getElementsByClassName('item');//ͼƬ
var points = document.getElementsByClassName('point');//��
var goPreBtn = document.getElementById('goPre');
var goNextBtn = document.getElementById('goNext');
var stop = document.getElementById('stop');


var time = 0;//��ʱ��ͼƬ����,�����ť��time=0,����Ķ�Ч��
var index = 0;//index ��ʾ�ڼ���ͼƬ��չʾ ��index��ͼƬ����active�������,��ʾ�ڼ�������չʾ


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
        time = 0;//�����ť��time=0,����Ķ�Ч��
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

    //5000ms,��תһ��
    setInterval(function () {
        time++;
        if (time == 50) {
            goNext();
            time = 0;
        }
    }, 100)

