// d.ts 정의 파일에서 call signature, 즉 type를 써주면 된다.
interface Config {
    url: string
}
declare module "myPackage" {
    function init(config: Config): boolean;
    function exit(code: number): number;
}