import { assertEquals } from 'https://deno.land/std@0.183.0/testing/asserts.ts';
import { sum } from './utils.ts';

Deno.test('should test utils', async (test) => {
  await test.step('should 2 numbers sum', () => {
    const result = sum(2, 4);
    assertEquals(result, 6);
  });
});
