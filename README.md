## jest-retries
Tired of manually re-running your CI when flaky tests fail? Puppeteer fails sporadically? Envy your friends because they use jest-circus? No more!

### What should I do?
```
npm i -D jest-retries
```

```js
const retry = require('jest-retries');

retry('Do flaky work', 5, () => {
    expect(irregularFunction()).toBe('sporadic');
});
```

That's it! 

No configurations, no arguments, just require *jest-retries* and use it instead of `test()`.

### Can I completely replace test with jest-retries?
You sure can!

```js
const test = require('jest-retries');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

test('Random value should eventually resolve to 1', 100, () => {
    expect(getRandomInt(0, 2)).toBe(1);
});
```

### Contributions
Plesae feel free to ask for features by [creating issues](https://github.com/bluzi/jest-retries/issues), or to implement features by [creating pull requests](https://github.com/bluzi/jest-retries/pulls).
I'll do my best to review things as fast as I can, as I always try to do.

If you find any errors or strange behaviors, please report them by [creating an issue](https://github.com/bluzi/jest-retries/issues).

### License
This project is licensed under the MIT License.