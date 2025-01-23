import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'eol-last': ['error', 'always'], // Uma linha em branco no final do arquivos
      'semi': ['error', 'never'], // Desativa ponto e vírgula no final
      'indent': ['error', 2], // Define indentação com 2 espaços
      'no-trailing-spaces': ['error'], // Evita espaços em branco no final das linhas
      'quotes': ['error', 'single', { 'allowTemplateLiterals': true }], // Força aspas simples nas importações
      'comma-dangle': ['error', 'always-multiline'], // Exige vírgula no final em listas e objetos com múltiplas linhas
    },
  },
)
