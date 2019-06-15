'use strict'

interface Commit {
  type: string
  subject: string
  body?: string
}

const filter = (array: any) => array.filter((x: any) => x)

module.exports = {
  prompter: (cz: any, commit: any) => {
    cz.prompt([
      {
        type: 'list',
        name: 'type',
        message: "Select the type of change that you're committing:",
        choices: ['feat', 'fix', 'perf', 'chore']
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
        const short = `${type}: ${subject}`
        const long = body ? body : null

        return commit(filter([short, long ? long : null]).join('\n\n'))
      })
      .catch((error: any) => console.log('\n\n💥', error.message))
  }
}
