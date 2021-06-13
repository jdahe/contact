type O = Record<string, Record<string, number | 'b'>>;

const result: O = bla();

function bla(): O {
  return;
  const o: O = {
    "a": {
      "s": 1,
      "t": 2,
    },
    "B": {
      "s": 1,
      "y": 'b'
    }
  };
  return o;
}
