import React from 'react';

import styled from '@emotion/styled';

import { Canvas } from '@/components';

const GameField = styled.div(() => ({
    border: '1px solid black',
}));

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

function GamePage() {

    const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
        ctx.fill();
    };

    return (
        <Wrapper>
            <GameField>
                <Canvas draw={draw} />
            </GameField>
        </Wrapper>
    );
}

export default GamePage;
