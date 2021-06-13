type Result = Record<string, Record<string, number | 'b'>>;

const result: Result = getResult();

result; //?


function getResult(): Result {
  return {
    "a": {
      "s": 1,
      "t": 2,
    },
    "b": {
      "s": 1,
      "y": 'b'
    },
    33: {
      'a': 'b',
      'b': 'b'
    }
  }
};



