"use client";

import { useEffect, useState } from "react";

type Node = {
  id: string;
  label: string;
  sub: string;
  x: number;
  y: number;
};

const nodes: Node[] = [
  { id: "user", label: "Client", sub: "browser request", x: 40, y: 140 },
  { id: "cf", label: "CloudFront", sub: "distribution + behaviors", x: 220, y: 60 },
  { id: "s3", label: "S3 Bucket", sub: "frontend origin", x: 220, y: 220 },
  { id: "acm", label: "ACM", sub: "TLS certificates", x: 420, y: 60 },
  { id: "alb", label: "Load Balancer", sub: "nginx ingress", x: 420, y: 220 },
  { id: "eks", label: "EKS Cluster", sub: "ingress controller", x: 620, y: 220 },
  { id: "kong", label: "Kong Gateway", sub: "routes, plugins, JWT", x: 620, y: 360 },
  { id: "svc", label: "Backend Services", sub: "client workloads", x: 760, y: 290 },
];

const edges: [string, string][] = [
  ["user", "cf"],
  ["cf", "s3"],
  ["cf", "acm"],
  ["user", "alb"],
  ["alb", "eks"],
  ["eks", "kong"],
  ["kong", "svc"],
  ["eks", "svc"],
];

function getNode(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export default function InfraPipeline() {
  const [activeEdge, setActiveEdge] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEdge((prev) => (prev + 1) % edges.length);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox="0 0 940 420"
        className="min-w-[820px] w-full h-auto"
        role="img"
        aria-label="Diagram of an AWS request pipeline: client requests flow through CloudFront and a load balancer into an EKS cluster, routed by Kong to backend services."
      >
        <defs>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" fill="var(--line)" />
          </marker>
        </defs>

        {edges.map(([from, to], i) => {
          const a = getNode(from);
          const b = getNode(to);
          const isActive = i === activeEdge;
          return (
            <g key={`${from}-${to}`}>
              <line
                x1={a.x + 80}
                y1={a.y + 24}
                x2={b.x}
                y2={b.y + 24}
                stroke={isActive ? "var(--accent)" : "var(--line)"}
                strokeWidth={isActive ? 2 : 1.5}
                markerEnd="url(#arrow)"
                style={{ transition: "stroke 0.4s ease" }}
              />
            </g>
          );
        })}

        {nodes.map((n) => (
          <g key={n.id}>
            <rect
              x={n.x}
              y={n.y}
              width="150"
              height="48"
              rx="8"
              fill="var(--bg-card)"
              stroke="var(--line)"
              strokeWidth="1.5"
            />
            <text
              x={n.x + 12}
              y={n.y + 20}
              fill="var(--fg)"
              fontSize="13"
              fontFamily="var(--font-display)"
              fontWeight="700"
            >
              {n.label}
            </text>
            <text
              x={n.x + 12}
              y={n.y + 37}
              fill="var(--fg-dim)"
              fontSize="10"
              fontFamily="var(--font-body)"
            >
              {n.sub}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
