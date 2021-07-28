// 여기저기 쓰일만한 공통 타입

export type AnyObject = {
  [key: string]: any;
}

export type ValidateRule = {
  rule: RegExp;
  match: boolean;
  message: string;
}

// RegExp : Regular Expression
// 정규식 : 패턴에대해 문자열 처리용