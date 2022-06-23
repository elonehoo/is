import { expect, test } from 'vitest'

import is from '@elonehoo/is'

test('is',()=>{
  expect(is('a')).toBe('string')
  expect(is.string('a')).toBe(true)
})
