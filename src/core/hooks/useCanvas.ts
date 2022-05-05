import { useRef, useEffect } from 'react';

// source: https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
const useCanvas = (draw: (context: CanvasRenderingContext2D, frameCount: number) => void) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let animationFrameId: number;
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            if (context) {
                let frameCount = 0;
                const render = () => {
                    frameCount += 1;
                    draw(context, frameCount);
                    animationFrameId = window.requestAnimationFrame(render);
                };
                render();
            }
        }
        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
        // const canvas = canvasRef.current;
        // const context = canvas.getContext('2d');
        // let frameCount = 0;
        // let animationFrameId: number;
        //
        // const render = () => {
        //     frameCount += 1;
        //     draw(context, frameCount);
        //     animationFrameId = window.requestAnimationFrame(render);
        // };
        // render();
        //
        // return () => {
        //     window.cancelAnimationFrame(animationFrameId);
        // };
    }, [draw]);

    return canvasRef;
};

export default useCanvas;
