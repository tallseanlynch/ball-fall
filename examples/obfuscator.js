const { exec } = require("child_process");

const libs = [
    'main',
    // 'js/ammo'
    'js/initial'
    // 'js/three-121',
    // 'js/stats',
    // 'js/physi',
    // 'js/physijs_worker',
    // 'js/easytimer',
    // 'event-handlers',
    // 'debug',
    // 'js/GLTFLoader'
]

libs.forEach(lib => {
    exec(`uglifyjs ${lib}.js --compress  --mangle  --output ${lib}.min.js`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
            console.log(`uglified: ${lib}`);
    });

})
setTimeout(()=> {
    libs.forEach(lib => {
        exec(`javascript-obfuscator ${lib}.min.js --output ${lib}.min.js`, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`obfuscated: ${lib}`);
        });

    })
}, 3000)