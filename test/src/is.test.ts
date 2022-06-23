import { expect, test } from 'vitest'

import is from '@elonehoo/is'

test('is undefined',()=>{
  expect(is.undefined(undefined)).toBe(true)
})

test('is null',()=>{
  expect(is.null_(null)).toBe(true)
})

test('is string',()=>{
  expect(is('a')).toBe('string')
  expect(is.string('a')).toBe(true)
})

test('is number',()=>{
  expect(is.number(1)).toBe(true)
})

test('is boolean',()=>{
  expect(is.boolean(true)).toBe(true)
})

test('is numericString',()=>{
  expect(is.numericString('')).toBe(false)
  expect(is.numericString(' ')).toBe(false)
  expect(is.numericString(' \t\t\n')).toBe(false)
  expect(is.numericString(1)).toBe(false)
})

