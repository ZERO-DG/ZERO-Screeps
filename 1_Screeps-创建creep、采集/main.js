//创造一个creeps WORK工作、CARRY携带资源、MOVE移动 Spawn1是母巢 下面是生产一个名字为zero-0的creep
Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], 'zero-0'); //这里可以放在控制台手动产生
//下面是放在main文件中的内容
const energyCollection = require('energyCollection');
//下面是tick循环，每个tick相当于游戏中一个单位时间
module.exports.loop = function () {
    for (let name in Game.creeps) {
        let crp = Game.creeps[name];
        energyCollection.run(crp);
    }
}
