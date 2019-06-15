import test from 'ava'

import format from './../lib/format'

test('convert commit subject to lowercase', t => {
  const type = 'test'
  const subject = 'Add Ava test suite'
  const body = null

  const expected = {
    short: 'test: add ava test suite',
    long: null
  }

  t.deepEqual(format({ type, subject, body }), expected)
})

test('remove periods at the end of commit subject if any', t => {
  const type = 'feat'
  const subject = 'remove periods at the end of commit subject...'
  const body = null

  const expected = {
    short: 'feat: remove periods at the end of commit subject',
    long: null
  }

  t.deepEqual(format({ type, subject, body }), expected)
})

test('capitalize commit body and add a period at the end', t => {
  const type = 'test'
  const subject = 'add ava test suite'
  const body = `ava is a JavaScript test runner, we choose it because it's minimal and fast`

  const expected = {
    short: `${type}: ${subject}`,
    long: `Ava is a JavaScript test runner, we choose it because it's minimal and fast.`
  }

  t.deepEqual(format({ type, subject, body }), expected)
})

test('throw an error if commit subject is greater than 50 characters', t => {
  const type = 'test'
  const subject = 'add ava test suite to test that functions properly format commits'
  const body = null

  const error = t.throws(() => {
    format({ type, subject, body })
  }, Error)

  t.is(error.message, 'Commit type + subject must be 50 or less characters long.\n')
})

test('throw an error if no commit subject supplied', t => {
  const type = 'chore'
  const subject = ''
  const body = null

  const error = t.throws(() => {
    format({ type, subject, body })
  }, Error)

  t.is(error.message, 'Commit subject must be at least 1 character long.\n')
})
