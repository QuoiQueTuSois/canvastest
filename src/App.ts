export default function App() {

    const img = new Image();
    img.src = '/src/cavil.png'
    const canvas: HTMLCanvasElement = document.createElement("canvas")
    canvas.width = 500;
    canvas.height = 500;
    // 그리기
    const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!
    ctx.beginPath();
    ctx.moveTo(30, 96);
    ctx.lineTo(70, 66);
    ctx.lineTo(103, 76);
    ctx.lineTo(170, 15);
    ctx.stroke();
    ctx.drawImage(img,100,100)
    ctx.stroke()
   

    return canvas
}