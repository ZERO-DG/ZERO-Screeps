const upRcl = require('upRcl');

module.exports.loop = function () {
    //遍历工蜂crp，让其去采矿升级房间控制器
    for (let name in Game.creeps) {
        let crp = Game.creeps[name];
        upRcl.run(crp)
    }
}