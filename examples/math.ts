import { ASTKinds, parse, ParseResult } from '../grammer/math'

const result: ParseResult = parse('2+3');

if (result.ast) {
  console.log(result.ast);
  if (result.ast.kind === ASTKinds.sum) {
    const left = parseInt(result.ast.left);
    const right = parseInt(result.ast.right);
    const sum = left + right;
    console.log(`sum of ${result.ast.left} ${result.ast.kind} ${result.ast.right} = ${sum}`);
  } else {
    console.error(`Unknown ast kind: ${result.ast.kind}`);
  }
}

if (result.errs) {
  console.error(result.errs);
}
