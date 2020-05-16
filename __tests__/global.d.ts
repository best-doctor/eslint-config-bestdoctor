declare module 'eslint' {
  export interface ESLintOptions {
    overrideConfigFile?: string
    useEslintrc?: boolean
  }

  export interface LintResult {
    filePath: string
    messages: LintMessage[]
    fixableErrorCount: number
    fixableWarningCount: number
    errorCount: number
    warningCount: number
    output: string | undefined
    source: string | undefined
    usedDeprecatedRules: DeprecatedRule[]
  }

  export interface LintMessage {
    ruleId: string
    severity: 1 | 2
    message: string
    line: number
    column: number
    endLine: number | undefined
    endColumn: number | undefined
    fix: EditInfo | undefined
    suggestions: Suggestion[] | undefined
  }

  export interface EditInfo {
    range: [number, number]
    test: string
  }

  export interface Suggestion {
    desc: string
    fix: EditInfo
  }

  export interface DeprecatedRule {
    ruleId: string
    replacedBy: string[]
  }

  export class ESLint {
    constructor(options?: ESLintOptions)
    lintText: (code: string) => Promise<LintResult[]>
  }
}
