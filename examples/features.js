const cone = () => {
    const obj = new Physijs.ConeMesh(
      new THREE.CylinderGeometry(0, 4.75, 3.75, 32),
      Physijs.createMaterial(
        new THREE.MeshPhongMaterial({ color: getRandomColor() }),
        // new THREE.MeshLambertMaterial({ map: loader.load( 'images/plywood.jpg' ) }),
        0.6, // medium friction
        0.3 // low restitution
      ),
      0 // mass
    );
    zone.obj = obj;
    obj.position.x = xPosition + 2.5;
    obj.position.y = yPosition - 12;
    obj.position.z = 0;
    obj.setLinearVelocity(new THREE.Vector3(0, 0, 0));
    obj.setAngularVelocity(new THREE.Vector3(0, 0, 0));
    obj.castShadow = true;
    obj.receiveShadow = true;
    obj.rotation.x = Math.random() * 2 * Math.PI;
    obj.rotation.y = Math.random() * 2 * Math.PI;
    obj.rotation.z = Math.random() * 2 * Math.PI;
    obj.featureType = "CONE";
    scene.add(obj);
  };

  const icosahedron = () => {
    const obj = new Physijs.ConvexMesh(
      new THREE.IcosahedronGeometry(Math.random() * 3 + 1, 0),
      Physijs.createMaterial(
        new THREE.MeshPhongMaterial({ color: getRandomColor() }),
        0.6, // medium friction
        0.3 // low restitution
      ),
      0 // mass
    );
    zone.obj = obj;

    obj.position.x = xPosition + 2.5;
    obj.position.y = yPosition - 12;
    obj.position.z = 0;
    obj.position.__dirtyPosition = true;
    obj.rotation.__dirtyRotation = true;
    obj.__dirtyPosition = true;
    obj.__dirtyRotation = true;
    obj.setLinearVelocity(new THREE.Vector3(0, 0, 0));
    obj.setAngularVelocity(new THREE.Vector3(0, 0, 0));
    obj.castShadow = true;
    obj.receiveShadow = true;
    obj.rotation.x = Math.random() * 2 * Math.PI;
    obj.rotation.y = Math.random() * 2 * Math.PI;
    obj.rotation.z = Math.random() * 2 * Math.PI;
    obj.featureType = "ICOSAHEDRON";
    scene.add(obj);
  };

  const disc = () => {
    const radius = Math.random() * 3 + 1;
    const obj = new Physijs.CylinderMesh(
      new THREE.CylinderGeometry(
        radius,
        radius,
        Math.random() * 3,
        Math.ceil(Math.random() * 16 + 2)
      ),
      Physijs.createMaterial(
        new THREE.MeshPhongMaterial({ color: getRandomColor() }),
        0.6, // medium friction
        0.3 // low restitution
      ),
      0 // mass
    );
    zone.obj = obj;
    obj.position.x = xPosition + 2.5;
    obj.position.y = yPosition - 12;
    obj.position.z = 0;
    obj.position.__dirtyPosition = true;
    obj.rotation.__dirtyRotation = true;
    obj.__dirtyPosition = true;
    obj.__dirtyRotation = true;
    obj.setLinearVelocity(new THREE.Vector3(0, 0, 0));
    obj.setAngularVelocity(new THREE.Vector3(0, 0, 0));
    obj.castShadow = true;
    obj.receiveShadow = true;
    obj.rotation.x = Math.random() * 2 * Math.PI;
    obj.rotation.y = Math.random() * 2 * Math.PI;
    obj.rotation.z = Math.random() * 2 * Math.PI;
    obj.featureType = "DISC";
    scene.add(obj);
  };

  const tetrahedron = () => {
    const radius = Math.random() * 3 + 1;
    const obj = new Physijs.ConvexMesh(
      new THREE.TetrahedronGeometry(Math.random() * 3 + 2),
      Physijs.createMaterial(
        new THREE.MeshPhongMaterial({ color: getRandomColor() }),
        0.6, // medium friction
        0.3 // low restitution
      ),
      0 // mass
    );
    obj.position.x = xPosition + 2.5;
    obj.position.y = yPosition - 12;
    obj.position.z = 0;
    obj.position.__dirtyPosition = true;
    obj.rotation.__dirtyRotation = true;
    obj.__dirtyPosition = true;
    obj.__dirtyRotation = true;
    obj.setLinearVelocity(new THREE.Vector3(0, 0, 0));
    obj.setAngularVelocity(new THREE.Vector3(0, 0, 0));
    obj.castShadow = true;
    obj.receiveShadow = true;
    obj.rotation.x = Math.random() * 2 * Math.PI;
    obj.rotation.y = Math.random() * 2 * Math.PI;
    obj.rotation.z = Math.random() * 2 * Math.PI;
    obj.featureType = "TETRAHEDRON";
    scene.add(obj);
  };

  const torus = () => {
    const radiusMod = Math.random() * 3 + 1;
    const obj = new Physijs.ConvexMesh(
      new THREE.TorusGeometry(
        Math.random() + 1,
        0.2,
        6,
        Math.random() > 0.5 ? 4 : 5
      ),
      Physijs.createMaterial(
        new THREE.MeshPhongMaterial({ color: getRandomColor() }),
        0.6, // medium friction
        0.3 // low restitution
      ),
      0 // mass
    );
    obj.position.x = xPosition + 2.5;
    obj.position.y = yPosition - 12;
    obj.position.z = 0;
    obj.position.__dirtyPosition = true;
    obj.rotation.__dirtyRotation = true;
    obj.__dirtyPosition = true;
    obj.__dirtyRotation = true;
    obj.setLinearVelocity(new THREE.Vector3(0, 0, 0));
    obj.setAngularVelocity(new THREE.Vector3(0, 0, 0));
    obj.castShadow = true;
    obj.receiveShadow = true;
    obj.rotation.x = Math.random() * 2 * Math.PI;
    obj.rotation.y = Math.random() * 2 * Math.PI;
    obj.rotation.z = Math.random() * 2 * Math.PI;
    obj.featureType = "TORUS";
    scene.add(obj);
  };