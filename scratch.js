// http://jsfiddle.net/pJ3MD/1/

// b64 image encoder/decoder
// http://www.motobit.com/util/base64-decoder-encoder.asp



var ctx = document.getElementById('canvas').getContext('2d');
  var img = new Image();
  img.onload = function(){
    ctx.drawImage(img,0,0);
  };
  //img.src = [YOUR_URL_HERE];
img.src = circle;

$('canvas').addEvent('click', function (e) {
    if (isTransparentUnderMouse(this, e))
        return;
    // do whatever you need to do
    alert('will do something!');
});

var isTransparentUnderMouse = function (target, evnt) {
    var l = 0, t = 0;
    if (target.offsetParent) {
        var ele = target;
        do {
            l += ele.offsetLeft;
            t += ele.offsetTop;
        } while (ele = ele.offsetParent);
    }
    var x = evnt.page.x - l;
    var y = evnt.page.y - t;
    var imgdata = target.getContext('2d').getImageData(x, y, 1, 1).data;
    if (
        imgdata[0] == 0 &&
        imgdata[1] == 0 &&
        imgdata[2] == 0 &&
        imgdata[3] == 0
    ){
        return true;
    }
    return false;
};
