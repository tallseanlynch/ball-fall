

    window.localStorage.setItem('performanceLevel', JSON.stringify({ performanceLevel: 2 }))

    const hasPerformanceReport = true //(window.localStorage.getItem('performanceLevel') !== null)

    const comma = () => {
      return `<span class="comma">,</span>`
    }

    const generateBackground = (percentFinished, colors) => {
      return "linear-gradient(180deg, " + colors[0] + " 0%, " + colors[1] + " 0%, " + colors[2] + " " +
        Math.round((1.25 - percentFinished / 2) * 100) * .66 +
        "%, " + colors[3] + " " +
        Math.round((1.25 - percentFinished / 2) * 100) +
        "%)";
      // return '00ff00'
    }

    const lfoPositive = (t = 1000) => {
      let lfoValue = (0.5 + 0.5 * Math.cos(Date.now() / t)) * 1;
      return lfoValue;
    };

    const lfo = (t = 1000) => {
      return (0.5 - lfoPositive(t)) * 2;
    };
    const lfoPositiveStraight = (t = 1000) => {
      let lfoValue = (0.5 + 0.5 * Math.cos(Date.now() / t)) * 1;
      return lfoValue;
    };

    window.appConfig = {
      env: 'web',
      isLandingPage: true,
      finalStageActiveTransforms: false,
      isPortalStart: false,
      pauseSuperballs: false,
      healthCheck: {
        fpsArray: [],
        averageFPS: undefined,
        healthChecked: false
      },
      coinScoreThrottle: false,
      achievements: {
        superBall: true
      },
      superballMaterialIncrement: 0,
      stageTotalTimePlayed: 0,
      loadingInterval: {
        started: false,
        time: 0,
        clearInterval: undefined
      },
      touchStart: false,
      touchEnd: false,
      currentX: 0,
      currentY: 0,
      prevX: 0,
      prevY: 0,
      diffX: 0,
      diffY: 0,
      start: false,
      pause: false,
      results: {},
      pause: false,
      defaultSphereMass: 4.188790683884756,
      defaultSceneGravity: -10,
      meshComponents: {
        dematerialize: {
          geometries: []
        },
        sapphire: {
        }
      },
      itemAmounts: {
        crystalCross: 0,
        crystalLine: 0,
        crystalCircle: 0,
        bumperGroup: 0,
        prize: 0
      },
      currentStage: hasPerformanceReport ? 'STAGE7' : 'STAGE7',
      stagesArray: ['STAGE0', 'STAGE1', 'STAGE2', 'STAGE3', 'STAGE4', 'STAGE5', 'STAGE6', 'STAGE7'],
      currentStageIndex: hasPerformanceReport ? 7 : 7,
      musicTurnedOn: true,
      sfxTurnedOn: true,
      superballs: [],
      howlSounds: {
        init: false,
        coins: {
          sCoin: [],
          mCoin: [],
          lCoin: []
        },
        beams: [],
        prize: undefined,
        backgroundMusic: undefined
      },
      scripts: [
        'ammo.js',
        'three.js',
        'stats.js',
        'physi.js',
        'physijs_worker.js',
        'easytimer.js',
        'howler.js',
        // 'features.js',
        'event-handlers.js',
        // 'debug.js'
        // 'VRButton.js'
      ],
      loadedScripts: [],
      events: {
        primaryInput: undefined,
        touchmove: { throttle: 25, active: false }
      },
      performanceLevel: 2,
      isBlueIsland: false,
      blueIslandPoints: [
        { position: { x: 0, y: 325, z: 0 } },
        { position: { x: 0, y: 275, z: 0 } },
        { position: { x: 25, y: 300, z: 0 } },
        { position: { x: -25, y: 300, z: 0 } },
        { position: { x: 0, y: 345, z: 0 } },
        { position: { x: 0, y: 255, z: 0 } },
        { position: { x: 45, y: 300, z: 0 } },
        { position: { x: -45, y: 300, z: 0 } },
      ]
    };

    const localStorageData = {
      stages: {
        STAGE0: {
          highscores: []
        },
        STAGE1: {
          highscores: []
        },
        STAGE2: {
          highscores: []
        },
        STAGE3: {
          highscores: []
        },
        STAGE4: {
          highscores: []
        },
        STAGE5: {
          highscores: []
        },
        STAGE6: {
          highscores: []
        },
        STAGE7: {
          highscores: []
        }
      }
    }

    const handleHighScore = () => {
      window.appConfig.highScoreConfig.isLocalHighScore = false
      const newScore = {
        date: new Date().getTime(),
        dateFormattedString: (new Date().getMonth() + 1) + '/' + new Date().getDate() + '/' + new Date().getFullYear().toString().substr(-2),
        lengthPlayed: window.appConfig.stageTotalTimePlayed,
        totalScore: window.appConfig.score.coins
      }
      window.appConfig.highScoreConfig.newScore = newScore
      window.appConfig.highScoreConfig.newScoreZone = window.appConfig.currentStageIndex
      if (window.appConfig.highscores === undefined) {
        window.appConfig.highscores = { ...localStorageData.stages }
      }
      if(window.appConfig.highscores[window.appConfig.currentStage] === undefined) {
        window.appConfig.highscores[window.appConfig.currentStage] = {
          highscores: []
        }
      }
      if (window.appConfig.highscores[window.appConfig.currentStage].highscores.length === 0) {
        window.appConfig.highscores[window.appConfig.currentStage].highscores.push(newScore)
        window.appConfig.highScoreConfig.isLocalHighScore = true
      } else {
        let newHighScores = [...window.appConfig.highscores[window.appConfig.currentStage].highscores]
        let stopCheck = false
        window.appConfig.highscores[window.appConfig.currentStage].highscores.forEach((s, si) => {
          if (s.totalScore < newScore.totalScore && stopCheck === false) {
            stopCheck = true
            window.appConfig.highScoreConfig.isLocalHighScore = true
            newHighScores.splice(si, 0, newScore)
            if (newHighScores.length === 4) {
              newHighScores.pop()
            }
            window.appConfig.highscores[window.appConfig.currentStage].highscores = newHighScores
          }
        })
        if (stopCheck === false && window.appConfig.highscores[window.appConfig.currentStage].highscores.length < 3) {
          window.appConfig.highScoreConfig.isLocalHighScore = true
          newHighScores.push(newScore)
          window.appConfig.highscores[window.appConfig.currentStage].highscores = newHighScores
        }
      }
    }
    window.appConfig.handleHighScore = handleHighScore

    const localStorageInit = () => {
      if (localStorage.appConfig === undefined) {
        localStorage.setItem('appConfig', JSON.stringify({ ...localStorageData.stages }))
        window.appConfig.highscores = { ...localStorageData.stages }
      } else {
        window.appConfig.highscores = JSON.parse(localStorage.appConfig)
      }
    }

    localStorageInit()
window.appConfig.getShownElements = () => {
  let shownEls = []
  window.appConfig.allElements.forEach(el => {
    if (el.hidden === false) {
      shownEls.push(el.id)
    }
  })
  return shownEls
}    
window.appConfig.allElements = [
      { id: "sounds", hidden: undefined, landingPage: false },
      { id: "pause-menu", hidden: undefined, landingPage: false },
      { id: "level-select", hidden: undefined, landingPage: false },
      { id: "game-scoreboard", hidden: undefined, landingPage: false },
      { id: "credits", hidden: undefined, landingPage: false },
      { id: "pause-button", hidden: undefined, landingPage: false },
      { id: "play-button", hidden: undefined, landingPage: false },
      { id: "tinted-overlay", hidden: undefined, landingPage: false },
      { id: "report", hidden: undefined, landingPage: false },
      { id: "stage-name-container", hidden: undefined, landingPage: false },
      { id: "stage-countdown-3-container", hidden: undefined, landingPage: false },
      { id: "stage-countdown-2-container", hidden: undefined, landingPage: false },
      { id: "stage-countdown-1-container", hidden: undefined, landingPage: false },
      { id: "stage-countdown-start-container", hidden: undefined, landingPage: false },
      { id: "instructions", hidden: undefined, landingPage: false },
      { id: "main-menu-container", hidden: undefined, landingPage: false },
      { id: "landing-title-section", hidden: undefined, landingPage: true },
      { id: "landing-page", hidden: undefined, landingPage: false},
      { id: "high-score-input-modal-curtain", hidden: undefined, landingPage: false},
      { id: "high-scores-main-menu", hidden: undefined, landingPage: false}
      
    ];
    window.appConfig.registerDOMElements = (elements) => {
      elements.forEach((el) => {
        el.selector = document.getElementById(el.id)
        Array.from(el.selector.classList).indexOf('hide') > -1 ? el.hidden = true : el.hidden = false
      });
    }

    const showHTMLElements = (elements) => {
      window.appConfig.allElements.forEach((el) => {
        if (elements.indexOf(el.id) > -1 && el.hidden === true) {
          el.selector.classList.remove('hide')
          el.hidden = false
        }
        if (elements.indexOf(el.id) === -1 && el.hidden === false) {
          if (window.appConfig.isLandingPage === false || (window.appConfig.isLandingPage === true && el.landingPage === false)) {
            el.selector.classList.add('hide')
            el.hidden = true
          }
        }
      });
    };

    const scriptLoaded = (scriptName) => {
      window.appConfig.loadedScripts.push(scriptName)
      let loadedNumber = 0
      const expectedLoadedNumber = window.appConfig.scripts.length
      window.appConfig.scripts.forEach(s => {
        if (window.appConfig.loadedScripts.indexOf(s) > -1) {
          loadedNumber++
        }
      })
      if (loadedNumber === expectedLoadedNumber && window.localStorage.getItem('performanceLevel') !== null) {
        window.appConfig.healthCheck.healthChecked = true
        // window.appConfig.performanceLevel = JSON.parse(window.localStorage.getItem('performanceLevel')).performanceLevel
        window.appConfig.performanceLevel = 2
        // window.appConfig.loadingInterval.clearInterval()
        // toggleMainLoading()
      }

    }

    window.appConfig.imageViewer = false
    window.appConfig.galleryImageIndex = 0

    const toggleImageViewer = () => {
      window.appConfig.imageViewer = !window.appConfig.imageViewer
      if(window.appConfig.imageViewer === false) {
        document.querySelector('#image-viewer').classList.add('hide')
      }
      if(window.appConfig.imageViewer === true) {
        document.querySelector('#image-viewer').classList.remove('hide')
      }
    }

    const showImage = (e, toggle = true) => {
      if(toggle === true) {
        toggleImageViewer()
      }
      window.appConfig.galleryImageIndex = e
      if(window.appConfig && window.appConfig.selectors) {
        window.appConfig.selectors.galleryImage0.src = 'images/' + (Number(e) + 1) + '.png'
      }
    }

    const incrementImageIndex = () => {
      window.appConfig.galleryImageIndex ++
      if(window.appConfig.galleryImageIndex > 8) {
        window.appConfig.galleryImageIndex = 0
      }
      showImage(window.appConfig.galleryImageIndex, false)
    }

    const decrementImageIndex = () => {
      window.appConfig.galleryImageIndex --
      if(window.appConfig.galleryImageIndex < 0) {
        window.appConfig.galleryImageIndex = 8
      }
      showImage(window.appConfig.galleryImageIndex, false)
    }