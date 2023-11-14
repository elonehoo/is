import { expect, it } from 'vitest'

import is from '../src'

it('is undefined', () => {
  expect(is.undefined(undefined)).toBe(true)
})

it('is null', () => {
  expect(is.null_(null)).toBe(true)
})

it('is string', () => {
  expect(is('a')).toBe('string')
  expect(is.string('a')).toBe(true)
})

it('is number', () => {
  expect(is.number(1)).toBe(true)
})

it('is boolean', () => {
  expect(is.boolean(true)).toBe(true)
})

it('is numericString', () => {
  expect(is.numericString('')).toBe(false)
  expect(is.numericString(' ')).toBe(false)
  expect(is.numericString(' \t\t\n')).toBe(false)
  expect(is.numericString(1)).toBe(false)
})

it('is array', () => {
  expect(is.array([1, 2, 3])).toBe(true)
  expect(is.array([1, '2', 3])).toBe(true)
})

it('is boundFunction', () => {
  expect(is.boundFunction(() => {})).toBe(true)
})

it('is urlInstance', () => {
  const url = new URL('https://elonehoo.me/')
  expect(is.urlInstance(url)).toBe(true)
  expect(is.urlInstance(new URL(url))).toBe(true)
  expect(is.urlString({})).toBe(false)
  expect(is.urlString(undefined)).toBe(false)
  expect(is.urlString(null)).toBe(false)
})

it('is truthy', () => {
  expect(is.truthy('unicorn')).toBe(true)
  expect(is.truthy('🐦')).toBe(true)
  expect(is.truthy(new Set())).toBe(true)
  expect(is.truthy(Symbol('🐦'))).toBe(true)
  expect(is.truthy(true)).toBe(true)
  expect(is.truthy(1)).toBe(true)
  expect(is.truthy(BigInt(1))).toBe(true)
})

it('is falsy', () => {
  expect(is.falsy(false)).toBe(true)
  expect(is.falsy(0)).toBe(true)
  expect(is.falsy('')).toBe(true)
  expect(is.falsy(null)).toBe(true)
  expect(is.falsy(undefined)).toBe(true)
  expect(is.falsy(Number.NaN)).toBe(true)
  expect(is.falsy(0n)).toBe(true)
  expect(is.falsy(BigInt(0))).toBe(true)
})
