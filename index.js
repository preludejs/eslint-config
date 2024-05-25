// @ts-check

import * as EslintCompat from '@eslint/compat'
import * as EslintPluginImport from 'eslint-plugin-import'
import * as EslintPluginSonarjs from 'eslint-plugin-sonarjs'
import EslintJs from '@eslint/js'
import EslintPluginRegexp from 'eslint-plugin-regexp'
import TypescriptEslint from 'typescript-eslint'

export default [
  EslintJs.configs.recommended,
  {
    languageOptions: {
      parser: TypescriptEslint.parser,
      parserOptions: {
        project: './tsconfig.json'
      }
    }
  },
  ...TypescriptEslint.configs.strict,
  ...TypescriptEslint.configs.stylistic,
  ...EslintCompat.fixupConfigRules(EslintPluginImport.configs.typescript),
  EslintPluginRegexp.configs['flat/recommended'],
  EslintPluginSonarjs.configs.recommended,
  {
    rules: {
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/consistent-type-definitions': [ 'error', 'type' ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-dupe-class-members': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-loop-func': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-unnecessary-type-arguments': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-unused-vars': [ 'error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' } ],
      '@typescript-eslint/require-array-sort-compare': [ 'error', { ignoreStringArrays: true } ],
      '@typescript-eslint/strict-boolean-expressions': [ 'error', { allowString: true, allowNumber: false, allowNullableObject: true, allowNullableBoolean: true, allowNullableString: true, allowNullableNumber: false, allowAny: false } ],
      '@typescript-eslint/switch-exhaustiveness-check': 'error',
      'array-bracket-spacing': [ 'error', 'always' ],
      'array-callback-return': 'warn',
      'arrow-parens': [ 'error', 'as-needed' ],
      'block-spacing': [ 'error', 'always' ],
      'brace-style': [ 'error', '1tbs', { allowSingleLine: false } ],
      'comma-dangle': [ 'warn', 'never' ],
      'comma-spacing': 'error',
      'comma-style': 'error',
      'computed-property-spacing': [ 'error', 'never' ],
      'consistent-this': [ 'error', 'self' ],
      'curly': [ 'error', 'all' ],
      'default-case': 'error',
      'eol-last': [ 'error', 'always' ],
      'eqeqeq': [ 'error', 'always', { null: 'ignore' } ],
      'for-direction': 'error',
      'func-call-spacing': [ 'error', 'never' ],
      'indent': [ 'error', 2, { SwitchCase: 1, ignoredNodes: [ 'TemplateLiteral *' ] } ],
      'key-spacing': 'error',
      'keyword-spacing': 'error',
      'max-len': 'off',
      'new-cap': 'error',
      'no-buffer-constructor': 'error',
      'no-console': 'off',
      'no-constant-binary-expression': 'error',
      'no-constant-condition': [ 'error', { checkLoops: false } ],
      'no-lonely-if': 'error',
      'no-loop-func': 'error',
      'no-mixed-operators': 'error',
      'no-mixed-spaces-and-tabs': 'error',
      'no-multi-spaces': 'error',
      'no-new-require': 'error',
      'no-param-reassign': [ 'error', { props: true, ignorePropertyModificationsFor: [ 'ctx', 'acc', 'r' ], ignorePropertyModificationsForRegex: [ '^mutable', 'Ctx$', '^ref', 'Ref$' ] } ],
      'no-path-concat': 'error',
      'no-return-assign': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-shadow': 'error',
      'no-tabs': 'error',
      'no-template-curly-in-string': 'error',
      'no-throw-literal': 'error',
      'no-trailing-spaces': 'error',
      'no-undefined': 'off',
      'no-unneeded-ternary': [ 'error', { defaultAssignment: false } ],
      'no-unused-vars': 'off',
      'no-use-before-define': [ 'error', { functions: false, classes: true } ],
      'no-useless-constructor': 'error',
      'no-void': 'error',
      'object-curly-spacing': [ 'error', 'always' ],
      'object-shorthand': 'error',
      'prefer-const': 'warn',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'quotes': [ 'error', 'single' ],
      'radix': 'error',
      'regexp/no-super-linear-backtracking': 'error',
      'semi': [ 'error', 'never' ],
      'sonarjs/cognitive-complexity': 'warn',
      'sonarjs/no-duplicate-string': 'off',
      'sonarjs/no-nested-switch': 'warn',
      'sonarjs/no-small-switch': 'warn',
      'space-before-blocks': 'error',
      'space-before-function-paren': [ 'error', { anonymous: 'always', named: 'never', asyncArrow: 'always' } ],
      'space-in-parens': [ 'error', 'never' ],
      'space-infix-ops': 'error',
      'space-unary-ops': 'error',
      'spaced-comment': [ 'error', 'always', { markers: [ '/', ':', '::' ] } ],
      'yoda': [ 'error', 'never', { exceptRange: true } ]
    }
  }
]
