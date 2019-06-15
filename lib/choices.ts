import { Choice } from './types'

const choices: Choice[] = [
  {
    emoji: '✨',
    code: ':sparkles:',
    description: 'Introducing new features.',
    name: 'feat'
  },
  {
    emoji: '🎨',
    code: ':art:',
    description: 'Improving structure / format of the code.',
    name: 'style'
  },
  {
    emoji: '⚡️',
    code: ':zap:',
    description: 'Improving performance.',
    name: 'perf'
  },
  {
    emoji: '♻️',
    code: ':recycle:',
    description: 'Refactoring code.',
    name: 'refactor'
  },
  {
    emoji: '🐛',
    code: ':bug:',
    description: 'Fixing a bug.',
    name: 'fix'
  },
  {
    emoji: '✏️',
    code: ':pencil2:',
    description: 'Fixing typos.',
    name: 'typo'
  },
  {
    emoji: '📝',
    code: ':memo:',
    description: 'Writing docs.',
    name: 'docs'
  },
  {
    emoji: '💄',
    code: ':lipstick:',
    description: 'Updating the UI and style files.',
    name: 'ui'
  },
  {
    emoji: '🚸',
    code: ':children_crossing:',
    description: 'Improving user experience / usability.',
    name: 'ux'
  },
  {
    emoji: '🚧',
    code: ':construction:',
    description: 'Work in progress.',
    name: 'wip'
  },
  {
    emoji: '🚨',
    code: ':rotating_light:',
    description: 'Removing linter warnings.',
    name: 'lint'
  },
  {
    emoji: '✅',
    code: ':white_check_mark:',
    description: 'Adding tests.',
    name: 'test'
  },
  {
    emoji: '🔧',
    code: ':wrench:',
    description: 'Changing configuration files.',
    name: 'config'
  },
  {
    emoji: '👷',
    code: ':construction_worker:',
    description: 'Adding CI build system.',
    name: 'ci'
  },
  {
    emoji: '🚀',
    code: ':rocket:',
    description: 'Deploying stuff.',
    name: 'deploy'
  },
  {
    emoji: '🔖',
    code: ':bookmark:',
    description: 'Releasing / Version tags.',
    name: 'release'
  },
  {
    emoji: '🔥',
    code: ':fire:',
    description: 'Removing code or files.',
    name: 'prune'
  },
  {
    emoji: '⏪',
    code: ':rewind:',
    description: 'Reverting changes.',
    name: 'revert'
  },
  {
    emoji: '💥',
    code: ':boom:',
    description: 'Introducing breaking changes.',
    name: 'breaking'
  },
  {
    emoji: '🚚',
    code: ':truck:',
    description: 'Moving or renaming files.',
    name: 'mv'
  },
  {
    emoji: '📈',
    code: ':chart_with_upwards_trend:',
    description: 'Adding analytics or tracking code.',
    name: 'analytics'
  },
  {
    emoji: '💩',
    code: ':poop:',
    description: 'Writing bad code that needs to be improved.',
    name: 'poop'
  },
  {
    emoji: '🃏',
    code: ':black_joker:',
    description: 'Any other changes.',
    name: 'chore'
  }
]

export default choices
