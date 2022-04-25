import { argv } from 'process';
import { parse } from '../grammer/helloworld'

const arg = argv.slice(2).join(' ');

console.log(argv);
console.log(arg);
console.log(parse(arg));
