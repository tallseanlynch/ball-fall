"use strict";
    const coinProperties = {
      sCoin: [
        "sounds/Sound FX/SFX COIN 1a.mp3",
        "sounds/Sound FX/SFX COIN 1b.mp3",
        "sounds/Sound FX/SFX COIN 1c.mp3"
      ],
      mCoin: [
        "sounds/Sound FX/SFX COIN 2a.mp3",
        "sounds/Sound FX/SFX COIN 2b.mp3",
        "sounds/Sound FX/SFX COIN 2c.mp3"
      ],
      lCoin: [
        "sounds/Sound FX/SFX COIN 3a.mp3",
        "sounds/Sound FX/SFX COIN 3b.mp3",
        "sounds/Sound FX/SFX COIN 3c.mp3"
      ]
    }

    window.appConfig.performanceLevel = 2
    window.localStorage.setItem('performanceLevel', JSON.stringify({ performanceLevel: 2 }))

    window.appConfig.originVector = new THREE.Vector3(0, 0, 0)
    window.appConfig.gravityVector = new THREE.Vector3(0, -10, 0)
    window.appConfig.spriteVector = new THREE.Vector3(0, 0, 0)
    window.appConfig.blackHoleVector = new THREE.Vector3(0, 0, 0)
    window.appConfig.clickVector = new THREE.Vector3(0, 0, 0)
    window.appConfig.clickXCoor = 0
    window.appConfig.clickYCoor = 0
    window.appConfig.clickInputVectorX = 0
    window.appConfig.clickInputVectorY = 0
    window.appConfig.clickScale = 100
    window.appConfig.coinsToRemove = []
    window.appConfig.colorLightnessLfoColor = new THREE.Color(0x000000)
    // appConfig single constants

    const stageProperties = {
      STAGE0: {
        backgroundColors: [
          "rgb(2,0,36)",
          "rgba(121,9,117,1)",
          "rgba(252,231,183,1)",
          "rgba(0,212,255,1)"
        ],
        basicColors: [
          new THREE.Color(0xfff1e3),
          new THREE.Color(0xffd5c9),
          new THREE.Color(0xffa6bb),
          new THREE.Color(0xff757f),
          new THREE.Color(0x159294)
        ],
        sounds: {
          coins: coinProperties,
          beams: [
            "sounds/Sound FX/BALL FALL fx a1.mp3",
            "sounds/Sound FX/BALL FALL fx a2.mp3",
            "sounds/Sound FX/BALL FALL fx a3.mp3",
            "sounds/Sound FX/BALL FALL fx a4.mp3",
            "sounds/Sound FX/BALL FALL fx a5.mp3",
            "sounds/Sound FX/BALL FALL fx a6.mp3",
            "sounds/Sound FX/BALL FALL fx a7.mp3",
            "sounds/Sound FX/BALL FALL fx a8.mp3"
          ],
          prize: "sounds/Sound FX/PRIZE_1.mp3",
          backgroundMusic: "sounds/NATURAL-WONDER.mp3",
        },
        name: "NATURAL WONDER",
        number: 1
      },
      STAGE1: {
        name: "PROXIMA",
        number: 2,
        backgroundColors: [
          "#FFDC6A",
          "#FFB83B",
          "#F4AD42",
          "#F96F46"
        ],
        backgroundElementColors: [
          new THREE.Color(0xf3d053),
          new THREE.Color(0xFFCF00),
          new THREE.Color(0xEE6123),
          new THREE.Color(0xFA003F),
          new THREE.Color(0xFFFD77)
        ],
        basicColors: [
          new THREE.Color(0x0070bf),
          new THREE.Color(0x00a5e9),
          new THREE.Color(0x00e4c7),
          new THREE.Color(0xffffff),
          new THREE.Color(0x06b9a3)
        ],
        sounds: {
          coins: coinProperties,
          beams: [
            "sounds/Sound FX/BALL FALL fx b1.mp3",
            "sounds/Sound FX/BALL FALL fx b2.mp3",
            "sounds/Sound FX/BALL FALL fx b3.mp3",
            "sounds/Sound FX/BALL FALL fx b4.mp3",
            "sounds/Sound FX/BALL FALL fx b5.mp3",
            "sounds/Sound FX/BALL FALL fx b6.mp3",
            "sounds/Sound FX/BALL FALL fx b7.mp3",
            "sounds/Sound FX/BALL FALL fx b8.mp3"
          ],
          prize: "sounds/Sound FX/PRIZE_1.mp3",
          backgroundMusic: "sounds/PROXIMA.mp3"
        }
      },
      STAGE2: {
        name: "BLANKET FORT",
        number: 3,
        backgroundColors: [
          "#F16D9C",
          "#F16D9C",
          "#A78BBF",
          "#552E8F"
        ],
        basicColors: [
          new THREE.Color(0x9de1ea),
          new THREE.Color(0x805cc5),
          new THREE.Color(0x81a1ab),
          new THREE.Color(0xffd5c9),
          new THREE.Color(0xffffff)
        ],
        sounds: {
          coins: coinProperties,
          beams: [
            "sounds/Sound FX/BALL FALL fx c1.mp3",
            "sounds/Sound FX/BALL FALL fx c2.mp3",
            "sounds/Sound FX/BALL FALL fx c3.mp3",
            "sounds/Sound FX/BALL FALL fx c4.mp3",
            "sounds/Sound FX/BALL FALL fx c5.mp3",
            "sounds/Sound FX/BALL FALL fx c6.mp3",
            "sounds/Sound FX/BALL FALL fx c7.mp3",
            "sounds/Sound FX/BALL FALL fx c8.mp3"
          ],
          prize: "sounds/Sound FX/PRIZE_1.mp3",
          backgroundMusic: "sounds/BLANKET-FORT.mp3"
        }
      },
      STAGE3: {
        name: "HIDDEN HOLLOW",
        number: 4,
        backgroundColors: [
          "#0F181F",
          "#23a373",
          "#26797d",
          "#363f46"
        ],
        basicColors: [
          new THREE.Color(0xffed6d),
          new THREE.Color(0x77ff8b),
          new THREE.Color(0xa2ffd9),
          new THREE.Color(0xe0e8f0),
          new THREE.Color(0xffffff)
        ],
        sounds: {
          coins: coinProperties,
          beams: [
            "sounds/Sound FX/BALL FALL fx d1.mp3",
            "sounds/Sound FX/BALL FALL fx d2.mp3",
            "sounds/Sound FX/BALL FALL fx d3.mp3",
            "sounds/Sound FX/BALL FALL fx d4.mp3",
            "sounds/Sound FX/BALL FALL fx d5.mp3",
            "sounds/Sound FX/BALL FALL fx d6.mp3",
            "sounds/Sound FX/BALL FALL fx d7.mp3",
            "sounds/Sound FX/BALL FALL fx d8.mp3"
          ],
          prize: "sounds/Sound FX/PRIZE_1.mp3",
          backgroundMusic: "sounds/HIDDEN-HOLLOW.mp3"
        }
      },
      STAGE4: {
        name: "CLOUD CASTLE",
        number: 5,
        backgroundColors: [
          "#0070bf",
          "#00a5e9",
          "#4fffd4",
          "#00e4c7"
        ],
        basicColors: [
          new THREE.Color(0xfea5ff),
          new THREE.Color(0xf191ff),
          new THREE.Color(0x9f7be5),
          new THREE.Color(0xc594ff),
          new THREE.Color(0xffffff)
        ],
        sounds: {
          coins: coinProperties,
          beams: [
            "sounds/Sound FX/BALL FALL fx e1.mp3",
            "sounds/Sound FX/BALL FALL fx e2.mp3",
            "sounds/Sound FX/BALL FALL fx e3.mp3",
            "sounds/Sound FX/BALL FALL fx e4.mp3",
            "sounds/Sound FX/BALL FALL fx e5.mp3",
            "sounds/Sound FX/BALL FALL fx e6.mp3",
            "sounds/Sound FX/BALL FALL fx e7.mp3",
            "sounds/Sound FX/BALL FALL fx e8.mp3"
          ],
          prize: "sounds/Sound FX/PRIZE_1.mp3",
          backgroundMusic: "sounds/CLOUD-CASTLE.mp3"
        }
      },
      STAGE5: {
        name: "STARLING",
        number: 6,
        backgroundColors: [
          "rgba(2,0,36)",
          "rgba(121,9,117,1)",
          "#2e3192",
          "rgba(0,0,0,1)"
        ],
        basicColors: [
          new THREE.Color(0xec008c),
          new THREE.Color(0x00aeef)
        ],
        sounds: {
          coins: coinProperties,
          beams: [
            "sounds/Sound FX/BALL FALL fx a1.mp3",
            "sounds/Sound FX/BALL FALL fx a2.mp3",
            "sounds/Sound FX/BALL FALL fx a3.mp3",
            "sounds/Sound FX/BALL FALL fx a4.mp3",
            "sounds/Sound FX/BALL FALL fx a5.mp3",
            "sounds/Sound FX/BALL FALL fx a6.mp3",
            "sounds/Sound FX/BALL FALL fx a7.mp3",
            "sounds/Sound FX/BALL FALL fx a8.mp3"
          ],
          prize: "sounds/Sound FX/PRIZE_1.mp3",
          backgroundMusic: "sounds/STARLING.mp3"
        }
      },
      STAGE6: {
        name: "AURORA",
        number: 7,
        backgroundColors: [
          "rgba(2,0,36)",
          "#23a373",
          "#26797d",
          "#f542b0"
        ],
        basicColors: [
          new THREE.Color(0x42eff5),
          new THREE.Color(0x00aeef)
        ],
        sounds: {
          coins: coinProperties,
          beams: [
            "sounds/Sound FX/BALL FALL fx a1.mp3",
            "sounds/Sound FX/BALL FALL fx a2.mp3",
            "sounds/Sound FX/BALL FALL fx a3.mp3",
            "sounds/Sound FX/BALL FALL fx a4.mp3",
            "sounds/Sound FX/BALL FALL fx a5.mp3",
            "sounds/Sound FX/BALL FALL fx a6.mp3",
            "sounds/Sound FX/BALL FALL fx a7.mp3",
            "sounds/Sound FX/BALL FALL fx a8.mp3"
          ],
          prize: "sounds/Sound FX/PRIZE_1.mp3",
          backgroundMusic: "sounds/AURORA.mp3"
        }
      },
      STAGE7: {
        name: "VORTEX",
        number: 8,
        backgroundColors: [
          "#6dcff6",
          "#00a651",
          "#26797d",
          "#000000"
        ],
        basicColors: [
          new THREE.Color(0x662d91),
          new THREE.Color(0x26797d)
        ],
        sounds: {
          coins: coinProperties,
          beams: [
            "sounds/Sound FX/BALL FALL fx a1.mp3",
            "sounds/Sound FX/BALL FALL fx a2.mp3",
            "sounds/Sound FX/BALL FALL fx a3.mp3",
            "sounds/Sound FX/BALL FALL fx a4.mp3",
            "sounds/Sound FX/BALL FALL fx a5.mp3",
            "sounds/Sound FX/BALL FALL fx a6.mp3",
            "sounds/Sound FX/BALL FALL fx a7.mp3",
            "sounds/Sound FX/BALL FALL fx a8.mp3"
          ],
          prize: "sounds/Sound FX/PRIZE_1.mp3",
          backgroundMusic: "sounds/VORTEX.mp3"
        }
      }

    }

    const loadSound = (options) => {
      const { src, type, onplay, onstop, onpause, onend, onplayerror } = options;
      const sound = new Howl({
        src: [src],
        autoPlay: false,
        loop: type === "backgroundMusic" ? true : false,
        volume: type === "backgroundMusic" ? .3 : .1,
        onplay: onplay !== undefined ? onplay : () => { },
        onstop: onstop !== undefined ? onstop : () => { },
        onpause: onpause !== undefined ? onpause : () => { },
        onend: onend !== undefined ? onend : () => { },
        onplayerror: onplayerror !== undefined ? onplayerror : () => { }
      })
      // .once("load", () => {
      //   if (type === "backgroundMusic") {
      //     window.appConfig.howlSounds.backgroundMusic = sound;
      //     if (window.appConfig.start === false && window.appConfig.musicTurnedOn === true) {
      //       sound.play()
      //     }
      //   }
      // });
      return sound;
    };

    Physijs.scripts.worker = "js/physijs_worker.js";
    Physijs.scripts.ammo = "ammo.js";

    let adjustCamera = 20;

    const getRandomColor = () => {
      const basicColors = window.appConfig.stages ? window.appConfig.stages[window.appConfig.currentStage].basicColors : stageProperties.STAGE0.basicColors
      return basicColors[Math.floor(Math.random() * basicColors.length)];
    };

    const superBallMaterial = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      reflectivity: 100,
      transparent: true,
      opacity: 1,
      specular: 0xffffff,
      shininess: 200
    })
    window.appConfig.superBallMaterial = superBallMaterial

    var initScene,
      render,
      _boxes = [],
      initGame,
      loader,
      renderer,
      render_stats,
      physics_stats,
      scene,
      ground_material,
      ground,
      light,
      camera,
      orbitControls;

    window.appConfig.colors = [
      [new THREE.Color("#f69679"), new THREE.Color("#f26c4f"), new THREE.Color("#ed1c24"), new THREE.Color("#9e0b0f"), new THREE.Color("#790000")],//0 red
      [new THREE.Color("#f9ad81"), new THREE.Color("#f68e56"), new THREE.Color("#f26522"), new THREE.Color("#a0410d"), new THREE.Color("#7b2e00")],//1 red organe
      [new THREE.Color("#fdc689"), new THREE.Color("#fbaf5d"), new THREE.Color("#f7941d"), new THREE.Color("#a3620a"), new THREE.Color("#7d4900")],//2 yellow orange
      [new THREE.Color("#fff799"), new THREE.Color("#fff568"), new THREE.Color("#fff200"), new THREE.Color("#aba000"), new THREE.Color("#827b00")],//3 yellow
      [new THREE.Color("#c4df9b"), new THREE.Color("#acd373"), new THREE.Color("#8dc63f"), new THREE.Color("#598527"), new THREE.Color("#406618")],//4 first green
      [new THREE.Color("#a3d39c"), new THREE.Color("#7cc576"), new THREE.Color("#39b54a"), new THREE.Color("#197b30"), new THREE.Color("#005e20")],//5 second green
      [new THREE.Color("#82ca9c"), new THREE.Color("#3cb878"), new THREE.Color("#00a651"), new THREE.Color("#007236"), new THREE.Color("#005826")],//6 third green
      [new THREE.Color("#7accc8"), new THREE.Color("#1cbbb4"), new THREE.Color("#00a99d"), new THREE.Color("#00746b"), new THREE.Color("#005952")],//7 green/blue
      [new THREE.Color("#6dcff6"), new THREE.Color("#00bff3"), new THREE.Color("#00aeef"), new THREE.Color("#0076a3"), new THREE.Color("#005b7f")],//8 light blue
      [new THREE.Color("#7da7d9"), new THREE.Color("#448ccb"), new THREE.Color("#0072bc"), new THREE.Color("#004a80"), new THREE.Color("#003663")],//9 dark blue 1
      [new THREE.Color("#8393ca"), new THREE.Color("#5674b9"), new THREE.Color("#0054a6"), new THREE.Color("#003471"), new THREE.Color("#002157")],//10 dark blue 2
      [new THREE.Color("#8781bd"), new THREE.Color("#605ca8"), new THREE.Color("#2e3192"), new THREE.Color("#1b1464"), new THREE.Color("#0d004c")],//11 cool purple
      [new THREE.Color("#a186be"), new THREE.Color("#8560a8"), new THREE.Color("#662d91"), new THREE.Color("#440e62"), new THREE.Color("#32004b")],//12 neutral purple
      [new THREE.Color("#bd8cbf"), new THREE.Color("#a864a8"), new THREE.Color("#92278f"), new THREE.Color("#630460"), new THREE.Color("#4b0049")],//13 warm putple
      [new THREE.Color("#f49ac1"), new THREE.Color("#f06eaa"), new THREE.Color("#ec008c"), new THREE.Color("#9e005d"), new THREE.Color("#7b0046")],//14 magenta
      [new THREE.Color("#f5989d"), new THREE.Color("#f26d7d"), new THREE.Color("#ed145b"), new THREE.Color("#9e0039"), new THREE.Color("#7a0026")]//15 cool red
    ]

    window.appConfig.loadingPhysi = {
      started: 0,
      loaded: 0,
      registerMesh: (mesh) => {
        // window.appConfig.loadingPhysi.started++
        // mesh.addEventListener("ready", window.appConfig.loadingPhysi.loadedHandler(mesh.name))

      },
      loadedHandler: (name) => {
        console.log("Physi loaded " + name)
        window.appConfig.loadingPhysi.loaded++
      }
    }
    let crystalLoader
    const startCrystalLoader = () => {
      crystalLoader = new THREE.GLTFLoader();

      // // Optional: Provide a DRACOLoader instance to decode compressed mesh data
      // const dracoLoader = new DRACOLoader();
      // dracoLoader.setDecoderPath( '/examples/js/libs/draco/' );
      // loader.setDRACOLoader( dracoLoader );

      crystalLoader.load(
        'models/crystal.gltf',
        function (gltf) {
          gltf.scene.children[0].name = 'CRYSTAL_GLTF'
          window.appConfig.crystalGLTF = gltf.scene.children[0]
          gltf.scene.children.forEach(mesh => {
            switch (mesh.name) {
              case "crystal":
                window.appConfig.crystalGLTF = mesh
                break
              case "fiveStar":
                window.appConfig.meshComponents.dematerialize.fiveStar = mesh.geometry
                break
              case "fourStar":
                window.appConfig.meshComponents.dematerialize.fourStar = mesh.geometry
                break
              case "chevron":
                window.appConfig.meshComponents.dematerialize.chevron = mesh.geometry
                break
              case "kite":
                window.appConfig.meshComponents.dematerialize.kite = mesh.geometry
                break
            }
          })
          initScene()
        },
        function (xhr) {
        },
        function (error) {
          console.log("error loading model", error)
        }
      );

    }

    initScene = function () {
      window.appConfig.registerDOMElements(window.appConfig.allElements)
      window.appConfig.soundsBackDestination = "";
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      renderer.shadowMap.enabled = true;
      renderer.shadowMapSoft = true;
      document.getElementById("viewport").appendChild(renderer.domElement);

      render_stats = new Stats();
      window.appConfig.stats = render_stats
      render_stats.domElement.style.position = "absolute";
      render_stats.domElement.style.top = "0px";
      render_stats.domElement.style.zIndex = 100;
      document
        .getElementById("viewport")
        .appendChild(render_stats.domElement);

      physics_stats = new Stats();
      physics_stats.domElement.style.position = "absolute";
      physics_stats.domElement.style.top = "50px";
      physics_stats.domElement.style.zIndex = 100;
      document
        .getElementById("viewport")
        .appendChild(physics_stats.domElement);

      scene = new Physijs.Scene();

      scene.setGravity(window.appConfig.gravityVector);

      scene.addEventListener("update", function () {
        scene.simulate(undefined, 1);
        if (window.appConfig.healthCheck.healthChecked === false) {

          physics_stats.update();
        }
      });
      window.appConfig.cameraRenderLoopCallback = () => {
        camera.position.x = window.appConfig.sphere.position.x;
        camera.position.y = window.appConfig.sphere.position.y;

        if (!window.appConfig.debug || window.appConfig.debug.previousCameraZToggle === false) {
          camera.position.z =
            10 +
            80 * window.appConfig.timers.data.initialBallZoom.percentComplete -
            window.appConfig.timers.data.stageResultsBallZoom.percentComplete * 80 -
            window.appConfig.timers.data.stageReset.percentComplete * 5 +
            ((1 - window.appConfig.timers.data.landingPageZoom.percentComplete) * 125) +
            lfoPositive(5000) * (20 + (1 - window.appConfig.timers.data.landingPageZoom.percentComplete) * 125)
        }
      }

      window.appConfig.lighting = {
        hemisphereLight: new THREE.HemisphereLight(
          getRandomColor(),
          getRandomColor(),
          0.75
        )
      }

      scene.add(window.appConfig.lighting.hemisphereLight);

      camera = new THREE.PerspectiveCamera(
        35,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );

      adjustCamera = 20;
      camera.position.set(0, 10, 10);
      camera.lookAt(new THREE.Vector3(0, 10, 0));
      scene.add(camera);
      camera.material = new THREE.MeshPhongMaterial({ color: 0xffffff })

      let pixelRatio = window.devicePixelRatio
      let AA = true
      if (pixelRatio > 1) {
        AA = false
      }

      light = new THREE.SpotLight(0xffffff);
      light.position.set(20, 80, 15);
      light.target.position.copy(scene.position);
      light.castShadow = true;
      light.shadow.camera.left = -60;
      light.shadow.camera.top = -60;
      light.shadow.camera.right = 60;
      light.shadow.camera.bottom = 60;
      light.shadow.camera.near = 20;
      light.shadow.camera.far = 200;
      light.shadow.bias = -0.0001;
      light.shadow.mapSize.width = light.shadow.mapSize.height = 2048;
      scene.add(light);

      const pointLight0 = new THREE.PointLight(getRandomColor(), 1);
      pointLight0.gameName = "POINTLIGHT0";
      pointLight0.power = 5;
      pointLight0.decay = 1;
      pointLight0.distance = 25;
      window.appConfig.pointLight0 = pointLight0
      scene.add(pointLight0);

      const pointLight1 = new THREE.PointLight(getRandomColor(), 1);
      pointLight1.gameName = "POINTLIGHT1";
      pointLight1.power = 5;
      pointLight1.decay = 1;
      pointLight1.distance = 25;
      window.appConfig.pointLight1 = pointLight1
      scene.add(pointLight1);

      function onWindowResize(event) {
        var tanFOV = Math.tan(((Math.PI / 180) * camera.fov) / 2);
        var windowHeight = window.innerHeight;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.fov =
          (360 / Math.PI) *
          Math.atan(tanFOV * (window.innerHeight / windowHeight));

        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera);
        // window.appConfig.events.primaryInput = undefined
      }
      onWindowResize();
      window.addEventListener("resize", onWindowResize, false);

      loader = new THREE.TextureLoader();

      let level = 25;
      window.appConfig.level = level;
      let score = {
        coins: 0,
      };
      window.appConfig.score = score;

      const coins = [];
      window.appConfig.coins = coins;

      window.appConfig.beamMaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 1
      })

      const beamCapGeometry = new THREE.BoxGeometry(2.2, 2, 2.2)
      const switchIndicatorGeo = new THREE.BoxGeometry(1.5, 1.5, 1.5)

      const createBeam = (config, isFinalStage = false) => {
        const lengthMod = window.appConfig.performanceLevel > 0 ? 10 : 10.15
        const beamBox = new THREE.BoxGeometry((lengthMod * config.s), 2, 3)
        const finalStageBounce = .75
        let beamMaterial
        if (config && config.color) {
          beamMaterial = new THREE.MeshPhongMaterial({
            color: config.color,
            transparent: true,
            opacity: 1
          })
        } else {
          beamMaterial = window.appConfig.beamMaterial
        }
        let beam0 = new Physijs.BoxMesh(
          beamBox,
          Physijs.createMaterial(
            beamMaterial,
            0.6,
            isFinalStage === false ? 0.1 : finalStageBounce
          ),
          0
        );
        if (window.appConfig.performanceLevel > 0) {
          const beam0cap0 = new Physijs.BoxMesh(
            beamCapGeometry,
            Physijs.createMaterial(
              beamMaterial,
              0.6,
              isFinalStage === false ? 0.1 : finalStageBounce
            ),
            0
          );

          const beam0cap1 = new Physijs.BoxMesh(
            beamCapGeometry,
            Physijs.createMaterial(
              beamMaterial,
              0.6,
              isFinalStage === false ? 0.1 : finalStageBounce
            ),
            0
          );

          beam0.add(beam0cap0)
          beam0.add(beam0cap1)
          beam0cap0.rotation.y = 0.25 * Math.PI;
          beam0cap0.position.x = -5 * config.s;
          beam0cap1.rotation.y = 0.25 * Math.PI;
          beam0cap1.position.x = 5 * config.s;
        }

        beam0.name = window.appConfig.currentStage + '_BEAM'

        window.appConfig.loadingPhysi.registerMesh(beam0)
        if (config.switchBeam && config.switchBeam.receiver === undefined) {
          const switchIndicator = () => {
            return new THREE.Mesh(
              switchIndicatorGeo,
              new THREE.MeshPhongMaterial({
                color: window.appConfig.superBallMaterial.color,
                transparent: true,
                opacity: .25
              })
            )
          }

          beam0.name = window.appConfig.currentStage + '_SWITCHBEAM' + Math.round(Math.random() * 10000)
          beam0.switchBeam = {
            rotated: false,
            switchIndicators: config.switchBeam.switchIndicators,
            activeSwitchIndicators: 0,
            switchIndicatorsThrottle: false,
            switchIndicatorsGeos: []
          }

          const switchesNum = config.switchBeam.switchIndicators
          let switchesNumI = 0
          for (switchesNumI; switchesNumI < switchesNum; switchesNumI++) {
            let beamPositionUnit = (10 * config.s) / (switchesNum + 1)
            let beamPosition = ((switchesNumI + 1) * beamPositionUnit) - (5 * config.s)
            let beamSwitchIndicator = switchIndicator()
            beamSwitchIndicator.name = window.appConfig.currentStage + "_SWITCHINDICATOR"
            beam0.switchBeam.switchIndicatorsGeos.push(beamSwitchIndicator)
            beam0.add(beamSwitchIndicator)
            beamSwitchIndicator.position.x = beamPosition
            beamSwitchIndicator.rotation.y = .5 * Math.PI
            beamSwitchIndicator.rotation.z = .25 * Math.PI
            beamSwitchIndicator.position.z = 1
          }

          beam0.addEventListener('collision', (other_object) => {
            const theSwitchBeam = beam0
            if (other_object.name === 'SPHERE0' && theSwitchBeam.switchBeam.rotated === false) {
              let theSwitchIndicator = beam0.switchBeam.switchIndicatorsGeos[theSwitchBeam.switchBeam.activeSwitchIndicators]
              if (window.appConfig.sfxTurnedOn) {
                window.appConfig.howlSounds.doors[theSwitchBeam.switchBeam.activeSwitchIndicators].play()
              }
              theSwitchBeam.switchBeam.activeSwitchIndicators++
              theSwitchBeam.switchBeam.switchIndicatorsThrottle = true
              window.appConfig.timers.activeTimers.push(window.appConfig.timers.switchIndicatorActivate(theSwitchIndicator))
              if (theSwitchBeam.switchBeam.switchIndicators === theSwitchBeam.switchBeam.activeSwitchIndicators) {
                theSwitchBeam.switchBeam.rotated = true
                window.appConfig.timers.activeTimers.push(window.appConfig.timers.switchBeamRotate(theSwitchBeam))
              }
              setTimeout(() => {
                theSwitchBeam.switchBeam.switchIndicatorsThrottle = false
              }, 200)
            }
          })
        }


        beam0.position.set(config.p[0], config.p[1], config.p[2]);
        beam0.rotation.set(config.r[0], config.r[1], config.r[2]);

        if (config && config.switchBeam && config.switchBeam.receiver) {
          beam0.name = window.appConfig.currentStage + '_' + config.switchBeam.receiver.name + '_SWITCHBEAM_RECEIVER_' + Math.round(Math.random() * 10000)
          beam0.switchBeam = {
            rotated: false,
            switchIndicators: config.switchBeam.switchIndicators,
            activeSwitchIndicators: 0,
            switchIndicatorsThrottle: false,
            switchIndicatorsGeos: []
          }

          let theReceiver = scene.children.find((rec) => rec.name.indexOf(config.switchBeam.receiver.name + '_RECEIVERGROUP') > -1)
          theReceiver.position.x = beam0.position.x
          theReceiver.position.y = beam0.position.y
          theReceiver.position.z = 5

          let beamToRotate = () => { return beam0 }

          setTimeout(() => {
            beam0.rotate = () => {
              beam0.switchBeam.rotated = true
              window.appConfig.timers.activeTimers.push(window.appConfig.timers.switchBeamRotate(beamToRotate()))
            }
          },
            1000
          )
        }
        return beam0;
      };

      const tripleHex = 0x159294;
      const doubleHex = 0xffa6bb;
      const singleHex = 0xffd5c9;
      const blueTripleHex = 0x0b3d8b;
      const blueDoubleHex = 0x0f52ba;
      const blueSingleHex = 0x2875ee;
      const tripleScale = 2;
      const doubleScale = 1.5;
      const singleScale = 1;
      const xScaleMod = 1;
      const yScaleMod = 1;
      const zScaleMod = 1;
      const crystalMaterialOptions = {
        specular: 0x050505,
        shininess: 100,
        side: THREE.DoubleSide
      };
      window.appConfig.crystalMaterials = [
        {
          standard: new THREE.MeshPhongMaterial({ ...crystalMaterialOptions, color: singleHex }),
          pulsing: new THREE.MeshPhongMaterial({ ...crystalMaterialOptions, color: singleHex })
        },
        {
          standard: new THREE.MeshPhongMaterial({ ...crystalMaterialOptions, color: doubleHex }),
          pulsing: new THREE.MeshPhongMaterial({ ...crystalMaterialOptions, color: doubleHex })
        },
        {
          standard: new THREE.MeshPhongMaterial({ ...crystalMaterialOptions, color: tripleHex }),
          pulsing: new THREE.MeshPhongMaterial({ ...crystalMaterialOptions, color: tripleHex })
        },
        {
          standard: new THREE.MeshPhongMaterial(),
          pulsing: new THREE.MeshPhongMaterial()
        }
      ]
      window.appConfig.blueCrystalMaterials = [
        {
          standard: new THREE.MeshPhongMaterial({
            emissive: blueSingleHex,
            specular: 0x050505,
            shininess: 100,
            side: THREE.DoubleSide
          }),
          pulsing: new THREE.MeshPhongMaterial({
            emissive: blueSingleHex,
            specular: 0x050505,
            shininess: 100,
            side: THREE.DoubleSide
          })
        },
        {
          standard: new THREE.MeshPhongMaterial({
            emissive: blueDoubleHex,
            specular: 0x050505,
            shininess: 100,
            side: THREE.DoubleSide
          }),
          pulsing: new THREE.MeshPhongMaterial({
            emissive: blueDoubleHex,
            specular: 0x050505,
            shininess: 100,
            side: THREE.DoubleSide
          })
        },
        {
          standard: new THREE.MeshPhongMaterial({
            emissive: blueTripleHex,
            specular: 0x050505,
            shininess: 100,
            side: THREE.DoubleSide
          }),
          pulsing: new THREE.MeshPhongMaterial({
            emissive: blueTripleHex,
            specular: 0x050505,
            shininess: 100,
            side: THREE.DoubleSide
          })
        },
        {
          standard: new THREE.MeshPhongMaterial(),
          pulsing: new THREE.MeshPhongMaterial()
        }
      ]
      window.appConfig.blueCrystalMaterials[0].standard.name = "blue0standard"
      window.appConfig.blueCrystalMaterials[0].pulsing.name = "blue0pulsing"
      window.appConfig.blueCrystalMaterials[1].standard.name = "blue1standard"
      window.appConfig.blueCrystalMaterials[1].pulsing.name = "blue1pulsing"
      window.appConfig.blueCrystalMaterials[2].standard.name = "blue2standard"
      window.appConfig.blueCrystalMaterials[2].pulsing.name = "blue2pulsing"
      const crystal = (size = 0, p = { x: 0, y: 0, z: 0 }) => {
        let coin

        if (window.appConfig.performanceLevel > 0) {
          coin = new THREE.Mesh(window.appConfig.crystalGLTF.geometry, window.appConfig.crystalMaterials[size].standard);

          coin.position.set(p.x, p.y, 0);

        } else {
          coin = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), window.appConfig.crystalMaterials[size].standard)
          coin.position.set(p.x, p.y, 0);
        }
        coin.featureType = "COIN";
        if (size === 0) {
          if (window.appConfig.performanceLevel > 0) {
            coin.scale.set(
              singleScale * xScaleMod,
              singleScale * yScaleMod,
              singleScale * zScaleMod
            );

          } else {
            coin.scale.set(
              singleScale,
              singleScale,
              singleScale
            );
          }
          coin.coinType = "single";
          coin.coinValue = 100;
          coin.baseColor = singleHex
          if (window.appConfig.performanceLevel > 0) {
          }
        }
        if (size === 1) {
          if (window.appConfig.performanceLevel > 0) {
            coin.scale.set(
              doubleScale * xScaleMod,
              doubleScale * yScaleMod,
              doubleScale * zScaleMod
            );

          } else {
            coin.scale.set(
              doubleScale,
              doubleScale,
              doubleScale
            );
          }
          coin.coinType = "double";
          coin.coinValue = 200;
          coin.baseColor = doubleHex
          if (window.appConfig.performanceLevel > 0) {

          }
        }

        if (size === 2) {
          if (window.appConfig.performanceLevel > 0) {
            coin.scale.set(
              tripleScale * xScaleMod,
              tripleScale * yScaleMod,
              tripleScale * zScaleMod
            );

          } else {
            coin.scale.set(
              tripleScale,
              tripleScale,
              tripleScale
            );
          }
          coin.coinType = "triple";
          coin.coinValue = 300;
          coin.baseColor = tripleHex
          if (window.appConfig.performanceLevel > 0) {

          }
        }
        if (window.appConfig.performanceLevel === 0) {

          coin.rotation.z = Math.PI / 4
        }
        window.appConfig.coins.push(coin);
        coin.size = size
        coin.spriteCapturable = true
        coin.isBlueIsland = false
        return coin;
      };
      const blueCrystal = (size = 0, p = { x: 0, y: 0, z: 0 }) => {
        let coin
        if (window.appConfig.performanceLevel > 0) {
          coin = new THREE.Mesh(window.appConfig.crystalGLTF.geometry, window.appConfig.blueCrystalMaterials[size].standard);
          coin.position.set(p.x, p.y, 0);

        } else {
          coin = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), window.appConfig.blueCrystalMaterials[size].standard)
          coin.position.set(p.x, p.y, 0);
        }
        coin.featureType = "COIN";
        if (size === 0) {
          if (window.appConfig.performanceLevel > 0) {
            coin.scale.set(
              singleScale * xScaleMod,
              singleScale * yScaleMod,
              singleScale * zScaleMod
            );

          } else {
            coin.scale.set(
              singleScale,
              singleScale,
              singleScale
            );
          }
          coin.coinType = "single";
          coin.coinValue = 100;
          coin.baseColor = singleHex
        }
        if (size === 1) {
          if (window.appConfig.performanceLevel > 0) {
            coin.scale.set(
              doubleScale * xScaleMod,
              doubleScale * yScaleMod,
              doubleScale * zScaleMod
            );

          } else {
            coin.scale.set(
              doubleScale,
              doubleScale,
              doubleScale
            );
          }
          coin.coinType = "double";
          coin.coinValue = 200;
          coin.baseColor = doubleHex
        }

        if (size === 2) {
          if (window.appConfig.performanceLevel > 0) {
            coin.scale.set(
              tripleScale * xScaleMod,
              tripleScale * yScaleMod,
              tripleScale * zScaleMod
            );

          } else {
            coin.scale.set(
              tripleScale,
              tripleScale,
              tripleScale
            );
          }
          coin.coinType = "triple";
          coin.coinValue = 300;
          coin.baseColor = tripleHex
        }
        if (window.appConfig.performanceLevel === 0) {

          coin.rotation.z = Math.PI / 4
        }
        window.appConfig.coins.push(coin);
        coin.size = size
        coin.spriteCapturable = true
        coin.isBlueIsland = true
        return coin;
      };

      const prizeMiddleGeometry = new THREE.BoxGeometry(0.75, 0.75, 0.75)
      const prizeTopGeometry = new THREE.ConeGeometry(1, 1, 8)
      const prizeBottomGeometry = new THREE.ConeGeometry(1, -1, 8)
      const prize = (stageNumber, prizeNumber, p = { x: 0, y: 0, z: 0 }) => {
        const prize0Group = new THREE.Group();
        prize0Group.size = 3
        const prize0 = new THREE.Mesh(
          prizeMiddleGeometry,
          window.appConfig.crystalMaterials[prize0Group.size].standard
        );
        const prize0Top = new THREE.Mesh(
          prizeTopGeometry,
          window.appConfig.crystalMaterials[prize0Group.size].standard
        );
        const prize0Bottom = new THREE.Mesh(
          prizeBottomGeometry,
          window.appConfig.crystalMaterials[prize0Group.size].standard
        )
        prize0Group.name = `STAGE${stageNumber}PRIZE${prizeNumber}`
        prize0Group.debugTypeIndex = window.appConfig.itemAmounts.prize
        prize0Group.debugType = 'PRIZE'
        prize0Group.debugName = 'PRIZE' + window.appConfig.itemAmounts.prize
        window.appConfig.itemAmounts.prize++

        prize0.name = `PRIZE${prizeNumber}`
        prize0Top.name = `PRIZE${prizeNumber}TOP`
        prize0Bottom.name = `PRIZE${prizeNumber}BOTTOM`


        prize0.rotation.set(.25 * Math.PI, .25 * Math.PI, 0)
        prize0Group.add(prize0)
        prize0Group.add(prize0Top)
        prize0Group.add(prize0Bottom)

        prize0Top.position.y += 1.5
        prize0Bottom.position.y += -1.5
        prize0Group.position.set(p.x, p.y, 0)
        scene.add(prize0Group)
        prize0Group.prizeValue = 1000

        window.appConfig.coins.push(prize0Group);
        prize0Group.material = {
          color: new THREE.Color(0xffffff)
        }

      }
      window.appConfig.prize = prize

      const createCrystalCross = (name = "NO_NAME", s, t = { x: 0, y: 0 }, size = 0) => {
        const crystalCross = new THREE.Group()
        crystalCross.debugTypeIndex = window.appConfig.itemAmounts.crystalCross
        crystalCross.debugType = 'CRYSTALCROSS'
        crystalCross.debugName = 'CRYSTALCROSS' + window.appConfig.itemAmounts.crystalCross
        crystalCross.name = name + '_' + crystalCross.debugName

        crystalCross.add(crystal(size, { x: 0 * s + t.x, y: 1 * s + t.y, z: 0 }));
        crystalCross.add(crystal(size, { x: 0 * s + t.x, y: -1 * s + t.y, z: 0 }));
        crystalCross.add(crystal(size, { x: -1 * s + t.x, y: 0 * s + t.y, z: 0 }));
        crystalCross.add(crystal(size, { x: 1 * s + t.x, y: 0 * s + t.y, z: 0 }));
        scene.add(crystalCross)
        window.appConfig.itemAmounts.crystalCross++
      };

      const createCrystalCircle = (
        name = 'NO_NAME',
        s,
        t = { x: 0, y: 0 },
        size = 0,
        n = 4
      ) => {
        if (window.appConfig.performanceLevel === 0 && n / 2 !== 2) {
          n = n / 2
        }
        const crystalCircle = new THREE.Group()
        crystalCircle.debugTypeIndex = window.appConfig.itemAmounts.crystalCircle
        crystalCircle.debugType = 'CRYSTALCIRCLE'
        crystalCircle.debugName = 'CRYSTALCIRCLE' + window.appConfig.itemAmounts.crystalCircle
        crystalCircle.name = name + '_' + crystalCircle.debugName

        var ellipseGeometry = new THREE.CircleGeometry(s, n * 2)

        let i = 1;
        for (i; i < ellipseGeometry.vertices.length; i++) {
          crystalCircle.add(crystal(size, { x: ellipseGeometry.vertices[i].x * s + t.x, y: ellipseGeometry.vertices[i].y * s + t.y, z: 0 }));
        }
        scene.add(crystalCircle)
        window.appConfig.itemAmounts.crystalCircle++
      };


      const createCrystalLine = (
        name = 'NO_NAME',
        s,
        t = { x: 0, y: 0 },
        size = 0,
        n,
        dir = "x"
      ) => {
        const crystalLine = new THREE.Group()
        crystalLine.debugTypeIndex = window.appConfig.itemAmounts.crystalLine
        crystalLine.debugType = 'CRYSTALLINE'
        crystalLine.debugName = 'CRYSTALLINE' + window.appConfig.itemAmounts.crystalLine
        crystalLine.name = name + '_' + crystalLine.debugName
        let i = 0;
        for (i; i < n; i++) {
          if (dir === "x") {
            crystalLine.add(crystal(size, { x: i * s + t.x, y: t.y, z: 0 }));
          } else {
            crystalLine.add(crystal(size, { x: t.x, y: i * s + t.y, z: 0 }));
          }
        }
        scene.add(crystalLine)
        window.appConfig.itemAmounts.crystalLine++
      };

      const teardownStage = (stage) => {
        window.appConfig.coins = []
        const uuidsToRemove = []
        let stageKeys = Object.keys(window.appConfig.stages[stage])
        stageKeys.forEach(key => {
          if (window.appConfig.stages[stage][key] !== undefined && window.appConfig.stages[stage][key].position && window.appConfig.stages[stage][key].uuid) {
            delete window.appConfig.stages[stage][key]
          }
        })
        scene.children.forEach(c => {
          if ((c.name.indexOf(stage) > -1) || (c.featureType && c.featureType === "COIN")) {
            uuidsToRemove.push(c.uuid)
          }
        })
        let uuidsInt = 0
        let removedUuidsInt = 0
        let unhandledInt = 0
        let processedGeos = 0
        let processedMats = 0
        let cleanupDepth = [0, 0, 0, 0, 0, 0, 0, 0]
        const recursiveRemove = (parent, level = 0) => {
          cleanupDepth[level]++
          if (parent.children.length > 0) {
            parent.children.forEach(child => {
              recursiveRemove(child, level + 1)
              parent.remove(child)
            })
          }
          if (parent.geometry !== undefined) {
            parent.geometry.dispose()
            processedGeos++
          }
          if (parent.material !== undefined && parent.material.dispose !== undefined) {
            parent.material.dispose()
            processedMats++
          }

        }
        uuidsToRemove.forEach(uuid => {
          uuidsInt++
          let wasHandled = false
          const foundIt = scene.children.find(c => c.uuid === uuid)
          recursiveRemove(foundIt)
          scene.remove(foundIt)
        })
        renderer.renderLists.dispose();
        renderer.dispose()
      }

      const registerStageObject = (stage, object) => {
        if (typeof object === 'object') {
          window.appConfig.stages[stage][object.name] = object
        } else if (typeof object === 'string') {
          const theObject = scene.children.find((obj) => obj.name === object)
          window.appConfig.stages[stage][theObject.name] = theObject
        }

      }

      window.appConfig.initStageSounds = () => {
        let stageSounds = window.appConfig.stages[window.appConfig.currentStage].sounds
        let howlSounds = window.appConfig.howlSounds
        if (howlSounds.init === false) {
          Howl.prototype.changeSrc = function (newSrc, loop = false) {
            let self = this;
            self.unload();
            self._src = newSrc;
            if (loop === true) {
              self._loop = true;
              if (window.appConfig.musicTurnedOn) {
                self.play()
              }
            }
            self.load();
          }

          howlSounds.init = true

          howlSounds.count1 = loadSound({
            src: "sounds/SFX NEW/COUNT 3.mp3",
            type: 'howlSound'
          })

          howlSounds.count2 = loadSound({
            src: "sounds/SFX NEW/COUNT 2.mp3",
            type: 'howlSound'
          })

          howlSounds.count3 = loadSound({
            src: "sounds/SFX NEW/COUNT 1.mp3",
            type: 'howlSound'
          })

          howlSounds.start = loadSound({
            src: "sounds/SFX NEW/START.mp3",
            type: 'howlSound'
          })

          howlSounds.backgroundMusic = loadSound({
            src: stageSounds.backgroundMusic,
            type: "backgroundMusic",
            onplay: () => {
              "playing bgMusic"
            },
            onstop: () => {
              "stopping bgMusic"
            },
            onpause: () => {
              "pausing bgMusic"
            },
            onend: () => {
              "ending bgMusic"
            },
            onplayerror: () => {
              "error playing bgMusic"
            }
          })
          howlSounds.circuitLine = loadSound({
            src: "sounds/Sound FX/sfx-Circuit-Line.mp3",
            type: 'howlSound'
          })
          howlSounds.circuitReceiver = loadSound({
            src: "sounds/Sound FX/sfx-Circuit-Receiver.mp3",
            type: 'howlSound'
          })
          howlSounds.circuitTransmitter = loadSound({
            src: "sounds/Sound FX/sfx-Circuit-Transmitter.mp3",
            type: 'howlSound'
          })
          howlSounds.doors = []
          howlSounds.doors[0] = loadSound({
            src: "sounds/Sound FX/sfx-door-1.mp3",
            type: 'howlSound'
          })
          howlSounds.doors[1] = loadSound({
            src: "sounds/Sound FX/sfx-door-2.mp3",
            type: 'howlSound'
          })
          howlSounds.doors[2] = loadSound({
            src: "sounds/Sound FX/sfx-door-3.mp3",
            type: 'howlSound'
          })
          howlSounds.superball = loadSound({
            src: "sounds/Sound FX/sfx-superball.mp3",
            type: 'howlSound'
          })
          howlSounds.diamond = loadSound({
            src: "sounds/Sound FX/super-gem-Diamond.mp3",
            type: 'howlSound'
          })
          howlSounds.emerald = loadSound({
            src: "sounds/Sound FX/super-gem-Emerald.mp3",
            type: 'howlSound'
          })
          howlSounds.ruby = loadSound({
            src: "sounds/Sound FX/super-gem-Ruby.mp3",
            type: 'howlSound'
          })
          howlSounds.sapphire = loadSound({
            src: "sounds/Sound FX/super-gem-Sapphire.mp3",
            type: 'howlSound'
          })

          window.appConfig.howlSounds.coins.sCoin.push(
            loadSound({
              src: stageSounds.coins.sCoin[0],
              type: "howlSound",
            })
          )

          window.appConfig.howlSounds.coins.sCoin.push(
            loadSound({
              src: stageSounds.coins.sCoin[1],
              type: "howlSound",
            })
          )

          window.appConfig.howlSounds.coins.sCoin.push(
            loadSound({
              src: stageSounds.coins.sCoin[2],
              type: "howlSound",
            })
          )

          window.appConfig.howlSounds.coins.mCoin.push(
            loadSound({
              src: stageSounds.coins.mCoin[0],
              type: "howlSound",
            })
          )

          window.appConfig.howlSounds.coins.mCoin.push(
            loadSound({
              src: stageSounds.coins.mCoin[1],
              type: "howlSound",
            })
          )

          window.appConfig.howlSounds.coins.mCoin.push(
            loadSound({
              src: stageSounds.coins.mCoin[2],
              type: "howlSound",
            })
          )

          window.appConfig.howlSounds.coins.lCoin.push(
            loadSound({
              src: stageSounds.coins.lCoin[0],
              type: "howlSound",
            })
          )

          window.appConfig.howlSounds.coins.lCoin.push(
            loadSound({
              src: stageSounds.coins.lCoin[1],
              type: "howlSound",
            })
          )

          window.appConfig.howlSounds.coins.lCoin.push(
            loadSound({
              src: stageSounds.coins.lCoin[2],
              type: "howlSound",
            })
          )

          window.appConfig.howlSounds.prize = loadSound({
            src: stageSounds.prize,
            type: "howlSound",
          })

          window.appConfig.howlSounds.beams.push(
            loadSound({
              src: stageSounds.beams[0],
              type: "howlSound",
            })
          )

          window.appConfig.howlSounds.beams.push(
            loadSound({
              src: stageSounds.beams[1],
              type: "howlSound",
            })
          )

          window.appConfig.howlSounds.beams.push(
            loadSound({
              src: stageSounds.beams[2],
              type: "howlSound",
            })
          )

          window.appConfig.howlSounds.beams.push(
            loadSound({
              src: stageSounds.beams[3],
              type: "howlSound",
            })
          )

          window.appConfig.howlSounds.beams.push(
            loadSound({
              src: stageSounds.beams[4],
              type: "howlSound",
            })
          )

          window.appConfig.howlSounds.beams.push(
            loadSound({
              src: stageSounds.beams[5],
              type: "howlSound",
            })
          )

          window.appConfig.howlSounds.beams.push(
            loadSound({
              src: stageSounds.beams[6],
              type: "howlSound",
            })
          )

          window.appConfig.howlSounds.beams.push(
            loadSound({
              src: stageSounds.beams[7],
              type: "howlSound",
            })
          )

        } else if (howlSounds.init === true) {
          window.appConfig.howlSounds.backgroundMusic.changeSrc(stageSounds.backgroundMusic, true)
          window.appConfig.howlSounds.prize.changeSrc(stageSounds.prize)

          window.appConfig.howlSounds.coins.sCoin[0].changeSrc(stageSounds.coins.sCoin[0])
          window.appConfig.howlSounds.coins.sCoin[1].changeSrc(stageSounds.coins.sCoin[1])
          window.appConfig.howlSounds.coins.sCoin[2].changeSrc(stageSounds.coins.sCoin[2])

          window.appConfig.howlSounds.coins.mCoin[0].changeSrc(stageSounds.coins.mCoin[0])
          window.appConfig.howlSounds.coins.mCoin[1].changeSrc(stageSounds.coins.mCoin[1])
          window.appConfig.howlSounds.coins.mCoin[2].changeSrc(stageSounds.coins.mCoin[2])

          window.appConfig.howlSounds.coins.lCoin[0].changeSrc(stageSounds.coins.lCoin[0])
          window.appConfig.howlSounds.coins.lCoin[1].changeSrc(stageSounds.coins.lCoin[1])
          window.appConfig.howlSounds.coins.lCoin[2].changeSrc(stageSounds.coins.lCoin[2])

          window.appConfig.howlSounds.beams[0].changeSrc(stageSounds.beams[0])
          window.appConfig.howlSounds.beams[1].changeSrc(stageSounds.beams[1])
          window.appConfig.howlSounds.beams[2].changeSrc(stageSounds.beams[2])
          window.appConfig.howlSounds.beams[3].changeSrc(stageSounds.beams[3])
          window.appConfig.howlSounds.beams[4].changeSrc(stageSounds.beams[4])
          window.appConfig.howlSounds.beams[5].changeSrc(stageSounds.beams[5])
          window.appConfig.howlSounds.beams[6].changeSrc(stageSounds.beams[6])
          window.appConfig.howlSounds.beams[7].changeSrc(stageSounds.beams[7])
        }

        window.appConfig.coinSounds = [...window.appConfig.howlSounds.coins.sCoin, ...window.appConfig.howlSounds.coins.mCoin, ...window.appConfig.howlSounds.coins.lCoin]
      }


      window.appConfig.bumperMaterials = [
        {
          standard: new THREE.MeshPhongMaterial({
            color: 0xffffff,
          }),
          bumped: new THREE.MeshPhongMaterial({
            color: 0xffffff,
          })
        }
      ]

      const createBumper = (name = "NO_NAME", size = 0, p = { x: 0, y: 0, z: 0 }, sides = 5, bounce = 1.5, weight = 0, scale = 1, collisionCallback = () => { }, color) => {
        const bumperGeo = new THREE.CylinderGeometry((2 + size) * (2 / 3), 3 + size, 1, sides)

        let bumperColor
        if (color !== undefined) {
          bumperColor = new THREE.Color(color)
        } else {
          bumperColor = new THREE.Color(0xffffff)
        }
        const material = Physijs.createMaterial(
          new THREE.MeshPhongMaterial({
            color: bumperColor,
          }),
          0.5,
          bounce
        )
        const bumper = new Physijs.CylinderMesh(bumperGeo, material, weight);
        bumper.standardColor = bumperColor

        bumper.position.set(p.x, p.y, p.z)
        bumper.rotation.x = Math.PI / 2
        if (weight > 0) {
          bumper.scale.x = scale
          bumper.scale.y = scale
          bumper.scale.z = scale > 2.5 ? 2.5 : scale
        }
        bumper.name = name
        bumper.__dirtyPosition = true
        bumper.__dirtyRotation = true
        scene.add(bumper)
        window.appConfig.loadingPhysi.registerMesh(bumper)
        bumper.addEventListener('collision', (other_object) => {
          if (other_object.name === 'SPHERE0' && window.appConfig.pause === false) {
            collisionCallback(bumper, other_object)
            window.appConfig.timers.activeTimers.push(window.appConfig.timers.bumperHit(bumper))
          }
        })
        if (weight > 0) {
          const superBumperGeo = new THREE.CylinderGeometry((2 + size) * (2 / 3), 3 + size, 1, sides)
          const superBallShell = new THREE.Mesh(
            superBumperGeo,
            new THREE.MeshPhongMaterial({
              color: 0xffffff,
              reflectivity: 100,
              transparent: true,
              opacity: 0.25,
              specular: 0x050505,
              shininess: 200,
              side: THREE.DoubleSide,
              depthWrite: false
            })
          )
          superBallShell.scale.x = bumper.scale.x * 2.5
          superBallShell.scale.y = bumper.scale.y * 2.5
          superBallShell.scale.z = bumper.scale.z * 2.5
          bumper.add(superBallShell)
        }
      }

      window.appConfig.meshComponents.sapphire = {}
      window.appConfig.meshComponents.sapphire.shape = new THREE.Shape()
      window.appConfig.meshComponents.sapphire.shape.moveTo(0, .5)
      window.appConfig.meshComponents.sapphire.shape.lineTo(.5, 0)
      window.appConfig.meshComponents.sapphire.shape.lineTo(0, -.5)
      window.appConfig.meshComponents.sapphire.shape.lineTo(-.5, 0)
      window.appConfig.meshComponents.sapphire.shape.lineTo(0, .5)
      window.appConfig.meshComponents.sapphire.color = new THREE.Color('#0F52BA')
      window.appConfig.meshComponents.sapphire.whiteColor = new THREE.Color('#FFFFFF')
      window.appConfig.inputScaleV = 0.7
      window.appConfig.speedClamp = 70

      window.appConfig.meshComponents.sapphire.geometry = new THREE.ExtrudeGeometry(window.appConfig.meshComponents.sapphire.shape, {
        steps: 1,
        depth: .5,
        bevelEnabled: true,
        bevelThickness: .5,
        bevelSize: .5,
        bevelSegments: 1,
        bevelOffset: 0,
      })
      window.appConfig.meshComponents.sapphire.blueMaterial = () => {
        return new THREE.MeshPhongMaterial({
          color: window.appConfig.meshComponents.sapphire.color,
          shininess: 100,
          transparent: true,
          opacity: .95
        })
      }
      window.appConfig.meshComponents.sapphire.whiteMaterial = () => {
        return new THREE.MeshPhongMaterial({
          color: window.appConfig.meshComponents.sapphire.whiteColor,
          shininess: 100,
          transparent: true,
          opacity: .25
        })
      }
      window.appConfig.meshComponents.sapphire.sapphireGeoLine = new THREE.EdgesGeometry(window.appConfig.meshComponents.sapphire.geometry)
      window.appConfig.meshComponents.sapphire.blueLineMaterial = () => {
        return new THREE.LineBasicMaterial({ color: window.appConfig.meshComponents.sapphire.color, linewidth: 1 })
      }
      window.appConfig.meshComponents.sapphire.whiteLineMaterial = () => {
        return new THREE.LineBasicMaterial({ color: window.appConfig.meshComponents.sapphire.whiteColor, linewidth: 1 })
      }
      window.appConfig.meshComponents.sapphire.wireframeBlue = () => {
        return new THREE.LineSegments(window.appConfig.meshComponents.sapphire.sapphireGeoLine, window.appConfig.meshComponents.sapphire.blueLineMaterial())
      }
      window.appConfig.meshComponents.sapphire.wireframeWhite = () => {
        return new THREE.LineSegments(window.appConfig.meshComponents.sapphire.sapphireGeoLine, window.appConfig.meshComponents.sapphire.whiteLineMaterial())
      }
      window.appConfig.sapphires = []
      const createSapphire = (p = { x: 0, y: 0, z: 0 }, isBlueIsland = false, isCoin = true, portalParent = false) => {
        const sapphire = new THREE.Mesh(window.appConfig.meshComponents.sapphire.geometry, isCoin === true ? window.appConfig.meshComponents.sapphire.blueMaterial() : window.appConfig.meshComponents.sapphire.whiteMaterial())
        sapphire.scale.x = isCoin === false ? 1 : 2
        sapphire.scale.y = isCoin === false ? 1 : 2
        sapphire.scale.z = isCoin === false ? 1 : 2

        if (portalParent !== false) {
          sapphire.originalMaterialColor = window.appConfig.meshComponents.sapphire.color
          let portalParentMesh = scene.children.find(c => c.name.indexOf(portalParent) > -1)
          sapphire.position.x = portalParentMesh.position.x + p.x
          sapphire.position.y = portalParentMesh.position.y + p.y
          sapphire.position.z = -2.5

        } else {

          sapphire.hasTarget = false
          sapphire.travelData = {}
          sapphire.isBlueIsland = isBlueIsland

          sapphire.sapphireVector0 = new THREE.Vector2(0, 0)
          sapphire.sapphireVector1 = new THREE.Vector2(0, 0)
          sapphire.sapphireVector2 = new THREE.Vector2(0, 0)
          sapphire.sapphireVector3 = new THREE.Vector2(0, 0)

          sapphire.activeCallback = () => {
            if (window.appConfig.start === true && window.appConfig.pause === false && window.appConfig.userHasEnded === false) {
              if (sapphire.hasTarget === false) {
                let lengthVal = isBlueIsland ? window.appConfig.blueIslandPoints.length : window.appConfig.coins.length
                let randomNum = Math.floor(Math.random() * lengthVal)
                let targetCoin = isBlueIsland ? window.appConfig.blueIslandPoints[randomNum] : window.appConfig.coins[randomNum]
                if (targetCoin === undefined) {
                  targetCoin = { position: { x: 100, y: 100 } }
                }
                sapphire.sapphireVector0.set(sapphire.position.x, sapphire.position.y)
                sapphire.sapphireVector1.set(0, 0)
                sapphire.sapphireVector2.set(0, 0)
                sapphire.sapphireVector3.set(targetCoin.position.x, targetCoin.position.y)
                sapphire.sapphireVector1.lerpVectors(sapphire.sapphireVector0, sapphire.sapphireVector3, .25)
                sapphire.sapphireVector1.x += 30
                sapphire.sapphireVector1.y += 30
                sapphire.sapphireVector2.lerpVectors(sapphire.sapphireVector0, sapphire.sapphireVector3, .75)
                sapphire.sapphireVector2.x -= 30
                sapphire.sapphireVector2.y -= 30
                sapphire.travelData.curve = new THREE.CubicBezierCurve(sapphire.sapphireVector0, sapphire.sapphireVector1, sapphire.sapphireVector2, sapphire.sapphireVector3)
                sapphire.hasTarget = true
                window.appConfig.timers.activeTimers.push(window.appConfig.timers.sapphireTravel(sapphire, Math.ceil(sapphire.travelData.curve.getLength() * 50)))

              }
            }
          }
          sapphire.travelCallback = (percentComplete) => {
            if (window.appConfig.start === true && window.appConfig.pause === false && window.appConfig.userHasEnded === false) {

              if (sapphire.hasTarget === true) {
                const point = sapphire.travelData.curve.getPoint(percentComplete)
                sapphire.position.set(point.x, point.y, lfo(747) * 5)
              }
            }
          }
          sapphire.completedCallback = () => {
            if (window.appConfig.start === true && window.appConfig.pause === false && window.appConfig.userHasEnded === false) {

              sapphire.hasTarget = false
              sapphire.travelData = {}
            }
          }
          if (isBlueIsland) {
            sapphire.capturedCallback = () => {
              if (window.appConfig.sfxTurnedOn) {
                window.appConfig.howlSounds.sapphire.play()
              }
              for (let biSounds = 0; biSounds < 10; biSounds++) {
                setTimeout(() => {
                  if (window.appConfig.sfxTurnedOn) {
                    window.appConfig.coinSounds[Math.round(Math.random() * (window.appConfig.coinSounds.length - 1))].play()
                  }
                  const blueCoin = window.appConfig.stages.components.blueCrystal(biSounds % 3, { x: sapphire.position.x + ((Math.random() * 25) - 12.5), y: sapphire.position.y + ((Math.random() * 20) - 10), z: 0 })
                  scene.add(blueCoin)
                }, biSounds * 50)
              }
              if (window.appConfig.isBlueIsland === true) {
                const biPoint = window.appConfig.blueIslandPoints[Math.floor(Math.random() * window.appConfig.blueIslandPoints.length)]
                window.appConfig.stages.components.createSapphire({ x: biPoint.position.x, y: biPoint.position.y, z: 0 }, true)
              }
            }
          } else {
            sapphire.capturedCallback = () => {
              if (window.appConfig.sfxTurnedOn) {
                window.appConfig.howlSounds.sapphire.play()
              }
              for (let biSounds = 0; biSounds < 20; biSounds++) {
                setTimeout(() => {
                  if (window.appConfig.sfxTurnedOn) {
                    window.appConfig.coinSounds[Math.round(Math.random() * (window.appConfig.coinSounds.length - 1))].play()
                  }
                  const blueCoin = window.appConfig.stages.components.blueCrystal(biSounds % 3, { x: sapphire.position.x + ((Math.random() * 25) - 12.5), y: sapphire.position.y + ((Math.random() * 20) - 10), z: 0 })
                  scene.add(blueCoin)
                }, biSounds * 50)
              }
              window.appConfig.stages.components.dematerializeMesh({ dMesh: sapphire, scaleAdj: 5, spriteTypes: ['square'] })
              window.appConfig.stages[window.appConfig.currentStage].data.sapphires++
            }
          }
          sapphire.position.set(p.x, p.y, p.z)
        }


        let sapphireNameAdjustment = isCoin === false ? 'S_INDICATOR' : 'SAPPHIRE'

        const nameFront = window.appConfig.currentStage + sapphireNameAdjustment
        const nameNum = Math.floor(Math.random() * 10000)
        let nameEnd
        if (isBlueIsland === true) {
          nameEnd = "_BLUEISLAND"
        } else {
          nameEnd = ""
        }
        const sapphireName = nameFront + nameNum + nameEnd
        sapphire.name = sapphireName
        sapphire.coinValue = 2500
        scene.add(sapphire)

        // wireframe
        sapphire.add(isCoin === false ? window.appConfig.meshComponents.sapphire.wireframeWhite() : window.appConfig.meshComponents.sapphire.wireframeBlue())

        if (isCoin === true) {
          window.appConfig.sapphires.push(sapphire)
          window.appConfig.coins.push(sapphire)
        }
      }

      const createRuby = (p = { x: 0, y: 0, z: 0 }, isCoin = true, portalParent = false) => {
        const rubyShape = new THREE.Shape()
        rubyShape.moveTo(0, 0)
        rubyShape.lineTo(.5, 0)
        rubyShape.lineTo(1, .5)
        rubyShape.lineTo(1, 1.5)
        rubyShape.lineTo(.5, 2)
        rubyShape.lineTo(0, 2)
        rubyShape.lineTo(-.5, 1.5)
        rubyShape.lineTo(-.5, .5)
        rubyShape.lineTo(0, 0)

        const rubyGeo = new THREE.ExtrudeGeometry(rubyShape, {
          steps: 1,
          depth: .5,
          bevelEnabled: true,
          bevelThickness: .5,
          bevelSize: .5,
          bevelSegments: 1,
          bevelOffset: 0,
        })

        const rubyMaterial = new THREE.MeshPhongMaterial({
          color: isCoin === false ? 0xffffff : 0xff0000,
          specular: 0x050505,
          shininess: 200,
          opacity: isCoin === false ? .25 : .95,
          transparent: true
        })

        const ruby = new THREE.Mesh(rubyGeo, rubyMaterial)

        if (portalParent !== false) {
          let portalParentMesh = scene.children.find(c => c.name.indexOf(portalParent) > -1)
          ruby.position.x = portalParentMesh.position.x - 3.5
          ruby.position.y = portalParentMesh.position.y - 3
          ruby.position.z = -2.5
        } else {
          ruby.position.set(p.x, p.y, p.z)
        }

        ruby.scale.x = isCoin === false ? 1 : 1.5
        ruby.scale.y = isCoin === false ? 1 : 1.5
        ruby.scale.z = isCoin === false ? 1 : 1.5
        let rubyNameAdjustment = isCoin === false ? 'R_INDICATOR' : 'RUBY'
        ruby.name = window.appConfig.currentStage + '_' + rubyNameAdjustment + Math.floor(Math.random() * 10000)
        ruby.coinValue = 5000
        ruby.capturedCallback = () => {
          if (window.appConfig.sfxTurnedOn) {
            window.appConfig.howlSounds.ruby.play()
          }
        }
        scene.add(ruby)

        if (isCoin === false) {
          ruby.originalMaterialColor = new THREE.Color(0xff0000)
        }

        // wireframe
        let rubyGeoLine = new THREE.EdgesGeometry(ruby.geometry)
        let mat = new THREE.LineBasicMaterial({ color: isCoin === false ? 0xffffff : 0xff0000, linewidth: 1 })
        let wireframe = new THREE.LineSegments(rubyGeoLine, mat)
        ruby.add(wireframe)
        if (isCoin === true) {
          window.appConfig.coins.push(ruby)
        }
      }

      const createEmerald = (p = { x: 0, y: 0, z: 0 }, isCoin = true, portalParent = false) => {
        const emeraldShape = new THREE.Shape()
        emeraldShape.moveTo(0, 0)
        emeraldShape.lineTo(1, 0)
        emeraldShape.lineTo(1.5, 1)
        emeraldShape.lineTo(1, 2)
        emeraldShape.lineTo(0, 2)
        emeraldShape.lineTo(-.5, 1)
        emeraldShape.lineTo(0, 0)

        const emeraldGeo = new THREE.ExtrudeGeometry(emeraldShape, {
          steps: 1,
          depth: .5,
          bevelEnabled: true,
          bevelThickness: .5,
          bevelSize: .5,
          bevelSegments: 1,
          bevelOffset: 0,
        })

        const emeraldMaterial = new THREE.MeshPhongMaterial({
          color: 0xb3ffb3,
          specular: 0x050505,
          shininess: 200,
          transparent: true,
          opacity: isCoin === false ? .25 : .95
        })

        const emerald = new THREE.Mesh(emeraldGeo, emeraldMaterial)
        emerald.scale.y = isCoin === false ? 1 : 1.5
        emerald.scale.x = isCoin === false ? 1 : 1.25
        emerald.scale.z = isCoin === false ? 1 : 1.25

        if (portalParent !== false) {
          let portalParentMesh = scene.children.find(c => c.name.indexOf(portalParent) > -1)
          emerald.position.x = portalParentMesh.position.x + 3
          emerald.position.y = portalParentMesh.position.y - 3
          emerald.position.z = -2.5
        } else {
          emerald.position.set(p.x, p.y, p.z)
        }

        let emeraldNameAdjustment = isCoin === false ? 'E_INDICATOR' : 'EMERALD'
        emerald.name = window.appConfig.currentStage + '_' + emeraldNameAdjustment + Math.floor(Math.random() * 10000)
        emerald.coinValue = 10000

        if (isCoin === false) {
          emerald.originalMaterialColor = new THREE.Color(0xb3ffb3)
        }

        // wireframe
        let emeraldGeoLine = new THREE.EdgesGeometry(emeraldGeo)
        let mat = new THREE.LineBasicMaterial({ color: isCoin === false ? 0xffffff : 0xb3ffb3, linewidth: 1 })
        let wireframe = new THREE.LineSegments(emeraldGeoLine, mat)

        emerald.capturedCallback = () => {
          if (window.appConfig.sfxTurnedOn) {
            window.appConfig.howlSounds.emerald.play()
          }
        }
        scene.add(emerald)
        emerald.add(wireframe)
        if (isCoin === true) {
          window.appConfig.coins.push(emerald)
        }
      }


      const createDiamond = (p = { x: 0, y: 0, z: 0 }, isCoin = true, portalParent = false) => {
        const diamondMaterial = new THREE.MeshPhongMaterial({
          color: isCoin === false ? 0xffffff : 0x000ff,
          specular: 0x050505,
          transparent: true,
          opacity: isCoin === false ? .25 : .95,
          shininess: 100
        })

        window.appConfig.crystalMaterials.push({
          standard: diamondMaterial,
          pulsing: diamondMaterial
        })

        const diamondGeoGroup = new THREE.Group()
        const diamondGeoBottom = new THREE.CylinderGeometry(
          2, 0, 2, 6
        )
        const diamondGeoTop = new THREE.CylinderGeometry(
          1, 2, 1, 6
        )
        const diamondTopMesh = new THREE.Mesh(
          diamondGeoTop, diamondMaterial
        )

        const diamond = new THREE.Mesh(diamondGeoBottom, diamondMaterial)
        diamond.size = 4
        diamond.add(diamondTopMesh)
        diamondTopMesh.position.y = 1.5

        if (portalParent !== false) {
          let portalParentMesh = scene.children.find(c => c.name.indexOf(portalParent) > -1)
          diamond.position.x = portalParentMesh.position.x + .125
          diamond.position.y = portalParentMesh.position.y + 3
          diamond.position.z = -2.5
        } else {
          diamond.position.set(p.x, p.y, p.z)
        }

        diamond.scale.x = isCoin === false ? 1 : 2
        diamond.scale.y = isCoin === false ? 1 : 2
        diamond.scale.z = isCoin === false ? 1 : 2
        diamond.rotation.y = .25 * Math.PI

        let diamondNameAdjustment = isCoin === false ? 'D_INDICATOR' : 'DIAMOND'
        diamond.name = window.appConfig.currentStage + '_' + diamondNameAdjustment + Math.floor(Math.random() * 10000)

        diamond.coinValue = 25000
        diamond.capturedCallback = () => {
          if (window.appConfig.sfxTurnedOn) {
            window.appConfig.howlSounds.diamond.play()
          }
        }
        scene.add(diamond)

        // wireframe
        let diamondGeoLine = new THREE.EdgesGeometry(diamond.geometry)
        let mat = new THREE.LineBasicMaterial({ color: isCoin === false ? 0xffffff : 0xffffff, linewidth: 1 })
        let wireframe = new THREE.LineSegments(diamondGeoLine, mat)

        // wireframe for child
        let diamondGeoLineChild = new THREE.EdgesGeometry(diamond.children[0].geometry)
        let matChild = new THREE.LineBasicMaterial({ color: isCoin === false ? 0xffffff : 0xffffff, linewidth: 1 })
        let wireframeChild = new THREE.LineSegments(diamondGeoLineChild, matChild)
        wireframeChild.position.y = 1.5

        if (isCoin === false) {
          diamond.originalMaterialColor = new THREE.Color(0xffffff)
        }

        scene.add(diamond)
        diamond.add(wireframe)
        diamond.add(wireframeChild)

        if (isCoin === true) {
          window.appConfig.coins.push(diamond)
        }
      }


      const createBlackHole = (config) => {
        let blackHoleMaterial = new THREE.MeshPhongMaterial(
          {
            color: new THREE.Color(0x000000),
            reflectivity: 100,
            specular: 0xffffff,
            shininess: 200,
            side: THREE.DoubleSide,
            depthWrite: false
          }
        )

        let theBlackHoleGeo = new THREE.SphereGeometry(1, 16, 32)
        let theBlackHoleMesh = new THREE.Mesh(theBlackHoleGeo, blackHoleMaterial)
        scene.add(theBlackHoleMesh)
        theBlackHoleMesh.position.x = config.position.x
        theBlackHoleMesh.position.y = config.position.y
        theBlackHoleMesh.position.z = config.position.z
        theBlackHoleMesh.scale.x = config.scale.x * 2
        theBlackHoleMesh.scale.y = config.scale.y * 2
        theBlackHoleMesh.scale.z = config.scale.z * 2

        theBlackHoleMesh.name = window.appConfig.currentStage + "_BLACK_HOLE"

        const createSpriteCircles = (
          s,
          n = 4
        ) => {

          let spriteGroup = new THREE.Group()

          var ellipseGeometry = new THREE.CircleGeometry(s, n)

          let spritePlane = () => new THREE.Mesh(
            theBlackHoleGeo,
            blackHoleMaterial
          )

          let i = 1;
          for (i; i < ellipseGeometry.vertices.length; i++) {
            let id = Math.round(Math.random() * 100000)
            let theSprite = spritePlane()
            theSprite.scale.x = config.scale.x * .33
            theSprite.scale.y = config.scale.y * .33
            theSprite.scale.z = config.scale.z * .33
            theSprite.position.x = ellipseGeometry.vertices[i].x * s
            theSprite.position.y = ellipseGeometry.vertices[i].y * s
            theSprite.position.z = 0
            theSprite.name = id
            spriteGroup.add(theSprite)
          }

          theBlackHoleMesh.add(spriteGroup)
          window.appConfig.stages[window.appConfig.currentStage].data.blackHoles.push(theBlackHoleMesh)
        }
        createSpriteCircles(.75, 4)
      }




      window.appConfig.meshComponents.dematerialize.triangle = new THREE.CircleGeometry(.25, 3)
      window.appConfig.meshComponents.dematerialize.circle = new THREE.CircleGeometry(.175, 16)
      window.appConfig.meshComponents.dematerialize.square = new THREE.PlaneGeometry(.25, .25, 1, 1)



      // const theSpritePlaneGeometry = new THREE.PlaneGeometry(.25, .25, 1, 1)

      const dematerializeMesh = (config) => {
        if (config && config.dMesh) {
          config.scaleAdj === undefined ? config.scaleAdj = 2 : null
          config.spriteTypes === undefined ? config.spriteTypes = ['square'] : null

          let dematColor
          if (config.dMesh.dematColor) {
            dematColor = config.dMesh.dematColor
          }else if (config.dMesh.material && config.dMesh.material.color) {
            dematColor = new THREE.Color().copy(config.dMesh.material.color)
          } else {
            dematColor = new THREE.Color().copy(config.dMesh.children[0].material.color)
          }

          let theDSpriteMaterial = new THREE.MeshPhongMaterial({
            color: dematColor,
            transparent: true,
            opacity: 1
          })
          const createSpriteCircles = (
            s,
            n = 4
          ) => {

            let spriteGroup = new THREE.Group()

            var ellipseGeometry = new THREE.CircleGeometry(s, n)
            let spritePlane = () => {
              let randomNum = Math.floor(Math.random() * config.spriteTypes.length)
              return new THREE.Mesh(
                window.appConfig.meshComponents.dematerialize[config.spriteTypes[randomNum]],
                theDSpriteMaterial
              )
            }
            let randomScaleAdj = 1 + ((Math.random() * .2) - .1)
            let i = 1;
            for (i; i < ellipseGeometry.vertices.length; i++) {
              let id = window.appConfig.currentStage + '_DMESH_SPRITE_' + Math.round(Math.random() * 100000)
              let theSprite = spritePlane()
              theSprite.scale.x = config.dMesh.scale.x * config.scaleAdj * randomScaleAdj
              theSprite.scale.y = config.dMesh.scale.y * config.scaleAdj * randomScaleAdj
              theSprite.scale.z = config.dMesh.scale.z * config.scaleAdj * randomScaleAdj
              theSprite.position.x = config.dMesh.position.x + ellipseGeometry.vertices[i].x * s
              theSprite.position.y = config.dMesh.position.y + ellipseGeometry.vertices[i].y * s
              theSprite.position.z = config.dMesh.position.z + ellipseGeometry.vertices[i].z * s
              theSprite.name = id
              spriteGroup.add(theSprite)
            }

            scene.add(spriteGroup)
            window.appConfig.timers.activeTimers.push(
              window.appConfig.timers.dematerializeMesh(spriteGroup)
            )
          }
          createSpriteCircles(1, 4)
        }
      }



      window.appConfig.stages = {
        components: {
          physiRock: (bgObj, pVec = 1, randomX = 0, randomY = 0, timeBonus = true) => {
            // if(timeBonus === false) {
            //   debugger
            // }
            let distanceClamp = 50
            const newPhysiObj = new Physijs.ConvexMesh(
              new THREE.IcosahedronGeometry((Math.abs(bgObj.scale.x) + Math.abs(bgObj.scale.y) + Math.abs(bgObj.scale.z)) / 3, 0),
              Physijs.createMaterial(
                bgObj.material.clone(),
                0.6, // medium friction
                0.6 // low restitution
              ),
              0 // mass
            )
            newPhysiObj.name = window.appConfig.currentStage + '_BGPHYSI_' + Math.round(Math.random() * 1000)
            newPhysiObj.position.x = (bgObj.position.x * pVec + randomX)//Math.abs(bgObj.position.x * pVec + randomX) > distanceClamp ? distanceClamp : (bgObj.position.x * pVec + randomX)
            newPhysiObj.position.y = (bgObj.position.y * pVec + randomY)//Math.abs(bgObj.position.y * pVec + randomY) > distanceClamp ? distanceClamp : (bgObj.position.y * pVec + randomY)
            newPhysiObj.position.z = 1.5
            newPhysiObj.rotation.x = bgObj.rotation.x
            newPhysiObj.rotation.y = bgObj.rotation.y
            newPhysiObj.rotation.z = bgObj.rotation.z
            newPhysiObj.material.opacity = 1
            window.appConfig.loadingPhysi.registerMesh(newPhysiObj)
            newPhysiObj.addEventListener('collision', function (other_object) {
              if (other_object.name === 'SPHERE0' && window.appConfig.pause === false) {
                window.appConfig.stages.components.dematerializeMesh({ dMesh: newPhysiObj, scaleAdj: 5, spriteTypes: ['triangle'] })
                let divisions = Math.round(Math.random() * ((bgObj.scale.x + bgObj.scale.y + bgObj.scale.z)) / 2)
                let bgObjectScale = Math.ceil((bgObj.scale.x + bgObj.scale.y + bgObj.scale.z) / 3)
                for (let div = 0; div < divisions; div++) {
                  let newPhysiObjCol = new Physijs.ConvexMesh(
                    new THREE.TetrahedronGeometry(.5 + Math.random() * 2.5, 0),
                    Physijs.createMaterial(
                      bgObj.material.clone(),
                      0.6, // medium friction
                      0.6 // low restitution
                    ),
                    0
                  )
                  newPhysiObjCol.name = window.appConfig.currentStage + '_BGPHYSI_COL' + Math.round(Math.random() * 1000)
                  newPhysiObjCol.position.x = newPhysiObj.position.x + ((Math.random() * 25) - 12.5)
                  newPhysiObjCol.position.y = newPhysiObj.position.y + ((Math.random() * 25) - 12.5)
                  if (newPhysiObjCol.position.distanceTo(other_object.position) > 5) {
                    newPhysiObjCol.position.z = 1.5
                    newPhysiObjCol.rotation.x = Math.random() * Math.PI
                    newPhysiObjCol.rotation.y = Math.random() * Math.PI
                    newPhysiObjCol.rotation.z = Math.random() * Math.PI
                    newPhysiObjCol.material.opacity = 1
                    window.appConfig.stages.components.dematerializeMesh({ dMesh: newPhysiObjCol, scaleAdj: (bgObjectScale / 2) + (Math.random() * (bgObjectScale / 2)), spriteTypes: ['triangle'] })

                    window.appConfig.loadingPhysi.registerMesh(newPhysiObjCol)
                    newPhysiObjCol.addEventListener('collision', function (other_object2) {
                      if (other_object2.name === 'SPHERE0' && window.appConfig.pause === false) {
                        window.appConfig.stages.components.dematerializeMesh({ dMesh: newPhysiObjCol, scaleAdj: (bgObjectScale / 2) + (Math.random() * (bgObjectScale / 2)), spriteTypes: ['triangle'] })
                        scene.remove(newPhysiObjCol)
                      }
                    })
                    scene.add(newPhysiObjCol)
                    if (timeBonus === true && Math.random() < .05) {
                      window.appConfig.prize(window.appConfig.currentStageIndex, Math.round(Math.random() * 10000), { x: newPhysiObj.position.x, y: newPhysiObj.position.y, z: 0 })
                    }
                    for (let superSounds = 0; superSounds < 4; superSounds++) {
                      setTimeout(() => {
                        if (window.appConfig.sfxTurnedOn) {
                          window.appConfig.coinSounds[Math.round(Math.random() * (window.appConfig.coinSounds.length - 1))].play()
                        }
                        scene.add(window.appConfig.stages.components.crystal(superSounds % 3, { x: other_object.position.x + ((Math.random() * 25) - 12.5), y: other_object.position.y + ((Math.random() * 20) - 10), z: 0 }))
                      }, superSounds * 50)
                    }

                  }
                }

                if (newPhysiObj) {
                  newPhysiObj && scene.remove(newPhysiObj)
                }
              }
            })
            return newPhysiObj
          },
          handleCoinRemoval: (coinsToRemove, all = false) => {
            coinsToRemove.reverse()
            if (coinsToRemove.length > 0) {
              coinsToRemove.forEach(potentiallyGrabbedCoin => {

                const coinValue = potentiallyGrabbedCoin.coinValue
                const prizeValue = potentiallyGrabbedCoin.prizeValue
                if (potentiallyGrabbedCoin.spriteFetching) {
                  potentiallyGrabbedCoin.spriteFetching.fetchData = {}
                  potentiallyGrabbedCoin.spriteFetching.isFetchingCoin = false
                  const foundTimerIndex = window.appConfig.timers.activeTimers.findIndex((timer, timerIndex) => {
                    return timer.name === `SPRITEFETCH${potentiallyGrabbedCoin.spriteFetching.num}`
                  })
                  if (foundTimerIndex > -1) {
                    window.appConfig.timers.activeTimers.splice(foundTimerIndex, 1)
                  }
                  potentiallyGrabbedCoin.spriteFetching.isReturning = true
                  window.appConfig.timers.activeTimers.push(window.appConfig.timers[`spriteReturn${potentiallyGrabbedCoin.spriteFetching.num}`](potentiallyGrabbedCoin.spriteFetching))
                  potentiallyGrabbedCoin.spriteFetching.returnData = {
                    startingPosition: potentiallyGrabbedCoin.spriteFetching.mesh.position.clone()
                  }
                }
                if (coinValue > 0) {
                  window.appConfig.score.coins += potentiallyGrabbedCoin.coinValue;
                  if (potentiallyGrabbedCoin.featureType === "COIN") {
                    window.appConfig.stages.components.dematerializeMesh({ dMesh: potentiallyGrabbedCoin, spriteTypes: ['triangle', 'circle'] })

                  }
                  potentiallyGrabbedCoin.visible = false
                  // coin.coinRemovalIndex = coinIndex
                  window.appConfig.coins.splice(potentiallyGrabbedCoin.coinRemovalIndex, 1);
                  window.appConfig.gameModeFunctions.updateGameScore({ score: window.appConfig.score.coins })
                  if (potentiallyGrabbedCoin.coinType === 'single' && window.appConfig.sfxTurnedOn && window.appConfig.userHasEnded === false) {
                    window.appConfig.howlSounds.coins.sCoin[Math.floor(Math.random() * 2.99)].play()
                  }
                  if (potentiallyGrabbedCoin.coinType === 'double' && window.appConfig.sfxTurnedOn && window.appConfig.userHasEnded === false) {
                    window.appConfig.howlSounds.coins.mCoin[Math.floor(Math.random() * 2.99)].play()
                  }
                  if (potentiallyGrabbedCoin.coinType === 'triple' && window.appConfig.sfxTurnedOn && window.appConfig.userHasEnded === false) {
                    window.appConfig.howlSounds.coins.lCoin[Math.floor(Math.random() * 2.99)].play()
                  }

                  if (potentiallyGrabbedCoin.capturedCallback && all === true) {
                    potentiallyGrabbedCoin.capturedCallback()
                    setTimeout(() => {
                      scene.remove(potentiallyGrabbedCoin)
                    }, 500)
                  } else {
                    scene.remove(potentiallyGrabbedCoin)
                  }


                  if (all === false) {
                    if (potentiallyGrabbedCoin.name.indexOf('RUBY') > -1) {
                      window.appConfig.stages.components.dematerializeMesh({ dMesh: potentiallyGrabbedCoin, spriteTypes: ['circle', 'fiveStar', 'fourStar'] })

                      let rubyIndicator = scene.children.find(c => c.name.indexOf('R_INDICATOR') > -1)
                      window.appConfig.timers.activeTimers.push(
                        window.appConfig.timers.activatePortalIndicator(rubyIndicator)
                      )
                    }

                    if (potentiallyGrabbedCoin.name.indexOf('EMERALD') > -1) {
                      window.appConfig.stages.components.dematerializeMesh({ dMesh: potentiallyGrabbedCoin, spriteTypes: ['circle', 'fiveStar', 'fourStar'] })
                      let emeraldIndicator = scene.children.find(c => c.name.indexOf('E_INDICATOR') > -1)
                      window.appConfig.timers.activeTimers.push(
                        window.appConfig.timers.activatePortalIndicator(emeraldIndicator)
                      )
                    }

                    if (potentiallyGrabbedCoin.name.indexOf('DIAMOND') > -1) {
                      window.appConfig.stages.components.dematerializeMesh({ dMesh: potentiallyGrabbedCoin, spriteTypes: ['circle', 'fiveStar', 'fourStar'] })
                      let diamondIndicator = scene.children.find(c => c.name.indexOf('D_INDICATOR') > -1)
                      window.appConfig.timers.activeTimers.push(
                        window.appConfig.timers.activatePortalIndicator(diamondIndicator)
                      )
                    }

                    if (potentiallyGrabbedCoin.name.indexOf('SAPPHIRE') > -1 && (potentiallyGrabbedCoin.isBlueIsland === false || potentiallyGrabbedCoin.isBlueIsland === undefined || !potentiallyGrabbedCoin.isBlueIsland)) {
                      let theIndicator = scene.children.find(cf => cf.name.indexOf('S_INDICATOR') > -1 && cf.indicatorActive === undefined)
                      theIndicator.indicatorActive = true
                      window.appConfig.timers.activeTimers.push(
                        window.appConfig.timers.activatePortalIndicator(theIndicator)
                      )
                    }
                  }

                } else if (prizeValue > 0 && all === false) {
                  window.appConfig.stages.components.dematerializeMesh({ dMesh: potentiallyGrabbedCoin, spriteTypes: ['circle', 'fourStar'] })
                  if (window.appConfig.sfxTurnedOn) {
                    window.appConfig.howlSounds.prize.play()
                  }
                  window.appConfig.score.coins += potentiallyGrabbedCoin.prizeValue;
                  potentiallyGrabbedCoin.visible = false
                  window.appConfig.coins.splice(potentiallyGrabbedCoin.coinRemovalIndex, 1);
                  if (window.appConfig.coinScoreThrottle === false) {
                    window.appConfig.coinScoreThrottle = true
                    setTimeout(() => {
                      window.appConfig.coinScoreThrottle = false
                    }, 250)
                    window.appConfig.gameModeFunctions.updateGameScore({ score: window.appConfig.score.coins })
                  }
                  const currentTime = window.appConfig.timer.getTimeValues()
                  const newTimer = new easytimer.Timer({ countdown: true, startValues: { minutes: currentTime.minutes, seconds: currentTime.seconds + 15, secondTenths: currentTime.secondTenths }, precision: "secondTenths" });
                  window.appConfig.stageTotalTimePlayed += 15
                  window.appConfig.timer.stop()
                  window.appConfig.timer.removeEventListener("secondTenthsUpdated", function (e) {
                    window.appConfig.selectors.timer.childNodes[0].data = `${window.appConfig.timer
                      .getTimeValues()
                      .toString(["minutes", "seconds", "secondTenths"])}`;
                  });
                  window.appConfig.timer.removeEventListener("targetAchieved", function (e) {
                    startStageEnd()
                  })
                  window.appConfig.timer = newTimer
                  newTimer.start()
                  newTimer.addEventListener("secondTenthsUpdated", function (e) {
                    window.appConfig.selectors.timer.childNodes[0].data = `${window.appConfig.timer
                      .getTimeValues()
                      .toString(["minutes", "seconds", "secondTenths"])}`;
                  });
                  newTimer.addEventListener("targetAchieved", function (e) {
                    startStageEnd()
                  })
                }

                if (potentiallyGrabbedCoin.capturedCallback) {
                  potentiallyGrabbedCoin.capturedCallback()
                  setTimeout(() => {
                    scene.remove(potentiallyGrabbedCoin)
                  }, 500)
                } else {
                  scene.remove(potentiallyGrabbedCoin)
                }




              })
            }



          },

          findCoinsToRemove: () => {
            const sphereLinearVelocityLength = window.appConfig.sphere.getLinearVelocity().length()
            const xCoinMod = 2 + sphereLinearVelocityLength * .03
            const yCoinMod = 3 + sphereLinearVelocityLength * .03
            delete window.appConfig.coinsToRemove
            window.appConfig.coinsToRemove = []
            window.appConfig.coins.forEach(
              (coin, coinIndex) => {
                if (coinIndex % (window.appConfig.coinFrameCheckNumber % 5) < 1) {
                  if (
                    Math.abs(coin.position.x - window.appConfig.sphere.position.x) <
                    coin.scale.x * xCoinMod &&
                    Math.abs(coin.position.y - window.appConfig.sphere.position.y) < coin.scale.x * yCoinMod) {
                    coin.coinRemovalIndex = coinIndex
                    window.appConfig.coinsToRemove.push(coin)
                  }
                }
              }
            )
            return window.appConfig.coinsToRemove
          },
          createBlackHole: createBlackHole,
          dematerializeMesh: dematerializeMesh,
          stageInit: () => {
            window.appConfig.stages[window.appConfig.currentStage].data.remotes = []
            window.appConfig.stages[window.appConfig.currentStage].data.portals = []
            window.appConfig.stages[window.appConfig.currentStage].data.gemSuperBalls = 0
            window.appConfig.superballs = []
            window.appConfig.isBlueIsland = false
            window.appConfig.stages[window.appConfig.currentStage].data.sapphires = 0
            window.appConfig.stages[window.appConfig.currentStage].data.blackHoles = []
            document.body.style.background = window.appConfig.stages.components.background(
              .5,
              window.appConfig.stages[window.appConfig.currentStage].backgroundColors
            )
            window.appConfig.sapphires = []

            window.appConfig.initStageSounds()
            window.appConfig.bumperMaterials[0].standard.color = getRandomColor()
            window.appConfig.lighting.hemisphereLight.color = getRandomColor()
            window.appConfig.lighting.hemisphereLight.groundColor = getRandomColor()
            if (window.appConfig.performanceLevel > 0) {
              window.appConfig.stages[window.appConfig.currentStage].initBackground()
            }
          },
          crystal: crystal,
          blueCrystal: blueCrystal,
          createCrystalLine: createCrystalLine,
          createCrystalCircle: createCrystalCircle,
          createCrystalCross: createCrystalCross,
          createBumper: createBumper,
          createSapphire: createSapphire,
          createRuby: createRuby,
          createEmerald: createEmerald,
          createDiamond: createDiamond,
          createBeam: createBeam,
          createStage0MainBeamStructure: (
            scale,
            scaleAdj = 0,
            name,
            p = { x: 0, y: 0 },
            skipArray = [0, 0, 0, 0],
            finalStageBounce = false,
            color
          ) => {
            const mainStructure = new Physijs.BoxMesh(
              new THREE.BoxGeometry(0.01, 0.01, 0.01),
              new Physijs.createMaterial(
                new THREE.MeshPhongMaterial({ transparent: true, opacity: 0 }),
                0.6,
                0.3
              ),
              0
            );
            mainStructure.position.set(0 + p.x, 0 + p.y, 1.5);

            skipArray[0] === 0 && mainStructure.add(
              createBeam({
                p: [0 * scale, -8 * scale, -1],
                r: [0, 0, 0],
                s: (1 + scaleAdj) * scale,
                color: color
              }, finalStageBounce)
            );
            skipArray[1] === 0 && mainStructure.add(
              createBeam({
                p: [-8 * scale, 0 * scale, -1],
                r: [0, 0, 0.5 * Math.PI],
                s: (1 + scaleAdj) * scale,
                color: color
              }, finalStageBounce)
            );
            skipArray[2] === 0 && mainStructure.add(
              createBeam({
                p: [8 * scale, 0 * scale, -1],
                r: [0, 0, 0.5 * Math.PI],
                s: (1 + scaleAdj) * scale,
                color: color
              }, finalStageBounce)
            );
            skipArray[3] === 0 && mainStructure.add(
              createBeam({
                p: [0 * scale, 8 * scale, -1],
                r: [0, 0, 0],
                s: (1 + scaleAdj) * scale,
                color: color
              }, finalStageBounce)
            );
            mainStructure.name = name;
            mainStructure.__dirtyPosition = true;
            mainStructure.featureType = "BEAM"
            return mainStructure;
          },
          createStage1MinorBeamStructure: (
            scale,
            scaleAdj = 5,
            name,
            p = { x: 0, y: 0 }
          ) => {
            const minorBeamStructure = new Physijs.BoxMesh(
              new THREE.BoxGeometry(0.01, 0.01, 0.01),
              new Physijs.createMaterial(
                new THREE.MeshPhongMaterial({ transparent: true, opacity: 0 }),
                0.6,
                0.3
              ),
              0
            );
            minorBeamStructure.position.set(0 + p.x, 0 + p.y, 1.5);

            minorBeamStructure.add(
              createBeam({
                p: [20 * scale, 0 * scale, -1],
                r: [0, 0, 0],
                s: (1 + scaleAdj) * scale,
              })
            );

            minorBeamStructure.add(
              createBeam({
                p: [-20 * scale, 0 * scale, -1],
                r: [0, 0, 0],
                s: (1 + scaleAdj) * scale,
              })
            );

            minorBeamStructure.add(
              createBeam({
                p: [0 * scale, -20 * scale, -1],
                r: [0, 0, 0.5 * Math.PI],
                s: (1 + scaleAdj) * scale,
              })
            );

            minorBeamStructure.add(
              createBeam({
                p: [0 * scale, 20 * scale, -1],
                r: [0, 0, 0.5 * Math.PI],
                s: (1 + scaleAdj) * scale,
              })
            );

            minorBeamStructure.name = name;
            window.appConfig.loadingPhysi.registerMesh(minorBeamStructure)
            minorBeamStructure.__dirtyPosition = true;
            minorBeamStructure.featureType = "BEAM"
            return minorBeamStructure;
          },
          createStage1MainBeamStructure: (
            scale,
            scaleAdj = 5,
            name,
            p = { x: 0, y: 0 }
          ) => {
            const mainStructure = new Physijs.BoxMesh(
              new THREE.BoxGeometry(0.01, 0.01, 0.01),
              new Physijs.createMaterial(
                new THREE.MeshPhongMaterial({ transparent: true, opacity: 0 }),
                0.6,
                0.3
              ),
              0
            );
            mainStructure.position.set(0 + p.x, 0 + p.y, 1.5);
            mainStructure.add(
              createBeam({
                p: [-2 * scale, 4.75 * scale, -1],
                r: [0, 0, 0.5 * Math.PI],
                s: (1 + scaleAdj) * scale,
              })
            );
            mainStructure.add(
              createBeam({
                p: [2 * scale, 4.75 * scale, -1],
                r: [0, 0, 0.5 * Math.PI],
                s: (1 + scaleAdj) * scale,
              })
            );
            mainStructure.add(
              createBeam({
                p: [-2 * scale, -9.75 * scale, -1],
                r: [0, 0, 0.5 * Math.PI],
                s: (1 + scaleAdj) * scale,
              })
            );
            mainStructure.add(
              createBeam({
                p: [2 * scale, -9.75 * scale, -1],
                r: [0, 0, 0.5 * Math.PI],
                s: (1 + scaleAdj) * scale,
              })
            );

            mainStructure.add(
              createBeam({
                p: [7.5 * scale, -1 * scale, -1],
                r: [0, 0, 0],
                s: (1 + scaleAdj) * scale,
              })
            );
            mainStructure.add(
              createBeam({
                p: [7.5 * scale, -4 * scale, -1],
                r: [0, 0, 0],
                s: (1 + scaleAdj) * scale,
              })
            );
            mainStructure.add(
              createBeam({
                p: [-7.5 * scale, -1 * scale, -1],
                r: [0, 0, 0],
                s: (1 + scaleAdj) * scale,
              })
            );
            mainStructure.add(
              createBeam({
                p: [-7.5 * scale, -4 * scale, -1],
                r: [0, 0, 0],
                s: (1 + scaleAdj) * scale,
              })
            );
            mainStructure.name = name;
            window.appConfig.loadingPhysi.registerMesh(mainStructure)
            mainStructure.__dirtyPosition = true;
            mainStructure.featureType = "BEAM"
            return mainStructure;
          },
          createStage3CrossBeamStructure: (
            scale,
            scaleAdj = 5,
            name,
            p = { x: 0, y: 0 }
          ) => {
            const mainStructure = new Physijs.BoxMesh(
              new THREE.BoxGeometry(0.01, 0.01, 0.01),
              new Physijs.createMaterial(
                new THREE.MeshPhongMaterial({ transparent: true, opacity: 0 }),
                0.6,
                0.3
              ),
              0
            );
            mainStructure.position.set(0 + p.x, 0 + p.y, 1.5);
            mainStructure.add(
              createBeam({
                p: [-scale * .5, 0, -1],
                r: [0, 0, 0],
                s: (1 + scaleAdj) * scale,
              })
            );
            mainStructure.add(
              createBeam({
                p: [0, scale, -1],
                r: [0, 0, 0.5 * Math.PI],
                s: (1 + scaleAdj) * scale,
              })
            );
            mainStructure.name = name;
            window.appConfig.loadingPhysi.registerMesh(mainStructure)
            mainStructure.children[1].position.x -= .25
            mainStructure.children[1].position.y -= .25
            mainStructure.children[1].__dirtyPosition = true
            mainStructure.__dirtyPosition = true;
            mainStructure.featureType = "BEAM"
            return mainStructure;
          },
          createStage4PlinkoStructure: (
            scaleX,
            scaleY,
            scaleAdj = 5,
            name,
            p = { x: 0, y: 0 },
            nx = 4,
            ny = 4
          ) => {
            const mainStructure = new Physijs.BoxMesh(
              new THREE.BoxGeometry(0.01, 0.01, 0.01),
              new Physijs.createMaterial(
                new THREE.MeshPhongMaterial({ transparent: true, opacity: 0 }),
                0.6,
                0.3
              ),
              0
            );
            mainStructure.position.set(0 + p.x, 0 + p.y, 1.5);
            let ix
            let iy
            for (iy = 0; iy < ny; iy++) {
              for (ix = 0; ix < nx; ix++) {
                mainStructure.add(
                  createBeam({
                    p: [scaleX * ix * 3, scaleY * iy, -1],
                    r: [0, 0, 0],
                    s: (1 + scaleAdj) * ((scaleX + scaleY) / 2),
                  })
                );
              }
            }
            mainStructure.name = name;
            window.appConfig.loadingPhysi.registerMesh(mainStructure)
            mainStructure.featureType = "BEAM"
            return mainStructure;
          },
          background: (percentFinished, colors) => {
            return "linear-gradient(180deg, " + colors[0] + " 0%, " + colors[1] + " 0%, " + colors[2] + " " +
              Math.round((1 - percentFinished) * 100) / 3 +
              "%, " + colors[3] + " " +
              Math.round((1 - percentFinished) * 100) +
              "%)";
            // return '00ff00'
          },
          createSwitchBeamWall: (config) => {
            const performanceAdj = window.appConfig.performanceLevel === 0 ? .25 : 0
            const switchBeamAdj = config.switchBeamAdj ? config.switchBeamAdj : 0
            const rotateGroup = new THREE.Group()

            const beamOne = createBeam({
              p: [0 + config.p.x, 0 + config.p.y, 0 + config.p.z],
              r: [0, 0, config.dir === 'x' ? 0 : .5 * Math.PI],
              s: (config.s * 2.5) * .1 + performanceAdj + switchBeamAdj
            })

            const normalSwitchBeamConfig = {
              switchIndicators: 3,
              color: window.appConfig.stages[window.appConfig.currentStage].backgroundColors[3]
            }

            const remoteSwitchBeamConfig = () => {
              return {
                switchIndicators: 1,
                color: window.appConfig.stages[window.appConfig.currentStage].backgroundColors[3],
                receiver: { name: config.receiver.name }
              }
            }

            const switchBeamTwo = createBeam({
              p: config.dir === 'x' ? [(config.s * 3.3) + config.p.x, 0 + config.p.y, 0 + config.p.z] : [0 + config.p.x, (config.s * 3.3) + config.p.y, 0 + config.p.z],
              r: [0, 0, config.dir === 'x' ? 0 : .5 * Math.PI],
              s: (config.s * 2.5) * .1 + performanceAdj + switchBeamAdj,
              switchBeam: config.receiver ? remoteSwitchBeamConfig() : normalSwitchBeamConfig
            })

            const beamThree = createBeam({
              p: config.dir === 'x' ? [(config.s * 6.6) + config.p.x, 0 + config.p.y, 0 + config.p.z] : [0 + config.p.x, (config.s * 6.6) + config.p.y, 0 + config.p.z],
              r: [0, 0, config.dir === 'x' ? 0 : .5 * Math.PI],
              s: (config.s * 2.5) * .1 + performanceAdj + switchBeamAdj
            })

            scene.add(beamOne)
            scene.add(switchBeamTwo)
            scene.add(beamThree)
          },
          createRemoteSwitch: (config = {
            transmitter: {
              p: { x: 0, y: 0, z: 0 }
            },
            receiver: {
              p: { x: 0, y: 0, z: 0 }
            }
          }) => {
            let transmitterGroup = new THREE.Group()
            let transmitterMaterial = new THREE.MeshPhongMaterial(
              {
                transparent: true,
                opacity: .25,
                color: new THREE.Color(0x000000)
              }
            )
            let receiverMaterial = new THREE.MeshPhongMaterial(
              {
                transparent: true,
                opacity: .25,
                color: new THREE.Color(0x000000)
              }
            )
            let transmitterGeo = new THREE.TorusGeometry(2.5, .5, 6, 6)
            let transmitterMesh = new THREE.Mesh(
              transmitterGeo,
              transmitterMaterial
            )
            transmitterGroup.transmitterActive = false
            transmitterGroup.position.x = config.transmitter.p.x
            transmitterGroup.position.y = config.transmitter.p.y
            transmitterMesh.position.z = -5
            transmitterMesh.name = window.appConfig.currentStage + '_TRANSMITTER'
            let ico = new THREE.Mesh(
              new THREE.IcosahedronGeometry(1.25),
              transmitterMaterial
            )
            ico.position.z = -5
            ico.scale.x = .1
            ico.scale.y = .1
            ico.scale.z = .1
            transmitterGroup.add(transmitterMesh)
            transmitterGroup.add(ico)

            let receiverGroup = new THREE.Group()
            let receiver = new THREE.Mesh(
              new THREE.TorusGeometry(2.5, .5, 6, 4),
              receiverMaterial
            )
            receiverGroup.add(receiver)
            let receiverIco = new THREE.Mesh(
              new THREE.IcosahedronGeometry(1.25),
              receiverMaterial
            )
            receiverIco.scale.x = .1
            receiverIco.scale.y = .1
            receiverIco.scale.z = .1
            receiverGroup.add(receiverIco)
            receiverGroup.position.x = config.receiver.p.x
            receiverGroup.position.y = config.receiver.p.y
            receiverGroup.position.z = 10
            receiverGroup.name = window.appConfig.currentStage + '_' + config.receiver.name + '_RECEIVERGROUP_' + Math.round(Math.random() * 10000)
            receiverGroup.switchName = config.receiver.name
            transmitterGroup.name = window.appConfig.currentStage + '_TRANSMITTERGROUP_' + Math.round(Math.random() * 10000)
            scene.add(transmitterGroup)
            scene.add(receiverGroup)

            const transmitterMeshMaterial = new THREE.MeshPhongMaterial({
              transparent: true,
              opacity: .25,
              color: 0x000000
            })

            const transmitterSphere = (config = {
              name: Math.round(Math.random() * 1000000),
              p: { x: 5, y: 5, z: 0 }
            }) => {
              let transmitterSphereMesh = new THREE.Mesh(
                new THREE.SphereGeometry(.5, 16, 16),
                transmitterMeshMaterial
              )
              transmitterSphereMesh.name = window.appConfig.currentStage + '_TRANSMITTERSPHERE_' + config.name
              transmitterSphereMesh.position.x = config.p.x
              transmitterSphereMesh.position.y = config.p.y
              transmitterSphereMesh.position.z = config.p.z
              return transmitterSphereMesh
            }

            const generatePointsBetweenTwo3dObjects = (start3d, end3d, nPoints = 10) => {
              let iPoint
              let points = []
              const percentRatio = 1 / (nPoints + 2)
              let worldStart3dVector = new THREE.Vector3()
              let worldEnd3dVector = new THREE.Vector3()
              const worldStart3d = start3d.getWorldPosition(worldStart3dVector)
              const worldEnd3d = end3d.getWorldPosition(worldEnd3dVector)
              for (iPoint = 0; iPoint < nPoints; iPoint++) {
                points.push({
                  x: (worldStart3d.x * (1 - (iPoint / nPoints))) + (worldEnd3d.x * (iPoint / nPoints)),
                  y: (worldStart3d.y * (1 - (iPoint / nPoints))) + (worldEnd3d.y * (iPoint / nPoints)),
                  z: (worldStart3d.z * (1 - (iPoint / nPoints))) + (worldEnd3d.z * (iPoint / nPoints))
                })
              }
              return points
            }

            const createTransmitterSphereLine = (start3d, end3d) => {
              const transmitterGroup = new THREE.Group()
              const startPosition = start3d.position
              const endPosition = end3d.position
              const points = generatePointsBetweenTwo3dObjects(start3d.children[1], end3d.children[1], 20)
              points.forEach((p, pi) => {
                if (pi > 0 && pi < points.length) {
                  transmitterGroup.add(transmitterSphere({ p: p }))
                }
              })
              transmitterGroup.transmitter = start3d
              transmitterGroup.receiver = end3d
              transmitterGroup.updatePoints = () => {
                const newPoints = generatePointsBetweenTwo3dObjects(start3d.children[1], end3d.children[1], 20)
                transmitterGroup.children.forEach((c, ci) => {
                  c.position.x = newPoints[ci + 1].x
                  c.position.y = newPoints[ci + 1].y
                  c.position.z = newPoints[ci + 1].z
                })
              }
              transmitterGroup.name = window.appConfig.currentStage + "_TRANSMITTER_LINE_" + Math.round(Math.random() * 1000)
              return transmitterGroup
            }

            const theTransmitterSphereLine = createTransmitterSphereLine(transmitterGroup, receiverGroup)
            scene.add(theTransmitterSphereLine)
            setTimeout(() => {
              theTransmitterSphereLine.updatePoints()
            }, 100)
            window.appConfig.stages[window.appConfig.currentStage].data.remotes.push({
              transmitter: transmitterGroup,
              receiver: receiverGroup,
              line: theTransmitterSphereLine
            })
          },
          createSingleSwitchBeam: (config) => {
            const performanceAdj = window.appConfig.performanceLevel === 0 ? .25 : 0
            const switchBeamAdj = config.switchBeamAdj ? config.switchBeamAdj : 0

            const normalSwitchBeamConfig = {
              switchIndicators: 3,
              color: window.appConfig.stages[window.appConfig.currentStage].backgroundColors[3]
            }

            const remoteSwitchBeamConfig = () => {
              return {
                switchIndicators: 1,
                color: window.appConfig.stages[window.appConfig.currentStage].backgroundColors[3],
                receiver: { name: config.receiver.name }
              }
            }

            return createBeam({
              p: config.dir === 'x' ? [(config.s) + config.p.x, 0 + config.p.y, 0 + config.p.z] : [0 + config.p.x, (config.s) + config.p.y, 0 + config.p.z],
              r: [0, 0, config.dir === 'x' ? 0 : .5 * Math.PI],
              s: (config.s * 2.5) * .1 + performanceAdj + switchBeamAdj,
              switchBeam: config.receiver ? remoteSwitchBeamConfig() : normalSwitchBeamConfig
            })
          },
          createFinalStage: () => {
            // window.appConfig.timers.activeTimers.push(window.appConfig.timers.backgroundToPhysi(true))
            window.appConfig.stages.components.createBlackHole({ position: { x: -40, y: 40, z: 0 }, scale: { x: 2, y: 2, z: 2 } })
            window.appConfig.stages.components.createBlackHole({ position: { x: 40, y: 40, z: 0 }, scale: { x: 2, y: 2, z: 2 } })
            window.appConfig.stages.components.createBlackHole({ position: { x: -40, y: -40, z: 0 }, scale: { x: 2, y: 2, z: 2 } })
            window.appConfig.stages.components.createBlackHole({ position: { x: 40, y: -40, z: 0 }, scale: { x: 2, y: 2, z: 2 } })

            const createCircleRocks = (s, n) => {

              var ellipseGeometry = new THREE.CircleGeometry(s, n * 2)

              let i = 1;
              // let geos = []
              for (i; i < ellipseGeometry.vertices.length; i++) {
                let rockProps = {
                  position: new THREE.Vector3(ellipseGeometry.vertices[i].x * s, ellipseGeometry.vertices[i].y * s, 0),
                  scale: new THREE.Vector3(3 + Math.random() * 15, 3 + Math.random() * 15, 0),
                  material: new THREE.MeshPhongMaterial({ color: stageProperties.STAGE0.backgroundColors[Math.floor(Math.random() * 3.99)], transparent: true, opacity: .25 }),
                  rotation: new THREE.Vector3(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI)
                }
                scene.add(window.appConfig.stages.components.physiRock(rockProps, 1.25, (Math.random() * 50) - 25, (Math.random() * 50) - 25, false))

                // geos.push.add(crystal(size, { x: ellipseGeometry.vertices[i].x * s + t.x, y: ellipseGeometry.vertices[i].y * s + t.y, z: 0 }));
              }


            }
            createCircleRocks(6, 12)
            // createCircleRocks(7, 12)
            createCircleRocks(8, 12)
            // scene.add(crystalCircle)

            window.appConfig.finalStageActiveTransforms = true


            createCrystalCircle(window.appConfig.currentStage, 6.25, { x: 0, y: 0 }, 0, 16)
            createCrystalCircle(window.appConfig.currentStage, 6.5, { x: 0, y: 0 }, 1, 16)
            createCrystalCircle(window.appConfig.currentStage, 6.75, { x: 0, y: 0 }, 2, 16)
            createCrystalCircle(window.appConfig.currentStage, 7, { x: 0, y: 0 }, 1, 16)
            createCrystalCircle(window.appConfig.currentStage, 7.25, { x: 0, y: 0 }, 2, 16)
            createCrystalCircle(window.appConfig.currentStage, 7.5, { x: 0, y: 0 }, 1, 16)
            createCrystalCircle(window.appConfig.currentStage, 7.75, { x: 0, y: 0 }, 2, 16)

            createCrystalCircle(window.appConfig.currentStage, 8.5, { x: 0, y: 0 }, 0, 32)
            createCrystalCircle(window.appConfig.currentStage, 8.75, { x: 0, y: 0 }, 1, 32)
            createCrystalCircle(window.appConfig.currentStage, 9, { x: 0, y: 0 }, 2, 32)
            createCrystalCircle(window.appConfig.currentStage, 9.25, { x: 0, y: 0 }, 1, 32)
            createCrystalCircle(window.appConfig.currentStage, 9.5, { x: 0, y: 0 }, 2, 32)


            const finalStageWalls0 = window.appConfig.stages.components.createStage0MainBeamStructure(
              4,
              -.415,
              window.appConfig.currentStage + "_FINAL_STAGE_WALLS_0",
              { x: 0, y: 0, z: 0 },
              [0, 0, 0, 0],
              true
            );
            finalStageWalls0.rotation.z = .25 * Math.PI
            scene.add(finalStageWalls0);

            const finalStageWalls1 = window.appConfig.stages.components.createStage0MainBeamStructure(
              4,
              -.7,
              window.appConfig.currentStage + "_FINAL_STAGE_WALLS_1",
              { x: 0, y: 0, z: 0 },
              [0, 0, 0, 0],
              true
            );
            scene.add(finalStageWalls1);


            const finalStageWalls2 = window.appConfig.stages.components.createStage0MainBeamStructure(
              2.5,
              -.75,
              window.appConfig.currentStage + "_FINAL_STAGE_WALLS_2",
              { x: 0, y: 0, z: 0 },
              [0, 0, 0, 0],
              true
            );
            finalStageWalls2.rotation.z = .25 * Math.PI
            scene.add(finalStageWalls2);

            const finalStageWalls3 = window.appConfig.stages.components.createStage0MainBeamStructure(
              2.5,
              -.75,
              window.appConfig.currentStage + "_FINAL_STAGE_WALLS_3",
              { x: 0, y: 0, z: 0 },
              [0, 0, 0, 0],
              true
            );
            scene.add(finalStageWalls3);

            const finalStageWalls4 = window.appConfig.stages.components.createStage0MainBeamStructure(
              8,
              -.7,
              window.appConfig.currentStage + "_FINAL_STAGE_WALLS_4",
              { x: 0, y: 0, z: 0 },
              [0, 0, 0, 0],
              true
            );
            finalStageWalls4.rotation.z = .25 * Math.PI
            scene.add(finalStageWalls4);

            const finalStageWalls5 = window.appConfig.stages.components.createStage0MainBeamStructure(
              8,
              -.35,
              window.appConfig.currentStage + "_FINAL_STAGE_WALLS_5",
              { x: 0, y: 0, z: 0 },
              [0, 0, 0, 0],
              true
            );
            scene.add(finalStageWalls5);


            const finalStageWalls6 = window.appConfig.stages.components.createStage0MainBeamStructure(
              12,
              -.35,
              window.appConfig.currentStage + "_FINAL_STAGE_WALLS_6",
              { x: 0, y: 0, z: 0 },
              [0, 0, 0, 0],
              true
            );
            finalStageWalls6.rotation.z = .25 * Math.PI
            scene.add(finalStageWalls6);

            const finalStageWalls7 = window.appConfig.stages.components.createStage0MainBeamStructure(
              12,
              -.35,
              window.appConfig.currentStage + "_FINAL_STAGE_WALLS_7",
              { x: 0, y: 0, z: 0 },
              [0, 0, 0, 0],
              true
            );
            scene.add(finalStageWalls7);


            window.appConfig.stages[window.appConfig.currentStage].FINALSTAGEWALLS6 = finalStageWalls6
            window.appConfig.stages[window.appConfig.currentStage].transforms.FINALSTAGEWALLS6 = { r: { x: 0, y: 0, z: -.001 } }
            window.appConfig.activeTransforms.push('FINALSTAGEWALLS6')

            window.appConfig.stages[window.appConfig.currentStage].FINALSTAGEWALLS7 = finalStageWalls7
            window.appConfig.stages[window.appConfig.currentStage].transforms.FINALSTAGEWALLS7 = { r: { x: 0, y: 0, z: -.001 } }
            window.appConfig.activeTransforms.push('FINALSTAGEWALLS7')


            window.appConfig.stages[window.appConfig.currentStage].FINALSTAGEWALLS4 = finalStageWalls4
            window.appConfig.stages[window.appConfig.currentStage].transforms.FINALSTAGEWALLS4 = { r: { x: 0, y: 0, z: .005 } }
            window.appConfig.activeTransforms.push('FINALSTAGEWALLS4')

            window.appConfig.stages[window.appConfig.currentStage].FINALSTAGEWALLS5 = finalStageWalls5
            window.appConfig.stages[window.appConfig.currentStage].transforms.FINALSTAGEWALLS5 = { r: { x: 0, y: 0, z: .005 } }
            window.appConfig.activeTransforms.push('FINALSTAGEWALLS5')

            window.appConfig.stages[window.appConfig.currentStage].FINALSTAGEWALLS3 = finalStageWalls3
            window.appConfig.stages[window.appConfig.currentStage].transforms.FINALSTAGEWALLS3 = { r: { x: 0, y: 0, z: .01 } }
            window.appConfig.activeTransforms.push('FINALSTAGEWALLS3')

            window.appConfig.stages[window.appConfig.currentStage].FINALSTAGEWALLS2 = finalStageWalls2
            window.appConfig.stages[window.appConfig.currentStage].transforms.FINALSTAGEWALLS2 = { r: { x: 0, y: 0, z: .01 } }
            window.appConfig.activeTransforms.push('FINALSTAGEWALLS2')

            window.appConfig.stages[window.appConfig.currentStage].FINALSTAGEWALLS1 = finalStageWalls1
            window.appConfig.stages[window.appConfig.currentStage].transforms.FINALSTAGEWALLS1 = { r: { x: 0, y: 0, z: -.01 } }
            window.appConfig.activeTransforms.push('FINALSTAGEWALLS1')

            window.appConfig.stages[window.appConfig.currentStage].FINALSTAGEWALLS0 = finalStageWalls0
            window.appConfig.stages[window.appConfig.currentStage].transforms.FINALSTAGEWALLS0 = { r: { x: 0, y: 0, z: -.01 } }
            window.appConfig.activeTransforms.push('FINALSTAGEWALLS0')

            const handleBumperCollision = (bumper, otherObject) => {
              if (bumper.coinThrottle === undefined) {
                bumper.coinThrottle = false
              }
              if (otherObject.name === 'SPHERE0' && window.appConfig.pause === false && window.appConfig.userIsOnMainMenu === false) {
                window.appConfig.stages.components.dematerializeMesh({ dMesh: bumper, scaleAdj: 5, spriteTypes: ['circle', 'fiveStar'] })
                if (bumper.bumps === undefined) {
                  bumper.bumps = 0
                }
                if (bumper.coinThrottle === false) {
                  bumper.bumps++
                  bumper.coinThrottle = true

                  if (bumper.bumps % 15 === 0) {
                    // let name = window.appConfig.currentStage + '_SPHERECOIN_' + Math.round(Math.random() * 10000)
                    // window.appConfig.createSphere({
                    // bounce: 1,
                    // name: name,
                    // position: {
                    //   x: (Math.random() * 20) -10 ,
                    //   y: (Math.random() * 20) -10,
                    //   z: 0
                    // },
                    // handleCollision: (c) => window.appConfig.superBallHandleCollision(c, name)
                    // })




                    // for (let fsb = 0; fsb < 1; fsb++) {
                    //   // for(let fsb = 0; fsb < 5; fsb++) {
                    //   let name = window.appConfig.currentStage + '_SPHERECOIN_FSB_' + fsb + '_' + Math.round(Math.random() * 10000)
                    //   window.appConfig.createSphere({
                    //     bounce: 1,
                    //     name: name,
                    //     position: {
                    //       x: (Math.random() * 20) - 10,
                    //       y: (Math.random() * 20) - 10,
                    //       z: 0
                    //     },
                    //     // handleCollision: (c) => window.appConfig.superBallHandleCollision(c, name)
                    //     handleCollision: (c) => {
                    //       window.appConfig.superBallHandleCollision(c, name)
                    //       window.appConfig.timers.activeTimers.push(
                    //         window.appConfig.timers.moveCoinsToSphere()
                    //       )
                    //       setTimeout(() => scene.remove(sc), 10000)
                    //     }
                    //   })
                    // }



                  }
                  for (let superSounds = 0; superSounds < 10; superSounds++) {
                    setTimeout(() => {
                      if (window.appConfig.sfxTurnedOn) {
                        window.appConfig.coinSounds[Math.round(Math.random() * (window.appConfig.coinSounds.length - 1))].play()
                      }
                      scene.add(window.appConfig.stages.components.crystal(superSounds % 3, { x: bumper.position.x + ((Math.random() * 25) - 12.5), y: bumper.position.y + ((Math.random() * 20) - 10), z: 0 }))
                    }, superSounds * 50)
                  }
                  setTimeout(() => { bumper.coinThrottle = false }, 500)
                }
              }

            }
            let bumperBounce = 1
            let bumperWeight = 4.5
            let bumperSize = 5
            let bumperSize2 = 3
            let bumperScale = .6
            window.appConfig.stages.components.createBumper(window.appConfig.currentStage + "_FINALSTAGE_BUMPER0", bumperSize, { x: 10, y: 0, z: 0 }, 6, bumperBounce, bumperWeight, bumperScale, handleBumperCollision)
            window.appConfig.stages.components.createBumper(window.appConfig.currentStage + "_FINALSTAGE_BUMPER1", bumperSize, { x: -10, y: 0, z: 0 }, 6, bumperBounce, bumperWeight, bumperScale, handleBumperCollision)
            window.appConfig.stages.components.createBumper(window.appConfig.currentStage + "_FINALSTAGE_BUMPER2", bumperSize, { x: 0, y: -10, z: 0 }, 6, bumperBounce, bumperWeight, bumperScale, handleBumperCollision)
            window.appConfig.stages.components.createBumper(window.appConfig.currentStage + "_FINALSTAGE_BUMPER3", bumperSize, { x: 0, y: 10, z: 0 }, 6, bumperBounce, bumperWeight, bumperScale, handleBumperCollision)
            window.appConfig.stages.components.createBumper(window.appConfig.currentStage + "_FINALSTAGE_BUMPER4", bumperSize2, { x: 40, y: 40, z: 0 }, 8, bumperBounce, bumperWeight, bumperScale, handleBumperCollision)
            window.appConfig.stages.components.createBumper(window.appConfig.currentStage + "_FINALSTAGE_BUMPER5", bumperSize2, { x: -40, y: 40, z: 0 }, 8, bumperBounce, bumperWeight, bumperScale, handleBumperCollision)
            window.appConfig.stages.components.createBumper(window.appConfig.currentStage + "_FINALSTAGE_BUMPER6", bumperSize2, { x: 40, y: -40, z: 0 }, 8, bumperBounce, bumperWeight, bumperScale, handleBumperCollision)
            window.appConfig.stages.components.createBumper(window.appConfig.currentStage + "_FINALSTAGE_BUMPER7", bumperSize2, { x: -40, y: -40, z: 0 }, 8, bumperBounce, bumperWeight, bumperScale, handleBumperCollision)
            window.appConfig.stages.components.createBumper(window.appConfig.currentStage + "_FINALSTAGE_BUMPER8", bumperSize2, { x: 40, y: 0, z: 0 }, 8, bumperBounce, bumperWeight, bumperScale, handleBumperCollision)
            window.appConfig.stages.components.createBumper(window.appConfig.currentStage + "_FINALSTAGE_BUMPER9", bumperSize2, { x: -40, y: 0, z: 0 }, 8, bumperBounce, bumperWeight, bumperScale, handleBumperCollision)
            window.appConfig.stages.components.createBumper(window.appConfig.currentStage + "_FINALSTAGE_BUMPER10", bumperSize2, { x: 0, y: -40, z: 0 }, 8, bumperBounce, bumperWeight, bumperScale, handleBumperCollision)
            window.appConfig.stages.components.createBumper(window.appConfig.currentStage + "_FINALSTAGE_BUMPER11", bumperSize2, { x: 0, y: 40, z: 0 }, 8, bumperBounce, bumperWeight, bumperScale, handleBumperCollision)

            setTimeout(() => {
              window.appConfig.finalStageActiveTransforms = false
            }, 15000)
          },
          createBlueIsland: (config) => {
            const borders = window.appConfig.stages.components.createStage0MainBeamStructure(
              4,
              .5,
              "BLUEISLAND",
              { x: 0, y: 300 },
              [0, 0, 0, 0],
              false,
              0x0F52BA
            )
            borders.rotation.z = Math.PI * .25
            scene.add(borders)
            prize(window.appConfig.currentStageIndex, 15, { x: 10, y: 300, z: 0 })
            prize(window.appConfig.currentStageIndex, 16, { x: -10, y: 300, z: 0 })
            window.appConfig.stages.components.createBumper(window.appConfig.currentStage + "BLUEISLAND_BUMPER0", 2.5, { x: 0, y: 280, z: 0 }, 6, 1, 0, 1, undefined, 0x0F52BA)
            window.appConfig.stages.components.createBumper(window.appConfig.currentStage + "BLUEISLAND_BUMPER1", 2.5, { x: 0, y: 320, z: 0 }, 6, 1, 0, 1, undefined, 0x0F52BA)
            window.appConfig.stages.components.createBumper(window.appConfig.currentStage + "BLUEISLAND_BUMPER2", 2.5, { x: 20, y: 300, z: 0 }, 6, 1, 0, 1, undefined, 0x0F52BA)
            window.appConfig.stages.components.createBumper(window.appConfig.currentStage + "BLUEISLAND_BUMPER3", 2.5, { x: -20, y: 300, z: 0 }, 6, 1, 0, 1, undefined, 0x0F52BA)
            const blueLight0 = new THREE.PointLight(0xffffff, .5, 100, 1)
            blueLight0.position.set(0, 250, 20)
            const blueLight1 = new THREE.PointLight(0xffffff, .5, 100, 1)
            blueLight1.position.set(20, 320, 10)

            blueLight0.gameName = window.appConfig.currentStage + "BLUELIGHT0";
            blueLight1.gameName = window.appConfig.currentStage + "BLUELIGHT1";
            scene.add(blueLight0)
            scene.add(blueLight1)
          },
          gemPortalConfig: () => {
            return {
              startedCallback: (thePortalMesh, config, percentComplete) => {
                window.appConfig.howlSounds.backgroundMusic.changeSrc("sounds/GEM_ZONE.mp3", true)
              },
              activeCallback: (thePortalMesh, config, percentComplete) => {
              },
              completedCallback: (thePortalMesh, config) => {
                let removalArray = []
                window.appConfig.activeTransforms = []
                window.appConfig.stages[window.appConfig.currentStage].data.blackHoles.forEach(bh => scene.remove(bh))
                window.appConfig.stages[window.appConfig.currentStage].data.blackHoles = []

                let stage = window.appConfig.currentStage
                window.appConfig.coins = []
                const uuidsToRemove = []
                scene.children.forEach(c => {
                  if (((c.name.indexOf(stage) > -1) || (c.featureType && c.featureType === "COIN")) && c.name.indexOf('BGGROUP') === -1 && c.name.indexOf('PORTAL') === -1) {
                    uuidsToRemove.push(c.uuid)
                  }
                })
                uuidsToRemove.forEach(uuid => {
                  const foundIt = scene.children.find(c => c.uuid === uuid)
                  scene.remove(foundIt)
                })

                let timersCopy = []
                window.appConfig.timers.activeTimers.forEach(at => {
                  if (at.name.indexOf('SAPPHIRE') === -1) {
                    timersCopy.push(at)
                  }
                })
                window.appConfig.timers.activeTimers = timersCopy

                window.appConfig.timers.activeTimers.push(window.appConfig.timers.countdownName({
                  updateName: 'GEM ZONE',
                  ballPosition: new THREE.Vector3(thePortalMesh.portalTarget.x, thePortalMesh.portalTarget.y, 0)
                }))
                window.appConfig.timers.activeTimers.push(window.appConfig.timers.backgroundToPhysi())
              },
              portalConfig: {
                sapphire: false,
                active: false,
                indicators: 3
              }
            }
          },
          sapphirePortalConfig: () => {
            return {
              startedCallback: (thePortalMesh, config, percentComplete) => {
                window.appConfig.howlSounds.backgroundMusic.changeSrc("sounds/SAPPHIRE_ISLAND.mp3", true)
              },
              activeCallback: (thePortalMesh, config, percentComplete) => {
              },
              completedCallback: (thePortalMesh, config) => {
                window.appConfig.timers.activeTimers.push(window.appConfig.timers.countdownName({
                  updateName: 'SAPPHIRE ISLAND',
                  ballPosition: new THREE.Vector3(thePortalMesh.portalTarget.x, thePortalMesh.portalTarget.y, 0),
                  countdownStartCompletedCallback: () => {

                    const biPoint0 = window.appConfig.blueIslandPoints[Math.floor(Math.random() * window.appConfig.blueIslandPoints.length)]
                    window.appConfig.stages.components.createSapphire({ x: biPoint0.position.x, y: biPoint0.position.y, z: 0 }, true)
                    const biPoint1 = window.appConfig.blueIslandPoints[Math.floor(Math.random() * window.appConfig.blueIslandPoints.length)]
                    window.appConfig.stages.components.createSapphire({ x: biPoint1.position.x, y: biPoint1.position.y, z: 0 }, true)
                    const biPoint2 = window.appConfig.blueIslandPoints[Math.floor(Math.random() * window.appConfig.blueIslandPoints.length)]
                    window.appConfig.stages.components.createSapphire({ x: biPoint2.position.x, y: biPoint2.position.y, z: 0 }, true)
                    window.appConfig.isBlueIsland = true
                    window.appConfig.timers.activeTimers.push(window.appConfig.timers.blueIslandTimer())
                  }
                }))
                let deleteArray = []
                scene.children.forEach(c => {
                  if (c.name.indexOf('S_INDICATOR') > -1) {
                    deleteArray.push(c)
                  }
                })
                deleteArray.forEach(da => scene.remove(da))
              },
              portalConfig: {
                sapphire: true,
                active: false,
                indicators: 5
              }
            }
          },
          sapphirePortalReturnConfig: () => {
            return {
              startedCallback: (thePortalMesh, config, percentComplete) => {
              },
              activeCallback: (thePortalMesh, config, percentComplete) => {
              },
              completedCallback: (thePortalMesh, config) => {
                window.appConfig.timers.activeTimers.push(window.appConfig.timers.countdownName({
                  updateName: window.appConfig.stages[window.appConfig.currentStage].name,
                  ballPosition: new THREE.Vector3(thePortalMesh.portalTarget.x, thePortalMesh.portalTarget.y, 0)
                }))
                let theSphere = window.appConfig.sphere
                window.appConfig.stages.components.dematerializeMesh({ dMesh: theSphere, spriteTypes: ['circle'] })
                window.appConfig.howlSounds.backgroundMusic.changeSrc(window.appConfig.stages[window.appConfig.currentStage].sounds.backgroundMusic, true)
              },
              portalConfig: {
                sapphire: true,
                active: true
              }
            }
          },
          finalPortalConfig: () => {
            return {
              startedCallback: (thePortalMesh, config, percentComplete) => {
                window.appConfig.howlSounds.backgroundMusic.changeSrc("sounds/FINAL_ZONE.mp3", true)
              },
              activeCallback: (thePortalMesh, config, percentComplete) => {
              },
              completedCallback: (thePortalMesh, config) => {
                let removalArray = []
                window.appConfig.activeTransforms = []
                window.appConfig.stages[window.appConfig.currentStage].data.blackHoles.forEach(bh => scene.remove(bh))
                window.appConfig.stages[window.appConfig.currentStage].data.blackHoles = []

                let stage = window.appConfig.currentStage
                window.appConfig.coins = []
                const uuidsToRemove = []
                scene.children.forEach(c => {
                  if (((c.name.indexOf(stage) > -1) || (c.featureType && c.featureType === "COIN")) && c.name.indexOf('BGGROUP') === -1 && c.name.indexOf('PORTAL') === -1) {
                    uuidsToRemove.push(c.uuid)
                  }
                })
                uuidsToRemove.forEach(uuid => {
                  const foundIt = scene.children.find(c => c.uuid === uuid)
                  scene.remove(foundIt)
                })

                let timersCopy = []
                window.appConfig.timers.activeTimers.forEach(at => {
                  if (at.name.indexOf('SAPPHIRE') === -1) {
                    timersCopy.push(at)
                  }
                })
                window.appConfig.timers.activeTimers = timersCopy

                window.appConfig.timers.activeTimers.push(window.appConfig.timers.countdownName({
                  updateName: 'BONUS ZONE',
                  ballPosition: new THREE.Vector3(thePortalMesh.portalTarget.x, thePortalMesh.portalTarget.y, 0)
                }))

                window.appConfig.stages.components.createFinalStage()
              },
              portalConfig: {
                sapphire: false,
                active: false,
                indicators: 8
              }
            }
          },
          setUpPortalIndicators: (setUpFunction) => {
            setTimeout(() => {
              try {
                setUpFunction()
              } catch (err) {
                setTimeout(() => { setUpFunction() }, 1000)
              }
            }, 1000)
          }
        },
        STAGE0: {
          data: {
            superBallPositionScale: 30,
            started: false,
            xAdj: -60,
            vAdj: -70,
            sAdj: 2,
            startingPosition: window.appConfig.originVector,
            sapphirePortalPosition: { x: 95, y: 95, z: -5 }
          },
          name: stageProperties.STAGE0.name,
          backgroundColors: stageProperties.STAGE0.backgroundColors,
          basicColors: stageProperties.STAGE0.basicColors,
          sounds: stageProperties.STAGE0.sounds,
          number: stageProperties.STAGE0.number,
          defaultTransforms: [
            'STAGE0PRIZE0',
            'STAGE0PRIZE1',
            'STAGE0PRIZE2',
            'STAGE0PRIZE3',
            'STAGE0MAINSTRUCTURE',
            'STAGE0MINORSTRUCTURE',
            'STAGE0MINORSTRUCTURE1',
            'STAGE0MINORSTRUCTURE2',
            'STAGE0MINORSTRUCTURE3'
          ],
          transforms: {
            'STAGE0PRIZE0': { r: { x: .005, y: .005, z: .005 } },
            'STAGE0PRIZE1': { r: { x: .005, y: .005, z: .005 } },
            'STAGE0PRIZE2': { r: { x: .005, y: .005, z: .005 } },
            'STAGE0PRIZE3': { r: { x: .005, y: .005, z: .005 } },
            'STAGE0MAINSTRUCTURE': { r: { x: 0, y: 0, z: .001 } },
            'STAGE0MINORSTRUCTURE': { r: { x: 0, y: 0, z: -.001 } },
            'STAGE0MINORSTRUCTURE1': { r: { x: 0, y: 0, z: -.001 } },
            'STAGE0MINORSTRUCTURE2': { r: { x: 0, y: 0, z: -.001 } },
            'STAGE0MINORSTRUCTURE3': { r: { x: 0, y: 0, z: -.001 } }
          },
          teardown: () => {
            teardownStage('STAGE0')
            window.appConfig.stages.STAGE0.data.started = false
          },
          initBackground: () => {
            const createBackgroundAnimation = () => {
              const bgGroup = new THREE.Group()
              bgGroup.name = 'STAGE0BGGROUP'
              const elementGeometry = new THREE.IcosahedronGeometry(1, 0)
              const elementMaterials = [
                new THREE.MeshPhongMaterial({ color: stageProperties.STAGE0.backgroundColors[0], transparent: true, opacity: .25 }),
                new THREE.MeshPhongMaterial({ color: stageProperties.STAGE0.backgroundColors[1], transparent: true, opacity: .25 }),
                new THREE.MeshPhongMaterial({ color: stageProperties.STAGE0.backgroundColors[2], transparent: true, opacity: .25 }),
                new THREE.MeshPhongMaterial({ color: stageProperties.STAGE0.backgroundColors[3], transparent: true, opacity: .25 }),
              ]

              const numberOfElements = 50
              let elementI = 0
              for (elementI; elementI < numberOfElements; elementI++) {
                bgGroup.add(new THREE.Mesh(elementGeometry, elementMaterials[elementI % elementMaterials.length]))
              }
              scene.add(bgGroup)
              bgGroup.position.set(0, 0, -10)
              bgGroup.children.forEach(c => {
                c.position.set(Math.random() * 200 - 100, Math.random() * 200 - 100, -20 + Math.random() * -30)
                const bgElementScale = 1 + Math.random() * 10
                c.scale.set(bgElementScale, bgElementScale, bgElementScale)
                c.rotation.z = (Math.random() * 2) * Math.PI
              })
              bgGroup.activeCallback = () => {
                if (bgGroup) {
                  bgGroup.children.forEach((c, ci) => {
                    c.position.y += .005 * ci / 2
                    c.rotation.y += .005
                    if (c.position.y > 125) {
                      c.position.y = -125
                    }
                  })
                }
              }
              bgGroup.activeCallback()
              window.appConfig.stages['STAGE0'].bgGroupActiveCallback = bgGroup.activeCallback
            }

            createBackgroundAnimation()
          },
          init: () => {
            // window.appConfig.stages.components.createFinalStage()

            window.appConfig.timers.activeTimers.push(
              window.appConfig.timers.addPortalToStage({ x: 95, y: -95, z: -5 }, 'GEM_STAGE_END_00', { x: 0, y: 0, z: 0 },
                window.appConfig.stages.components.gemPortalConfig())
            )

            window.appConfig.timers.activeTimers.push(
              window.appConfig.timers.addPortalToStage({ x: 95, y: 95, z: -5 }, window.appConfig.currentStage + '_SAPPHIRE_00', { x: 0, y: 300, z: 0 },
                window.appConfig.stages.components.sapphirePortalConfig())
            )

            const createStage0Portals = () => {
              window.appConfig.stages.components.createDiamond({ x: 10, y: -17.5, z: -2.5 }, false, 'GEM_STAGE_END_00')
              window.appConfig.stages.components.createEmerald({ x: 6.5, y: -24, z: -2.5 }, false, 'GEM_STAGE_END_00')
              window.appConfig.stages.components.createRuby({ x: 13, y: -24, z: -2.5 }, false, 'GEM_STAGE_END_00')

              let ellipseGeometry = new THREE.CircleGeometry(4.125, 5)
              ellipseGeometry.rotateZ((2 * Math.PI) / 20)

              let i = 1;
              for (i; i < ellipseGeometry.vertices.length; i++) {
                window.appConfig.stages.components.createSapphire({ x: ellipseGeometry.vertices[i].x, y: ellipseGeometry.vertices[i].y, z: 0 }, false, false, '_SAPPHIRE_00')
              }
            }


            window.appConfig.stages.components.setUpPortalIndicators(createStage0Portals)


            window.appConfig.stages.components.createBumper("STAGE0BUMPER0", 1, { x: -70, y: -72.5, z: 0 }, 5)
            window.appConfig.stages.components.createBumper("STAGE0BUMPER1", 1, { x: 70, y: -72.5, z: 0 }, 5)
            window.appConfig.stages.components.createBumper("STAGE0BUMPER2", 1, { x: -70, y: 72.5, z: 0 }, 5)
            window.appConfig.stages.components.createBumper("STAGE0BUMPER3", 1, { x: 70, y: 72.5, z: 0 }, 5)

            window.appConfig.stages.components.createBumper("STAGE0BUMPER6", 1, { x: 87.5, y: -30, z: 0 }, 3, 1)
            window.appConfig.stages.components.createBumper("STAGE0BUMPER7", 1, { x: 77.5, y: -40, z: 0 }, 3, 1)
            window.appConfig.stages.components.createBumper("STAGE0BUMPER8", 1, { x: 97.5, y: -40, z: 0 }, 3, 1)
            window.appConfig.stages.components.createBumper("STAGE0BUMPER9", 1, { x: 87.5, y: -50, z: 0 }, 3, 1)
            window.appConfig.stages.components.createBumper("STAGE0BUMPER10", 1, { x: 77.5, y: -60, z: 0 }, 3, 1)
            window.appConfig.stages.components.createBumper("STAGE0BUMPER11", 1, { x: 97.5, y: -60, z: 0 }, 3, 1)
            window.appConfig.stages.components.createBumper("STAGE0BUMPER12", 1, { x: 87.5, y: -70, z: 0 }, 3, 1)

            window.appConfig.stages.components.createBumper("STAGE0BUMPER13", 1, { x: 87.5, y: 30, z: 0 }, 3, 1)
            window.appConfig.stages.components.createBumper("STAGE0BUMPER14", 1, { x: 77.5, y: 40, z: 0 }, 3, 1)
            window.appConfig.stages.components.createBumper("STAGE0BUMPER15", 1, { x: 97.5, y: 40, z: 0 }, 3, 1)
            window.appConfig.stages.components.createBumper("STAGE0BUMPER16", 1, { x: 87.5, y: 50, z: 0 }, 3, 1)
            window.appConfig.stages.components.createBumper("STAGE0BUMPER17", 1, { x: 77.5, y: 60, z: 0 }, 3, 1)
            window.appConfig.stages.components.createBumper("STAGE0BUMPER18", 1, { x: 97.5, y: 60, z: 0 }, 3, 1)
            window.appConfig.stages.components.createBumper("STAGE0BUMPER19", 1, { x: 87.5, y: 70, z: 0 }, 3, 1)

            window.appConfig.stages.components.createSapphire({ x: -100, y: -100, z: 0 })
            window.appConfig.stages.components.createSapphire({ x: -110, y: -100, z: 0 })
            window.appConfig.stages.components.createSapphire({ x: -120, y: -100, z: 0 })
            window.appConfig.stages.components.createSapphire({ x: -130, y: 100, z: 0 })
            window.appConfig.stages.components.createSapphire({ x: -140, y: 100, z: 0 })


            window.appConfig.stages.components.createRuby({ x: 87, y: -1.25, z: 0 })
            window.appConfig.stages.components.createEmerald({ x: -97.5, y: -1.25, z: 0 })
            window.appConfig.stages.components.createDiamond({ x: -57, y: -1.25, z: 0 })

            window.appConfig.stages.components.createBlueIsland()

            const createStage0MainBeamStructure = window.appConfig.stages.components.createStage0MainBeamStructure
            const createSwitchBeamWall = window.appConfig.stages.components.createSwitchBeamWall
            const createRemoteSwitch = window.appConfig.stages.components.createRemoteSwitch

            createCrystalCircle('STAGE0', 3.5, { x: -97, y: 0 }, 0, 16)
            createCrystalCircle('STAGE0', 3.25, { x: -97, y: 0 }, 1, 8)
            createCrystalCircle('STAGE0', 2.75, { x: -97, y: 0 }, 2, 8)

            createCrystalCircle('STAGE0', 3.75, { x: -57, y: 0 }, 0, 16)
            createCrystalCircle('STAGE0', 3.5, { x: -57, y: 0 }, 1, 8)
            createCrystalCircle('STAGE0', 3, { x: -57, y: 0 }, 2, 8)

            createCrystalCircle('STAGE0', 3.75, { x: 87.5, y: 0 }, 0, 16)
            createCrystalCircle('STAGE0', 3.5, { x: 87.5, y: 0 }, 1, 8)
            createCrystalCircle('STAGE0', 3, { x: 87.5, y: 0 }, 2, 8)

            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINA',
              position: {
                x: -55,
                y: 0,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINA')
            })
            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINB',
              position: {
                x: -55,
                y: 0,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINB')
            })
            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINC',
              position: {
                x: -55,
                y: 0,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINC')
            })
            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOIND',
              position: {
                x: -55,
                y: 0,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOIND')
            })

            createSwitchBeamWall({ s: 4.6, dir: 'x', p: { x: 72.5, y: 20, z: 0 } })
            createSwitchBeamWall({ s: 4.6, dir: 'x', p: { x: 72.5, y: -20, z: 0 } })

            createRemoteSwitch({
              transmitter: {
                p: { x: -95, y: -95, z: 0 }
              },
              receiver: {
                p: { x: -55, y: -20, z: 0 },
                name: 'STAGE0RECEIVER_A'
              }
            })

            createSwitchBeamWall({ s: 4.6, dir: 'x', p: { x: -71.2, y: -20, z: 0 }, receiver: { name: 'STAGE0RECEIVER_A' } })

            createRemoteSwitch({
              transmitter: {
                p: { x: -95, y: 95, z: 0 }
              },
              receiver: {
                p: { x: -55, y: 20, z: 0 },
                name: 'STAGE0RECEIVER_B'
              }
            })

            createSwitchBeamWall({ s: 4.6, dir: 'x', p: { x: -71.2, y: 20, z: 0 }, receiver: { name: 'STAGE0RECEIVER_B' } })

            const stage0MainBeamStructure = createStage0MainBeamStructure(
              2,
              0,
              "STAGE0MAINSTRUCTURE"
            );
            scene.add(stage0MainBeamStructure);
            const stage0MainBeamStructure1 = createStage0MainBeamStructure(
              4,
              0,
              "STAGE0MAINSTRUCTURE1"
            );
            scene.add(stage0MainBeamStructure1);
            const stage0MainBeamStructure2 = createStage0MainBeamStructure(
              8,
              0.525,
              "STAGE0MAINSTRUCTURE2",
              { x: 0, y: 0 },
              [0, 1, 0, 0]
            );
            scene.add(stage0MainBeamStructure2);

            const stage0MainBeamStructure3 = createStage0MainBeamStructure(
              10,
              0.55,
              "STAGE0MAINSTRUCTURE3",
              { x: 0, y: 0 },
              [0, 0, 1, 0]
              // [bottom, left, right, top]
            );
            scene.add(stage0MainBeamStructure3);

            const stage0MainBeamStructure4 = createStage0MainBeamStructure(
              14,
              0.575,
              "STAGE0MAINSTRUCTURE4_ZONE-WALL"
            );
            scene.add(stage0MainBeamStructure4);

            const stage0MinorBeamStructure = createStage0MainBeamStructure(
              1,
              -0.5,
              "STAGE0MINORSTRUCTURE",
              { x: 45, y: 45 }
            );
            scene.add(stage0MinorBeamStructure);
            const stage0MinorBeamStructure1 = createStage0MainBeamStructure(
              1,
              -0.5,
              "STAGE0MINORSTRUCTURE1",
              { x: 45, y: -45 }
            );
            scene.add(stage0MinorBeamStructure1);
            const stage0MinorBeamStructure2 = createStage0MainBeamStructure(
              1,
              -0.5,
              "STAGE0MINORSTRUCTURE2",
              { x: -45, y: -45 }
            );
            scene.add(stage0MinorBeamStructure2);
            const stage0MinorBeamStructure3 = createStage0MainBeamStructure(
              1,
              -0.5,
              "STAGE0MINORSTRUCTURE3",
              { x: -45, y: 45 }
            );
            scene.add(stage0MinorBeamStructure3);

            prize(0, 0, { x: 45, y: 45, z: 0 })
            prize(0, 1, { x: 45, y: -45, z: 0 })
            prize(0, 2, { x: -45, y: -45, z: 0 })
            prize(0, 3, { x: -45, y: 45, z: 0 })

            prize(0, 4, { x: -75, y: 15, z: 0 })
            prize(0, 5, { x: -75, y: -15, z: 0 })
            prize(0, 6, { x: -40, y: 15, z: 0 })
            prize(0, 7, { x: -40, y: -15, z: 0 })

            prize(0, 8, { x: 70, y: 15, z: 0 })
            prize(0, 9, { x: 70, y: -15, z: 0 })
            prize(0, 10, { x: 105, y: 15, z: 0 })
            prize(0, 11, { x: 105, y: -15, z: 0 })

            prize(0, 12, { x: 95, y: 80, z: 0 })
            prize(0, 13, { x: 95, y: -80, z: 0 })

            createCrystalCross('STAGE0', 5);
            createCrystalCross('STAGE0', 10);
            createCrystalCross('STAGE0', 5, { x: 20, y: 20 }, 1);
            createCrystalCross('STAGE0', 5, { x: -20, y: 20 }, 1);
            createCrystalCross('STAGE0', 5, { x: -20, y: -20 }, 1);
            createCrystalCross('STAGE0', 5, { x: 20, y: -20 }, 1);
            createCrystalCross('STAGE0', 3, { x: 55, y: 55 }, 0);
            createCrystalCross('STAGE0', 3, { x: 35, y: 55 }, 0);
            createCrystalCross('STAGE0', 3, { x: 35, y: 35 }, 0);
            createCrystalCross('STAGE0', 3, { x: 55, y: 35 }, 0);
            createCrystalCross('STAGE0', 3, { x: 55, y: -55 }, 0);
            createCrystalCross('STAGE0', 3, { x: 35, y: -55 }, 0);
            createCrystalCross('STAGE0', 3, { x: 35, y: -35 }, 0);
            createCrystalCross('STAGE0', 3, { x: 55, y: -35 }, 0);
            createCrystalCross('STAGE0', 3, { x: -55, y: -55 }, 0);
            createCrystalCross('STAGE0', 3, { x: -35, y: -55 }, 0);
            createCrystalCross('STAGE0', 3, { x: -35, y: -35 }, 0);
            createCrystalCross('STAGE0', 3, { x: -55, y: -35 }, 0);
            createCrystalCross('STAGE0', 3, { x: -55, y: 55 }, 0);
            createCrystalCross('STAGE0', 3, { x: -35, y: 55 }, 0);
            createCrystalCross('STAGE0', 3, { x: -35, y: 35 }, 0);
            createCrystalCross('STAGE0', 3, { x: -55, y: 35 }, 0);
            createCrystalLine('STAGE0', 5, { x: 54.5, y: -22 }, 0, 10, "y");
            createCrystalLine('STAGE0', 5, { x: 40.5, y: -22.5 }, 0, 10, "y");
            createCrystalLine('STAGE0', 10, { x: 47.5, y: -20 }, 2, 5, "y");
            createCrystalLine('STAGE0', 10, { x: -20, y: -47.5 }, 2, 5, "x");
            createCrystalLine('STAGE0', 5, { x: -22.5, y: -40 }, 0, 10, "x");
            createCrystalLine('STAGE0', 5, { x: -22.5, y: -54.5 }, 0, 10, "x");
            createCrystalLine('STAGE0', 10, { x: -20, y: 47.5 }, 2, 5, "x");
            createCrystalLine('STAGE0', 5, { x: -22.5, y: 40 }, 0, 10, "x");
            createCrystalLine('STAGE0', 5, { x: -22.5, y: 54.5 }, 0, 10, "x");

            createCrystalLine('STAGE0--00', 8, { x: -90.5, y: -75 }, 0, 8, "y");
            createCrystalLine('STAGE0--01', 8, { x: -97.5, y: -75 }, 1, 8, "y");
            createCrystalLine('STAGE0--02', 8, { x: -104.5, y: -75 }, 2, 8, "y");

            createCrystalLine('STAGE0--0', 8, { x: -90.5, y: 20 }, 0, 8, "y");
            createCrystalLine('STAGE0--1', 8, { x: -97.5, y: 20 }, 1, 8, "y");
            createCrystalLine('STAGE0--2', 8, { x: -104.5, y: 20 }, 2, 8, "y");

            createCrystalLine('STAGE0--3', 8, { y: -90.5, x: -75 }, 0, 20, "x");
            createCrystalLine('STAGE0--4', 8, { y: -97.5, x: -75 }, 1, 20, "x");
            createCrystalLine('STAGE0--5', 8, { y: -104.5, x: -75 }, 2, 20, "x");

            createCrystalLine('STAGE0--6', 8, { y: 90.5, x: -75 }, 0, 20, "x");
            createCrystalLine('STAGE0--7', 8, { y: 97.5, x: -75 }, 1, 20, "x");
            createCrystalLine('STAGE0--8', 8, { y: 104.5, x: -75 }, 2, 20, "x");

            createCrystalLine('STAGE0--9', 6, { y: 70, x: -57.5 }, 1, 20, "x");
            createCrystalLine('STAGE0--10', 6, { y: 75, x: -57.5 }, 0, 20, "x");

            createCrystalLine('STAGE0--9', 6, { y: -70, x: -57.5 }, 1, 20, "x");
            createCrystalLine('STAGE0--10', 6, { y: -75, x: -57.5 }, 0, 20, "x");

            window.appConfig.stages.STAGE0.STAGE0PRIZE0 = scene.children.find((obj) => obj.name === "STAGE0PRIZE0")
            window.appConfig.stages.STAGE0.STAGE0PRIZE1 = scene.children.find((obj) => obj.name === "STAGE0PRIZE1")
            window.appConfig.stages.STAGE0.STAGE0PRIZE2 = scene.children.find((obj) => obj.name === "STAGE0PRIZE2")
            window.appConfig.stages.STAGE0.STAGE0PRIZE3 = scene.children.find((obj) => obj.name === "STAGE0PRIZE3")
            window.appConfig.stages.STAGE0.STAGE0MAINSTRUCTURE = scene.children.find((obj) => obj.name === "STAGE0MAINSTRUCTURE")
            window.appConfig.stages.STAGE0.STAGE0MINORSTRUCTURE = scene.children.find((obj) => obj.name === "STAGE0MINORSTRUCTURE")
            window.appConfig.stages.STAGE0.STAGE0MINORSTRUCTURE1 = scene.children.find((obj) => obj.name === "STAGE0MINORSTRUCTURE1")
            window.appConfig.stages.STAGE0.STAGE0MINORSTRUCTURE2 = scene.children.find((obj) => obj.name === "STAGE0MINORSTRUCTURE2")
            window.appConfig.stages.STAGE0.STAGE0MINORSTRUCTURE3 = scene.children.find((obj) => obj.name === "STAGE0MINORSTRUCTURE3")
            window.appConfig.stages.STAGE0.data.started = true
          }
        },
        STAGE1: {
          data: {
            started: false,
            xAdj: -60,
            vAdj: -70,
            sAdj: 2,
            startingPosition: window.appConfig.originVector,
            sapphirePortalPosition: { x: 0, y: 100, z: -5 }
          },
          number: stageProperties.STAGE1.number,
          backgroundColors: stageProperties.STAGE1.backgroundColors,
          basicColors: stageProperties.STAGE1.basicColors,
          sounds: stageProperties.STAGE1.sounds,
          name: stageProperties.STAGE1.name,
          defaultTransforms: [
            'STAGE1MINORSTRUCTURE',
            'STAGE1MINORSTRUCTUREB',
            'STAGE1MINORSTRUCTURE1',
            'STAGE1MINORSTRUCTURE1B',
            'STAGE1MINORSTRUCTURE2',
            'STAGE1MINORSTRUCTURE2B',
            'STAGE1MINORSTRUCTURE3',
            'STAGE1MINORSTRUCTURE3A',
            'STAGE1MINORSTRUCTURE3B',
            'STAGE1PRIZE0',
            'STAGE1PRIZE1',
            'STAGE1PRIZE2',
            'STAGE1PRIZE3'
          ],
          transforms: {
            'STAGE1PRIZE0': { r: { x: .005, y: .005, z: .005 } },
            'STAGE1PRIZE1': { r: { x: .005, y: .005, z: .005 } },
            'STAGE1PRIZE2': { r: { x: .005, y: .005, z: .005 } },
            'STAGE1PRIZE3': { r: { x: .005, y: .005, z: .005 } },
            'STAGE1MINORSTRUCTURE': { r: { x: 0, y: 0, z: .01 } },
            'STAGE1MINORSTRUCTUREA': { r: { x: 0, y: 0, z: .01 } },
            'STAGE1MINORSTRUCTUREB': { r: { x: 0, y: 0, z: .01 } },
            'STAGE1MINORSTRUCTURE1': { r: { x: 0, y: 0, z: .01 } },
            'STAGE1MINORSTRUCTURE1A': { r: { x: 0, y: 0, z: .01 } },
            'STAGE1MINORSTRUCTURE1B': { r: { x: 0, y: 0, z: .01 } },
            'STAGE1MINORSTRUCTURE2': { r: { x: 0, y: 0, z: .01 } },
            'STAGE1MINORSTRUCTURE2A': { r: { x: 0, y: 0, z: -.0025 } },
            'STAGE1MINORSTRUCTURE2B': { r: { x: 0, y: 0, z: .01 } },
            'STAGE1MINORSTRUCTURE3': { r: { x: 0, y: 0, z: -.01 } },
            'STAGE1MINORSTRUCTURE3A': { r: { x: 0, y: 0, z: .0025 } },
            'STAGE1MINORSTRUCTURE3B': { r: { x: 0, y: 0, z: .0025 } },
          },
          teardown: () => {
            teardownStage('STAGE1')
            window.appConfig.stages.STAGE1.data.started = false
          },
          initBackground: () => {
            const createBackgroundAnimation = () => {
              const bgGroup = new THREE.Group()
              bgGroup.name = 'STAGE1BGGROUP'
              const elementGeometry = new THREE.BoxGeometry(1, 1, 1)
              const elementMaterials = [
                new THREE.MeshPhongMaterial({ color: stageProperties.STAGE1.backgroundColors[0], transparent: true, opacity: .25 }),
                new THREE.MeshPhongMaterial({ color: stageProperties.STAGE1.backgroundColors[1], transparent: true, opacity: .25 }),
                new THREE.MeshPhongMaterial({ color: stageProperties.STAGE1.backgroundColors[2], transparent: true, opacity: .25 }),
                new THREE.MeshPhongMaterial({ color: stageProperties.STAGE1.backgroundColors[3], transparent: true, opacity: .25 }),
              ]

              const numberOfElements = 50
              let elementI = 0
              for (elementI; elementI < numberOfElements; elementI++) {
                bgGroup.add(new THREE.Mesh(elementGeometry, elementMaterials[elementI % elementMaterials.length]))
              }
              scene.add(bgGroup)
              bgGroup.position.set(0, 0, -10)
              bgGroup.children.forEach(c => {
                c.position.set(Math.random() * 200 - 100, Math.random() * 200 - 100, -20 + Math.random() * -30)
                const bgElementScale = 1 + Math.random() * 10
                c.scale.set(bgElementScale, bgElementScale, bgElementScale)
                c.rotation.z = (Math.random() * 2) * Math.PI
              })
              bgGroup.activeCallback = () => {
                if (bgGroup) {
                  bgGroup.children.forEach((c, ci) => {
                    c.position.y += .005 * ci / 2
                    c.rotation.y += .005
                    if (c.position.y > 125) {
                      c.position.y = -125
                    }
                  })
                }
              }
              bgGroup.activeCallback()
              window.appConfig.stages['STAGE1'].bgGroupActiveCallback = bgGroup.activeCallback
            }

            createBackgroundAnimation()
          },
          init: () => {
            const createStage1MainBeamStructure = window.appConfig.stages.components.createStage1MainBeamStructure
            const createStage1MinorBeamStructure = window.appConfig.stages.components.createStage1MinorBeamStructure
            const createSwitchBeamWall = window.appConfig.stages.components.createSwitchBeamWall
            const createRemoteSwitch = window.appConfig.stages.components.createRemoteSwitch

            window.appConfig.stages.components.createBumper("STAGE1BUMPER0", 1, { x: 0, y: 25, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE1BUMPER1", 1, { x: 0, y: 75, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE1BUMPER3", 1, { x: 0, y: -25, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE1BUMPER4", 1, { x: 0, y: -75, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE1BUMPER5", 1, { x: 0, y: -100, z: 0 }, 6)

            window.appConfig.stages.components.createBumper("STAGE1BUMPER6", 1, { x: 25, y: 0, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE1BUMPER7", 1, { x: 75, y: 0, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE1BUMPER8", 1, { x: 100, y: 0, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE1BUMPER9", 1, { x: -25, y: 0, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE1BUMPER10", 1, { x: -50, y: 0, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE1BUMPER11", 1, { x: -75, y: 0, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE1BUMPER12", 1, { x: -100, y: 0, z: 0 }, 6)


            window.appConfig.stages.components.createSapphire({ x: -100, y: -100, z: 0 })
            window.appConfig.stages.components.createSapphire({ x: -110, y: -100, z: 0 })
            window.appConfig.stages.components.createSapphire({ x: -120, y: -100, z: 0 })
            window.appConfig.stages.components.createSapphire({ x: -130, y: 100, z: 0 })
            window.appConfig.stages.components.createSapphire({ x: -140, y: 100, z: 0 })


            // portal
            window.appConfig.timers.activeTimers.push(
              window.appConfig.timers.addPortalToStage({ x: -50, y: -50, z: -5 }, 'GEM_STAGE_END_00', { x: 0, y: 0, z: 0 },
                window.appConfig.stages.components.gemPortalConfig())
            )

            window.appConfig.timers.activeTimers.push(
              window.appConfig.timers.addPortalToStage({ x: 0, y: 100, z: -5 }, window.appConfig.currentStage + '_SAPPHIRE_00', { x: 0, y: 300, z: 0 },
                window.appConfig.stages.components.sapphirePortalConfig())
            )

            const createStage1Portals = () => {
              window.appConfig.stages.components.createDiamond({ x: 10, y: -17.5, z: -2.5 }, false, 'GEM_STAGE_END_00')
              window.appConfig.stages.components.createEmerald({ x: 6.5, y: -24, z: -2.5 }, false, 'GEM_STAGE_END_00')
              window.appConfig.stages.components.createRuby({ x: 13, y: -24, z: -2.5 }, false, 'GEM_STAGE_END_00')
              let ellipseGeometry = new THREE.CircleGeometry(4.125, 5)
              ellipseGeometry.rotateZ((2 * Math.PI) / 20)

              let i = 1;
              for (i; i < ellipseGeometry.vertices.length; i++) {
                window.appConfig.stages.components.createSapphire({ x: ellipseGeometry.vertices[i].x, y: ellipseGeometry.vertices[i].y, z: 0 }, false, false, '_SAPPHIRE_00')
              }
            }

            window.appConfig.stages.components.setUpPortalIndicators(createStage1Portals)

            window.appConfig.stages.components.createBlueIsland()


            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINA',
              position: {
                x: 55,
                y: 55,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINA')
            })
            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINB',
              position: {
                x: 58,
                y: 58,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINB')
            })
            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINC',
              position: {
                x: 61,
                y: 61,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINC')
            })
            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOIND',
              position: {
                x: 64,
                y: 64,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOIND')
            })




            //main outside wall
            const stage1MainBeamStructure1 = window.appConfig.stages.components.createStage0MainBeamStructure(
              14,
              0.56,
              "STAGE1MAINSTRUCTURE1"
            );
            scene.add(stage1MainBeamStructure1);

            createRemoteSwitch({
              transmitter: {
                p: { x: -100, y: 100, z: 0 }
              },
              receiver: {
                p: { x: -55, y: -20, z: 0 },
                name: 'STAGE1RECEIVER_A'
              }
            })

            createSwitchBeamWall({ s: 8, dir: 'y', p: { x: -10, y: 24, z: 0 }, receiver: { name: 'STAGE1RECEIVER_A' }, switchBeamAdj: .35 })

            const stage1MainBeamStructure1A = window.appConfig.stages.components.createStage0MainBeamStructure(
              5,
              0.5,
              "STAGE1MAINSTRUCTURE1A",
              { x: -50, y: 50 },
              [0, 0, 1, 0]
              // [bottom, left, right, top]
            );
            scene.add(stage1MainBeamStructure1A);

            const stage1MinorBeamStructure = createStage1MinorBeamStructure(
              .5,
              .5,
              "STAGE1MINORSTRUCTURE",
              { x: 50, y: 50 }
            );
            scene.add(stage1MinorBeamStructure);

            const stage1MinorBeamStructureB = createStage1MinorBeamStructure(
              .5,
              .5,
              "STAGE1MINORSTRUCTUREB",
              { x: 50, y: 50 }
            );
            stage1MinorBeamStructureB.rotation.z = .25 * Math.PI
            scene.add(stage1MinorBeamStructureB);

            // top left spinner 1
            const stage1MinorBeamStructure1 = createStage1MinorBeamStructure(
              .5,
              .5,
              "STAGE1MINORSTRUCTURE1",
              { x: -50, y: 50 }
            );
            scene.add(stage1MinorBeamStructure1);

            // top left spinner 2
            const stage1MinorBeamStructure1B = createStage1MinorBeamStructure(
              .5,
              .5,
              "STAGE1MINORSTRUCTURE1B",
              { x: -50, y: 50 }
            );
            stage1MinorBeamStructure1B.rotation.z = .25 * Math.PI
            scene.add(stage1MinorBeamStructure1B);

            createRemoteSwitch({
              transmitter: {
                p: { x: 100, y: -100, z: 0 }
              },
              receiver: {
                p: { x: -55, y: -20, z: 0 },
                name: 'STAGE1RECEIVER_B'
              }
            })

            createSwitchBeamWall({ s: 8, dir: 'y', p: { x: 10, y: -76, z: 0 }, receiver: { name: 'STAGE1RECEIVER_B' }, switchBeamAdj: .35 })

            const stage1MainBeamStructure2A = window.appConfig.stages.components.createStage0MainBeamStructure(
              5,
              0.5,
              "STAGE1MAINSTRUCTURE2A",
              { x: 50, y: -50 },
              [0, 1, 0, 0]
              // [bottom, left, right, top]
            );
            scene.add(stage1MainBeamStructure2A);





            createRemoteSwitch({
              transmitter: {
                p: { x: -100, y: -100, z: 0 }
              },
              receiver: {
                p: { x: -55, y: -20, z: 0 },
                name: 'STAGE1RECEIVER_C'
              }
            })

            createSwitchBeamWall({ s: 8, dir: 'x', p: { x: 24, y: 10, z: 0 }, receiver: { name: 'STAGE1RECEIVER_C' }, switchBeamAdj: .35 })

            const stage1MainBeamStructure3A = window.appConfig.stages.components.createStage0MainBeamStructure(
              5,
              0.5,
              "STAGE1MAINSTRUCTURE3A",
              { x: 50, y: 50 },
              [1, 0, 0, 0]
              // [bottom, left, right, top]
            );
            scene.add(stage1MainBeamStructure3A);

            const stage1MinorBeamStructure2 = createStage1MinorBeamStructure(
              .5,
              .5,
              "STAGE1MINORSTRUCTURE2",
              { x: 50, y: -50 }
            );
            scene.add(stage1MinorBeamStructure2);

            const stage1MinorBeamStructure2B = createStage1MinorBeamStructure(
              .5,
              .5,
              "STAGE1MINORSTRUCTURE2B",
              { x: 50, y: -50 }
            );
            stage1MinorBeamStructure2B.rotation.z = -.25 * Math.PI
            scene.add(stage1MinorBeamStructure2B);

            const stage1MinorBeamStructure3A = createStage1MinorBeamStructure(
              1.5,
              -.5,
              "STAGE1MINORSTRUCTURE3A",
              { x: -50, y: -50 }
            );
            scene.add(stage1MinorBeamStructure3A);

            const stage1MinorBeamStructure3B = createStage1MinorBeamStructure(
              1.5,
              -.5,
              "STAGE1MINORSTRUCTURE3B",
              { x: -50, y: -50 }
            );
            stage1MinorBeamStructure3B.rotation.z = .25 * Math.PI
            scene.add(stage1MinorBeamStructure3B);

            prize(1, 1, { x: 100, y: 100, z: 0 })
            //top left quad
            prize(1, 3, { x: -80, y: 80, z: 0 })
            prize(1, 4, { x: -20, y: 80, z: 0 })
            prize(1, 5, { x: -80, y: 20, z: 0 })
            prize(1, 6, { x: -20, y: 20, z: 0 })

            window.appConfig.stages.components.createRuby({ x: -50.25, y: 48.5, z: 0 })

            createCrystalCircle('STAGE1', 5, { x: 50, y: -50 }, 0, 16)
            createCrystalCircle('STAGE1', 5.25, { x: 50, y: -50 }, 1, 16)
            createCrystalCircle('STAGE1', 5.5, { x: 50, y: -50 }, 2, 16)

            //bottom right quad
            prize(1, 7, { x: 80, y: -80, z: 0 })
            prize(1, 8, { x: 20, y: -80, z: 0 })
            prize(1, 9, { x: 80, y: -20, z: 0 })
            prize(1, 10, { x: 20, y: -20, z: 0 })

            //bottom left quad
            prize(1, 7, { x: -85, y: -85, z: 0 })
            prize(1, 8, { x: -15, y: -85, z: 0 })
            prize(1, 9, { x: -85, y: -15, z: 0 })
            prize(1, 10, { x: -15, y: -15, z: 0 })

            window.appConfig.stages.components.createEmerald({ x: 49.5, y: -51.5, z: 0 })

            createCrystalCircle('STAGE1', 5, { x: -50, y: 50 }, 0, 16)
            createCrystalCircle('STAGE1', 5.25, { x: -50, y: 50 }, 1, 16)
            createCrystalCircle('STAGE1', 5.5, { x: -50, y: 50 }, 2, 16)

            //top right quad
            prize(1, 11, { x: 80, y: 80, z: 0 })
            prize(1, 12, { x: 20, y: 80, z: 0 })
            prize(1, 13, { x: 80, y: 20, z: 0 })
            prize(1, 14, { x: 20, y: 20, z: 0 })

            window.appConfig.stages.components.createDiamond({ x: 50, y: 48.5, z: 0 })

            createCrystalCircle('STAGE1', 5, { x: 50, y: 50 }, 0, 16)
            createCrystalCircle('STAGE1', 5.25, { x: 50, y: 50 }, 1, 16)
            createCrystalCircle('STAGE1', 5.5, { x: 50, y: 50 }, 2, 16)

            createCrystalCircle('STAGE1AA', 4.5, { x: -50, y: -50 }, 2, 12)
            createCrystalCircle('STAGE1BB', 5, { x: -50, y: -50 }, 1, 16)
            createCrystalCircle('STAGE1CC', 5.25, { x: -50, y: -50 }, 0, 16)
            createCrystalCircle('STAGE1DD', 5.5, { x: -50, y: -50 }, 1, 16)
            createCrystalCircle('STAGE1EE', 5.75, { x: -50, y: -50 }, 2, 16)
            createCrystalCircle('STAGE1EE', 6, { x: -50, y: -50 }, 1, 16)
            createCrystalCircle('STAGE1EE', 6.25, { x: -50, y: -50 }, 0, 16)

            createCrystalLine('STAGE1--0', 8, { x: -96.5, y: 15 }, 0, 10, "y");
            createCrystalLine('STAGE1--1', 8, { x: -100.5, y: 15 }, 1, 10, "y");
            createCrystalLine('STAGE1--2', 8, { x: -104.5, y: 15 }, 2, 10, "y");

            createCrystalLine('STAGE1--3', 8, { x: 96.5, y: 15 }, 0, 10, "y");
            createCrystalLine('STAGE1--4', 8, { x: 100.5, y: 15 }, 1, 10, "y");
            createCrystalLine('STAGE1--5', 8, { x: 104.5, y: 15 }, 2, 10, "y");

            createCrystalLine('STAGE1--6', 8, { x: 96.5, y: -85 }, 0, 10, "y");
            createCrystalLine('STAGE1--7', 8, { x: 100.5, y: -85 }, 1, 10, "y");
            createCrystalLine('STAGE1--8', 8, { x: 104.5, y: -85 }, 2, 10, "y");

            createCrystalLine('STAGE1--9', 8, { x: 15, y: -96.5 }, 0, 10, "x");
            createCrystalLine('STAGE1--10', 8, { x: 15, y: -100.5 }, 1, 10, "x");
            createCrystalLine('STAGE1--11', 8, { x: 15, y: -104.5 }, 2, 10, "x");

            createCrystalLine('STAGE1--12', 8, { x: 15, y: 96.5 }, 0, 10, "x");
            createCrystalLine('STAGE1--13', 8, { x: 15, y: 100.5 }, 1, 10, "x");
            createCrystalLine('STAGE1--14', 8, { x: 15, y: 104.5 }, 2, 10, "x");

            createCrystalLine('STAGE1--15', 8, { x: -85, y: 96.5 }, 0, 10, "x");
            createCrystalLine('STAGE1--16', 8, { x: -85, y: 100.5 }, 1, 10, "x");
            createCrystalLine('STAGE1--17', 8, { x: -85, y: 104.5 }, 2, 10, "x");

            createCrystalLine('STAGE1--18', 8, { x: -85, y: -96.5 }, 0, 10, "x");
            createCrystalLine('STAGE1--19', 8, { x: -85, y: -100.5 }, 1, 10, "x");
            createCrystalLine('STAGE1--20', 8, { x: -85, y: -104.5 }, 2, 10, "x");

            createCrystalLine('STAGE1--21', 8, { x: -96.5, y: -85 }, 0, 10, "y");
            createCrystalLine('STAGE1--22', 8, { x: -100.5, y: -85 }, 1, 10, "y");
            createCrystalLine('STAGE1--23', 8, { x: -104.5, y: -85 }, 2, 10, "y");


            window.appConfig.stages.STAGE1.STAGE1PRIZE0 = scene.children.find((obj) => obj.name === "STAGE1PRIZE0")
            window.appConfig.stages.STAGE1.STAGE1PRIZE1 = scene.children.find((obj) => obj.name === "STAGE1PRIZE1")
            window.appConfig.stages.STAGE1.STAGE1PRIZE2 = scene.children.find((obj) => obj.name === "STAGE1PRIZE2")
            window.appConfig.stages.STAGE1.STAGE1PRIZE3 = scene.children.find((obj) => obj.name === "STAGE1PRIZE3")
            window.appConfig.stages.STAGE1.STAGE1MAINSTRUCTURE = scene.children.find((obj) => obj.name === "STAGE1MAINSTRUCTURE")
            window.appConfig.stages.STAGE1.STAGE1MINORSTRUCTURE = scene.children.find((obj) => obj.name === "STAGE1MINORSTRUCTURE")
            window.appConfig.stages.STAGE1.STAGE1MINORSTRUCTUREA = scene.children.find((obj) => obj.name === "STAGE1MINORSTRUCTUREA")
            window.appConfig.stages.STAGE1.STAGE1MINORSTRUCTUREB = scene.children.find((obj) => obj.name === "STAGE1MINORSTRUCTUREB")
            window.appConfig.stages.STAGE1.STAGE1MINORSTRUCTURE1 = scene.children.find((obj) => obj.name === "STAGE1MINORSTRUCTURE1")
            window.appConfig.stages.STAGE1.STAGE1MINORSTRUCTURE1A = scene.children.find((obj) => obj.name === "STAGE1MINORSTRUCTURE1A")
            window.appConfig.stages.STAGE1.STAGE1MINORSTRUCTURE1B = scene.children.find((obj) => obj.name === "STAGE1MINORSTRUCTURE1B")
            window.appConfig.stages.STAGE1.STAGE1MINORSTRUCTURE2 = scene.children.find((obj) => obj.name === "STAGE1MINORSTRUCTURE2")
            window.appConfig.stages.STAGE1.STAGE1MINORSTRUCTURE2A = scene.children.find((obj) => obj.name === "STAGE1MINORSTRUCTURE2A")
            window.appConfig.stages.STAGE1.STAGE1MINORSTRUCTURE2B = scene.children.find((obj) => obj.name === "STAGE1MINORSTRUCTURE2B")
            window.appConfig.stages.STAGE1.STAGE1MINORSTRUCTURE3 = scene.children.find((obj) => obj.name === "STAGE1MINORSTRUCTURE3")
            window.appConfig.stages.STAGE1.STAGE1MINORSTRUCTURE3A = scene.children.find((obj) => obj.name === "STAGE1MINORSTRUCTURE3A")
            window.appConfig.stages.STAGE1.STAGE1MINORSTRUCTURE3B = scene.children.find((obj) => obj.name === "STAGE1MINORSTRUCTURE3B")
            window.appConfig.stages.STAGE1.data.started = true
          }
        },
        STAGE2: {
          data: {
            started: false,
            xAdj: -60,
            vAdj: -70,
            sAdj: 2,
            startingPosition: window.appConfig.originVector,
            sapphirePortalPosition: { x: 0, y: 72.5, z: -5 }
          },
          backgroundColors: stageProperties.STAGE2.backgroundColors,
          basicColors: stageProperties.STAGE2.basicColors,
          sounds: stageProperties.STAGE2.sounds,
          name: stageProperties.STAGE2.name,
          number: stageProperties.STAGE2.number,
          defaultTransforms: [
            'STAGE2PRIZE0',
            'STAGE2PRIZE1',
            'STAGE2PRIZE2',
            'STAGE2PRIZE3',
            'STAGE2MINORSTRUCTURE',
            'STAGE2MINORSTRUCTUREA',
            'STAGE2MINORSTRUCTUREB',
            'STAGE2MINORSTRUCTUREROTATION',
            'STAGE2MINORSTRUCTUREROTATIONA',
            'STAGE2MINORSTRUCTUREROTATIONB',
            'STAGE2MINORSTRUCTUREROTATIONC'
          ],
          transforms: {
            'STAGE2PRIZE0': { r: { x: .005, y: .005, z: .005 } },
            'STAGE2PRIZE1': { r: { x: .005, y: .005, z: .005 } },
            'STAGE2PRIZE2': { r: { x: .005, y: .005, z: .005 } },
            'STAGE2PRIZE3': { r: { x: .005, y: .005, z: .005 } },
            'STAGE2MINORSTRUCTURE': { r: { x: 0, y: 0, z: -.01 } },
            'STAGE2MINORSTRUCTUREA': { r: { x: 0, y: 0, z: .0025 } },
            'STAGE2MINORSTRUCTUREB': { r: { x: 0, y: 0, z: .0025 } },
            'STAGE2MINORSTRUCTUREROTATION': { r: { x: 0, y: 0, z: -.0025 } },
            'STAGE2MINORSTRUCTUREROTATIONA': { r: { x: 0, y: 0, z: -.0025 } },
            'STAGE2MINORSTRUCTUREROTATIONB': { r: { x: 0, y: 0, z: -.0025 } },
            'STAGE2MINORSTRUCTUREROTATIONC': { r: { x: 0, y: 0, z: -.0025 } }
          },
          teardown: () => {
            teardownStage('STAGE2')
            window.appConfig.stages.STAGE2.data.started = false
          },
          initBackground: () => {
            const createBackgroundAnimation = () => {
              const bgGroup = new THREE.Group()
              bgGroup.name = 'STAGE2BGGROUP'
              const elementGeometry = new THREE.CylinderGeometry(
                1,
                1,
                1,
                Math.ceil(Math.random() * 16 + 2)
              )
              const elementMaterials = [
                new THREE.MeshPhongMaterial({ color: stageProperties.STAGE2.backgroundColors[0], transparent: true, opacity: .25 }),
                new THREE.MeshPhongMaterial({ color: stageProperties.STAGE2.backgroundColors[1], transparent: true, opacity: .25 }),
                new THREE.MeshPhongMaterial({ color: stageProperties.STAGE2.backgroundColors[2], transparent: true, opacity: .25 }),
                new THREE.MeshPhongMaterial({ color: stageProperties.STAGE2.backgroundColors[3], transparent: true, opacity: .25 }),
              ]

              const numberOfElements = 50
              let elementI = 0
              for (elementI; elementI < numberOfElements; elementI++) {
                bgGroup.add(new THREE.Mesh(elementGeometry, elementMaterials[elementI % elementMaterials.length]))
              }
              scene.add(bgGroup)
              bgGroup.position.set(0, 0, -10)
              bgGroup.children.forEach(c => {
                c.position.set(Math.random() * 200 - 100, Math.random() * 200 - 100, -20 + Math.random() * -30)
                const bgElementScale = 1 + Math.random() * 10
                c.scale.set(bgElementScale, bgElementScale, bgElementScale)
                c.rotation.z = (Math.random() * 2) * Math.PI
              })
              bgGroup.activeCallback = () => {
                if (bgGroup) {
                  bgGroup.children.forEach((c, ci) => {
                    c.position.y += .005 * ci / 2
                    c.rotation.y += .005
                    if (c.position.y > 125) {
                      c.position.y = -125
                    }
                  })
                }
              }
              bgGroup.activeCallback()
              window.appConfig.stages['STAGE2'].bgGroupActiveCallback = bgGroup.activeCallback
            }

            createBackgroundAnimation()
          },
          init: () => {
            const createSwitchBeamWall = window.appConfig.stages.components.createSwitchBeamWall
            const createRemoteSwitch = window.appConfig.stages.components.createRemoteSwitch

            const createStage0MainBeamStructure = window.appConfig.stages.components.createStage0MainBeamStructure
            const createStage1MinorBeamStructure = window.appConfig.stages.components.createStage1MinorBeamStructure

            window.appConfig.stages.components.createSapphire({ x: -100, y: -100, z: 0 })
            window.appConfig.stages.components.createSapphire({ x: -110, y: -100, z: 0 })
            window.appConfig.stages.components.createSapphire({ x: -120, y: -100, z: 0 })
            window.appConfig.stages.components.createSapphire({ x: -130, y: 100, z: 0 })
            window.appConfig.stages.components.createSapphire({ x: -140, y: 100, z: 0 })

            window.appConfig.stages.components.createBumper("STAGE2BUMPER4", 1, { x: 30, y: -65, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE2BUMPER4", 1, { x: -30, y: -65, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE2BUMPER4", 1, { x: 30, y: -115, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE2BUMPER4", 1, { x: -30, y: -115, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE2BUMPER4", 1, { x: 15, y: 75, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE2BUMPER4", 1, { x: -15, y: 75, z: 0 }, 6)


            // portal
            window.appConfig.timers.activeTimers.push(
              window.appConfig.timers.addPortalToStage({ x: 0, y: -70, z: -5 }, 'GEM_STAGE_END_00', { x: 0, y: 0, z: 0 },
                window.appConfig.stages.components.gemPortalConfig())
            )

            window.appConfig.timers.activeTimers.push(
              window.appConfig.timers.addPortalToStage({ x: 0, y: 72.5, z: -5 }, window.appConfig.currentStage + '_SAPPHIRE_00', { x: 0, y: 300, z: 0 },
                window.appConfig.stages.components.sapphirePortalConfig())
            )

            const createStage2Portals = () => {
              window.appConfig.stages.components.createDiamond({ x: 10, y: -17.5, z: -2.5 }, false, 'GEM_STAGE_END_00')
              window.appConfig.stages.components.createEmerald({ x: 6.5, y: -24, z: -2.5 }, false, 'GEM_STAGE_END_00')
              window.appConfig.stages.components.createRuby({ x: 13, y: -24, z: -2.5 }, false, 'GEM_STAGE_END_00')
              let ellipseGeometry = new THREE.CircleGeometry(4.125, 5)
              ellipseGeometry.rotateZ((2 * Math.PI) / 20)

              let i = 1;
              for (i; i < ellipseGeometry.vertices.length; i++) {
                window.appConfig.stages.components.createSapphire({ x: ellipseGeometry.vertices[i].x, y: ellipseGeometry.vertices[i].y, z: 0 }, false, false, '_SAPPHIRE_00')
              }
            }

            window.appConfig.stages.components.setUpPortalIndicators(createStage2Portals)

            window.appConfig.stages.components.createBlueIsland()

            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINA',
              position: {
                x: 0,
                y: 95,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINA')
            })
            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINB',
              position: {
                x: 0,
                y: 108,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINB')
            })
            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINC',
              position: {
                x: 0,
                y: 101,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINC')
            })
            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOIND',
              position: {
                x: 0,
                y: 114,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOIND')
            })


            window.appConfig.stages.components.createRuby({ x: -85.25, y: 18.5, z: 0 })

            createCrystalCircle('STAGE2', 3.5, { x: -85, y: 20 }, 0, 16)
            createCrystalCircle('STAGE2', 3.125, { x: -85, y: 20 }, 1, 8)
            createCrystalCircle('STAGE2', 2.625, { x: -85, y: 20 }, 2, 8)

            window.appConfig.stages.components.createEmerald({ x: 84.25, y: 18.5, z: 0 })

            createCrystalCircle('STAGE2', 3.5, { x: 85, y: 20 }, 0, 16)
            createCrystalCircle('STAGE2', 3.125, { x: 85, y: 20 }, 1, 8)
            createCrystalCircle('STAGE2', 2.625, { x: 85, y: 20 }, 2, 8)

            window.appConfig.stages.components.createDiamond({ x: -.25, y: 99, z: 0 })

            createCrystalCircle('STAGE2', 4.5, { x: 0, y: 100 }, 0, 16)
            createCrystalCircle('STAGE2', 4.25, { x: 0, y: 100 }, 1, 16)
            createCrystalCircle('STAGE2', 4, { x: 0, y: 100 }, 2, 16)
            createCrystalCircle('STAGE2', 3.625, { x: 0, y: 100 }, 1, 16)
            createCrystalCircle('STAGE2', 3.5, { x: 0, y: 100 }, 0, 16)
            createCrystalCircle('STAGE2', 3.125, { x: 0, y: 100 }, 1, 8)
            createCrystalCircle('STAGE2', 2.625, { x: 0, y: 100 }, 2, 8)


            createRemoteSwitch({
              transmitter: {
                p: { x: -55.5, y: -45.5, z: 0 }
              },
              receiver: {
                p: { x: -55, y: -20, z: 0 },
                name: 'STAGE2RECEIVER_A'
              }
            })

            createSwitchBeamWall({ s: 6.75, dir: 'x', p: { x: -121.5, y: 0, z: 0 }, receiver: { name: 'STAGE2RECEIVER_A' }, switchBeamAdj: .25 })

            createRemoteSwitch({
              transmitter: {
                p: { x: 55.5, y: -46, z: 0 }
              },
              receiver: {
                p: { x: -55, y: -20, z: 0 },
                name: 'STAGE2RECEIVER_B'
              }
            })

            createSwitchBeamWall({ s: 6.7, dir: 'x', p: { x: 77, y: 0, z: 0 }, receiver: { name: 'STAGE2RECEIVER_B' }, switchBeamAdj: .25 })

            createRemoteSwitch({
              transmitter: {
                p: { x: 0, y: 145, z: 0 }
              },
              receiver: {
                p: { x: -55, y: -20, z: 0 },
                name: 'STAGE2RECEIVER_C'
              }
            })

            createSwitchBeamWall({ s: 5.2, dir: 'x', p: { x: -60, y: 64, z: 0 }, receiver: { name: 'STAGE2RECEIVER_C' }, switchBeamAdj: .125 })

            createRemoteSwitch({
              transmitter: {
                p: { x: 0, y: 145, z: 0 }
              },
              receiver: {
                p: { x: -55, y: -20, z: 0 },
                name: 'STAGE2RECEIVER_D'
              }
            })

            createSwitchBeamWall({ s: 5.2, dir: 'x', p: { x: 25, y: 64, z: 0 }, receiver: { name: 'STAGE2RECEIVER_D' }, switchBeamAdj: .125 })


            const stage2MainBeamStructure = createStage0MainBeamStructure(
              5,
              0,
              "STAGE2MAINSTRUCTURE",
              { x: 0, y: 0 }
            );
            scene.add(stage2MainBeamStructure);

            const stage2MainBeamStructure2 = createStage0MainBeamStructure(
              6.85,
              0,
              "STAGE2MAINSTRUCTURE0",
              { x: 0, y: 0 }
            );
            stage2MainBeamStructure2.rotation.z = .25 * Math.PI
            scene.add(stage2MainBeamStructure2);

            const stage2MainBeamStructure3 = createStage0MainBeamStructure(
              8,
              -.7,
              "STAGE2MAINSTRUCTURE_3",
              { x: 0, y: 0 },
              [1, 0, 0, 0]
            );
            scene.add(stage2MainBeamStructure3)


            const stage2MainBeamStructure1 = window.appConfig.stages.components.createStage0MainBeamStructure(
              12,
              0.56,
              "STAGE2MAINSTRUCTURE1",
              { x: 0, y: 0 },
              [1, 1, 0, 0]
            );
            stage2MainBeamStructure1.rotation.z = .25 * Math.PI
            scene.add(stage2MainBeamStructure1);

            const stage2MainBeamStructure_2 = window.appConfig.stages.components.createStage0MainBeamStructure(
              14,
              0.56,
              "STAGE2MAINSTRUCTURE_2"
            );
            stage2MainBeamStructure_2.rotation.z = .25 * Math.PI
            scene.add(stage2MainBeamStructure_2);


            const stage2MinorBeamStructure = createStage1MinorBeamStructure(
              .5,
              .5,
              "STAGE2MINORSTRUCTURE",
              { x: 0, y: 0 }
            );
            stage2MinorBeamStructure.rotation.z = .25 * Math.PI
            scene.add(stage2MinorBeamStructure);

            const stage2MinorBeamStructureA = createStage1MinorBeamStructure(
              1.5,
              -.5,
              "STAGE2MINORSTRUCTUREA",
              { x: 0, y: 0 }
            );
            scene.add(stage2MinorBeamStructureA);

            const stage2MinorBeamStructureB = createStage1MinorBeamStructure(
              1.5,
              -.5,
              "STAGE2MINORSTRUCTUREB",
              { x: 0, y: 0 }
            );
            stage2MinorBeamStructureB.rotation.z = .25 * Math.PI
            scene.add(stage2MinorBeamStructureB);


            const stage2MinorBeamStructureRotation = createStage0MainBeamStructure(
              1,
              -0.5,
              "STAGE2MINORSTRUCTUREROTATION",
              { x: 65, y: 45 }
            );
            scene.add(stage2MinorBeamStructureRotation);
            const stage2MinorBeamStructureRotationA = createStage0MainBeamStructure(
              1,
              -0.5,
              "STAGE2MINORSTRUCTUREROTATIONA",
              { x: 55, y: -45 }
            );
            scene.add(stage2MinorBeamStructureRotationA);
            const stage2MinorBeamStructureRotationB = createStage0MainBeamStructure(
              1,
              -0.5,
              "STAGE2MINORSTRUCTUREROTATIONB",
              { x: -55, y: -45 }
            );
            scene.add(stage2MinorBeamStructureRotationB);
            const stage2MinorBeamStructureRotationC = createStage0MainBeamStructure(
              1,
              -0.5,
              "STAGE2MINORSTRUCTUREROTATIONC",
              { x: -65, y: 45 }
            );
            scene.add(stage2MinorBeamStructureRotationC);

            prize(2, 0, { x: 65, y: 45, z: 0 })
            prize(2, 1, { x: 50, y: -75, z: 0 })
            prize(2, 2, { x: -50, y: -75, z: 0 })
            prize(2, 3, { x: -65, y: 45, z: 0 })

            prize(2, 4, { x: -75, y: -10, z: 0 })
            prize(2, 5, { x: 75, y: -10, z: 0 })
            prize(2, 6, { x: -60, y: -30, z: 0 })
            prize(2, 7, { x: 60, y: -30, z: 0 })
            prize(2, 8, { x: -100, y: 50, z: 0 })
            prize(2, 9, { x: 100, y: 50, z: 0 })
            prize(2, 8, { x: -50, y: 100, z: 0 })
            prize(2, 9, { x: 50, y: 100, z: 0 })

            prize(2, 10, { x: -145, y: 0, z: 0 })
            prize(2, 11, { x: 145, y: 0, z: 0 })

            prize(2, 10, { x: -30, y: 30, z: 0 })
            prize(2, 10, { x: -30, y: -30, z: 0 })
            prize(2, 10, { x: 30, y: -30, z: 0 })
            prize(2, 10, { x: 30, y: 30, z: 0 })


            createCrystalCircle('STAGE2', 3.5, { x: -50, y: -75 }, 0, 16)
            createCrystalCircle('STAGE2', 3.125, { x: -50, y: -75 }, 1, 8)
            createCrystalCircle('STAGE2', 2.625, { x: -50, y: -75 }, 2, 8)

            createCrystalCircle('STAGE2', 3.5, { x: 50, y: -75 }, 0, 16)
            createCrystalCircle('STAGE2', 3.125, { x: 50, y: -75 }, 1, 8)
            createCrystalCircle('STAGE2', 2.625, { x: 50, y: -75 }, 2, 8)

            createCrystalCross('STAGE2', 5, { x: 90, y: -25 }, 0);
            createCrystalCross('STAGE2', 5, { x: 110, y: -25 }, 2);
            createCrystalCross('STAGE2', 5, { x: 100, y: -15 }, 1);
            createCrystalCross('STAGE2', 5, { x: 100, y: -35 }, 1);
            createCrystalCross('STAGE2', 5, { x: 120, y: -15 }, 2);
            createCrystalCross('STAGE2', 5, { x: 90, y: -45 }, 1);
            createCrystalCross('STAGE2', 5, { x: 107.5, y: 12.5 }, 2);

            createCrystalCross('STAGE2', 5, { x: -90, y: -25 }, 0);
            createCrystalCross('STAGE2', 5, { x: -110, y: -25 }, 2);
            createCrystalCross('STAGE2', 5, { x: -100, y: -15 }, 1);
            createCrystalCross('STAGE2', 5, { x: -100, y: -35 }, 1);
            createCrystalCross('STAGE2', 5, { x: -120, y: -15 }, 2);
            createCrystalCross('STAGE2', 5, { x: -90, y: -45 }, 1);
            createCrystalCross('STAGE2', 5, { x: -107.5, y: 12.5 }, 2);

            createCrystalCross('STAGE2', 5, { x: 0, y: -120 }, 0);
            createCrystalCross('STAGE2', 5, { x: 0, y: -140 }, 2);
            createCrystalCross('STAGE2', 5, { x: 10, y: -130 }, 1);
            createCrystalCross('STAGE2', 5, { x: -10, y: -130 }, 1);

            createCrystalLine('STAGE2', 5, { x: -35, y: -100.5 }, 0, 15, "x");
            createCrystalLine('STAGE2', 10, { x: -20, y: -107.5 }, 2, 5, "x");
            createCrystalLine('STAGE2', 5, { x: -35, y: -87.5 }, 0, 15, "x");
            createCrystalLine('STAGE2', 10, { x: -20, y: -80.5 }, 1, 5, "x");
            createCrystalLine('STAGE2', 10, { x: -45, y: -94.5 }, 2, 10, "x");

            createCrystalLine('STAGE2', 5, { x: -70.5, y: -70 }, 0, 10, "y");
            createCrystalLine('STAGE2', 10, { x: -77.5, y: -60 }, 2, 5, "y");

            createCrystalLine('STAGE2', 3, { x: -55.5, y: -15 }, 0, 10, "y");
            createCrystalLine('STAGE2', 4.5, { x: -50.5, y: -17.5 }, 1, 8, "y");
            createCrystalLine('STAGE2', 5.5, { x: -45.5, y: -20 }, 2, 8, "y");

            createCrystalLine('STAGE2', 3, { x: 55.5, y: -15 }, 0, 10, "y");
            createCrystalLine('STAGE2', 4.5, { x: 50.5, y: -17.5 }, 1, 8, "y");
            createCrystalLine('STAGE2', 5.5, { x: 45.5, y: -20 }, 2, 8, "y");

            createCrystalLine('STAGE2', 3, { x: -14.25, y: 55.5 }, 0, 10, "x");
            createCrystalLine('STAGE2', 4.5, { x: -16.75, y: 50.5 }, 1, 8, "x");
            createCrystalLine('STAGE2', 5.5, { x: -19.25, y: 45.5 }, 2, 8, "x");

            createCrystalLine('STAGE2', 3, { x: -14.25, y: -55.5 }, 0, 10, "x");
            createCrystalLine('STAGE2', 4.5, { x: -16.75, y: -50.5 }, 1, 8, "x");
            createCrystalLine('STAGE2', 5.5, { x: -19.25, y: -45.5 }, 2, 8, "x");

            createCrystalLine('STAGE2', 5, { x: 70.5, y: -70 }, 0, 10, "y");
            createCrystalLine('STAGE2', 10, { x: 77.5, y: -60 }, 2, 5, "y");

            createCrystalCircle('STAGE2', 4.5, { x: 0, y: 0 }, 1, 4)

            window.appConfig.stages.STAGE2.STAGE2PRIZE0 = scene.children.find((obj) => obj.name === "STAGE2PRIZE0")
            window.appConfig.stages.STAGE2.STAGE2PRIZE1 = scene.children.find((obj) => obj.name === "STAGE2PRIZE1")
            window.appConfig.stages.STAGE2.STAGE2PRIZE2 = scene.children.find((obj) => obj.name === "STAGE2PRIZE2")
            window.appConfig.stages.STAGE2.STAGE2PRIZE3 = scene.children.find((obj) => obj.name === "STAGE2PRIZE3")
            window.appConfig.stages.STAGE2.STAGE2MAINSTRUCTURE = scene.children.find((obj) => obj.name === "STAGE2MAINSTRUCTURE")
            window.appConfig.stages.STAGE2.STAGE2MINORSTRUCTURE = scene.children.find((obj) => obj.name === "STAGE2MINORSTRUCTURE")
            window.appConfig.stages.STAGE2.STAGE2MINORSTRUCTUREA = scene.children.find((obj) => obj.name === "STAGE2MINORSTRUCTUREA")
            window.appConfig.stages.STAGE2.STAGE2MINORSTRUCTUREB = scene.children.find((obj) => obj.name === "STAGE2MINORSTRUCTUREB")

            window.appConfig.stages.STAGE2.STAGE2MINORSTRUCTUREROTATION = scene.children.find((obj) => obj.name === "STAGE2MINORSTRUCTUREROTATION")
            window.appConfig.stages.STAGE2.STAGE2MINORSTRUCTUREROTATIONA = scene.children.find((obj) => obj.name === "STAGE2MINORSTRUCTUREROTATIONA")
            window.appConfig.stages.STAGE2.STAGE2MINORSTRUCTUREROTATIONB = scene.children.find((obj) => obj.name === "STAGE2MINORSTRUCTUREROTATIONB")
            window.appConfig.stages.STAGE2.STAGE2MINORSTRUCTUREROTATIONC = scene.children.find((obj) => obj.name === "STAGE2MINORSTRUCTUREROTATIONC")

            window.appConfig.stages.STAGE2.data.started = true
          }
        },
        STAGE3: {
          data: {
            started: false,
            xAdj: -60,
            vAdj: -70,
            sAdj: 2,
            startingPosition: window.appConfig.originVector,
            sapphirePortalPosition: { x: 148.75, y: 25, z: -5 }
          },
          backgroundColors: stageProperties.STAGE3.backgroundColors,
          basicColors: stageProperties.STAGE3.basicColors,
          sounds: stageProperties.STAGE3.sounds,
          name: stageProperties.STAGE3.name,
          number: stageProperties.STAGE3.number,
          defaultTransforms: [
            'STAGE3PRIZE0',
            'STAGE3PRIZE1',
            'STAGE3PRIZE2',
            'STAGE3PRIZE3',
            'STAGE3MAINSTRUCTURE',
            'STAGE3MAINSTRUCTUREA',
            'STAGE3MAINSTRUCTUREB',
            'STAGE3MAINSTRUCTUREC',
            'STAGE3MAINSTRUCTURED',
            'STAGE3MAINSTRUCTUREE',
            'STAGE3CROSSBEAMSTRUCTURE',
            'STAGE3CROSSBEAMSTRUCTUREA',
            'STAGE3CROSSBEAMSTRUCTUREB',
            'STAGE3CROSSBEAMSTRUCTUREC',
            'STAGE3CROSSBEAMSTRUCTURE1',
            'STAGE3CROSSBEAMSTRUCTURE1A',
            'STAGE3CROSSBEAMSTRUCTURE1B',
            'STAGE3CROSSBEAMSTRUCTURE1C',
            'STAGE3CROSSBEAMSTRUCTURE2',
            'STAGE3CROSSBEAMSTRUCTURE2A',
            'STAGE3CROSSBEAMSTRUCTURE2B',
            'STAGE3CROSSBEAMSTRUCTURE2C',
            'STAGE3CROSSBEAMSTRUCTURE3',
            'STAGE3CROSSBEAMSTRUCTURE3A',
            'STAGE3CROSSBEAMSTRUCTURE3B',
            'STAGE3CROSSBEAMSTRUCTURE3C'
          ],
          transforms: {
            'STAGE3PRIZE0': { r: { x: .005, y: .005, z: .005 } },
            'STAGE3PRIZE1': { r: { x: .005, y: .005, z: .005 } },
            'STAGE3PRIZE2': { r: { x: .005, y: .005, z: .005 } },
            'STAGE3PRIZE3': { r: { x: .005, y: .005, z: .005 } },
            'STAGE3MAINSTRUCTURE': { r: { x: 0, y: 0, z: -.005 } },
            'STAGE3MAINSTRUCTUREA': { r: { x: 0, y: 0, z: -.005 } },
            'STAGE3MAINSTRUCTUREB': { r: { x: 0, y: 0, z: -.005 } },
            'STAGE3MAINSTRUCTUREC': { r: { x: 0, y: 0, z: -.005 } },
            'STAGE3MAINSTRUCTURED': { r: { x: 0, y: 0, z: .005 } },
            'STAGE3MAINSTRUCTUREE': { r: { x: 0, y: 0, z: .005 } },
            'STAGE3CROSSBEAMSTRUCTURE': { r: { x: 0, y: 0, z: .01 } },
            'STAGE3CROSSBEAMSTRUCTUREA': { r: { x: 0, y: 0, z: -.01 } },
            'STAGE3CROSSBEAMSTRUCTUREB': { r: { x: 0, y: 0, z: .01 } },
            'STAGE3CROSSBEAMSTRUCTUREC': { r: { x: 0, y: 0, z: -.01 } },
            'STAGE3CROSSBEAMSTRUCTURE1': { r: { x: 0, y: 0, z: .01 } },
            'STAGE3CROSSBEAMSTRUCTURE1A': { r: { x: 0, y: 0, z: -.01 } },
            'STAGE3CROSSBEAMSTRUCTURE1B': { r: { x: 0, y: 0, z: .01 } },
            'STAGE3CROSSBEAMSTRUCTURE1C': { r: { x: 0, y: 0, z: -.01 } },
            'STAGE3CROSSBEAMSTRUCTURE2': { r: { x: 0, y: 0, z: .01 } },
            'STAGE3CROSSBEAMSTRUCTURE2A': { r: { x: 0, y: 0, z: -.01 } },
            'STAGE3CROSSBEAMSTRUCTURE2B': { r: { x: 0, y: 0, z: .01 } },
            'STAGE3CROSSBEAMSTRUCTURE2C': { r: { x: 0, y: 0, z: -.01 } },
            'STAGE3CROSSBEAMSTRUCTURE3': { r: { x: 0, y: 0, z: .01 } },
            'STAGE3CROSSBEAMSTRUCTURE3A': { r: { x: 0, y: 0, z: -.01 } },
            'STAGE3CROSSBEAMSTRUCTURE3B': { r: { x: 0, y: 0, z: .01 } },
            'STAGE3CROSSBEAMSTRUCTURE3C': { r: { x: 0, y: 0, z: -.01 } }
          },
          teardown: () => {
            teardownStage('STAGE3')
            window.appConfig.stages.STAGE3.data.started = false
          },
          initBackground: () => {
            const createBackgroundAnimation = () => {
              const bgGroup = new THREE.Group()
              bgGroup.name = 'STAGE3BGGROUP'
              const elementGeometry = new THREE.TetrahedronGeometry(1)
              const elementMaterials = [
                new THREE.MeshPhongMaterial({ color: stageProperties.STAGE3.backgroundColors[0], transparent: true, opacity: .25 }),
                new THREE.MeshPhongMaterial({ color: stageProperties.STAGE3.backgroundColors[1], transparent: true, opacity: .25 }),
                new THREE.MeshPhongMaterial({ color: stageProperties.STAGE3.backgroundColors[2], transparent: true, opacity: .25 }),
                new THREE.MeshPhongMaterial({ color: stageProperties.STAGE3.backgroundColors[3], transparent: true, opacity: .25 }),
              ]

              const numberOfElements = 50
              let elementI = 0
              for (elementI; elementI < numberOfElements; elementI++) {
                bgGroup.add(new THREE.Mesh(elementGeometry, elementMaterials[elementI % elementMaterials.length]))
              }
              scene.add(bgGroup)
              bgGroup.position.set(0, 0, -10)
              bgGroup.children.forEach(c => {
                c.position.set(Math.random() * 200 - 100, Math.random() * 200 - 100, -20 + Math.random() * -30)
                const bgElementScale = 1 + Math.random() * 10
                c.scale.set(bgElementScale, bgElementScale, bgElementScale)
                c.rotation.z = (Math.random() * 2) * Math.PI
              })
              bgGroup.activeCallback = () => {
                if (bgGroup) {
                  bgGroup.children.forEach((c, ci) => {
                    c.position.y += .005 * ci / 2
                    c.rotation.y += .005
                    if (c.position.y > 125) {
                      c.position.y = -125
                    }
                  })
                }
              }
              bgGroup.activeCallback()
              window.appConfig.stages['STAGE3'].bgGroupActiveCallback = bgGroup.activeCallback
            }

            createBackgroundAnimation()
          },
          init: () => {
            const createStage0MainBeamStructure = window.appConfig.stages.components.createStage0MainBeamStructure
            const createStage1MinorBeamStructure = window.appConfig.stages.components.createStage1MinorBeamStructure
            const createStage3CrossBeamStructure = window.appConfig.stages.components.createStage3CrossBeamStructure

            // portal
            window.appConfig.timers.activeTimers.push(
              window.appConfig.timers.addPortalToStage({ x: -148.75, y: 25, z: -5 }, 'GEM_STAGE_END_00', { x: 0, y: 0, z: 0 },
                window.appConfig.stages.components.gemPortalConfig())
            )

            window.appConfig.timers.activeTimers.push(
              window.appConfig.timers.addPortalToStage({ x: 148.75, y: 25, z: -5 }, window.appConfig.currentStage + '_SAPPHIRE_00', { x: 0, y: 300, z: 0 },
                window.appConfig.stages.components.sapphirePortalConfig())
            )

            const createStage3Portals = () => {
              window.appConfig.stages.components.createDiamond({ x: 10, y: -17.5, z: -2.5 }, false, 'GEM_STAGE_END_00')
              window.appConfig.stages.components.createEmerald({ x: 6.5, y: -24, z: -2.5 }, false, 'GEM_STAGE_END_00')
              window.appConfig.stages.components.createRuby({ x: 13, y: -24, z: -2.5 }, false, 'GEM_STAGE_END_00')

              let ellipseGeometry = new THREE.CircleGeometry(4.125, 5)
              ellipseGeometry.rotateZ((2 * Math.PI) / 20)

              let i = 1;
              for (i; i < ellipseGeometry.vertices.length; i++) {
                window.appConfig.stages.components.createSapphire({ x: ellipseGeometry.vertices[i].x, y: ellipseGeometry.vertices[i].y, z: 0 }, false, false, '_SAPPHIRE_00')
              }
            }

            window.appConfig.stages.components.setUpPortalIndicators(createStage3Portals)

            window.appConfig.stages.components.createBumper("STAGE3BUMPER1", 1, { x: -147.5, y: -5, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE3BUMPER1", 1, { x: -10, y: 90, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE3BUMPER_0", 1, { x: -147.5, y: 55, z: 0 }, 6)

            window.appConfig.stages.components.createBumper("STAGE3BUMPER1_0", 1, { x: 147.5, y: -5, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE3BUMPER1_0", 1, { x: 10, y: 90, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE3BUMPER_0_0", 1, { x: 147.5, y: 55, z: 0 }, 6)

            window.appConfig.stages.components.createBumper("STAGE3BUMPER0_1", 1, { x: 45, y: 147.5, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE3BUMPER_0_1", 1, { x: -45, y: 147.5, z: 0 }, 6)


            const stage3MainBeamStructure = createStage0MainBeamStructure(
              6,
              -0.85,
              "STAGE3MAINSTRUCTURE",
              { x: 0, y: 0 }
            );
            scene.add(stage3MainBeamStructure);

            const stage3MainBeamStructureA = createStage0MainBeamStructure(
              6,
              -0.85,
              "STAGE3MAINSTRUCTUREA",
              { x: 0, y: 0 }
            );
            stage3MainBeamStructureA.rotation.z = .25 * Math.PI
            scene.add(stage3MainBeamStructureA);

            const stage3MainBeamStructureB = createStage0MainBeamStructure(
              9,
              -0.85,
              "STAGE3MAINSTRUCTUREB",
              { x: 0, y: 0 }
            );
            scene.add(stage3MainBeamStructureB);

            const stage3MainBeamStructureC = createStage0MainBeamStructure(
              9,
              -0.85,
              "STAGE3MAINSTRUCTUREC",
              { x: 0, y: 0 }
            );
            stage3MainBeamStructureC.rotation.z = .25 * Math.PI
            scene.add(stage3MainBeamStructureC);

            const stage3MainBeamStructureD = createStage0MainBeamStructure(
              7.5,
              -0.85,
              "STAGE3MAINSTRUCTURED",
              { x: 0, y: 0 }
            );
            scene.add(stage3MainBeamStructureD);

            const stage3MainBeamStructureE = createStage0MainBeamStructure(
              7.5,
              -0.85,
              "STAGE3MAINSTRUCTUREE",
              { x: 0, y: 0 }
            );
            stage3MainBeamStructureE.rotation.z = .25 * Math.PI
            scene.add(stage3MainBeamStructureE);

            const stage3MainBeamStructureF = createStage0MainBeamStructure(
              1,
              -.5,
              "STAGE3MAINSTRUCTUREF",
              { x: 0, y: 0 }
            );
            stage3MainBeamStructureF.rotation.z = .25 * Math.PI
            scene.add(stage3MainBeamStructureF);

            const stage3MainBeamStructure1 = window.appConfig.stages.components.createStage0MainBeamStructure(
              9,
              0.02,
              "STAGE3MAINSTRUCTURE1",
              { x: 0, y: 32 },
              [1, 1, 0, 0]
            );
            stage3MainBeamStructure1.rotation.z = .25 * Math.PI
            scene.add(stage3MainBeamStructure1);

            const stage3MainBeamStructure1A = window.appConfig.stages.components.createStage0MainBeamStructure(
              12,
              0,
              "STAGE3MAINSTRUCTURE1A",
              { x: 0, y: 23 },
              [0, 0, 1, 1]
            );
            stage3MainBeamStructure1A.rotation.z = .25 * Math.PI
            scene.add(stage3MainBeamStructure1A);

            const stage3MainBeamStructure1A_0 = window.appConfig.stages.components.createStage0MainBeamStructure(
              14,
              0.1,
              "STAGE3MAINSTRUCTURE1A_0",
              { x: 0, y: 23 },
              [0, 0, 1, 1]
            );
            stage3MainBeamStructure1A_0.rotation.z = .25 * Math.PI
            scene.add(stage3MainBeamStructure1A_0);

            const stage3MainBeamStructure1A_1 = window.appConfig.stages.components.createStage0MainBeamStructure(
              14,
              0.1,
              "STAGE3MAINSTRUCTURE1A_1",
              { x: 0, y: 50 },
              [1, 1, 0, 0]
            );
            stage3MainBeamStructure1A_1.rotation.z = .25 * Math.PI
            scene.add(stage3MainBeamStructure1A_1);


            const stage3MainBeamStructureCircle0 = window.appConfig.stages.components.createStage0MainBeamStructure(
              20,
              -.3525,
              "STAGE3MAINSTRUCTURECIRCLE0",
              { x: 0, y: 25 }
            );
            scene.add(stage3MainBeamStructureCircle0)

            const stage3MainBeamStructureCircle1 = window.appConfig.stages.components.createStage0MainBeamStructure(
              20,
              -.3525,
              "STAGE3MAINSTRUCTURECIRCLE1",
              { x: 0, y: 25 }
            );
            stage3MainBeamStructureCircle1.rotation.z = .25 * Math.PI
            scene.add(stage3MainBeamStructureCircle1)


            window.appConfig.stages.components.createRemoteSwitch({
              transmitter: {
                p: { x: 55, y: 55, z: 0 }
              },
              receiver: {
                p: { x: -85, y: 9, z: 0 },
                name: 'STAGE3RECEIVER_A'
              }
            })

            window.appConfig.stages.components.createSwitchBeamWall({ s: 4.8, dir: 'y', p: { x: -85, y: 9, z: 0 }, receiver: { name: 'STAGE3RECEIVER_A' }, switchBeamAdj: 0 })

            const stage3MainBeamStructure2 = window.appConfig.stages.components.createStage0MainBeamStructure(
              3,
              0.5,
              "STAGE3MAINSTRUCTURE2",
              { x: -110, y: 25 },
              [0, 0, 1, 0]
            )
            scene.add(stage3MainBeamStructure2)

            window.appConfig.stages.components.createRemoteSwitch({
              transmitter: {
                p: { x: -55, y: 55, z: 0 }
              },
              receiver: {
                p: { x: 85, y: 9, z: 0 },
                name: 'STAGE3RECEIVER_B'
              }
            })

            window.appConfig.stages.components.createSwitchBeamWall({ s: 4.8, dir: 'y', p: { x: 85, y: 9, z: 0 }, receiver: { name: 'STAGE3RECEIVER_B' }, switchBeamAdj: 0 })

            const stage3MainBeamStructure3 = window.appConfig.stages.components.createStage0MainBeamStructure(
              3,
              0.5,
              "STAGE3MAINSTRUCTURE3",
              { x: 110, y: 25 },
              [0, 1, 0, 0]
            )
            scene.add(stage3MainBeamStructure3)

            const stage3MainBeamStructure4 = window.appConfig.stages.components.createStage0MainBeamStructure(
              3,
              0.5,
              "STAGE3MAINSTRUCTURE4",
              { x: 0, y: 135 },
              [1, 1, 0, 0]
            )
            stage3MainBeamStructure4.rotation.z = .25 * Math.PI
            scene.add(stage3MainBeamStructure4)

            const stage3MainBeamStructure5 = window.appConfig.stages.components.createStage0MainBeamStructure(
              4.55,
              -.56,
              "STAGE3MAINSTRUCTURE5",
              { x: 0, y: 151.5 },
              [0, 0, 1, 1]
            )
            stage3MainBeamStructure5.rotation.z = .25 * Math.PI
            scene.add(stage3MainBeamStructure5)

            window.appConfig.stages.components.createRemoteSwitch({
              transmitter: {
                p: { x: 0, y: -100, z: 0 }
              },
              receiver: {
                p: { x: 0, y: 125, z: 0 },
                name: 'STAGE3RECEIVER_C'
              }
            })
            const stage3SwitchBeam3 = window.appConfig.stages.components.createBeam({
              p: [0, 117, 0],
              r: [0, 0, 0],
              s: 3.1,
              switchBeam: {
                switchIndicators: 1,
                color: window.appConfig.stages[window.appConfig.currentStage].backgroundColors[3],
                receiver: { name: "STAGE3RECEIVER_C" }
              }
            })
            scene.add(stage3SwitchBeam3)


            window.appConfig.stages.components.createSapphire({ x: 0, y: -100, z: 0 })
            window.appConfig.stages.components.createSapphire({ x: 0, y: 100, z: 0 })
            window.appConfig.stages.components.createSapphire({ x: -100, y: 0, z: 0 })
            window.appConfig.stages.components.createSapphire({ x: 100, y: 0, z: 0 })
            window.appConfig.stages.components.createSapphire({ x: 100, y: 100, z: 0 })
            window.appConfig.stages.components.createRuby({ x: -110, y: 23.75, z: 0 })
            window.appConfig.stages.components.createEmerald({ x: 109.5, y: 23.75, z: 0 })
            window.appConfig.stages.components.createBlueIsland()

            createCrystalCircle('STAGE3', 2.75, { x: 0, y: 140 }, 0, 8)
            createCrystalCircle('STAGE3', 3.125, { x: 0, y: 140 }, 1, 8)
            createCrystalCircle('STAGE3', 3.5, { x: 0, y: 140 }, 2, 8)

            window.appConfig.stages.components.createDiamond({ x: 0, y: 139, z: 0 })

            const stage3CrossBeamStructure1 = createStage3CrossBeamStructure(
              .5,
              .75,
              "STAGE3CROSSBEAMSTRUCTURE1",
              { x: 0, y: -115 }
            );
            scene.add(stage3CrossBeamStructure1);

            const stage3CrossBeamStructure1A = createStage3CrossBeamStructure(
              .5,
              .75,
              "STAGE3CROSSBEAMSTRUCTURE1A",
              { x: 15, y: -100 }
            );
            scene.add(stage3CrossBeamStructure1A);

            const stage3CrossBeamStructure1B = createStage3CrossBeamStructure(
              .5,
              .75,
              "STAGE3CROSSBEAMSTRUCTURE1B",
              { x: -15, y: -100 }
            );
            scene.add(stage3CrossBeamStructure1B);

            const stage3CrossBeamStructure1C = createStage3CrossBeamStructure(
              .5,
              .75,
              "STAGE3CROSSBEAMSTRUCTURE1C",
              { x: 0, y: -85 }
            );
            scene.add(stage3CrossBeamStructure1C);

            createCrystalCircle('STAGE3', 1.5, { x: 85, y: 85 }, 2, 2)
            createCrystalCircle('STAGE3', 2.5, { x: 85, y: 85 }, 1, 8)
            createCrystalCircle('STAGE3', 3, { x: 85, y: 85 }, 2, 8)
            createCrystalCircle('STAGE3', 3.5, { x: 85, y: 85 }, 1, 8)
            createCrystalCircle('STAGE3', 4, { x: 85, y: 85 }, 0, 8)

            createCrystalCircle('STAGE3', 1.5, { x: 85, y: -85 }, 2, 2)
            createCrystalCircle('STAGE3', 2.5, { x: 85, y: -85 }, 1, 8)
            createCrystalCircle('STAGE3', 3, { x: 85, y: -85 }, 2, 8)
            createCrystalCircle('STAGE3', 3.5, { x: 85, y: -85 }, 1, 8)
            createCrystalCircle('STAGE3', 4, { x: 85, y: -85 }, 0, 8)

            createCrystalCircle('STAGE3', 1.5, { x: -85, y: 85 }, 2, 2)
            createCrystalCircle('STAGE3', 2.5, { x: -85, y: 85 }, 1, 8)
            createCrystalCircle('STAGE3', 3, { x: -85, y: 85 }, 2, 8)
            createCrystalCircle('STAGE3', 3.5, { x: -85, y: 85 }, 1, 8)
            createCrystalCircle('STAGE3', 4, { x: -85, y: 85 }, 0, 8)

            createCrystalCircle('STAGE3', 1.5, { x: -85, y: -85 }, 2, 2)
            createCrystalCircle('STAGE3', 2.5, { x: -85, y: -85 }, 1, 8)
            createCrystalCircle('STAGE3', 3, { x: -85, y: -85 }, 2, 8)
            createCrystalCircle('STAGE3', 3.5, { x: -85, y: -85 }, 1, 8)
            createCrystalCircle('STAGE3', 4, { x: -85, y: -85 }, 0, 8)


            const makeCrystalCirclePatterns = (aX, aY, remove = [0, 0, 0, 0]) => {
              let currentCircleStage = window.appConfig.currentStage

              if (remove[0] === 0) {
                createCrystalCircle(currentCircleStage, 1.5, { x: aX, y: aY }, 2, 2)
                createCrystalCircle(currentCircleStage, 2.5, { x: aX, y: aY }, 1, 8)
                createCrystalCircle(currentCircleStage, 3, { x: aX, y: aY }, 2, 8)
                createCrystalCircle(currentCircleStage, 3.5, { x: aX, y: aY }, 1, 8)
                createCrystalCircle(currentCircleStage, 4, { x: aX, y: aY }, 0, 8)
              }

              if (remove[1] === 0) {
                createCrystalCircle(currentCircleStage, 1.5, { x: aX, y: -aY }, 2, 2)
                createCrystalCircle(currentCircleStage, 2.5, { x: aX, y: -aY }, 1, 8)
                createCrystalCircle(currentCircleStage, 3, { x: aX, y: -aY }, 2, 8)
                createCrystalCircle(currentCircleStage, 3.5, { x: aX, y: -aY }, 1, 8)
                createCrystalCircle(currentCircleStage, 4, { x: aX, y: -aY }, 0, 8)
              }

              if (remove[2] === 0) {
                createCrystalCircle(currentCircleStage, 1.5, { x: -aX, y: aY }, 2, 2)
                createCrystalCircle(currentCircleStage, 2.5, { x: -aX, y: aY }, 1, 8)
                createCrystalCircle(currentCircleStage, 3, { x: -aX, y: aY }, 2, 8)
                createCrystalCircle(currentCircleStage, 3.5, { x: -aX, y: aY }, 1, 8)
                createCrystalCircle(currentCircleStage, 4, { x: -aX, y: aY }, 0, 8)
              }

              if (remove[3] === 0) {
                createCrystalCircle(currentCircleStage, 1.5, { x: -aX, y: -aY }, 2, 2)
                createCrystalCircle(currentCircleStage, 2.5, { x: -aX, y: -aY }, 1, 8)
                createCrystalCircle(currentCircleStage, 3, { x: -aX, y: -aY }, 2, 8)
                createCrystalCircle(currentCircleStage, 3.5, { x: -aX, y: -aY }, 1, 8)
                createCrystalCircle(currentCircleStage, 4, { x: -aX, y: -aY }, 0, 8)
              }
            }

            makeCrystalCirclePatterns(55, 112.5)
            makeCrystalCirclePatterns(112.5, 55, [1, 0, 1, 0])

            prize(3, 2900, { x: -135, y: -30, z: 0 })
            prize(3, 2900, { x: -100, y: -25, z: 0 })
            prize(3, 2901, { x: -75, y: -50, z: 0 })
            prize(3, 2902, { x: -50, y: -75, z: 0 })

            prize(3, 903, { x: 135, y: -30, z: 0 })
            prize(3, 900, { x: 100, y: -25, z: 0 })
            prize(3, 901, { x: 75, y: -50, z: 0 })
            prize(3, 902, { x: 50, y: -75, z: 0 })

            prize(3, 9001, { x: -115, y: 70, z: 0 })
            prize(3, 9001, { x: 115, y: 70, z: 0 })

            prize(3, 0, { x: 0, y: -100, z: 0 })
            prize(3, 1, { x: -128, y: 43, z: 0 })
            prize(3, 2, { x: -128, y: 7, z: 0 })
            prize(3, 3, { x: -92, y: 7, z: 0 })
            prize(3, 4, { x: -92, y: 43, z: 0 })

            prize(3, 3, { x: -30, y: 160, z: 0 })
            prize(3, 4, { x: 30, y: 160, z: 0 })

            createCrystalCircle('STAGE3', 2, { x: -70, y: 160 }, 0, 8)
            createCrystalCircle('STAGE3', 2.5, { x: -70, y: 160 }, 1, 8)
            createCrystalCircle('STAGE3', 3, { x: -70, y: 160 }, 2, 8)

            createCrystalCircle('STAGE3', 2, { x: -100, y: 130 }, 0, 8)
            createCrystalCircle('STAGE3', 2.5, { x: -100, y: 130 }, 1, 8)
            createCrystalCircle('STAGE3', 3, { x: -100, y: 130 }, 2, 8)

            createCrystalCircle('STAGE3', 2, { x: -130, y: 100 }, 0, 8)
            createCrystalCircle('STAGE3', 2.5, { x: -130, y: 100 }, 1, 8)
            createCrystalCircle('STAGE3', 3, { x: -130, y: 100 }, 2, 8)


            createCrystalCircle('STAGE3', 2, { x: 70, y: 160 }, 0, 8)
            createCrystalCircle('STAGE3', 2.5, { x: 70, y: 160 }, 1, 8)
            createCrystalCircle('STAGE3', 3, { x: 70, y: 160 }, 2, 8)

            createCrystalCircle('STAGE3', 2, { x: 100, y: 130 }, 0, 8)
            createCrystalCircle('STAGE3', 2.5, { x: 100, y: 130 }, 1, 8)
            createCrystalCircle('STAGE3', 3, { x: 100, y: 130 }, 2, 8)

            createCrystalCircle('STAGE3', 2, { x: 130, y: 100 }, 0, 8)
            createCrystalCircle('STAGE3', 2.5, { x: 130, y: 100 }, 1, 8)
            createCrystalCircle('STAGE3', 3, { x: 130, y: 100 }, 2, 8)



            createCrystalCircle('STAGE3', 3, { x: -110, y: 25 }, 0, 8)
            createCrystalCircle('STAGE3', 3.75, { x: -110, y: 25 }, 1, 8)
            createCrystalCircle('STAGE3', 4.5, { x: -110, y: 25 }, 2, 8)

            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINA',
              position: {
                x: -110,
                y: 25,
                z: 0,
                movementSwitch: {
                  enableBelow: -40
                }
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINA')
            })

            prize(3, 5, { x: 128, y: 43, z: 0 })
            prize(3, 6, { x: 128, y: 7, z: 0 })
            prize(3, 7, { x: 92, y: 7, z: 0 })
            prize(3, 8, { x: 92, y: 43, z: 0 })
            createCrystalCircle('STAGE3', 3, { x: 110, y: 25 }, 0, 8)
            createCrystalCircle('STAGE3', 3.75, { x: 110, y: 25 }, 1, 8)
            createCrystalCircle('STAGE3', 4.5, { x: 110, y: 25 }, 2, 8)

            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINB',
              position: {
                x: 110,
                y: 25,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINB')
            })
            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINC',
              position: {
                x: 0,
                y: 150,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINC')
            })

            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOIND',
              position: {
                x: 0,
                y: 150,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOIND')
            })

            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINE',
              position: {
                x: 0,
                y: 150,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINE')
            })
            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINF',
              position: {
                x: 0,
                y: 150,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINF')
            })

            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOIN_A',
              position: {
                x: 95,
                y: 20,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOIN_A')
            })

            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOIN_B',
              position: {
                x: 98,
                y: 20,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOIN_B')
            })

            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOIN_C',
              position: {
                x: -104,
                y: 20,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOIN_C')
            })

            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOIN_D',
              position: {
                x: -100,
                y: 20,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOIN_D')
            })
            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOIN_E',
              position: {
                x: -105,
                y: 20,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOIN_E')
            })


            window.appConfig.stages.components.createBumper("STAGE3BUMPER0", 1, { x: 70, y: 50, z: 0 }, 3, 1)
            window.appConfig.stages.components.createBumper("STAGE3BUMPER1", 1, { x: -70, y: 50, z: 0 }, 3, 1)
            window.appConfig.stages.components.createBumper("STAGE3BUMPER0", 1, { x: 60, y: 60, z: 0 }, 3, 1)
            window.appConfig.stages.components.createBumper("STAGE3BUMPER1", 1, { x: -60, y: 60, z: 0 }, 3, 1)
            window.appConfig.stages.components.createBumper("STAGE3BUMPER0", 1, { x: 50, y: 70, z: 0 }, 3, 1)
            window.appConfig.stages.components.createBumper("STAGE3BUMPER1", 1, { x: -50, y: 70, z: 0 }, 3, 1)
            window.appConfig.stages.components.createBumper("STAGE3BUMPER0", 1, { x: 40, y: 80, z: 0 }, 3, 1)
            window.appConfig.stages.components.createBumper("STAGE3BUMPER1", 1, { x: -40, y: 80, z: 0 }, 3, 1)
            window.appConfig.stages.components.createBumper("STAGE3BUMPER0", 1, { x: 30, y: 90, z: 0 }, 3, 1)
            window.appConfig.stages.components.createBumper("STAGE3BUMPER1", 1, { x: -30, y: 90, z: 0 }, 3, 1)

            createCrystalCircle('STAGE3', 4, { x: 0, y: 0 }, 0, 8)
            createCrystalCircle('STAGE3', 4.5, { x: 0, y: 0 }, 1, 8)
            createCrystalCircle('STAGE3', 5, { x: 0, y: 0 }, 2, 16)
            createCrystalCircle('STAGE3', 5.5, { x: 0, y: 0 }, 1, 16)
            createCrystalCircle('STAGE3', 6, { x: 0, y: 0 }, 0, 32)
            createCrystalCircle('STAGE3', 7.375, { x: 0, y: 0 }, 0, 32)
            createCrystalCircle('STAGE3', 8.125, { x: 0, y: 0 }, 1, 48)
            createCrystalCircle('STAGE3', 8.75, { x: 0, y: 0 }, 0, 48)

            window.appConfig.stages.STAGE3.STAGE3PRIZE0 = scene.children.find((obj) => obj.name === "STAGE3PRIZE0")
            window.appConfig.stages.STAGE3.STAGE3PRIZE1 = scene.children.find((obj) => obj.name === "STAGE3PRIZE1")
            window.appConfig.stages.STAGE3.STAGE3PRIZE2 = scene.children.find((obj) => obj.name === "STAGE3PRIZE2")
            window.appConfig.stages.STAGE3.STAGE3PRIZE3 = scene.children.find((obj) => obj.name === "STAGE3PRIZE3")
            window.appConfig.stages.STAGE3.STAGE3MAINSTRUCTURE = scene.children.find((obj) => obj.name === "STAGE3MAINSTRUCTURE")
            window.appConfig.stages.STAGE3.STAGE3MAINSTRUCTUREA = scene.children.find((obj) => obj.name === "STAGE3MAINSTRUCTUREA")
            window.appConfig.stages.STAGE3.STAGE3MAINSTRUCTUREB = scene.children.find((obj) => obj.name === "STAGE3MAINSTRUCTUREB")
            window.appConfig.stages.STAGE3.STAGE3MAINSTRUCTUREC = scene.children.find((obj) => obj.name === "STAGE3MAINSTRUCTUREC")
            window.appConfig.stages.STAGE3.STAGE3MAINSTRUCTURED = scene.children.find((obj) => obj.name === "STAGE3MAINSTRUCTURED")
            window.appConfig.stages.STAGE3.STAGE3MAINSTRUCTUREE = scene.children.find((obj) => obj.name === "STAGE3MAINSTRUCTUREE")
            window.appConfig.stages.STAGE3.STAGE3CROSSBEAMSTRUCTURE = scene.children.find((obj) => obj.name === "STAGE3CROSSBEAMSTRUCTURE")
            window.appConfig.stages.STAGE3.STAGE3CROSSBEAMSTRUCTUREA = scene.children.find((obj) => obj.name === "STAGE3CROSSBEAMSTRUCTUREA")
            window.appConfig.stages.STAGE3.STAGE3CROSSBEAMSTRUCTUREB = scene.children.find((obj) => obj.name === "STAGE3CROSSBEAMSTRUCTUREB")
            window.appConfig.stages.STAGE3.STAGE3CROSSBEAMSTRUCTUREC = scene.children.find((obj) => obj.name === "STAGE3CROSSBEAMSTRUCTUREC")
            window.appConfig.stages.STAGE3.STAGE3CROSSBEAMSTRUCTURE1 = scene.children.find((obj) => obj.name === "STAGE3CROSSBEAMSTRUCTURE1")
            window.appConfig.stages.STAGE3.STAGE3CROSSBEAMSTRUCTURE1A = scene.children.find((obj) => obj.name === "STAGE3CROSSBEAMSTRUCTURE1A")
            window.appConfig.stages.STAGE3.STAGE3CROSSBEAMSTRUCTURE1B = scene.children.find((obj) => obj.name === "STAGE3CROSSBEAMSTRUCTURE1B")
            window.appConfig.stages.STAGE3.STAGE3CROSSBEAMSTRUCTURE1C = scene.children.find((obj) => obj.name === "STAGE3CROSSBEAMSTRUCTURE1C")

            window.appConfig.stages.STAGE3.STAGE3CROSSBEAMSTRUCTURE2 = scene.children.find((obj) => obj.name === "STAGE3CROSSBEAMSTRUCTURE2")
            window.appConfig.stages.STAGE3.STAGE3CROSSBEAMSTRUCTURE2A = scene.children.find((obj) => obj.name === "STAGE3CROSSBEAMSTRUCTURE2A")
            window.appConfig.stages.STAGE3.STAGE3CROSSBEAMSTRUCTURE2B = scene.children.find((obj) => obj.name === "STAGE3CROSSBEAMSTRUCTURE2B")
            window.appConfig.stages.STAGE3.STAGE3CROSSBEAMSTRUCTURE2C = scene.children.find((obj) => obj.name === "STAGE3CROSSBEAMSTRUCTURE2C")
            window.appConfig.stages.STAGE3.STAGE3CROSSBEAMSTRUCTURE3 = scene.children.find((obj) => obj.name === "STAGE3CROSSBEAMSTRUCTURE3")
            window.appConfig.stages.STAGE3.STAGE3CROSSBEAMSTRUCTURE3A = scene.children.find((obj) => obj.name === "STAGE3CROSSBEAMSTRUCTURE3A")
            window.appConfig.stages.STAGE3.STAGE3CROSSBEAMSTRUCTURE3B = scene.children.find((obj) => obj.name === "STAGE3CROSSBEAMSTRUCTURE3B")
            window.appConfig.stages.STAGE3.STAGE3CROSSBEAMSTRUCTURE3C = scene.children.find((obj) => obj.name === "STAGE3CROSSBEAMSTRUCTURE3C")

            window.appConfig.stages.STAGE3.data.started = true
          }
        },
        STAGE4: {
          data: {
            started: false,
            xAdj: -60,
            vAdj: -70,
            sAdj: 2,
            startingPosition: window.appConfig.originVector,
            sapphirePortalPosition: { x: 120, y: 0, z: -5 }
          },
          number: stageProperties.STAGE4.number,
          backgroundColors: stageProperties.STAGE4.backgroundColors,
          basicColors: stageProperties.STAGE4.basicColors,
          sounds: stageProperties.STAGE4.sounds,
          name: stageProperties.STAGE4.name,
          defaultTransforms: [
            'STAGE4PRIZE0',
            'STAGE4PRIZE1',
            'STAGE4PRIZE2',
            'STAGE4PRIZE3',
            'STAGE4MAINSTRUCTURE1',
            'STAGE4MAINSTRUCTURE2',
            'STAGE4CROSSBEAMSTRUCTURE',
            'STAGE4CROSSBEAMSTRUCTUREA',
            'STAGE4CROSSBEAMSTRUCTUREB',
            'STAGE4CROSSBEAMSTRUCTUREC',
            'STAGE4CROSSBEAMSTRUCTURED',
            'STAGE4MAINSTRUCTURE3',
            'STAGE4MAINSTRUCTURE4',
            'STAGE4CROSSBEAMSTRUCTURE1',
            'STAGE4CROSSBEAMSTRUCTURE1A',
            'STAGE4CROSSBEAMSTRUCTURE1B',
            'STAGE4CROSSBEAMSTRUCTURE1C',
            'STAGE4CROSSBEAMSTRUCTURE1D',
            'STAGE4MAINSTRUCTURE5',
            'STAGE4MAINSTRUCTURE6',
            'STAGE4CROSSBEAMSTRUCTURE2',
            'STAGE4CROSSBEAMSTRUCTURE2A',
            'STAGE4CROSSBEAMSTRUCTURE2B',
            'STAGE4CROSSBEAMSTRUCTURE2C',
            'STAGE4CROSSBEAMSTRUCTURE2D',
            'STAGE4MAINSTRUCTURE7',
            'STAGE4MAINSTRUCTURE8',
            'STAGE4CROSSBEAMSTRUCTURE3',
            'STAGE4CROSSBEAMSTRUCTURE3A',
            'STAGE4CROSSBEAMSTRUCTURE3B',
            'STAGE4CROSSBEAMSTRUCTURE3C',
            'STAGE4CROSSBEAMSTRUCTURE3D'
          ],
          transforms: {
            'STAGE4PRIZE0': { r: { x: .005, y: .005, z: .005 } },
            'STAGE4PRIZE1': { r: { x: .005, y: .005, z: .005 } },
            'STAGE4PRIZE2': { r: { x: .005, y: .005, z: .005 } },
            'STAGE4PRIZE3': { r: { x: .005, y: .005, z: .005 } },
            'STAGE4MAINSTRUCTURE1': { r: { x: 0, y: 0, z: -.005 } },//
            'STAGE4MAINSTRUCTURE2': { r: { x: 0, y: 0, z: .005 } },//
            'STAGE4CROSSBEAMSTRUCTURE': { r: { x: 0, y: 0, z: .01 } },//
            'STAGE4CROSSBEAMSTRUCTUREA': { r: { x: 0, y: 0, z: -.01 } },//
            'STAGE4CROSSBEAMSTRUCTUREB': { r: { x: 0, y: 0, z: .01 } },//
            'STAGE4CROSSBEAMSTRUCTUREC': { r: { x: 0, y: 0, z: -.01 } },//
            'STAGE4CROSSBEAMSTRUCTURED': { r: { x: 0, y: 0, z: .01 } },//
            'STAGE4MAINSTRUCTURE3': { r: { x: 0, y: 0, z: -.005 } },//
            'STAGE4MAINSTRUCTURE4': { r: { x: 0, y: 0, z: .005 } },//
            'STAGE4CROSSBEAMSTRUCTURE1': { r: { x: 0, y: 0, z: .01 } },//
            'STAGE4CROSSBEAMSTRUCTURE1A': { r: { x: 0, y: 0, z: -.01 } },//
            'STAGE4CROSSBEAMSTRUCTURE1B': { r: { x: 0, y: 0, z: .01 } },//
            'STAGE4CROSSBEAMSTRUCTURE1C': { r: { x: 0, y: 0, z: -.01 } },//
            'STAGE4CROSSBEAMSTRUCTURE1D': { r: { x: 0, y: 0, z: .01 } },//
            'STAGE4MAINSTRUCTURE5': { r: { x: 0, y: 0, z: -.005 } },//
            'STAGE4MAINSTRUCTURE6': { r: { x: 0, y: 0, z: .005 } },//
            'STAGE4CROSSBEAMSTRUCTURE2': { r: { x: 0, y: 0, z: .01 } },//
            'STAGE4CROSSBEAMSTRUCTURE2A': { r: { x: 0, y: 0, z: -.01 } },//
            'STAGE4CROSSBEAMSTRUCTURE2B': { r: { x: 0, y: 0, z: .01 } },//
            'STAGE4CROSSBEAMSTRUCTURE2C': { r: { x: 0, y: 0, z: -.01 } },//
            'STAGE4CROSSBEAMSTRUCTURE2D': { r: { x: 0, y: 0, z: .01 } },//
            'STAGE4MAINSTRUCTURE7': { r: { x: 0, y: 0, z: -.005 } },//
            'STAGE4MAINSTRUCTURE8': { r: { x: 0, y: 0, z: .005 } },//
            'STAGE4CROSSBEAMSTRUCTURE3': { r: { x: 0, y: 0, z: .01 } },//
            'STAGE4CROSSBEAMSTRUCTURE3A': { r: { x: 0, y: 0, z: -.01 } },//
            'STAGE4CROSSBEAMSTRUCTURE3B': { r: { x: 0, y: 0, z: .01 } },//
            'STAGE4CROSSBEAMSTRUCTURE3C': { r: { x: 0, y: 0, z: -.01 } },//
            'STAGE4CROSSBEAMSTRUCTURE3D': { r: { x: 0, y: 0, z: .01 } }//

          },
          teardown: () => {
            teardownStage('STAGE4')
            window.appConfig.stages.STAGE4.data.started = false
          },
          initBackground: () => {
            const createBackgroundAnimation = () => {
              const bgGroup = new THREE.Group()
              bgGroup.name = 'STAGE4BGGROUP'
              const elementGeometry = new THREE.TetrahedronGeometry(3)
              const elementMaterials = [
                new THREE.MeshPhongMaterial({ color: stageProperties.STAGE4.backgroundColors[0], transparent: true, opacity: .25 }),
                new THREE.MeshPhongMaterial({ color: stageProperties.STAGE4.backgroundColors[1], transparent: true, opacity: .25 }),
                new THREE.MeshPhongMaterial({ color: stageProperties.STAGE4.backgroundColors[2], transparent: true, opacity: .25 }),
                new THREE.MeshPhongMaterial({ color: stageProperties.STAGE4.backgroundColors[3], transparent: true, opacity: .25 }),
              ]

              const numberOfElements = 50
              let elementI = 0
              for (elementI; elementI < numberOfElements; elementI++) {
                bgGroup.add(new THREE.Mesh(elementGeometry, elementMaterials[elementI % elementMaterials.length]))
              }
              scene.add(bgGroup)
              bgGroup.position.set(0, 0, -10)
              bgGroup.children.forEach(c => {
                c.position.set(Math.random() * 200 - 100, Math.random() * 200 - 100, -20 + Math.random() * -30)
                const bgElementScale = 1 + Math.random() * 10
                c.scale.set(bgElementScale, bgElementScale, bgElementScale)
                c.rotation.z = (Math.random() * 2) * Math.PI
              })
              bgGroup.activeCallback = () => {
                if (bgGroup) {
                  bgGroup.children.forEach((c, ci) => {
                    c.position.y += .005 * ci / 2
                    c.rotation.y += .005
                    if (c.position.y > 125) {
                      c.position.y = -125
                    }
                  })
                }
              }
              bgGroup.activeCallback()
              window.appConfig.stages['STAGE4'].bgGroupActiveCallback = bgGroup.activeCallback
            }

            createBackgroundAnimation()
          },
          init: () => {
            const createStage0MainBeamStructure = window.appConfig.stages.components.createStage0MainBeamStructure
            const createStage1MinorBeamStructure = window.appConfig.stages.components.createStage1MinorBeamStructure
            const createStage3CrossBeamStructure = window.appConfig.stages.components.createStage3CrossBeamStructure
            const createStage4PlinkoStructure = window.appConfig.stages.components.createStage4PlinkoStructure

            const createSwitchBeamWall = window.appConfig.stages.components.createSwitchBeamWall
            const createRemoteSwitch = window.appConfig.stages.components.createRemoteSwitch
            const createSingleSwitchBeam = window.appConfig.stages.components.createSingleSwitchBeam

            const stage4MainBeamStructure1 = createStage0MainBeamStructure(
              1.25,
              -0.5,
              "STAGE4MAINSTRUCTURE1",
              { x: 0, y: 75 }
            );
            scene.add(stage4MainBeamStructure1);

            const stage4MainBeamStructure2 = createStage0MainBeamStructure(
              .75,
              -0.5,
              "STAGE4MAINSTRUCTURE2",
              { x: 0, y: 75 }
            );
            scene.add(stage4MainBeamStructure2);

            const stage4CrossBeamStructure = createStage3CrossBeamStructure(
              .5,
              .75,
              "STAGE4CROSSBEAMSTRUCTURE",
              { x: 0, y: 25 }
            );
            scene.add(stage4CrossBeamStructure);

            const stage4CrossBeamStructureA = createStage3CrossBeamStructure(
              .5,
              .75,
              "STAGE4CROSSBEAMSTRUCTUREA",
              { x: -15, y: 30 }
            );
            scene.add(stage4CrossBeamStructureA);

            const stage4CrossBeamStructureB = createStage3CrossBeamStructure(
              .5,
              .75,
              "STAGE4CROSSBEAMSTRUCTUREB",
              { x: 15, y: 30 }
            );
            scene.add(stage4CrossBeamStructureB);

            const stage4CrossBeamStructureC = createStage3CrossBeamStructure(
              .5,
              .75,
              "STAGE4CROSSBEAMSTRUCTUREC",
              { x: -30, y: 40 }
            );
            scene.add(stage4CrossBeamStructureC);

            const stage4CrossBeamStructureD = createStage3CrossBeamStructure(
              .5,
              .75,
              "STAGE4CROSSBEAMSTRUCTURED",
              { x: 30, y: 40 }
            );
            scene.add(stage4CrossBeamStructureD);

            const stage4MainBeamStructure3 = createStage0MainBeamStructure(
              1.25,
              -0.5,
              "STAGE4MAINSTRUCTURE3",
              { x: 0, y: -75 }
            );
            scene.add(stage4MainBeamStructure3);

            const stage4MainBeamStructure4 = createStage0MainBeamStructure(
              .75,
              -0.5,
              "STAGE4MAINSTRUCTURE4",
              { x: 0, y: -75 }
            );
            scene.add(stage4MainBeamStructure4);

            const stage4CrossBeamStructure1 = createStage3CrossBeamStructure(
              .5,
              .75,
              "STAGE4CROSSBEAMSTRUCTURE1",
              { x: 0, y: -25 }
            );
            scene.add(stage4CrossBeamStructure1);

            const stage4CrossBeamStructure1A = createStage3CrossBeamStructure(
              .5,
              .75,
              "STAGE4CROSSBEAMSTRUCTURE1A",
              { x: -15, y: -30 }
            );
            scene.add(stage4CrossBeamStructure1A);

            const stage4CrossBeamStructure1B = createStage3CrossBeamStructure(
              .5,
              .75,
              "STAGE4CROSSBEAMSTRUCTURE1B",
              { x: 15, y: -30 }
            );
            scene.add(stage4CrossBeamStructure1B);

            const stage4CrossBeamStructure1C = createStage3CrossBeamStructure(
              .5,
              .75,
              "STAGE4CROSSBEAMSTRUCTURE1C",
              { x: -30, y: -40 }
            );
            scene.add(stage4CrossBeamStructure1C);

            const stage4CrossBeamStructure1D = createStage3CrossBeamStructure(
              .5,
              .75,
              "STAGE4CROSSBEAMSTRUCTURE1D",
              { x: 30, y: -40 }
            );
            scene.add(stage4CrossBeamStructure1D);

            const stage4MainBeamStructure5 = createStage0MainBeamStructure(
              1.25,
              -0.5,
              "STAGE4MAINSTRUCTURE5",
              { x: -75, y: 0 }
            );
            scene.add(stage4MainBeamStructure5);

            const stage4MainBeamStructure6 = createStage0MainBeamStructure(
              .75,
              -0.5,
              "STAGE4MAINSTRUCTURE6",
              { x: -75, y: 0 }
            );
            scene.add(stage4MainBeamStructure6);

            const stage4CrossBeamStructure2 = createStage3CrossBeamStructure(
              .5,
              .75,
              "STAGE4CROSSBEAMSTRUCTURE2",
              { x: -25, y: 0 }
            );
            scene.add(stage4CrossBeamStructure2);

            const stage4CrossBeamStructure2A = createStage3CrossBeamStructure(
              .5,
              .75,
              "STAGE4CROSSBEAMSTRUCTURE2A",
              { x: -30, y: -15 }
            );
            scene.add(stage4CrossBeamStructure2A);

            const stage4CrossBeamStructure2B = createStage3CrossBeamStructure(
              .5,
              .75,
              "STAGE4CROSSBEAMSTRUCTURE2B",
              { x: -30, y: 15 }
            );
            scene.add(stage4CrossBeamStructure2B);

            const stage4CrossBeamStructure2C = createStage3CrossBeamStructure(
              .5,
              .75,
              "STAGE4CROSSBEAMSTRUCTURE2C",
              { x: -40, y: -30 }
            );
            scene.add(stage4CrossBeamStructure2C);

            const stage4CrossBeamStructure2D = createStage3CrossBeamStructure(
              .5,
              .75,
              "STAGE4CROSSBEAMSTRUCTURE2D",
              { x: -40, y: 30 }
            );
            scene.add(stage4CrossBeamStructure2D);

            const stage4MainBeamStructure7 = createStage0MainBeamStructure(
              1.25,
              -0.5,
              "STAGE4MAINSTRUCTURE7",
              { x: 75, y: 0 }
            );
            scene.add(stage4MainBeamStructure7);

            const stage4MainBeamStructure8 = createStage0MainBeamStructure(
              .75,
              -0.5,
              "STAGE4MAINSTRUCTURE8",
              { x: 75, y: 0 }
            );
            scene.add(stage4MainBeamStructure8);

            const stage4CrossBeamStructure3 = createStage3CrossBeamStructure(
              .5,
              .75,
              "STAGE4CROSSBEAMSTRUCTURE3",
              { x: 25, y: 0 }
            );
            scene.add(stage4CrossBeamStructure3);

            const stage4CrossBeamStructure3A = createStage3CrossBeamStructure(
              .5,
              .75,
              "STAGE4CROSSBEAMSTRUCTURE3A",
              { x: 30, y: -15 }
            );
            scene.add(stage4CrossBeamStructure3A);

            const stage4CrossBeamStructure3B = createStage3CrossBeamStructure(
              .5,
              .75,
              "STAGE4CROSSBEAMSTRUCTURE3B",
              { x: 30, y: 15 }
            );
            scene.add(stage4CrossBeamStructure3B);

            const stage4CrossBeamStructure3C = createStage3CrossBeamStructure(
              .5,
              .75,
              "STAGE4CROSSBEAMSTRUCTURE3C",
              { x: 40, y: -30 }
            );
            scene.add(stage4CrossBeamStructure3C);

            const stage4CrossBeamStructure3D = createStage3CrossBeamStructure(
              .5,
              .75,
              "STAGE4CROSSBEAMSTRUCTURE3D",
              { x: 40, y: 30 }
            );
            scene.add(stage4CrossBeamStructure3D);



            const stage4PlinkoStructure = createStage4PlinkoStructure(
              3,
              4,
              -.95,
              "STAGE4PLINKOSTRUCTURE",
              { x: 55, y: 35 },
              4,
              5
            );
            stage4PlinkoStructure.rotation.z = .25 * Math.PI
            scene.add(stage4PlinkoStructure);


            const stage4PlinkoStructureA = createStage4PlinkoStructure(
              3,
              4,
              -.95,
              "STAGE4PLINKOSTRUCTUREA",
              { x: -67.5, y: 57.5 },
              4,
              5
            );
            stage4PlinkoStructureA.rotation.z = -.25 * Math.PI
            scene.add(stage4PlinkoStructureA);

            const stage4PlinkoStructureB = createStage4PlinkoStructure(
              3,
              4,
              -.95,
              "STAGE4PLINKOSTRUCTUREB",
              { x: 37.5, y: -52.5 },
              4,
              5
            );
            stage4PlinkoStructureB.rotation.z = -.25 * Math.PI
            scene.add(stage4PlinkoStructureB);

            const stage4PlinkoStructureC = createStage4PlinkoStructure(
              3,
              4,
              -.95,
              "STAGE4PLINKOSTRUCTUREC",
              { x: -57.5, y: -67.5 },
              4,
              5
            );
            stage4PlinkoStructureC.rotation.z = .25 * Math.PI
            scene.add(stage4PlinkoStructureC);


            const stage4MainBeamStructure = window.appConfig.stages.components.createStage0MainBeamStructure(
              13,
              -.3,
              "STAGE4MAINSTRUCTURE"
            );
            stage4MainBeamStructure.rotation.z = .25 * Math.PI
            scene.add(stage4MainBeamStructure);

            const stage4MainBeamStructure_1 = window.appConfig.stages.components.createStage0MainBeamStructure(
              16,
              0.57,
              "STAGE4MAINSTRUCTURE_1"
            );
            scene.add(stage4MainBeamStructure_1);


            const stage4MainBeamStructure_2 = window.appConfig.stages.components.createStage0MainBeamStructure(
              6.3,
              0,
              "STAGE4MAINSTRUCTURE_2",
              { x: -58.5, y: 73.5 },
              [1, 0, 1, 1]
            );

            scene.add(stage4MainBeamStructure_2);

            const stage4MainBeamStructure_3 = window.appConfig.stages.components.createStage0MainBeamStructure(
              6.3,
              0,
              "STAGE4MAINSTRUCTURE_3",
              { x: 75, y: 58.5 },
              [1, 1, 1, 0]
            );

            scene.add(stage4MainBeamStructure_3);


            createRemoteSwitch({
              transmitter: {
                p: { x: 76, y: 0, z: 0 }
              },
              receiver: {
                p: { x: -55, y: -20, z: 0 },
                name: 'STAGE4RECEIVER_B'
              }
            })

            createSwitchBeamWall({ s: 6.75, dir: 'y', p: { x: 108.5, y: 52, z: 0 }, receiver: { name: 'STAGE4RECEIVER_B' }, switchBeamAdj: .25 })


            createRemoteSwitch({
              transmitter: {
                p: { x: 0, y: 76, z: 0 }
              },
              receiver: {
                p: { x: -55, y: -20, z: 0 },
                name: 'STAGE4RECEIVER_Q'
              }
            })

            createSwitchBeamWall({ s: 6.75, dir: 'x', p: { x: -97.5, y: 108, z: 0 }, receiver: { name: 'STAGE4RECEIVER_Q' }, switchBeamAdj: .25 })



            const stage4MainBeamStructure_4 = window.appConfig.stages.components.createStage0MainBeamStructure(
              6.3,
              0,
              "STAGE4MAINSTRUCTURE_4",
              { x: 58.5, y: -73.5 },
              [1, 1, 0, 1]
            );
            scene.add(stage4MainBeamStructure_4);


            createRemoteSwitch({
              transmitter: {
                p: { x: 0, y: -76, z: 0 }
              },
              receiver: {
                p: { x: -55, y: -20, z: 0 },
                name: 'STAGE4RECEIVER_C'
              }
            })

            createSwitchBeamWall({ s: 6.75, dir: 'x', p: { x: 53, y: -108.5, z: 0 }, receiver: { name: 'STAGE4RECEIVER_C' }, switchBeamAdj: .25 })

            const bottomLeftDoorTop = createSingleSwitchBeam({ s: 5.5, dir: 'x', p: { x: -122.5, y: -41.25, z: 0 }, switchBeamAdj: .25 })
            const bottomLeftDoorBottom = createSingleSwitchBeam({ s: 5.5, dir: 'y', p: { x: -41.25, y: -122.5, z: 0 }, switchBeamAdj: .25 })
            scene.add(bottomLeftDoorTop)
            scene.add(bottomLeftDoorBottom)

            window.appConfig.stages.components.createBumper("STAGE4BUMPER0", 1, { x: -115, y: 25, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE4BUMPER1", 1, { x: -115, y: -25, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE4BUMPER2", 1, { x: 115, y: 25, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE4BUMPER3", 1, { x: 115, y: -25, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE4BUMPER4", 1, { x: 25, y: 115, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE4BUMPER5", 1, { x: 25, y: -115, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE4BUMPER6", 1, { x: -25, y: -115, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE4BUMPER7", 1, { x: -25, y: 115, z: 0 }, 6)

            createCrystalCircle('STAGE4', 4.5, { x: -95, y: -95 }, 0, 16)
            createCrystalCircle('STAGE4', 4.25, { x: -95, y: -95 }, 1, 16)
            createCrystalCircle('STAGE4', 4, { x: -95, y: -95 }, 2, 16)
            createCrystalCircle('STAGE4', 3.625, { x: -95, y: -95 }, 1, 16)
            createCrystalCircle('STAGE4', 3.5, { x: -95, y: -95 }, 0, 16)
            createCrystalCircle('STAGE4', 3.125, { x: -95, y: -95 }, 1, 8)
            createCrystalCircle('STAGE4', 2.625, { x: -95, y: -95 }, 2, 8)


            window.appConfig.stages.components.createRuby({ x: -87.75, y: 86, z: 0 })

            createCrystalCircle('STAGE4', 2.75, { x: -87.5, y: 87.5 }, 0, 16)
            createCrystalCircle('STAGE4', 3.25, { x: -87.5, y: 87.5 }, 1, 16)
            createCrystalCircle('STAGE4', 3.75, { x: -87.5, y: 87.5 }, 2, 16)


            window.appConfig.stages.components.createEmerald({ x: 87, y: 86, z: 0 })

            createCrystalCircle('STAGE4', 2.75, { x: 87.5, y: 87.5 }, 0, 16)
            createCrystalCircle('STAGE4', 3.25, { x: 87.5, y: 87.5 }, 1, 16)
            createCrystalCircle('STAGE4', 3.75, { x: 87.5, y: 87.5 }, 2, 16)

            window.appConfig.stages.components.createDiamond({ x: 87, y: -89.5, z: 0 })

            createCrystalCircle('STAGE4', 2.75, { x: 87.5, y: -87.5 }, 0, 16)
            createCrystalCircle('STAGE4', 3.25, { x: 87.5, y: -87.5 }, 1, 16)
            createCrystalCircle('STAGE4', 3.75, { x: 87.5, y: -87.5 }, 2, 16)

            window.appConfig.stages.components.createSapphire({ x: 0, y: -100, z: 0 })
            window.appConfig.stages.components.createSapphire({ x: 0, y: 100, z: 0 })
            window.appConfig.stages.components.createSapphire({ x: -100, y: 0, z: 0 })
            window.appConfig.stages.components.createSapphire({ x: 100, y: 0, z: 0 })
            window.appConfig.stages.components.createSapphire({ x: 100, y: 100, z: 0 })
            window.appConfig.stages.components.createBlueIsland()

            prize(4, 0, { x: 75, y: 45, z: 0 })
            prize(4, 1, { x: 75, y: -45, z: 0 })

            prize(4, 2, { x: -45, y: 75, z: 0 })
            prize(4, 3, { x: 45, y: 75, z: 0 })

            prize(4, 4, { x: -75, y: -45, z: 0 })
            prize(4, 5, { x: -75, y: 45, z: 0 })

            prize(4, 6, { x: -75, y: 0, z: 0 })

            prize(4, 7, { x: -45, y: -75, z: 0 })
            prize(4, 8, { x: 45, y: -75, z: 0 })

            prize(4, 9, { x: 117.5, y: 115, z: 0 })
            prize(4, 10, { x: 117.5, y: -115, z: 0 })
            prize(4, 11, { x: -117.5, y: -115, z: 0 })
            prize(4, 12, { x: -117.5, y: 115, z: 0 })

            prize(4, 13, { x: -117.5, y: -77.5, z: 0 })
            prize(4, 14, { x: -77.5, y: -117.5, z: 0 })

            prize(4, 15, { x: 0, y: -117.5, z: 0 })
            prize(4, 16, { x: 0, y: 117.5, z: 0 })

            // portal
            window.appConfig.timers.activeTimers.push(
              window.appConfig.timers.addPortalToStage({ x: -120, y: 0, z: -5 }, 'GEM_STAGE_END_00', { x: 0, y: 0, z: 0 },
                window.appConfig.stages.components.gemPortalConfig())
            )

            window.appConfig.timers.activeTimers.push(
              window.appConfig.timers.addPortalToStage({ x: 120, y: 0, z: -5 }, window.appConfig.currentStage + '_SAPPHIRE_00', { x: 0, y: 300, z: 0 },
                window.appConfig.stages.components.sapphirePortalConfig())
            )

            const createStage4Portals = () => {
              window.appConfig.stages.components.createDiamond({ x: 10, y: -17.5, z: -2.5 }, false, 'GEM_STAGE_END_00')
              window.appConfig.stages.components.createEmerald({ x: 6.5, y: -24, z: -2.5 }, false, 'GEM_STAGE_END_00')
              window.appConfig.stages.components.createRuby({ x: 13, y: -24, z: -2.5 }, false, 'GEM_STAGE_END_00')
              let ellipseGeometry = new THREE.CircleGeometry(4.125, 5)
              ellipseGeometry.rotateZ((2 * Math.PI) / 20)

              let i = 1;
              for (i; i < ellipseGeometry.vertices.length; i++) {
                window.appConfig.stages.components.createSapphire({ x: ellipseGeometry.vertices[i].x, y: ellipseGeometry.vertices[i].y, z: 0 }, false, false, '_SAPPHIRE_00')
              }
            }

            window.appConfig.stages.components.setUpPortalIndicators(createStage4Portals)

            createCrystalCross('STAGE4', 3, { x: 45, y: 117.75 }, 0);
            createCrystalCross('STAGE4', 3, { x: 60, y: 117.75 }, 1);
            createCrystalCross('STAGE4', 3, { x: 75, y: 117.75 }, 2);
            createCrystalCross('STAGE4', 3, { x: 90, y: 117.75 }, 1);
            createCrystalCross('STAGE4', 3, { x: 105, y: 117.75 }, 0);

            createCrystalCross('STAGE4', 3, { x: -45, y: 117.75 }, 0);
            createCrystalCross('STAGE4', 3, { x: -60, y: 117.75 }, 1);
            createCrystalCross('STAGE4', 3, { x: -75, y: 117.75 }, 2);
            createCrystalCross('STAGE4', 3, { x: -90, y: 117.75 }, 1);
            createCrystalCross('STAGE4', 3, { x: -105, y: 117.75 }, 0);

            createCrystalCross('STAGE4', 3, { x: 117.75, y: -45 }, 0);
            createCrystalCross('STAGE4', 3, { x: 117.75, y: -60 }, 1);
            createCrystalCross('STAGE4', 3, { x: 117.75, y: -75 }, 2);
            createCrystalCross('STAGE4', 3, { x: 117.75, y: -90 }, 1);
            createCrystalCross('STAGE4', 3, { x: 117.75, y: -105 }, 0);

            createCrystalCross('STAGE4', 3, { x: 117.75, y: 45 }, 0);
            createCrystalCross('STAGE4', 3, { x: 117.75, y: 60 }, 1);
            createCrystalCross('STAGE4', 3, { x: 117.75, y: 75 }, 2);
            createCrystalCross('STAGE4', 3, { x: 117.75, y: 90 }, 1);
            createCrystalCross('STAGE4', 3, { x: 117.75, y: 105 }, 0);

            createCrystalCross('STAGE4', 3, { x: -117.75, y: 45 }, 0);
            createCrystalCross('STAGE4', 3, { x: -117.75, y: 60 }, 1);
            createCrystalCross('STAGE4', 3, { x: -117.75, y: 75 }, 2);
            createCrystalCross('STAGE4', 3, { x: -117.75, y: 90 }, 1);
            createCrystalCross('STAGE4', 3, { x: -117.75, y: 105 }, 0);

            createCrystalCross('STAGE4', 3, { x: 45, y: -117.75 }, 0);
            createCrystalCross('STAGE4', 3, { x: 60, y: -117.75 }, 1);
            createCrystalCross('STAGE4', 3, { x: 75, y: -117.75 }, 2);
            createCrystalCross('STAGE4', 3, { x: 90, y: -117.75 }, 1);
            createCrystalCross('STAGE4', 3, { x: 105, y: -117.75 }, 0);

            createCrystalCircle('STAGE4', 4, { x: 0, y: 75 }, 0, 8)
            createCrystalCircle('STAGE4', 4.5, { x: 0, y: 75 }, 1, 8)
            createCrystalCircle('STAGE4', 5, { x: 0, y: 75 }, 2, 8)
            createCrystalCircle('STAGE4', 5.5, { x: 0, y: 75 }, 1, 8)
            createCrystalCircle('STAGE4', 6, { x: 0, y: 75 }, 0, 8)

            createCrystalCircle('STAGE4', 4, { x: 0, y: -75 }, 0, 8)
            createCrystalCircle('STAGE4', 4.5, { x: 0, y: -75 }, 1, 8)
            createCrystalCircle('STAGE4', 5, { x: 0, y: -75 }, 2, 8)
            createCrystalCircle('STAGE4', 5.5, { x: 0, y: -75 }, 1, 8)
            createCrystalCircle('STAGE4', 6, { x: 0, y: -75 }, 0, 8)

            createCrystalCircle('STAGE4', 4, { x: -75, y: 0 }, 0, 8)
            createCrystalCircle('STAGE4', 4.5, { x: -75, y: 0 }, 1, 8)
            createCrystalCircle('STAGE4', 5, { x: -75, y: 0 }, 2, 8)
            createCrystalCircle('STAGE4', 5.5, { x: -75, y: 0 }, 1, 8)
            createCrystalCircle('STAGE4', 6, { x: -75, y: 0 }, 0, 8)

            createCrystalCircle('STAGE4', 2, { x: -110, y: -62.5 }, 0, 8)
            createCrystalCircle('STAGE4', 2.5, { x: -110, y: -62.5 }, 1, 8)
            createCrystalCircle('STAGE4', 3, { x: -110, y: -62.5 }, 2, 8)
            createCrystalCircle('STAGE4', 2, { x: -62.5, y: -110 }, 0, 8)
            createCrystalCircle('STAGE4', 2.5, { x: -62.5, y: -110 }, 1, 8)
            createCrystalCircle('STAGE4', 3, { x: -62.5, y: -110 }, 2, 8)

            createCrystalCircle('STAGE4', 4, { x: 75, y: 0 }, 0, 8)
            createCrystalCircle('STAGE4', 4.5, { x: 75, y: 0 }, 1, 8)
            createCrystalCircle('STAGE4', 5, { x: 75, y: 0 }, 2, 8)
            createCrystalCircle('STAGE4', 5.5, { x: 75, y: 0 }, 1, 8)
            createCrystalCircle('STAGE4', 6, { x: 75, y: 0 }, 0, 8)

            createCrystalCircle('STAGE4', 3, { x: 0, y: 0 }, 0, 8)
            createCrystalCircle('STAGE4', 3.5, { x: 0, y: 0 }, 1, 8)
            createCrystalCircle('STAGE4', 4, { x: 0, y: 0 }, 0, 8)

            createCrystalCross('STAGE4', 3, { x: -17.5, y: 17.5 }, 2);
            createCrystalCross('STAGE4', 3, { x: 17.5, y: 17.5 }, 2);
            createCrystalCross('STAGE4', 3, { x: -17.5, y: -17.5 }, 2);
            createCrystalCross('STAGE4', 3, { x: 17.5, y: -17.5 }, 2);

            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINA',
              position: {
                x: 100,
                y: 100,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINA')
            })
            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINB',
              position: {
                x: 102,
                y: 102,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINB')
            })
            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINC',
              position: {
                x: 101,
                y: 101,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINC')
            })
            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOIND',
              position: {
                x: 104,
                y: 104,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOIND')
            })

            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINE',
              position: {
                x: 100,
                y: -100,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINE')
            })
            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINF',
              position: {
                x: 102,
                y: -102,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINF')
            })
            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOING',
              position: {
                x: 101,
                y: -101,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOING')
            })
            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINH',
              position: {
                x: 104,
                y: -104,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINH')
            })

            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINI',
              position: {
                x: -100,
                y: -100,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINI')
            })
            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINJ',
              position: {
                x: -102,
                y: -102,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINJ')
            })
            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINK',
              position: {
                x: -101,
                y: -101,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINK')
            })
            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINL',
              position: {
                x: -104,
                y: -104,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINL')
            })



            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINM',
              position: {
                x: -100,
                y: 100,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINM')
            })
            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINN',
              position: {
                x: -102,
                y: 102,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINN')
            })
            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINO',
              position: {
                x: -101,
                y: 101,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINO')
            })
            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINP',
              position: {
                x: -104,
                y: 104,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINP')
            })

            window.appConfig.stages.STAGE4.STAGE4PRIZE0 = scene.children.find((obj) => obj.name === "STAGE4PRIZE0")
            window.appConfig.stages.STAGE4.STAGE4PRIZE1 = scene.children.find((obj) => obj.name === "STAGE4PRIZE1")
            window.appConfig.stages.STAGE4.STAGE4PRIZE2 = scene.children.find((obj) => obj.name === "STAGE4PRIZE2")
            window.appConfig.stages.STAGE4.STAGE4PRIZE3 = scene.children.find((obj) => obj.name === "STAGE4PRIZE3")

            window.appConfig.stages.STAGE4.STAGE4MAINSTRUCTURE1 = scene.children.find((obj) => obj.name === "STAGE4MAINSTRUCTURE1")
            window.appConfig.stages.STAGE4.STAGE4MAINSTRUCTURE2 = scene.children.find((obj) => obj.name === "STAGE4MAINSTRUCTURE2")
            window.appConfig.stages.STAGE4.STAGE4CROSSBEAMSTRUCTURE = scene.children.find((obj) => obj.name === "STAGE4CROSSBEAMSTRUCTURE")
            window.appConfig.stages.STAGE4.STAGE4CROSSBEAMSTRUCTUREA = scene.children.find((obj) => obj.name === "STAGE4CROSSBEAMSTRUCTUREA")
            window.appConfig.stages.STAGE4.STAGE4CROSSBEAMSTRUCTUREB = scene.children.find((obj) => obj.name === "STAGE4CROSSBEAMSTRUCTUREB")
            window.appConfig.stages.STAGE4.STAGE4CROSSBEAMSTRUCTUREC = scene.children.find((obj) => obj.name === "STAGE4CROSSBEAMSTRUCTUREC")
            window.appConfig.stages.STAGE4.STAGE4CROSSBEAMSTRUCTURED = scene.children.find((obj) => obj.name === "STAGE4CROSSBEAMSTRUCTURED")

            window.appConfig.stages.STAGE4.STAGE4MAINSTRUCTURE3 = scene.children.find((obj) => obj.name === "STAGE4MAINSTRUCTURE3")
            window.appConfig.stages.STAGE4.STAGE4MAINSTRUCTURE4 = scene.children.find((obj) => obj.name === "STAGE4MAINSTRUCTURE4")
            window.appConfig.stages.STAGE4.STAGE4CROSSBEAMSTRUCTURE1 = scene.children.find((obj) => obj.name === "STAGE4CROSSBEAMSTRUCTURE1")
            window.appConfig.stages.STAGE4.STAGE4CROSSBEAMSTRUCTURE1A = scene.children.find((obj) => obj.name === "STAGE4CROSSBEAMSTRUCTURE1A")
            window.appConfig.stages.STAGE4.STAGE4CROSSBEAMSTRUCTURE1B = scene.children.find((obj) => obj.name === "STAGE4CROSSBEAMSTRUCTURE1B")
            window.appConfig.stages.STAGE4.STAGE4CROSSBEAMSTRUCTURE1C = scene.children.find((obj) => obj.name === "STAGE4CROSSBEAMSTRUCTURE1C")
            window.appConfig.stages.STAGE4.STAGE4CROSSBEAMSTRUCTURE1D = scene.children.find((obj) => obj.name === "STAGE4CROSSBEAMSTRUCTURE1D")

            window.appConfig.stages.STAGE4.STAGE4MAINSTRUCTURE5 = scene.children.find((obj) => obj.name === "STAGE4MAINSTRUCTURE5")
            window.appConfig.stages.STAGE4.STAGE4MAINSTRUCTURE6 = scene.children.find((obj) => obj.name === "STAGE4MAINSTRUCTURE6")
            window.appConfig.stages.STAGE4.STAGE4CROSSBEAMSTRUCTURE2 = scene.children.find((obj) => obj.name === "STAGE4CROSSBEAMSTRUCTURE2")
            window.appConfig.stages.STAGE4.STAGE4CROSSBEAMSTRUCTURE2A = scene.children.find((obj) => obj.name === "STAGE4CROSSBEAMSTRUCTURE2A")
            window.appConfig.stages.STAGE4.STAGE4CROSSBEAMSTRUCTURE2B = scene.children.find((obj) => obj.name === "STAGE4CROSSBEAMSTRUCTURE2B")
            window.appConfig.stages.STAGE4.STAGE4CROSSBEAMSTRUCTURE2C = scene.children.find((obj) => obj.name === "STAGE4CROSSBEAMSTRUCTURE2C")
            window.appConfig.stages.STAGE4.STAGE4CROSSBEAMSTRUCTURE2D = scene.children.find((obj) => obj.name === "STAGE4CROSSBEAMSTRUCTURE2D")

            window.appConfig.stages.STAGE4.STAGE4MAINSTRUCTURE7 = scene.children.find((obj) => obj.name === "STAGE4MAINSTRUCTURE7")
            window.appConfig.stages.STAGE4.STAGE4MAINSTRUCTURE8 = scene.children.find((obj) => obj.name === "STAGE4MAINSTRUCTURE8")
            window.appConfig.stages.STAGE4.STAGE4CROSSBEAMSTRUCTURE3 = scene.children.find((obj) => obj.name === "STAGE4CROSSBEAMSTRUCTURE3")
            window.appConfig.stages.STAGE4.STAGE4CROSSBEAMSTRUCTURE3A = scene.children.find((obj) => obj.name === "STAGE4CROSSBEAMSTRUCTURE3A")
            window.appConfig.stages.STAGE4.STAGE4CROSSBEAMSTRUCTURE3B = scene.children.find((obj) => obj.name === "STAGE4CROSSBEAMSTRUCTURE3B")
            window.appConfig.stages.STAGE4.STAGE4CROSSBEAMSTRUCTURE3C = scene.children.find((obj) => obj.name === "STAGE4CROSSBEAMSTRUCTURE3C")
            window.appConfig.stages.STAGE4.STAGE4CROSSBEAMSTRUCTURE3D = scene.children.find((obj) => obj.name === "STAGE4CROSSBEAMSTRUCTURE3D")

            window.appConfig.stages.STAGE4.data.started = true
          }
        },
        STAGE5: {
          data: {
            started: false,
            xAdj: -60,
            vAdj: -70,
            sAdj: 2,
            startingPosition: window.appConfig.originVector,
            sapphirePortalPosition: { x: 0, y: -137.5, z: -5 }
          },
          backgroundColors: stageProperties.STAGE5.backgroundColors,
          basicColors: stageProperties.STAGE5.basicColors,
          sounds: stageProperties.STAGE5.sounds,
          name: stageProperties.STAGE5.name,
          number: stageProperties.STAGE5.number,
          defaultTransforms: [
            'STAGE5PRIZE0',
            'STAGE5PRIZE1',
            'STAGE5PRIZE2',
            'STAGE5PRIZE3',
            'STAGE5CROSSBEAMSTRUCTURE',
            'STAGE5CROSSBEAMSTRUCTUREA',
            'STAGE5CROSSBEAMSTRUCTUREB',
            'STAGE5CROSSBEAMSTRUCTUREC',
            'STAGE5MINORSTRUCTURE',
            'STAGE5MINORSTRUCTUREA',
            'STAGE5MINORSTRUCTUREB',
            'STAGE5MINORSTRUCTUREC'
          ],
          transforms: {
            'STAGE5PRIZE0': { r: { x: .005, y: .005, z: .005 } },
            'STAGE5PRIZE1': { r: { x: .005, y: .005, z: .005 } },
            'STAGE5PRIZE2': { r: { x: .005, y: .005, z: .005 } },
            'STAGE5PRIZE3': { r: { x: .005, y: .005, z: .005 } },
            'STAGE5MAINSTRUCTURE1': { r: { x: 0, y: 0, z: -.005 } },

            'STAGE5CROSSBEAMSTRUCTURE': { r: { x: 0, y: 0, z: .01 } },
            'STAGE5CROSSBEAMSTRUCTUREA': { r: { x: 0, y: 0, z: -.01 } },
            'STAGE5MINORSTRUCTURE': { r: { x: 0, y: 0, z: .01 } },
            'STAGE5MINORSTRUCTUREA': { r: { x: 0, y: 0, z: .01 } },

            'STAGE5CROSSBEAMSTRUCTUREB': { r: { x: 0, y: 0, z: -.01 } },
            'STAGE5CROSSBEAMSTRUCTUREC': { r: { x: 0, y: 0, z: .01 } },
            'STAGE5MINORSTRUCTUREB': { r: { x: 0, y: 0, z: -.01 } },
            'STAGE5MINORSTRUCTUREC': { r: { x: 0, y: 0, z: -.01 } }

          },
          teardown: () => {
            teardownStage('STAGE5')
            window.appConfig.stages.STAGE5.data.started = false
          },
          initBackground: () => {
            const createBackgroundAnimation = () => {
              const bgGroup = new THREE.Group()
              bgGroup.name = 'STAGE5BGGROUP'
              const elementGeometry = new THREE.IcosahedronGeometry(1, 0)
              const elementMaterials = [
                new THREE.MeshPhongMaterial({ color: stageProperties.STAGE5.backgroundColors[0], transparent: true, opacity: .25 }),
                new THREE.MeshPhongMaterial({ color: stageProperties.STAGE5.backgroundColors[1], transparent: true, opacity: .25 }),
                new THREE.MeshPhongMaterial({ color: stageProperties.STAGE5.backgroundColors[2], transparent: true, opacity: .25 }),
                new THREE.MeshPhongMaterial({ color: stageProperties.STAGE5.backgroundColors[3], transparent: true, opacity: .25 }),
              ]

              const numberOfElements = 50
              let elementI = 0
              for (elementI; elementI < numberOfElements; elementI++) {
                bgGroup.add(new THREE.Mesh(elementGeometry, elementMaterials[elementI % elementMaterials.length]))
              }
              scene.add(bgGroup)
              bgGroup.position.set(0, 0, -10)
              bgGroup.children.forEach(c => {
                c.position.set(Math.random() * 200 - 100, Math.random() * 200 - 100, -20 + Math.random() * -30)
                const bgElementScale = 1 + Math.random() * 10
                c.scale.set(bgElementScale, bgElementScale, bgElementScale)
                c.rotation.z = (Math.random() * 2) * Math.PI
              })
              bgGroup.activeCallback = () => {
                if (bgGroup) {
                  bgGroup.children.forEach((c, ci) => {
                    c.position.y += .005 * ci / 2
                    c.rotation.y += .005
                    if (c.position.y > 125) {
                      c.position.y = -125
                    }
                  })
                }
              }
              bgGroup.activeCallback()
              window.appConfig.stages['STAGE5'].bgGroupActiveCallback = bgGroup.activeCallback
            }

            createBackgroundAnimation()
          },
          init: () => {
            const createStage0MainBeamStructure = window.appConfig.stages.components.createStage0MainBeamStructure
            const createStage1MinorBeamStructure = window.appConfig.stages.components.createStage1MinorBeamStructure
            const createStage3CrossBeamStructure = window.appConfig.stages.components.createStage3CrossBeamStructure
            const createStage4PlinkoStructure = window.appConfig.stages.components.createStage4PlinkoStructure

            const createSwitchBeamWall = window.appConfig.stages.components.createSwitchBeamWall
            const createRemoteSwitch = window.appConfig.stages.components.createRemoteSwitch

            // portal
            window.appConfig.timers.activeTimers.push(
              window.appConfig.timers.addPortalToStage({ x: 0, y: 137.5, z: -5 }, 'GEM_STAGE_END_00', { x: 0, y: 0, z: 0 },
                window.appConfig.stages.components.gemPortalConfig())
            )

            window.appConfig.timers.activeTimers.push(
              window.appConfig.timers.addPortalToStage({ x: 0, y: -137.5, z: -5 }, window.appConfig.currentStage + '_SAPPHIRE_00', { x: 0, y: 300, z: 0 },
                window.appConfig.stages.components.sapphirePortalConfig())
            )

            const createStage5Portals = () => {
              window.appConfig.stages.components.createDiamond({ x: 10, y: -17.5, z: -2.5 }, false, 'GEM_STAGE_END_00')
              window.appConfig.stages.components.createEmerald({ x: 6.5, y: -24, z: -2.5 }, false, 'GEM_STAGE_END_00')
              window.appConfig.stages.components.createRuby({ x: 13, y: -24, z: -2.5 }, false, 'GEM_STAGE_END_00')
              let ellipseGeometry = new THREE.CircleGeometry(4.125, 5)
              ellipseGeometry.rotateZ((2 * Math.PI) / 20)

              let i = 1;
              for (i; i < ellipseGeometry.vertices.length; i++) {
                window.appConfig.stages.components.createSapphire({ x: ellipseGeometry.vertices[i].x, y: ellipseGeometry.vertices[i].y, z: 0 }, false, false, '_SAPPHIRE_00')
              }
            }

            window.appConfig.stages.components.setUpPortalIndicators(createStage5Portals)

            createCrystalCircle('STAGE5', 1.5, { x: 25, y: 150 }, 1, 2)
            createCrystalCircle('STAGE5', 2.5, { x: 25, y: 150 }, 2, 8)
            createCrystalCircle('STAGE5', 3, { x: 25, y: 150 }, 0, 8)
            createCrystalCircle('STAGE5', 3.5, { x: 25, y: 150 }, 1, 8)
            createCrystalCircle('STAGE5', 4, { x: 25, y: 150 }, 2, 8)

            createRemoteSwitch({
              transmitter: {
                p: { x: 25, y: 150, z: 0 }
              },
              receiver: {
                p: { x: -55, y: -20, z: 0 },
                name: 'STAGE5_RECEIVER_B'
              }
            })

            createSwitchBeamWall({ s: 3.5, dir: 'y', p: { x: 47.5, y: 93.5, z: 0 }, receiver: { name: 'STAGE5_RECEIVER_B' }, switchBeamAdj: 0 })

            createCrystalCircle('STAGE5', 1.5, { x: 150, y: 25 }, 1, 2)
            createCrystalCircle('STAGE5', 2.5, { x: 150, y: 25 }, 2, 8)
            createCrystalCircle('STAGE5', 3, { x: 150, y: 25 }, 0, 8)
            createCrystalCircle('STAGE5', 3.5, { x: 150, y: 25 }, 1, 8)
            createCrystalCircle('STAGE5', 4, { x: 150, y: 25 }, 2, 8)

            createRemoteSwitch({
              transmitter: {
                p: { x: 150, y: 25, z: 0 }
              },
              receiver: {
                p: { x: -55, y: -20, z: 0 },
                name: 'STAGE5_RECEIVER_C'
              }
            })

            createSwitchBeamWall({ s: 3.5, dir: 'x', p: { x: 93.5, y: 47.5, z: 0 }, receiver: { name: 'STAGE5_RECEIVER_C' }, switchBeamAdj: 0 })

            createCrystalCircle('STAGE5', 1.5, { x: 150, y: -25 }, 1, 2)
            createCrystalCircle('STAGE5', 2.5, { x: 150, y: -25 }, 2, 8)
            createCrystalCircle('STAGE5', 3, { x: 150, y: -25 }, 0, 8)
            createCrystalCircle('STAGE5', 3.5, { x: 150, y: -25 }, 1, 8)
            createCrystalCircle('STAGE5', 4, { x: 150, y: -25 }, 2, 8)

            createRemoteSwitch({
              transmitter: {
                p: { x: 150, y: -25, z: 0 }
              },
              receiver: {
                p: { x: -55, y: -20, z: 0 },
                name: 'STAGE5_RECEIVER_D'
              }
            })

            createSwitchBeamWall({ s: 3.5, dir: 'y', p: { x: 47.5, y: -117, z: 0 }, receiver: { name: 'STAGE5_RECEIVER_D' }, switchBeamAdj: 0 })

            createCrystalCircle('STAGE5', 1.5, { x: 25, y: -150 }, 1, 2)
            createCrystalCircle('STAGE5', 2.5, { x: 25, y: -150 }, 2, 8)
            createCrystalCircle('STAGE5', 3, { x: 25, y: -150 }, 0, 8)
            createCrystalCircle('STAGE5', 3.5, { x: 25, y: -150 }, 1, 8)
            createCrystalCircle('STAGE5', 4, { x: 25, y: -150 }, 2, 8)

            createRemoteSwitch({
              transmitter: {
                p: { x: 25, y: -150, z: 0 }
              },
              receiver: {
                p: { x: -55, y: -20, z: 0 },
                name: 'STAGE5_RECEIVER_E'
              }
            })

            createSwitchBeamWall({ s: 3.5, dir: 'x', p: { x: 93.5, y: -47.5, z: 0 }, receiver: { name: 'STAGE5_RECEIVER_E' }, switchBeamAdj: 0 })

            createCrystalCircle('STAGE5', 1.5, { x: -150, y: -25 }, 1, 2)
            createCrystalCircle('STAGE5', 2.5, { x: -150, y: -25 }, 2, 8)
            createCrystalCircle('STAGE5', 3, { x: -150, y: -25 }, 0, 8)
            createCrystalCircle('STAGE5', 3.5, { x: -150, y: -25 }, 1, 8)
            createCrystalCircle('STAGE5', 4, { x: -150, y: -25 }, 2, 8)

            createRemoteSwitch({
              transmitter: {
                p: { x: -150, y: -25, z: 0 }
              },
              receiver: {
                p: { x: -55, y: -20, z: 0 },
                name: 'STAGE5_RECEIVER_F'
              }
            })

            createSwitchBeamWall({ s: 3.5, dir: 'y', p: { x: -47.5, y: -117, z: 0 }, receiver: { name: 'STAGE5_RECEIVER_F' }, switchBeamAdj: 0 })

            createCrystalCircle('STAGE5', 1.5, { x: -25, y: -150 }, 1, 2)
            createCrystalCircle('STAGE5', 2.5, { x: -25, y: -150 }, 2, 8)
            createCrystalCircle('STAGE5', 3, { x: -25, y: -150 }, 0, 8)
            createCrystalCircle('STAGE5', 3.5, { x: -25, y: -150 }, 1, 8)
            createCrystalCircle('STAGE5', 4, { x: -25, y: -150 }, 2, 8)

            createRemoteSwitch({
              transmitter: {
                p: { x: -25, y: -150, z: 0 }
              },
              receiver: {
                p: { x: -55, y: -20, z: 0 },
                name: 'STAGE5_RECEIVER_G'
              }
            })

            createSwitchBeamWall({ s: 3.5, dir: 'x', p: { x: -117, y: -47.5, z: 0 }, receiver: { name: 'STAGE5_RECEIVER_G' }, switchBeamAdj: 0 })

            createCrystalCircle('STAGE5', 1.5, { x: -25, y: 150 }, 1, 2)
            createCrystalCircle('STAGE5', 2.5, { x: -25, y: 150 }, 2, 8)
            createCrystalCircle('STAGE5', 3, { x: -25, y: 150 }, 0, 8)
            createCrystalCircle('STAGE5', 3.5, { x: -25, y: 150 }, 1, 8)
            createCrystalCircle('STAGE5', 4, { x: -25, y: 150 }, 2, 8)

            createCrystalCircle('STAGE5', 1.5, { x: -150, y: 25 }, 1, 2)
            createCrystalCircle('STAGE5', 2.5, { x: -150, y: 25 }, 2, 8)
            createCrystalCircle('STAGE5', 3, { x: -150, y: 25 }, 0, 8)
            createCrystalCircle('STAGE5', 3.5, { x: -150, y: 25 }, 1, 8)
            createCrystalCircle('STAGE5', 4, { x: -150, y: 25 }, 2, 8)

            createCrystalCircle('STAGE5', 2.25, { x: -92.5, y: 60 }, 1, 4)
            createCrystalCircle('STAGE5', 2.75, { x: -92.5, y: 60 }, 0, 8)
            prize(5, 400, { x: -92.5, y: 60, z: 0 })
            createCrystalCircle('STAGE5', 2.25, { x: -60, y: 92.5 }, 1, 4)
            createCrystalCircle('STAGE5', 2.75, { x: -60, y: 92.5 }, 0, 8)
            prize(5, 401, { x: -60, y: 92.5, z: 0 })
            createCrystalCircle('STAGE5', 2.25, { x: -75, y: 77.5 }, 1, 4)
            createCrystalCircle('STAGE5', 2.75, { x: -75, y: 77.5 }, 0, 8)
            prize(5, 401, { x: -75, y: 77.5, z: 0 })

            window.appConfig.stages.components.createRuby({ x: -77.75, y: -78.5, z: 0 })

            createCrystalCircle('STAGE5', 2.75, { x: -77.5, y: -77.5 }, 2, 8)

            createCrystalCircle('STAGE5', 2.25, { x: -92.5, y: -60 }, 1, 4)
            createCrystalCircle('STAGE5', 2.75, { x: -92.5, y: -60 }, 0, 8)
            prize(5, 100, { x: -92.5, y: -60, z: 0 })
            createCrystalCircle('STAGE5', 2.25, { x: -60, y: -92.5 }, 1, 4)
            createCrystalCircle('STAGE5', 2.75, { x: -60, y: -92.5 }, 0, 8)
            prize(5, 101, { x: -60, y: -92.5, z: 0 })

            window.appConfig.stages.components.createEmerald({ x: 76.5, y: 75.5, z: 0 })

            createCrystalCircle('STAGE5', 2.75, { x: 77.5, y: 77.5 }, 2, 8)

            createCrystalCircle('STAGE5', 2.25, { x: 92.5, y: 60 }, 1, 4)
            createCrystalCircle('STAGE5', 2.75, { x: 92.5, y: 60 }, 0, 8)
            prize(5, 102, { x: 92.5, y: 60, z: 0 })

            createCrystalCircle('STAGE5', 2.25, { x: 60, y: 92.5 }, 1, 4)
            createCrystalCircle('STAGE5', 2.75, { x: 60, y: 92.5 }, 0, 8)
            prize(5, 103, { x: 60, y: 92.5, z: 0 })

            window.appConfig.stages.components.createDiamond({ x: 77.5, y: -78.5, z: 0 })

            createCrystalCircle('STAGE5', 2.75, { x: 77.5, y: -77.5 }, 2, 8)
            createCrystalCircle('STAGE5', 2.25, { x: 92.5, y: -60 }, 1, 4)
            createCrystalCircle('STAGE5', 2.75, { x: 92.5, y: -60 }, 0, 8)
            prize(5, 104, { x: 92.5, y: -60, z: 0 })

            createCrystalCircle('STAGE5', 2.25, { x: 60, y: -92.5 }, 1, 4)
            createCrystalCircle('STAGE5', 2.75, { x: 60, y: -92.5 }, 0, 8)
            prize(5, 105, { x: 60, y: -92.5, z: 0 })

            const stage5MainBeamStructure = window.appConfig.stages.components.createStage0MainBeamStructure(
              12,
              -0.56,
              "STAGE5MAINSTRUCTURE",
              { x: 0, y: 0 }
              // [0, 0, 0, 1]
              // [bottom, left, right, top]
            );
            stage5MainBeamStructure.rotation.z = .25 * Math.PI
            scene.add(stage5MainBeamStructure);

            const stage5MainBeamStructure_0 = window.appConfig.stages.components.createStage0MainBeamStructure(
              15,
              -0.35,
              "STAGE5MAINSTRUCTURE_0",
              { x: 0, y: 0 }
              // [0, 0, 0, 1]
            );
            stage5MainBeamStructure_0.rotation.z = .25 * Math.PI
            scene.add(stage5MainBeamStructure_0);

            const stage5MainBeamStructure_1 = window.appConfig.stages.components.createStage0MainBeamStructure(
              18.25,
              0,
              "STAGE5MAINSTRUCTURE_1"
            );
            stage5MainBeamStructure_1.rotation.z = .25 * Math.PI
            scene.add(stage5MainBeamStructure_1);

            const stage5MainBeamStructure_2 = window.appConfig.stages.components.createStage0MainBeamStructure(
              21.25,
              -.65,
              "STAGE5MAINSTRUCTURE_2",
            );
            scene.add(stage5MainBeamStructure_2);


            const stage5MainBeamStructure1 = createStage0MainBeamStructure(
              1.25,
              -0.5,
              "STAGE5MAINSTRUCTURE1",
              { x: 0, y: -25 }
            );
            stage5MainBeamStructure1.rotation.z = .25 * Math.PI
            scene.add(stage5MainBeamStructure1);

            const stage5MainBeamStructure2 = createStage0MainBeamStructure(
              1.25,
              -0.5,
              "STAGE5MAINSTRUCTURE2",
              { x: 0, y: 25 }
            );
            stage5MainBeamStructure2.rotation.z = .25 * Math.PI
            scene.add(stage5MainBeamStructure2);

            const stage5CrossBeamStructure = createStage3CrossBeamStructure(
              .5,
              .75,
              "STAGE5CROSSBEAMSTRUCTURE",
              { x: -12.5, y: -50 }
            );
            scene.add(stage5CrossBeamStructure);

            const stage5CrossBeamStructureA = createStage3CrossBeamStructure(
              .5,
              .75,
              "STAGE5CROSSBEAMSTRUCTUREA",
              { x: 12.5, y: -50 }
            );
            scene.add(stage5CrossBeamStructureA);


            const stage5MinorBeamStructure = createStage1MinorBeamStructure(
              .5,
              .5,
              "STAGE5MINORSTRUCTURE",
              { x: 0, y: -75 }
            );
            scene.add(stage5MinorBeamStructure);

            const stage5MinorBeamStructureA = createStage1MinorBeamStructure(
              .5,
              .5,
              "STAGE5MINORSTRUCTUREA",
              { x: 0, y: -75 }
            );
            stage5MinorBeamStructureA.rotation.z = .25 * Math.PI
            scene.add(stage5MinorBeamStructureA);

            const stage5CrossBeamStructureB = createStage3CrossBeamStructure(
              .5,
              .75,
              "STAGE5CROSSBEAMSTRUCTUREB",
              { x: -12.5, y: 50 }
            );
            scene.add(stage5CrossBeamStructureB);

            const stage5CrossBeamStructureC = createStage3CrossBeamStructure(
              .5,
              .75,
              "STAGE5CROSSBEAMSTRUCTUREC",
              { x: 12.5, y: 50 }
            );
            scene.add(stage5CrossBeamStructureC);


            const stage5MinorBeamStructureB = createStage1MinorBeamStructure(
              .5,
              .5,
              "STAGE5MINORSTRUCTUREB",
              { x: 0, y: 75 }
            );
            scene.add(stage5MinorBeamStructureB);

            const stage5MinorBeamStructureC = createStage1MinorBeamStructure(
              .5,
              .5,
              "STAGE5MINORSTRUCTUREC",
              { x: 0, y: 75 }
            );
            stage5MinorBeamStructureC.rotation.z = .25 * Math.PI
            scene.add(stage5MinorBeamStructureC);

            const stage5PlinkoStructure = createStage4PlinkoStructure(
              6,
              8,
              -.95,
              "STAGE5PLINKOSTRUCTURE",
              { x: 25, y: -36.25 },
              3,
              10
            );
            scene.add(stage5PlinkoStructure);

            const stage5PlinkoStructureA = createStage4PlinkoStructure(
              6,
              8,
              -.95,
              "STAGE5PLINKOSTRUCTUREA",
              { x: -60, y: -36.25 },
              3,
              10
            );
            scene.add(stage5PlinkoStructureA);

            prize(5, 0, { x: 75, y: 0, z: 0 })
            prize(5, 1, { x: 0, y: 75, z: 0 })
            prize(5, 2, { x: -75, y: 0, z: 0 })
            prize(5, 3, { x: 0, y: -75, z: 0 })

            prize(5, 200, { x: 92.5, y: 92.5, z: 0 })
            prize(5, 201, { x: 92.5, y: -92.5, z: 0 })
            prize(5, 202, { x: -92.5, y: -92.5, z: 0 })
            prize(5, 203, { x: -92.5, y: 92.5, z: 0 })

            prize(5, 204, { x: 62.5, y: 62.5, z: 0 })
            prize(5, 205, { x: 62.5, y: -62.5, z: 0 })
            prize(5, 206, { x: -62.5, y: -62.5, z: 0 })
            prize(5, 207, { x: -62.5, y: 62.5, z: 0 })


            createCrystalCross('STAGE5', 2.5, { x: -12.5, y: 10 }, 0);
            createCrystalCross('STAGE5', 2.5, { x: 12.5, y: 10 }, 0);
            createCrystalCross('STAGE5', 2.5, { x: -12.5, y: -10 }, 0);
            createCrystalCross('STAGE5', 2.5, { x: 12.5, y: -10 }, 0);

            createCrystalCross('STAGE5', 2.5, { x: -15, y: 37.5 }, 1);
            createCrystalCross('STAGE5', 2.5, { x: 15, y: 37.5 }, 1);
            createCrystalCross('STAGE5', 2.5, { x: -15, y: -37.5 }, 1);
            createCrystalCross('STAGE5', 2.5, { x: 15, y: -37.5 }, 1);


            createCrystalCross('STAGE5', 5, { x: -100, y: 0 }, 0);
            createCrystalCross('STAGE5', 5, { x: -120, y: 0 }, 2);
            createCrystalCross('STAGE5', 5, { x: -110, y: 10 }, 1);
            createCrystalCross('STAGE5', 5, { x: -110, y: -10 }, 1);

            createCrystalCross('STAGE5', 5, { x: -80, y: 20 }, 0);
            createCrystalCross('STAGE5', 5, { x: -100, y: 20 }, 2);
            createCrystalCross('STAGE5', 5, { x: -90, y: 30 }, 1);
            createCrystalCross('STAGE5', 5, { x: -90, y: 10 }, 1);

            createCrystalCross('STAGE5', 5, { x: -80, y: -20 }, 0);
            createCrystalCross('STAGE5', 5, { x: -100, y: -20 }, 2);
            createCrystalCross('STAGE5', 5, { x: -90, y: -30 }, 1);
            createCrystalCross('STAGE5', 5, { x: -90, y: -10 }, 1);

            createCrystalCross('STAGE5', 5, { x: 100, y: 0 }, 0);
            createCrystalCross('STAGE5', 5, { x: 120, y: 0 }, 2);
            createCrystalCross('STAGE5', 5, { x: 110, y: 10 }, 1);
            createCrystalCross('STAGE5', 5, { x: 110, y: -10 }, 1);

            createCrystalCross('STAGE5', 5, { x: 80, y: 20 }, 0);
            createCrystalCross('STAGE5', 5, { x: 100, y: 20 }, 2);
            createCrystalCross('STAGE5', 5, { x: 90, y: 30 }, 1);
            createCrystalCross('STAGE5', 5, { x: 90, y: 10 }, 1);

            createCrystalCross('STAGE5', 5, { x: 80, y: -20 }, 0);
            createCrystalCross('STAGE5', 5, { x: 100, y: -20 }, 2);
            createCrystalCross('STAGE5', 5, { x: 90, y: -30 }, 1);
            createCrystalCross('STAGE5', 5, { x: 90, y: -10 }, 1);

            createCrystalCross('STAGE5', 5, { x: 0, y: 100 }, 0);
            createCrystalCross('STAGE5', 5, { x: 0, y: 120 }, 2);
            createCrystalCross('STAGE5', 5, { x: 10, y: 110 }, 1);
            createCrystalCross('STAGE5', 5, { x: -10, y: 110 }, 1);


            createCrystalCross('STAGE5', 5, { x: 0, y: -100 }, 0);
            createCrystalCross('STAGE5', 5, { x: 0, y: -120 }, 2);
            createCrystalCross('STAGE5', 5, { x: 10, y: -110 }, 1);
            createCrystalCross('STAGE5', 5, { x: -10, y: -110 }, 1);

            createCrystalCross('STAGE5', 3.3, { x: 0, y: -25 }, 0);
            createCrystalCross('STAGE5', 6.6, { x: 0, y: -25 }, 2);
            createCrystalCross('STAGE5', 10, { x: 0, y: -25 }, 1);

            createCrystalCross('STAGE5', 3.3, { x: 0, y: 25 }, 0);
            createCrystalCross('STAGE5', 6.6, { x: 0, y: 25 }, 2);
            createCrystalCross('STAGE5', 10, { x: 0, y: 25 }, 1);

            createCrystalLine('STAGE5', 5, { x: -51.25, y: -35 }, 1, 15, "y");
            createCrystalLine('STAGE5', 5, { x: -32.5, y: -35 }, 2, 15, "y");
            createCrystalLine('STAGE5', 5, { x: 51.25, y: -35 }, 1, 15, "y");
            createCrystalLine('STAGE5', 5, { x: 32.5, y: -35 }, 2, 15, "y");

            createCrystalCircle('STAGE5', 1.5, { x: 25, y: 90 }, 2, 2)
            createCrystalCircle('STAGE5', 2.5, { x: 25, y: 90 }, 1, 2)

            createCrystalCircle('STAGE5', 1.5, { x: -25, y: 90 }, 2, 2)
            createCrystalCircle('STAGE5', 2.5, { x: -25, y: 90 }, 1, 2)

            createCrystalCircle('STAGE5', 1.5, { x: 25, y: -90 }, 2, 2)
            createCrystalCircle('STAGE5', 2.5, { x: 25, y: -90 }, 1, 2)

            createCrystalCircle('STAGE5', 1.5, { x: -25, y: -90 }, 2, 2)
            createCrystalCircle('STAGE5', 2.5, { x: -25, y: -90 }, 1, 2)

            createCrystalCircle('STAGE5', 1.5, { x: 40, y: 60 }, 2, 2)
            createCrystalCircle('STAGE5', 2.5, { x: 40, y: 60 }, 1, 8)
            createCrystalCircle('STAGE5', 3, { x: 40, y: 60 }, 2, 8)
            createCrystalCircle('STAGE5', 3.5, { x: 40, y: 60 }, 1, 8)
            createCrystalCircle('STAGE5', 4, { x: 40, y: 60 }, 0, 8)

            createCrystalCircle('STAGE5', 1.5, { x: -40, y: 60 }, 2, 2)
            createCrystalCircle('STAGE5', 2.5, { x: -40, y: 60 }, 1, 8)
            createCrystalCircle('STAGE5', 3, { x: -40, y: 60 }, 2, 8)
            createCrystalCircle('STAGE5', 3.5, { x: -40, y: 60 }, 1, 8)
            createCrystalCircle('STAGE5', 4, { x: -40, y: 60 }, 0, 8)

            createCrystalCircle('STAGE5', 1.5, { x: 40, y: -60 }, 2, 2)
            createCrystalCircle('STAGE5', 2.5, { x: 40, y: -60 }, 1, 8)
            createCrystalCircle('STAGE5', 3, { x: 40, y: -60 }, 2, 8)
            createCrystalCircle('STAGE5', 3.5, { x: 40, y: -60 }, 1, 8)
            createCrystalCircle('STAGE5', 4, { x: 40, y: -60 }, 0, 8)

            createCrystalCircle('STAGE5', 1.5, { x: -40, y: -60 }, 2, 2)
            createCrystalCircle('STAGE5', 2.5, { x: -40, y: -60 }, 1, 8)
            createCrystalCircle('STAGE5', 3, { x: -40, y: -60 }, 2, 8)
            createCrystalCircle('STAGE5', 3.5, { x: -40, y: -60 }, 1, 8)
            createCrystalCircle('STAGE5', 4, { x: -40, y: -60 }, 0, 8)

            window.appConfig.stages.components.createBumper("STAGE5BUMPER0", 1, { x: -115, y: 25, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE5BUMPER1", 1, { x: -115, y: -25, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE5BUMPER_0", 1, { x: -115, y: 75, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE5BUMPER_1", 1, { x: -115, y: -75, z: 0 }, 6)

            window.appConfig.stages.components.createBumper("STAGE5BUMPER2", 1, { x: 115, y: 25, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE5BUMPER3", 1, { x: 115, y: -25, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE5BUMPER_2", 1, { x: 115, y: 75, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE5BUMPER_3", 1, { x: 115, y: -75, z: 0 }, 6)

            window.appConfig.stages.components.createBumper("STAGE5BUMPER4", 1, { x: 25, y: 115, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE5BUMPER5", 1, { x: 25, y: -115, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE5BUMPER_4", 1, { x: 75, y: 115, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE5BUMPER_5", 1, { x: 75, y: -115, z: 0 }, 6)

            window.appConfig.stages.components.createBumper("STAGE5BUMPER6", 1, { x: -25, y: -115, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE5BUMPER7", 1, { x: -25, y: 115, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE5BUMPER_6", 1, { x: -75, y: -115, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE5BUMPER_7", 1, { x: -75, y: 115, z: 0 }, 6)

            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINA',
              position: {
                x: 100 / 2,
                y: 100 / 2,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINA')
            })
            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINB',
              position: {
                x: 102 / 2,
                y: 102 / 2,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINB')
            })
            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINC',
              position: {
                x: 101 / 2,
                y: 101 / 2,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINC')
            })
            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOIND',
              position: {
                x: 104 / 2,
                y: 104 / 2,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOIND')
            })

            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINE',
              position: {
                x: 100 / 2,
                y: -100 / 2,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINE')
            })
            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINF',
              position: {
                x: 102 / 2,
                y: -102 / 2,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINF')
            })
            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOING',
              position: {
                x: 101 / 2,
                y: -101 / 2,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOING')
            })
            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINH',
              position: {
                x: 104 / 2,
                y: -104 / 2,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINH')
            })

            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINI',
              position: {
                x: -100 / 2,
                y: -100 / 2,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINI')
            })
            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINJ',
              position: {
                x: -102 / 2,
                y: -102 / 2,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINJ')
            })
            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINK',
              position: {
                x: -101 / 2,
                y: -101 / 2,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINK')
            })
            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINL',
              position: {
                x: -104 / 2,
                y: -104 / 2,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINL')
            })

            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINM',
              position: {
                x: -100 / 2,
                y: 100 / 2,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINM')
            })
            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINN',
              position: {
                x: -102 / 2,
                y: 102 / 2,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINN')
            })
            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINO',
              position: {
                x: -101 / 2,
                y: 101 / 2,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINO')
            })
            window.appConfig.createSphere({
              bounce: 1,
              name: window.appConfig.currentStage + '_SPHERECOINP',
              position: {
                x: -104 / 2,
                y: 104 / 2,
                z: 0
              },
              handleCollision: (c) => window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOINP')
            })


            window.appConfig.stages.components.createSapphire({ x: -100, y: -100, z: 0 })
            window.appConfig.stages.components.createSapphire({ x: -110, y: -100, z: 0 })
            window.appConfig.stages.components.createSapphire({ x: -120, y: -100, z: 0 })
            window.appConfig.stages.components.createSapphire({ x: -130, y: 100, z: 0 })
            window.appConfig.stages.components.createSapphire({ x: -140, y: 100, z: 0 })
            window.appConfig.stages.components.createBlueIsland()

            window.appConfig.stages.STAGE5.STAGE5PRIZE0 = scene.children.find((obj) => obj.name === "STAGE5PRIZE0")
            window.appConfig.stages.STAGE5.STAGE5PRIZE1 = scene.children.find((obj) => obj.name === "STAGE5PRIZE1")
            window.appConfig.stages.STAGE5.STAGE5PRIZE2 = scene.children.find((obj) => obj.name === "STAGE5PRIZE2")
            window.appConfig.stages.STAGE5.STAGE5PRIZE3 = scene.children.find((obj) => obj.name === "STAGE5PRIZE3")

            window.appConfig.stages.STAGE5.STAGE5MAINSTRUCTURE1 = scene.children.find((obj) => obj.name === "STAGE5MAINSTRUCTURE1")

            window.appConfig.stages.STAGE5.STAGE5CROSSBEAMSTRUCTURE = scene.children.find((obj) => obj.name === "STAGE5CROSSBEAMSTRUCTURE")
            window.appConfig.stages.STAGE5.STAGE5CROSSBEAMSTRUCTUREA = scene.children.find((obj) => obj.name === "STAGE5CROSSBEAMSTRUCTUREA")
            window.appConfig.stages.STAGE5.STAGE5CROSSBEAMSTRUCTUREB = scene.children.find((obj) => obj.name === "STAGE5CROSSBEAMSTRUCTUREB")
            window.appConfig.stages.STAGE5.STAGE5CROSSBEAMSTRUCTUREC = scene.children.find((obj) => obj.name === "STAGE5CROSSBEAMSTRUCTUREC")

            window.appConfig.stages.STAGE5.STAGE5MINORSTRUCTURE = scene.children.find((obj) => obj.name === "STAGE5MINORSTRUCTURE")
            window.appConfig.stages.STAGE5.STAGE5MINORSTRUCTUREA = scene.children.find((obj) => obj.name === "STAGE5MINORSTRUCTUREA")
            window.appConfig.stages.STAGE5.STAGE5MINORSTRUCTUREB = scene.children.find((obj) => obj.name === "STAGE5MINORSTRUCTUREB")
            window.appConfig.stages.STAGE5.STAGE5MINORSTRUCTUREC = scene.children.find((obj) => obj.name === "STAGE5MINORSTRUCTUREC")

            window.appConfig.stages.STAGE5.data.started = true
          }
        },
        STAGE6: {
          data: {
            started: false,
            xAdj: -60,
            vAdj: -70,
            sAdj: 2,
            startingPosition: window.appConfig.originVector,
            sapphirePortalPosition: { x: -100, y: 75, z: -5 }
          },
          backgroundColors: stageProperties.STAGE6.backgroundColors,
          basicColors: stageProperties.STAGE6.basicColors,
          sounds: stageProperties.STAGE6.sounds,
          name: stageProperties.STAGE6.name,
          number: stageProperties.STAGE6.number,
          defaultTransforms: [
            // 'STAGE5PRIZE0',
            // 'STAGE5PRIZE1',
            // 'STAGE5PRIZE2',
            // 'STAGE5PRIZE3',
            // 'STAGE5CROSSBEAMSTRUCTURE',
            // 'STAGE5CROSSBEAMSTRUCTUREA',
            // 'STAGE5CROSSBEAMSTRUCTUREB',
            // 'STAGE5CROSSBEAMSTRUCTUREC',
            'STAGE6MINORSTRUCTURE',
            'STAGE6MINORSTRUCTUREA',
            'STAGE6MINORSTRUCTUREB',
            'STAGE6MINORSTRUCTUREC',
            'STAGE6MINORSTRUCTURED',
            'STAGE6MINORSTRUCTUREE'
          ],
          transforms: {
            // 'STAGE5PRIZE0': { r: { x: .005, y: .005, z: .005 } },
            // 'STAGE5PRIZE1': { r: { x: .005, y: .005, z: .005 } },
            // 'STAGE5PRIZE2': { r: { x: .005, y: .005, z: .005 } },
            // 'STAGE5PRIZE3': { r: { x: .005, y: .005, z: .005 } },
            // 'STAGE5MAINSTRUCTURE1': { r: { x: 0, y: 0, z: -.005 } },

            // 'STAGE5CROSSBEAMSTRUCTURE': { r: { x: 0, y: 0, z: .01 } },
            // 'STAGE5CROSSBEAMSTRUCTUREA': { r: { x: 0, y: 0, z: -.01 } },
            'STAGE6MINORSTRUCTURE': { r: { x: 0, y: 0, z: .01 } },
            'STAGE6MINORSTRUCTUREA': { r: { x: 0, y: 0, z: .01 } },
            'STAGE6MINORSTRUCTUREB': { r: { x: 0, y: 0, z: -.005 } },
            'STAGE6MINORSTRUCTUREC': { r: { x: 0, y: 0, z: -.005 } },
            'STAGE6MINORSTRUCTURED': { r: { x: 0, y: 0, z: .0025 } },
            'STAGE6MINORSTRUCTUREE': { r: { x: 0, y: 0, z: .0025 } },

            // 'STAGE5CROSSBEAMSTRUCTUREB': { r: { x: 0, y: 0, z: -.01 } },
            // 'STAGE5CROSSBEAMSTRUCTUREC': { r: { x: 0, y: 0, z: .01 } },
            // 'STAGE5MINORSTRUCTUREB': { r: { x: 0, y: 0, z: -.01 } },
            // 'STAGE5MINORSTRUCTUREC': { r: { x: 0, y: 0, z: -.01 } }
          },
          teardown: () => {
            teardownStage('STAGE6')
            window.appConfig.stages.STAGE6.data.started = false
          },
          initBackground: () => {
            const createBackgroundAnimation = () => {
              const bgGroup = new THREE.Group()
              bgGroup.name = 'STAGE6BGGROUP'
              const elementGeometry = new THREE.IcosahedronGeometry(1, 0)
              const elementMaterials = [
                new THREE.MeshPhongMaterial({ color: stageProperties.STAGE6.backgroundColors[0], transparent: true, opacity: .25 }),
                new THREE.MeshPhongMaterial({ color: stageProperties.STAGE6.backgroundColors[1], transparent: true, opacity: .25 }),
                new THREE.MeshPhongMaterial({ color: stageProperties.STAGE6.backgroundColors[2], transparent: true, opacity: .25 }),
                new THREE.MeshPhongMaterial({ color: stageProperties.STAGE6.backgroundColors[3], transparent: true, opacity: .25 }),
              ]

              const numberOfElements = 50
              let elementI = 0
              for (elementI; elementI < numberOfElements; elementI++) {
                bgGroup.add(new THREE.Mesh(elementGeometry, elementMaterials[elementI % elementMaterials.length]))
              }
              scene.add(bgGroup)
              bgGroup.position.set(0, 0, -10)
              bgGroup.children.forEach(c => {
                c.position.set(Math.random() * 200 - 100, Math.random() * 200 - 100, -20 + Math.random() * -30)
                const bgElementScale = 1 + Math.random() * 10
                c.scale.set(bgElementScale, bgElementScale, bgElementScale)
                c.rotation.z = (Math.random() * 2) * Math.PI
              })
              bgGroup.activeCallback = () => {
                if (bgGroup) {
                  bgGroup.children.forEach((c, ci) => {
                    c.position.y += .005 * ci / 2
                    c.rotation.y += .005
                    if (c.position.y > 125) {
                      c.position.y = -125
                    }
                  })
                }
              }
              bgGroup.activeCallback()
              window.appConfig.stages['STAGE6'].bgGroupActiveCallback = bgGroup.activeCallback
            }

            createBackgroundAnimation()
          },
          init: () => {
            // const createStage0MainBeamStructure = window.appConfig.stages.components.createStage0MainBeamStructure
            // const createStage1MinorBeamStructure = window.appConfig.stages.components.createStage1MinorBeamStructure
            // const createStage3CrossBeamStructure = window.appConfig.stages.components.createStage3CrossBeamStructure
            // const createStage4PlinkoStructure = window.appConfig.stages.components.createStage4PlinkoStructure

            const createSwitchBeamWall = window.appConfig.stages.components.createSwitchBeamWall
            const createRemoteSwitch = window.appConfig.stages.components.createRemoteSwitch

            // portal
            window.appConfig.timers.activeTimers.push(
              window.appConfig.timers.addPortalToStage({ x: -75, y: 100, z: -5 }, 'GEM_STAGE_END_00', { x: 0, y: 0, z: 0 },
                window.appConfig.stages.components.gemPortalConfig())
            )

            window.appConfig.timers.activeTimers.push(
              window.appConfig.timers.addPortalToStage({ x: -100, y: 75, z: -5 }, window.appConfig.currentStage + '_SAPPHIRE_00', { x: 0, y: 300, z: 0 },
                window.appConfig.stages.components.sapphirePortalConfig())
            )

            const createStage6Portals = () => {
              window.appConfig.stages.components.createDiamond({ x: 10, y: -17.5, z: -2.5 }, false, 'GEM_STAGE_END_00')
              window.appConfig.stages.components.createEmerald({ x: 6.5, y: -24, z: -2.5 }, false, 'GEM_STAGE_END_00')
              window.appConfig.stages.components.createRuby({ x: 13, y: -24, z: -2.5 }, false, 'GEM_STAGE_END_00')
              let ellipseGeometry = new THREE.CircleGeometry(4.125, 5)
              ellipseGeometry.rotateZ((2 * Math.PI) / 20)

              let i = 1;
              for (i; i < ellipseGeometry.vertices.length; i++) {
                window.appConfig.stages.components.createSapphire({ x: ellipseGeometry.vertices[i].x, y: ellipseGeometry.vertices[i].y, z: 0 }, false, false, '_SAPPHIRE_00')
              }
            }

            window.appConfig.stages.components.setUpPortalIndicators(createStage6Portals)

            createCrystalCircle('STAGE6', 3, { x: -75, y: 100 }, 0, 8)
            createCrystalCircle('STAGE6', 3.5, { x: -75, y: 100 }, 1, 16)
            createCrystalCircle('STAGE6', 4, { x: -75, y: 100 }, 2, 16)

            createCrystalCircle('STAGE6', 3, { x: -100, y: 75 }, 0, 8)
            createCrystalCircle('STAGE6', 3.5, { x: -100, y: 75 }, 1, 16)
            createCrystalCircle('STAGE6', 4, { x: -100, y: 75 }, 2, 16)


            const stage6MinorBeamStructure = window.appConfig.stages.components.createStage1MinorBeamStructure(
              1,
              0,
              "STAGE6MINORSTRUCTURE",
              { x: 0, y: 0 }
            );
            // stage6MainBeamStructure.rotation.z = .25 * Math.PI
            scene.add(stage6MinorBeamStructure);

            const stage6MinorBeamStructureA = window.appConfig.stages.components.createStage1MinorBeamStructure(
              1,
              0,
              "STAGE6MINORSTRUCTUREA",
              { x: 0, y: 0 }
            );
            stage6MinorBeamStructureA.rotation.z = .25 * Math.PI
            scene.add(stage6MinorBeamStructureA);

            const stage6MinorBeamStructureB = window.appConfig.stages.components.createStage1MinorBeamStructure(
              2,
              -.5,
              "STAGE6MINORSTRUCTUREB",
              { x: 0, y: 0 }
            );
            // stage6MainBeamStructure.rotation.z = .25 * Math.PI
            scene.add(stage6MinorBeamStructureB);

            const stage6MinorBeamStructureC = window.appConfig.stages.components.createStage1MinorBeamStructure(
              2,
              -.5,
              "STAGE6MINORSTRUCTUREC",
              { x: 0, y: 0 }
            );
            stage6MinorBeamStructureC.rotation.z = .25 * Math.PI
            scene.add(stage6MinorBeamStructureC);



            const stage6MinorBeamStructureD = window.appConfig.stages.components.createStage1MinorBeamStructure(
              3,
              -.75,
              "STAGE6MINORSTRUCTURED",
              { x: 0, y: 0 }
            );
            // stage6MainBeamStructure.rotation.z = .25 * Math.PI
            scene.add(stage6MinorBeamStructureD);

            const stage6MinorBeamStructureE = window.appConfig.stages.components.createStage1MinorBeamStructure(
              3,
              -.75,
              "STAGE6MINORSTRUCTUREE",
              { x: 0, y: 0 }
            );
            stage6MinorBeamStructureE.rotation.z = .25 * Math.PI
            scene.add(stage6MinorBeamStructureE);





            const stage6MainBeamStructure = window.appConfig.stages.components.createStage0MainBeamStructure(
              15.5,
              0.57,
              "STAGE6MAINSTRUCTURE",
              { x: 0, y: 0 }
              // [0, 0, 0, 1]
              // [bottom, left, right, top]
            );
            // stage6MainBeamStructure.rotation.z = .25 * Math.PI
            scene.add(stage6MainBeamStructure);

            const stage6MainBeamStructureA = window.appConfig.stages.components.createStage0MainBeamStructure(
              12,
              -0.57,
              "STAGE6MAINSTRUCTUREA",
              { x: 0, y: 0 }
              // [0, 0, 0, 1]
              // [bottom, left, right, top]
            );
            stage6MainBeamStructureA.rotation.z = .25 * Math.PI
            scene.add(stage6MainBeamStructureA);

            // const stage6MainBeamStructureB = window.appConfig.stages.components.createStage0MainBeamStructure(
            //   8.5,
            //   -0.28,
            //   "STAGE6MAINSTRUCTUREB",
            //   { x: 0, y: 0 }
            // );
            // scene.add(stage6MainBeamStructureB);


            createCrystalCircle('STAGE6', 2.5, { x: 0, y: 0 }, 0, 4)
            createCrystalCircle('STAGE6', 3, { x: 0, y: 0 }, 1, 4)
            createCrystalCircle('STAGE6', 3.5, { x: 0, y: 0 }, 0, 8)
            createCrystalCircle('STAGE6', 4, { x: 0, y: 0 }, 1, 8)
            createCrystalCircle('STAGE6', 4.5, { x: 0, y: 0 }, 1, 8)
            createCrystalCircle('STAGE6', 5, { x: 0, y: 0 }, 0, 16)
            createCrystalCircle('STAGE6', 5.5, { x: 0, y: 0 }, 1, 16)
            createCrystalCircle('STAGE6', 6, { x: 0, y: 0 }, 2, 16)
            createCrystalCircle('STAGE6', 6.5, { x: 0, y: 0 }, 1, 16)
            createCrystalCircle('STAGE6', 7, { x: 0, y: 0 }, 1, 16)
            createCrystalCircle('STAGE6', 7.5, { x: 0, y: 0 }, 2, 24)
            createCrystalCircle('STAGE6', 8, { x: 0, y: 0 }, 1, 24)
            // createCrystalCircle('STAGE6', 8.5, { x: 0, y: 0 }, 1, 24)



            createCrystalCircle('STAGE6', 2.5, { x: 0, y: 97.5 }, 2, 4)
            createCrystalCircle('STAGE6', 3, { x: 0, y: 97.5 }, 0, 8)
            createCrystalCircle('STAGE6', 3.5, { x: 0, y: 97.5 }, 1, 8)
            createCrystalCircle('STAGE6', 4, { x: 0, y: 97.5 }, 2, 16)
            createCrystalCircle('STAGE6', 4.5, { x: 0, y: 97.5 }, 1, 16)

            createCrystalCircle('STAGE6', 1.5, { x: 30, y: 85 }, 1, 2)
            createCrystalCircle('STAGE6', 2.5, { x: 30, y: 85 }, 0, 8)

            createCrystalCircle('STAGE6', 1.5, { x: -30, y: 85 }, 1, 2)
            createCrystalCircle('STAGE6', 2.5, { x: -30, y: 85 }, 0, 8)

            createCrystalCircle('STAGE6', 1.5, { x: 30, y: 110 }, 2, 2)
            createCrystalCircle('STAGE6', 2.5, { x: 30, y: 110 }, 1, 8)

            createCrystalCircle('STAGE6', 1.5, { x: -30, y: 110 }, 2, 2)
            createCrystalCircle('STAGE6', 2.5, { x: -30, y: 110 }, 1, 8)


            createRemoteSwitch({
              transmitter: {
                p: { x: 0, y: 97.5, z: 0 }
              },
              receiver: {
                p: { x: -55, y: -20, z: 0 },
                name: 'STAGE6_RECEIVER_A'
              }
            })

            createSwitchBeamWall({ s: 3.5, dir: 'y', p: { x: -47.5, y: 93.5, z: 0 }, receiver: { name: 'STAGE6_RECEIVER_A' }, switchBeamAdj: 0 })


            createRemoteSwitch({
              transmitter: {
                p: { x: 0, y: 97.5, z: 0 }
              },
              receiver: {
                p: { x: -55, y: -20, z: 0 },
                name: 'STAGE6_RECEIVER_B'
              }
            })

            createSwitchBeamWall({ s: 3.5, dir: 'y', p: { x: 47.5, y: 93.5, z: 0 }, receiver: { name: 'STAGE6_RECEIVER_B' }, switchBeamAdj: 0 })

            createCrystalCircle('STAGE6', 2.5, { x: 97.5, y: 0 }, 2, 4)
            createCrystalCircle('STAGE6', 3, { x: 97.5, y: 0 }, 0, 8)
            createCrystalCircle('STAGE6', 3.5, { x: 97.5, y: 0 }, 1, 8)
            createCrystalCircle('STAGE6', 4, { x: 97.5, y: 0 }, 2, 16)
            createCrystalCircle('STAGE6', 4.5, { x: 97.5, y: 0 }, 1, 16)

            createCrystalCircle('STAGE6', 1.5, { x: 85, y: 30 }, 1, 2)
            createCrystalCircle('STAGE6', 2.5, { x: 85, y: 30 }, 0, 8)

            createCrystalCircle('STAGE6', 1.5, { x: 85, y: -30 }, 1, 2)
            createCrystalCircle('STAGE6', 2.5, { x: 85, y: -30 }, 0, 8)

            createCrystalCircle('STAGE6', 1.5, { x: 110, y: 30 }, 2, 2)
            createCrystalCircle('STAGE6', 2.5, { x: 110, y: 30 }, 1, 8)

            createCrystalCircle('STAGE6', 1.5, { x: 110, y: -30 }, 2, 2)
            createCrystalCircle('STAGE6', 2.5, { x: 110, y: -30 }, 1, 8)

            createRemoteSwitch({
              transmitter: {
                p: { x: 97.5, y: 0, z: 0 }
              },
              receiver: {
                p: { x: -55, y: -20, z: 0 },
                name: 'STAGE6_RECEIVER_C'
              }
            })

            createSwitchBeamWall({ s: 3.5, dir: 'x', p: { x: 93.5, y: 47.5, z: 0 }, receiver: { name: 'STAGE6_RECEIVER_C' }, switchBeamAdj: 0 })

            createRemoteSwitch({
              transmitter: {

                p: { x: 0, y: -97.5, z: 0 }
              },
              receiver: {
                p: { x: -55, y: -20, z: 0 },
                name: 'STAGE6_RECEIVER_D'
              }
            })

            createSwitchBeamWall({ s: 3.5, dir: 'y', p: { x: 47.5, y: -117, z: 0 }, receiver: { name: 'STAGE6_RECEIVER_D' }, switchBeamAdj: 0 })

            createCrystalCircle('STAGE6', 2.5, { x: 0, y: -97.5 }, 2, 4)
            createCrystalCircle('STAGE6', 3, { x: 0, y: -97.5 }, 0, 8)
            createCrystalCircle('STAGE6', 3.5, { x: 0, y: -97.5 }, 1, 8)
            createCrystalCircle('STAGE6', 4, { x: 0, y: -97.5 }, 2, 16)
            createCrystalCircle('STAGE6', 4.5, { x: 0, y: -97.5 }, 1, 16)

            createCrystalCircle('STAGE6', 1.5, { x: 30, y: -85 }, 1, 2)
            createCrystalCircle('STAGE6', 2.5, { x: 30, y: -85 }, 0, 8)

            createCrystalCircle('STAGE6', 1.5, { x: -30, y: -85 }, 1, 2)
            createCrystalCircle('STAGE6', 2.5, { x: -30, y: -85 }, 0, 8)

            createCrystalCircle('STAGE6', 1.5, { x: 30, y: -110 }, 2, 2)
            createCrystalCircle('STAGE6', 2.5, { x: 30, y: -110 }, 1, 8)

            createCrystalCircle('STAGE6', 1.5, { x: -30, y: -110 }, 2, 2)
            createCrystalCircle('STAGE6', 2.5, { x: -30, y: -110 }, 1, 8)

            createRemoteSwitch({
              transmitter: {
                p: { x: 97.5, y: 0, z: 0 }
              },
              receiver: {
                p: { x: -55, y: -20, z: 0 },
                name: 'STAGE6_RECEIVER_E'
              }
            })

            createSwitchBeamWall({ s: 3.5, dir: 'x', p: { x: 93.5, y: -47.5, z: 0 }, receiver: { name: 'STAGE6_RECEIVER_E' }, switchBeamAdj: 0 })

            createCrystalCircle('STAGE6', 2.5, { x: -97.5, y: 0 }, 2, 4)
            createCrystalCircle('STAGE6', 3, { x: -97.5, y: 0 }, 0, 8)
            createCrystalCircle('STAGE6', 3.5, { x: -97.5, y: 0 }, 1, 8)
            createCrystalCircle('STAGE6', 4, { x: -97.5, y: 0 }, 2, 16)
            createCrystalCircle('STAGE6', 4.5, { x: -97.5, y: 0 }, 1, 16)

            createCrystalCircle('STAGE6', 1.5, { x: -85, y: 30 }, 1, 2)
            createCrystalCircle('STAGE6', 2.5, { x: -85, y: 30 }, 0, 8)

            createCrystalCircle('STAGE6', 1.5, { x: -85, y: -30 }, 1, 2)
            createCrystalCircle('STAGE6', 2.5, { x: -85, y: -30 }, 0, 8)

            createCrystalCircle('STAGE6', 1.5, { x: -110, y: 30 }, 2, 2)
            createCrystalCircle('STAGE6', 2.5, { x: -110, y: 30 }, 1, 8)

            createCrystalCircle('STAGE6', 1.5, { x: -110, y: -30 }, 2, 2)
            createCrystalCircle('STAGE6', 2.5, { x: -110, y: -30 }, 1, 8)

            createRemoteSwitch({
              transmitter: {
                p: { x: 0, y: -97.5, z: 0 }
              },
              receiver: {
                p: { x: -55, y: -20, z: 0 },
                name: 'STAGE6_RECEIVER_F'
              }
            })

            createSwitchBeamWall({ s: 3.5, dir: 'y', p: { x: -47.5, y: -117, z: 0 }, receiver: { name: 'STAGE6_RECEIVER_F' }, switchBeamAdj: 0 })

            createRemoteSwitch({
              transmitter: {
                p: { x: -97.5, y: 0, z: 0 }
              },
              receiver: {
                p: { x: -55, y: -20, z: 0 },
                name: 'STAGE6_RECEIVER_G'
              }
            })

            createSwitchBeamWall({ s: 3.5, dir: 'x', p: { x: -117, y: -47.5, z: 0 }, receiver: { name: 'STAGE6_RECEIVER_G' }, switchBeamAdj: 0 })

            createRemoteSwitch({
              transmitter: {
                p: { x: -97.5, y: 0, z: 0 }
              },
              receiver: {
                p: { x: -55, y: -20, z: 0 },
                name: 'STAGE6_RECEIVER_H'
              }
            })

            createSwitchBeamWall({ s: 3.5, dir: 'x', p: { x: -117, y: 47.5, z: 0 }, receiver: { name: 'STAGE6_RECEIVER_H' }, switchBeamAdj: 0 })

            prize(6, 400, { x: -47.5, y: -67.5, z: 0 })
            prize(6, 400, { x: -57.5, y: -57.5, z: 0 })
            prize(6, 400, { x: -67.5, y: -47.5, z: 0 })

            prize(6, 400, { x: 47.5, y: -67.5, z: 0 })
            prize(6, 400, { x: 57.5, y: -57.5, z: 0 })
            prize(6, 400, { x: 67.5, y: -47.5, z: 0 })

            prize(6, 400, { x: -47.5, y: 67.5, z: 0 })
            prize(6, 400, { x: -57.5, y: 57.5, z: 0 })
            prize(6, 400, { x: -67.5, y: 47.5, z: 0 })

            prize(6, 400, { x: 47.5, y: 67.5, z: 0 })
            prize(6, 400, { x: 57.5, y: 57.5, z: 0 })
            prize(6, 400, { x: 67.5, y: 47.5, z: 0 })

            prize(6, 400, { x: -115, y: -115, z: 0 })
            prize(6, 400, { x: -115, y: 115, z: 0 })
            prize(6, 400, { x: 115, y: -115, z: 0 })
            prize(6, 400, { x: 115, y: 115, z: 0 })

            prize(6, 400, { x: -115, y: -70, z: 0 })
            prize(6, 400, { x: -70, y: -115, z: 0 })

            prize(6, 400, { x: 115, y: -70, z: 0 })
            prize(6, 400, { x: 70, y: -115, z: 0 })

            prize(6, 400, { x: -115, y: 70, z: 0 })
            prize(6, 400, { x: -70, y: 115, z: 0 })

            prize(6, 400, { x: 115, y: 70, z: 0 })
            prize(6, 400, { x: 70, y: 115, z: 0 })

            createCrystalCircle('STAGE6', 2.5, { x: -92.75, y: -93.5 }, 0, 4)
            createCrystalCircle('STAGE6', 3, { x: -92.75, y: -93.5 }, 1, 4)
            createCrystalCircle('STAGE6', 3.5, { x: -92.75, y: -93.5 }, 0, 12)
            createCrystalCircle('STAGE6', 4, { x: -92.75, y: -93.5 }, 1, 16)
            createCrystalCircle('STAGE6', 4.5, { x: -92.75, y: -93.5 }, 1, 16)

            window.appConfig.stages.components.createRuby({ x: -92.75, y: -95.5, z: 0 })

            createCrystalCircle('STAGE6', 2.5, { x: 92.75, y: 93.5 }, 0, 4)
            createCrystalCircle('STAGE6', 3, { x: 92.75, y: 93.5 }, 1, 4)
            createCrystalCircle('STAGE6', 3.5, { x: 92.75, y: 93.5 }, 0, 12)
            createCrystalCircle('STAGE6', 4, { x: 92.75, y: 93.5 }, 1, 16)
            createCrystalCircle('STAGE6', 4.5, { x: 92.75, y: 93.5 }, 1, 16)

            window.appConfig.stages.components.createEmerald({ x: 92.75, y: 92.5, z: 0 })

            createCrystalCircle('STAGE6', 2.5, { x: 92.75, y: -93.5 }, 0, 4)
            createCrystalCircle('STAGE6', 3, { x: 92.75, y: -93.5 }, 1, 4)
            createCrystalCircle('STAGE6', 3.5, { x: 92.75, y: -93.5 }, 0, 12)
            createCrystalCircle('STAGE6', 4, { x: 92.75, y: -93.5 }, 1, 16)
            createCrystalCircle('STAGE6', 4.5, { x: 92.75, y: -93.5 }, 1, 16)

            window.appConfig.stages.components.createDiamond({ x: 92.5, y: -94.5, z: 0 })

            window.appConfig.stages.components.createSapphire({ x: -100, y: -100, z: 0 })
            window.appConfig.stages.components.createSapphire({ x: -110, y: -100, z: 0 })
            window.appConfig.stages.components.createSapphire({ x: -120, y: -100, z: 0 })
            window.appConfig.stages.components.createSapphire({ x: -130, y: 100, z: 0 })
            window.appConfig.stages.components.createSapphire({ x: -140, y: 100, z: 0 })

            window.appConfig.stages.components.createBlueIsland()

            window.appConfig.stages.components.createBumper("STAGE6BUMPER0", 1, { x: -60, y: -100, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE6BUMPER0", 1, { x: -100, y: -60, z: 0 }, 6)

            window.appConfig.stages.components.createBumper("STAGE6BUMPER0", 1, { x: 60, y: -100, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE6BUMPER0", 1, { x: 100, y: -60, z: 0 }, 6)

            window.appConfig.stages.components.createBumper("STAGE6BUMPER0", 1, { x: 60, y: 100, z: 0 }, 6)
            window.appConfig.stages.components.createBumper("STAGE6BUMPER0", 1, { x: 100, y: 60, z: 0 }, 6)

            window.appConfig.stages.components.createBumper("STAGE6BUMPER0", 1, { x: -105, y: 105, z: 0 }, 6)

            window.appConfig.stages.STAGE6.STAGE6MINORSTRUCTURE = scene.children.find((obj) => obj.name === "STAGE6MINORSTRUCTURE")
            window.appConfig.stages.STAGE6.STAGE6MINORSTRUCTUREA = scene.children.find((obj) => obj.name === "STAGE6MINORSTRUCTUREA")
            window.appConfig.stages.STAGE6.STAGE6MINORSTRUCTUREB = scene.children.find((obj) => obj.name === "STAGE6MINORSTRUCTUREB")
            window.appConfig.stages.STAGE6.STAGE6MINORSTRUCTUREC = scene.children.find((obj) => obj.name === "STAGE6MINORSTRUCTUREC")
            window.appConfig.stages.STAGE6.STAGE6MINORSTRUCTURED = scene.children.find((obj) => obj.name === "STAGE6MINORSTRUCTURED")
            window.appConfig.stages.STAGE6.STAGE6MINORSTRUCTUREE = scene.children.find((obj) => obj.name === "STAGE6MINORSTRUCTUREE")

            window.appConfig.stages.STAGE6.data.started = true
          }
        },
        STAGE7: {
          data: {
            started: false,
            xAdj: -60,
            vAdj: -70,
            sAdj: 2,
            startingPosition: window.appConfig.originVector,
            sapphirePortalPosition: { x: 37.5/2.5, y: 125, z: -5 }
          },
          backgroundColors: stageProperties.STAGE7.backgroundColors,
          basicColors: stageProperties.STAGE7.basicColors,
          sounds: stageProperties.STAGE7.sounds,
          name: stageProperties.STAGE7.name,
          number: stageProperties.STAGE7.number,
          defaultTransforms: [
            // 'STAGE5PRIZE0',
            // 'STAGE5PRIZE1',
            // 'STAGE5PRIZE2',
            // 'STAGE5PRIZE3',
            // 'STAGE5CROSSBEAMSTRUCTURE',
            // 'STAGE5CROSSBEAMSTRUCTUREA',
            // 'STAGE5CROSSBEAMSTRUCTUREB',
            // 'STAGE5CROSSBEAMSTRUCTUREC',
            // 'STAGE7MINORSTRUCTURE',
            // 'STAGE7MINORSTRUCTUREA',
            // 'STAGE7MINORSTRUCTUREB',
            // 'STAGE7MINORSTRUCTUREC',
            // 'STAGE7MINORSTRUCTURED',
            // 'STAGE7MINORSTRUCTUREE'
          ],
          transforms: {
            // 'STAGE5PRIZE0': { r: { x: .005, y: .005, z: .005 } },
            // 'STAGE5PRIZE1': { r: { x: .005, y: .005, z: .005 } },
            // 'STAGE5PRIZE2': { r: { x: .005, y: .005, z: .005 } },
            // 'STAGE5PRIZE3': { r: { x: .005, y: .005, z: .005 } },
            // 'STAGE5MAINSTRUCTURE1': { r: { x: 0, y: 0, z: -.005 } },

            // 'STAGE5CROSSBEAMSTRUCTURE': { r: { x: 0, y: 0, z: .01 } },
            // 'STAGE5CROSSBEAMSTRUCTUREA': { r: { x: 0, y: 0, z: -.01 } },
            // 'STAGE7MINORSTRUCTURE': { r: { x: 0, y: 0, z: .01 } },
            // 'STAGE7MINORSTRUCTUREA': { r: { x: 0, y: 0, z: .01 } },
            // 'STAGE7MINORSTRUCTUREB': { r: { x: 0, y: 0, z: -.005 } },
            // 'STAGE7MINORSTRUCTUREC': { r: { x: 0, y: 0, z: -.005 } },
            // 'STAGE7MINORSTRUCTURED': { r: { x: 0, y: 0, z: .0025 } },
            // 'STAGE7MINORSTRUCTUREE': { r: { x: 0, y: 0, z: .0025 } },

            // 'STAGE5CROSSBEAMSTRUCTUREB': { r: { x: 0, y: 0, z: -.01 } },
            // 'STAGE5CROSSBEAMSTRUCTUREC': { r: { x: 0, y: 0, z: .01 } },
            // 'STAGE5MINORSTRUCTUREB': { r: { x: 0, y: 0, z: -.01 } },
            // 'STAGE5MINORSTRUCTUREC': { r: { x: 0, y: 0, z: -.01 } }
          },
          teardown: () => {
            teardownStage('STAGE7')
            window.appConfig.stages.STAGE7.data.started = false
          },
          initBackground: () => {
            const createBackgroundAnimation = () => {
              const bgGroup = new THREE.Group()
              bgGroup.name = 'STAGE7BGGROUP'
              const elementGeometry = new THREE.IcosahedronGeometry(1, 0)
              const elementMaterials = [
                new THREE.MeshPhongMaterial({ color: stageProperties.STAGE7.backgroundColors[0], transparent: true, opacity: .25 }),
                new THREE.MeshPhongMaterial({ color: stageProperties.STAGE7.backgroundColors[1], transparent: true, opacity: .25 }),
                new THREE.MeshPhongMaterial({ color: stageProperties.STAGE7.backgroundColors[2], transparent: true, opacity: .25 }),
                new THREE.MeshPhongMaterial({ color: stageProperties.STAGE7.backgroundColors[3], transparent: true, opacity: .25 }),
              ]

              const numberOfElements = 50
              let elementI = 0
              for (elementI; elementI < numberOfElements; elementI++) {
                bgGroup.add(new THREE.Mesh(elementGeometry, elementMaterials[elementI % elementMaterials.length]))
              }
              scene.add(bgGroup)
              bgGroup.position.set(0, 0, -10)
              bgGroup.children.forEach(c => {
                c.position.set(Math.random() * 200 - 100, Math.random() * 200 - 100, -20 + Math.random() * -30)
                const bgElementScale = 1 + Math.random() * 10
                c.scale.set(bgElementScale, bgElementScale, bgElementScale)
                c.rotation.z = (Math.random() * 2) * Math.PI
              })
              bgGroup.activeCallback = () => {
                if (bgGroup) {
                  bgGroup.children.forEach((c, ci) => {
                    c.position.y += .005 * ci / 2
                    c.rotation.y += .005
                    if (c.position.y > 125) {
                      c.position.y = -125
                    }
                  })
                }
              }
              bgGroup.activeCallback()
              window.appConfig.stages['STAGE7'].bgGroupActiveCallback = bgGroup.activeCallback
            }

            createBackgroundAnimation()
          },
          init: () => {

            const createSwitchBeamWall = window.appConfig.stages.components.createSwitchBeamWall
            const createRemoteSwitch = window.appConfig.stages.components.createRemoteSwitch

            // portal
            window.appConfig.timers.activeTimers.push(
              window.appConfig.timers.addPortalToStage({ x: -37.5/2.5, y: 125, z: -5 }, 'GEM_STAGE_END_00', { x: 0, y: 0, z: 0 },
                window.appConfig.stages.components.gemPortalConfig())
            )

            window.appConfig.timers.activeTimers.push(
              window.appConfig.timers.addPortalToStage({ x: 37.5/2.5, y: 125, z: -5 }, window.appConfig.currentStage + '_SAPPHIRE_00', { x: 0, y: 300, z: 0 },
                window.appConfig.stages.components.sapphirePortalConfig())
            )

            const createStage7Portals = () => {
              window.appConfig.stages.components.createDiamond({ x: 10, y: -17.5, z: -2.5 }, false, 'GEM_STAGE_END_00')
              window.appConfig.stages.components.createEmerald({ x: 6.5, y: -24, z: -2.5 }, false, 'GEM_STAGE_END_00')
              window.appConfig.stages.components.createRuby({ x: 13, y: -24, z: -2.5 }, false, 'GEM_STAGE_END_00')
              let ellipseGeometry = new THREE.CircleGeometry(4.125, 5)
              ellipseGeometry.rotateZ((2 * Math.PI) / 20)

              let i = 1;
              for (i; i < ellipseGeometry.vertices.length; i++) {
                window.appConfig.stages.components.createSapphire({ x: ellipseGeometry.vertices[i].x, y: ellipseGeometry.vertices[i].y, z: 0 }, false, false, '_SAPPHIRE_00')
              }
            }

            window.appConfig.stages.components.setUpPortalIndicators(createStage7Portals)

            const stage7MinorBeamStructure = window.appConfig.stages.components.createStage1MinorBeamStructure(
              2,
              0,
              "STAGE7MINORSTRUCTURE",
              { x: -10, y: 0 }
            );
            scene.add(stage7MinorBeamStructure);

            const stage7MinorBeamStructureA = window.appConfig.stages.components.createStage1MinorBeamStructure(
              2,
              0,
              "STAGE7MINORSTRUCTUREA",
              { x: -10, y: 0 }
            );
            stage7MinorBeamStructureA.rotation.z = .25 * Math.PI
            scene.add(stage7MinorBeamStructureA);

            const stage7MinorBeamStructureB = window.appConfig.stages.components.createStage1MinorBeamStructure(
              2,
              0,
              "STAGE7MINORSTRUCTUREB",
              { x: 10, y: 0 }
            );
            scene.add(stage7MinorBeamStructureB);

            const stage7MinorBeamStructureC = window.appConfig.stages.components.createStage1MinorBeamStructure(
              2,
              0,
              "STAGE7MINORSTRUCTUREC",
              { x: 10, y: 0 }
            );
            stage7MinorBeamStructureC.rotation.z = .25 * Math.PI
            scene.add(stage7MinorBeamStructureC);

            const stage7MainBeamStructure = window.appConfig.stages.components.createStage0MainBeamStructure(
              13,
              0.57,
              "STAGE7MAINSTRUCTURE",
              { x: 0, y: 17.5 },
              [1, 1, 0, 0]
              // [bottom, left, right, top]
            );
            stage7MainBeamStructure.rotation.z = .25 * Math.PI
            scene.add(stage7MainBeamStructure);

            const stage7MainBeamStructure2 = window.appConfig.stages.components.createStage0MainBeamStructure(
              13,
              0.57,
              "STAGE7MAINSTRUCTURE2",
              { x: 0, y: -17.5 },
              [0, 0, 1, 1]
              // [bottom, left, right, top]
            );
            stage7MainBeamStructure2.rotation.z = .25 * Math.PI
            scene.add(stage7MainBeamStructure2);


            const stage7MainBeamStructureA = window.appConfig.stages.components.createStage0MainBeamStructure(
              12,
              -0.57,
              "STAGE7MAINSTRUCTUREA",
              { x: 0, y: 0 }
              // [0, 0, 0, 1]
              // [bottom, left, right, top]
            );
            stage7MainBeamStructureA.rotation.z = 1.25 * Math.PI
            scene.add(stage7MainBeamStructureA);

            const stage7MainBeamStructureB = window.appConfig.stages.components.createStage0MainBeamStructure(
              12,
              -0.57,
              "STAGE7MAINSTRUCTUREB",
              { x: 0, y: 0 }
              // [0, 0, 0, 1]
              // [bottom, left, right, top]
            );
            // stage7MainBeamStructureB.rotation.z = 1.25 * Math.PI
            scene.add(stage7MainBeamStructureB);


            const stage7MainBeamStructureWall = window.appConfig.stages.components.createStage0MainBeamStructure(
              18.5,
              0.57,
              "STAGE7MAINSTRUCTUREWALL",
              { x: 0, y: 0 }
              // [0, 0, 0, 1]
              // [bottom, left, right, top]
            );
            stage7MainBeamStructureWall.rotation.z = .25 * Math.PI
            scene.add(stage7MainBeamStructureWall);


            createRemoteSwitch({
              transmitter: {
                p: { x: -62.5, y: 122.5, z: 0 }
              },
              receiver: {
                p: { x: -55, y: -20, z: 0 },
                name: 'STAGE7_RECEIVER_A'
              }
            })

            createSwitchBeamWall({ s: 3.5, dir: 'y', p: { x: -29, y: 102.5, z: 0 }, receiver: { name: 'STAGE7_RECEIVER_A' }, switchBeamAdj: 0 })


            createRemoteSwitch({
              transmitter: {
                p: { x: 62.5, y: 122.5, z: 0 }
              },
              receiver: {
                p: { x: -55, y: -20, z: 0 },
                name: 'STAGE7_RECEIVER_B'
              }
            })

            createSwitchBeamWall({ s: 3.5, dir: 'y', p: { x: 29, y: 102.5, z: 0 }, receiver: { name: 'STAGE7_RECEIVER_B' }, switchBeamAdj: 0 })


            createRemoteSwitch({
              transmitter: {
                p: { x: -62.5, y: -122.5, z: 0 }
              },
              receiver: {
                p: { x: -55, y: -20, z: 0 },
                name: 'STAGE7_RECEIVER_C'
              }
            })

            createSwitchBeamWall({ s: 3.5, dir: 'y', p: { x: -29, y: -126.5, z: 0 }, receiver: { name: 'STAGE7_RECEIVER_C' }, switchBeamAdj: 0 })


            createRemoteSwitch({
              transmitter: {
                p: { x: 62.5, y: -122.5, z: 0 }
              },
              receiver: {
                p: { x: -55, y: -20, z: 0 },
                name: 'STAGE7_RECEIVER_D'
              }
            })

            createSwitchBeamWall({ s: 3.5, dir: 'y', p: { x: 29, y: -126.5, z: 0 }, receiver: { name: 'STAGE7_RECEIVER_D' }, switchBeamAdj: 0 })

            const createStage7StaticCrystals = () => {
              let dlx0 = 150
              let dly0 = 35
              let dlMax = 6
              for(let dli = 0; dli < dlMax; dli++) {
                createCrystalCircle('STAGE7', 1.5, { x: dlx0 - (dli * 25), y: dly0 + (dli * 25)}, dli % 2, 4)
                createCrystalCircle('STAGE7', 2.25, { x: dlx0 - (dli * 25), y: dly0 + (dli * 25)}, (dli + 1) % 2, 6)  
                createCrystalCircle('STAGE7', 2.75, { x: dlx0 - (dli * 25), y: dly0 + (dli * 25)}, (dli + 2) % 2, 12)  
                createCrystalCircle('STAGE7', 1.5, { x: dlx0 - (dli * 25), y: (dly0 + (dli * 25)) * -1}, dli % 2, 4)
                createCrystalCircle('STAGE7', 2.25, { x: dlx0 - (dli * 25), y: (dly0 + (dli * 25)) * -1}, (dli + 1) % 2, 6)  
                createCrystalCircle('STAGE7', 2.75, { x: dlx0 - (dli * 25), y: (dly0 + (dli * 25)) * -1}, (dli + 2) % 2, 12)  
  
                createCrystalCircle('STAGE7', 1.5, { x: (dlx0 - (dli * 25)) * -1, y: dly0 + (dli * 25)}, dli % 2, 4)
                createCrystalCircle('STAGE7', 2.25, { x: (dlx0 - (dli * 25)) * -1, y: dly0 + (dli * 25)}, (dli + 1) % 2, 6)  
                createCrystalCircle('STAGE7', 2.75, { x: (dlx0 - (dli * 25)) * -1, y: dly0 + (dli * 25)}, (dli + 2) % 2, 12)  
                createCrystalCircle('STAGE7', 1.5, { x: (dlx0 - (dli * 25)) * -1, y: (dly0 + (dli * 25)) * -1}, dli % 2, 4)
                createCrystalCircle('STAGE7', 2.25, { x: (dlx0 - (dli * 25)) * -1, y: (dly0 + (dli * 25)) * -1}, (dli + 1) % 2, 6)  
                createCrystalCircle('STAGE7', 2.75, { x: (dlx0 - (dli * 25)) * -1, y: (dly0 + (dli * 25)) * -1}, (dli + 2) % 2, 12)  
              }  
            }
            createStage7StaticCrystals()
            

            const createStage7Crystals = (xScale = 1, yScale = 1, xTranslate = 0, yTranslate = 0) => {

              let clx0 = 10 * xScale + xTranslate
              let cly0 = 10 * yScale + yTranslate
              createCrystalCircle('STAGE7', 2, { x: clx0, y: cly0 }, 0, 4)
              createCrystalCircle('STAGE7', 2.5, { x: clx0, y: cly0 }, 1, 8)
              createCrystalCircle('STAGE7', 1.5, { x: clx0 * 3, y: cly0 }, 0, 4)
              createCrystalCircle('STAGE7', 2.25, { x: clx0 * 3, y: cly0 }, 1, 8)
              createCrystalCircle('STAGE7', 2, { x: clx0 * 5, y: cly0 }, 0, 4)
              createCrystalCircle('STAGE7', 2.5, { x: clx0 * 5, y: cly0 }, 1, 8)
              createCrystalCircle('STAGE7', 1.5, { x: clx0 * 6.25, y: cly0 * 2.25 }, 0, 4)
              createCrystalCircle('STAGE7', 2.25, { x: clx0 * 6.25, y: cly0 * 2.25 }, 1, 8)

              cly0 = cly0 * -1
              createCrystalCircle('STAGE7', 2, { x: clx0, y: cly0 }, 0, 4)
              createCrystalCircle('STAGE7', 2.5, { x: clx0, y: cly0 }, 1, 8)
              createCrystalCircle('STAGE7', 1.5, { x: clx0 * 3, y: cly0 }, 0, 4)
              createCrystalCircle('STAGE7', 2.25, { x: clx0 * 3, y: cly0 }, 1, 8)
              createCrystalCircle('STAGE7', 2, { x: clx0 * 5, y: cly0 }, 0, 4)
              createCrystalCircle('STAGE7', 2.5, { x: clx0 * 5, y: cly0 }, 1, 8)
              createCrystalCircle('STAGE7', 1.5, { x: clx0 * 6.25, y: cly0 * 2.25 }, 0, 4)
              createCrystalCircle('STAGE7', 2.25, { x: clx0 * 6.25, y: cly0 * 2.25 }, 1, 8)


              let cx0 = 125 * xScale + xTranslate
              let cx1 = 170 * xScale + xTranslate
              createCrystalCircle('STAGE7', 2.5, { x: cx0, y: 0 }, 2, 4)
              createCrystalCircle('STAGE7', 3, { x: cx0, y: 0 }, 0, 8)
              createCrystalCircle('STAGE7', 3.5, { x: cx0, y: 0 }, 1, 8)
              createCrystalCircle('STAGE7', 4, { x: cx0, y: 0 }, 2, 16)
              createCrystalCircle('STAGE7', 4.5, { x: cx0, y: 0 }, 1, 16)

              prize(7, 400, { x: cx0, y: 0, z: 0 })
              prize(7, 400, { x: cx0, y: 0, z: 0 })

              let cpx0 = 80 * xScale + xTranslate
              let cpx1 = 10 * xScale + xTranslate
              let cpy1 = 70 * yScale + xTranslate


              prize(7, 400, { x: 0, y: 190, z: 0 })
              prize(7, 400, { x: 0, y: -190, z: 0 })
              prize(7, 400, { x: 197.5, y: 0, z: 0 })
              prize(7, 400, { x: -197.5, y: 0, z: 0 })

              prize(7, 400, { x: cpx0, y: 0, z: 0 })
              prize(7, 400, { x: cpx0, y: 0, z: 0 })
              prize(7, 400, { x: cpx1, y: cpy1, z: 0 })
              prize(7, 400, { x: cpx1, y: -cpy1, z: 0 })

              let cpx2 = 20 * xScale + xTranslate
              let cpy2 = 105 * yScale + yTranslate

              prize(7, 400, { x: cpx2, y: cpy2, z: 0 })
              prize(7, 400, { x: cpx2, y: -cpy2, z: 0 })

              let cpx3 = 137.5 * xScale + xTranslate
              let cpy3 = 47.5 * yScale + yTranslate

              prize(7, 400, { x: cpx3, y: cpy3, z: 0 })
              prize(7, 400, { x: cpx3, y: -cpy3, z: 0 })

              let cpx4 = (47.5 - 10) * xScale + xTranslate
              let cpy4 = (137.5 + 10) * yScale + yTranslate

              prize(7, 400, { x: cpx4, y: cpy4, z: 0 })
              prize(7, 400, { x: cpx4, y: -cpy4, z: 0 })


              createCrystalCircle('STAGE7', 2.5, { x: cx1, y: 0 }, 0, 4)
              createCrystalCircle('STAGE7', 3, { x: cx1, y: 0 }, 1, 8)
              createCrystalCircle('STAGE7', 3.5, { x: cx1, y: 0 }, 2, 8)
              createCrystalCircle('STAGE7', 4, { x: cx1, y: 0 }, 1, 16)
              createCrystalCircle('STAGE7', 4.5, { x: cx1, y: 0 }, 0, 16)
  
              let cx2 = 65 * xScale + xTranslate
              let cy2 = 45 * yScale + yTranslate
  
              createCrystalCircle('STAGE7', 1.5, { x: cx2, y: cy2 }, 1, 2)
              createCrystalCircle('STAGE7', 2.5, { x: cx2, y: cy2 }, 0, 8)
              createCrystalCircle('STAGE7', 3, { x: cx2, y: cy2 }, 2, 8)
  
              createCrystalCircle('STAGE7', 1.5, { x: cx2, y: -cy2 }, 1, 2)
              createCrystalCircle('STAGE7', 2.5, { x: cx2, y: -cy2 }, 0, 8)
              createCrystalCircle('STAGE7', 3, { x: cx2, y: -cy2 }, 2, 8)
  
              let cx3 = 35 * xScale + xTranslate
              let cy3 = 65 * yScale + yTranslate
  
              createCrystalCircle('STAGE7', 1.5, { x: cx3, y: cy3 }, 1, 2)
              createCrystalCircle('STAGE7', 2.5, { x: cx3, y: cy3 }, 0, 8)
              createCrystalCircle('STAGE7', 3, { x: cx3, y: cy3 }, 2, 8)
              createCrystalCircle('STAGE7', 3.5, { x: cx3, y: cy3 }, 1, 16)
              createCrystalCircle('STAGE7', 4, { x: cx3, y: cy3 }, 2, 8)
  
              createCrystalCircle('STAGE7', 1.5, { x: cx3, y: -cy3 }, 1, 2)
              createCrystalCircle('STAGE7', 2.5, { x: cx3, y: -cy3 }, 0, 8)
              createCrystalCircle('STAGE7', 3, { x: cx3, y: -cy3 }, 2, 8)
              createCrystalCircle('STAGE7', 3.5, { x: cx3, y: -cy3 }, 1, 16)
              createCrystalCircle('STAGE7', 4, { x: cx3, y: -cy3 }, 2, 8)
  
              let lx0 = 80 * xScale + xTranslate
              let ly0 = 15 * yScale + yTranslate
              let lx1 = 110 * xScale + xTranslate
              let ly1 = 30 * yScale + yTranslate

              createCrystalCircle('STAGE7', 1.5, { x: lx0, y: ly0 }, 1, 2)
              createCrystalCircle('STAGE7', 2.5, { x: lx0, y: ly0 }, 0, 8)
              createCrystalCircle('STAGE7', 3, { x: lx0, y: ly0 }, 0, 16)
  
              createCrystalCircle('STAGE7', 1.5, { x: lx0, y: -ly0 }, 1, 2)
              createCrystalCircle('STAGE7', 2.5, { x: lx0, y: -ly0 }, 0, 8)
              createCrystalCircle('STAGE7', 3, { x: lx0, y: -ly0 }, 0, 16)
  
              createCrystalCircle('STAGE7', 1.5, { x: lx1, y: ly1 }, 2, 2)
              createCrystalCircle('STAGE7', 2.5, { x: lx1, y: ly1 }, 1, 8)
              createCrystalCircle('STAGE7', 3, { x: lx1, y: ly1 }, 0, 16)
  
              createCrystalCircle('STAGE7', 1.5, { x: lx1, y: -ly1 }, 2, 2)
              createCrystalCircle('STAGE7', 2.5, { x: lx1, y: -ly1 }, 1, 8)
              createCrystalCircle('STAGE7', 3, { x: lx1, y: -ly1 }, 0, 16)

            }

            const createStage7Bumpers = (xScale = 1, yScale = 1, xTranslate = 0, yTranslate = 0) => {
              let bx = 75 * xScale + xTranslate
              let by = 75 * yScale + yTranslate

              window.appConfig.stages.components.createBumper("STAGE7BUMPER0", 1, { x: bx, y: by, z: 0 }, 6)
              window.appConfig.stages.components.createBumper("STAGE7BUMPER0", 1, { x: bx, y: -by, z: 0 }, 6)

              let bx1 = 7.5 * xScale + xTranslate
              let by1 = 85 * yScale + yTranslate

              window.appConfig.stages.components.createBumper("STAGE7BUMPER0", 1, { x: bx1, y: -by1, z: 0 }, 6)
              window.appConfig.stages.components.createBumper("STAGE7BUMPER0", 1, { x: bx1, y: by1, z: 0 }, 6)

              window.appConfig.stages.components.createBumper("STAGE7BUMPER0", 1, { x: bx1, y: -by1 * 2.125, z: 0 }, 6)
              window.appConfig.stages.components.createBumper("STAGE7BUMPER0", 1, { x: bx1, y: by1 * 2.125, z: 0 }, 6)

              let bx2 = 85 * xScale + xTranslate
              let by2 = 35 * yScale + yTranslate

              window.appConfig.stages.components.createBumper("STAGE7BUMPER0", 1, { x: bx2, y: -by2, z: 0 }, 6)
              window.appConfig.stages.components.createBumper("STAGE7BUMPER0", 1, { x: bx2, y: by2, z: 0 }, 6)
            }
            createStage7Bumpers()
            createStage7Bumpers(-1)

            createStage7Crystals()
            createStage7Crystals(-1)

            window.appConfig.stages.components.createRuby({ x: -170, y: -1, z: 0 })
            window.appConfig.stages.components.createEmerald({ x: 168.75, y: -1, z: 0 })
            window.appConfig.stages.components.createDiamond({ x: 0, y: -125, z: 0 })

            const createDiamondCrystals = () => {
              let clx0 = 0
              let cly0 = -124
              // createCrystalCircle('STAGE7', 2, { x: clx0, y: cly0 }, 0, 4)
              createCrystalCircle('STAGE7', 2.5, { x: clx0, y: cly0 }, 1, 8)
              createCrystalCircle('STAGE7', 3, { x: clx0, y: cly0 }, 0, 8)
              createCrystalCircle('STAGE7', 3.5, { x: clx0, y: cly0 }, 1, 16)
              createCrystalCircle('STAGE7', 4, { x: clx0, y: cly0 }, 2, 16)
              createCrystalCircle('STAGE7', 4.5, { x: clx0, y: cly0 }, 1, 24)

              clx0 = 0
              cly0 = 110
              createCrystalCircle('STAGE7', 1, { x: clx0, y: cly0 }, 1, 4)
              createCrystalCircle('STAGE7', 2, { x: clx0, y: cly0 }, 0, 8)
              createCrystalCircle('STAGE7', 2.5, { x: clx0, y: cly0 }, 1, 8)
              createCrystalCircle('STAGE7', 3, { x: clx0, y: cly0 }, 0, 8)

              clx0 = 0
              cly0 = 140
              createCrystalCircle('STAGE7', 1, { x: clx0, y: cly0 }, 1, 4)
              createCrystalCircle('STAGE7', 2, { x: clx0, y: cly0 }, 0, 8)
              createCrystalCircle('STAGE7', 2.5, { x: clx0, y: cly0 }, 1, 8)
              createCrystalCircle('STAGE7', 3, { x: clx0, y: cly0 }, 0, 8)

              // createCrystalCircle('STAGE7', 3.5, { x: clx0, y: cly0 }, 1, 16)
              // createCrystalCircle('STAGE7', 4, { x: clx0, y: cly0 }, 2, 16)
              // createCrystalCircle('STAGE7', 4.5, { x: clx0, y: cly0 }, 1, 24)

            }
            createDiamondCrystals()


            window.appConfig.stages.components.createSapphire({ x: -100, y: -100, z: 0 })
            window.appConfig.stages.components.createSapphire({ x: -110, y: -100, z: 0 })
            window.appConfig.stages.components.createSapphire({ x: -120, y: -100, z: 0 })
            window.appConfig.stages.components.createSapphire({ x: -130, y: 100, z: 0 })
            window.appConfig.stages.components.createSapphire({ x: -140, y: 100, z: 0 })

            window.appConfig.stages.components.createBlueIsland()

            // window.appConfig.stages.STAGE7.STAGE7MINORSTRUCTURE = scene.children.find((obj) => obj.name === "STAGE7MINORSTRUCTURE")
            // window.appConfig.stages.STAGE7.STAGE7MINORSTRUCTUREA = scene.children.find((obj) => obj.name === "STAGE7MINORSTRUCTUREA")
            // window.appConfig.stages.STAGE7.STAGE7MINORSTRUCTUREB = scene.children.find((obj) => obj.name === "STAGE7MINORSTRUCTUREB")
            // window.appConfig.stages.STAGE7.STAGE7MINORSTRUCTUREC = scene.children.find((obj) => obj.name === "STAGE7MINORSTRUCTUREC")
            // window.appConfig.stages.STAGE7.STAGE7MINORSTRUCTURED = scene.children.find((obj) => obj.name === "STAGE7MINORSTRUCTURED")
            // window.appConfig.stages.STAGE7.STAGE7MINORSTRUCTUREE = scene.children.find((obj) => obj.name === "STAGE7MINORSTRUCTUREE")

            window.appConfig.stages.STAGE7.data.started = true
          }
        }
      }

      window.appConfig.stages.components.stageInit()
      window.appConfig.stages[window.appConfig.currentStage].init()

      initGame();

      if (window.appConfig.vr === true) {
        renderer.setAnimationLoop(render)
      } else {
        requestAnimationFrame(render);
      }

      scene.simulate();
      window.appConfig.easyTimerLength = 60
      const timer = new easytimer.Timer({ countdown: true, startValues: { seconds: window.appConfig.easyTimerLength }, precision: "secondTenths" });
      window.appConfig.timer = timer
      timer.addEventListener("secondTenthsUpdated", function (e) {
        window.appConfig.selectors.timer.childNodes[0].data = `${timer
          .getTimeValues()
          .toString(["minutes", "seconds", "secondTenths"])}`;
      });
      timer.addEventListener("targetAchieved", function (e) {
        startStageEnd()
      })
      window.appConfig.selectors.curtain.classList.add("opacity-0");

      if(window.appConfig.env === 'app') {
        landingPageToMainMenu()
      }
    };

    initGame = (function () {
      var sphere_geometry = new THREE.SphereGeometry(1, 32, 32),
        collisionInc = 0,
        lastCollisions = ["", "", ""],
        handleCollision = function (
          collided_with,
          linearVelocity,
          angularVelocity
        ) {
          if (appConfig.pause === false) {
            const suonousFeatureTypes = [
              "BEAM",
              "BOX",
              "ICOSAHEDRON",
              "TETRAHEDRON",
              "CONE",
              "DISC",
              "TORUS",
              "PLINKO",
              "COIN",
            ];

            const playHowlOnCollision = [
              function () {
                if (window.appConfig.sfxTurnedOn) {
                  window.appConfig.howlSounds.beams[0].play();
                }
              },
              function () {
                if (window.appConfig.sfxTurnedOn) {
                  window.appConfig.howlSounds.beams[1].play();
                }
              },
              function () {
                if (window.appConfig.sfxTurnedOn) {
                  window.appConfig.howlSounds.beams[2].play();
                }
              },
              function () {
                if (window.appConfig.sfxTurnedOn) {
                  window.appConfig.howlSounds.beams[3].play();
                }
              },
              function () {
                if (window.appConfig.sfxTurnedOn) {
                  window.appConfig.howlSounds.beams[4].play();
                }
              },
              function () {
                if (window.appConfig.sfxTurnedOn) {
                  window.appConfig.howlSounds.beams[5].play();
                }
              },
              function () {
                if (window.appConfig.sfxTurnedOn) {
                  window.appConfig.howlSounds.beams[6].play();
                }
              },
              function () {
                if (window.appConfig.sfxTurnedOn) {
                  window.appConfig.howlSounds.beams[7].play();
                }
              }
            ]
            if (suonousFeatureTypes.indexOf(collided_with.featureType) > -1) {

              const sphere = window.appConfig.sphere

              const i = Math.floor(collisionInc % playHowlOnCollision.length)
              if (!(lastCollisions[0] === collided_with.uuid && lastCollisions[1] === collided_with.uuid && lastCollisions[2] === collided_with.uuid)) {
                if (window.appConfig.sfxTurnedOn) {
                  playHowlOnCollision[i]()
                }
                collisionInc++
                lastCollisions.push(collided_with.uuid)
              }
              if (lastCollisions.length > 3) {
                lastCollisions.shift()
              }
            }
          }
        }
      window.appConfig.handleCollision = handleCollision

      const sphereTeleportationGroup = new THREE.Group()
      const sphereTeleportationGeometry = new THREE.TetrahedronGeometry(16)

      window.appConfig.sphereTeleportationMesh = () => {
        return new THREE.Mesh(
          sphereTeleportationGeometry,
          window.appConfig.superBallMaterial
        )
      }

      const portalGeometry = new THREE.TorusGeometry(
        4, 1.1, 5, 8
      )

      const portalMeshSpaceMaterial = new THREE.MeshPhongMaterial(
        {
          color: new THREE.Color(0x000000),
          reflectivity: 100,
          specular: 0xffffff,
          shininess: 200,
          side: THREE.DoubleSide,
          depthWrite: false,
          opacity: .75
        }
      )

      const spritePlaneGeometry = new THREE.PlaneGeometry(.5, .5, 1, 1)
      const spaceSphereGeometry = new THREE.DodecahedronGeometry(1, 2)
      const whiteColor = new THREE.Color(0x000000)
      const sapphireColor = new THREE.Color(0x0F52BA)

      window.appConfig.portalMesh = (sapphire) => {

        const sapphireMaterial = new THREE.MeshPhongMaterial({
          color: sapphireColor,
          shininess: 100,
          transparent: true,
          opacity: .9
        })

        let theMesh = new THREE.Mesh(
          portalGeometry,
          sapphire === true ? sapphireMaterial : new THREE.MeshPhongMaterial(
            {
              transparent: true,
              opacity: .25,
              color: whiteColor
            }
          )
        )
        let sapphireAdj = sapphire === true ? 'SAPPHIRE' : ''
        theMesh.name = window.appConfig.currentStage + "_" + sapphireAdj + Math.round(Math.random() * 10000)
        let theSpaceSphere = new THREE.Mesh(
          spaceSphereGeometry,
          portalMeshSpaceMaterial
        )
        theSpaceSphere.scale.x = 0
        theSpaceSphere.scale.y = 0
        theSpaceSphere.scale.z = 0
        theSpaceSphere.name = 'THE_SPACE_SPHERE'
        theSpaceSphere.dematColor = whiteColor
        theMesh.add(theSpaceSphere)
        let theSpritePoints = []
        theMesh.geometry.vertices.forEach((p, pi) => {
          theSpritePoints.push(p)
        })
        theSpritePoints.forEach((sp, spi) => {
          let theSprite = new THREE.Mesh(
            spritePlaneGeometry,
            spi % 2 === 0 ? window.appConfig.superBallMaterial : sapphire ? sapphireMaterial : portalMeshSpaceMaterial
          )
          theSprite.oPosition = {}
          theSprite.oPosition.x = sp.x
          theSprite.oPosition.y = sp.y
          theSprite.oPosition.z = sp.z
          theSprite.position.x = sp.x
          theSprite.position.y = sp.y
          theSprite.position.z = sp.z
          theMesh.add(theSprite)
        })
        theMesh.activated = false
        // debugger
        return theMesh
      }

      window.appConfig.superBallHandleCollision = function (other_object, the_object) {
        if (other_object.name === 'SPHERE0' && window.appConfig.userHasEnded === false && window.appConfig.pause === false) {
          if (window.appConfig.sfxTurnedOn) {
            window.appConfig.howlSounds.superball.play()
          }
          if (window.appConfig.stages[window.appConfig.currentStage].data.gemSuperBalls < 8) {
            window.appConfig.stages[window.appConfig.currentStage].data.gemSuperBalls++
          }
          window.appConfig.timers.activeTimers.push(window.appConfig.timers.superBallTeleport(the_object))
          window.appConfig.stages.components.dematerializeMesh({ dMesh: other_object, scaleAdj: 5, spriteTypes: ['fiveStar'] })
          for (let superSounds = 0; superSounds < 20; superSounds++) {
            setTimeout(() => {
              if (window.appConfig.sfxTurnedOn) {
                window.appConfig.coinSounds[Math.round(Math.random() * (window.appConfig.coinSounds.length - 1))].play()
              }
              scene.add(window.appConfig.stages.components.crystal(superSounds % 3, { x: other_object.position.x + ((Math.random() * 25) - 12.5), y: other_object.position.y + ((Math.random() * 20) - 10), z: 0 }))
            }, superSounds * 50)
          }
        }
      }

      const superBallGeo = new THREE.IcosahedronGeometry(1, 0)
      const superBallShellGeo = new THREE.SphereGeometry(3, 32, 32)

      window.appConfig.createSphere = function (config) {
        var sphere, material;
        material = Physijs.createMaterial(
          new THREE.MeshPhongMaterial({
            color: 0xffffff,
            reflectivity: 100,
            transparent: true,
            opacity: 0.95,
            specular: 0x050505,
            shininess: 200
          }),
          (config && config.bounce) ? config.bounce : 0.5,
          1
        );
        if (config && config.isIndicator === true) {
          let superBallIndicator = new THREE.Mesh(
            superBallGeo,
            new THREE.MeshPhongMaterial({
              color: 0xffffff,
              reflectivity: 100,
              transparent: true,
              opacity: 0.25,
              specular: 0x050505,
              shininess: 200
            })
          )
          superBallIndicator.name = window.appConfig.currentStage + '_SB_INDICATOR' + Math.round(Math.random() * 10000)
          let superBallPortal = scene.children.find(c => c.name.indexOf(config.indicatorName) > -1)
          superBallIndicator.position.set(config.position.x + superBallPortal.position.x, config.position.y + superBallPortal.position.y, -2.5)
          scene.add(superBallIndicator)

          // wireframe
          let superBallGeoLine = new THREE.EdgesGeometry(superBallIndicator.geometry)
          let mat = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 1 })
          let wireframe = new THREE.LineSegments(superBallGeoLine, mat)
          superBallIndicator.add(wireframe)
          superBallIndicator.originalMaterialColor = whiteColor

        } else {
          sphere = new Physijs.SphereMesh((config && config.name) ? superBallGeo : sphere_geometry, material);
          sphere.collisions = 0;
          (config && config.position) ? sphere.position.set(config.position.x, config.position.y, 0) : sphere.position.set(0, 0, 0)

          sphere.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
          );
          sphere.castShadow = true;
          sphere.addEventListener("collision", (config && config.handleCollision) ? config.handleCollision : handleCollision);
          sphere.gameName = (config && config.name) ? config.name : "SPHERE0";
          sphere.name = (config && config.name) ? config.name : "SPHERE0";
          window.appConfig.loadingPhysi.registerMesh(sphere)
          sphere.setCcdMotionThreshold(.5)
          sphere.setCcdSweptSphereRadius(1)
          if (config && config.handleCollision) {
            const superBallShell = new THREE.Mesh(
              superBallShellGeo,
              new THREE.MeshPhongMaterial({
                color: 0xffffff,
                reflectivity: 100,
                transparent: true,
                opacity: 0.25,
                specular: 0x050505,
                shininess: 200,
                side: THREE.DoubleSide,
                depthWrite: false
              })
            )
            sphere.add(superBallShell)
          }
          scene.add(sphere);
          if (!config) {
            window.appConfig.sphere = sphere
          }
          if (config !== undefined) {
            window.appConfig.superballs.push(sphere)
          }
        }

      };

      return () => {
        window.appConfig.createSphere();
        const findCoin = (x, y, xMod = 10, yMod = 10) => {
          return window.appConfig.coins.find(
            (coin, coinIndex) => {
              if (coinIndex % (window.appConfig.coinFrameCheckNumber % 10)) {
                if (
                  coin.spriteCapturable === true &&
                  Math.abs(coin.position.x - x) < coin.scale.x * xMod &&
                  Math.abs(coin.position.y - y) < coin.scale.x * yMod &&
                  !coin.spriteFetching &&
                  !coin.prizeValue) {
                  return true
                } else return false;
              }
            }
          )
        }
        const setSpriteSpherical = (sprite) => {
          const spritePhi = (lfoPositive((sprite.phiT + sprite.phiMod * sprite.phiT)) + lfoPositive(100 * Math.random()) / 500) * (2 * Math.PI)
          const spriteTheta = (lfo((sprite.thetaT + sprite.thetaMod * sprite.thetaT)) + lfo(721 * Math.random()) / 1000) * (Math.PI)
          sprite.spherical.set(sprite.radius + lfoPositive(1111) * 10, spritePhi, spriteTheta)
        }

        const spriteGeometry = new THREE.SphereGeometry(.2, 16, 16)
        const spriteMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: .5 })

        window.appConfig.sprites = []
        const createSprite = (num) => {
          const thetaMod = Math.random()
          const phiMod = Math.random()
          const sprite0Mesh = new THREE.Mesh(spriteGeometry, spriteMaterial)
          scene.add(sprite0Mesh)
          let sprite0 = {
            mesh: sprite0Mesh,
            spherical: new THREE.Spherical(),
            radius: 1.5,
            thetaT: 1500,
            phiT: 2000,
            thetaMod: thetaMod,
            phiMod: phiMod,
            isFetchingCoin: false,
            fetchData: {},
            num: num
          }
          sprite0.mesh.name = "sprite"
          sprite0.reset = () => {
            sprite0.isFetchingCoin = false
            sprite0.fetchData = {}
          }

          sprite0.activeCallback = () => {
            setSpriteSpherical(sprite0)
            const spriteVector3 = window.appConfig.spriteVector
            spriteVector3.setFromSpherical(sprite0.spherical)
            spriteVector3.x = spriteVector3.x + window.appConfig.sphere.position.x
            spriteVector3.y = spriteVector3.y + window.appConfig.sphere.position.y
            spriteVector3.z = spriteVector3.z + window.appConfig.sphere.position.z
            sprite0.mesh.position.x = spriteVector3.x
            sprite0.mesh.position.y = spriteVector3.y
            sprite0.mesh.position.z = spriteVector3.z
            sprite0.mesh.material.opacity = .5 + (lfoPositive(1000) + lfoPositive(77) / 2)

            if (sprite0.isFetchingCoin === true && window.appConfig.userHasEnded === true) {
              sprite0.reset()
              const foundTimerIndex = window.appConfig.timers.activeTimers.findIndex((timer, timerIndex) => {
                return timer.name === `SPRITERETURN${sprite0.num}`
              })
              if (foundTimerIndex > -1) {
                window.appConfig.timers.activeTimers.splice(foundTimerIndex, 1)
              }

            } else if (sprite0.isFetchingCoin === false && window.appConfig.start === true && window.appConfig.pause === false && window.appConfig.userHasEnded === false) {
              if (sprite0.returnData !== undefined && sprite0.returnData.startingPosition !== undefined) {
                let percentComplete = window.appConfig.timers.data[`spriteReturn${sprite0.num}`].percentComplete
                const newX = sprite0.returnData.startingPosition.x * (1 - percentComplete) + (spriteVector3.x * percentComplete)
                const newY = sprite0.returnData.startingPosition.y * (1 - percentComplete) + (spriteVector3.y * percentComplete)
                sprite0.mesh.position.x = newX
                sprite0.mesh.position.y = newY
              }

              const theCoin = findCoin(sprite0.mesh.position.x, sprite0.mesh.position.y)
              if (theCoin !== undefined) {
                sprite0.isFetchingCoin = true
                sprite0.fetchData.startingPosition = sprite0.mesh.position.clone()
                sprite0.fetchData.target = theCoin
                sprite0.fetchData.coinBrightnessLfoMod = Math.ceil(Math.random() * 33)
                sprite0.isReturning = false
                sprite0.returnData = {}
                const foundTimerIndex = window.appConfig.timers.activeTimers.findIndex((timer, timerIndex) => {
                  return timer.name === `SPRITERETURN${sprite0.num}`
                })
                if (foundTimerIndex > -1) {
                  window.appConfig.timers.activeTimers.splice(foundTimerIndex, 1)
                }

                window.appConfig.timers.activeTimers.push(window.appConfig.timers[`spriteFetch${sprite0.num}`](sprite0))
                theCoin.spriteFetching = sprite0
              }
            } else if (sprite0.isFetchingCoin === true && window.appConfig.start === true && window.appConfig.pause === false) {
              if (sprite0.fetchData.target.isBlueIsland === true) {
                sprite0.fetchData.target.material = window.appConfig.blueCrystalMaterials[sprite0.fetchData.target.size].pulsing
              }
              if (sprite0.fetchData.target.isBlueIsland === false) {
                sprite0.fetchData.target.material = window.appConfig.crystalMaterials[sprite0.fetchData.target.size].pulsing
              }
              let percentComplete = window.appConfig.timers.data[`spriteFetch${sprite0.num}`].percentComplete
              if (percentComplete < .5) {
                const percentThere = percentComplete / .5
                sprite0.mesh.position.x = sprite0.fetchData.startingPosition.x * (1 - percentThere) + (sprite0.fetchData.target.position.x * percentThere)
                sprite0.mesh.position.y = sprite0.fetchData.startingPosition.y * (1 - percentThere) + (sprite0.fetchData.target.position.y * percentThere)
              } else if (percentComplete > .5) {
                if (sprite0.fetchData.coinStartingPosition === undefined) {
                  sprite0.fetchData.coinStartingPosition = sprite0.fetchData.target.position.clone()
                }
                const percentThere = (percentComplete - .5) / .5
                const newX = sprite0.fetchData.coinStartingPosition.x * (1 - percentThere) + (window.appConfig.sphere.position.x * percentThere)
                const newY = sprite0.fetchData.coinStartingPosition.y * (1 - percentThere) + (window.appConfig.sphere.position.y * percentThere)
                sprite0.mesh.position.x = newX
                sprite0.mesh.position.y = newY

                sprite0.fetchData.target.position.x = newX
                sprite0.fetchData.target.position.y = newY
              }
            }
          }

          window.appConfig.sprites.push(sprite0)

        }
        createSprite(0)
        createSprite(1)
        createSprite(2)



        const sidesColor = getRandomColor();

        const glassGeo = new THREE.BoxGeometry(1000, 1000, 1)
        const glassMaterial = new THREE.MeshBasicMaterial({
          color: getRandomColor(),
          opacity: 0,
          transparent: true,
          wireframe: true,
        })

        const glassMesh0 = new Physijs.BoxMesh(
          glassGeo,
          glassMaterial,
          0
        );
        glassMesh0.gameName = "FRONTGLASS";
        glassMesh0.name = "glassMesh0";
        window.appConfig.loadingPhysi.registerMesh(glassMesh0)

        const glassMesh1 = new Physijs.BoxMesh(
          glassGeo,
          glassMaterial,
          0
        );
        glassMesh1.gameName = "BACKGLASS";
        glassMesh1.name = "glassMesh1";
        window.appConfig.loadingPhysi.registerMesh(glassMesh1)

        glassMesh0.position.z = 1.5;
        glassMesh1.position.z = -1.5;
        glassMesh0.position.y = -137.5;
        glassMesh1.position.y = -140;
        glassMesh0.__dirtyPosition = true;
        glassMesh0.__dirtyRotation = true;
        glassMesh1.__dirtyPosition = true;
        glassMesh1.__dirtyRotation = true;

        scene.add(glassMesh0);
        scene.add(glassMesh1);

      };
    })();

    let appStartTime = new Date().getTime();
    let initialBallZoomTime = 0;

    window.appConfig.activeTransforms = []

    let currentTime = new Date().getTime();

    window.appConfig.debugger = true
    window.appConfig.toggleDebugger = () => {
      window.appConfig.debugger = !window.appConfig.debugger
    }

    const anchors = [
      new THREE.Vector3(0, 100, 0),
      new THREE.Vector3(100, 0, 0),
      new THREE.Vector3(0, -100, 0),
      new THREE.Vector3(-100, 0, 0)
    ]

    window.appConfig.handleBlackHole = (bh, bhIndex) => {
      try {
        let theSphere = window.appConfig.sphere
        let bhSprites = bh.children[0].children
        bhSprites.forEach((bhSprite, bhi) => {
          bhSprite.position.x = lfo(2500 + (bhi * 75)) * (.4 + lfo(bhi * 1000))
          bhSprite.position.y = lfo(1777 + (bhi * 75)) * (.4 + lfo(bhi * 1000))
        })
        let distMod = .1
        if (typeof theSphere.position.x === "number") {
          bh.position.lerp(theSphere.position, .001 * Math.random() * 2)
          bh.position.lerp(anchors[bhIndex], .00075)
          bh.scale.x += .001
          bh.scale.y += .001
          bh.scale.z += .001
          let distanceToSphere = bh.position.distanceTo(theSphere.position)
          let currentTimeAdj = new Date().getTime()
          if (distanceToSphere < (25 + (bh.scale.x * .1)) && currentTimeAdj % 5 === 0) {
            let sphereLinearVelocity = theSphere._physijs.linearVelocity
            let velocityRise = bh.position.y - theSphere.position.y
            let velocityRun = bh.position.x - theSphere.position.x
            window.appConfig.blackHoleVector.set(velocityRun, velocityRise, 0)
            let velocityAdj = window.appConfig.blackHoleVector.normalize().multiplyScalar(distanceToSphere / 4)
            let newVelocity = sphereLinearVelocity.add(velocityAdj)
            theSphere.setLinearVelocity(newVelocity)
          }
          if (currentTimeAdj % 10 === 0) {
            window.appConfig.stages.components.dematerializeMesh({ dMesh: bh, scaleAdj: Math.random() * .5, spriteTypes: ['triangle', 'circle', 'square', 'fiveStar', 'fourStar'] })
          }
          bh.material.opacity = .98 + (lfo(500) * .2)
        }
      } catch (err) {
        console.log('BLACK HOLE ERROR')
      }
    }

    // window.appConfig.env = 'app'
    window.appConfig.superBallMaterial.color = window.appConfig.colors[window.appConfig.superballMaterialIncrement % 15][0]
    window.appConfig.landingPage = true
    setTimeout(() => {
      window.appConfig.activeTransforms = window.appConfig.stages[window.appConfig.currentStage].defaultTransforms
    }, 1000)
    showHTMLElements(["tinted-overlay", "landing-page", "landing-title-section"])  

    const timers = {

      landingPageZoom: () => {
        window.appConfig.timers.data.landingPageZoom.percentComplete = 0
        return {
          started: 0,
          ended: 0,
          percentComplete: 0,
          time: 2500,
          timeLeft: 0,
          currentTime: 0,
          name: name,
          id: Math.round(Math.random() * 10000),
          startedCallback: () => {
            showHTMLElements(["landing-title-section", "tinted-overlay"])
          },
          activeCallback: (percentComplete) => {
            window.appConfig.timers.data.landingPageZoom.percentComplete = percentComplete
          },
          completedCallback: () => {
            window.appConfig.landingPage = false
            document.querySelector('#image-viewer').innerHTML = ''
            document.querySelector('#landing-page').innerHTML = ''
            showStart()
          }
        }
      },
      removeAndDemeshWalls: (mesh) => {
        const name = 'REMOVE_AND_DEMESH_WALLS_' + Math.round(Math.random() * 10000)
        const removeAndDemeshVector = new THREE.Vector3(0, 0, 0)
        return {
          started: 0,
          ended: 0,
          percentComplete: 0,
          time: 2500,
          timeLeft: 0,
          currentTime: 0,
          name: name,
          id: Math.round(Math.random() * 10000),
          activeCallback: () => {
            mesh.children.forEach(beam => {
              // beam.children.forEach(beamChild => {
              //                beam.getWorldPosition(removeAndDemeshVector)
              if (Math.random() < .2) {
                window.appConfig.stages.components.dematerializeMesh({ dMesh: beam, scaleAdj: 5 + Math.random() * 5, spriteTypes: ['fourStar', 'circle', 'square', 'fiveStar'] })
              }
              // })
              // console.log(removeAndDemeshVector)
              // scalePositionVector.set(
              //   (1 + percentComplete/500),
              //   (1 + percentComplete/500),
              //   0
              // )
              // mc.position.multiply(scalePositionVector)
              // mc.__dirtyPosition = true
            })
          }
          // completedCallback: completedCallback
        }
      },
      handleFinalStageBumperOut: (bumper) => {
        const name = 'BUMPER_OUT_' + Math.round(Math.random() * 10000)

        return {
          started: 0,
          ended: 0,
          percentComplete: 0,
          time: 2500,
          timeLeft: 0,
          currentTime: 0,
          name: name,
          id: Math.round(Math.random() * 10000),
          startedCallback: () => {
            bumper.scored === true
            window.appConfig.stages.components.dematerializeMesh({ dMesh: bumper, scaleAdj: Math.random() * 5, spriteTypes: ['fourStar'] })
          },
          activeCallback: (percentComplete) => {
            let currentTime = Math.random()
            bumper.position.lerp(camera.position, 0.05)
            bumper.__dirtyPosition = true
            if (currentTime < .25) {
              window.appConfig.stages.components.dematerializeMesh({ dMesh: bumper, scaleAdj: Math.random() * 10, spriteTypes: ['fourStar'] })
            }
          }
          // completedCallback: completedCallback
        }
      },
      moveCoinsToSphere: () => {
        const name = 'MOVE_COINS_TO_SPHERE' + Math.round(Math.random() * 10000)
        const timerId = Math.round(Math.random() * 10000)
        return {
          started: 0,
          ended: 0,
          percentComplete: 0,
          time: 1000,
          timeLeft: 0,
          currentTime: 0,
          name: name,
          id: timerId,
          activeCallback: (percentComplete) => {
            if (window.appConfig.userHasEnded === false) {
              if (Math.round(percentComplete) % 5 === 0) {
                window.appConfig.coins.forEach(c => {
                  try {
                    if (c && c.coinValue && c.coinValue > 0) {
                      // console.log(c)
                      c.position.lerp(window.appConfig.sphere.position, 0.0005)
                    }
                  } catch (err) { }
                })
              }
            }
          }
        }
      },
      dematerializeMesh: (dMesh) => {
        const name = dMesh.name + Math.round(Math.random() * 10000)
        const dMeshLfoAdj = Math.round(Math.random() * 1000)
        return {
          started: 0,
          ended: 0,
          percentComplete: 0,
          time: 2500,
          timeLeft: 0,
          currentTime: 0,
          name: name,
          id: Math.round(Math.random() * 10000),
          startedCallback: () => {
            setTimeout(() => {
              if (dMesh) {
                dMesh.children.forEach(c => {
                  c.material.dispose()
                  c.geometry.dispose()
                  dMesh.remove(c)
                })
                dMesh.material && dMesh.material.dispose()
                dMesh.geometry && dMesh.geometry.dispose()
                scene.remove(dMesh)
              }
            }, 2600)
          },
          activeCallback: (percentComplete) => {
            dMesh.children.forEach((pc, pci) => {
              pc.position.x += lfo(500 + dMeshLfoAdj + (pci + 1)) / 10
              pc.position.y += lfo(750 + dMeshLfoAdj + (pci + 1)) / 10
              pc.position.z += lfo(1000 + (pci + 1)) / 10

              pc.rotation.x = lfo(500 + (pci + 1)) * 1.125
              pc.rotation.y = lfo(500 + (pci + 1)) * 1.125
              pc.rotation.z = lfo(500 + (pci + 1)) * 1.125

              if (percentComplete < .25) {
                pc.material.opacity = percentComplete * 4
              }
              if (percentComplete > .75) {
                pc.material.opacity = 1 - ((percentComplete - .75) * 2)
              }
            })
          },
          completedCallback: () => {
            dMesh.children.forEach(c => {
              c.material.dispose()
              c.geometry.dispose()
              dMesh.remove(c)
            })
            dMesh.material && dMesh.material.dispose()
            dMesh.geometry && dMesh.geometry.dispose()
            scene.remove(dMesh)
          }
        }
      },
      sapphireTravel: (sapphire, ms) => {
        const name = sapphire.name + Math.round(Math.random() * 10000)
        return {
          started: 0,
          ended: 0,
          percentComplete: 0,
          time: ms,
          timeLeft: 0,
          currentTime: 0,
          name: name,
          id: Math.round(Math.random() * 10000),
          activeCallback: (percentComplete) => {
            sapphire.travelCallback(percentComplete)
          },
          completedCallback: (percentComplete) => {
            sapphire.completedCallback(percentComplete)
          }
        }
      },
      bumperHit: (bumper) => {
        const name = bumper.name + Math.round(Math.random() * 10000)
        return {
          started: 0,
          ended: 0,
          percentComplete: 0,
          time: 500,
          timeLeft: 0,
          currentTime: 0,
          name: name,
          id: Math.round(Math.random() * 10000),
          startedCallback: (percentComplete) => {
            bumper.material.color = window.appConfig.colors[window.appConfig.superballMaterialIncrement % 15][0]
          },
          completedCallback: (percentComplete) => {
            bumper.material.color = bumper.standardColor.clone()
          }
        }
      },
      activateRemoteSwitch: (remoteSwitch) => {
        if (window.appConfig.sfxTurnedOn) {
          window.appConfig.howlSounds.circuitTransmitter.play()
        }
        let remoteTransmitter = remoteSwitch.transmitter.children[0]
        let remoteTransmitterIco = remoteSwitch.transmitter.children[1]
        let remoteReceiver = remoteSwitch.receiver.children[0]
        let remoteReceiverIco = remoteSwitch.receiver.children[1]
        let remoteLine = remoteSwitch.line
        let remoteSwitchMaterial = new THREE.Color().copy(remoteTransmitter.material.color)

        if (window.appConfig.superBallMaterial.color.set) {
          window.appConfig.superBallMaterial.color.set(window.appConfig.colors[window.appConfig.superballMaterialIncrement % 15][0])
        } else {
          window.appConfig.superBallMaterial.color = window.appConfig.colors[window.appConfig.superballMaterialIncrement % 15][0]
        }
        const activeCallback = (percentComplete) => {
          window.appConfig.superBallMaterial.color = window.appConfig.colors[window.appConfig.superballMaterialIncrement % 15][0]
          remoteLine.children.forEach((rlc, rlci) => {
            rlc.material.color = remoteSwitchMaterial.lerp(
              window.appConfig.superBallMaterial.color,
              ((.005 * percentComplete) / (rlci + 1))
            )
            rlc.material.opacity = .25 + (percentComplete * .75)
          })
          remoteTransmitter.material.color = remoteSwitchMaterial.lerp(
            window.appConfig.superBallMaterial.color,
            .01 * percentComplete
          )
          remoteTransmitter.material.opacity = .25 + (percentComplete * .75)
          remoteTransmitterIco.scale.x = percentComplete
          remoteTransmitterIco.scale.y = percentComplete
          remoteTransmitterIco.scale.z = percentComplete

          remoteReceiverIco.scale.x = percentComplete
          remoteReceiverIco.scale.y = percentComplete
          remoteReceiverIco.scale.z = percentComplete

          if (percentComplete > .5) {
            remoteReceiver.material.color = remoteSwitchMaterial.lerp(
              window.appConfig.superBallMaterial.color,
              (percentComplete - .5) * 2
            )
            remoteReceiver.material.opacity = .25 + (.75 * percentComplete)
          }
        }

        const completedCallback = () => {
          let theReceiverBeam = scene.children.find((rec) => rec.name.indexOf(remoteSwitch.receiver.switchName + '_SWITCHBEAM_RECEIVER_') > -1)
          theReceiverBeam.rotate()
        }

        return {
          started: 0,
          ended: 0,
          percentComplete: 0,
          time: 3000,
          timeLeft: 0,
          currentTime: 0,
          name: 'REMOTE_SWITCH_' + Math.round(Math.random() * 10000),
          id: Math.round(Math.random() * 10000),
          activeCallback,
          completedCallback
        }
      },
      switchIndicatorActivate: (switchIndicator) => {
        return {
          started: 0,
          ended: 0,
          percentComplete: 0,
          time: 2000,
          timeLeft: 0,
          currentTime: 0,
          name: switchIndicator.name + Math.round(Math.random() * 10000),
          id: Math.round(Math.random() * 10000),
          activeCallback: (percentComplete) => {
            switchIndicator.material.opacity = .25 + (percentComplete * .85)
          }
        }
      },
      switchBeamRotate: (switchBeam) => {
        return {
          started: 0,
          ended: 0,
          percentComplete: 0,
          time: 2000,
          timeLeft: 0,
          currentTime: 0,
          name: switchBeam.name + Math.round(Math.random() * 10000),
          id: Math.round(Math.random() * 10000),
          startedCallback: () => {
            switchBeam.originalRotationZ = switchBeam.rotation.z
            switchBeam.finalRotationZ = switchBeam.rotation.z + (.5 * Math.PI)
          },
          activeCallback: (percentComplete) => {
            switchBeam.rotation.z = switchBeam.originalRotationZ + ((.5 * Math.PI) * percentComplete)
            switchBeam.__dirtyRotation = true
          },
          completedCallback: (percentComplete) => {
            switchBeam.rotation.z = switchBeam.finalRotationZ
            switchBeam.__dirtyRotation = true
            if (window.appConfig.sfxTurnedOn) {
              window.appConfig.howlSounds.circuitReceiver.play()
            }
          }
        }
      },
      superBallTeleport: (superball, name = String(Math.round(Math.random() * 1000)), zombie = false) => {
        const theSuperBall = scene.children.find((obj) => obj.name === superball)
        return {
          started: 0,
          ended: 0,
          percentComplete: 0,
          time: 2000,
          timeLeft: 0,
          currentTime: 0,
          name: 'SUPERBALL_' + name,
          id: Math.round(Math.random() * 10000),
          startedCallback: (percentComplete) => {
            // teleport the ball
            let teleportationMesh = window.appConfig.sphereTeleportationMesh()
            teleportationMesh.name = window.appConfig.currentStage + '_TELEPORTATION_MESH__' + superball
            teleportationMesh.position.x = theSuperBall.position.x
            teleportationMesh.position.y = theSuperBall.position.y
            teleportationMesh.position.z = theSuperBall.position.z
            teleportationMesh.scale.x = .5
            teleportationMesh.scale.y = .5
            teleportationMesh.scale.z = .5
            scene.add(teleportationMesh)
            if (zombie === true) {
              theSuperBall.position.x = Math.random() * 75
              theSuperBall.position.y = Math.random() * 75
              theSuperBall.position.z = 0
              theSuperBall.__dirtyPosition = true
            } else {
              scene.remove(theSuperBall)
            }
          },
          activeCallback: (percentComplete) => {
            if (scene.children.find((obj) => obj.name === window.appConfig.currentStage + '_TELEPORTATION_MESH__' + superball)) {
              const theMesh = scene.children.find((obj) => obj.name === window.appConfig.currentStage + '_TELEPORTATION_MESH__' + superball)
              theMesh.rotation.z += 1
              theMesh.scale.x += .001
              theMesh.scale.y += .001
              theMesh.scale.z += .001
              if (percentComplete > .8) {
                theMesh.scale.x = 1 - ((.2 * percentComplete) * 5)
                theMesh.scale.y = 1 - ((.2 * percentComplete) * 5)
                theMesh.scale.z = 1 - ((.2 * percentComplete) * 5)
              }
            }
          },
          completedCallback: () => {
            let theMesh = scene.children.find((obj) => obj.name === window.appConfig.currentStage + '_TELEPORTATION_MESH__' + superball)
            if (theMesh !== undefined) {
              scene.remove(theMesh)
            }
          }
        }
      },
      addPortalToStage: (thePortal, name = '', target = { x: 0, y: 0, z: 0 }, config = {
        startedCallback: () => { },
        activeCallback: () => { },
        completedCallback: () => { },
        portalConfig: {
          sapphire: false,
          active: true
        }
      }) => {
        let portalMesh = window.appConfig.portalMesh(config.portalConfig.sapphire)
        portalMesh.portalTarget = target
        portalMesh.name = window.appConfig.currentStage + '_PORTAL_MESH__' + name
        portalMesh.startedCallback = config.startedCallback
        portalMesh.activeCallback = config.activeCallback
        portalMesh.completedCallback = config.completedCallback
        portalMesh.portalConfig = config.portalConfig
        portalMesh.portalIndicatorCount = 0
        portalMesh.incrementIndicator = () => {
          portalMesh.portalIndicatorCount++
          if (portalMesh.portalIndicatorCount === portalMesh.portalConfig.indicators) {
            portalMesh.material.opacity = .75
            portalMesh.portalConfig.active = true
          }
        }
        return {
          started: 0,
          ended: 0,
          percentComplete: 0,
          time: 2000,
          timeLeft: 0,
          currentTime: 0,
          name: 'PORTAL_' + name + String(Math.round(Math.random() * 1000)),
          id: Math.round(Math.random() * 10000),
          startedCallback: (percentComplete) => {
            portalMesh.position.x = thePortal.x
            portalMesh.position.y = thePortal.y
            portalMesh.position.z = thePortal.z
            scene.add(portalMesh)
            window.appConfig.stages[window.appConfig.currentStage].data.portals.push(portalMesh)
            // setTimeout(() => {
            //   portalMesh.material.color = new THREE.Color(0x0F52BA)
            // }, 1000)
          },
          activeCallback: (percentComplete) => {
            portalMesh.material.opacity = percentComplete * .85
            config.activeCallback(portalMesh)
          },
          completedCallback: () => {
          }
        }
      },
      activatePortal: (thePortalMesh) => {
        if (thePortalMesh.name.indexOf('SAPPHIRE') === -1) {
          window.appConfig.stages[window.appConfig.currentStage].data.remotes = []
        }
        window.appConfig.timer.pause()

        let thePortalMeshSpaceSphere = thePortalMesh.children.find(c => c.name === 'THE_SPACE_SPHERE')
        let theSphere = window.appConfig.sphere
        return {
          started: 0,
          ended: 0,
          percentComplete: 0,
          time: 2000,
          timeLeft: 0,
          currentTime: 0,
          name: 'PORTAL_' + name + String(Math.round(Math.random() * 1000)),
          id: Math.round(Math.random() * 10000),
          startedCallback: (percentComplete) => {
            window.appConfig.isPortalStart = true
            thePortalMesh.startedCallback(thePortalMesh, thePortalMesh.config, percentComplete)
            setTimeout(() => {
              if (window.appConfig.sfxTurnedOn) {
                window.appConfig.howlSounds.circuitLine.play()
              }
            }, 750)
            // setTimeout(() => {
            window.appConfig.timers.activeTimers.push(window.appConfig.timers.showTransitionFX())
            // }, 500)
          },
          activeCallback: (thePercentComplete) => {
            let percentComplete = thePercentComplete
            if (thePercentComplete < .51) {
              percentComplete = thePercentComplete * 2
              if (percentComplete > 1) {
                percentComplete = 1
              }
              thePortalMesh.material.opacity = .75 + percentComplete * .25
              thePortalMeshSpaceSphere.scale.x = percentComplete * 6
              thePortalMeshSpaceSphere.scale.y = percentComplete * 6
              thePortalMeshSpaceSphere.scale.z = percentComplete * 6
              thePortalMeshSpaceSphere.position.z = ((1 - percentComplete) * -5) + (5 * percentComplete)
              let theNewPositionX = (thePortalMesh.position.x * percentComplete) + (theSphere.position.x * (1 - percentComplete))
              let theNewPositionY = (thePortalMesh.position.y * percentComplete) + (theSphere.position.y * (1 - percentComplete))
              window.appConfig.positionBall({ x: theNewPositionX, y: theNewPositionY, z: 0 })
            }
            if (thePercentComplete > .5) {
              thePortalMesh.material.opacity = 1
              window.appConfig.positionBall({ x: thePortalMesh.position.x, y: thePortalMesh.position.y, z: 0 })
              let teardownPercentComplete = (thePercentComplete - .5) * 2
            }
            thePortalMesh.activeCallback(thePortalMesh, thePortalMesh.config, percentComplete)
          },
          completedCallback: () => {
            window.appConfig.positionBall(thePortalMesh.portalTarget)
            thePortalMesh.completedCallback(thePortalMesh, thePortalMesh.config)
            let removePortals = []
            window.appConfig.stages[window.appConfig.currentStage].data.portals.forEach((p, pi) => {
              if (p.name !== thePortalMesh.name && p.name.indexOf('GEM') === -1) {
                removePortals.push(pi)
              }
            })
            if (removePortals.length > 0) {
              removePortals.reverse().forEach(rp => {
                scene.remove(window.appConfig.stages[window.appConfig.currentStage].data.portals[rp])
                window.appConfig.stages[window.appConfig.currentStage].data.portals.splice(rp, 1)
              })
            }
            window.appConfig.timers.activeTimers.push(window.appConfig.timers.removePortal(thePortalMesh))
          }
        }
      },
      removePortal: (thePortalMesh) => {
        if (thePortalMesh.name.indexOf('SAPPHIRE') === -1) {
          window.appConfig.stages[window.appConfig.currentStage].data.remotes = []
        }
        let thePortalMeshSpaceSphere = thePortalMesh.children.find(c => c.name === 'THE_SPACE_SPHERE')
        let theSphere = window.appConfig.sphere
        return {
          started: 0,
          ended: 0,
          percentComplete: 0,
          time: 4000,
          timeLeft: 0,
          currentTime: 0,
          name: 'PORTAL_REMOVAL_' + name + String(Math.round(Math.random() * 1000)),
          id: Math.round(Math.random() * 10000),
          startedCallback: (percentComplete) => {
            thePortalMesh.position.x = thePortalMesh.portalTarget.x
            thePortalMesh.position.y = thePortalMesh.portalTarget.y
          },
          activeCallback: (thePercentComplete) => {
            let percentComplete = 1 - thePercentComplete
            thePortalMeshSpaceSphere.material.opacity = percentComplete
            thePortalMeshSpaceSphere.scale.x = percentComplete * 6
            thePortalMeshSpaceSphere.scale.y = percentComplete * 6
            thePortalMeshSpaceSphere.scale.z = percentComplete * 6
            thePortalMeshSpaceSphere.position.z = ((1 - percentComplete) * -5) + (5 * percentComplete)
            window.appConfig.positionBall({ x: thePortalMesh.portalTarget.x, y: thePortalMesh.portalTarget.y, z: 0 })

            thePortalMesh.scale.x = percentComplete
            thePortalMesh.scale.y = percentComplete
            thePortalMesh.scale.z = percentComplete
          },
          completedCallback: () => {
            setTimeout(() => {
              let portalsCopy = []
              window.appConfig.stages[window.appConfig.currentStage].data.portals.forEach(p => {
                if (p.name !== thePortalMesh.name) {
                  portalsCopy.push(p)
                }
              })
              window.appConfig.stages[window.appConfig.currentStage].data.portals = portalsCopy
              scene.remove(thePortalMesh)
            }, 100)
          }
        }
      },
      backgroundToPhysi: (createBg = false) => {
        if (createBg === true) {
          window.appConfig.stages[window.appConfig.currentStage].initBackground()
        }

        let theBg = scene.children.find((obj) => obj.name.indexOf('BGGROUP') > -1)

        return {
          started: 0,
          ended: 0,
          percentComplete: 0,
          time: 2000,
          timeLeft: 0,
          currentTime: 0,
          name: 'BACKGROUNDTOPHYSI_' + Math.round(Math.random() * 10000),
          id: Math.round(Math.random() * 10000),
          startedCallback: () => {
            window.appConfig.stages.components.createBlackHole({ position: { x: 0, y: 40, z: 0 }, scale: { x: 2, y: 2, z: 2 } })
            window.appConfig.stages.components.createBlackHole({ position: { x: -40, y: -40, z: 0 }, scale: { x: 2, y: 2, z: 2 } })
            window.appConfig.stages.components.createBlackHole({ position: { x: 40, y: -40, z: 0 }, scale: { x: 2, y: 2, z: 2 } })
          },
          activeCallback: (percentComplete) => {
            theBg.position.z = (1 - percentComplete) * -5
          },
          completedCallback: () => {
            let theBgObjects = []
            if (createBg === false) {
              theBg.children.forEach(bgObj => {
                theBgObjects.push(window.appConfig.stages.components.physiRock(bgObj))
              })
            }
            // if(createBg === true) {
            //   gemStageWalls.rotation.z = Math.PI * .25
            // }
            const originCoor = window.appConfig.originVector
            const multiplyVector = new THREE.Vector3(10, 10, 1)
            theBgObjects.forEach(bgO => {
              if (bgO.position.distanceTo(originCoor) < 25) {
                bgO.position.x = bgO.position.x * 2
                bgO.position.y = bgO.position.y * 2
              }
              if (bgO.position.distanceTo(originCoor) > 75) {
                bgO.position.x = bgO.position.x * (.4 + Math.random() * .25)
                bgO.position.y = bgO.position.y * (.4 + Math.random() * .25)
              }
              if (bgO.position.distanceTo(originCoor) < 25) {
                bgO.position.x = 25 + Math.random() * 10
                bgO.position.y = 25 + Math.random() * 10
              }
              scene.add(bgO)
            })

            if (createBg === true) {
              theBg.children.forEach(bgObj => {
                // scene.add(window.appConfig.stages.components.physiRock(bgObj, -1.2))
                scene.add(
                  window.appConfig.stages.components.physiRock(bgObj, -1.2, (Math.random() * 50) - 25, (Math.random() * 50) - 25)
                )
                // scene.add(window.appConfig.stages.components.physiRock(bgObj, 1.25))
                // scene.add(window.appConfig.stages.components.physiRock(bgObj, 1.35))
              })
            }

            // theBgObjects.forEach(bgO => {
            //   let bgOclone = new Physijs.Mesh().clone(bgO)
            //   bgOclone.position.set(150 + Math.random() * 50, 150 + Math.random() * 50, 0)
            //   bgOclone.material.color = new THREE.Color(0xff0000)
            //   scene.add(bgOclone)
            //   console.log(bgOclone)
            // })


            scene.remove(theBg)
            if (createBg === false) {
              const gemStageWalls = window.appConfig.stages.components.createStage0MainBeamStructure(
                8,
                0.5275,
                window.appConfig.currentStage + "_GEM_STAGE_WALLS"
              );
              scene.add(gemStageWalls);
            }

            const createGemSuperballs = (
              s,
              n = 4,
              p = { x: 0, y: 0, z: 0 },
              indicator = false,
              indicatorName = false
            ) => {
              let ellipseGeometry = new THREE.CircleGeometry(s, n * 2)
              let i = 1;
              for (i; i < ellipseGeometry.vertices.length; i++) {
                let id = Math.round(Math.random() * 100000)
                window.appConfig.createSphere({
                  bounce: 1,
                  name: window.appConfig.currentStage + '_SPHERECOIN_GEM' + id,
                  position: {
                    x: ellipseGeometry.vertices[i].x,
                    y: ellipseGeometry.vertices[i].y,
                    z: 0
                  },
                  handleCollision: (c) => {
                    if (c.name === 'SPHERE0' && window.appConfig.pause === false) {
                      window.appConfig.superBallHandleCollision(c, window.appConfig.currentStage + '_SPHERECOIN_GEM' + id)
                      if (createBg === false) {
                        let theIndicator = scene.children.find(cf => cf.name.indexOf('SB_INDICATOR') > -1 && cf.indicatorActive === undefined)
                        theIndicator.indicatorActive = true
                        window.appConfig.timers.activeTimers.push(
                          window.appConfig.timers.activatePortalIndicator(theIndicator)
                        )
                      }
                    }
                  },
                  isIndicator: indicator,
                  indicatorName: indicatorName
                })

              }
            }

            if (createBg === false) {
              createGemSuperballs(15, 4)
              setTimeout(() => {
                window.appConfig.timers.activeTimers.push(
                  window.appConfig.timers.addPortalToStage({ x: 0, y: 0, z: -5 }, 'PORTAL_TO_FINAL_STAGE', { x: 0, y: 0, z: 0 },
                    window.appConfig.stages.components.finalPortalConfig())
                )
              }, 1000)

              setTimeout(() => {
                createGemSuperballs(4.5, 4, { x: 0, y: 0, z: 0 }, true, 'PORTAL_TO_FINAL_STAGE')
              }, 1500)

            } else {
              createGemSuperballs(60, 8)
              createGemSuperballs(80, 8)

            }
          }
        }
      },
      blueIslandTimer: () => {
        return {
          started: 0,
          ended: 0,
          percentComplete: 0,
          time: 30000,
          timeLeft: 0,
          currentTime: 0,
          name: 'BLUEISLANDTIMER',
          id: Math.round(Math.random() * 10000),
          completedCallback: (percentComplete) => {
            window.appConfig.isBlueIsland = false
            window.appConfig.timer.start()
            window.appConfig.timers.activeTimers.push(
              window.appConfig.timers.addPortalToStage({ x: 0, y: 300, z: -5 }, 'PORTAL_BACK_TO_STAGE_SAPPHIRE', window.appConfig.stages[window.appConfig.currentStage].data.sapphirePortalPosition, window.appConfig.stages.components.sapphirePortalReturnConfig())
            )
          }
        }
      },
      initialBallZoom: () => {
        return {
          started: 0,
          ended: 0,
          percentComplete: 0,
          time: 2000,
          timeLeft: 0,
          currentTime: 0,
          name: 'INITIALBALLZOOM',
          id: Math.round(Math.random() * 10000),
          activeCallback: (percentComplete) => {
            window.appConfig.timers.data.initialBallZoom.percentComplete = percentComplete
          }
        }
      },
      activatePortalIndicator: (indicator) => {
        return {
          started: 0,
          ended: 0,
          percentComplete: 0,
          time: 2000,
          timeLeft: 0,
          currentTime: 0,
          name: 'ACTIVATE_PORTAL_INDICATOR' + Math.round(Math.random() * 10000),
          id: Math.round(Math.random() * 10000),
          startedCallback: () => {
            let thePortal
            if (indicator.name.indexOf('D_INDICATOR') > -1 || indicator.name.indexOf('R_INDICATOR') > -1 || indicator.name.indexOf('E_INDICATOR') > -1) {
              thePortal = scene.children.find(c => c.name.indexOf('GEM_STAGE_END') > -1)
            }
            if (scene.children.find(c => c.name.indexOf('PORTAL_TO_FINAL_STAGE') > -1)) {
              thePortal = scene.children.find(c => c.name.indexOf('PORTAL_TO_FINAL_STAGE') > -1)
            }
            if (indicator.name.indexOf('S_INDICATOR') > -1) {
              thePortal = scene.children.find(c => c.name.indexOf('SAPPHIRE_00') > -1)
            }
            thePortal.incrementIndicator()
            indicator.material.color = indicator.originalMaterialColor
          },
          activeCallback: (percentComplete) => {
            indicator.material.opacity = .25 + (percentComplete * .75)
          }
        }
      },
      showTransitionFX: () => {
        return {
          started: 0,
          ended: 0,
          percentComplete: 0,
          time: 2000,
          timeLeft: 0,
          currentTime: 0,
          name: 'TRANSITION_FX' + Math.round(Math.random() * 10000),
          id: Math.round(Math.random() * 10000),
          activeCallback: (percentComplete) => {
            if (percentComplete % 4 < 2) {
              window.appConfig.stages.components.dematerializeMesh({ dMesh: camera, scaleAdj: Math.random() * 15, spriteTypes: ['circle'] })
              window.appConfig.stages.components.dematerializeMesh({ dMesh: camera, scaleAdj: Math.random() * 5, spriteTypes: ['circle'] })
            }
          }
        }
      },
      countdownName: (config) => {
        window.appConfig.pauseSuperballs = true
        let countdownSphere = window.appConfig.sphere
        return {
          started: 0,
          ended: 0,
          percentComplete: 0,
          time: 4000,
          timeLeft: 0,
          currentTime: 0,
          name: 'COUNTDOWNNAME',
          id: Math.round(Math.random() * 10000),
          startedCallback: (percentComplete) => {
            if (window.appConfig.requestFullscreenResult !== false) {
              appConfig.gameModeFunctions.requestFullscreen()
            }
            window.appConfig.timers.activeTimers.push(window.appConfig.timers.showTransitionFX())

            if (config && config.updateName) {
              let displayName = config.updateName.split(' ')
              if (displayName[0] !== undefined) {
                window.appConfig.selectors.stageNameTitle0.childNodes[0].data = displayName[0]
              }
              if (displayName[1] !== undefined) {
                window.appConfig.selectors.stageNameTitle1.childNodes[0].data = displayName[1]
                window.appConfig.selectors.stageNameTitle1.classList.remove("hide")
              } else {
                window.appConfig.selectors.stageNameTitle1.classList.add("hide")
              }
            }
            showStageCountDownName()
            if (config && config.ballPosition) {
              window.appConfig.positionBall(config.ballPosition)
            } else {
              window.appConfig.positionBall(window.appConfig.stages[window.appConfig.currentStage].data.startingPosition)
            }

            window.appConfig.selectors.stageNameTitle0.style.opacity = 1
            window.appConfig.selectors.stageNameTitle1.style.opacity = 1
            window.appConfig.selectors.stageNumber.style.opacity = 1
          },
          activeCallback: (percentComplete) => {
            const percentComputed = (percentComplete * 16) > 8 ? 8 : (percentComplete * 16)
            window.appConfig.selectors.stageNameTitle0.style.fontSize = percentComputed * .33 + "rem"
            window.appConfig.selectors.stageNameTitle1.style.fontSize = percentComputed * .33 + "rem"
            window.appConfig.selectors.stageNumber.style.fontSize = percentComputed / 2 + "rem"
            if (percentComplete > .9) {
              window.appConfig.selectors.stageNameTitle0.style.opacity = 1 - (percentComplete - .9) * 10
              window.appConfig.selectors.stageNameTitle1.style.opacity = 1 - (percentComplete - .9) * 10
              window.appConfig.selectors.stageNumber.style.opacity = 1 - (percentComplete - .9) * 10
            }

            if (config && config.ballPosition) {
              window.appConfig.positionBall(config.ballPosition)

              countdownSphere
                .setLinearVelocity(window.appConfig.originVector);
              countdownSphere
                .setAngularVelocity(window.appConfig.originVector);
              scene.setGravity(window.appConfig.originVector)

            } else {
              window.appConfig.positionBall(window.appConfig.stages[window.appConfig.currentStage].data.startingPosition)
            }

          },
          completedCallback: (percentComplete) => {
            showStageCountDown3()
            window.appConfig.timers.activeTimers.push(window.appConfig.timers.countdown2(config))
            window.appConfig.timers.activeTimers.push(window.appConfig.timers.countdown1(config))
          }
        }
      },
      countdown2: (config) => {
        let countdownSphere = window.appConfig.sphere
        return {
          started: 0,
          ended: 0,
          percentComplete: 0,
          time: 750,
          timeLeft: 0,
          currentTime: 0,
          name: 'COUNTDOWN2',
          id: Math.round(Math.random() * 10000),
          startedCallback: () => {
            if (window.appConfig.sfxTurnedOn) {
              window.appConfig.howlSounds.count2.play()
            }
          },
          activeCallback: () => {
            if (config && config.ballPosition) {
              window.appConfig.positionBall(config.ballPosition)
              countdownSphere
                .setLinearVelocity(window.appConfig.originVector);
              countdownSphere
                .setAngularVelocity(window.appConfig.originVector);
              scene.setGravity(window.appConfig.originVector)

            } else {
              window.appConfig.positionBall(window.appConfig.stages[window.appConfig.currentStage].data.startingPosition)
            }
          },
          completedCallback: (percentComplete) => {
            showStageCountDown2()
            if (window.appConfig.sfxTurnedOn) {
              window.appConfig.howlSounds.count3.play()
            }
          }
        }
      },
      countdown1: (config) => {
        let countdownSphere = window.appConfig.sphere
        return {
          started: 0,
          ended: 0,
          percentComplete: 0,
          time: 1500,
          timeLeft: 0,
          currentTime: 0,
          name: 'COUNTDOWN1',
          id: Math.round(Math.random() * 10000),
          completedCallback: (percentComplete) => {
            if (window.appConfig.sfxTurnedOn) {
              window.appConfig.howlSounds.count1.play()
            }
            showStageCountDown1()
            window.appConfig.timers.activeTimers.push(window.appConfig.timers.countdownStart(config))
          },
          activeCallback: () => {
            if (config && config.ballPosition) {
              window.appConfig.positionBall(config.ballPosition)
            } else {
              window.appConfig.positionBall(window.appConfig.stages[window.appConfig.currentStage].data.startingPosition)
            }
            countdownSphere
              .setLinearVelocity(window.appConfig.originVector);
            countdownSphere
              .setAngularVelocity(window.appConfig.originVector);
            scene.setGravity(window.appConfig.originVector)
          }
        }
      },
      countdownStart: (action) => {
        return {
          started: 0,
          ended: 0,
          percentComplete: 0,
          time: 1000,
          timeLeft: 0,
          currentTime: 0,
          name: 'COUNTDOWNSTART',
          id: Math.round(Math.random() * 10000),
          startedCallback: (percentComplete) => {
            if (action && action.countdownStartStartedCallback) {
              action.countdownStartStartedCallback()
            }
          },
          completedCallback: (percentComplete) => {
            showStageCountDownStart()
            window.appConfig.userIsOnMainMenu = false
            if (window.appConfig.sfxTurnedOn) {
              window.appConfig.howlSounds.start.play()
            }
            const noInitialBallZoom = true
            window.appConfig.gameModeFunctions.start(noInitialBallZoom)
            window.appConfig.timers.activeTimers.push(window.appConfig.timers.countdownStartFlash())
            if (action && action.countdownStartCompletedCallback) {
              action.countdownStartCompletedCallback()
            }

          },
        }
      },
      countdownStartFlash: (action) => {
        window.appConfig.timer.start()

        window.appConfig.pauseSuperballs = false
        return {
          started: 0,
          ended: 0,
          percentComplete: 0,
          time: 1000,
          timeLeft: 0,
          currentTime: 0,
          name: 'COUNTDOWNSTARTFLASH',
          id: Math.round(Math.random() * 10000),
          completedCallback: () => {
            if (window.appConfig.isPortalStart === false) {
              window.appConfig.stageTotalTimePlayed = window.appConfig.easyTimerLength
            }
            window.appConfig.isPortalStart = false
          }
        }
      },
      stageReset: (action) => {
        return {
          started: 0,
          ended: 0,
          percentComplete: 0,
          time: 2000,
          timeLeft: 0,
          currentTime: 0,
          name: 'STAGERESET',
          id: Math.round(Math.random() * 10000),
          activeCallback: (percentComplete) => {
            window.appConfig.timers.data.stageReset.percentComplete = percentComplete
          },
          completedCallback: (percentComplete) => {
            window.appConfig.stages[window.appConfig.currentStage].teardown()
            window.appConfig.pause = false
            window.appConfig.start = false
            window.appConfig.userHasEnded = false
            if (action && action.action === 'levelSelect') {
              window.appConfig.userIsOnMainMenu = true
              window.appConfig.currentStageIndex = action.level
              window.appConfig.currentStage = window.appConfig.stagesArray[window.appConfig.currentStageIndex]
            }

            if (action && action.action === 'levelSelectHealthCheck') {
              window.appConfig.currentStageIndex = action.level
              window.appConfig.currentStage = window.appConfig.stagesArray[window.appConfig.currentStageIndex]
            }

            if (action && action.action === 'next') {
              window.appConfig.currentStageIndex++
              if (window.appConfig.currentStageIndex >= window.appConfig.stagesArray.length) {
                window.appConfig.currentStageIndex = 0
              }
              window.appConfig.currentStage = window.appConfig.stagesArray[window.appConfig.currentStageIndex]
            }
            if (action && action.autoStart === true) {
              window.appConfig.timers.activeTimers.push(window.appConfig.timers.countdownName())
            }
            if (action && action.autoStart === false) {
              showStart()
            }
            document.body.style.background =
              window.appConfig.stages.components.background(
                .5,
                window.appConfig.stages[window.appConfig.currentStage].backgroundColors
              )
            scene.setGravity(window.appConfig.originVector);
            window.appConfig.sphere.mass = 0
            window.appConfig.selectors.stageNumber.childNodes[0].data = 'ZONE ' + window.appConfig.stages[window.appConfig.currentStage].number
            let displayName = window.appConfig.stages[window.appConfig.currentStage].name.split(' ')
            if (displayName[0] !== undefined) {
              window.appConfig.selectors.stageNameTitle0.childNodes[0].data = displayName[0]
            }
            if (displayName[1] !== undefined) {
              window.appConfig.selectors.stageNameTitle1.childNodes[0].data = displayName[1]
              window.appConfig.selectors.stageNameTitle1.classList.remove("hide")
            } else {
              window.appConfig.selectors.stageNameTitle1.classList.add("hide")
            }
            window.appConfig.selectors.curtain.classList.add("opacity-0");
            const restartBallPosition = window.appConfig.stages[window.appConfig.currentStage].data.startingPosition
            window.appConfig.positionBall(restartBallPosition)
            window.appConfig.timers.data.initialBallZoom.percentComplete = 0
            window.appConfig.timers.data.stageReset.percentComplete = 0
            window.appConfig.timers.data.stageResultsBallZoom.percentComplete = 0
          }
        }
      },
      stageResultsBallZoom: (hideReport = false) => {
        return {
          started: 0,
          ended: 0,
          percentComplete: 0,
          time: 2000,
          timeLeft: 0,
          currentTime: 0,
          name: 'STAGERESULTSBALLZOOM',
          id: Math.round(Math.random() * 10000),
          activeCallback: (percentComplete) => {
            window.appConfig.timers.data.stageResultsBallZoom.percentComplete = percentComplete
          },
          startedCallback: (percentComplete) => {
          },
          completedCallback: () => {
            if (hideReport === false) {
              showReport()
              if (window.appConfig.highScoreConfig.isLocalHighScore === true) {
                window.appConfig.highScoreConfig.returnElements = window.appConfig.getShownElements()
                showHTMLElements(['high-score-input-modal-curtain',...window.appConfig.highScoreConfig.returnElements])
              }
            }
          }
        }
      },
      spriteFetch0: (sprite) => {
        return {
          started: 0,
          ended: 0,
          percentComplete: 0,
          time: 2000,
          timeLeft: 0,
          currentTime: 0,
          name: 'SPRITEFETCH0',
          id: Math.round(Math.random() * 10000),
          activeCallback: (percentComplete) => {
            window.appConfig.timers.data.spriteFetch0.percentComplete = percentComplete
          },
          completedCallback: () => {
            sprite.reset()
          }
        }
      },
      spriteFetch1: (sprite) => {
        return {
          started: 0,
          ended: 0,
          percentComplete: 0,
          time: 2000,
          timeLeft: 0,
          currentTime: 0,
          name: 'SPRITEFETCH1',
          id: Math.round(Math.random() * 10000),
          activeCallback: (percentComplete) => {
            window.appConfig.timers.data.spriteFetch1.percentComplete = percentComplete
          },
          completedCallback: () => {
            sprite.reset()
          }
        }
      },
      spriteFetch2: (sprite) => {
        return {
          started: 0,
          ended: 0,
          percentComplete: 0,
          time: 2000,
          timeLeft: 0,
          currentTime: 0,
          name: 'SPRITEFETCH2',
          id: Math.round(Math.random() * 10000),
          activeCallback: (percentComplete) => {
            window.appConfig.timers.data.spriteFetch2.percentComplete = percentComplete
          },
          completedCallback: () => {
            sprite.reset()
          }
        }
      },
      spriteFetch3: (sprite) => {
        return {
          started: 0,
          ended: 0,
          percentComplete: 0,
          time: 2000,
          timeLeft: 0,
          currentTime: 0,
          name: 'SPRITEFETCH3',
          id: Math.round(Math.random() * 10000),
          activeCallback: (percentComplete) => {
            window.appConfig.timers.data.spriteFetch3.percentComplete = percentComplete
          },
          completedCallback: () => {
            sprite.reset()
          }
        }
      },
      spriteFetch4: (sprite) => {
        return {
          started: 0,
          ended: 0,
          percentComplete: 0,
          time: 2000,
          timeLeft: 0,
          currentTime: 0,
          name: 'SPRITEFETCH4',
          id: Math.round(Math.random() * 10000),
          activeCallback: (percentComplete) => {
            window.appConfig.timers.data.spriteFetch4.percentComplete = percentComplete
          },
          completedCallback: () => {
            sprite.reset()
          }
        }
      },
      spriteReturn0: (sprite0) => {
        return {
          started: 0,
          ended: 0,
          percentComplete: 0,
          time: 800,
          timeLeft: 0,
          currentTime: 0,
          name: 'SPRITERETURN0',
          id: Math.round(Math.random() * 10000),
          activeCallback: (percentComplete) => {
            window.appConfig.timers.data.spriteReturn0.percentComplete = percentComplete
          },
          completedCallback: (percentComplete) => {
            sprite0.isReturning = false
            sprite0.returnData = {}
            window.appConfig.timers.data.spriteReturn0.percentComplete = 0
          }
        }
      },
      spriteReturn1: (sprite0) => {
        return {
          started: 0,
          ended: 0,
          percentComplete: 0,
          time: 800,
          timeLeft: 0,
          currentTime: 0,
          name: 'SPRITERETURN1',
          id: Math.round(Math.random() * 10000),
          activeCallback: (percentComplete) => {
            window.appConfig.timers.data.spriteReturn1.percentComplete = percentComplete
          },
          completedCallback: (percentComplete) => {
            sprite0.isReturning = false
            sprite0.returnData = {}
            window.appConfig.timers.data.spriteReturn1.percentComplete = 0
          }
        }
      },
      spriteReturn2: (sprite0) => {
        return {
          started: 0,
          ended: 0,
          percentComplete: 0,
          time: 800,
          timeLeft: 0,
          currentTime: 0,
          name: 'SPRITERETURN2',
          id: Math.round(Math.random() * 10000),
          activeCallback: (percentComplete) => {
            window.appConfig.timers.data.spriteReturn2.percentComplete = percentComplete
          },
          completedCallback: (percentComplete) => {
            sprite0.isReturning = false
            sprite0.returnData = {}
            window.appConfig.timers.data.spriteReturn2.percentComplete = 0
          }
        }
      },
      spriteReturn3: (sprite0) => {
        return {
          started: 0,
          ended: 0,
          percentComplete: 0,
          time: 800,
          timeLeft: 0,
          currentTime: 0,
          name: 'SPRITERETURN3',
          id: Math.round(Math.random() * 10000),
          activeCallback: (percentComplete) => {
            window.appConfig.timers.data.spriteReturn3.percentComplete = percentComplete
          },
          completedCallback: (percentComplete) => {
            sprite0.isReturning = false
            sprite0.returnData = {}
            window.appConfig.timers.data.spriteReturn3.percentComplete = 0
          }
        }
      },
      spriteReturn4: (sprite0) => {
        return {
          started: 0,
          ended: 0,
          percentComplete: 0,
          time: 800,
          timeLeft: 0,
          currentTime: 0,
          name: 'SPRITERETURN4',
          id: Math.round(Math.random() * 10000),
          activeCallback: (percentComplete) => {
            window.appConfig.timers.data.spriteReturn4.percentComplete = percentComplete
          },
          completedCallback: (percentComplete) => {
            sprite0.isReturning = false
            sprite0.returnData = {}
            window.appConfig.timers.data.spriteReturn4.percentComplete = 0
          }
        }
      },
      data: {
        initialBallZoom: {
          percentComplete: 0
        },
        stageReset: {
          percentComplete: 0
        },
        stageResultsBallZoom: {
          percentComplete: 0
        },
        spriteFetch0: {
          percentComplete: 0
        },
        spriteFetch1: {
          percentComplete: 0
        },
        spriteFetch2: {
          percentComplete: 0
        },
        spriteFetch3: {
          percentComplete: 0
        },
        spriteFetch4: {
          percentComplete: 0
        },
        spriteReturn0: {
          percentComplete: 0
        },
        spriteReturn1: {
          percentComplete: 0
        },
        spriteReturn2: {
          percentComplete: 0
        },
        spriteReturn3: {
          percentComplete: 0
        },
        spriteReturn4: {
          percentComplete: 0
        }
      },
      activeTimers: []
    }

    window.appConfig.timers = timers

    window.appConfig.timers.data.landingPageZoom = {
      percentComplete: 0
    }

    window.appConfig.recursiveTimerRemove = (string) => {
      const removableIndex = window.appConfig.timers.activeTimers.findIndex(el => el.name.indexOf(string) > -1)
      if (removableIndex > -1) {
        window.appConfig.timers.activeTimers.splice(removableIndex, 1)
        console.log('removing timer match: ' + string + ':' + removableIndex)
        window.appConfig.recursiveTimerRemove(string)
      }
    }
    window.appConfig.timers.pauseTimers = false
    const appTimers = window.appConfig.timers
    window.appConfig.coinFrameCheckNumber = 0

    let renderVector = new THREE.Vector3(0, 0, 0)
    render = function () {
      renderVector.set(0, 0, 0)
      currentTime = new Date().getTime();

      if (!window.appConfig.stages[window.appConfig.currentStage].data.started) {
        window.appConfig.stages.components.stageInit()
        window.appConfig.stages[window.appConfig.currentStage].init()
      } else {
        if (window.appConfig.landingPage === true || (!window.appConfig.pause && !window.appConfig.userHasEnded)) {
          window.appConfig.activeTransforms.length > 0 && window.appConfig.activeTransforms.forEach(t => {
            if (window.appConfig.stages[window.appConfig.currentStage].transforms[t].r && window.appConfig.stages[window.appConfig.currentStage][t]) {
              window.appConfig.stages[window.appConfig.currentStage][t].rotation.x += window.appConfig.stages[window.appConfig.currentStage].transforms[t].r.x
              window.appConfig.stages[window.appConfig.currentStage][t].rotation.y += window.appConfig.stages[window.appConfig.currentStage].transforms[t].r.y
              window.appConfig.stages[window.appConfig.currentStage][t].rotation.z += window.appConfig.stages[window.appConfig.currentStage].transforms[t].r.z
              window.appConfig.stages[window.appConfig.currentStage][t].__dirtyRotation = true
            }
            if (window.appConfig.stages[window.appConfig.currentStage].transforms[t].t && window.appConfig.stages[window.appConfig.currentStage][t]) {
              window.appConfig.stages[window.appConfig.currentStage][t].position.x += window.appConfig.stages[window.appConfig.currentStage].transforms[t].t.x
              window.appConfig.stages[window.appConfig.currentStage][t].position.y += window.appConfig.stages[window.appConfig.currentStage].transforms[t].t.y
              window.appConfig.stages[window.appConfig.currentStage][t].position.z += window.appConfig.stages[window.appConfig.currentStage].transforms[t].t.z
              window.appConfig.stages[window.appConfig.currentStage][t].__dirtyPosition = true
            }
            if (window.appConfig.stages[window.appConfig.currentStage].transforms[t].callback && window.appConfig.stages[window.appConfig.currentStage][t]) {
              callback(t, window.appConfig.stages[window.appConfig.currentStage].transforms[t])
            }
          })
        }
      }

      if (appTimers.activeTimers.length > 0) {
        let removeTimersArray = []
        if (window.appConfig.timers.pauseTimers === false) {

          appTimers.activeTimers.forEach((t, ti) => {
            if (appTimers.activeTimers[ti] && appTimers.activeTimers[ti] && appTimers.activeTimers[ti].started === 0) {
              appTimers.activeTimers[ti].pauseTimes = []
              appTimers.activeTimers[ti].isPaused = false
              appTimers.activeTimers[ti].started = currentTime
              appTimers.activeTimers[ti].currentTime = currentTime
              if (appTimers.activeTimers[ti].startedCallback) {
                appTimers.activeTimers[ti].startedCallback(appTimers.activeTimers[ti].percentComplete)
              }
            }
            if (appTimers.activeTimers[ti] && appTimers.activeTimers[ti].pauseTimes.length > 0 && appTimers.activeTimers[ti].pauseTimes[appTimers.activeTimers[ti].pauseTimes.length - 1].completedTime === 0) {
              appTimers.activeTimers[ti].pauseTimes[appTimers.activeTimers[ti].pauseTimes.length - 1].completedTime = currentTime
              appTimers.activeTimers[ti].pauseTimes[appTimers.activeTimers[ti].pauseTimes.length - 1].completedLength = appTimers.activeTimers[ti].pauseTimes[appTimers.activeTimers[ti].pauseTimes.length - 1].completedTime - appTimers.activeTimers[ti].pauseTimes[appTimers.activeTimers[ti].pauseTimes.length - 1].startTime
            }
            if (appTimers.activeTimers[ti] && appTimers.activeTimers[ti] && appTimers.activeTimers[ti].started !== 0 && appTimers.activeTimers[ti].ended === 0) {
              let totalPauseTime = 0
              appTimers.activeTimers[ti].pauseTimes.forEach(pt => {
                totalPauseTime += pt.completedLength
              })
              appTimers.activeTimers[ti].currentTime = currentTime
              appTimers.activeTimers[ti].percentComplete = (currentTime - appTimers.activeTimers[ti].started - totalPauseTime) / appTimers.activeTimers[ti].time;
              appTimers.activeTimers[ti].timeLeft = (currentTime - appTimers.activeTimers[ti].started - totalPauseTime)
              if (appTimers.activeTimers[ti].activeCallback) {
                appTimers.activeTimers[ti].activeCallback(appTimers.activeTimers[ti].percentComplete)
              }
              if (appTimers.activeTimers[ti].timeLeft > appTimers.activeTimers[ti].time) {
                appTimers.activeTimers[ti].ended = currentTime
                removeTimersArray.push(appTimers.activeTimers[ti].name)
                if (appTimers.activeTimers[ti].completedCallback) {
                  appTimers.activeTimers[ti].completedCallback(appTimers.activeTimers[ti].percentComplete)
                }
              }
            }
          })
          if (removeTimersArray.length > 0) {
            removeTimersArray.forEach(rt => {
              appTimers.activeTimers.forEach((at, ati) => {
                if (at.name === rt) {
                  appTimers.activeTimers.splice(ati, 1)
                }
              })
            })
          }
          if (window.appConfig.debug && window.appConfig.debug.menuVisible === true) {
            window.appConfig.debug.populateActiveTimersList()
          }
        } else if (window.appConfig.timers.pauseTimers === true) {
          appTimers.activeTimers.forEach((t, ti) => {
            if (appTimers.activeTimers[ti].pauseTimes === undefined) {
              appTimers.activeTimers[ti].pauseTimes = []
            }
            if (appTimers.activeTimers[ti].pauseTimes.length === 0 || appTimers.activeTimers[ti].pauseTimes[appTimers.activeTimers[ti].pauseTimes.length - 1].completedTime !== 0) {
              appTimers.activeTimers[ti].pauseTimes.push({
                startTime: currentTime,
                currentPauseTime: currentTime,
                completedTime: 0
              })
            }
            if (appTimers.activeTimers[ti].pauseTimes.length > 0 && appTimers.activeTimers[ti].pauseTimes[appTimers.activeTimers[ti].pauseTimes.length - 1].completedTime === 0) {
              appTimers.activeTimers[ti].pauseTimes[appTimers.activeTimers[ti].pauseTimes.length - 1].currentPauseTime = currentTime
            }
          })
        }
      }

      if (
        window.appConfig.start === false &&
        window.appConfig.pause === false
      ) {
        window.appConfig.sphere
          .setLinearVelocity(window.appConfig.originVector);
        window.appConfig.sphere
          .setAngularVelocity(window.appConfig.originVector);
        scene.setGravity(window.appConfig.originVector)
      } else {
        if (
          window.appConfig.touchStart === true &&
          window.appConfig.touchEnd === false
        ) {
          renderVector.set(window.appConfig.diffX * window.appConfig.inputScaleV,
            window.appConfig.diffY * -window.appConfig.inputScaleV,
            0)
          if (renderVector.length() > window.appConfig.speedClamp) {
            renderVector = renderVector.multiplyScalar(window.appConfig.speedClamp / renderVector.length())
          }
          window.appConfig.sphere
            .setLinearVelocity(renderVector)
        }
      }

      window.appConfig.pointLight0.position.set(
        window.appConfig.sphere.position.x,
        window.appConfig.sphere.position.y + 1,
        window.appConfig.sphere.position.z
      );

      window.appConfig.pointLight1.position.set(
        window.appConfig.sphere.position.x * lfo(1000),
        window.appConfig.sphere.position.y * lfo(750),
        10
      );

      if (window.appConfig.pauseSuperballs === false && window.appConfig.pause === false && window.appConfig.userHasEnded === false && currentTime % 15 < 2) {
        let sphereCoins = []
        try {
          scene.children.forEach(c => {
            if (c.name && (c.name.indexOf('SPHERECOIN') > -1 || c.name.indexOf('FINALSTAGE_BUMPER') > -1)) {
              sphereCoins.push(c)
            }
            if ((c.name.indexOf('FINAL_STAGE_WALL') > -1 || c.name.indexOf('SB_INDICATOR') > 1) && window.appConfig.superBallMaterial) {
              c.material.color = window.appConfig.colors[window.appConfig.superballMaterialIncrement % 15][0]
              if (c.name.indexOf('FINAL_STAGE_WALL') > -1) {
                c.children.forEach(finC => {
                  finC.material.color = window.appConfig.colors[window.appConfig.superballMaterialIncrement % 15][0]
                })
              }
            }
          })
          if (sphereCoins.length > 0) {
            window.appConfig.superballMaterialIncrement++
            sphereCoins.forEach(sc => {
              if (sc.setLinearVelocity) {
                renderVector.set(Math.random() * 25 - 12.5, Math.random() * 25 - 12.5, 0)
                sc.setLinearVelocity(renderVector.add(sc._physijs.linearVelocity))
                sc.material.color = window.appConfig.colors[window.appConfig.superballMaterialIncrement % 15][0]
                sc.children[0].material.color.set(window.appConfig.colors[window.appConfig.superballMaterialIncrement % 15][0])
                // FINALSTAGE_BUMPER
                if (Math.abs(sc.position.z) > 15 && sc.scored === undefined) {
                  sc.scored = true
                  window.appConfig.timers.activeTimers.push(
                    window.appConfig.timers.handleFinalStageBumperOut(sc)
                  )
                  setTimeout(() => {
                    scene.remove(sc)
                    console.log('REMOVED!')
                  }, 3000)
                  window.appConfig.score.coins += 25000
                  window.appConfig.gameModeFunctions.updateGameScore({ score: window.appConfig.score.coins })

                  // for(let fsb = 0; fsb < 2; fsb++) {
                  // // for(let fsb = 0; fsb < 5; fsb++) {
                  //   let name = window.appConfig.currentStage + '_SPHERECOIN_FSB_' + fsb + '_' + Math.round(Math.random() * 10000)
                  //   window.appConfig.createSphere({
                  //     bounce: 1,
                  //     name: name,
                  //     position: {
                  //       x: (Math.random() * 20) -10 ,
                  //       y: (Math.random() * 20) -10,
                  //       z: 0
                  //     },
                  //     // handleCollision: (c) => window.appConfig.superBallHandleCollision(c, name)
                  //     handleCollision: (c) => {
                  //       window.appConfig.superBallHandleCollision(c, name)
                  //       window.appConfig.timers.activeTimers.push(
                  //         window.appConfig.timers.moveCoinsToSphere()
                  //       )
                  //     }                      
                  //   })
                  // }

                  // let superName = window.appConfig.currentStage + '_SPHERECOIN_SUPER_' + fsb + '_' + Math.round(Math.random() * 10000)
                  // window.appConfig.createSphere({
                  //   bounce: 1,
                  //   name: superName,
                  //   position: {
                  //     x: (Math.random() * 20) -10 ,
                  //     y: (Math.random() * 20) -10,
                  //     z: 0
                  //   },
                  //   handleCollision: (c) => {
                  //     window.appConfig.stages.components.handleCoinRemoval(window.appConfig.coins, true)
                  //     window.appConfig.superBallHandleCollision(c, superName)
                  //   }
                  // })

                }
              }
            })
          }
        } catch (error) {
        }
      }
      if (window.appConfig.pause === true && (window.appConfig.pauseStoppedObjects === false || window.appConfig.pauseStoppedObjects === undefined)) {
        window.appConfig.pauseStoppedObjects = true
        scene.children.forEach(c => {
          if (c.name && (c.name.indexOf('SPHERECOIN') > -1 || c.name.indexOf('FINALSTAGE_BUMPER') > -1) && c.setLinearVelocity) {
            c.setLinearVelocity(window.appConfig.originVector)
            c.setAngularVelocity(window.appConfig.originVector)
          }
        })
      }
      if (window.appConfig.stages[window.appConfig.currentStage].data.portals && window.appConfig.stages[window.appConfig.currentStage].data.portals.length > 0 && window.appConfig.pause === false) {
        window.appConfig.stages[window.appConfig.currentStage].data.portals.forEach(p => {
          if (p.portalConfig && !p.portalConfig.sapphire || p.portalConfig.sapphire === false) {
            p.material.color = window.appConfig.colors[window.appConfig.superballMaterialIncrement % 15][0]
          }
          if ((p.portalConfig && p.portalConfig.active === true) || !p.portalConfig) {
            if (window.appConfig.sphere.position.distanceTo(p.position) < 7.5 && p.activated === false) {
              p.activated = true
              window.appConfig.timers.activeTimers.push(
                window.appConfig.timers.activatePortal(p)
              )
            }
            p.rotation.z += .01
          }
          // if (p.portalConfig && p.portalConfig.active === false) {
          //   // p.material.color = 0x000000
          //   // p.material.opacity = .25
          // }
          p.children.forEach((pc, pci) => {
            if (pc.oPosition) {
              // if (p.portalConfig && p.portalConfig.active === false) {
              //   // pc.material.color = 0x000000
              //   // pc.material.opacity = .25
              // }
              pc.position.x = pc.oPosition.x * lfo(500 + (pci + 1) * 125) * 2
              pc.position.y = pc.oPosition.y * lfo(500 + (pci + 1) * 100) * 2
              pc.position.z = pc.oPosition.z * lfo(500 + (pci + 1) * 75) * 2
              pc.rotation.x = lfo(500 + (pci + 1) * 125) * 1.125
              pc.rotation.y = lfo(500 + (pci + 1) * 100) * 1.125
              pc.rotation.z = lfo(500 + (pci + 1) * 75) * 1.125
            }
          })
        })
      }

      // if (window.appConfig.performanceLevel > 0 && currentTime % 5 < 1) {
      //   const percentFinished = Math.abs(window.appConfig.sphere.position.y) / 375;
      //   window.appConfig.percentFinished = percentFinished;
      //   document.body.style.background =
      //     window.appConfig.stages.components.background(
      //       percentFinished,
      //       window.appConfig.stages[window.appConfig.currentStage].backgroundColors
      //     )
      // }

      if (window.appConfig.stages[window.appConfig.currentStage].data.remotes) {
        window.appConfig.stages[window.appConfig.currentStage].data.remotes.forEach((r, ri) => {
          if (r.transmitter.transmitterActive === false && r.transmitter.position.distanceTo(window.appConfig.sphere.position) < 5) {
            r.transmitter.transmitterActive = true
            window.appConfig.timers.activeTimers.push(
              window.appConfig.timers.activateRemoteSwitch(r)
            )
          }
        })
      }

      if (currentTime % 20 < 1) {
        if (window.appConfig.timers.data.initialBallZoom.percentComplete > .999) {
          window.appConfig.timers.data.initialBallZoom.percentComplete = 1
        }
        if (window.appConfig.timers.data.stageResultsBallZoom.percentComplete > .999) {
          window.appConfig.timers.data.stageResultsBallZoom.percentComplete = 1
        }
        if (window.appConfig.timers.data.stageReset.percentComplete > .999) {
          window.appConfig.timers.data.stageReset.percentComplete = 1
        }
      }
      window.appConfig.cameraRenderLoopCallback()

      if (window.appConfig.userHasEnded) {
        window.appConfig.sphere
          .setLinearVelocity(window.appConfig.originVector);
        window.appConfig.sphere
          .setAngularVelocity(window.appConfig.originVector);
      }

      window.appConfig.crystalMaterials.forEach(cm => {
        const newHsl = colorLightnessLfo(cm.pulsing.color, 268)
        cm.pulsing.color.setHSL(newHsl.h, newHsl.s, newHsl.l)
      })

      window.appConfig.blueCrystalMaterials.forEach(cm => {

        const newHsl = colorLightnessLfo(cm.pulsing.color, 268)
        cm.pulsing.color.setHSL(newHsl.h, newHsl.s, newHsl.l)
      })


      if (window.appConfig.performanceLevel > 1) {
        if (window.appConfig.stages[window.appConfig.currentStage].bgGroupActiveCallback) {
          window.appConfig.stages[window.appConfig.currentStage].bgGroupActiveCallback()
        }
      }

      // window.appConfig.coinIndexToRemove = undefined
      window.appConfig.stages.components.handleCoinRemoval(window.appConfig.stages.components.findCoinsToRemove())

      window.appConfig.sprites.forEach(sprite => {
        sprite.activeCallback()
      })

      window.appConfig.sapphires.forEach(sapphire => {
        sapphire.activeCallback()
      })

      if (window.appConfig.userIsOnMainMenu === false && window.appConfig.pause === false && window.appConfig.userHasEnded === false && window.appConfig.stages[window.appConfig.currentStage].data.blackHoles && window.appConfig.stages[window.appConfig.currentStage].data.blackHoles.length > 0) {
        window.appConfig.stages[window.appConfig.currentStage].data.blackHoles.forEach(
          (bhc, bhci) => {
            window.appConfig.handleBlackHole(bhc, bhci)
          }
        )
      }

      window.appConfig.coinFrameCheckNumber++

      if (window.appConfig.vr === true) {
        renderer.setAnimationLoop(render)
      } else {
        requestAnimationFrame(render);
      }
      renderer.render(scene, camera);
      if (window.appConfig.healthCheck.healthChecked === false) {
        render_stats.update();
      }
    }; // end of render

    window.appConfig.positionBall = (p) => {
      window.appConfig.sphere.position.x = p.x
      window.appConfig.sphere.position.y = p.y
      window.appConfig.sphere.position.z = p.z
      window.appConfig.sphere.__dirtyPosition = true
    }

    const calculateStageScore = (seconds, coins) => {
      let normalizedSeconds = Math.floor(seconds)
      if (normalizedSeconds < 1) {
        normalizedSeconds = 1
      }
      let score = normalizedSeconds * coins
      return score
    }

    const startStageEnd = () => {
      window.appConfig.userHasEnded = true
      window.appConfig.recursiveTimerRemove('MOVE_COINS_TO_SPHERE')

      scene.setGravity(window.appConfig.originVector);
      window.appConfig.sphere.mass = 0

      window.appConfig.timers.activeTimers.push(window.appConfig.timers.stageResultsBallZoom())
      window.appConfig.handleHighScore()
      window.appConfig.timer.pause();
      window.appConfig.results[`stage${window.appConfig.level}`]
        ? (window.appConfig.results[
          `stage${window.appConfig.level}`
        ].finalTime = window.appConfig.timer
          .getTimeValues()
          .toString(["minutes", "seconds", "secondTenths"]))
        : (window.appConfig.results[
          `stage${window.appConfig.level}`
        ] = {
          finalTime: window.appConfig.timer
            .getTimeValues()
            .toString(["minutes", "seconds", "secondTenths"])
        });

      const stageScore = calculateStageScore(window.appConfig.timer
        .getTimeValues().seconds, window.appConfig.score.coins)

      window.appConfig.selectors.reportTime.childNodes[0].data = window.appConfig.stageTotalTimePlayed + ' sec';
      window.appConfig.selectors.reportScore.innerHTML =
        stageScore.toLocaleString('en-US').replace(',', comma());

      window.appConfig.gameModeFunctions.updateLocalHighscoreUI()
      window.appConfig.gameModeFunctions.updateLocalHighscoreUIMainMenu()

      window.appConfig.selectors.pauseButton.disabled = true;

    }

    const landingPageToMainMenu = () => {
      gtag('event', 'PLAY_NOW_CLICKED', {
        'event_category' : 'BALLSINKI_EVENTS',
        'event_label' : 'PLAY_NOW_CLICKED',
        'event_action' : 'PLAY_NOW_CLICKED',
        'action' : 'PLAY_NOW_CLICKED'
      });
      window.appConfig.isLandingPage = false
      document.querySelector('#landing-page').classList.add('hide')
      window.appConfig.timers.activeTimers.push(
        window.appConfig.timers.landingPageZoom()
      )
    }

    const countdown = () => {
      window.appConfig.timers.activeTimers.push(window.appConfig.timers.countdownName())
      document.body.style.background =
        window.appConfig.stages.components.background(
          .5,
          window.appConfig.stages[window.appConfig.currentStage].backgroundColors
        )
    }

    const start = () => {
      window.appConfig.userHasEnded = false
      window.appConfig.start = true;
      window.appConfig.pause = false;
      if (!window.appConfig.howlSounds.backgroundMusic.playing() && window.appConfig.musicTurnedOn) {
        window.appConfig.howlSounds.backgroundMusic.play()
      }
      setTimeout(() => showHTMLElements(["pause-button", "game-scoreboard"]), 1000)
      if (window.appConfig.isPortalStart === false) {
        window.appConfig.timers.activeTimers.push(timers.initialBallZoom())
      }
      window.appConfig.timer.start();

      scene.setGravity(window.appConfig.gravityVector);
      window.appConfig.sphere.mass = window.appConfig.defaultSphereMass
      window.appConfig.selectors.pauseButton.disabled = false;
      const theBall = window.appConfig.sphere
      theBall.position.set(window.appConfig.stages[window.appConfig.currentStage].data.startingPosition);
      if (window.appConfig.finalStageActiveTransforms === false) {
        window.appConfig.activeTransforms = window.appConfig.stages[window.appConfig.currentStage].defaultTransforms
      }
      theBall.setLinearVelocity(window.appConfig.gravityVector)
    };

    const pause = () => {
      if (window.appConfig.musicTurnedOn && window.appConfig.pause) {
        window.appConfig.howlSounds.backgroundMusic.play()
      } else if (window.appConfig.musicTurnedOn && window.appConfig.howlSounds.backgroundMusic.playing()) {
        window.appConfig.howlSounds.backgroundMusic.pause()
      }
      window.appConfig.pause = !window.appConfig.pause;
      window.appConfig.timers.pauseTimers = !window.appConfig.timers.pauseTimers
      if (window.appConfig.pause) {
        window.appConfig.timer.pause();

        scene.setGravity(window.appConfig.originVector);
        window.appConfig.sphere.mass = 0
        window.appConfig.sphere.setLinearVelocity(window.appConfig.originVector);
        window.appConfig.sphere.setAngularVelocity(window.appConfig.originVector);
        scene.setGravity(window.appConfig.originVector)

        showPauseMenu();
      } else {
        if (window.appConfig.requestFullscreenResult !== false) {
          appConfig.gameModeFunctions.requestFullscreen()
        }
        scene.setGravity(window.appConfig.gravityVector);
        window.appConfig.sphere.mass = window.appConfig.defaultSphereMass

        window.appConfig.timer.start();
        window.appConfig.pauseStoppedObjects = false
        showGameMode();
      }
    };

    const reset = (action) => {
      if (window.appConfig.requestFullscreenResult !== false) {
        appConfig.gameModeFunctions.requestFullscreen()
      }
      if (window.appConfig.timers.pauseTimers === true) {
        window.appConfig.timers.pauseTimers = false
      }
      window.appConfig.timers.activeTimers.push(window.appConfig.timers.stageReset(action))
      window.appConfig.results = {}
      window.appConfig.score.coins = 0
      window.appConfig.diffX = 0
      window.appConfig.diffY = 0
      window.appConfig.sprites.forEach(sprite => {
        sprite.reset()
      })
      window.appConfig.gameModeFunctions.updateGameScore({ score: 0 })
      showHTMLElements([]);
      window.appConfig.selectors.curtain.classList.remove("opacity-0");
      const newTimer = new easytimer.Timer({ countdown: true, startValues: { seconds: window.appConfig.easyTimerLength }, precision: "secondTenths" });
      window.appConfig.timer.stop()
      window.appConfig.timer.removeEventListener("secondTenthsUpdated", function (e) {
        window.appConfig.selectors.timer.childNodes[0].data = `${window.appConfig.timer
          .getTimeValues()
          .toString(["minutes", "seconds", "secondTenths"])}`;
      });
      window.appConfig.timer.removeEventListener("targetAchieved", function (e) {
        startStageEnd()
      })
      window.appConfig.timer = newTimer
      newTimer.start()
      newTimer.addEventListener("secondTenthsUpdated", function (e) {
        window.appConfig.selectors.timer.childNodes[0].data = `${window.appConfig.timer
          .getTimeValues()
          .toString(["minutes", "seconds", "secondTenths"])}`;
      });
      newTimer.addEventListener("targetAchieved", function (e) {
        startStageEnd()
      })
      window.appConfig.timer.reset();
      window.appConfig.timer.pause();
      window.appConfig.activeTransforms = []
    };
    window.appConfig.selectors = {
      galleryImage0: document.querySelector(".gallery-image-0"),
      scoreHundreds: document.querySelector("#score-hundreds-text"),
      scoreThousands: document.querySelector("#score-thousands-text"),
      scoreMillions: document.querySelector("#score-millions-text"),
      scoreThousandsComma: document.querySelector("#score-thousands-comma"),
      scoreMillionsComma: document.querySelector("#score-millions-comma"),
      sfxToggleOn: document.querySelector("#sfx-toggle-button-on"),
      sfxToggleOff: document.querySelector("#sfx-toggle-button-off"),
      musicToggleOn: document.querySelector("#music-toggle-button-on"),
      musicToggleOff: document.querySelector("#music-toggle-button-off"),
      timer: document.querySelector("#timer"),
      controlsToggleClick: document.querySelector("#controls-toggle-button-click"),
      controlsToggleSwipe: document.querySelector("#controls-toggle-button-swipe"),
      curtain: document.querySelector("#curtain"),
      stageNameTitle0: document.querySelector("#stage-name-title0"),
      stageNameTitle1: document.querySelector("#stage-name-title1"),
      stageNumber: document.querySelector('#stage-number'),
      reportTime: document.querySelector("#report-time"),
      reportScore: document.querySelector("#report-score"),
      highScore1Row: document.querySelector("#high-score-1-row"),
      highScore2Row: document.querySelector("#high-score-2-row"),
      highScore3Row: document.querySelector("#high-score-3-row"),
      highScore1Score: document.querySelector("#high-score-1-score"),
      highScore2Score: document.querySelector("#high-score-2-score"),
      highScore3Score: document.querySelector("#high-score-3-score"),
      highScore1Sec: document.querySelector("#high-score-1-sec"),
      highScore2Sec: document.querySelector("#high-score-2-sec"),
      highScore3Sec: document.querySelector("#high-score-3-sec"),
      highScore1Name: document.querySelector("#high-score-1-name"),
      highScore2Name: document.querySelector("#high-score-2-name"),
      highScore3Name: document.querySelector("#high-score-3-name"),
      globalHighScore1Row: document.querySelector("#global-high-score-1-row"),
      globalHighScore2Row: document.querySelector("#global-high-score-2-row"),
      globalHighScore3Row: document.querySelector("#global-high-score-3-row"),
      globalHighScore4Row: document.querySelector("#global-high-score-4-row"),
      globalHighScore5Row: document.querySelector("#global-high-score-5-row"),
      globalHighScore6Row: document.querySelector("#global-high-score-6-row"),
      globalHighScore7Row: document.querySelector("#global-high-score-7-row"),
      globalHighScore8Row: document.querySelector("#global-high-score-8-row"),
      globalHighScore9Row: document.querySelector("#global-high-score-9-row"),
      globalHighScore10Row: document.querySelector("#global-high-score-10-row"),
      globalHighScore1Score: document.querySelector("#global-high-score-1-score"),
      globalHighScore2Score: document.querySelector("#global-high-score-2-score"),
      globalHighScore3Score: document.querySelector("#global-high-score-3-score"),
      globalHighScore4Score: document.querySelector("#global-high-score-4-score"),
      globalHighScore5Score: document.querySelector("#global-high-score-5-score"),
      globalHighScore6Score: document.querySelector("#global-high-score-6-score"),
      globalHighScore7Score: document.querySelector("#global-high-score-7-score"),
      globalHighScore8Score: document.querySelector("#global-high-score-8-score"),
      globalHighScore9Score: document.querySelector("#global-high-score-9-score"),
      globalHighScore10Score: document.querySelector("#global-high-score-10-score"),
      globalHighScore1Sec: document.querySelector("#global-high-score-1-sec"),
      globalHighScore2Sec: document.querySelector("#global-high-score-2-sec"),
      globalHighScore3Sec: document.querySelector("#global-high-score-3-sec"),
      globalHighScore4Sec: document.querySelector("#global-high-score-4-sec"),
      globalHighScore5Sec: document.querySelector("#global-high-score-5-sec"),
      globalHighScore6Sec: document.querySelector("#global-high-score-6-sec"),
      globalHighScore7Sec: document.querySelector("#global-high-score-7-sec"),
      globalHighScore8Sec: document.querySelector("#global-high-score-8-sec"),
      globalHighScore9Sec: document.querySelector("#global-high-score-9-sec"),
      globalHighScore10Sec: document.querySelector("#global-high-score-10-sec"),
      globalHighScore1Name: document.querySelector("#global-high-score-1-name"),
      globalHighScore2Name: document.querySelector("#global-high-score-2-name"),
      globalHighScore3Name: document.querySelector("#global-high-score-3-name"),
      globalHighScore4Name: document.querySelector("#global-high-score-4-name"),
      globalHighScore5Name: document.querySelector("#global-high-score-5-name"),
      globalHighScore6Name: document.querySelector("#global-high-score-6-name"),
      globalHighScore7Name: document.querySelector("#global-high-score-7-name"),
      globalHighScore8Name: document.querySelector("#global-high-score-8-name"),
      globalHighScore9Name: document.querySelector("#global-high-score-9-name"),
      globalHighScore10Name: document.querySelector("#global-high-score-10-name"),
      highScoresDeviceTabButton: document.querySelector('#high-scores-device-tab-button'),
      highScoresGlobalTabButton: document.querySelector('#high-scores-global-tab-button'),
      highScore1InputValue: document.querySelector("#high-score-input-value-1"),
      highScore2InputValue: document.querySelector("#high-score-input-value-2"),
      highScore3InputValue: document.querySelector("#high-score-input-value-3"),
      highScore1InputClickDown: document.querySelector("#high-score-input-click-down-1"),
      highScore2InputClickDown: document.querySelector("#high-score-input-click-down-2"),
      highScore3InputClickDown: document.querySelector("#high-score-input-click-down-3"),
      highScore1InputClickUp: document.querySelector("#high-score-input-click-up-1"),
      highScore2InputClickUp: document.querySelector("#high-score-input-click-up-2"),
      highScore3InputClickUp: document.querySelector("#high-score-input-click-up-3"),
      highScoresTable: document.querySelector("#high-scores-table"),
      globalHighScoresTable: document.querySelector("#global-high-scores-table"),
      pauseButton: document.querySelector("#pause-button"),
      html: document.querySelector("html"),
      highScoreSubmitButton: document.querySelector("#high-score-submit-button"),
      highScoreInputModalCurtain: document.querySelector("#high-score-input-modal-curtain"),
      highScore1RowMainMenu: document.querySelector("#high-score-1-row-main-menu"),
      highScore2RowMainMenu: document.querySelector("#high-score-2-row-main-menu"),
      highScore3RowMainMenu: document.querySelector("#high-score-3-row-main-menu"),
      highScore1ScoreMainMenu: document.querySelector("#high-score-1-score-main-menu"),
      highScore2ScoreMainMenu: document.querySelector("#high-score-2-score-main-menu"),
      highScore3ScoreMainMenu: document.querySelector("#high-score-3-score-main-menu"),
      highScore1SecMainMenu: document.querySelector("#high-score-1-sec-main-menu"),
      highScore2SecMainMenu: document.querySelector("#high-score-2-sec-main-menu"),
      highScore3SecMainMenu: document.querySelector("#high-score-3-sec-main-menu"),
      highScore1NameMainMenu: document.querySelector("#high-score-1-name-main-menu"),
      highScore2NameMainMenu: document.querySelector("#high-score-2-name-main-menu"),
      highScore3NameMainMenu: document.querySelector("#high-score-3-name-main-menu"),
      globalHighScore1RowMainMenu: document.querySelector("#global-high-score-1-row-main-menu"),
      globalHighScore2RowMainMenu: document.querySelector("#global-high-score-2-row-main-menu"),
      globalHighScore3RowMainMenu: document.querySelector("#global-high-score-3-row-main-menu"),
      globalHighScore4RowMainMenu: document.querySelector("#global-high-score-4-row-main-menu"),
      globalHighScore5RowMainMenu: document.querySelector("#global-high-score-5-row-main-menu"),
      globalHighScore6RowMainMenu: document.querySelector("#global-high-score-6-row-main-menu"),
      globalHighScore7RowMainMenu: document.querySelector("#global-high-score-7-row-main-menu"),
      globalHighScore8RowMainMenu: document.querySelector("#global-high-score-8-row-main-menu"),
      globalHighScore9RowMainMenu: document.querySelector("#global-high-score-9-row-main-menu"),
      globalHighScore10RowMainMenu: document.querySelector("#global-high-score-10-row-main-menu"),
      globalHighScore1ScoreMainMenu: document.querySelector("#global-high-score-1-score-main-menu"),
      globalHighScore2ScoreMainMenu: document.querySelector("#global-high-score-2-score-main-menu"),
      globalHighScore3ScoreMainMenu: document.querySelector("#global-high-score-3-score-main-menu"),
      globalHighScore4ScoreMainMenu: document.querySelector("#global-high-score-4-score-main-menu"),
      globalHighScore5ScoreMainMenu: document.querySelector("#global-high-score-5-score-main-menu"),
      globalHighScore6ScoreMainMenu: document.querySelector("#global-high-score-6-score-main-menu"),
      globalHighScore7ScoreMainMenu: document.querySelector("#global-high-score-7-score-main-menu"),
      globalHighScore8ScoreMainMenu: document.querySelector("#global-high-score-8-score-main-menu"),
      globalHighScore9ScoreMainMenu: document.querySelector("#global-high-score-9-score-main-menu"),
      globalHighScore10ScoreMainMenu: document.querySelector("#global-high-score-10-score-main-menu"),
      globalHighScore1SecMainMenu: document.querySelector("#global-high-score-1-sec-main-menu"),
      globalHighScore2SecMainMenu: document.querySelector("#global-high-score-2-sec-main-menu"),
      globalHighScore3SecMainMenu: document.querySelector("#global-high-score-3-sec-main-menu"),
      globalHighScore4SecMainMenu: document.querySelector("#global-high-score-4-sec-main-menu"),
      globalHighScore5SecMainMenu: document.querySelector("#global-high-score-5-sec-main-menu"),
      globalHighScore6SecMainMenu: document.querySelector("#global-high-score-6-sec-main-menu"),
      globalHighScore7SecMainMenu: document.querySelector("#global-high-score-7-sec-main-menu"),
      globalHighScore8SecMainMenu: document.querySelector("#global-high-score-8-sec-main-menu"),
      globalHighScore9SecMainMenu: document.querySelector("#global-high-score-9-sec-main-menu"),
      globalHighScore10SecMainMenu: document.querySelector("#global-high-score-10-sec-main-menu"),
      globalHighScore1NameMainMenu: document.querySelector("#global-high-score-1-name-main-menu"),
      globalHighScore2NameMainMenu: document.querySelector("#global-high-score-2-name-main-menu"),
      globalHighScore3NameMainMenu: document.querySelector("#global-high-score-3-name-main-menu"),
      globalHighScore4NameMainMenu: document.querySelector("#global-high-score-4-name-main-menu"),
      globalHighScore5NameMainMenu: document.querySelector("#global-high-score-5-name-main-menu"),
      globalHighScore6NameMainMenu: document.querySelector("#global-high-score-6-name-main-menu"),
      globalHighScore7NameMainMenu: document.querySelector("#global-high-score-7-name-main-menu"),
      globalHighScore8NameMainMenu: document.querySelector("#global-high-score-8-name-main-menu"),
      globalHighScore9NameMainMenu: document.querySelector("#global-high-score-9-name-main-menu"),
      globalHighScore10NameMainMenu: document.querySelector("#global-high-score-10-name-main-menu"),
      highScoresDeviceTabButtonMainMenu: document.querySelector('#high-scores-device-tab-button-main-menu'),
      highScoresGlobalTabButtonMainMenu: document.querySelector('#high-scores-global-tab-button-main-menu'),
      highScoresTableMainMenu: document.querySelector("#high-scores-table-main-menu"),
      globalHighScoresTableMainMenuContainer: document.querySelector("#global-high-scores-table-main-menu-container"),
      highScoresMainMenuLeftArrow: document.querySelector('#high-scores-main-menu-left-arrow'),
      highScoresMainMenuRightArrow: document.querySelector('#high-scores-main-menu-right-arrow'),
      highScoresMainMenuCurrentZone: document.querySelector('#high-scores-main-menu-current-zone')
    }
    window.appConfig.selectors.scoreHundreds.textContent = "0"
    window.appConfig.selectors.scoreThousands.textContent = " "
    window.appConfig.selectors.scoreMillions.textContent = " "
    window.appConfig.selectors.timer.textContent = " "
    window.appConfig.selectors.reportTime.textContent = " "
    window.appConfig.selectors.reportScore.textContent = " "
    window.appConfig.selectors.highScore1Score.textContent = " "
    window.appConfig.selectors.highScore2Score.textContent = " "
    window.appConfig.selectors.highScore3Score.textContent = " "
    window.appConfig.selectors.highScore1Sec.textContent = " "
    window.appConfig.selectors.highScore2Sec.textContent = " "
    window.appConfig.selectors.highScore3Sec.textContent = " "
    window.appConfig.gameModeFunctions = {
      start: start,
      reset: reset,
      pause: pause,
      updateGameTime: (config) => {
        if (config !== undefined && config.time !== undefined) {

        }
      },
      updateGameScore: (config) => {
        if (config !== undefined && config.score !== undefined) {
          const scoreString = config.score.toString()
          const scoreLength = scoreString.length
          const sl0 = scoreString[scoreLength - 1] !== undefined ? scoreString[scoreLength - 1] : " "
          const sl1 = scoreString[scoreLength - 2] !== undefined ? scoreString[scoreLength - 2] : " "
          const sl2 = scoreString[scoreLength - 3] !== undefined ? scoreString[scoreLength - 3] : " "
          const hVal = sl2 + sl1 + sl0
          window.appConfig.selectors.scoreHundreds.childNodes[0].data = hVal
          const sl3 = scoreString[scoreLength - 4] !== undefined ? scoreString[scoreLength - 4] : " "
          const sl4 = scoreString[scoreLength - 5] !== undefined ? scoreString[scoreLength - 5] : " "
          const sl5 = scoreString[scoreLength - 6] !== undefined ? scoreString[scoreLength - 6] : " "
          const tVal = sl5 + sl4 + sl3
          window.appConfig.selectors.scoreThousands.childNodes[0].data = tVal
          const sl6 = scoreString[scoreLength - 7] !== undefined ? scoreString[scoreLength - 7] : " "
          const sl7 = scoreString[scoreLength - 8] !== undefined ? scoreString[scoreLength - 8] : " "
          const sl8 = scoreString[scoreLength - 9] !== undefined ? scoreString[scoreLength - 9] : " "
          const mVal = sl8 + sl7 + sl6
          window.appConfig.selectors.scoreMillions.childNodes[0].data = mVal
          if (tVal === "   ") {
            window.appConfig.selectors.scoreThousandsComma.classList.add("hide")
          } else {
            window.appConfig.selectors.scoreThousandsComma.classList.remove("hide")

          }
          if (mVal === "   ") {
            window.appConfig.selectors.scoreMillionsComma.classList.add("hide")
          } else {
            window.appConfig.selectors.scoreMillionsComma.classList.remove("hide")

          }
        }
      },
      requestFullscreen: () => {


        /* View in fullscreen */
        function openFullscreen() {
          if (!document.fullscreenElement) {
            if (window.appConfig.selectors.html.requestFullscreen) {
              window.appConfig.selectors.html.requestFullscreen( {navigationUI: "hide"} );
              window.appConfig.requestFullscreenResult = true
            } else if (window.appConfig.selectors.html.webkitRequestFullscreen) { /* Safari */
              window.appConfig.selectors.html.webkitRequestFullscreen();
              window.appConfig.requestFullscreenResult = true
            } else if (window.appConfig.selectors.html.msRequestFullscreen) { /* IE11 */
              window.appConfig.selectors.html.msRequestFullscreen();
              window.appConfig.requestFullscreenResult = true
            }
          }
        }

        /* Close fullscreen */
        function closeFullscreen() {
          if (document.exitFullscreen) {
            document.exitFullscreen();
            window.appConfig.requestFullscreenResult = false
          } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
            window.appConfig.requestFullscreenResult = false
          } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
            window.appConfig.requestFullscreenResult = false
          }
        }

        try {
          if (window.appConfig.requestFullscreenResult !== false) {
            openFullscreen()
          }
        } catch (err) {
          closeFullscreen()
        }
      },
      handleHighScoreApiCall : async (options) => {
        console.log(options)
        let callOptions = {}
        
        if (options && options.method != null) {
          callOptions.method = options.method
          callOptions.body = {
            oldScores:[]
          }
          if (options.method === "POST") {
            if (options.localScore !== undefined) {
                callOptions.body.newScore = {
                  "date": options.localScore.date,
                  "zone": window.appConfig.currentStageIndex,
                  "score": options.localScore.totalScore,
                  "name": options.localScore.name,
                  "seconds": options.localScore.lengthPlayed
                }
            }
            window.appConfig.gameModeFunctions.updateLegacyHighscoreZones()
            let hsInt = 0
            if (options.oldScores !== undefined) {
              callOptions.body.oldScores = options.oldScores
            } else {
              Object.keys(window.appConfig.highscores).forEach(key => {
                window.appConfig.highscores[key].highscores.forEach(score => {
                  if (score.name !== undefined && (score.posted === undefined || score.posted === false)) {
                    callOptions.body.oldScores.push(score)
                    hsInt++
                  }
                })
              })
            }
            console.log(callOptions.body)
            callOptions.body = JSON.stringify(callOptions.body)
          }
        }
        
        let jsonData
        try {
          await fetch('https://63qnzzjym0.execute-api.us-east-1.amazonaws.com/items', callOptions)
            .then(res=> res.json())
            .then(data => {
              jsonData = data
              console.log(jsonData)
              // now update leaderboard ui elements
              window.appConfig.gameModeFunctions.updatePostedHighscores(data)
              window.appConfig.gameModeFunctions.updateGlobalHighscores(data)
            })
        }
        catch (err) {
          console.log(err)
        }
      },
      populateOldScores: (zones = [0,1,2,3,4,5,6,7]) => {
        const makeName = () => {
          let name = ''
          for (let i = 0; i < 3; i++) {
            name = name + window.appConfig.highScoreConfig.charactersList[Math.floor(Math.random() * 26)]
          }
          if (window.appConfig.highScoreConfig.badWords.includes(name)){
            return makeName()
          } else {
            return name
          }
        }
        const makeSeconds = () => {
          return 60 + (Math.floor(Math.random() * 6) * 15)
        }
        const makeScore = () => {
          return 100000 + (Math.floor(Math.random()* 100) * 1000) + (Math.floor(Math.random() * 100) * 100)
        }
        let oldScores = []
        zones.forEach(zone => {
          for (let i = 0; i < 10; i++) {
            oldScores.push({
              "date": Date.now(),
              "zone": zone,
              "totalScore": makeScore(),
              "name": makeName(),
              "lengthPlayed": makeSeconds()
            })
          }
        })
        return oldScores
        //window.appConfig.gameModeFunctions.handleHighScoreApiCall({method:'POST', oldScores: window.appConfig.gameModeFunctions.populateOldScores()})
      },
      updatePostedHighscores: (data) => {
        if (data !== undefined && data.writeResult !== undefined) {
          data.writeResult.forEach(wr => {
            const currentZone = window.appConfig.highscores[`STAGE${wr.zone}`].highscores
            let foundIt
            if (currentZone !== undefined) {
              foundIt = currentZone.find(cz => {
                return cz.date === wr.date && cz.lengthPlayed === wr.seconds && cz.totalScore === wr.score  
              })
            }
            if (foundIt !== undefined) {
              foundIt.posted = true
            }
          })
        }
        localStorage.setItem('appConfig', JSON.stringify(window.appConfig.highscores))

      },
      updateGlobalHighscores: (data) => {
        if (data !== undefined && data.highScores !== undefined && Array.isArray(data.highScores)) {
          window.appConfig.globalHighscores = data.highScores
          localStorage.setItem('globalHighscores', JSON.stringify(data.highScores))
          window.appConfig.gameModeFunctions.updateGlobalHighscoreUI()
          window.appConfig.gameModeFunctions.updateGlobalHighscoreUIMainMenu()
        }
      },
      updateLegacyHighscoreNames: (name ) => {
        Object.keys(window.appConfig.highscores).forEach(stageKey => {
          window.appConfig.highscores[stageKey].highscores.forEach(score => {
            if (score.name === undefined) {
              score.name = name
            }
          })
        })
        localStorage.setItem('appConfig', JSON.stringify(window.appConfig.highscores))

      },
      updateLegacyHighscoreZones: () => {
        Object.keys(window.appConfig.highscores).forEach(stageKey => {
          window.appConfig.highscores[stageKey].highscores.forEach(score => {
            if (score.zone === undefined) {
              score.zone = Number(stageKey.slice(5))
            }
            score.zone = Number(score.zone)
          })
        })
        localStorage.setItem('appConfig', JSON.stringify(window.appConfig.highscores))

      },
      updateLocalHighscoreUI: () => {
        const hsIndexes = [1,2,3]
        hsIndexes.forEach(hsI => {
          const hs = window.appConfig.highscores[`STAGE${window.appConfig.currentStageIndex}`].highscores[hsI - 1]
          if ( hs !== undefined && hs.lengthPlayed > 0 && hs.totalScore !== undefined) {
            window.appConfig.selectors[`highScore${hsI}Score`].innerHTML = hs.totalScore.toLocaleString('en-US').replace(',', comma())
            window.appConfig.selectors[`highScore${hsI}Sec`].childNodes[0].data = hs.lengthPlayed + " sec"
            window.appConfig.selectors[`highScore${hsI}Row`].classList.remove("hide")
            if (hs.name !== undefined) {
              window.appConfig.selectors[`highScore${hsI}Name`].childNodes[0].data = hs.name
            } else {
              window.appConfig.selectors[`highScore${hsI}Name`].childNodes[0].data = '   '
            }
          } else {
            window.appConfig.selectors[`highScore${hsI}Row`].classList.add("hide")
          }
        })
      },
      updateLocalHighscoreUIMainMenu: () => {
        const hsIndexes = [1,2,3]
        hsIndexes.forEach(hsI => {
          const hs = window.appConfig.highscores[`STAGE${window.appConfig.highScoreConfig.mainMenuCurrentZoneIndex}`].highscores[hsI - 1]
          if ( hs !== undefined && hs.lengthPlayed > 0 && hs.totalScore !== undefined) {
            window.appConfig.selectors[`highScore${hsI}ScoreMainMenu`].innerHTML = hs.totalScore.toLocaleString('en-US').replace(',', comma())
            window.appConfig.selectors[`highScore${hsI}SecMainMenu`].childNodes[0].data = hs.lengthPlayed + " sec"
            window.appConfig.selectors[`highScore${hsI}RowMainMenu`].classList.remove("hide")
            if (hs.name !== undefined) {
              window.appConfig.selectors[`highScore${hsI}NameMainMenu`].childNodes[0].data = hs.name
            } else {
              window.appConfig.selectors[`highScore${hsI}NameMainMenu`].childNodes[0].data = '   '
            }
          } else {
            window.appConfig.selectors[`highScore${hsI}RowMainMenu`].classList.add("hide")
          }
        })
      },
      updateGlobalHighscoreUI: () => {
        const hsIndexes = [1,2,3,4,5,6,7,8,9,10]
        hsIndexes.forEach( hsI => {
          const hs = window.appConfig.globalHighscores[window.appConfig.currentStageIndex].arr[hsI - 1]
          if (hs !== undefined && hs.seconds > 0 && hs.score !== undefined) {
            window.appConfig.selectors[`globalHighScore${hsI}Score`].innerHTML = hs.score.toLocaleString('en-US').replace(',', comma())
            window.appConfig.selectors[`globalHighScore${hsI}Sec`].childNodes[0].data = hs.seconds + " sec"
            window.appConfig.selectors[`globalHighScore${hsI}Row`].classList.remove("hide")
            window.appConfig.selectors[`globalHighScore${hsI}Name`].childNodes[0].data = hs.name
          } else {
            window.appConfig.selectors[`globalHighScore${hsI}Row`].classList.add("hide")
          }
        })
      },
      updateGlobalHighscoreUIMainMenu: () => {
        const hsIndexes = [1,2,3,4,5,6,7,8,9,10]
        hsIndexes.forEach( hsI => {
          const hs = window.appConfig.globalHighscores[window.appConfig.highScoreConfig.mainMenuCurrentZoneIndex].arr[hsI - 1]
          if (hs !== undefined && hs.seconds > 0 && hs.score !== undefined) {
            window.appConfig.selectors[`globalHighScore${hsI}ScoreMainMenu`].innerHTML = hs.score.toLocaleString('en-US').replace(',', comma())
            window.appConfig.selectors[`globalHighScore${hsI}SecMainMenu`].childNodes[0].data = hs.seconds + " sec"
            window.appConfig.selectors[`globalHighScore${hsI}RowMainMenu`].classList.remove("hide")
            window.appConfig.selectors[`globalHighScore${hsI}NameMainMenu`].childNodes[0].data = hs.name
          } else {
            window.appConfig.selectors[`globalHighScore${hsI}RowMainMenu`].classList.add("hide")
          }
        })
      },
      unpostHighscores: () => {
        Object.keys(window.appConfig.highscores).forEach(stageKey => {
          window.appConfig.highscores[stageKey].highscores.forEach(score => {
            if (score.posted === true) {
              score.posted =false
            }
          })
        })
        localStorage.setItem('appConfig', JSON.stringify(window.appConfig.highscores))

      }
    }
    
    window.appConfig.highScoreConfig = {
      currentName: 'AAA',
      charactersList: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ',
      inputNumbers: [1,2,3],
      regex: new RegExp('[A-Z0-9 ]{3}', 'm'),
      badWords: ["ASS","FUC","FUK","FUQ","FUX","FCK","COC","COK","COQ","KOX","KOC","KOK","KOQ","CAC","CAK","CAQ","KAC","KAK","KAQ","DIC","DIK","DIQ","DIX","DCK","PNS","PSY","FAG","FGT","NGR","NIG","CNT","KNT","SHT","DSH","TWT","BCH","CUM","CLT","KUM","KLT","SUC","SUK","SUQ","SCK","LIC","LIK","LIQ","LCK","JIZ","JZZ","GAY","GEY","GEI","GAI","VAG","VGN","SJV","FAP","PRN","LOL","JEW","JOO","GVR","PUS","PIS","PSS","SNM","TIT","FKU","FCU","FQU","HOR","SLT","JAP","WOP","KIK","KYK","KYC","KYQ","DYK","DYQ","DYC","KKK","JYZ","PRK","PRC","PRQ","MIC","MIK","MIQ","MYC","MYK","MYQ","GUC","GUK","GUQ","GIZ","GZZ","SEX","SXX","SXI","SXE","SXY","XXX","WAC","WAK","WAQ","WCK","POT","THC","VAJ","VJN","NUT","STD","LSD","POO","AZN","PCP","DMN","ORL","ANL","ANS","MUF","MFF","PHK","PHC","PHQ","XTC","TOK","TOC","TOQ","MLF","RAC","RAK","RAQ","RCK","SAC","SAK","SAQ","PMS","NAD","NDZ","NDS","WTF","SOL","SOB","FOB","SFU"],
      mainMenuCurrentZoneIndex: 0,
    }
    if (localStorage.getItem('hsName') !== null && window.appConfig.highScoreConfig.regex.test(localStorage.getItem('hsName'))){
      window.appConfig.highScoreConfig.currentName = localStorage.getItem('hsName')
      window.appConfig.highScoreConfig.inputNumbers.forEach(inputNumber => {
        window.appConfig.selectors[`highScore${inputNumber}InputValue`].childNodes[0].data = window.appConfig.highScoreConfig.currentName[inputNumber-1]
      })
    }
    if (localStorage.getItem('globalHighscores') !== null) {
      window.appConfig.globalHighscores = JSON.parse(localStorage.getItem('globalHighscores'))
      window.appConfig.gameModeFunctions.updateGlobalHighscoreUI()
      window.appConfig.gameModeFunctions.updateGlobalHighscoreUIMainMenu()
    }
    window.appConfig.selectors.highScoresMainMenuLeftArrow.addEventListener("click", () => {
      window.appConfig.highScoreConfig.mainMenuCurrentZoneIndex = window.appConfig.highScoreConfig.mainMenuCurrentZoneIndex - 1
      if (window.appConfig.highScoreConfig.mainMenuCurrentZoneIndex < 0) {
        window.appConfig.highScoreConfig.mainMenuCurrentZoneIndex = window.appConfig.stagesArray.length -1
      }
      window.appConfig.selectors.highScoresMainMenuCurrentZone.childNodes[0].data = window.appConfig.stages[`STAGE${window.appConfig.highScoreConfig.mainMenuCurrentZoneIndex}`].name
      window.appConfig.gameModeFunctions.updateLocalHighscoreUIMainMenu()
      window.appConfig.gameModeFunctions.updateGlobalHighscoreUIMainMenu()
    })
    window.appConfig.selectors.highScoresMainMenuRightArrow.addEventListener("click", () => {
      window.appConfig.highScoreConfig.mainMenuCurrentZoneIndex = window.appConfig.highScoreConfig.mainMenuCurrentZoneIndex + 1
      if (window.appConfig.highScoreConfig.mainMenuCurrentZoneIndex > window.appConfig.stagesArray.length -1) {
        window.appConfig.highScoreConfig.mainMenuCurrentZoneIndex = 0
      }
      window.appConfig.selectors.highScoresMainMenuCurrentZone.childNodes[0].data = window.appConfig.stages[`STAGE${window.appConfig.highScoreConfig.mainMenuCurrentZoneIndex}`].name
      window.appConfig.gameModeFunctions.updateLocalHighscoreUIMainMenu()
      window.appConfig.gameModeFunctions.updateGlobalHighscoreUIMainMenu()
    })
    
    window.appConfig.highScoreConfig.inputNumbers.forEach(hsInput => {
      window.appConfig.selectors[`highScore${hsInput}InputClickDown`].addEventListener("click", () => {
        const letterIndex = window.appConfig.highScoreConfig.charactersList.indexOf(window.appConfig.highScoreConfig.currentName[hsInput-1])
        let newIndex = letterIndex === 0 ? window.appConfig.highScoreConfig.charactersList.length -1 : letterIndex - 1
        window.appConfig.highScoreConfig.currentName = window.appConfig.highScoreConfig.currentName.substring(0, hsInput-1) + window.appConfig.highScoreConfig.charactersList[newIndex] + window.appConfig.highScoreConfig.currentName.substring(hsInput-1 + 1);
        window.appConfig.selectors[`highScore${hsInput}InputValue`].childNodes[0].data = window.appConfig.highScoreConfig.currentName[hsInput-1]
        window.appConfig.selectors.highScoreSubmitButton.disabled = window.appConfig.highScoreConfig.badWords.includes(window.appConfig.highScoreConfig.currentName.toUpperCase())
        //then display message to change
      } )
      window.appConfig.selectors[`highScore${hsInput}InputClickUp`].addEventListener("click", () => {
        const letterIndex = window.appConfig.highScoreConfig.charactersList.indexOf(window.appConfig.highScoreConfig.currentName[hsInput-1])
        let newIndex = letterIndex === window.appConfig.highScoreConfig.charactersList.length -1 ? 0 : letterIndex + 1
        window.appConfig.highScoreConfig.currentName = window.appConfig.highScoreConfig.currentName.substring(0, hsInput-1) + window.appConfig.highScoreConfig.charactersList[newIndex] + window.appConfig.highScoreConfig.currentName.substring(hsInput-1 + 1);
        window.appConfig.selectors[`highScore${hsInput}InputValue`].childNodes[0].data = window.appConfig.highScoreConfig.currentName[hsInput-1]
        window.appConfig.selectors.highScoreSubmitButton.disabled = window.appConfig.highScoreConfig.badWords.includes(window.appConfig.highScoreConfig.currentName.toUpperCase())
        //then display message to change
      } )
    })
    window.appConfig.selectors.highScoreSubmitButton.addEventListener("click", () => {
      console.log(window.appConfig.highscores[`STAGE${window.appConfig.highScoreConfig.newScoreZone}`])
      const scoreIndexToUpdate = window.appConfig.highscores[`STAGE${window.appConfig.highScoreConfig.newScoreZone}`].highscores.findIndex(obj => obj.date === window.appConfig.highScoreConfig.newScore.date)
      console.log("nameToSubmit:",window.appConfig.highScoreConfig.currentName)
      window.appConfig.highscores[`STAGE${window.appConfig.highScoreConfig.newScoreZone}`].highscores[scoreIndexToUpdate].name = window.appConfig.highScoreConfig.currentName
      console.log("scoreToUpdate: ", window.appConfig.highscores[`STAGE${window.appConfig.highScoreConfig.newScoreZone}`].highscores[scoreIndexToUpdate])
      localStorage.setItem('appConfig', JSON.stringify(window.appConfig.highscores))
      localStorage.setItem('hsName', window.appConfig.highScoreConfig.currentName)
      window.appConfig.gameModeFunctions.updateLegacyHighscoreNames(window.appConfig.highScoreConfig.currentName)
      window.appConfig.gameModeFunctions.updateLocalHighscoreUI()
      window.appConfig.gameModeFunctions.updateLocalHighscoreUIMainMenu()
      window.appConfig.gameModeFunctions.handleHighScoreApiCall({method:"POST", localScore: window.appConfig.highscores[`STAGE${window.appConfig.highScoreConfig.newScoreZone}`].highscores[scoreIndexToUpdate] })
      showHTMLElements(window.appConfig.highScoreConfig.returnElements)
    })
    window.appConfig.selectors.highScoresDeviceTabButton.addEventListener("click", () => {
      window.appConfig.selectors.globalHighScoresTable.classList.add('hide')
      window.appConfig.selectors.highScoresTable.classList.remove('hide')
      
      window.appConfig.selectors.highScoresGlobalTabButton.classList.add('gray')
      window.appConfig.selectors.highScoresDeviceTabButton.classList.remove('gray')

    })
    window.appConfig.selectors.highScoresGlobalTabButton.addEventListener("click", () => {
      window.appConfig.selectors.globalHighScoresTable.classList.remove('hide')
      window.appConfig.selectors.highScoresTable.classList.add('hide')
      
      window.appConfig.selectors.highScoresGlobalTabButton.classList.remove('gray')
      window.appConfig.selectors.highScoresDeviceTabButton.classList.add('gray')

    })
    
    window.appConfig.selectors.highScoresDeviceTabButtonMainMenu.addEventListener("click", () => {
      window.appConfig.selectors.globalHighScoresTableMainMenuContainer.classList.add('hide')
      window.appConfig.selectors.highScoresTableMainMenu.classList.remove('hide')
      
      window.appConfig.selectors.highScoresGlobalTabButtonMainMenu.classList.add('gray')
      window.appConfig.selectors.highScoresDeviceTabButtonMainMenu.classList.remove('gray')

    })
    window.appConfig.selectors.highScoresGlobalTabButtonMainMenu.addEventListener("click", () => {
      window.appConfig.selectors.globalHighScoresTableMainMenuContainer.classList.remove('hide')
      window.appConfig.selectors.highScoresTableMainMenu.classList.add('hide')
      
      window.appConfig.selectors.highScoresGlobalTabButtonMainMenu.classList.remove('gray')
      window.appConfig.selectors.highScoresDeviceTabButtonMainMenu.classList.add('gray')

    })
    window.appConfig.gameModeFunctions.updateLocalHighscoreUI()
    window.appConfig.gameModeFunctions.updateLocalHighscoreUIMainMenu()

    window.appConfig.gameModeFunctions.handleHighScoreApiCall({method:'POST'})

    const colorLightnessLfo = (baseColor, lfoMod) => {
      // const color = new THREE.Color(baseColor)
      let hsl = {}
      baseColor.getHSL(hsl)
      const theLfo = lfoPositive(141 + lfoMod) * .6
      hsl.l = hsl.l + theLfo
      return hsl
    }
    const showReport = () => {
      showHTMLElements(["report", "tinted-overlay"]);
    window.appConfig.gameModeFunctions.updateLocalHighscoreUI()
    window.appConfig.gameModeFunctions.updateGlobalHighscoreUI()
    }
    const showLevelSelect = () => {
      if (window.appConfig.requestFullscreenResult !== false) {
        appConfig.gameModeFunctions.requestFullscreen()
      }
      showHTMLElements(["level-select", "tinted-overlay"]);
    };
    const showSounds = () => {
      if (window.appConfig.requestFullscreenResult !== false) {
        appConfig.gameModeFunctions.requestFullscreen()
      }
      toggleSFXButton({ value: window.appConfig.sfxTurnedOn === true ? "on" : "off" })
      toggleMusicButton({ value: window.appConfig.musicTurnedOn === true ? "on" : "off" })
      // togglePerformanceButton({ value: window.appConfig.performanceLevel, onlyHTML: true })
      toggleControlsButton({ value: window.appConfig.events.primaryInput, onlyHTML: true })
      showHTMLElements(["sounds", "tinted-overlay"]);
    };
    const showCredits = () => {
      showHTMLElements(["credits", "tinted-overlay"]);
    };
    const showHighscoresMainMenu = () => {
      window.appConfig.gameModeFunctions.updateLocalHighscoreUIMainMenu()
      window.appConfig.gameModeFunctions.updateGlobalHighscoreUIMainMenu()
      showHTMLElements(["high-scores-main-menu", "tinted-overlay"]);
      window.appConfig.selectors.highScoresMainMenuCurrentZone.childNodes[0].data = window.appConfig.stages[window.appConfig.currentStage].name
    }

    const showInstructions = () => {
      showHTMLElements(["instructions", "tinted-overlay"]);
    };

    const showStart = () => {
      showHTMLElements(["main-menu-container", "tinted-overlay", "landing-title-section"]);
    };
    const showPauseMenu = () => {
      showHTMLElements(["play-button", "pause-menu", "game-scoreboard", "tinted-overlay"]);
      // showHTMLElements(["play-button"]);
    };

    const showStageCountDownName = () => {
      showHTMLElements(["stage-name-container", "tinted-overlay"]);
    };

    const showStageCountDown3 = () => {
      showHTMLElements(["stage-countdown-3-container", "tinted-overlay"]);
    };

    const showStageCountDown2 = () => {
      showHTMLElements(["stage-countdown-2-container", "tinted-overlay"]);
    };

    const showStageCountDown1 = () => {
      showHTMLElements(["stage-countdown-1-container", "tinted-overlay"]);
    };

    const showStageCountDownStart = () => {
      showHTMLElements(["stage-countdown-start-container", "pause-button", "game-scoreboard"]);
    };

    const showGameMode = () => {
      showHTMLElements(["pause-button", "game-scoreboard"]);
    };
    const goBack = () => {
      if (window.appConfig.pause) {
        showPauseMenu();
      } else if (window.appConfig.userHasEnded) {
        showReport()
      } else {
        showStart();
      }
    };

    const setLevel = (level) => {
      window.appConfig.level = level;
    };
    const toggleSFXButton = (config) => {
      if (config && config.value !== undefined) {
        switch (config.value) {
          case "on":
            window.appConfig.sfxTurnedOn = true
            window.appConfig.selectors.sfxToggleOn.classList.remove("gray")
            window.appConfig.selectors.sfxToggleOff.classList.add("gray")
            break
          case "off":
            window.appConfig.sfxTurnedOn = false
            window.appConfig.selectors.sfxToggleOn.classList.add("gray")
            window.appConfig.selectors.sfxToggleOff.classList.remove("gray")
            break
        }
      }
    }
    const toggleMusicButton = (config) => {
      if (config && config.value !== undefined) {
        switch (config.value) {
          case "on":
            window.appConfig.musicTurnedOn = true
            window.appConfig.selectors.musicToggleOn.classList.remove("gray")
            window.appConfig.selectors.musicToggleOff.classList.add("gray")
            break
          case "off":
            window.appConfig.musicTurnedOn = false
            window.appConfig.selectors.musicToggleOn.classList.add("gray")
            window.appConfig.selectors.musicToggleOff.classList.remove("gray")
            break
        }
      }
    }


    const toggleControlsButton = (config) => {
      if (config) {
        let onlyHTML = false
        if (config.onlyHTML && config.onlyHTML === true) {
          onlyHTML = true
        }
        if (config.value !== undefined) {
          switch (config.value) {
            case "click":
              if (onlyHTML === false) {
                window.appConfig.events.primaryInput = "click"
              }
              window.appConfig.selectors.controlsToggleClick.classList.remove("gray")
              window.appConfig.selectors.controlsToggleSwipe.classList.add("gray")
              break
            case "swipe":
              if (onlyHTML === false) {
                window.appConfig.events.primaryInput = "mouse"
              }
              window.appConfig.selectors.controlsToggleClick.classList.add("gray")
              window.appConfig.selectors.controlsToggleSwipe.classList.remove("gray")
              break
            case "mouse":
              if (onlyHTML === false) {
                window.appConfig.events.primaryInput = "mouse"
              }
              window.appConfig.selectors.controlsToggleClick.classList.add("gray")
              window.appConfig.selectors.controlsToggleSwipe.classList.remove("gray")
              break
            case "touch":
              if (onlyHTML === false) {
                window.appConfig.events.primaryInput = "mouse"
              }
              window.appConfig.selectors.controlsToggleClick.classList.add("gray")
              window.appConfig.selectors.controlsToggleSwipe.classList.remove("gray")
              break
          }
        }
      }
    }
    window.appConfig.toggleControlsButton = toggleControlsButton
    // const togglePerformanceButton = (config) => {
    //   if (config) {
    //     let onlyHTML = false
    //     if (config.onlyHTML && config.onlyHTML === true) {
    //       onlyHTML = true
    //     }
    //     if (config.value !== undefined) {
    //       switch (config.value) {
    //         case 0:
    //           window.appConfig.selectors.performanceToggleLow.classList.remove("gray")
    //           window.appConfig.selectors.performanceToggleMed.classList.add("gray")
    //           window.appConfig.selectors.performanceToggleHigh.classList.add("gray")
    //           break
    //         case 1:
    //           window.appConfig.selectors.performanceToggleLow.classList.add("gray")
    //           window.appConfig.selectors.performanceToggleMed.classList.remove("gray")
    //           window.appConfig.selectors.performanceToggleHigh.classList.add("gray")
    //           break
    //         case 2:
    //           window.appConfig.selectors.performanceToggleLow.classList.add("gray")
    //           window.appConfig.selectors.performanceToggleMed.classList.add("gray")
    //           window.appConfig.selectors.performanceToggleHigh.classList.remove("gray")
    //           break
    //       }
    //     }
    //     if (onlyHTML === false) {
    //       window.appConfig.performanceLevel = config.value
    //       window.localStorage.setItem('performanceLevel', JSON.stringify({ performanceLevel: config.value }))
    //       reset({ action: 'levelSelect', level: window.appConfig.currentStageIndex, autoStart: false })
    //     }
    //   }
    // }
    window.onload = startCrystalLoader;