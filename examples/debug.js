// app debug menu for items

setTimeout(() => {
    window.appConfig.debug = {
        stage: 0,
        debugKeyCodes: {
            left: 37,
            right: 39,
            up: 38,
            down: 40,
            leftBracket: 188,
            rightBracket: 190
        },
        currentDebugMeshIndex: 4
        }
    
        const incrementDebugObject = () => {
        window.appConfig.debug.currentDebugMeshIndex++
        if (window.appConfig.debug.currentDebugMeshIndex >= scene.children.length) {
            currentDebugMeshIndex = 4
        }
        console.log(window.appConfig.debug)
        }
    
        const decrementDebugObject = () => {
        window.appConfig.debug.currentDebugMeshIndex--
        if (window.appConfig.debug.currentDebugMeshIndex <= 4) {
            currentDebugMeshIndex = scene.children.length
        }
        console.log(window.appConfig.debug)
        }
    
        const translateObject = (e) => {
        const s = 5
        const objectToTranslate = scene.children[window.appConfig.debug.currentDebugMeshIndex]
        const dirs = {
            37: { x: -5, y: 0, z: 0 },
            39: { x: 5, y: 0, z: 0 },
            38: { x: 0, y: 5, z: 0 },
            40: { x: 0, y: -5, z: 0 }
        }
        objectToTranslate.position.x += dirs[e.keyCode].x
        objectToTranslate.position.y += dirs[e.keyCode].y
        console.log(window.appConfig.debug)
        }
    
        const keydownFunctions = {
        37: (e) => translateObject(e),
        39: (e) => translateObject(e),
        38: (e) => translateObject(e),
        40: (e) => translateObject(e),
        188: decrementDebugObject,
        190: incrementDebugObject
        }
    
        const keycodesArray = Object.values(window.appConfig.debug.debugKeyCodes)
        document.addEventListener('keydown', function (e) {
        if (keycodesArray.indexOf(e.keyCode) > -1) {
            console.log('Keydown event fired')
            console.log(e)
            console.log(e.keyCode)
            keydownFunctions[e.keyCode](e)
        }
        });
}, 1000)
