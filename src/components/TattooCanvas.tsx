"use client";

import { useEffect, useRef, useCallback } from "react";

export default function TattooCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const isCompleteRef = useRef(false);

  const initAnimation = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width: number;
    let height: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      alpha: number;
    }> = [];

    // Configuration
    const CONFIG = {
      imageSrc: "/images/skull-rose-reference.jpg",
      dotSize: 0.6,
      density: 1,
      animationSpeed: 2000,
      inkColor: "255, 255, 255",
      threshold: 240,
      maxSize: 0.7,
      minAlpha: 0.7,
      maxAlpha: 1.0,
    };

    // Resize canvas
    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    resize();

    // Utility: Map a value from one range to another
    const mapRange = (
      value: number,
      inMin: number,
      inMax: number,
      outMin: number,
      outMax: number
    ) => {
      return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    };

    // Utility: Fisher-Yates Shuffle
    const shuffleArray = (array: typeof particles) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    };

    // Load and process image
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = CONFIG.imageSrc;

    img.onload = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      ctx.clearRect(0, 0, width, height);
      isCompleteRef.current = false;

      // Create offscreen canvas to read pixel data
      const offCanvas = document.createElement("canvas");
      const offCtx = offCanvas.getContext("2d");
      if (!offCtx) return;

      // Calculate scaling to contain image within screen
      const imgAspect = img.width / img.height;
      const canvasAspect = width / height;
      let renderW: number, renderH: number, offsetX: number, offsetY: number;

      if (canvasAspect > imgAspect) {
        renderH = height * 0.85;
        renderW = renderH * imgAspect;
      } else {
        renderW = width * 0.85;
        renderH = renderW / imgAspect;
      }

      offsetX = (width - renderW) / 2;
      offsetY = (height - renderH) / 2;

      offCanvas.width = width;
      offCanvas.height = height;

      // Draw image to offscreen canvas
      offCtx.drawImage(img, offsetX, offsetY, renderW, renderH);

      // Extract pixel data
      const imageData = offCtx.getImageData(0, 0, width, height);
      const data = imageData.data;

      particles = [];

      // Analyze every pixel based on density
      for (let y = 0; y < height; y += CONFIG.density) {
        for (let x = 0; x < width; x += CONFIG.density) {
          const i = (y * width + x) * 4;
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const alpha = data[i + 3];

          const brightness = (r + g + b) / 3;

          // If pixel is visible and darker than threshold, add a dot
          if (brightness < CONFIG.threshold && alpha > 50) {
            const sizeMultiplier = mapRange(
              brightness,
              0,
              CONFIG.threshold,
              CONFIG.maxSize,
              0.5
            );

            particles.push({
              x,
              y,
              size: CONFIG.dotSize * sizeMultiplier,
              alpha: mapRange(
                brightness,
                0,
                CONFIG.threshold,
                CONFIG.maxAlpha,
                CONFIG.minAlpha
              ),
            });
          }
        }
      }

      // Shuffle arrays to create random stipple effect
      shuffleArray(particles);

      // Start animation
      animate();
    };

    // Animation loop
    const animate = () => {
      if (isCompleteRef.current) return;

      const batchSize = CONFIG.animationSpeed;

      if (particles.length > 0) {
        ctx.fillStyle = `rgb(${CONFIG.inkColor})`;

        // Draw a batch of dots
        const currentBatch = particles.splice(0, batchSize);

        currentBatch.forEach((p) => {
          // Slight jitter for needle imperfection
          const jitterX = (Math.random() - 0.5) * 0.5;
          const jitterY = (Math.random() - 0.5) * 0.5;

          ctx.globalAlpha = p.alpha;
          ctx.beginPath();
          ctx.arc(p.x + jitterX, p.y + jitterY, p.size, 0, Math.PI * 2);
          ctx.fill();
        });

        animationRef.current = requestAnimationFrame(animate);
      } else {
        // Drawing complete - stay static (no loop)
        isCompleteRef.current = true;
        ctx.globalAlpha = 1;
      }
    };

    // Handle resize
    const handleResize = () => {
      resize();
      // Reload image on resize
      if (img.complete) {
        img.onload?.call(img);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const cleanup = initAnimation();
    return () => {
      cleanup?.();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [initAnimation]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 1 }}
    />
  );
}
