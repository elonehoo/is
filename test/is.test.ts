import { expect, test } from 'vitest'

import is from '../src'

test('is undefined', () => {
  expect(is.undefined(undefined)).toBe(true)
})

test('is null', () => {
  expect(is.null_(null)).toBe(true)
})

test('is string', () => {
  expect(is('a')).toBe('string')
  expect(is.string('a')).toBe(true)
})

test('is number', () => {
  expect(is.number(1)).toBe(true)
})

test('is boolean', () => {
  expect(is.boolean(true)).toBe(true)
})

test('is numericString', () => {
  expect(is.numericString('')).toBe(false)
  expect(is.numericString(' ')).toBe(false)
  expect(is.numericString(' \t\t\n')).toBe(false)
  expect(is.numericString(1)).toBe(false)
})

test('is array', () => {
  expect(is.array([1, 2, 3])).toBe(true)
  expect(is.array([1, '2', 3])).toBe(true)
})

test('is boundFunction', () => {
  expect(is.boundFunction(() => {})).toBe(true)
})

test('is urlInstance', () => {
  const url = new URL('https://elonehoo.me/')
  expect(is.urlInstance(url)).toBe(true)
  expect(is.urlInstance(new URL(url))).toBe(true)
  expect(is.urlString({})).toBe(false)
  expect(is.urlString(undefined)).toBe(false)
  expect(is.urlString(null)).toBe(false)
})

test('is truthy', () => {
  expect(is.truthy('unicorn')).toBe(true)
  expect(is.truthy('🐦')).toBe(true)
  expect(is.truthy(new Set())).toBe(true)
  expect(is.truthy(Symbol('🐦'))).toBe(true)
  expect(is.truthy(true)).toBe(true)
  expect(is.truthy(1)).toBe(true)
  expect(is.truthy(BigInt(1))).toBe(true)
})

test('is falsy', () => {
  expect(is.falsy(false)).toBe(true)
  expect(is.falsy(0)).toBe(true)
  expect(is.falsy('')).toBe(true)
  expect(is.falsy(null)).toBe(true)
  expect(is.falsy(undefined)).toBe(true)
  expect(is.falsy(Number.NaN)).toBe(true)
  expect(is.falsy(0n)).toBe(true)
  expect(is.falsy(BigInt(0))).toBe(true)
})
