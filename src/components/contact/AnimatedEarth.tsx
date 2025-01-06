import { useEffect, useRef } from 'react';

export function AnimatedEarth() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const image = new Image();
    image.src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=500';
    
    let rotation = 0;
    let animationFrameId: number;

    const draw = () => {
      if (!ctx || !image.complete) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Save the current context state
      ctx.save();
      
      // Move to center of canvas
      ctx.translate(canvas.width / 2, canvas.height / 2);
      
      // Rotate
      ctx.rotate(rotation);
      
      // Draw the circular earth
      ctx.beginPath();
      ctx.arc(0, 0, canvas.width / 2.5, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.clip();
      
      // Draw the image
      ctx.drawImage(
        image,
        -canvas.width / 2.5,
        -canvas.height / 2.5,
        canvas.width / 1.25,
        canvas.height / 1.25
      );
      
      // Restore the context
      ctx.restore();
      
      // Update rotation
      rotation += 0.002;
      
      // Request next frame
      animationFrameId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    image.onload = draw;
    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full max-w-[500px] max-h-[500px]"
    />
  );
}