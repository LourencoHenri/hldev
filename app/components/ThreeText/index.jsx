import React, { useEffect } from 'react';
import * as THREE from 'three';

const HelloThree = () => {
  useEffect(() => {
    // Código Three.js para renderizar "Hello"
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('three-container').appendChild(renderer.domElement);

    const geometry = new THREE.TextGeometry('Hello', {
      font: new THREE.FontLoader().load('path/to/your/font.json'), // Substitua pelo caminho do seu arquivo de fonte
      size: 30,
      height: 5,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 10,
      bevelSize: 8,
      bevelOffset: 0,
      bevelSegments: 5,
    });

    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const textMesh = new THREE.Mesh(geometry, material);
    scene.add(textMesh);

    camera.position.z = 50;

    const animate = () => {
      requestAnimationFrame(animate);

      // Adicione animações ou interações aqui, se necessário

      renderer.render(scene, camera);
    };

    animate();

    // Limpeza quando o componente é desmontado
    return () => {
      document.getElementById('three-container').removeChild(renderer.domElement);
    };
  }, []); // Certifique-se de usar um array vazio para que o useEffect seja chamado apenas uma vez

  return <div id="three-container" />;
};

export default HelloThree;