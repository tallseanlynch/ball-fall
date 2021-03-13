setTimeout(() => {
  const handleClick = (e) => {
    window.appConfig.clickXCoor = (e.touches && e.touches[0].clientX) || e.clientX
    window.appConfig.clickYCoor = (e.touches && e.touches[0].clientY) || e.clientY
    window.appConfig.clickInputVectorX = (window.appConfig.clickXCoor / window.innerWidth * 2) - 1;
    window.appConfig.clickInputVectorY = (window.appConfig.clickYCoor / window.innerHeight * -2) + 1;
    if (window.appConfig.clickXCoor > 80 && window.appConfig.clickYCoor < (window.innerHeight - 80 )){
      window.appConfig.clickVector.set(window.appConfig.clickInputVectorX * window.appConfig.clickScale, window.appConfig.clickInputVectorY * window.appConfig.clickScale, 0)
      window.appConfig.sphere.setLinearVelocity(window.appConfig.clickVector)
    }
  }
    document.addEventListener("touchstart", (e) => {
      if ((window.appConfig.events.primaryInput === undefined || window.appConfig.events.primaryInput === 'click') && !window.appConfig.userHasEnded && window.appConfig.pause === false) {
        handleClick(e)
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
      if(window.appConfig.events.primaryInput === undefined) {
        window.appConfig.events.primaryInput = 'mouse'
        window.appConfig.toggleControlsButton({ value: "mouse", onlyHTML: true })
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
    
      document.body.addEventListener(
        "touchmove",
        (e) => {
          if(window.appConfig.events.primaryInput !== 'click'){
            window.appConfig.events.primaryInput = 'touch'
            window.appConfig.toggleControlsButton({ value: 'touch', onlyHTML: true })
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
            e.preventDefault();
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
            e.preventDefault();
            setTimeout(() => {
              window.appConfig.events.touchmove.active = false
            }, window.appConfig.events.touchmove.throttle)
          }
        },
        true
      );


      document.addEventListener("mouseup", (e) => {
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
          if ((window.appConfig.events.primaryInput === undefined || window.appConfig.events.primaryInput === 'click') && !window.appConfig.userHasEnded && window.appConfig.pause === false) {
            handleClick(e)
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


