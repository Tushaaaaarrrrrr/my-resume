import React, { useEffect, useRef, useState } from 'react';

interface NodeSpec {
  id: string;
  label: string;
  code: string;
  sub: string;
  metric: string;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  color: string;
  targetSection: string;
}

interface SchematicCanvasProps {
  onSelectNode?: (sectionId: string) => void;
  lens: 'editorial' | 'telemetry';
}

export const SchematicCanvas: React.FC<SchematicCanvasProps> = ({ onSelectNode, lens }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeNode, setActiveNode] = useState<NodeSpec | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let time = 0;

    const baseNodes: NodeSpec[] = [
      {
        id: 'node-signal',
        code: 'FIG. 01 // DATA_HYPOTHESIS',
        label: 'IITM Quantitative Signal',
        sub: 'Data Science & Probability Filter',
        metric: 'Loss Function Minimization',
        x: 0.18,
        y: 0.32,
        targetX: 0.18,
        targetY: 0.32,
        color: '#6B705C',
        targetSection: 'how-i-think',
      },
      {
        id: 'node-script',
        code: 'FIG. 02 // NARRATIVE_ENGINE',
        label: 'Brightsoo Creator Caliper',
        sub: 'High-Velocity Hook Calibration',
        metric: '11M+ Ecosystem Standard',
        x: 0.42,
        y: 0.62,
        targetX: 0.42,
        targetY: 0.62,
        color: '#E65A2D',
        targetSection: 'specimens',
      },
      {
        id: 'node-distro',
        code: 'FIG. 03 // VECTOR_MATRIX',
        label: 'Paradox Reach Gateway',
        sub: 'Algorithmic Distribution & Retention Loops',
        metric: 'Millions Organic Reach',
        x: 0.68,
        y: 0.36,
        targetX: 0.68,
        targetY: 0.36,
        color: '#141613',
        targetSection: 'specimens',
      },
      {
        id: 'node-scale',
        code: 'FIG. 04 // AUDIENCE_TELEMETRY',
        label: 'Community Expansion Node',
        sub: '14K+ GenZ IITian & 100K+ IMUN Scale',
        metric: 'Sustained Trust Index 98%',
        x: 0.84,
        y: 0.68,
        targetX: 0.84,
        targetY: 0.68,
        color: '#E65A2D',
        targetSection: 'specimens',
      },
    ];

    const resize = () => {
      if (!containerRef.current || !canvas) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = Math.max(rect.height, 420);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };

      // Check hover
      let found: NodeSpec | null = null;
      for (const node of baseNodes) {
        const nx = node.x * width;
        const ny = node.y * height;
        const dist = Math.hypot(mouseRef.current.x - nx, mouseRef.current.y - ny);
        if (dist < 42) {
          found = node;
          break;
        }
      }
      setActiveNode(found);
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      setActiveNode(null);
    };

    const handleClick = () => {
      if (activeNode && onSelectNode) {
        onSelectNode(activeNode.targetSection);
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleClick);

    const render = () => {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Architectural Graph Grid
      ctx.strokeStyle = 'rgba(20, 22, 19, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Compute dynamic node coordinates with subtle organic float + mouse cursor repulsion/attraction
      const computedNodes = baseNodes.map((node, i) => {
        const floatX = Math.cos(time * 0.8 + i * 1.5) * 6;
        const floatY = Math.sin(time * 0.9 + i * 1.8) * 8;
        let nx = node.targetX * width + floatX;
        let ny = node.targetY * height + floatY;

        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - nx;
          const dy = mouseRef.current.y - ny;
          const dist = Math.hypot(dx, dy);
          if (dist < 160 && dist > 0) {
            const force = (160 - dist) / 160;
            nx -= (dx / dist) * force * 18;
            ny -= (dy / dist) * force * 18;
          }
        }
        return { ...node, computedX: nx, computedY: ny };
      });

      // 3. Draw Connecting Vector Lines (Hairline Technical Guides)
      for (let i = 0; i < computedNodes.length - 1; i++) {
        const nA = computedNodes[i];
        const nB = computedNodes[i + 1];

        // Primary connecting trace
        ctx.beginPath();
        ctx.strokeStyle = lens === 'telemetry' ? '#E65A2D' : 'rgba(20, 22, 19, 0.35)';
        ctx.lineWidth = lens === 'telemetry' ? 1.5 : 1;
        ctx.setLineDash([4, 4]);
        ctx.moveTo(nA.computedX, nA.computedY);
        ctx.lineTo(nB.computedX, nB.computedY);
        ctx.stroke();
        ctx.setLineDash([]);

        // Animated pulse along the vector line
        const pulseProgress = (time * 0.45 + i * 0.33) % 1;
        const px = nA.computedX + (nB.computedX - nA.computedX) * pulseProgress;
        const py = nA.computedY + (nB.computedY - nA.computedY) * pulseProgress;

        ctx.fillStyle = '#E65A2D';
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Technical midpoint coordinate stamp
        const mx = (nA.computedX + nB.computedX) / 2;
        const my = (nA.computedY + nB.computedY) / 2;
        ctx.fillStyle = 'rgba(85, 89, 83, 0.6)';
        ctx.font = '9px "JetBrains Mono", monospace';
        ctx.fillText(`Δt_${i + 1} // FLOW_RATE: 1.0`, mx - 30, my - 8);
      }

      // 4. Render Nodes (Archival Engineering Dial / Specimen Tag)
      computedNodes.forEach((node) => {
        const isHovered = activeNode?.id === node.id;
        const radius = isHovered ? 26 : 20;

        // Outer calibrated circle
        ctx.strokeStyle = isHovered ? '#E65A2D' : 'rgba(20, 22, 19, 0.4)';
        ctx.lineWidth = isHovered ? 1.5 : 1;
        ctx.beginPath();
        ctx.arc(node.computedX, node.computedY, radius, 0, Math.PI * 2);
        ctx.stroke();

        // Crosshair reticle marks
        const ch = radius + 6;
        ctx.strokeStyle = isHovered ? '#E65A2D' : 'rgba(20, 22, 19, 0.25)';
        ctx.beginPath();
        ctx.moveTo(node.computedX - ch, node.computedY);
        ctx.lineTo(node.computedX - radius - 2, node.computedY);
        ctx.moveTo(node.computedX + radius + 2, node.computedY);
        ctx.lineTo(node.computedX + ch, node.computedY);
        ctx.moveTo(node.computedX, node.computedY - ch);
        ctx.lineTo(node.computedX, node.computedY - radius - 2);
        ctx.moveTo(node.computedX, node.computedY + radius + 2);
        ctx.lineTo(node.computedX, node.computedY + ch);
        ctx.stroke();

        // Center dot
        ctx.fillStyle = isHovered ? '#E65A2D' : '#141613';
        ctx.beginPath();
        ctx.arc(node.computedX, node.computedY, isHovered ? 5 : 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Editorial / Telemetry Labels
        ctx.fillStyle = '#141613';
        ctx.font = '10px "JetBrains Mono", monospace';
        ctx.fillText(node.code, node.computedX - 50, node.computedY + radius + 16);

        ctx.font = 'bold 12px "Space Grotesk", sans-serif';
        ctx.fillText(node.label, node.computedX - 50, node.computedY + radius + 30);

        ctx.fillStyle = '#555953';
        ctx.font = '10px "Inter", sans-serif';
        const detailText = lens === 'telemetry' ? `[TELEMETRY: ${node.metric}]` : node.sub;
        ctx.fillText(detailText, node.computedX - 50, node.computedY + radius + 44);
      });

      // 5. Watermark stamp in corner
      ctx.fillStyle = 'rgba(20, 22, 19, 0.2)';
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.fillText('DIAGRAM SPEC: NARRATIVE_VECTOR_V4.2', 16, height - 16);
      ctx.fillText('SYS_COORDINATES: IITM // BRIGHTSOO // PARADOX // GENZ', width - 290, height - 16);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('click', handleClick);
    };
  }, [lens, onSelectNode, activeNode]);

  return (
    <div ref={containerRef} className="relative w-full h-[440px] border border-[#D8D3C5] bg-[#FAF8F5] overflow-hidden my-6">
      {/* Corner indexing markers */}
      <div className="absolute top-2 left-3 font-mono-tech text-[10px] uppercase tracking-wider text-[#555953] flex items-center gap-2 select-none z-10">
        <span className="inline-block w-2 h-2 bg-[#E65A2D]"></span>
        <span>SCHEMATIC 01: THE CONTENT-TO-SCALE VECTOR ENGINE</span>
      </div>
      <div className="absolute top-2 right-3 font-mono-tech text-[10px] text-[#555953] select-none z-10 hidden sm:block">
        <span>INTERACTIVE // HOVER OR CLICK NODES</span>
      </div>

      <canvas ref={canvasRef} className="w-full h-full cursor-crosshair block" />

      {/* Floating Hover Dossier pill if hovered */}
      {activeNode && (
        <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 max-w-sm p-3 bg-[#141613] text-[#F4F1EA] shadow-xl border border-[#3E423B] transition-all select-none z-20 pointer-events-none">
          <div className="flex items-center justify-between border-b border-[#2C302B] pb-1 mb-1">
            <span className="font-mono-tech text-[10px] text-[#E65A2D]">{activeNode.code}</span>
            <span className="font-mono-tech text-[9px] text-[#8E938A]">CLICK TO INSPECT</span>
          </div>
          <div className="font-sans-display font-medium text-xs text-white">{activeNode.label}</div>
          <div className="font-mono-tech text-[11px] text-[#A3A7A4] mt-0.5">{activeNode.metric}</div>
        </div>
      )}
    </div>
  );
};
