import React from 'react';

import useCanvas from '@/core/hooks/useCanvas';

const Canvas = ({
    draw,
    ...forwardingProps
}: {
    draw: (ctx: CanvasRenderingContext2D, frameCount: number) => void;
}) => {
    const canvasRef = useCanvas(draw);

    return <canvas ref={canvasRef} {...forwardingProps} />;
};

export default Canvas;
