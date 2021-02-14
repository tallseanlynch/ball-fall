// app debug menu for items

setTimeout(() => {

    // const gridHelper = new THREE.GridHelper( 200, 40 );
    // scene.add( gridHelper );
    // gridHelper.rotation.x = .5 * Math.PI

    window.appConfig.debug = {
        toggleGravity: false,
        menuVisible: false,
        stage: 0,
        debugKeyCodes: {
            left: 37,
            right: 39,
            up: 38,
            down: 40,
            leftBracket: 188,
            rightBracket: 190,
            tilde: 192,
            q: 81,
            w: 87
        },
        currentDebugMeshIndex: 4,
        setCurrentMesh: false
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
            const objectToTranslate = window.appConfig.debug.setCurrentMesh === false ? scene.children[window.appConfig.debug.currentDebugMeshIndex] : window.appConfig.debug.setCurrentMesh
            const dirs = {
                37: { x: -5, y: 0, z: 0 },
                39: { x: 5, y: 0, z: 0 },
                38: { x: 0, y: 5, z: 0 },
                40: { x: 0, y: -5, z: 0 }
            }
            objectToTranslate.position.x += dirs[e.keyCode].x
            objectToTranslate.position.y += dirs[e.keyCode].y
            objectToTranslate.__dirtyPosition = true
            console.log(window.appConfig.debug)
            const queryNamePx = '#'+objectToTranslate.name+' .px'
            document.querySelector(queryNamePx).value = objectToTranslate.position.x
            const queryNamePy = '#'+objectToTranslate.name+' .py'
            document.querySelector(queryNamePy).value = objectToTranslate.position.y
            const queryNamePz = '#'+objectToTranslate.name+' .pz'
            document.querySelector(queryNamePz).value = objectToTranslate.position.z
        }

        const showDebugMenu = () => {            
            window.appConfig.debug.menuVisible ? document.querySelector('.debug').classList.add('hide') : document.querySelector('.debug').classList.remove('hide')
            window.appConfig.debug.menuVisible ? document.querySelector('.debug-timers').classList.add('hide') : document.querySelector('.debug-timers').classList.remove('hide')
            window.appConfig.debug.menuVisible = !window.appConfig.debug.menuVisible
            document.querySelector('.debug').innerHTML = ''    
            scene.children.forEach((c, ci) => {
                // debugger
                const isGray = (n) => {
                    if(n%2===0){
                        return 'bg-gray'
                    } else {
                        return ''
                    }
                }
                if(c.name && c.name !== 'SPHERE0' && c.name.indexOf('glassMesh') === -1) {
                    let cDataHTML = ''
                    if(c.position) {
                        cDataHTML += '<div class="p-coors">P - X: <input class="coor px" type="text" value="'+c.position.x+'"> Y: <input class="coor py" type="text" value="'+c.position.y+'"> Z: <input class="coor pz" type="text" value="'+c.position.z+'"></div>'
                    }
                    if(c.rotation) {
                        cDataHTML += '<div class="r-coors">R - X: <input class="coor rx" type="text" value="'+c.rotation.x+'"> Y: <input class="coor ry" type="text" value="'+c.rotation.y+'"> Z: <input class="coor rz" type="text" value="'+c.rotation.x+'"></div>'
                    }
                    let itemHTML = '<div id="'+c.name+'" class="debug-item ' + isGray(ci) + '" id="' +ci+ '"><div class="name">'+c.name+ '</div><button class="remove">-</button><div class="c-data">' +cDataHTML+ '</div></div>'
                    document.querySelector('.debug').innerHTML += itemHTML
                    const queryNamePx = '#'+c.name+' .px'
                    const queryNamePy = '#'+c.name+' .py'
                    const queryNamePz = '#'+c.name+' .pz'
                    // console.log(queryName)
                    setTimeout(() => {
                        document.querySelector('#'+c.name).addEventListener('click', (e) => {
                            window.appConfig.debug.setCurrentMesh = c
                        })    
                        document.querySelector(queryNamePx).addEventListener('keydown', (e) => {
                            c.position.x = Number(e.target.value)
                            c.__dirtyPosition = true
                        })    
                        document.querySelector(queryNamePy).addEventListener('keydown', (e) => {
                            c.position.y = Number(e.target.value)
                            c.__dirtyPosition = true
                        })    
                        document.querySelector(queryNamePz).addEventListener('keydown', (e) => {
                            c.position.z = Number(e.target.value)
                            c.__dirtyPosition = true
                        })    
                    }, 100)
                }
            })
            
            console.log("SHOWDEBUGMENU")
        }
//            ${JSON.stringify(timer, null, 2)}

        const timerValue = (valueObj) => {
            return `<div><b>${valueObj.key}</b>: ${valueObj.value}</div>`
        }

        const activeTimerComponent = (timer) => {
            return `<div class="active-timer">
                <span style="color:red !important;">${timerValue({key: 'NAME', value: timer.name})}</span>
                ${timerValue({key: 'PERCENT COMPLETE', value: timer.percentComplete})}
                ${timerValue({key: 'LENGTH', value: timer.time})}
                ${timerValue({key: 'TIME LEFT', value: timer.timeLeft})}
            </div>`
        }

        const activeTimersListComponent = () => {
            return `<div class="active-timers-list">
                ${window.appConfig.timers.activeTimers.map( at => {
                        return activeTimerComponent(at)
                    }
                ).join('')}
            </div>`
        }

        const populateActiveTimersList = () => {
            document.querySelector('.debug-timers').innerHTML = activeTimersListComponent()
        }

        window.appConfig.debug.previousCameraZ = undefined
        window.appConfig.debug.previousCameraZToggle = false

        window.appConfig.debug.populateActiveTimersList = populateActiveTimersList

        const toggleDebugCamera = () => {
            if(window.appConfig.debug.previousCameraZToggle === false) {
                window.appConfig.debug.previousCameraZ = camera.position.z
                camera.position.z = 500
                window.appConfig.debug.previousCameraZToggle = true                    
            } else {
                window.appConfig.debug.previousCameraZToggle = false                    
                camera.position.z = window.appConfig.debug.previousCameraZ
            }
        }

        const toggleDebugBallGravity = () => {
            console.log('toggle gravity lol...')
            // if(window.appConfig.debug.toggleGravity === false) {
            //     // scene.setGravity(new THREE.Vector3(0, 0, 0));
            //     // window.appConfig.sphere._physijs.mass = 0
            //     window.appConfig.debug.toggleGravity = true
            //     console.log('finished toggleGravity to 0')
            // } else {
            //     window.appConfig.sphere._physijs.mass = window.appConfig.defaultSphereMass
            //     // scene.setGravity(new THREE.Vector3(0, -10, 0));
            //     window.appConfig.debug.toggleGravity = false                    
            //     console.log('finished toggleGravity to -10')
            // }
        }

        const keydownFunctions = {
        37: (e) => translateObject(e),
        39: (e) => translateObject(e),
        38: (e) => translateObject(e),
        40: (e) => translateObject(e),
        188: decrementDebugObject,
        190: incrementDebugObject,
        192: showDebugMenu,
        81: () => toggleDebugCamera(),
        87: () => toggleDebugBallGravity()
        }
    
        const keycodesArray = Object.values(window.appConfig.debug.debugKeyCodes)
        document.addEventListener('keydown', function (e) {
            console.log(e.keyCode)
        if (keycodesArray.indexOf(e.keyCode) > -1) {
            console.log('Keydown event fired')
            console.log(e)
            console.log(e.keyCode)
            keydownFunctions[e.keyCode](e)
        }
        });
}, 1500)
