setTimeout(() => {
    document.addEventListener("touchstart", (e) => {
      if ((window.appConfig.events.primaryInput === undefined || window.appConfig.events.primaryInput === 'touch') && !window.appConfig.userHasEnded) {
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
      }
      if ((window.appConfig.events.primaryInput === undefined || window.appConfig.events.primaryInput === 'mouse') && !window.appConfig.userHasEnded) {
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
          window.appConfig.events.primaryInput = 'touch'
          if ((window.appConfig.events.primaryInput === undefined || window.appConfig.events.primaryInput === 'touch') && !window.appConfig.userHasEnded && window.appConfig.events.touchmove.active === false) {
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
          if ((window.appConfig.events.primaryInput === undefined || window.appConfig.events.primaryInput === 'mouse') && !window.appConfig.userHasEnded && window.appConfig.events.touchmove.active === false) {
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
        if ((window.appConfig.events.primaryInput === undefined || window.appConfig.events.primaryInput === 'mouse') && !window.appConfig.userHasEnded) {
          window.appConfig.touchEnd = true;
          window.appConfig.touchStart = false;
          window.appConfig.currentX = 0;
          window.appConfig.currentY = 0;
          window.appConfig.diffX = 0;
          window.appConfig.diffY = 0;
        }
      });

      document.addEventListener("touchend", (e) => {
        if ((window.appConfig.events.primaryInput === undefined || window.appConfig.events.primaryInput === 'touch') && !window.appConfig.userHasEnded) {
          window.appConfig.touchEnd = true;
          window.appConfig.touchStart = false;
          window.appConfig.currentX = 0;
          window.appConfig.currentY = 0;
          window.appConfig.diffX = 0;
          window.appConfig.diffY = 0;
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
          if(window.appConfig.events.touchmove.active === true) {
            e.preventDefault(); //per the standard
            Howler.stop()
            if(window.appConfig.start === true && window.appConfig.userHasEnded === false && window.appConfig.pause === false) {
              window.appConfig.gameModeFunctions.pause()
            }  
          }
          e.returnValue = '';
      });
    }, 1500)


