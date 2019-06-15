'use strict'

import pad from 'pad'

import { Commit } from './types' // eslint-disable-line no-unused-vars
import choices from './choices'
import format from './format'

const filter = (array: [string, string | null]) => array.filter(x => x)

const getChoices = () => {
  const maxNameLength = Math.max(...choices.map(choice => choice.name.length))

  return choices.map(choice => ({
    name: `${pad(choice.name, maxNameLength)}  ${choice.emoji}  ${choice.description}`,
    value: choice.name
  }))
}

module.exports = {
  prompter: (cz: any, commit: any) => {
    cz.prompt([
      {
        type: 'list',
        name: 'type',
        message: `Select the type of change that you're committing:`,
        choices: getChoices()
      },
      {
        type: 'input',
        name: 'subject',
        message: 'Write a short, imperative tense description of the change:'
      },
      {
        type: 'input',
        name: 'body',
        message: 'Provide a longer description of the change: (press enter to skip)\n'
      }
    ])
      .then(({ type, subject, body }: Commit) => {
        const { short, long } = format({ type, subject, body: body || null })

        commit(filter([short, long]).join('\n\n'))
      })
      .catch((error: Error) => console.log('\n\n💥 ', error.message))
  }
}
