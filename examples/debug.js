// app debug menu for items

setTimeout(() => {
    const size = 200;
    const divisions = 40;

    const gridHelper = new THREE.GridHelper( size, divisions );
    scene.add( gridHelper );
    gridHelper.rotation.x = .5 * Math.PI

    // const raycaster = new THREE.Raycaster();
    // const mouse = new THREE.Vector2();

    // function onMouseMove( event ) {

    // // calculate mouse position in normalized device coordinates
    // // (-1 to +1) for both components

    // mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    // mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    // }


    window.appConfig.debug = {
        menuVisible: false,
        stage: 0,
        debugKeyCodes: {
            left: 37,
            right: 39,
            up: 38,
            down: 40,
            leftBracket: 188,
            rightBracket: 190,
            tilde: 192
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

        const keydownFunctions = {
        37: (e) => translateObject(e),
        39: (e) => translateObject(e),
        38: (e) => translateObject(e),
        40: (e) => translateObject(e),
        188: decrementDebugObject,
        190: incrementDebugObject,
        192: showDebugMenu
        }
    
        const keycodesArray = Object.values(window.appConfig.debug.debugKeyCodes)
        document.addEventListener('keydown', function (e) {
            // console.log(e.keyCode)
        if (keycodesArray.indexOf(e.keyCode) > -1) {
            console.log('Keydown event fired')
            console.log(e)
            console.log(e.keyCode)
            keydownFunctions[e.keyCode](e)
        }
        });
}, 1000)
