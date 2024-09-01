import { describe, it, expect } from 'vitest';
import example1 from './example1';
import example2 from './example2';

describe('Example', () => {
  it('Basic', () => {
    let result1 = example1({});
    expect(result1).toBe('No Value');
    let result2 = example2({});
    expect(result2).toBe('No Value');
  });
});
