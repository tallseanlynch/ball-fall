setTimeout(() => {
    document.addEventListener("touchstart", (e) => {
        if (!window.appConfig.userHasEnded) {
          window.appConfig.touchEnd = false;
          window.appConfig.touchStart = true;
          window.appConfig.currentX = e.touches[0].clientX;
          window.appConfig.currentY = e.touches[0].clientY;
    
          window.appConfig.prevX = e.touches[0].clientX;
          window.appConfig.prevY = e.touches[0].clientY;
          window.appConfig.diffX =
            window.appConfig.currentX - window.appConfig.prevX;
          window.appConfig.diffY =
            window.appConfig.currentY - window.appConfig.prevY;
          console.log("TOUCHSTART", e);
          console.log("APPCONFIG", window.appConfig);
        }
      });
    
      window.appConfig.events = { touchmove: { throttle: 50, active: false } }
    
      document.body.addEventListener(
        "touchmove",
        (e) => {
          if (!window.appConfig.userHasEnded && window.appConfig.events.touchmove.active === false) {
            window.appConfig.events.touchmove.active = true
            window.appConfig.prevX = window.appConfig.currentX;
            window.appConfig.prevY = window.appConfig.currentY;
            window.appConfig.currentX = e.touches[0].clientX;
            window.appConfig.currentY = e.touches[0].clientY;
            window.appConfig.diffX =
              e.touches[0].clientX - window.appConfig.prevX;
            window.appConfig.diffY =
              e.touches[0].clientY - window.appConfig.prevY;
            console.log(
              "TOUCHMOVE",
              e.touches[0].clientX,
              e.touches[0].clientY
            );
            console.log("APPCONFIG", window.appConfig);
            console.log(window.appConfig.diffX, window.appConfig.diffY);
            e.preventDefault();
            setTimeout(() => {
              window.appConfig.events.touchmove.active = false
            }, window.appConfig.events.touchmove.throttle)
          }
        },
        true
      );
    
      document.addEventListener("touchend", (e) => {
        if (!window.appConfig.userHasEnded) {
          window.appConfig.touchEnd = true;
          window.appConfig.touchStart = false;
          window.appConfig.currentX = 0;
          window.appConfig.currentY = 0;
          window.appConfig.diffX = 0;
          window.appConfig.diffY = 0;
          console.log("TOUCHEND", e);
          console.log("APPCONFIG", window.appConfig);
        }
      });
      const clickRay = new THREE.Raycaster();
      document.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("CLICK", e);
        const normalized = new THREE.Vector2((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
        clickRay.setFromCamera(normalized, camera);

        const intersects = clickRay.intersectObjects(
          scene.children, true
        )
        const filteredIntersects = []
        intersects.forEach(intersect => {
          if (intersect.object.gameName && intersect.object.gameName !== "FRONTGLASS" && intersect.object.gameName !== "BACKGLASS") {
            filteredIntersects.push(intersect)
          } else {
            filteredIntersects.push(intersect)
          }
        })
        console.log('filteredIntersects', filteredIntersects)

        console.log("APPCONFIG", window.appConfig);
      });
    }, 1500)


