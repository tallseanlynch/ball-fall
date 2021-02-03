/**
 * @author mrdoob / http://mrdoob.com/
 */

var Stats = function () {

	var mode = 0;

    var container = document.createElement( 'div' );
    container.style.cssText = 'position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000';
    container.className = 'hide'
	container.addEventListener( 'click', function ( event ) {

		event.preventDefault();
		showPanel( ++ mode % container.children.length );

	}, false );

	//

	function addPanel( panel ) {

		container.appendChild( panel.dom );
		return panel;

	}

	function showPanel( id ) {

		for ( var i = 0; i < container.children.length; i ++ ) {

			container.children[ i ].style.display = i === id ? 'block' : 'none';

		}

		mode = id;

	}

	//

	var beginTime = ( performance || Date ).now(), prevTime = beginTime, frames = 0;

	var fpsPanel = addPanel( new Stats.Panel( 'FPS', '#0ff', '#002' ) );
	var msPanel = addPanel( new Stats.Panel( 'MS', '#0f0', '#020' ) );

	if ( self.performance && self.performance.memory ) {

		var memPanel = addPanel( new Stats.Panel( 'MB', '#f08', '#201' ) );

	}

	showPanel( 0 );

	return {

		REVISION: 16,

		dom: container,

		addPanel: addPanel,
		showPanel: showPanel,

		begin: function () {

			beginTime = ( performance || Date ).now();

		},

		end: function () {

			frames ++;

			var time = ( performance || Date ).now();

			msPanel.update( time - beginTime, 200 );

			if ( time >= prevTime + 1000 ) {
                const frameRate = ( frames * 1000 ) / ( time - prevTime )
                window.appConfig.healthCheck.fpsArray.unshift(frameRate)
                if(window.appConfig.healthCheck.fpsArray.length > 30) {
                    window.appConfig.healthCheck.fpsArray.pop()
                }
                window.appConfig.healthCheck.averageFPS = window.appConfig.healthCheck.fpsArray.reduce((fpsTotal, fpsVal) => fpsTotal + fpsVal) / window.appConfig.healthCheck.fpsArray.length

                // if(window.appConfig.healthCheck.fpsArray.length === 5 && window.appConfig.healthCheck.healthChecked === false) {
                //     if(window.innerHeight < 376 || window.innerWidth < 376) {
                //         window.appConfig.events.primaryInput = 'click'
                //     }
                //     if(window.appConfig.healthCheck.averageFPS < 15) {
                //         window.appConfig.healthCheck.healthChecked = true
                //         window.appConfig.performanceLevel = 0
                //         window.appConfig.events.primaryInput = 'click'
                //         reset({action:'levelSelectHealthCheck', level: window.appConfig.currentStageIndex, autoStart: false})
                //         // window.appConfig.stages[window.appConfig.currentStage].teardown()
                //         // window.appConfig.stages.components.stageInit() 
                //         // window.appConfig.stages[window.appConfig.currentStage].init()                
                //     }
                // }

                if(window.appConfig.healthCheck.fpsArray.length > 10 && window.appConfig.healthCheck.healthChecked === false) {
                    window.appConfig.healthCheck.healthChecked = true
                    if(window.appConfig.healthCheck.averageFPS < 50 && window.appConfig.healthCheck.averageFPS > 45) {
                        window.appConfig.performanceLevel = 1
                        reset({action:'levelSelectHealthCheck', level: window.appConfig.currentStageIndex, autoStart: false})
                        // window.appConfig.stages[window.appConfig.currentStage].teardown()
                        // window.appConfig.stages.components.stageInit() 
                        // window.appConfig.stages[window.appConfig.currentStage].init()                
                    }
                    if(window.appConfig.healthCheck.averageFPS < 45) {
                        window.appConfig.performanceLevel = 0
                        window.appConfig.events.primaryInput = 'click'
                        reset({action:'levelSelectHealthCheck', level: window.appConfig.currentStageIndex, autoStart: false})
                        // window.appConfig.stages[window.appConfig.currentStage].teardown()
                        // window.appConfig.stages.components.stageInit() 
                        // window.appConfig.stages[window.appConfig.currentStage].init()                
                    }
                }
                console.log(appConfig.healthCheck)

				fpsPanel.update( frameRate, 100 );

				prevTime = time;
				frames = 0;

				if ( memPanel ) {

					var memory = performance.memory;
					memPanel.update( memory.usedJSHeapSize / 1048576, memory.jsHeapSizeLimit / 1048576 );

				}

			}

			return time;

		},

		update: function () {

            beginTime = this.end();

		},

		// Backwards Compatibility

		domElement: container,
		setMode: showPanel

	};

};

Stats.Panel = function ( name, fg, bg ) {

	var min = Infinity, max = 0, round = Math.round;
	var PR = round( window.devicePixelRatio || 1 );

	var WIDTH = 80 * PR, HEIGHT = 48 * PR,
			TEXT_X = 3 * PR, TEXT_Y = 2 * PR,
			GRAPH_X = 3 * PR, GRAPH_Y = 15 * PR,
			GRAPH_WIDTH = 74 * PR, GRAPH_HEIGHT = 30 * PR;

	var canvas = document.createElement( 'canvas' );
	canvas.width = WIDTH;
	canvas.height = HEIGHT;
	canvas.style.cssText = 'width:80px;height:48px';

	var context = canvas.getContext( '2d' );
	context.font = 'bold ' + ( 9 * PR ) + 'px Helvetica,Arial,sans-serif';
	context.textBaseline = 'top';

	context.fillStyle = bg;
	context.fillRect( 0, 0, WIDTH, HEIGHT );

	context.fillStyle = fg;
	context.fillText( name, TEXT_X, TEXT_Y );
	context.fillRect( GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT );

	context.fillStyle = bg;
	context.globalAlpha = 0.9;
	context.fillRect( GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT );

	return {

		dom: canvas,

		update: function ( value, maxValue ) {

			min = Math.min( min, value );
			max = Math.max( max, value );

			context.fillStyle = bg;
			context.globalAlpha = 1;
			context.fillRect( 0, 0, WIDTH, GRAPH_Y );
			context.fillStyle = fg;
			context.fillText( round( value ) + ' ' + name + ' (' + round( min ) + '-' + round( max ) + ')', TEXT_X, TEXT_Y );

			context.drawImage( canvas, GRAPH_X + PR, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT, GRAPH_X, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT );

			context.fillRect( GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, GRAPH_HEIGHT );

			context.fillStyle = bg;
			context.globalAlpha = 0.9;
			context.fillRect( GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, round( ( 1 - ( value / maxValue ) ) * GRAPH_HEIGHT ) );

		}

	};

};

// export { Stats as default };