(function(){
    let duration=50
    let n=0
    let container=document.querySelector('#code')
        let styleTag=document.querySelector('#styleTag')
    let isJump=false
    let id
    jump.addEventListener('click',function run(){
        isJump=true
    })
    function writeCode(prefix,code,fn){
        id= setTimeout(function run(){
            n+=1
            if(isJump){
                n=code.length
            }
            container.innerHTML=code.substring(0,n)
            styleTag.innerHTML=code.substring(0,n)
            container.scrollTop=container.scrollHeight
            if(n<code.length){
                id=setTimeout(run,duration)
            }else{
                fn&&fn.call()
            }

        },duration)
    }
    let code =`
    /* 首先，需要画皮卡丘的皮 */
    .prevview-wrapper{
        background: #fee433;
        display:flex;
        justify-content:center;
        align-items:center;
        z-index: -1;
    }
    /* 接下来，画皮卡丘的鼻子 */
    .nose {
        width: 0px;
        height: 0px;
        border: 11px solid;
        border-color: black transparent transparent;
        border-radius: 40%;
        border-width: 14px 12px;
        position: absolute;
        /* left:0%;right: 0;margin: auto; */
        left: 50%;
        transform: translateX(-50%);
        top: 28px;
    }
    /* 接下来，画皮卡丘的眼睛 */
    .eye {
        width: 49px;
        height: 49px;
        background: #2e2e2e;
        position: absolute;
        border: 2px solid #000;
        border-radius: 50%;
    }
    /* 眼睛里的珠子 */
    .eye::after {
        content: '';
        display: block;
        height: 55%;
        width: 55%;
        background: #ffffff;
        border-radius: 50%;
        position: absolute;
        border: 2px solid #000;
        /* top:5px; */
        left: 6px;

    }
    /* 左眼在左边（废话） */
    .eye.left {
        right: 50%;
        margin-right: 90px;
    }
    /* 右眼在右边 */
    .eye.right {
        left: 50%;
        margin-left: 90px;
    }
    /* 红扑扑的小脸蛋 */
    .face {
        width: 68px;
        height: 68px;
        background: #fc0d1c;
        border: 2px solid #000;
        border-radius: 50%;
        position: absolute;
        top: 85px;
    }

    .face.left {
        right: 50%;
        margin-right: 116px;
    }

    .face.right {
        left: 50%;
        margin-left: 116px;
    }
    /* 上嘴唇 */
    .upperLip {
        height: 25px;
        width: 80px;
        border: 2px solid #000;
        border-top: none;
        position: absolute;
        top: 52px;
        background: #fee433;
    }

    .upperLip.left {
        right: 50%;
        border-right: none;
        border-bottom-left-radius: 40px 25px;
        transform: rotate(-15deg);

    }

    .upperLip.right {
        border-bottom-right-radius: 40px 25px;
        border-left: none;
        transform: rotate(15deg);
        left: 50%;
    }
    /* 下嘴唇 */
    .lowerLip-wrapper {
        bottom: 0;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        z-index: -1;
        height: 130px;
        width: 300px;
        overflow: hidden;
    }

    .lowerLip {
        width: 300px;
        height: 3500px;
        background: #990513;

        border-radius: 250px/2000px;
        border: 2px solid #000;
        bottom: 5px;
        position: absolute;
        overflow: hidden;
    }
    /* 小舌头 */
    .lowerLip::after {
        content: '';
        position: absolute;
        bottom: 0px;
        width: 100px;
        border-radius: 45%;
        height: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: #fc4a62;
    }
    /* 好了，这只皮卡丘送给你 */
    `
    writeCode('',code)

    let preButton=null
    document.querySelector('.actions').addEventListener('click',function(e){
        let button = e.target
        let speed = button.dataset.speed
        button.classList.add('active')
        preButton&&preButton.classList.remove('active')
        preButton=button
        switch(speed){
            case 'slow':
                duration=100
                break
            case 'normal':
                duration=50
                break
            case 'fast':
                duration=10
                break
        }
    })
}())
