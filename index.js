'use strict';

const filter = array => array.filter(x => x);

module.exports = {
  prompter: (cz, commit) => {
    cz.prompt([
      {
        type: 'list',
        name: 'type',
        message: `Select the type of change that you're committing:`,
        choices: ['feat', 'fix', 'perf', 'chore'],
      },
      {
        type: 'input',
        name: 'subject',
        message: 'Write a short, imperative tense description of the change:',
      },
      {
        type: 'input',
        name: 'body',
        message: 'Provide a longer description of the change: (press enter to skip)\n',
      },
    ]).then(({ type, subject, body }) => {
      const short = `${type}: ${subject}`
      const long = body ? body : null

      commit(filter([short, long ? long : null]).join('\n\n'));
    }).catch(e => console.log('\n\n💥 ', e.message));
  }
};
