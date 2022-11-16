
import App from "./App"


//강도설정
const zoomIntensity = 0.2;
   
    const canvas  = <HTMLCanvasElement>document.getElementById('canvas');
    //캔버스 초기설정
    canvas.width= 500;
    canvas.height= 500;    
    let ctx = canvas.getContext("2d");

    const width = 500;
    const height = 500;
    let visibleWidth = width;
    let visibleHeight = height;

    
    //줌 스케일
    let zoomScale = 1;
    //이동전 좌표
    let orgX = 0;
    let orgY = 0;

    
    //그리는 함수
    const draw=() =>
    {
      //이미지 소스 불러오기
      const img = new Image();
      img.width=100;
      img.height=100;
      img.src= "https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg.webp"
       
      
      // 캔버스 줌 인아웃시 잔상없애기 
        // ctx.fillStyle = "white";
        // ctx.fillRect(orgX, orgY, width/zoomScale, height/zoomScale);
        ctx.clearRect(orgX, orgY, width/zoomScale, height/zoomScale)
        // 가져온 이미지 그려넣기
        ctx.drawImage(img, 0,0, 500, 500);   
       //새로고침
        window.requestAnimationFrame(draw);
    }
    // 그리기 호출
    draw();
    

    //휠 이벤트 설정
    canvas.onwheel = function (event){
        event.preventDefault();
        // 오프셋 설정
        const mousex = event.clientX - canvas.offsetLeft;
        const mousey = event.clientY - canvas.offsetTop;
        // 마우스 튀는현상 방지용
        const mouseWheel = event.deltaY < 0 ? 1 : -1;
        // 줌비율계산
        const zoom = Math.exp(mouseWheel * zoomIntensity);
        ctx.translate(orgX, orgY);
        //마우스 올린곳 기준으로 계속 확대되게
        orgX -= mousex/(zoomScale*zoom) - mousex/zoomScale;
        orgY -= mousey/(zoomScale*zoom) - mousey/zoomScale;
        ctx.scale(zoom, zoom);
        ctx.translate(-orgX, -orgY);
    
        // 상태갱신용
        zoomScale *= zoom;
        visibleWidth = width / zoomScale;
        visibleHeight = height / zoomScale;
    }
    