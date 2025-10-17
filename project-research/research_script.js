// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('bg-canvas'),
    alpha: true // a transparent background
});

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;

// Add lighting
const ambientLight = new THREE.AmbientLight(0x404040, 2); // soft white light
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0x8a2be2, 2, 100); // A purple-ish light
pointLight.position.set(0, 0, 4);
scene.add(pointLight);

// Create the 3D object
// TorusKnotGeometry is a complex, mathematically-defined shape
const geometry = new THREE.TorusKnotGeometry(1.5, 0.4, 200, 20);
const material = new THREE.MeshStandardMaterial({ 
    color: 0xffffff,
    metalness: 0.8,
    roughness: 0.2,
    wireframe: true // Gives it a tech/blueprint feel
});
const shape = new THREE.Mesh(geometry, material);
scene.add(shape);

// Mouse interaction
let mouseX = 0;
let mouseY = 0;
document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Gently rotate the shape
    shape.rotation.x += 0.0005;
    shape.rotation.y += 0.001;

    // Move the point light with the mouse for an interactive feel
    pointLight.position.x = mouseX * 5;
    pointLight.position.y = mouseY * 5;

    renderer.render(scene, camera);
}

// Handle window resizing
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
});

// Start the animation
animate();
