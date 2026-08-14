import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Hero3DObject = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 18;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(450, 450);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Group for object rotation
    const group = new THREE.Group();
    scene.add(group);

    // Outer Wireframe Icosahedron
    const outerGeo = new THREE.IcosahedronGeometry(6, 2);
    const outerMat = new THREE.MeshStandardMaterial({
      color: 0x6366f1,
      wireframe: true,
      emissive: 0x4338ca,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    group.add(outerMesh);

    // Inner Glowing Core Sphere
    const innerGeo = new THREE.SphereGeometry(3.5, 32, 32);
    const innerMat = new THREE.MeshPhongMaterial({
      color: 0x06b6d4,
      emissive: 0x0891b2,
      emissiveIntensity: 0.9,
      shininess: 100,
      transparent: true,
      opacity: 0.85,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerMesh);

    // Orbiting Ring 1
    const ring1Geo = new THREE.TorusGeometry(8.5, 0.12, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.7,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    group.add(ring1);

    // Orbiting Ring 2
    const ring2Geo = new THREE.TorusGeometry(10, 0.08, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.5,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    group.add(ring2);

    // Small floating glowing spheres on orbit
    const orbGroup = new THREE.Group();
    const orbGeo = new THREE.SphereGeometry(0.4, 16, 16);
    const orbMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });

    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const orb = new THREE.Mesh(orbGeo, orbMat);
      orb.position.set(Math.cos(angle) * 8.5, Math.sin(angle) * 8.5, 0);
      orbGroup.add(orb);
    }
    ring1.add(orbGroup);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x6366f1, 3, 50);
    pointLight1.position.set(15, 15, 15);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x06b6d4, 2.5, 50);
    pointLight2.position.set(-15, -15, -15);
    scene.add(pointLight2);

    // Mouse Interaction
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e) => {
      const rect = mount.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      targetRotationY = x * 0.8;
      targetRotationX = y * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Auto rotation
      outerMesh.rotation.y += 0.005;
      outerMesh.rotation.x += 0.003;
      innerMesh.rotation.y -= 0.008;

      ring1.rotation.z += 0.006;
      ring2.rotation.z -= 0.004;

      // Mouse smooth interpolation
      group.rotation.y += (targetRotationY - group.rotation.y) * 0.05;
      group.rotation.x += (targetRotationX - group.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      outerGeo.dispose();
      outerMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      orbGeo.dispose();
      orbMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="hero-3d-wrapper">
      <div ref={mountRef} className="hero-3d-canvas" />
    </div>
  );
};

export default Hero3DObject;
