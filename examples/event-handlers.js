const margin = 24

setTimeout(() => {
    document.addEventListener("touchstart", (e) => {
      if (e.touches[0].pageX < margin || e.touches[0].pageX > window.innerWidth - margin) return;
      e.preventDefault();
      if ((window.appConfig.events.primaryInput === undefined || window.appConfig.events.primaryInput === 'click') && !window.appConfig.userHasEnded && window.appConfig.pause === false) {
        // const sphere = scene.children.find((obj) => obj.gameName === "SPHERE0")
        const sphere = window.appConfig.sphere
        var inputVectorX = (e.touches[0].clientX / window.innerWidth * 2) - 1;
        var inputVectorY = (e.touches[0].clientY / window.innerHeight * -2) + 1;
        const clickScale = 100
        sphere.setLinearVelocity(new THREE.Vector3(inputVectorX * clickScale, inputVectorY * clickScale, 0))
      }

      if ((window.appConfig.events.primaryInput === undefined || window.appConfig.events.primaryInput === 'touch') && !window.appConfig.userHasEnded && window.appConfig.pause === false) {
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
      }
    });

    document.addEventListener("mousedown", (e) => {
      if (e.pageX < margin || e.pageX > window.innerWidth - margin) return;
      e.preventDefault();
      if(window.appConfig.events.primaryInput === undefined) {
        window.appConfig.events.primaryInput = 'mouse'
      }
      if ((window.appConfig.events.primaryInput === undefined || window.appConfig.events.primaryInput === 'mouse') && !window.appConfig.userHasEnded && window.appConfig.pause === false) {
        window.appConfig.touchEnd = false;
        window.appConfig.touchStart = true;
        window.appConfig.currentX = e.clientX;
        window.appConfig.currentY = e.clientY;
  
        window.appConfig.prevX = e.clientX;
        window.appConfig.prevY = e.clientY;
        window.appConfig.diffX =
          window.appConfig.currentX - window.appConfig.prevX;
        window.appConfig.diffY =
          window.appConfig.currentY - window.appConfig.prevY;
      }
    });

    document.addEventListener("pause", () => {
      if(window.appConfig.start === true && window.appConfig.userHasEnded === false && window.appConfig.pause === false) {
        window.appConfig.gameModeFunctions.pause()
      }
    }, false);

    
      document.body.addEventListener(
        "touchmove",
        (e) => {
          if (e.touches[0].pageX < margin || e.touches[0].pageX > window.innerWidth - margin) return;
          e.preventDefault();
          if(window.appConfig.events.primaryInput !== 'click'){
            window.appConfig.events.primaryInput = 'touch'
          }
          if ((window.appConfig.events.primaryInput === undefined || window.appConfig.events.primaryInput === 'touch') && !window.appConfig.userHasEnded && window.appConfig.events.touchmove.active === false && window.appConfig.pause === false) {
            window.appConfig.events.touchmove.active = true
            window.appConfig.prevX = window.appConfig.currentX;
            window.appConfig.prevY = window.appConfig.currentY;
            window.appConfig.currentX = e.touches[0].clientX;
            window.appConfig.currentY = e.touches[0].clientY;
            window.appConfig.diffX =
              e.touches[0].clientX - window.appConfig.prevX;
            window.appConfig.diffY =
              e.touches[0].clientY - window.appConfig.prevY;
            setTimeout(() => {
              window.appConfig.events.touchmove.active = false
            }, window.appConfig.events.touchmove.throttle)
          }
        },
        true
      );

      document.body.addEventListener(
        "mousemove",
        (e) => {
          if (e.pageX < margin || e.pageX > window.innerWidth - margin) return;
          e.preventDefault();
          if ((window.appConfig.events.primaryInput === undefined || window.appConfig.events.primaryInput === 'mouse') && !window.appConfig.userHasEnded && window.appConfig.events.touchmove.active === false && window.appConfig.pause === false) {
            window.appConfig.events.touchmove.active = true
            window.appConfig.prevX = window.appConfig.currentX;
            window.appConfig.prevY = window.appConfig.currentY;
            window.appConfig.currentX = e.clientX;
            window.appConfig.currentY = e.clientY;
            window.appConfig.diffX =
              e.clientX - window.appConfig.prevX;
            window.appConfig.diffY =
              e.clientY - window.appConfig.prevY;
            setTimeout(() => {
              window.appConfig.events.touchmove.active = false
            }, window.appConfig.events.touchmove.throttle)
          }
        },
        true
      );


      document.addEventListener("mouseup", (e) => {
        if (e.pageX < margin || e.pageX > window.innerWidth - margin) return;
        e.preventDefault();
        if ((window.appConfig.events.primaryInput === undefined || window.appConfig.events.primaryInput === 'mouse') && !window.appConfig.userHasEnded && window.appConfig.pause === false) {
          window.appConfig.touchEnd = true;
          window.appConfig.touchStart = false;
          window.appConfig.currentX = 0;
          window.appConfig.currentY = 0;
          window.appConfig.diffX = 0;
          window.appConfig.diffY = 0;
        }
      });

      document.addEventListener("touchend", (e) => {
        if (e.touches[0].pageX < margin || e.touches[0].pageX > window.innerWidth - margin) return;
        e.preventDefault();
        if ((window.appConfig.events.primaryInput === undefined || window.appConfig.events.primaryInput === 'touch') && !window.appConfig.userHasEnded && window.appConfig.pause === false) {
          window.appConfig.touchEnd = true;
          window.appConfig.touchStart = false;
          window.appConfig.currentX = 0;
          window.appConfig.currentY = 0;
          window.appConfig.diffX = 0;
          window.appConfig.diffY = 0;
        }
      });

      document.querySelector('body').addEventListener("click", (e) => {
          if (e.pageX < margin || e.pageX > window.innerWidth - margin) return;
          if ((window.appConfig.events.primaryInput === undefined || window.appConfig.events.primaryInput === 'click') && !window.appConfig.userHasEnded && window.appConfig.pause === false) {
            const sphere = window.appConfig.sphere //scene.children.find((obj) => obj.gameName === "SPHERE0")
            var inputVectorX = (e.clientX / window.innerWidth * 2) - 1;
            var inputVectorY = (e.clientY / window.innerHeight * -2) + 1;
            const clickScale = 50
            sphere.setLinearVelocity(new THREE.Vector3(inputVectorX * clickScale, inputVectorY * clickScale, 0))  
          }  
      });

      window.addEventListener('blur', function(e) {
        e.preventDefault();
        Howler.stop()
        if(window.appConfig.start === true && window.appConfig.userHasEnded === false && window.appConfig.pause === false) {
          window.appConfig.gameModeFunctions.pause()
        }
      })

      window.addEventListener('beforeunload', function(e) {
          e.preventDefault(); //per the standard
          Howler.stop()
          if(window.appConfig.start === true && window.appConfig.userHasEnded === false && window.appConfig.pause === false) {
            window.appConfig.gameModeFunctions.pause()
          }  
          e.returnValue = '';
      });

      // const clickRay = new THREE.Raycaster();
      // document.addEventListener("click", (e) => {
      //   e.preventDefault();
      //   const normalized = new THREE.Vector2((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
      //   clickRay.setFromCamera(normalized, camera);

      //   const intersects = clickRay.intersectObjects(
      //     scene.children, true
      //   )
      //   const filteredIntersects = []
      //   intersects.forEach(intersect => {
      //     if (intersect.object.gameName && intersect.object.gameName !== "FRONTGLASS" && intersect.object.gameName !== "BACKGLASS") {
      //       filteredIntersects.push(intersect)
      //     } else {
      //       filteredIntersects.push(intersect)
      //     }
      //   })
      // });
    }, 1500)


