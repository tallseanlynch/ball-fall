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

      document.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("CLICK", e);
        // debugger
        const mouseX = ( e.clientX / window.innerWidth ) * 2 - 1;
      	const mouseY = - ( e.clientY / window.innerHeight ) * 2 + 1;
        const normalized = new THREE.Vector3(mouseX, mouseY, 1);
        normalized.unproject( camera )
        const clickRay = new THREE.Raycaster( camera.postion, normalized.sub(camera.position).normalize());
        // clickRay.setFromCamera(normalized, camera);
    
        // console.log(
        //   clickRay.intersectObject(
        //     scene.children.find((obj) => obj.gameName === "FRONTGLASS")
        //   )
        // );
        // console.log('-- RAY INTERSECTED WITH --')
        // console.log(clickRay)
        // console.log(
        //   clickRay.intersectObjects(
        //     scene.children, true
        //   )
        // );
        // console.log("APPCONFIG", window.appConfig);
      });
    }, 1500)


