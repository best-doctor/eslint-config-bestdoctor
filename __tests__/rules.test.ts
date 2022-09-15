import { ESLint } from 'eslint'
import { readdirSync } from 'fs'
import { join as pathJoin } from 'path'

const validateConfig = (config: string) => {
  const eslint = new ESLint({
    overrideConfigFile: config,
    useEslintrc: false,
    overrideConfig: {
      // should be set in project, not in lib
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  })
  return eslint.lintText('')
}

describe('Validate ESLint configs', () => {
  const RULES_PATH = pathJoin(process.cwd(), 'rules')
  readdirSync(RULES_PATH).forEach(file => {
    it(`load config ${file} in ESLint to validate all rules are correct`, async () => {
      const configPath = pathJoin(RULES_PATH, file)
      await expect(validateConfig(configPath)).resolves.toBeDefined()
    })
  })
})
