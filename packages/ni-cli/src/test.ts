import execa from "execa";
import fs from "fs";
// console.log(fs)
try {
  fs.mkdirSync("test-dir-create-1234");
} catch (error) {}
// writeFileSync(file: fs.PathOrFileDescriptor, data: string | NodeJS.ArrayBufferView, options?: fs.WriteFileOptions | undefined): void
try {
  fs.writeFileSync("test-file-create.spec.js", "spec.js content hello");
} catch (error) {}

execa("echo", ["hello world"]).then((result: any) => {
  console.log(result.stdout);
  //=> 'hello world'
});
// 当前目录，执行命令的目录
// 命令1：grep build package.json
// 作用：从package.json中找出build位置的数据（即：查找"build"这个字符串）
execa("grep", ["build", "./package.json"])
  .then((result: any) => {
    console.log(result.stdout);
  })
  .catch((err) => console.log(err));

// execa('ls',['-la']).then((result:any) => {
//     console.log(result.stdout);
// }).catch(err => console.log(err));

// (async () => {
// 	const {stdout} = await execa('echo', ['你好！']);
// 	console.log(stdout);
// 	//=> 'unicorns'
// })();

// let res = await execa.commandSync('ls -la')
// console.log(res);

// execa.command('ls -la').then((result: any)=>{
//     console.log(result.stdout);
// }).catch((err:any) => console.log(err));

let res = execa.commandSync("ls -la");
const { command, escapedCommand, exitCode, stdout } = res;
console.log(stdout);
console.log(res);

execa.commandSync("touch test.spec.0001.js")