import { ASTKinds, ATOM, FAC, INT, parse, ParseResult, SUM } from '../grammer/math2'

const result: ParseResult = parse('  1 * 2 + 3 * ( 3 + 1 )  ');

if (result.ast) {
  console.log(result.ast);
  console.log(calcSum(result.ast.sum));
}

if (result.errs) {
  console.error(result.errs);
}

function calcInt(at: INT): number {
  return parseInt(at.val);
}

function calcAtom(at: ATOM): number {
  if (at.kind === ASTKinds.ATOM_1)
    return calcInt(at.val);
  return calcSum(at.val);
}

function calcFac(at: FAC): number {
  return at.tail.reduce((x, y) => {
    if (y.op === '*')
      return x * calcAtom(y.sm);
    return x / calcAtom(y.sm);
  }, calcAtom(at.head));
}

function calcSum(at: SUM): number {
  return at.tail.reduce((x, y) => {
    if (y.op === '+')
      return x + calcFac(y.sm);
    return x - calcFac(y.sm);
  }, calcFac(at.head));
}
