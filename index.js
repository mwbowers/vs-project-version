const fs = require('fs');
const os = require('os');

function run()
{
    projPath = process.env.PROJ_PATH || process.env.INPUT_PROJ_PATH;    
    if (!fs.existsSync(projPath))
        throw new Error('Project file not found');

    console.log(`Project File Path: ${projPath}`)

    rgx = new RegExp('<Version.*>(.*)<\\/Version>', 'm');
    ver = rgx.exec(fs.readFileSync(projPath, { encoding: 'utf-8' }))[1];

    if (!ver)
        throw new Error('Failed to get Version');

    vp = process.env.VER_PLACES || process.env.INPUT_VER_PLACES;
    
    console.log(`process.env.VER_PLACES: ${process.env.VER_PLACES}`)
    console.log(`process.env.INPUT_VER_PLACES: ${process.env.INPUT_VER_PLACES}`)
    console.log(`vp: ${vp}`)
    
    if (vp < 0 || vp > 4)
        throw new Error('Invalid version places');
    
    if (vp > 0 && vp < 4){
        var verSplit = ver.split('.');
        while (verSplit.length < vp)
            verSplit.push('0');
        verSplit = verSplit.slice(0, vp);
        ver = verSplit.join('.');
    }
    
    console.log(`Version: ${ver}`)

    process.stdout.write(`::set-output name=VERSION::${ver}` + os.EOL)
}

run();
