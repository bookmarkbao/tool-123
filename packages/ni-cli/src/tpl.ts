import  fs from 'fs'
import execa from "execa"
import chalk from "chalk"
import TemplateGenerator from './test-tpl/TemplateGenerator'
const log = console.log;
const treeLog = async (commonLine: string)=>{
    // log('\n',chalk.black.bold('命令'),chalk.green(`tree -I ${treeConfig.filters.join('|')}`),'\n')    
    // const { stdout } = await execa.command(`tree -I ${treeConfig.filters.join('|')}`)
    // log(chalk.blue(stdout));
    const { stdout } = await execa.command(commonLine)
    log('\n',chalk.black.bold('命令:'),chalk.green(commonLine))    
    log(chalk.blue(stdout));
}

~(async () => {
    // treeLog('tree -L 1');
    // log(TemplateGenerator)
    const tplGen = new TemplateGenerator({})
    log('__dirname: ',`${__dirname}/blueprints`)
    // 创建文件并写入
    log(chalk.blueBright('[create] 创建文件'))
    // 读取tpl
    log(chalk.blueBright('[read  ] 读取模版'))
    // 写入文件
    log(chalk.blueBright('[write ] 写入内容'))
    // fs.writeFileSync('example/test.spec.js','这是测试文件')

    // 写入完成
    log(chalk.blueBright('[Finish] 创建完成'))

})();

const treeConfig = {
    filters: ['node_modules','dist','bin','test','pnpm-lock.yaml','yarn-error.log','yarn.lock'],
    dir: ['src']
}

// ~(async () => {
//     treeLog(`tree -I ${treeConfig.filters.join('|')}`)
// })();
